import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <Link href={"/"} className='cursor-pointer'>
            <img 
            src="https://res.cloudinary.com/dl38nyo08/image/upload/v1660806591/Roccolo%20del%20Lago/logo_iidjdd.png"
            width={240} 
            height={100} 
            objectFit="contain"
            className='cursor-pointer'
            />
        </Link>
        <div>
            
        </div>
    </div>
  )
}

export default Navbar