import React from 'react';
import { useStateContext } from '../context/StateContext';

const HamburgerIcon = () => {

  const { showMenu, setShowMenu, changeIconHamburgerMenu, setChangeIconHamburgerMenu } = useStateContext();

  return (
    <div className='hamburger-menu'>
        <svg className='svg'>
            <defs>
                <filter id="gooeyness">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="gooeyness" />
                    <feComposite in="SourceGraphic" in2="gooeyness" operator="atop" />
                </filter>
            </defs>
        </svg>
        <div>
            <div 
                className={!changeIconHamburgerMenu ? "plate plate5" : "plate plate5 active"} 
                onClick={() => {
                    setChangeIconHamburgerMenu(!changeIconHamburgerMenu)
                    setShowMenu(!showMenu)
                }}
            >
                <svg className="burger" version="1.1" height="100" width="100" viewBox="0 0 100 100">
                    <path className="line line1" d="M 30,35 H 70 " />
                    <path className="line line2" d="M 50,50 H 30 L 34,32" />
                    <path className="line line3" d="M 50,50 H 70 L 66,68" />
                    <path className="line line4" d="M 30,65 H 70 " />
                </svg>
                <svg className="x" version="1.1" height="100" width="100" viewBox="0 0 100 100">
                    <path className="line" d="M 34,32 L 66,68" />
                    <path className="line" d="M 66,32 L 34,68" />
                </svg>
            </div>
        </div>
    </div>
  )
}

export default HamburgerIcon