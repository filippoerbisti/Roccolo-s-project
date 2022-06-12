import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import React360Viewer from '../components/React360Viewer';
// import '../styles/global.css';
import styles from '../styles/Tour.module.css'

const Tour = () => {
    const { t } = useTranslation('tour');

    return (
        <div className={styles.mx20}>
                <h1 className={styles.title}>VIRTUAL TOUR</h1>
                <div className={styles.row}>
                    <div className={styles.colmx20}>
                        <h2 className={styles.title2}>VIRTUAL TOUR</h2>
                        <p className={styles.paragraph}>ooooooooooo</p>
                        <React360Viewer
                            amount={36}
                            imagePath="https://scaleflex.cloudimg.io/crop/1920x700/n/https://scaleflex.airstore.io/demo/360-car"
                            fileName="iris-{index}.jpeg"
                            // spinReverse
                            // autoplay
                            buttonClass="light"
                        />
                    </div>
                    <div className={styles.colmx20}>
                        <h2 className={styles.title2}>VIRTUAL TOUR</h2>
                        <p className={styles.paragraph}>ooooooooooo</p>
                        <React360Viewer
                            amount={36}
                            imagePath="https://scaleflex.cloudimg.io/crop/1920x700/n/https://scaleflex.airstore.io/demo/360-car"
                            fileName="iris-{index}.jpeg"
                            // spinReverse
                            // autoplay
                            buttonClass="light"
                        />
                    </div>
                </div>
                <div className={styles.w100}>
                    <div className={styles.center}>
                        <h2 className={styles.title2}>VIRTUAL TOUR</h2>
                        <p className={styles.paragraph}>ooooooooooo</p>
                        <React360Viewer
                            amount={36}
                            imagePath="https://scaleflex.cloudimg.io/crop/1920x700/n/https://scaleflex.airstore.io/demo/360-car"
                            fileName="iris-{index}.jpeg"
                            // spinReverse
                            // autoplay
                            buttonClass="light"
                        />
                    </div>
                </div>
            </div>
    )
}

export default Tour