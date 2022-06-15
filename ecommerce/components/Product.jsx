import React from 'react';
import Link from 'next/link';

import styles from '../styles/Product.module.css';
import { urlFor } from '../lib/client';

const Product = ({ 
    product: {
      image,
      name,
      slug,
      price
    } 
}) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className={styles['product-card']}>
          <img 
            src={urlFor(image && image[0])} 
            alt="product_img" 
            objectFit="cover"
            className={styles['product-image']}
          />
          <p className={styles['product-name']}>{name}</p>
          <p className={styles['product-price']}>€{price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product