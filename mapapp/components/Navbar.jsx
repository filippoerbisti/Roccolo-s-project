import React, {useRef} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiLogOut } from 'react-icons/fi';
import { IT, GB, FR, DE } from 'country-flag-icons/react/3x2';

import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';

const Navbar = () => {

  const { logout } = useAuth();
  const router = useRouter();
  const currentRoute = useRouter().asPath;

  return (
    <div className='navbar-container'>
        <Link href={"/"} className='cursor-pointer'>
          <img 
            src="https://res.cloudinary.com/dl38nyo08/image/upload/v1660806591/Roccolo%20del%20Lago/logo_iidjdd.png"
            width={180} 
            height={60} 
            // objectfit="contain"
            className='cursor-pointer'
          />
        </Link>

        <div className='nav-icon'>
          <div className='lang-container'>
            <Link href={currentRoute} locale="it">
              <IT title="Italiano" className='lang-icon'/>
            </Link>
            <Link href={currentRoute} locale="en">
              <GB title="English" className='lang-icon'/>
            </Link>
            {/* <Link href={currentRoute} locale="de">
              <DE title="Deutsch" className='lang-icon'/>
            </Link> */}
            {/* <Link href={currentRoute} locale="fr">
              <FR title="Français" className='lang-icon'/>
            </Link> */}
          </div>

          <button
            className='logout'
            onClick={() => {
              logout();
            }}
          >
            <FiLogOut />
          </button>
        </div>
    </div>
  )
}

export default Navbar


