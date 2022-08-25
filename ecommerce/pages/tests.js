import React from 'react';
import { Look, Teste, View360 } from '../components';

import styles from '../styles/Test.module.css';

const Tests = () => {
  return (
    <div className={`${styles.mx20}`}>
      <Teste />
      {/* <View360 className={styles.h} />
      <Look /> */}
    </div>
  )
}

export default Tests