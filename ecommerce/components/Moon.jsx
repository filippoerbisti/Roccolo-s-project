import React from 'react';
import Image from 'next/image';
import styles from '../styles/Moon.module.css';

const Moon = () => {

    const img = '/../public/product/custoza/custoza_1.jpg';
    // if (typeof window !== 'undefined') {
    //     let bg = document.getElementById('bg');
    //     let moon = document.getElementById('moon');
    //     let mountain = document.getElementById('mountain');
    //     let road = document.getElementById('road');
    //     let text = document.getElementById('text');

    //     window.addEventListener('scroll', function() {
    //         var value = this.window.scrollY;

    //         bg.style.top = value * 0.5 + 'px';
    //         moon.style.left = value * 0.5 + 'px';
    //         mountain.style.top = value * 0.15 + 'px';
    //         road.style.top = value * 0.15 + 'px';
    //         text.style.top = value * 1 + 'px';
    //     })
    // }

    return (
        <div className={styles.main}>


            <div className={styles.card}>
                <div className={styles.imgBox}>
                    <Image className={styles.img} src={img} objectFit='contain' width={100} height={500} alt="" />
                </div>
                <div className={styles.contentBox}>
                    <h2 className={styles.h2}>roccolo del lago</h2>
                    <div className={styles.priceBox}>
                        <h4 className={styles.h3}>Price:</h4>
                        <span className={styles.span}>20€</span>
                    </div>
                    <button className={styles.btn} href='#'>Buy Now</button>
                </div>
            </div>


            {/* <div className={styles.section}>
                <Image src="/../public/moon/bg.jpg" id="bg" layout='fill' alt="" />
                <Image src="/../public/moon/moon.png" id="moon" layout='fill' alt="" />
                <Image src="/../public/moon/mountain.png" id="mountain" layout='fill' alt="" />
                <Image src="/../public/moon/road.png" id="road" className={styles.road} layout='fill' alt="" />
                <h2 className={styles.text} id="text">Moon Light</h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, eaque, minus error iste optio maiores ab vero, maxime similique reprehenderit et repellat asperiores quos in aspernatur doloribus sed? Dolorem, ut.</p> */}



        </div>
    )
}

export default Moon