import React from 'react';
import $ from "jquery";

import styles from '../styles/BackImage.module.css';

const BackImage = () => {

    if (typeof window !== "undefined") {
        $(window).scroll(function() {
            var scrollPosition = $(window).scrollTop() / 2;
            $('section').css({
                'background-position-x': - scrollPosition + 'px',
            })
        })
    }

  return (
    <div className={styles.mainBackImage}>
        <section></section>
    </div>
  )
}

export default BackImage