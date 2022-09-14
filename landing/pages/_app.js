import '../styles/globals.css';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      
    </StateContext>
  )
}

export default MyApp
