import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import styles from '../styles/Event.module.css';
import ReadMore from './ReadMore';

const Tasting = () => {
  const { t } = useTranslation('event');

  const tTasting = t('event:tasting', { count: 150 }, { returnObjects: true });

  return (
    <div className={styles.mx60}>
      <h1 className={styles.title}>{tTasting.title}</h1>
      <p className={styles.paragraph}>
        <ReadMore>
          {tTasting.p}
        </ReadMore>
      </p>
    </div>
  )
}

export default Tasting