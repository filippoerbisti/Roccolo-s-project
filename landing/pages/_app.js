import '../styles/globals.css';
import Script from 'next/script';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    // <StateContext>
      <Layout>
        <Component {...pageProps} />

        {/* Font Awesome */}
        <Script src="https://kit.fontawesome.com/60aa6b5946.js" crossOrigin="anonymous"></Script>
      </Layout>
      
    // </StateContext>
  )
}

export default MyApp
