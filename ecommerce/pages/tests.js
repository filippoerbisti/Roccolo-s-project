import React from 'react';
import { Moon, Look, View360 } from '../components';

import styles from '../styles/Test.module.css';

const Tests = () => {
  return (
    <div className={`${styles.mx20}`}>
      <Moon />
      <View360 className={styles.h} />
      <Look />
    </div>
  )
}

export default Tests