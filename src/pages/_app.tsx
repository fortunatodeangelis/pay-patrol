import { themeConfig } from '@/utils';
import { RouterTransition } from '@/components/atom/';
import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ModalsProvider } from '@mantine/modals';

export function App({ Component, pageProps }: AppProps) {
  // Add mantine theme provider here
  return (
    <MantineProvider theme={themeConfig}>
      <ModalsProvider>
        <RouterTransition />
        <Component {...pageProps} />
      </ModalsProvider>
    </MantineProvider>
  );
}

export default appWithTranslation(App);
