import React, { useState } from 'react';
import Link from 'next/link';
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

  const landingUrl = 'https://landingroccolo.vercel.app';

  const pTasting = `${t('tastingParagraph')}`;
  const pTastingParagraph = pTasting.replace(/xxx/gi, '\n\r');

  const mailTo = "info@roccolodellago.it";
  const phoneNumber = "3482359226";
  const introMessageWhatsapp = "Azienda Agricola Roccolo del Lago. Località Saline, 9 - 37017 Lazise (VR). Ti aspettiamo tutti i giorni esclusa Domenica dalle ore 9:00 alle 18:00 per i tuoi acquisti al Wineshop, (da Aprile ad Ottobre), una visita alla tenuta o per il tuo evento speciale. Contattaci per richiedere informazioni e disponibilità per la tua prenotazione. Email: info@roccolodellago.it Tel. +39.0457581077";
  const space = "                                                                    ";
  const messageWhatsapp = "Salve, La contatto per ( inserisci qui il messaggio ). Grazie e arrivederci. Roccolo del Lago"

  return (
    <div className={styles.mx60}>
      <h1 className={styles.title}>{t('tastingTitle')}</h1>
      <h3 className={styles.title2}>
        {t('tastingIntro')}
        <br /><br />
        {t('tastingIntro2')}
      </h3>
      <p className={styles.paragraph}>
        {/* <ReadMore>
          {pTastingParagraph}
        </ReadMore> */}
      </p>
      {/* <div className={styles.row}>
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
      </div> */}
      <div className={styles.row}>
        ADD CARD TASTING PACKAGE
      </div>
      <div className={styles.footerTasting}>
        <div className={styles.btnContainer}>
          <Link href={landingUrl}>
            <button className={styles.btn} type='button'> 
              {t('tastingButton')}
            </button>
          </Link>
        </div>
        <p className={styles.footerParagraphTasting}>{t('tastingFooter')}</p>
        <div className={styles.footerTastingBtnCont}>
          <button className={`${styles.footerTastingButton} tooltip`}>
            <a href={`mailto:${mailTo}`} target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-envelope fa-xl"></i>
              <span className='tooltiptext'>{t('sendEmail')}</span>
            </a>
          </button>
          <button className={`${styles.footerTastingButton} tooltip`}>
            <a href={`https://wa.me/${phoneNumber}?text=${introMessageWhatsapp}${space}${messageWhatsapp}`}>
              <i className="fa-brands fa-whatsapp fa-xl"></i>
              <span className='tooltiptext'>{t('sendMsg')}</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Tasting