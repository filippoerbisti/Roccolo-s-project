import React from 'react';
import Script from 'next/script';

import styles from '../styles/Slider.module.css';
import { runSlider } from '../lib/slider'

const Slider = () => {

    runSlider();
    
    return (
        <div>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js" />

            <div className={styles.main}>
                <h1 className={styles.h1}>something</h1>
                <div className={styles.buttons}>
                    <button className={styles.next} onClick=''></button>
                    <button className={styles.prev} onClick=''></button>
                </div>
            </div>
        </div>
    )
}

export default Slider