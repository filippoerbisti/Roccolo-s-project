import React from 'react'; // To import to use .jsx
import { Toaster } from 'react-hot-toast';
import Script from 'next/script';
import CookieConsent, { Cookies } from "react-cookie-consent"; // Cookies

import { Layout } from '../components';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  Cookies.set("test", "nice");

  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
        <CookieConsent
          location="bottom"
          buttonText="Ho capito!"
          cookieName="RoccoloCookie"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
          onAccept={(acceptedByScrolling) => {
            if (acceptedByScrolling) {
              // triggered if user scrolls past threshold
              console.log("Accept was triggered by user scrolling");
            } else {
              console.log("Accept was triggered by clicking the Accept button");
            }
          }}
          debug={true}
          acceptOnScroll
          acceptOnScrollPercentage={80}
        >
          This website uses cookies to enhance the user experience.{" "}
        </CookieConsent>
      </Layout>
      <Script src="https://kit.fontawesome.com/60aa6b5946.js" crossOrigin="anonymous"></Script>
    </StateContext>
  )
}

export default MyApp
