'use client';

import { useTranslation } from '@/i18n/client'

export default function Client({ lng }: any) {
  const { t } = useTranslation(lng)

  return <h1>{t('title')}</h1>;
}
