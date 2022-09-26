import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

import { Navbar, NoAuthPeriod } from './';
import { useAuth } from '../context/AuthContext';

const Layout = ({ children }) => {
  const { t } = useTranslation('meta');

  const { user } = useAuth();
  const { authorizedDates } = useAuth()
  const [isAuthPeriod, setIsAuthPeriod] = useState(false);

  useEffect(() => {
    if (authorizedDates) {
      var start = new Date(authorizedDates.start_date.toDate());
      var end = new Date(authorizedDates.end_date.toDate());
      var today = new Date();
      if (today >= start && today <= end)
        setIsAuthPeriod(true);
    }
  }, [isAuthPeriod]);
  
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
      
      <div className='main'>
        <header>
          {isAuthPeriod && user &&
            <Navbar />
          }
        </header>
        <main>
          {!isAuthPeriod &&
            <NoAuthPeriod />
          }

          {isAuthPeriod && 
            children
          }
        </main>
      </div>
    </div>
  )
}

export default Layout