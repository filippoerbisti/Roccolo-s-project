import React, { useState } from 'react';
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

  return (
    <div className={styles.mx60}>
      <h1 className={styles.title}>{t('weddingTitle')}</h1>
      <p className={styles.paragraph}>
        <ReadMore>
        {t('weddingParagraph')}
        </ReadMore>
      </p>
    </div>
  )
}

export default Wedding