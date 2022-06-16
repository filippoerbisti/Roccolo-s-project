import React from 'react';
import { client } from '../lib/client';
import { Product } from '../components';
import useTranslation from 'next-translate/useTranslation';

import styles from '../styles/Product.module.css';

const Wine = ({ products }) => {
    const { t } = useTranslation('common');

    return (
        <div className={styles.mx20}>
            <h1 className={styles.title}>{t('ourWines')}</h1>

            <div className={styles['products-container']}>
                    {products?.map((product) => 
                    <div className={styles.py} key={product._id}>
                        <Product product={product} />
                    </div>
                    )}
            </div>
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

export default Wine