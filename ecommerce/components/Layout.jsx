import React from 'react';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Layout = ({ children }) => {
  const { t } = useTranslation('meta');

  if (typeof window !== 'undefined') {
    // progressbar
    let progress = document.getElementById('progressbar');
    window.onscroll = function() {
      let totalHeight = document.body.scrollHeight - window.innerHeight;
      let progressHeight = (window.scrollY / totalHeight) * 100;
      progress.style.height = progressHeight + "%";
    }
  }

  return (
    <div>
      <Head>
        {/* Primary Meta Tags  */}
        <title>{t('title')}</title>
        <meta name="title" content={t('title')} />

        <meta charSet="UTF-8" />

        <meta name="robots" content="index, follow"/>
        <meta name="description" content={t('description')} />
        <meta name="author" content={t('author')} />
        <meta name="keywords" content={t('keywords')} />

        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />

        {/* Open Graph Tags */}
        <meta property="og:title" content={t('title')} />
        <meta property="og:site_name" data-page-subject="true" content={t('title')} />
        <meta property="og:url" content="https://roccolodellago.vercel.app" />
        <meta property="og:description" name="description" content={t('description')} />
        <meta property="og:image" content="https://roccolodellago.vercel.app/logo.png" />

        {/* Twitter Tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://roccolodellago.vercel.app" />
        <meta name="twitter:image" content="https://roccolodellago.vercel.app/logo.png" />
        <meta name="twitter:title" content={t('title')} />
        <meta name="twitter:description" content={t('description')} />
      </Head>
      
      <div>
        <header>
          <Navbar />
        </header>
        <main className='main-container'>
          <div id='progressbar'></div>
          <div id='scrollPath'></div>
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