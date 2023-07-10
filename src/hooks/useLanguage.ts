import { useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import Cookies from 'js-cookie';

export const useLanguage = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const langCookie = Cookies.get('language');
    if (langCookie) {
      i18n.changeLanguage(langCookie);
    }
  }, [i18n]);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    Cookies.set('language', lang);
  };

  return {
    changeLanguage,
    currentLanguage: i18n.language,
  };
};
