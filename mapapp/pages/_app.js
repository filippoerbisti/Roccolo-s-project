import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { Toaster } from 'react-hot-toast';

import { Layout, Loader } from '../components';
import '../styles/globals.css'
import { AuthContextProvider } from '../context/AuthContext';
import ProtectedRoute from '../components/ProtectedRoute';

const noAuthRequired = ['/', '/signup'];

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [isLoaded, setIsLoaded] = useState(false);    

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 1000)
  }, [isLoaded]);

  return (
    <AuthContextProvider>
      
      {isLoaded &&
        <Layout>
          {noAuthRequired.includes(router.pathname) ? (
            <>
              <Toaster />
              <Component {...pageProps} />
            </>
          ) : (
            <ProtectedRoute>
              <Toaster />
              <Component {...pageProps} />
            </ProtectedRoute>
          )}
        </Layout>
      }

      {!isLoaded && 
        <Layout>
          <Loader />
        </Layout>
      }

      {/* Font Awesome */}
      <Script src="https://kit.fontawesome.com/60aa6b5946.js" crossOrigin="anonymous"></Script>
    </AuthContextProvider>
  )
}

export default MyApp
