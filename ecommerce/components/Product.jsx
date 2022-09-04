import React from 'react';
import Link from 'next/link';

import styles from '../styles/Product.module.css';
import { urlFor } from '../lib/client';
import { useStateContext } from '../context/StateContext';

const Product = ({ product}) => {

  const { image, name, price, slug } = product;

  const { qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  }
  
  return (
    <div>
      <Link 
        href={{
          pathname: '/product/[slug]',
          query: { slug: slug.current }
        }}
      >
        <div className={styles.card} data-text={name}>
          <div className={styles.imgBox}>
            {/* <img 
              src={urlFor(image && image[0])} 
              alt="product_img" 
              objectfit="cover"
              className={styles['product-image']}
            /> */}
          </div>
          <div className={styles.contentBox}>
              <h2>{name}</h2>
              <div className={styles.priceBox}>
                  <h3>Price:
                    <span> {price} €</span>
                  </h3>
              </div>
              <button className={styles.btn} onClick={handleBuyNow}>Buy Now</button>
          </div>
        </div>


      {/* Other style for product card (recommended to keep the current style) */}
        {/* <div className={styles['product-card']}>
          <div className={styles['product-flex']}>
            <img 
              src={urlFor(image && image[0])} 
              alt="product_img" 
              objectfit="cover"
              className={styles['product-image']}
            />
          </div>
          <p className={styles['product-name']}>{name}</p>
          <p className={styles['product-price']}>
            <span>€ {price}</span>
          </p>
        </div> */}

      </Link>
    </div>
  )
}

export default Product