import Head from 'next/head';
import {
  HeroHome,
  FeaturesCards,
  FooterNavigation,
  HeaderNavigation,
} from '@/components/organism';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { CookieBanner } from '@/components/molecules';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(locale ? await serverSideTranslations(locale, ['common']) : {}),
    },
  };
};

export default function Terms() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CookieBanner />
      <HeaderNavigation />
      <HeroHome />
      <FeaturesCards />
      <FooterNavigation />
    </>
  );
}
