import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import BottomNav from './BottomNav';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>ROCCOLO DEL GARDA WINE SHOP</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>
        <ScrollToTop />
        {children}
        <BottomNav />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout