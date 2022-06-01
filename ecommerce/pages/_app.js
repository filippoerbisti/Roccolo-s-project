import React from 'react'; // To import to use .jsx
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
