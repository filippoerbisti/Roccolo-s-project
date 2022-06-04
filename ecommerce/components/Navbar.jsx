import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

import styles from '../styles/Navbar.module.css';
import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className='navbar-container'>
      <Link href="/">
        <img src="https://www.roccolodellago.it/wp-content/uploads/2019/02/logo.jpg" width='auto' height='80px' />
      </Link>

      <ul className={styles.menu}>
        <li>
          <a>SHOP</a>
        </li>
        <li>
          <a>AZ. AGRICOLA</a>
        </li>
        <li>
          <a>WINESHOP</a>
        </li>
        {/* <li>
          <a>DEGUSTAZIONI</a>
        </li> */}
        <li>
          <a>EVENTI</a>
        </li>
        <li>
          <a>ORGANIC</a>
        </li>
        {/* <li>
          <a>WEDDING</a>
        </li> */}
        <li>
          <a>VINI</a>
        </li>
        <li>
          <a>GALLERY</a>
        </li>
        <li>
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