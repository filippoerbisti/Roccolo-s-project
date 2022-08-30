import React from 'react';
import Tasting from '../components/Tasting';
import Wedding from '../components/Wedding';

import styles from '../styles/Event.module.css';

const Event = () => {
  return (
    <div className={styles.mx20}>
      <section id="wedding">
        <Tasting id="tasting" />
      </section>

      <hr className={styles.hr} />

      <section id="wedding">
        <Wedding />
      </section>
    </div>
  )
}

export default Event