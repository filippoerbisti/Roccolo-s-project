import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import styles from '../styles/Contact.module.css';

const About = () => {
  const { t } = useTranslation('contact');

  const tOption = t('contact:objectEmail', { count: 150 }, { returnObjects: true });

  return (
    <div className={styles.mx60}>
      <h1 className={styles.title}>{t('title')}</h1>
      <p className={styles.paragraph}>{t('info')}</p>
      <div>
        <input type="text" placeholder={t('firstName')} />
        <input type="text" placeholder={t('lastName')} />
        <input type="text" placeholder={t('email')} />
        <button>{t('button')}</button>
      </div>
    </div>
  )
}

export default About