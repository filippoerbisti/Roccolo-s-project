import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

import React360Viewer from '../components/React360Viewer';
import styles from '../styles/Tour.module.css'

const Tour = () => {
    const { t } = useTranslation('tour');

    return (
        <div className={styles.mx60}>
            <h1 className={styles.title}>{t('title')}</h1>
            <p className={styles.paragr}>{t('paragraph')}</p>
            <div className={styles.spinContainer}>
                <Image 
                src='https://res.cloudinary.com/dl38nyo08/image/upload/v1655208182/Roccolo%20del%20Lago/vr-360-logo_s1uhk0.png' 
                width={100}
                height={75}
                className={styles.spin3D} />
            </div>
            <div className={styles.row}>
                <div className={styles.colmx20}>
                    <h2 className={styles.title2}>
                        <Link href="/farm">{t('titleFarm')}</Link>
                    </h2>
                    <p className={styles.paragraph}>{t('paragraphFarm')}</p>
                    <React360Viewer
                        amount={36}
                        imagePath="https://scaleflex.cloudimg.io/crop/1920x700/n/https://scaleflex.airstore.io/demo/360-car"
                        fileName="iris-{index}.jpeg"
                        spinReverse
                        // autoplay
                        buttonClass="light"
                    />
                </div>
                <div className={styles.colmx20}>
                    <h2 className={styles.title2}>
                        <Link href="/wineshop">{t('titleWineshop')}</Link>
                    </h2>
                    <p className={styles.paragraph}>{t('paragraphWineshop')}</p>
                    <React360Viewer
                        amount={36}
                        imagePath="https://scaleflex.cloudimg.io/crop/1920x700/n/https://scaleflex.airstore.io/demo/360-car"
                        fileName="iris-{index}.jpeg"
                        spinReverse
                        // autoplay
                        buttonClass="light"
                    />
                </div>
            </div>
        </div>
    )
}

export default Tour