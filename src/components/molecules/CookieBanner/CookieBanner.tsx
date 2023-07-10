import { useTranslation } from 'next-i18next';
import { useEffect } from 'react';
import useCookieConsent from '@/hooks/useCookieConsent';
import { Table, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

export function CookieBanner() {
  const { t } = useTranslation('common');
  const { hasConsent, acceptCookies, loading } = useCookieConsent();

  const openCookiesModal = () =>
    modals.openConfirmModal({
      title: t('cookie.banner.title'),
      children: <Text size="sm">{t('cookie.banner.message')}</Text>,
      labels: {
        cancel: t('commons.btnActions.otherInfo'),
        confirm: t('commons.btnActions.accept'),
      },
      closeOnCancel: false,
      onConfirm: acceptCookies,
      onCancel: () =>
        modals.openConfirmModal({
          title: t('cookie.otherInformation.title'),
          children: (
            <>
              <Text weight={500}>
                {t('cookie.otherInformation.paragraph.0.title')}
              </Text>
              <Text size="sm" color="dimmed">
                {t('cookie.otherInformation.paragraph.0.description')}
              </Text>
              <Table>
                <thead>
                  <tr>
                    <th>cookie</th>
                    <th>{t('commons.description')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {t('cookie.otherInformation.paragraph.0.table.0_value')}
                    </td>
                    <td>
                      {t(
                        'cookie.otherInformation.paragraph.0.table.0_description',
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {t('cookie.otherInformation.paragraph.0.table.1_value')}
                    </td>
                    <td>
                      {t(
                        'cookie.otherInformation.paragraph.0.table.1_description',
                      )}
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Text weight={500}>
                {t('cookie.otherInformation.paragraph.1.title')}
              </Text>
              <Text size="sm" color="dimmed">
                {t('cookie.otherInformation.paragraph.1.description')}
              </Text>
              <Table>
                <thead>
                  <tr>
                    <th>cookie</th>
                    <th>{t('commons.description')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {t('cookie.otherInformation.paragraph.1.table.0_value')}
                    </td>
                    <td>
                      {t(
                        'cookie.otherInformation.paragraph.1.table.0_description',
                      )}
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Text weight={500}>
                {t('cookie.otherInformation.paragraph.2.title')}
              </Text>
              <Text size="sm" color="dimmed">
                {t('cookie.otherInformation.paragraph.2.description')}
              </Text>
            </>
          ),
          labels: {
            cancel: t('commons.btnActions.back'),
            confirm: t('commons.btnActions.accept'),
          },
          onConfirm: () => {
            acceptCookies();
            modals.closeAll();
          },        
        }),
    });

  useEffect(() => {
    if (!loading && !hasConsent) {
      // Check if user has already opened cookies modal
      openCookiesModal();
    }
  }, [loading, hasConsent]);

  return null;
}
