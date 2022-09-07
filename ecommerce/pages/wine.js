import React, { useState, useEffect } from 'react';
import { client } from '../lib/client';
import { Product } from '../components';
import useTranslation from 'next-translate/useTranslation';

import styles from '../styles/Product.module.css';

const Wine = ({ products }) => {
    
    const { t } = useTranslation('common');

    const [selectedCategory, setSelectedCategory] = useState('All');

    return (
        <div className={styles.mx20}>
            <h1 className={styles.title}>{t('ourWines')}</h1>
            <p className={styles.title}>!!! THIS IS A DEMO, Don't Buy Anything !!!</p>

            <style jsx>
                {`
                    .selectCenter {
                        text-align: center;
                        margin-bottom: 20px
                    }
                    .selectCenter select {
                        width: 300px;
                        height: 40px;
                        font-size: 18px;
                        padding: 0 10px;
                    }
                    .result {
                        padding-top: 20px;
                    }
                `}
            </style>
            <div className='selectCenter'>
                <select 
                    value={selectedCategory}
                    defaultValue={'All'}
                    onChange={(e) => {
                        setSelectedCategory(e.target.value);
                    }}
                >
                    <option value={'All'}>All</option>
                    <option value={'Vini Spumanti'}>{'Vini Spumanti'}</option>
                    <option value={'Vini Bianchi'}>{'Vini Bianchi'}</option>
                    <option value={'Vini Rosati'}>{'Vini Rosati'}</option>
                    <option value={'Vini Rossi'}>{'Vini Rossi'}</option>
                    <option value={'Vini da Dessert'}>{'Vini da Dessert'}</option>
                    <option value={'Grappa'}>{'Grappa'}</option>
                    <option value={'Olio'}>{'Olio'}</option>
                </select>
            </div>

            <div className={styles['products-container']}>
                {/* All products */}
                {selectedCategory == 'All' && 
                    <>
                        {products?.map((product) => 
                            <div className={styles.py} key={product._id}>
                                <Product product={product} />
                            </div>
                        )}
                    </>
                }
                {/* Product filtered by Category */}
                {selectedCategory != 'All' && 
                    <>
                    
                        {products?.filter(c => c.category == selectedCategory).map((product) => 
                            <div className={styles.py} key={product._id}>
                                <Product product={product} />
                            </div>
                        )}
                    </>
                }
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