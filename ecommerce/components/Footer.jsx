import React from 'react';
import { AiFillInstagram, AiOutlineFacebook } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p className='icons cursor-pointer'>
        <a href="https://it-it.facebook.com/roccolodellago/" className='cursor-pointer' target="_blank">
          <AiOutlineFacebook />
        </a>
        <a href="https://www.instagram.com/roccolodellago/" className='cursor-pointer' target="_blank">
          <AiFillInstagram />
        </a>
      </p>
      <p>© 2022 Roccolo del Lago. All Rights Reserved - 
        <a href="/privacy-policy"> Privacy/Policy</a>
      </p>
    </div>
  )
}

export default Footer