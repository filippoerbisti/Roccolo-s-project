import React, { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';

import styles from '../styles/ScrollToTop.module.css';

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className={styles.toptobtm}>
            {showTopBtn && (
                <FaAngleUp
                    className={styles.iconscrolltop}
                    onClick={goToTop}
                />
            )}
        </div>
    )
}

export default ScrollToTop