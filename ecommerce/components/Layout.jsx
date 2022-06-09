import React from 'react';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Layout = ({ children }) => {
  const { t } = useTranslation('common');

  return (
    <div>
      <Head>
        <title>Roccolo del Lago - {t('navContact')}</title>
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