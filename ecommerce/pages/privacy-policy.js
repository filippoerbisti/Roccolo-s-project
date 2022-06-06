import React from 'react';
import styles from '../styles/Policy.module.css'
import useTranslation from 'next-translate/useTranslation';

const PrivacyPolicy = () => {
    const { t } = useTranslation('policy');

    return (
        <div>
            <h1>Privacy Policy & Cookie</h1>
            <div>
                <div>
                    <h3 className={styles.policyTitle}>POLICY PRIVACY & COOKIES</h3>
                    <p className={styles.policyParagraph}>
                    {t('paragraph1A')}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy