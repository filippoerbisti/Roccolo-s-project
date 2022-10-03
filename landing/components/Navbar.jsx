import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { IT, GB, FR, DE } from 'country-flag-icons/react/3x2';
import { useStateContext } from '../context/StateContext';

import { HamburgerMenu, HamburgerIcon } from './';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    const { t } = useTranslation('common');

    const currentRoute = useRouter().asPath;
    const { showMenu, changeIconHamburgerMenu, setChangeIconHamburgerMenu } = useStateContext();

    const langEcommerceSite = useRouter().locale;
    const ecommerceSite = 'https://roccolodellago.vercel.app';

    return (
        <div className='navbar-container'>
        
            <div className={styles.menuContainer}>
                <ul className={styles.menu}>
                    <li>
                        <Link href='#visit'>
                            <a >
                                {t('navVisit')}
                            </a>
                        </Link>
                        <Link href='#tasting'>
                            <a >
                                {t('navTasting')}
                            </a>
                        </Link>
                        <Link href='#booking'>
                            <a >
                                {t('navBooking')}
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className='nav-logo'>
                <Link href={"/"} className='cursor-pointer'>
                    <Image 
                        src="https://res.cloudinary.com/dl38nyo08/image/upload/v1660806591/Roccolo%20del%20Lago/logo_iidjdd.png"
                        width={150} 
                        height={100} 
                        objectFit="contain"
                        className='cursor-pointer'
                        // blurDataURL='https://res.cloudinary.com/dl38nyo08/image/upload/v1660806591/Roccolo%20del%20Lago/logo_iidjdd.png'
                        // placeholder='blur'
                    />
                </Link>
                
                <div className={styles.navIcon}>
                    <div className={styles.langContainer}>
                        <Link href={currentRoute} locale="it">
                            <IT title="Italiano" className={styles.langIcons}/>
                        </Link>
                        <Link href={currentRoute} locale="en">
                            <GB title="English" className={styles.langIcons}/>
                        </Link>
                        {/* <Link href={currentRoute} locale="de">
                            <DE title="Deutsch" className={styles.langIcons}/>
                        </Link>
                        <Link href={currentRoute} locale="fr">
                            <FR title="Français" className={styles.langIcons}/>
                        </Link> */}
                    </div>

                    {showMenu && <HamburgerMenu />}

                    <div className={styles.menuHamburgerIcon}>
                        <HamburgerIcon onClick={() => {
                            setChangeIconHamburgerMenu(!changeIconHamburgerMenu)
                        }}/>
                    </div>

                </div>
            </div>
            
            <div className={styles.menuContainer}>
                <ul className={styles.menu}>
                    <li>
                        <Link href={ecommerceSite + '/' + langEcommerceSite + '/wine'}>
                            <a >
                                {t('navShop')}
                            </a>
                        </Link>
                        <Link href={ecommerceSite + '/' + langEcommerceSite + '/wineshop'}>
                            <a >
                                {t('navWineShop')}
                            </a>
                        </Link>
                        <Link href={ecommerceSite + '/' + langEcommerceSite + '/contact'}>
                            <a >
                                {t('navContact')}
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar