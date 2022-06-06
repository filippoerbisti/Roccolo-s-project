import styles from '../styles/BottomNav.module.css';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { RiHomeSmile2Line, RiHomeSmile2Fill, RiSearchEyeFill } from 'react-icons/ri';
import { BiSearchAlt } from 'react-icons/bi';
import { AiOutlineHeart, AiFillHeart, AiOutlineShopping } from 'react-icons/ai';
import { RiUser5Line, RiUser5Fill } from 'react-icons/ri';

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const BottomNav = props => {
    const router = useRouter();
    const [activeTabs, setActiveTabs] = useState(props.name);

    const { showCart, setShowCart, totalQuantities } = useStateContext();

    useEffect(() => {
        switch (activeTabs) {
            case 'home':
                router.push('/')
                break;
            case 'wine':
                router.push('/wine')
                break;
            default:
                router.push('/')
                break;
        }
    }, [activeTabs, router]);

    return (
        <div className={`${styles.bottomNav}`}>
            <div className={`${styles.bnTab}`}>
                {activeTabs === 'home' ?
                    <RiHomeSmile2Fill
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('home')}
                    /> :
                    <RiHomeSmile2Line
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('home')}
                    />}
            </div>
            <div className={`${styles.bnTab}`}>
                {activeTabs === 'wine' ?
                    <RiSearchEyeFill
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('wine')}
                    /> :
                    <BiSearchAlt
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('wine')}
                    />}
            </div>            
            <div className={`${styles.bnTab}`}>
                <AiOutlineShopping 
                    size='35'
                    color='#000'
                    onClick={() => setShowCart(true)}
                />

                {showCart && <Cart />}
            </div>
        </div>
    )
}

export default BottomNav