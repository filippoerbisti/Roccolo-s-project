import React from 'react';
import HamburgerMenu from '../components/HamburgerMenu';
import Moon from '../components/Moon';

import styles from '../styles/Moon.module.css';

const Test = () => {
  return (
    <div className={styles.mx20}>
      <Moon />
      <HamburgerMenu />
    </div>
  )
}

export default Test