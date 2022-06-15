import React from 'react';
import { client } from '../lib/client';
import Main from '../components/Main';

const Home = ({ products }) => {

  return (
    <div>
      <Main />
      {/* <HeroBanner heroBanner={bannerData.length && bannerData[0]} /> */}

      {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}

    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products }
  }
}

export default Home
