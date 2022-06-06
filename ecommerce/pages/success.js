import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import useTranslation from 'next-translate/useTranslation';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
    const { t } = useTranslation('common');
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
    }, []);

    return (
        <div className='success-wrapper'>
            <div className='success'>
                <p className='icon'>
                    <BsBagCheckFill />
                </p>
                <h2>{t('success:thxOrder')}</h2>
                <p className='email-msg'>Check your email inbox for the receipt.</p>
                <p className='description'>
                    If you have any questions, please mail
                    <a className='email' href='mailto:filippo.erbisti@gmail.com'>
                        filippo.erbisti@gmail.com   
                    </a>
                </p>
                <Link href='/'>
                    <button type='button' width="300px" className='btn'>
                        Continue Shopping
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Success