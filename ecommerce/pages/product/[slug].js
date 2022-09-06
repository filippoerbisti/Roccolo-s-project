import React, { useState, useEffect } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import useTranslation from 'next-translate/useTranslation';
import Collapsible from 'react-collapsible';

import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';

import styles from '../../styles/Product.module.css';
import marquee from '../../styles/Marquee.module.css';

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      if (typeof window !== 'undefined') {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []);
    return windowSize;
}

const ProductDetails = ({ product, products }) => {

    let mobile;
    const mobileWidth = '1025';
    const size = useWindowSize();
    if (size.width <= mobileWidth)
        mobile = true;
    else
        mobile = false;

    const { t } = useTranslation('product');
    const space = " ";

    const { image, name, price, detailRegione, detailVigneto, detailUve, detailFruttaio, detailVinificazione, detailAffinamento, detailNoteGustative, detailAnalisi, detailGastronomia, detailBottiglia, detailsBio } = product;
    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

    const handleBuyNow = () => {
        onAdd(product, qty);
        setShowCart(true);
    }

    return (
        <div>
            <div className={styles.container}>
            <h1>!!! THIS IS A DEMO, Don't Buy Anything !!!</h1>
                <div className={styles['product-detail-container']}>
                    <div className={`${styles.w50} ${styles.fxCenter}`}>
                        <div className={styles['product-detail-box']}>
                            <img src={urlFor(image && image[index])} className={styles['product-detail-image']}/>
                        </div>
                        <div className={styles['small-images-container']}>
                            {image?.map((item, i) => (
                                <img
                                    key={i}
                                    src={urlFor(item).url()}
                                    className={styles['small-image']}
                                    onMouseEnter={() => setIndex(i)}
                                />
                            ))}
                        </div>
                        <div className={styles.buttonForPc}>
                            {/* necessary for rounding and / or to add decimals to the value -> in this case 2 == toFixed(2) */}
                            <p className={styles.price}>{price.toFixed(2)} €</p>
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

                    <div className={`${styles['product-detail-desc']} ${styles.w50}`}>
                        <h1 className={styles['product-title']}>{name}</h1>
                        {/* <div className={styles.reviews}>
                            <div>
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiOutlineStar />
                            </div>
                        </div> */}
                        {/* Detail for Pc */}
                        {!mobile &&
                            <div>
                                <h3 className={styles.center}>{t('details').toUpperCase()}</h3>
                                {/* Check for each detail section if it is valued */}
                                {detailRegione != null && detailRegione != "" &&
                                    <p>
                                        <span className={styles.details}>{t('detailRegione').toUpperCase()}: {space}</span>
                                        {detailRegione}
                                    </p>
                                }
                                {detailVigneto != null && detailVigneto != "" &&
                                    <p>
                                        <span className={styles.details}>{t('detailVigneto').toUpperCase()}: {space}</span>
                                        {detailVigneto}
                                    </p>
                                }
                                {detailUve != null && detailUve != "" &&
                                    <p>
                                        <span className={styles.details}>{t('detailUve').toUpperCase()}: {space}</span>
                                        {detailUve}
                                    </p>
                                }
                                {detailFruttaio != null && detailFruttaio != "" &&
                                    <p>
                                        <span className={styles.details}>{t('detailFruttaio').toUpperCase()}: {space}</span>
                                        {detailFruttaio}
                                    </p>
                                }
                                {detailVinificazione != null && detailVinificazione != "" &&
                                    <p>
                                        <span className={styles.details}>{t('detailVinificazione').toUpperCase()}: {space}</span>
                                        {detailVinificazione}
                                    </p>
                                }
                                {detailAffinamento != null && detailAffinamento != "" &&
                                    <p>
                                        <span className={styles.details}>{t('detailAffinamento').toUpperCase()}: {space}</span>
                                        {detailAffinamento}
                                    </p>
                                }
                                {detailNoteGustative != null && detailNoteGustative != "" &&
                                    <p>
                                        <span className={styles.details}>{t('detailNoteGustative').toUpperCase()}: {space}</span>
                                        {detailNoteGustative}
                                    </p>
                                }
                                {detailAnalisi != null && detailAnalisi != "" &&
                                    <p>
                                        <span className={styles.details}>{t('detailAnalisi').toUpperCase()}: {space}</span>
                                        {detailAnalisi}
                                    </p>
                                }
                                {detailGastronomia != null && detailGastronomia != "" &&
                                <p>
                                    <span className={styles.details}>{t('detailGastronomia').toUpperCase()}: {space}</span>
                                    {detailGastronomia}
                                </p>
                                }
                                {detailBottiglia != null && detailBottiglia != "" &&
                                    <p>
                                        <span className={styles.details}>{t('detailBottiglia').toUpperCase()}: {space}</span>
                                        {detailBottiglia}
                                    </p>
                                }
                            </div>
                        }
                        {/* Detail for mobile -> collapse panel */}
                        {mobile &&
                            <div className={styles.panel}>
                                <Collapsible 
                                    trigger="Clicca qui per maggiori dettagli"
                                    triggerWhenOpen="X (chiudi)"
                                >
    
                                    <div>
                                        <h3 className={styles.center}>{t('details').toUpperCase()}</h3>
                                        {/* Check for each detail section if it is valued */}
                                        {detailRegione != null && detailRegione != "" &&
                                            <p>
                                                <span className={styles.details}>{t('detailRegione').toUpperCase()}: {space}</span>
                                                {detailRegione}
                                            </p>
                                        }
                                        {detailVigneto != null && detailVigneto != "" &&
                                            <p>
                                                <span className={styles.details}>{t('detailVigneto').toUpperCase()}: {space}</span>
                                                {detailVigneto}
                                            </p>
                                        }
                                        {detailUve != null && detailUve != "" &&
                                            <p>
                                                <span className={styles.details}>{t('detailUve').toUpperCase()}: {space}</span>
                                                {detailUve}
                                            </p>
                                        }
                                        {detailFruttaio != null && detailFruttaio != "" &&
                                            <p>
                                                <span className={styles.details}>{t('detailFruttaio').toUpperCase()}: {space}</span>
                                                {detailFruttaio}
                                            </p>
                                        }
                                        {detailVinificazione != null && detailVinificazione != "" &&
                                            <p>
                                                <span className={styles.details}>{t('detailVinificazione').toUpperCase()}: {space}</span>
                                                {detailVinificazione}
                                            </p>
                                        }
                                        {detailAffinamento != null && detailAffinamento != "" &&
                                            <p>
                                                <span className={styles.details}>{t('detailAffinamento').toUpperCase()}: {space}</span>
                                                {detailAffinamento}
                                            </p>
                                        }
                                        {detailNoteGustative != null && detailNoteGustative != "" &&
                                            <p>
                                                <span className={styles.details}>{t('detailNoteGustative').toUpperCase()}: {space}</span>
                                                {detailNoteGustative}
                                            </p>
                                        }
                                        {detailAnalisi != null && detailAnalisi != "" &&
                                            <p>
                                                <span className={styles.details}>{t('detailAnalisi').toUpperCase()}: {space}</span>
                                                {detailAnalisi}
                                            </p>
                                        }
                                        {detailGastronomia != null && detailGastronomia != "" &&
                                        <p>
                                            <span className={styles.details}>{t('detailGastronomia').toUpperCase()}: {space}</span>
                                            {detailGastronomia}
                                        </p>
                                        }
                                        {detailBottiglia != null && detailBottiglia != "" &&
                                            <p>
                                                <span className={styles.details}>{t('detailBottiglia').toUpperCase()}: {space}</span>
                                                {detailBottiglia}
                                            </p>
                                        }
                                    </div>
                                </Collapsible>
                            </div>
                        }

                        <div className={styles.buttonForMobile}>
                            <p className={styles.price}>{price} €</p>
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
                </div>
            </div>

            <div className={marquee['maylike-products-wrapper']}>
                <h2 className={styles.marqueeTitle}>{t('alsoLike')}</h2>
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