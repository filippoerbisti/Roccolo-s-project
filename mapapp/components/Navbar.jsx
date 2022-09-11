import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiLogOut } from 'react-icons/fi';

import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';

const Navbar = () => {

  const { logout } = useAuth();
  const router = useRouter();

  return (
    <div className='navbar-container'>
        <Link href={"/"} className='cursor-pointer'>
            <img 
            src="https://res.cloudinary.com/dl38nyo08/image/upload/v1660806591/Roccolo%20del%20Lago/logo_iidjdd.png"
            width={240} 
            height={100} 
            // objectfit="contain"
            className='cursor-pointer'
            />
        </Link>
        <button
          onClick={() => {
            logout()
            router.push('/')
          }}
        >
          <FiLogOut />
        </button>
    </div>
  )
}

export default Navbar


