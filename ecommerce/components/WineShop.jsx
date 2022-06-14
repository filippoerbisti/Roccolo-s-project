import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import styles from '../styles/WineShop.module.css';

const WineShop = () => {
    const { t } = useTranslation('wineshop');

    return (
        <div className={styles.mx20}>
            <h1 className={styles.title}>Wineshop</h1>
            <p className={styles.paragraph}>paragraph</p>
        </div>
    )
}

export default WineShop