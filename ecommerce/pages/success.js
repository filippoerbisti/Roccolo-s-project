import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import useTranslation from 'next-translate/useTranslation';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
    const { t } = useTranslation('success');
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
                <h2>{t('thxOrder')}</h2>
                <p className='email-msg'>{t('checkEmail')}</p>
                <p className='description'>
                    {t('anyQuestion')}
                    <a className='email' href='mailto:filippo.erbisti@gmail.com'>
                        filippo.erbisti@gmail.com   
                    </a>
                </p>
                <Link href='/'>
                    <button type='button' width="300px" className='btn'>
                        {t('common:contShopping')}
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Success