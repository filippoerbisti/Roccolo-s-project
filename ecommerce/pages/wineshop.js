import React from 'react';
import { client } from '../lib/client';
import { Product, WineShop } from '../components';
import useTranslation from 'next-translate/useTranslation';

import styles from '../styles/WineShop.module.css';

const Wineshop = ({ products }) => {
  const { t } = useTranslation('wineshop');

  return (
    <div>
      <WineShop />

      <hr className={styles.hr} />

      <div className='maylike-products-wrapper'>
        <h2>{t('ourWines')}</h2>
        <div className='marquee'>
          <div className='maylike-products-container track'>
            {products.map((product) => (
              <Product key={product._id} 
                product={product} />
            ))}
          </div>
        </div>
      </div>
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

export default Wineshop