import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import { AiFillInstagram, AiOutlineFacebook } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <p>Seguici su</p>
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
          <p>Localita Saline, 9 <br /> 37017 Lazise(VR)</p>
          <p>Tel. <a href="tel:+390457581077">+39 045 7581077</a></p>
          <p>Email: <a href="mailto:info@roccolodellago.it">info@roccolodellago.it</a></p>
          <p>Orari di apertura: 
          tutti i giorni dalle 9:00 alle 18:00 
          (Domenica chiuso)</p>
        </div>

        <div className={styles.right}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d712172.1989430976!2d11.0940066!3d45.7927773!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781ef22691c5c47%3A0xff285c461becf813!2sRoccolo%20del%20Lago!5e0!3m2!1sit!2sit!4v1654787562040!5m2!1sit!2sit" 
            // style={styles.maps}
            width="100%"
            height="400px"
            allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <p className={styles.endFooter}>© 2022 Roccolo del Lago. All Rights Reserved - 
        <Link href="/privacy-policy"> Privacy/Policy</Link>
      </p>
    </div>
  )
}

export default Footer