import React from 'react';
import Link from 'next/link';
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => {
  return (
    <div>
      {/* <HeroBanner heroBanner={bannerData.length && bannerData[0]} /> */}

      <Link href="/wine">
        <button>
          VEDI TUTTI I VINI
        </button>
      </Link>

      {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}

    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home
