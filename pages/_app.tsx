import React from 'react';
import 'styles/globals.scss';
import Head from 'next/head';
import Navbar from 'components/Navbar';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>WOWMEN WEBSITE</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
