import React from 'react';
import Link from 'next/link';
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';
import useTranslation from 'next-translate/useTranslation';

const Home = ({ products, bannerData }) => {
  const { t } = useTranslation('common');

  return (
    <div>
      
      {/* <HeroBanner heroBanner={bannerData.length && bannerData[0]} /> */}

      <Link href="/wine">
        <button>
          {t('viewAllWine')}
        </button>
      </Link>

      {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}

    </div>
  )
}

// export const getServerSideProps = async () => {
//   const query = '*[_type == "product"]';
//   const products = await client.fetch(query);

//   const bannerQuery = '*[_type == "banner"]';
//   const bannerData = await client.fetch(bannerQuery);

//   return {
//     props: { products, bannerData }
//   }
// }

export default Home
