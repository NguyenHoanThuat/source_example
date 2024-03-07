import acceptLanguage from 'accept-language'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { fallbackLng, languages, cookieName } from '@/i18n/settings'

export function middleware(request: NextRequest) {
  let lng
  if (request.cookies.has(cookieName)) {
    acceptLanguage.languages(languages);
    lng = acceptLanguage.get(request.cookies.get(cookieName)?.value)
  }
  if (!lng) lng = acceptLanguage.get(request.headers.get('Accept-Language'))
  if (!lng) lng = fallbackLng
  const pathname = request.nextUrl.pathname;

  // Redirect if lng in path is not supported
  if (
    !languages.some(language => pathname.startsWith(`/${language}`)) &&
    !pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(new URL(`/${lng}${pathname}`, request.url))
  }

  return NextResponse.next()
}
