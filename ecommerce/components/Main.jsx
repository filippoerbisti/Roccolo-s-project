import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";
import useTranslation from 'next-translate/useTranslation';

import styles from '../styles/Main.module.css';
import dataMainImgSlider from '../store/dataMainImgSlider';

const Main = () => {
  const { t } = useTranslation('home');

  const pWineshop = `${t('wineshopParagraph')}`;
  const pWineshopParagraph = pWineshop.replace(/xxx/gi, '\n\r');

  const pTasting = `${t('tastingParagraph')}`;
  const pTastingParagraph = pTasting.replace(/xxx/gi, '\n\r');

  const pWedding = `${t('weddingParagraph')}`;
  const pWeddingParagraph = pWedding.replace(/xxx/gi, '\n\r');

  const images = dataMainImgSlider;

  const img1 = "https://res.cloudinary.com/dl38nyo08/image/upload/v1654615348/Roccolo%20del%20Lago/degustazioni_zs5pmi.png";

  return (
    <div className={styles.mx20}>     {/* TODO -> mx20 all pages */}
      <Slider 
        imageList={images} 
        width={1200} 
        height={600} 
        showArrowControls={false} 
        showDotControls={true} 
        loop={true}
        autoPlay={true}
        autoPlayInterval={5000}
      />

      <div className={styles.btnContainer}>
        <button className={styles.btn} type='button'> 
        {/* //TODO -> link to virtual tour, click, set loader, when ok, load page ((  onClick={() => setActiveTabs('tour')} )) */}
          <Link href='/tour'>{t('virtualTour')}</Link>
        </button>
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.btn} type='button'> 
        {/* //TODO -> link to virtual tour, click, set loader, when ok, load page ((  onClick={() => setActiveTabs('tour')} )) */}
          <Link href='/wine'>{t('wine')}</Link>
        </button>
      </div>

      <div className={styles.btnContainer}>
        <button className={styles.btn} type='button'> 
        {/* //TODO -> link to virtual tour, click, set loader, when ok, load page ((  onClick={() => setActiveTabs('tour')} )) */}
          <Link href='/gallery'>{t('gallery')}</Link>
        </button>
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.btn} type='button'> 
        {/* //TODO -> link to virtual tour, click, set loader, when ok, load page ((  onClick={() => setActiveTabs('tour')} )) */}
          <Link href='/contact'>{t('contact')}</Link>
        </button>
      </div>

      <hr className={styles.hr} />

      <div className={styles.textContainerLeft}>
        <div className={styles.w50mx40}>
          <h1 className={styles.title}>
            <Link href='/wineshop'>{t('wineshopTitle')}</Link>
          </h1>
          <p className={styles.paragraph}>{pWineshopParagraph}</p>
          <div className={styles.btnContainer}>
            <button className={styles.btn} type='button'> 
              <Link href='/wineshop'>{t('wineshopButton')}</Link>
            </button>
          </div>
        </div>
        <div className={styles.w50mx40}>
          <Image 
            src={img1} 
            // className={styles.img} 
            alt="wineshop_img" 
            width={700} 
            height={400} 
            layout="responsive" 
            objectFit="cover"
          />
        </div>
      </div>

      <hr className={styles.hr} />

      <div className={styles.textContainerRight}>
        <div className={styles.w50mx40}>
          <Image 
            src={img1} 
            // className={styles.img} 
            alt="tasting_img" 
            width={700} 
            height={400} 
            layout="responsive" 
            objectFit="cover"
          />
        </div>
        <div className={styles.w50mx40}>
          <h1 className={styles.title}>
            <Link href='/event#tasting'>{t('tastingTitle')}</Link>
          </h1>
          <p className={styles.paragraph}>{pTastingParagraph}</p>
          <div className={styles.btnContainer}>
            <button className={styles.btn} type='button'> 
              <Link href='/event#tasting'>{t('tastingButton')}</Link>
            </button>
          </div>
        </div>
      </div>

      <hr className={styles.hr} />

      <div className={styles.textContainerLeft}>
        <div className={styles.w50mx40}>
          <h1 className={styles.title}>
            <Link href='/event#wedding'>{t('weddingTitle')}</Link>
          </h1>
          <p className={styles.paragraph}>{pWeddingParagraph}</p>
          <div className={styles.btnContainer}>
            <button className={styles.btn} type='button'> 
              <Link href='/event#wedding'>{t('weddingButton')}</Link>
            </button>
          </div>
        </div>
        <div className={styles.w50mx40}>
          <Image 
            src={img1} 
            // className={styles.img} 
            alt="wineshop_img" 
            width={700} 
            height={400} 
            layout="responsive" 
            objectFit="cover"
          />
        </div>
      </div>
      
    </div>
  )
}

export default Main