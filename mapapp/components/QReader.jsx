import React from 'react';
import { BiQrScan } from 'react-icons/bi';

const QReader = () => {
  return (
    <div className='qr-reader-container'>
        <div className='qr-reader'>
            <BiQrScan className='qr-icon' />
        </div>
    </div>
  )
}

export default QReader