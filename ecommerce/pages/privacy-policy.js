import React from 'react';
import PrivacyPolicyCookie from '../components/PrivacyPolicyCookie';

import styles from '../styles/Policy.module.css';

const PrivacyPolicy = () => {

    return (
        <div className={styles.mx20}>
            <PrivacyPolicyCookie />
        </div>
    )
}

export default PrivacyPolicy