import React from 'react';
import { Moon, BackImage } from '../components';

import styles from '../styles/Moon.module.css';

const Test = () => {
  return (
    <div className={styles.mx20}>
      <Moon />
      <BackImage />
    </div>
  )
}

export default Test