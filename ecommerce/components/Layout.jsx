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
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content={t('navContact')} /> {/* TODO */}
        <meta name="description" content={t('sium')} /> {/* TODO */}
        <meta name="author" content="Filippo Erbisti" />

        <title>Roccolo del Lago - {t('sium')}</title>

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