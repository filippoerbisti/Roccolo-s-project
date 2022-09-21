import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { Product, Slider } from '../components';

import styles from '../styles/Main.module.css';
import marquee from '../styles/Marquee.module.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

const ReadMore = ({ children }) => {
  const text = children;

  const { t } = useTranslation('common');

  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <span>
      {isReadMore ? text.slice(0, 400) : text}
      
      {text.length >= 400 && (
        <span onClick={toggleReadMore} className='showMore'>
          {isReadMore ? `${t('readMore')}` : `${t('showLess')}`}
        </span>
      )}
    </span>
  )
}

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

const Main = ({ products }) => {
  const { t } = useTranslation('home');

  const mobileWidth = '900';
  const smallPcWidth = '1250';
  const size = useWindowSize();
  let n = 1;
  if (size.width <= mobileWidth){
    n = 1;
  } else if (size.width > mobileWidth && size.width <= smallPcWidth) {
    n = 2;
  } else {
    n = 3;
  }

  const pWineshop = `${t('wineshopParagraph')}`;
  const pWineshopParagraph = pWineshop.replace(/xxx/gi, '\n\r');

  const pTasting = `${t('tastingParagraph')}`;
  const pTastingParagraph = pTasting.replace(/xxx/gi, '\n\r');

  const pWedding = `${t('weddingParagraph')}`;
  const pWeddingParagraph = pWedding.replace(/xxx/gi, '\n\r');

  return (
    <div className={styles.mx20}>      
      <Slider />

      <div className={styles.btnContainer}>
        <Link href='/tour'>
          <button className={`${styles.btn} ${styles.btnTour}`} type='button'> 
            {t('virtualTour')}
          </button>
        </Link>
      </div>
      {/* <div className={styles.btnContainer}>
        <Link href='/wine'>
          <button className={styles.btn} type='button'> 
            {t('wine')}
          </button>
        </Link>
      </div>
      <div className={styles.btnContainer}>
        <Link href='/gallery'>
          <button className={styles.btn} type='button'> 
            {t('gallery')}
          </button>
        </Link>
      </div>
      <div className={styles.btnContainer}>
        <Link href='/contact'>
          <button className={styles.btn} type='button'> 
            {t('contact')}
          </button>
        </Link>
      </div> */}

      <hr className={styles.hr} />

      <div className={styles.pb10}>
        <div className={marquee['maylike-products-wrapper']}>
          <h2 className={styles.title}>I NOSTRI VINI</h2>
          <div className={styles.btnContainer}>
              <Link href='/wine'>
                <button className={`${styles.btn} ${styles.btnWine}`} type='button'> 
                  SHOP
                </button>
              </Link>
            </div>
          {/* <div className={marquee['marquee']}>
            <div className={`${marquee['maylike-products-container']} ${marquee.track}`}>
              {products?.map((product) => (
                <Product key={product._id} 
                  product={product} />
              ))}
            </div>
          </div> */}

          <Swiper
            slidesPerView={size <= mobileWidth ? n : size > mobileWidth && size <= smallPcWidth ? n : n}
            spaceBetween={20}
            loop={true}
            pagination={{
                clickable: true,
                dynamicBullets: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {products?.map((product) => 
              <SwiperSlide key={product._id}>
                <div className={styles.py}>
                  <Product key={product._id} product={product} />
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>

      <hr className={styles.hr} />

      <div className={styles.textContainerLeft}>
        <div className={styles.w50mx40}>
          <h1 className={styles.title}>
            <Link href='/wineshop'>{t('wineshopTitle')}</Link>
          </h1>
          <p className={styles.paragraph}>
            <ReadMore>
              {pWineshopParagraph}
            </ReadMore>
          </p>
          <div className={styles.btnContainer}>
            <Link href='/wineshop'>
              <button className={styles.btn} type='button'> 
                {t('wineshopButton')}
              </button>
            </Link>
          </div>
        </div>
        <div className={`${styles.w50mx40} ${styles.mob}`}>
          <Image 
            src='https://res.cloudinary.com/dl38nyo08/image/upload/v1655394256/Roccolo%20del%20Lago/casual%20img/pexels-pixabay-434311_dbuhns.jpg' 
            alt="wineshop_img" 
            width={700} 
            height={400} 
            layout="responsive" 
            objectFit="cover"
            blurDataURL='https://res.cloudinary.com/dl38nyo08/image/upload/v1655394256/Roccolo%20del%20Lago/casual%20img/pexels-pixabay-434311_dbuhns.jpg'
            placeholder='blur'
          />
        </div>
      </div>

      <hr className={styles.hr} />

      <div className={styles.textContainerRight}>
        <div className={`${styles.w50mx40} ${styles.mob}`}>
          <Image 
            src='https://res.cloudinary.com/dl38nyo08/image/upload/v1655394256/Roccolo%20del%20Lago/casual%20img/pexels-ray-piedra-1545529_tv7i7l.jpg' 
            alt="tasting_img" 
            width={700} 
            height={400} 
            layout="responsive" 
            objectFit="cover"
            blurDataURL='https://res.cloudinary.com/dl38nyo08/image/upload/v1655394256/Roccolo%20del%20Lago/casual%20img/pexels-ray-piedra-1545529_tv7i7l.jpg'
            placeholder='blur'
          />
        </div>
        <div className={styles.w50mx40}>
          <h1 className={styles.title}>
            <Link href='/event#tasting'>{t('tastingTitle')}</Link>
          </h1>
          <p className={styles.paragraph}>
            <ReadMore>
              {pTastingParagraph}
            </ReadMore>
          </p>
          <div className={styles.btnContainer}>
            <Link href='/event#tasting'>
              <button className={styles.btn} type='button'> 
                {t('tastingButton')}
              </button>
            </Link>
          </div>
        </div>
      </div>

      <hr className={styles.hr} />

      <div className={styles.textContainerLeft}>
        <div className={styles.w50mx40}>
          <h1 className={styles.title}>
            <Link href='/event#wedding'>{t('weddingTitle')}</Link>
          </h1>
          <p className={styles.paragraph}>
            <ReadMore>
              {pWeddingParagraph}
            </ReadMore>
          </p>
          <div className={styles.btnContainer}>
            <Link href='/event#wedding'>
              <button className={styles.btn} type='button'> 
                {t('weddingButton')}
              </button>
            </Link>
          </div>
        </div>
        <div className={`${styles.w50mx40} ${styles.mob}`}>
          <Image 
            src='https://res.cloudinary.com/dl38nyo08/image/upload/v1655394713/Roccolo%20del%20Lago/casual%20img/pexels-duan%C3%A9-viljoen-12412480_xryskx.jpg'
            alt="wineshop_img" 
            width={700} 
            height={400} 
            layout="responsive" 
            objectFit="cover"
            blurDataURL='https://res.cloudinary.com/dl38nyo08/image/upload/v1655394713/Roccolo%20del%20Lago/casual%20img/pexels-duan%C3%A9-viljoen-12412480_xryskx.jpg'
            placeholder='blur'
          />
        </div>
      </div>
    </div>
  )
}

export default Main