import React from 'react';
import { client } from '../lib/client';
import { Product } from '../components';

const Wine = ({ products }) => {
  return (
        <div>
            <div className="products-heading">
                <h2>Best Selling Products</h2>
                <p>Try all our wine!</p>
            </div>

            <div className="products-container">
                {products?.map((product) => <Product key={product._id} product={product} />)}
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