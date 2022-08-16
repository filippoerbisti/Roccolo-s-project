import React from 'react';
import { Moon, BackImage, View360 } from '../components';

import styles from '../styles/Test.module.css';

const Tests = () => {
  return (
    <div className={`${styles.mx20} ${styles.main360vr}`}>
      <Moon />
      <BackImage />
      <View360 className={styles.h} />
    </div>
  )
}

export default Tests