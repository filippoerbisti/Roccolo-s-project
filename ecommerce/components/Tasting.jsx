import React, { useState } from 'react';
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

const Tasting = () => {
  const { t } = useTranslation('event');

  const pTasting = `${t('tastingParagraph')}`;
  const pTastingParagraph = pTasting.replace(/xxx/gi, '\n\r');

  return (
    <div className={styles.mx60}>
      <h1 className={styles.title}>{t('tastingTitle')}</h1>
      <h3 className={styles.title2}>
        {t('tastingIntro')}
        <br /><br />
        {t('tastingIntro2')}
      </h3>
      <p className={styles.paragraph}>
        <ReadMore>
          {pTastingParagraph}
        </ReadMore>
      </p>
      <div className={styles.row}>
        <div className={styles.left}>
          <h3 className={styles.titlePromoTasting}>{t('tastingPromo1')}</h3>
          <p className={styles.paragraphPromoTasting}>
            <span className={styles.bold}>{t('tastingPromoTitle1')}</span> - {t('tastingPromoParagraph1')}
          </p>
          <p className={styles.paragraphPromoTasting}>
            <span className={styles.bold}>{t('tastingPromoTitle2')}</span> - {t('tastingPromoParagraph2')}
          </p>
          <p className={styles.paragraphPromoTasting}>
            <span className={styles.bold}>{t('tastingPromoTitle3')}</span> - {t('tastingPromoParagraph3')}
          </p>
          <p className={styles.paragraphPromoTasting}>
            <span className={styles.bold}>{t('tastingPromoTitle4')}</span> - {t('tastingPromoParagraph4')}
          </p>
        </div>
        <div className={styles.right}>
          <h3 className={styles.titlePromoTasting}>{t('tastingPromo2')}</h3>
          <p className={styles.paragraphPromoTasting}>
            <span className={styles.bold}>{t('tastingPromoTitle1')}</span> - {t('tastingPromoParagraph1')}
          </p>
          <p className={styles.paragraphPromoTasting}>
            <span className={styles.bold}>{t('tastingPromoTitle2')}</span> - {t('tastingPromoParagraph2')}
          </p>
          <p className={styles.paragraphPromoTasting}>
            <span className={styles.bold}>{t('tastingPromoTitle3')}</span> - {t('tastingPromoParagraph3')}
          </p>
          <p className={styles.paragraphPromoTasting}>
            <span className={styles.bold}>{t('tastingPromoTitle4')}</span> - {t('tastingPromoParagraph4')} {t('tastingPromo2More')}
          </p>
        </div>
      </div>
      <div className={styles.footerTasting}>
        <p className={styles.footerParagraphTasting}>{t('tastingFooter')}</p>
        <div className={styles.footerTastingBtnCont}>
          <button className={styles.footerTastingButton}>
            <a href="mailto:info@roccolodellago.it" target="_blank">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </button>
          <button className={styles.footerTastingButton}>
            <a href="https://wa.me/3482359226?text=Salve%20sarei%20interessato%20a">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Tasting