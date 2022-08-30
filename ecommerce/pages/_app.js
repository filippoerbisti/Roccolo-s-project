import React, { useEffect } from 'react'; // To import to use .jsx
import { Toaster } from 'react-hot-toast';
import Script from 'next/script';
import Link from "next/link";
import useTranslation from 'next-translate/useTranslation';
import CookieConsent, { Cookies, getCookieConsentValue  } from "react-cookie-consent"; // Cookies
import { useRouter } from 'next/router';

import { Layout } from '../components';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';
import * as gtag from '../lib/gtag';

function MyApp({ Component, pageProps }) {

  const { t } = useTranslation('common');

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events]);

  const cookieName = "RoccoloCookieConsent";
  const isSetCookie = getCookieConsentValue(cookieName);

  return (
    <StateContext>
      <Layout>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <Toaster />
        <Component {...pageProps} />

        {/* https://www.npmjs.com/package/react-cookie-consent
            If isSetCookie = true, cookie bar not appear, else if isSetCookie = false cookie bar appear */}
        {!isSetCookie && (
          <CookieConsent
            location="bottom"
            buttonText={t('cookieBtn')}
            cookieName={cookieName}
            style={{ 
              background: "#2B373B", 
              display: "flex", 
              alignItems: 'end',
              justifyContent: 'end',
              fontSize: "14px",
              paddingRight: "10px",
              padding: "5px"
            }}
            buttonStyle={{ 
              padding: '10px',
              margin: '-10px 5px 5px 0',
              cursor: "pointer",
              color: "#fff", 
              backgroundColor: "#892331",
              fontSize: "14px"
            }}
            overlay
            expires={30} // 30 days before expired
            debug={true} // To show bar
            onAccept={() => {
              console.log(getCookieConsentValue(cookieName));
            }}
            // onAccept={(acceptedByScrolling) => {
            //   if (acceptedByScrolling) {
            //     // triggered if user scrolls past threshold
            //     console.log("Accept was triggered by user scrolling");
            //   } else {
            //     console.log("Accept was triggered by clicking the Accept button");
            //   }
            //   console.log(getCookieConsentValue(cookieName));
            // }}
            // acceptOnScroll
            // acceptOnScrollPercentage={80}
          >
            <p>
              {t('cookieText')} - <Link href="/privacy-policy"><a style={{ textDecoration: "underline", cursor: "pointer"}}>Privacy/Policy</a></Link>
            </p>
          </CookieConsent>
        )}
      </Layout>

      {/* Font Awesome */}
      <Script src="https://kit.fontawesome.com/60aa6b5946.js" crossOrigin="anonymous"></Script>

    </StateContext>
  )
}

export default MyApp
