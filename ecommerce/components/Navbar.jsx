import React, { useState, useEffect }  from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineShopping, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import useTranslation from 'next-translate/useTranslation';
import { IT, GB, FR, DE } from 'country-flag-icons/react/3x2';
import { useRouter } from 'next/router';

import styles from '../styles/Navbar.module.css';
import { Cart, HamburgerMenu } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = props => {
  const { t } = useTranslation('common');

  const currentRoute = useRouter().asPath;

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

        {totalQuantities > 0 &&
          <button 
            type='button' 
            className='cart-icon'
            onClick={() => setShowCart(true)}
          >
            <AiOutlineShopping />
            <span className='cart-item-qty'>{totalQuantities}</span>
          </button>
        }

        {showCart && <Cart />}

        {!showMenu && 
          <button 
            type='button' 
            className={styles.menuHamburgerIcon}
            onClick={() => setShowMenu(!showMenu)}
          >
            <AiOutlineMenu />
          </button>
        }

        {showMenu && 
          <button 
            type='button' 
            className={styles.menuHamburgerIcon}
            onClick={() => setShowMenu(!showMenu)}
          >
            <AiOutlineClose />
          </button>
        }

        {showMenu && <HamburgerMenu />}

      </div>

    </div>
  )
}

export default Navbar