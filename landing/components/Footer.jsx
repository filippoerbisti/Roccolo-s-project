import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

import styles from '../styles/Footer.module.css';
import iconStyles from '../styles/IconFooter.module.css';

const Footer = () => {
  const { t } = useTranslation('common');
  const space = ' ';

  const phoneNumber = "+390457581077";
  const mailTo = "info@roccolodellago.it";
  const img1 = 'https://res.cloudinary.com/dl38nyo08/image/upload/v1654848968/Roccolo%20del%20Lago/loghi-bio-footer_tud0sw.png';

  return (
    <div className={styles.footerContainer}>
      <p className={styles.followUs}>{t('followUs')}</p>
      <ul className={iconStyles.ul}>
        <li>
            <a href="https://it-it.facebook.com/roccolodellago/" target="_blank" rel="noreferrer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="fa fa-facebook"></span>
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com/roccolodellago/" target="_blank" rel="noreferrer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="fa fa-instagram"></span>
            </a>
        </li>
      </ul>
      
      <div className={styles.row}>
        <div className={styles.left}>
          <div>
            <p>{t('where')}: <a href='https://goo.gl/maps/Pgp5XzNNhqQoMqVa6' className={styles.tag} target='_blank' rel="noreferrer">Località Saline, 9 -
              37017 Lazise (VR)</a></p>
            <br />
            <p>Tel: <a href={`tel:${phoneNumber}`} className={styles.tag}>+39 045 7581077</a></p>
            <br />
            <p>Email: <a href={`mailto:${mailTo}`} className={styles.tag} target='_blank' rel="noopener noreferrer">info@roccolodellago.it</a></p>
            <br />
            <p className={styles.workHour}>{t('when')}: {space}
            {t('workHours')} <br />
            ({t('close')})</p>
          </div>

          <div className={styles.imgContainer}>
            <Image 
              src={img1} 
              alt="loghi-bio-footer_img" 
              width={300}
              height={100}
              // blurDataURL={img1}
              // placeholder='blur'
            />
          </div>
        </div>

        <div className={styles.right}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d712172.1989430976!2d11.0940066!3d45.7927773!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781ef22691c5c47%3A0xff285c461becf813!2sRoccolo%20del%20Lago!5e0!3m2!1sit!2sit!4v1654787562040!5m2!1sit!2sit" 
            width="100%"
            height="400px"
            allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className={styles.endFooter}>
        <p>
          <span className={styles.tag}>
            <a href={'/'} rel="noreferrer">Società Agricola Roccolo del Lago S.r.l. </a>
          </span> 
          -
          <span className={styles.tag}>
            <a href='https://goo.gl/maps/Pgp5XzNNhqQoMqVa6'> Località Saline, 9 - 37017 Lazise (VR)</a>
          </span>
          <br />
          REAVR-366731 - P. Iva 03802970230 - Cap. Sociale 100.000.00 €
          </p>
        <p>2022 © Roccolo del Lago. {t('rightsReserved')} <br />
          {/* {t('poweredBy')} <a href="https://filippoerbisti.netlify.app" target="_blank" rel="noreferrer" className={styles.poweredBy}>Filippo Erbisti</a> */}
          <span className={styles.privacyPolicy}>
            <Link href="/privacy-policy"> Privacy/Policy</Link>
          </span>
        </p>
      </div>
    </div>
  )
}

export default Footer