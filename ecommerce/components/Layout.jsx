import React from 'react';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Layout = ({ children }) => {
  const { t } = useTranslation('meta');

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1" />
        <meta name="author" content={t('author')} />
        <meta name="keywords" content={t('keywords')} />
        <meta name="description" content={t('description')} />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />

        <title>Roccolo del Lago - {t('title')}</title>
      </Head>
      <div>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>
        <ScrollToTop />
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
      </div>
    </div>
  )
}

export default Layout