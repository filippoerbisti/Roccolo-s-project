import React from 'react';
import Image from 'next/image';
import styles from '../styles/Moon.module.css';

const Moon = () => {

    const img = '/../public/product/custoza/custoza_1.jpg';
    if (typeof window !== 'undefined') {
        let bg = document.getElementById('bg');
        let moon = document.getElementById('moon');
        let mountain = document.getElementById('mountain');
        let road = document.getElementById('road');
        let text = document.getElementById('text');

        window.addEventListener('scroll', function() {
            var value = this.window.scrollY;

            bg.style.top = value * 0.5 + 'px';
            moon.style.left = value * 0.5 + 'px';
            mountain.style.top = value * 0.15 + 'px';
            road.style.top = value * 0.15 + 'px';
            text.style.top = value * 1 + 'px';
        })
    }

    return (
        <div className={styles.main}>

            <div className={styles.section}>
                <Image src="/../public/moon/bg.jpg" id="bg" layout='fill' alt="" />
                <Image src="/../public/moon/moon.png" id="moon" layout='fill' alt="" />
                <Image src="/../public/moon/mountain.png" id="mountain" layout='fill' alt="" />
                <Image src="/../public/moon/road.png" id="road" className={styles.road} layout='fill' alt="" />
                <h2 className={styles.text} id="text">Moon Light</h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, eaque, minus error iste optio maiores ab vero, maxime similique reprehenderit et repellat asperiores quos in aspernatur doloribus sed? Dolorem, ut.</p>

        </div>
    )
}

export default Moon