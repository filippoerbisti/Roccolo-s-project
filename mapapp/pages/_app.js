import Script from 'next/script';

import { Layout } from '../components';
import '../styles/globals.css'
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>

      {/* Font Awesome */}
      <Script src="https://kit.fontawesome.com/60aa6b5946.js" crossOrigin="anonymous"></Script>
    </StateContext>
  )
}

export default MyApp
