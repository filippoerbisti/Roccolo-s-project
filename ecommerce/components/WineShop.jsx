import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Slider from "@madzadev/image-slider";
    import "@madzadev/image-slider/dist/index.css";

import styles from '../styles/WineShop.module.css';
import dataMainImgSlider from '../store/dataMainImgSlider';

const WineShop = () => {
    const { t } = useTranslation('wineshop');

    const images = dataMainImgSlider;

    return (
        <div className={styles.mx20}>
            <h1 className={styles.title}>Wineshop</h1>
            <p className={styles.paragraph}>paragraph</p>
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
    )
}

export default WineShop