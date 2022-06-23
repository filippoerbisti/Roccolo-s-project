import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import PrivacyPolicyCookie from '../components/PrivacyPolicyCookie';

import styles from '../styles/Policy.module.css';

const PrivacyPolicy = () => {
    const { t } = useTranslation('policy');

    return (
        <div className={styles.mx20}>
            <PrivacyPolicyCookie />
        </div>
    )
}

export default PrivacyPolicy