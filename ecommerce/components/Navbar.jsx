import React, { useState, useEffect }  from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import useTranslation from 'next-translate/useTranslation';
import { IT, GB, FR, DE } from 'country-flag-icons/react/3x2';

import styles from '../styles/Navbar.module.css';
import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = props => {
  const { t } = useTranslation('common');
  const { showCart, setShowCart, showMenu, setShowMenu, totalQuantities } = useStateContext();

  const [activeTabs, setActiveTabs] = useState(props.name);

  useEffect(() => {
    switch (activeTabs) {
      case 'home':
        break;
      case 'wine':
        break;
      case 'farm':
        break;
      case 'wineshop':
        break;
      case 'event':
        break;
      case 'gallery':
        break;
      case 'about':
        break;
      default:
        break;
    }
  }, [activeTabs]);

  return (
    <div className='navbar-container'>
      <Link href="/" className='cursor-pointer'>
        <img 
          src="https://www.roccolodellago.it/wp-content/uploads/2019/02/logo.jpg" 
          width='auto' 
          height='80px' 
          className='cursor-pointer'
          onClick={() => setActiveTabs('')}
        />
      </Link>

      <ul className={styles.menu}>
        <li>
          <Link href='/wine'>
            <a className={activeTabs === 'wine' ? `${styles.active}` : `${styles.link}`} onClick={() => setActiveTabs('wine')}>
              {t('navShop')}
            </a>
          </Link>
          <Link href='/farm'>
            <a className={activeTabs === 'farm' ? `${styles.active}` : `${styles.link}`} onClick={() => setActiveTabs('farm')}>
              {t('navFarm')}
            </a>
          </Link>
          <Link href='/wineshop'>
            <a className={activeTabs === 'wineshop' ? `${styles.active}` : `${styles.link}`} onClick={() => setActiveTabs('wineshop')}>
              {t('navWineShop')}
            </a>
          </Link>
          <Link href='/event'>
            <a className={activeTabs === 'event' ? `${styles.active}` : `${styles.link}`} onClick={() => setActiveTabs('event')}>
              {t('navEvents')}
            </a>
          </Link>
          <Link href='/wine'>
            <a className={activeTabs === 'wine' ? `${styles.active}` : `${styles.link}`} onClick={() => setActiveTabs('wine')}>
              {t('navWines')}
            </a>
          </Link>
          <Link href='/gallery'>
            <a className={activeTabs === 'gallery' ? `${styles.active}` : `${styles.link}`} onClick={() => setActiveTabs('gallery')}>
              {t('navGallery')}
            </a>
          </Link>
          <Link href='/about'>
            <a className={activeTabs === 'about' ? `${styles.active}` : `${styles.link}`} onClick={() => setActiveTabs('about')}>
              {t('navAbout')}
            </a>
          </Link>
        </li>
      </ul>

      <div className={styles.navIcon}>
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

        {/* <button 
          type='button' 
          className='cart-icon'
          onClick={() => setShowMenu(true)}
        >
          <FiMenu />
        </button>

        {showMenu && <Cart />} */}

      </div>

    </div>
  )
}

export default Navbar