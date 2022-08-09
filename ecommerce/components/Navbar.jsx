import React, { useState, useEffect }  from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineShopping } from 'react-icons/ai';
import useTranslation from 'next-translate/useTranslation';
import { IT, GB, FR, DE } from 'country-flag-icons/react/3x2';
import { useRouter } from 'next/router';
import { slide as Menu } from 'react-burger-menu';

import styles from '../styles/Navbar.module.css';
import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = props => {
  const { t } = useTranslation('common');

  const currentRoute = useRouter().route;

  const { showCart, setShowCart, showMenu, setShowMenu, totalQuantities } = useStateContext();

  const [activeTabs, setActiveTabs] = useState(props.name);
  useEffect(() => {
    switch (activeTabs) {
      case 'home':
        break;
      case 'wine':
        break;
      case 'tour':
        break;
      case 'wineshop':
        break;
      case 'event':
        break;
      case 'gallery':
        break;
      case 'contact':
        break;
      default:
        break;
    }
  }, [activeTabs]);

  var style = {
    bmBurgerButton: {
      position: 'relative',
      width: '30px',
      height: '24px',
      right: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
      display: 'flex',
      flexDirection: 'column'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
      width: '100%',
      zIndex: '999'
    }
  }

  return (
    <div className='navbar-container'>
      <Link href={"/"} className='cursor-pointer'>
        <Image 
          src="https://res.cloudinary.com/dl38nyo08/image/upload/v1654615358/Roccolo%20del%20Lago/logo_dyyyvx.jpg"
          width={240} 
          height={100} 
          objectFit="cover"
          className='cursor-pointer'
          onClick={() => setActiveTabs('')}
        />
      </Link>

      {/* <Menu styles={ style } right >
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Menu> */}

      <ul className={styles.menu}>
        <li>
          <Link href='/wine'>
            <a className={activeTabs === 'wine' ? `${styles.active}` : `${styles.link}`} onClick={() => setActiveTabs('wine')}>
              {t('navShop')}
            </a>
          </Link>
          <Link href='/tour'>
            <a className={activeTabs === 'tour' ? `${styles.active}` : `${styles.link}`} onClick={() => setActiveTabs('tour')}>
              {t('navTour')}
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
          <Link href='/gallery'>
            <a className={activeTabs === 'gallery' ? `${styles.active}` : `${styles.link}`} onClick={() => setActiveTabs('gallery')}>
              {t('navGallery')}
            </a>
          </Link>
          <Link href='/contact'>
            <a className={activeTabs === 'contact' ? `${styles.active}` : `${styles.link}`} onClick={() => setActiveTabs('contact')}>
              {t('navContact')}
            </a>
          </Link>
        </li>
      </ul>

      <div className={styles.navIcon}>
        <div className={styles.langContainer}>
          <Link href={currentRoute} locale="it">
            <IT title="Italiano" className={styles.langIcons}/>
          </Link>
          <Link href={currentRoute} locale="en">
            <GB title="English" className={styles.langIcons}/>
          </Link>
          <Link href={currentRoute} locale="de">
            <DE title="Deutsch" className={styles.langIcons}/>
          </Link>
          <Link href={currentRoute} locale="fr">
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