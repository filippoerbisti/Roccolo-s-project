import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import useTranslation from 'next-translate/useTranslation';

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
          <a>AZ. AGRICOLA</a>
          <a>WINESHOP</a>
        {/* 
          <a>DEGUSTAZIONI</a>
         */}
          <a>EVENTI</a>
          <a>ORGANIC</a>
          <a>{t('navWedding')}</a>
          <a>VINI</a>
          <a>GALLERY</a>
          <a>CONTATTI</a>
        </li>
      </ul>

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