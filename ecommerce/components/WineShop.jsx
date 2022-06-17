import React, { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

import styles from '../styles/WineShop.module.css';
import WineShopGalleries from './WineShopGalleries';

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

const WineShop = () => {
    const { t } = useTranslation('wineshop');

    const pWineshop = `${t('paragraph')}`;
    const pWineshopParagraph = pWineshop.replace(/xxx/gi, '\n\r');

    return (
        <div className={styles.mx20}>
            <h1 className={styles.title}>{t('title')}</h1>
            <h3 className={styles.title2}>{t('intro')}</h3>
            <div className={styles.col}>
                <div className={styles.w50}>
                    <p className={styles.paragraph}>
                        <ReadMore>
                            {pWineshopParagraph}
                        </ReadMore>
                    </p>
                </div>
                <div className={styles.w50}>
                    <WineShopGalleries />
                </div>
            </div>
        </div>
    )
}

export default WineShop