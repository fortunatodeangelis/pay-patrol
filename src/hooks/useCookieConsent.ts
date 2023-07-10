import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const useCookieConsent = () => {
  const [hasConsent, setHasConsent] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const consentCookie = Cookies.get('cookie-consent');
    setHasConsent(!!consentCookie);
    setLoading(false);
  }, []);

  const acceptCookies = async () => {
    await Cookies.set('cookie-consent', 'true', { expires: 365 }); // expires after 1 year
    setHasConsent(true);
  };

  return { hasConsent, acceptCookies, loading };
};

export default useCookieConsent;
