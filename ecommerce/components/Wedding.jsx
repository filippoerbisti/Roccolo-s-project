import React, { useState } from 'react';
import Image from "next/image";
import useTranslation from 'next-translate/useTranslation';

import styles from '../styles/Event.module.css';

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

const Wedding = () => {
  const { t } = useTranslation('event');

  const pWedding = `${t('weddingParagraph')}`;
  const pWeddingParagraph = pWedding.replace(/xxx/gi, '\n\r');

  return (
    <div className={styles.mx60}>
      <h1 className={styles.title}>{t('weddingTitle')}</h1>
      <h3 className={styles.title2}>
        {t('weddingIntro')}
      </h3>
      <p className={styles.paragraph}>
        <ReadMore>
          {pWeddingParagraph}
        </ReadMore>
      </p>
      <div className={styles.imagesContWedding}>
        <Image 
          width={500} 
          height={250} 
          objectFit="cover" 
          src="https://res.cloudinary.com/dl38nyo08/image/upload/v1655394713/Roccolo%20del%20Lago/casual%20img/pexels-duan%C3%A9-viljoen-12412480_xryskx.jpg" 
          // blurDataURL='https://res.cloudinary.com/dl38nyo08/image/upload/v1655394713/Roccolo%20del%20Lago/casual%20img/pexels-duan%C3%A9-viljoen-12412480_xryskx.jpg'
          // placeholder='blur'
        />
        <Image 
          width={500} 
          height={250} 
          objectFit="cover" 
          src="https://res.cloudinary.com/dl38nyo08/image/upload/v1655394260/Roccolo%20del%20Lago/casual%20img/pexels-elina-sazonova-1850595_jeaeks.jpg" 
          // blurDataURL='https://res.cloudinary.com/dl38nyo08/image/upload/v1655394260/Roccolo%20del%20Lago/casual%20img/pexels-elina-sazonova-1850595_jeaeks.jpg'
          // placeholder='blur'
        />
        <Image 
          width={500} 
          height={250} 
          objectFit="cover" 
          src="https://res.cloudinary.com/dl38nyo08/image/upload/v1655394843/Roccolo%20del%20Lago/casual%20img/pexels-nicole-michalou-5775055_lemko8.jpg" 
          // blurDataURL='https://res.cloudinary.com/dl38nyo08/image/upload/v1655394843/Roccolo%20del%20Lago/casual%20img/pexels-nicole-michalou-5775055_lemko8.jpg'
          // placeholder='blur'
        />
      </div>
    </div>
  )
}

export default Wedding