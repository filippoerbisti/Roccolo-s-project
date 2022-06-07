import React from 'react';
import styles from '../styles/Footer.module.css';
import { AiFillInstagram, AiOutlineFacebook } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <p className={styles.icons}>
        <a href="https://it-it.facebook.com/roccolodellago/" className='cursor-pointer' target="_blank">
          <AiOutlineFacebook />
        </a>
        <a href="https://www.instagram.com/roccolodellago/" className='cursor-pointer' target="_blank">
          <AiFillInstagram />
        </a>
      </p>
      
      <div>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <p>Localita Saline, 9 <br /> 37017 Lazise(VR)</p>
          <div>
            <p>Tel. +39 045 7581077</p>
            <p>Email: info@roccolodellago.it</p>
          </div>
          <p>Orari di apertura: <br />
          tutti i giorni dalle 9:00 alle 18:00 <br />
          Domenica chiuso</p>
        </div>
      </div>

      <p>© 2022 Roccolo del Lago. All Rights Reserved - 
        <a href="/privacy-policy"> Privacy/Policy</a>
      </p>
    </div>
  )
}

export default Footer