import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";
import useTranslation from 'next-translate/useTranslation';

import styles from '../styles/Main.module.css';

const Main = () => {
  const { t } = useTranslation('home');

  const images = [
    { url: "https://picsum.photos/seed/a/1600/900" },
    { url: "https://picsum.photos/seed/b/1920/1080" },
    { url: "https://picsum.photos/seed/c/1366/768" },
  ];

  const img1 = "/../public/degustazioni.png";

  return (
    <div className={styles.mx20}>     {/* TODO -> mx20 all pages */}
      <div>
      <Slider imageList={images} width={1200} height={600} showArrowControls={false} showDotControls={true} />

      <div className={styles.btnContainer}>
        <button className={styles.btn} type='button'> 
        {/* //TODO -> link to virtual tour, click, set loader, when ok, load page ((  onClick={() => setActiveTabs('tour')} )) */}
          <Link href='https://www.spindox.it/it/blog/react-360-una-libreria-vr-per-il-web/#gref'>{t('takeTour')}</Link>
        </button>
      </div>

      <hr className={styles.hr} />
      </div>

      <div className={styles.textContainer}>
        <div className={styles.w50mx40}>
          <h1 className={styles.title}>
            <Link href='/wineshop'>{t('wineshopTitle')}</Link>
          </h1>
          <p className={styles.paragraph}>{t('wineshopParagraph')}</p>
        </div>
        <div className={styles.w50mx40}>
          <Image 
            src={img1} 
            className={styles.img} 
            alt="wineshop_img" 
            width={800} 
            height={500} 
            layout="responsive" 
            objectFit="cover"
          />
        </div>
      </div>

      <hr className={styles.hr} />

      <div className={styles.textContainer}>
        <div className={styles.w50mx40}>
          <Image 
            src={img1} 
            className={styles.img} 
            alt="event_img" 
            width={800} 
            height={500} 
            layout="responsive" 
            objectFit="cover"
          />
        </div>
        <div className={styles.w50mx40}>
          <h1 className={styles.title}>
            <Link href='/event'>{t('eventTitle')}</Link>
          </h1>
          <p className={styles.paragraph}>{t('eventParagraph')}</p>
        </div>
      </div>
      
    </div>
  )
}

export default Main