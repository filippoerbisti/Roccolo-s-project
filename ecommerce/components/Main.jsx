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
    <div className={styles.mx20}>
      <div className={styles.slider}>
        <Slider 
          imageList={images} 
          width={1200} 
          height={600} 
          showArrowControls={true} 
          showDotControls={true} 
          loop={true}
          autoPlay={true}
          autoPlayInterval={5000}
          bgColor="white"
        />
      </div>

      <div className={styles.btnContainer}>
      <Link href='/tour'>
          <button className={styles.btn} type='button'> 
            {t('virtualTour')}
          </button>
        </Link>
      </div>
      <div className={styles.btnContainer}>
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
      </div>

      <hr className={styles.hr} />

      <div className={styles.textContainerLeft}>
        <div className={styles.w50mx40}>
          <h1 className={styles.title}>
            <Link href='/wineshop'>{t('wineshopTitle')}</Link>
          </h1>
          <p className={styles.paragraph}>{pWineshopParagraph}</p>
          <div className={styles.btnContainer}>
            <Link href='/wineshop'>
              <button className={styles.btn} type='button'> 
                {t('wineshopButton')}
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.w50mx40}>
          <Image 
            src={img1} 
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
          <p className={styles.paragraph}>{pWeddingParagraph}</p>
          <div className={styles.btnContainer}>
            <Link href='/event#wedding'>
              <button className={styles.btn} type='button'> 
                {t('weddingButton')}
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.w50mx40}>
          <Image 
            src={img1} 
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