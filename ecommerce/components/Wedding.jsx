import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import styles from '../styles/Event.module.css';

const Wedding = () => {
  const { t } = useTranslation('event');

  const tWedding = t('event:wedding', { count: 150 }, { returnObjects: true });

  return (
    <div className={styles.mx20}>
      <h1 className={styles.title}>{tWedding.title}</h1>
      <p className={styles.paragraph}>{tWedding.p}</p>
    </div>
  )
}

export default Wedding