import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';
import { AiFillInstagram, AiOutlineFacebook } from 'react-icons/ai';
import useTranslation from 'next-translate/useTranslation';

const Footer = () => {
  const { t } = useTranslation('common');
  const space = ' ';

  const img1 = 'https://res.cloudinary.com/dl38nyo08/image/upload/v1654848968/Roccolo%20del%20Lago/loghi-bio-footer_tud0sw.png';

  return (
    <div className={styles.footerContainer}>
      <p className={styles.followUs}>Seguici su</p>
      <p className={styles.icons}>
        <a href="https://it-it.facebook.com/roccolodellago/" className='cursor-pointer' target="_blank">
          <AiOutlineFacebook />
        </a>
        <a href="https://www.instagram.com/roccolodellago/" className='cursor-pointer' target="_blank">
          <AiFillInstagram />
        </a>
      </p>
      
      <div className={styles.row}>
        
        <div className={styles.left}>
          <div>
            <p>{t('where')}: <a href='https://goo.gl/maps/Pgp5XzNNhqQoMqVa6' target='_blank'>Località Saline, 9 -
              37017 Lazise (VR)</a></p>
            <br />
            <p>Tel: <a href="tel:+390457581077">+39 045 7581077</a></p>
            <br />
            <p>Email: <a href="mailto:info@roccolodellago.it" target='_blank'>info@roccolodellago.it</a></p>
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

      <p className={styles.endFooter}>© 2022 Roccolo del Lago. All Rights Reserved - 
        <span className={styles.privacyPolicy}>
          <Link href="/privacy-policy"> Privacy/Policy</Link>
        </span>
      </p>
    </div>
  )
}

export default Footer