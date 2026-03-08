"use client";

import { useLanguage } from '@/providers/LanguageProvider';


export const Contact = () => {
  const { t } = useLanguage();

  return (
    <div>{t('contact.title')}</div>
  )
}
