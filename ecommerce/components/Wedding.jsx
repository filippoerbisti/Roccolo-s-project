import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import styles from '../styles/Event.module.css';

const ReadMore = ({ children }) => {
  const text = children;

  const { t } = useTranslation('common');

  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <span>
      {isReadMore ? text.slice(0, 400) : text}
      
      {text.length >= 400 && (
        <span onClick={toggleReadMore} className='showMore'>
          {isReadMore ? `${t('readMore')}` : `${t('showLess')}`}
        </span>
      )}
    </span>
  )
}

const Wedding = () => {
  const { t } = useTranslation('event');

  const tWedding = t('event:wedding', { count: 150 }, { returnObjects: true });

  return (
    <div className={styles.mx60}>
      <h1 className={styles.title}>{tWedding.title}</h1>
      <p className={styles.paragraph}>
        <ReadMore>
          {tWedding.p}
        </ReadMore>
      </p>
    </div>
  )
}

export default Wedding