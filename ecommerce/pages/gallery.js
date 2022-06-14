import React from 'react';
import Galleries from '../components/Galleries';

import styles from '../styles/Gallery.module.css';

const Gallery = () => {
  return (
    <div className={styles.mx20}>
      <Galleries />
    </div>
  )
}

export default Gallery