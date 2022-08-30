import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

import styles from '../styles/Main.module.css';
import Slider from './Slider';

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

const Main = () => {
  const { t } = useTranslation('home');

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
          />
        </div>
      </div>
      
    </div>
  )
}

export default Main