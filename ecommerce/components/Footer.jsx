import React from 'react';
import { AiFillInstagram, AiOutlineFacebook } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Roccolo del Garda © All Rights Reserved</p>
      <p className='icons cursor-pointer'>
        <a href="https://it-it.facebook.com/roccolodellago/" className='cursor-pointer' target="_blank">
          <AiOutlineFacebook />
        </a>
        <a href="https://www.instagram.com/roccolodellago/" className='cursor-pointer' target="_blank">
          <AiFillInstagram />
        </a>
      </p>
    </div>
  )
}

export default Footer