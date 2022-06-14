import React from 'react'; // To import to use .jsx
import { Toaster } from 'react-hot-toast';

import { Layout } from '../components';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
      <script src="https://kit.fontawesome.com/60aa6b5946.js" crossOrigin="anonymous"></script>
    </StateContext>
  )
}

export default MyApp
