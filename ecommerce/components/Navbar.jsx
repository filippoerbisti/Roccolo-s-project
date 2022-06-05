import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import useTranslation from 'next-translate/useTranslation';
import { IT, GB, FR, DE } from 'country-flag-icons/react/3x2';

import styles from '../styles/Navbar.module.css';
import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { t } = useTranslation('common');
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className='navbar-container'>
      <Link href="/" className='cursor-pointer'>
        <img 
          src="https://www.roccolodellago.it/wp-content/uploads/2019/02/logo.jpg" 
          width='auto' 
          height='80px' 
          className='cursor-pointer'
        />
      </Link>

      

      <ul className={styles.menu}>
        <li>
          <a>{t('navShop')}</a>
          <a>{t('navFarm')}</a>
          <a>{t('navWineShop')}</a>
          <a>{t('navEvents')}</a>
          <a>{t('navWines')}</a>
          <a>{t('navGallery')}</a>
          <a>{t('navAbout')}</a>
        </li>
      </ul>

      <div className={styles.langContainer}>
        <Link href="/" locale="it">
          <IT title="Italiano" className={styles.langIcons}/>
        </Link>
        <Link href="/" locale="en">
          <GB title="English" className={styles.langIcons}/>
        </Link>
        <Link href="/" locale="de">
          <DE title="Deutsch" className={styles.langIcons}/>
        </Link>
        <Link href="/" locale="fr">
          <FR title="Français" className={styles.langIcons}/>
        </Link>
      </div>

      <button 
        type='button' 
        className='cart-icon'
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar