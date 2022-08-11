import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { IT, GB, FR, DE } from 'country-flag-icons/react/3x2';
import { useRouter } from 'next/router';

import styles from '../styles/Hamburger.module.css';
import { useStateContext } from '../context/StateContext';

const HamburgerMenu = () => {
  const { t } = useTranslation('common');

  const currentRoute = useRouter().asPath;
  const { showMenu, setShowMenu, changeIconHamburgerMenu, setChangeIconHamburgerMenu, } = useStateContext();

  return (
    <div className={styles.navigation}>
      <Link href={"/"} className='cursor-pointer'>
        <Image 
          src="https://res.cloudinary.com/dl38nyo08/image/upload/v1654615358/Roccolo%20del%20Lago/logo_dyyyvx.jpg"
          width={300} 
          height={120} 
          objectFit="contain"
          className='cursor-pointer'
          onClick={() => 
            {setShowMenu(!showMenu) 
            setChangeIconHamburgerMenu(!showMenu)}
          } 
        />
      </Link>
      <ul>
        <li>
          <Link href='/wine'>
            <a data-text={t('navShop')}
              onClick={() => 
                {setShowMenu(!showMenu) 
                setChangeIconHamburgerMenu(!showMenu)}
              } 
            >
              {t('navShop')}
            </a>
          </Link>
        </li>
        <li>
          <Link href='/tour'>
            <a data-text={t('navTour')}
              onClick={() => 
                {setShowMenu(!showMenu) 
                setChangeIconHamburgerMenu(!showMenu)}
              } 
            >
              {t('navTour')}
            </a>
          </Link>
        </li>
        <li>
          <Link href='/wineshop'>
            <a data-text={t('navWineShop')}
              onClick={() => 
                {setShowMenu(!showMenu) 
                setChangeIconHamburgerMenu(!showMenu)}
              } 
            >
              {t('navWineShop')}
            </a>
          </Link>
        </li>
        <li>
          <Link href='/event'>
            <a data-text={t('navEvents')}
              onClick={() => 
                {setShowMenu(!showMenu) 
                setChangeIconHamburgerMenu(!showMenu)}
              } 
            >
              {t('navEvents')}
            </a>
          </Link> 
        </li>
        <li>
          <Link href='/gallery'>
            <a data-text={t('navGallery')}
              onClick={() => 
                {setShowMenu(!showMenu) 
                setChangeIconHamburgerMenu(!showMenu)}
              } 
            >
              {t('navGallery')}
            </a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a data-text={t('navContact')}
              onClick={() => 
                {setShowMenu(!showMenu) 
                setChangeIconHamburgerMenu(!showMenu)}
              } 
            >
              {t('navContact')}
            </a>
          </Link>
        </li>
      </ul>
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
    </div>
  )
}

export default HamburgerMenu