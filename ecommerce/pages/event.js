import React from 'react';
import Tasting from '../components/Tasting';
import Wedding from '../components/Wedding';

import styles from '../styles/Event.module.css';

const Event = () => {
  return (
    <div className={styles.mx20}>
      <Tasting id="tasting" />

      <hr className={styles.hr} />

      <Wedding id="wedding" />
    </div>
  )
}

export default Event