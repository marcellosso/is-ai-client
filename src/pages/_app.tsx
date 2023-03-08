import '../styles/globals.css';
import '../styles/alert-message.css';
import type { AppProps } from 'next/app';

import { DefaultSeo } from 'next-seo';
import DefaultSEOConfig from '../../next-seo.config';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...DefaultSEOConfig} />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
