import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import useTranslation from 'next-translate/useTranslation';

import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';

import styles from '../../styles/Product.module.css';
import marquee from '../../styles/Marquee.module.css';

const ProductDetails = ({ product, products }) => {
    const { t } = useTranslation('common');

    const { image, name, details, price } = product;
    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

    const handleBuyNow = () => {
        onAdd(product, qty);
        setShowCart(true);
    }

    return (
        <div>
            <div className={styles['product-detail-container']}>
                <div>
                    <div>
                        <img src={urlFor(image && image[index])} className={styles['product-detail-image']}/>
                    </div>
                    <div className={styles['small-images-container']}>
                        {image?.map((item, i) => (
                            <img
                                key={i}
                                src={urlFor(item)}
                                className={i === index ? `${styles['small-image']} ${styles['selected-image']}` : `${styles['small-image']}`}
                                onMouseEnter={() => setIndex(i)}
                            />
                        ))}
                    </div>
                </div>

                <div className={styles['product-detail-desc']}>
                    <h1>{name}</h1>
                    <div className={styles.reviews}>
                        <div>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p>(20)</p>
                    </div>
                    <h4>{t('details')}:</h4>
                    <p>{details}</p>
                    <p className={styles.price}>€{price}</p>
                    <div className={styles.quantity}>
                        <h3>{t('quantity')}:</h3>
                        <p className={styles['quantity-desc']}>
                            <span className={styles.minus} onClick={decQty}>
                                <AiOutlineMinus />
                            </span>
                            <span className={styles.num}>
                                {qty}
                            </span>
                            <span className={styles.plus} onClick={incQty}>
                                <AiOutlinePlus />
                            </span>
                        </p>
                    </div>
                    <div className={styles.buttons}>
                        <button 
                            type="button" 
                            className={styles['add-to-cart']} 
                            onClick={() => onAdd(product, qty)}
                        >
                            {t('addCart')}
                        </button>
                        <button 
                            type="button" 
                            className={styles['buy-now']} 
                            onClick={handleBuyNow}
                        >
                            {t('buyNow')}
                        </button>
                    </div>
                </div>
            </div>

            <div className={marquee['maylike-products-wrapper']}>
                <h2 className={styles.title}>{t('alsoLike')}</h2>
                <div className={marquee['marquee']}>
                    <div className={`${marquee['maylike-products-container']} ${marquee.track}`}>
                        {products.map((product) => (
                            <Product 
                                key={product._id} 
                                product={product} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug { 
             current 
        } 
    }`;

    const products = await client.fetch(query);

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]';

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
  
    return {
      props: { product, products }
    }
}

export default ProductDetails