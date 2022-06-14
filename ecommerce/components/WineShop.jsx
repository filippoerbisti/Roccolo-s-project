import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Slider from "@madzadev/image-slider";
    import "@madzadev/image-slider/dist/index.css";

import styles from '../styles/WineShop.module.css';
import dataMainImgSlider from '../store/dataMainImgSlider';

const WineShop = () => {
    const { t } = useTranslation('wineshop');

    const pWineshop = `${t('paragraph')}`;
    const pWineshopParagraph = pWineshop.replace(/xxx/gi, '\n\r');

    const images = dataMainImgSlider;

    return (
        <div className={styles.mx20}>
            <h1 className={styles.title}>{t('title')}</h1>
            <h3 className={styles.title2}>{t('intro')}</h3>
            <div className={styles.row}>
                <div className={styles.left}>
                    <p className={styles.paragraph}>{pWineshopParagraph}</p>
                </div>
                <div className={styles.right}>
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
                </div>
            </div>
        </div>
    )
}

export default WineShop