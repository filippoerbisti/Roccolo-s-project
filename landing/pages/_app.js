import React, { useEffect } from 'react';
import Link from "next/link";
import Script from 'next/script';
import useTranslation from 'next-translate/useTranslation';
import CookieConsent, { getCookieConsentValue  } from "react-cookie-consent"; // Cookies

import '../styles/globals.css';
import { Layout } from '../components';


function MyApp({ Component, pageProps }) {
  const { t } = useTranslation('common');

  const cookieName = "RoccoloCookieConsent";
  const isSetCookie = getCookieConsentValue(cookieName);

  return (
    // <StateContext>
      <Layout>
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

        {/* Font Awesome */}
        <Script src="https://kit.fontawesome.com/60aa6b5946.js" crossOrigin="anonymous"></Script>
      </Layout>
      
    // </StateContext>
  )
}

export default MyApp
