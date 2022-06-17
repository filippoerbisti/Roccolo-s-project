import React from 'react';
import { client } from '../lib/client';
import Main from '../components/Main';

const Home = ({ ip, products }) => {

  console.log(ip)

  return (
    <div>
      <Main />

      {/* <HeroBanner heroBanner={bannerData.length && bannerData[0]} /> */}

      {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}

    </div>
  )
}

export const getServerSideProps = async ({ req }) => {

  let ip;
  if (req.headers["x-forwarded-for"]) {
    ip = req.headers["x-forwarded-for"].split(',')[0]
  } else if (req.headers["x-real-ip"]) {
    ip = req.connection.remoteAddress
  } else {
    ip = req.connection.remoteAddress
  }

  // const ip = req.headers['x-real-ip'] || req.connection.remoteAddress;

  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { ip, products }
  }
}

export default Home
