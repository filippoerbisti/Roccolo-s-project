import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

import View360 from '../components/View360';
import View3602 from '../components/View3602';
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
                    className={styles.spin3D} 
                    // blurDataURL='https://res.cloudinary.com/dl38nyo08/image/upload/v1655208182/Roccolo%20del%20Lago/vr-360-logo_s1uhk0.png'
                    // placeholder='blur'
                />
            </div>
            <div className={styles.row}>
                <div className={styles.colmx20}>
                    <h2 className={styles.title2}>
                        <Link href="/event">{t('titleFarm')}</Link>
                    </h2>
                    <p className={styles.paragraph}>{t('paragraphFarm')}</p>
                    <View360 className={styles.main360vr} />
                </div>
                <div className={styles.colmx20}>
                    <h2 className={styles.title2}>
                        <Link href="/event">{t('titleVineyard')}</Link>
                    </h2>
                    <p className={styles.paragraph}>{t('paragraphVineyard')}</p>
                    <View3602 className={styles.main360vr} />
                </div>
                {/* <div className={styles.colmx20}>
                    <h2 className={styles.title2}>
                        <Link href="/wineshop">{t('titleWineshop')}</Link>
                    </h2>
                    <p className={styles.paragraph}>{t('paragraphWineshop')}</p>
                    <iframe className={styles.main360vr} height="350px" width="75%" allowFullScreen={true} src="https://momento360.com/e/u/bc36ee19f7ed453f90407a518222b25b?utm_campaign=embed&utm_source=other&heading=21.77&pitch=2.3&field-of-view=67&size=medium"></iframe>
                </div> */}
            </div>
        </div>
    )
}

export default Tour