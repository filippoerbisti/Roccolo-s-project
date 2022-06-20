import React from 'react';
import { client } from '../lib/client';
import Main from '../components/Main';
import DeviceDetector from "device-detector-js";

const Home = ({ ip, products }) => {

  const deviceDetector = new DeviceDetector();
  const userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36";
  const device = deviceDetector.parse(userAgent);

  console.dir(device, ip);

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

  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { ip, products }
  }
}

export default Home
