import React, { useState, useMemo } from 'react';
import { client } from '../lib/client';
import { Product, Pagination } from '../components';
import useTranslation from 'next-translate/useTranslation';

import styles from '../styles/Product.module.css';

const Wine = ({ products, countProducts }) => {
    
    const { t } = useTranslation('common');

    const [selectedCategory, setSelectedCategory] = useState('All');

    // let PageSize = 0;
    // const [currentPage, setCurrentPage] = useState(1);

    // const currentTableData = useMemo(() => {
    //   const firstPageIndex = (currentPage - 1) * PageSize;
    //   const lastPageIndex = firstPageIndex + PageSize;
    //   return products.slice(firstPageIndex, lastPageIndex);
    // }, [currentPage]);

    return (
        <div className={styles.mx20}>
            <h1 className={styles.title}>{t('ourWines')}</h1>
            <p className={styles.title}>!!! THIS IS A DEMO, Don't Buy Anything !!!</p>

            <style jsx="true">
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
                    onChange={(e) => {
                        setSelectedCategory(e.target.value);
                    }}
                >
                    <option value={'All'}>{t('all')}</option>
                    <option value={'Vini Spumanti'}>{t('sparklingWines')}</option>
                    <option value={'Vini Bianchi'}>{t('whiteWines')}</option>
                    <option value={'Vini Rosati'}>{t('roseWines')}</option>
                    <option value={'Vini Rossi'}>{t('redWines')}</option>
                    <option value={'Vini da Dessert'}>{t('dessertWines')}</option>
                    <option value={'Grappa'}>{t('grappa')}</option>
                    <option value={'Olio'}>{t('oil')}</option>
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
                {products != 'All' && 
                    <>
                        {products?.filter(c => c.category == selectedCategory).map((product) => 
                            <div className={styles.py} key={product._id}>
                                <Product product={product} />
                            </div>
                        )}
                    </>
                }
                {/* <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={products.length}
                    pageSize={PageSize}
                    onPageChange={page => setCurrentPage(page)}
                /> */}
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
    var countProducts = 0;
    for(var product in products) {
        if(products.hasOwnProperty(product))
            ++countProducts;
    }
  
    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);
  
    return {
      props: { products, bannerData, countProducts }
    }
}

export default Wine