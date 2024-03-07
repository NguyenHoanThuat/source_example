import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext'

import Client from './client';

import { useTranslation } from '@/i18n';
import { languages } from '@/i18n/settings';

type ParamsType = {
  lng: string;
}

export default async function Home({ params: { lng } }: { params: ParamsType }) {
  const { t }: any = await useTranslation(lng);
  return (
    <>
      <Trans i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{lng}</strong> to:{' '}
      </Trans>
      {languages.filter((language: string) => lng !== language).map((language, index) => {
        return (
          <span key={language}>
            {index > 0 && (' or ')}
            <Link href={`/${language}`}>
              {language}
            </Link>
          </span>
        )
      })}
      <Client lng={lng} />
      <h1>{t('title')}</h1>
      <Link href={`/${lng}/sessions`}>
        sessions page
      </Link>
    </>
  );
}
