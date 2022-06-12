import React from 'react';
import React360Viewer from '../components/React360Viewer';
// import '../styles/global.css';
import styles from '../styles/Main.module.css'

const Tour = () => {
  return (
      <div className={styles.mx20}>
            <React360Viewer
                amount={36}
                imagePath="https://scaleflex.cloudimg.io/crop/1920x700/n/https://scaleflex.airstore.io/demo/360-car"
                fileName="iris-{index}.jpeg"
                spinReverse
                autoplay
                buttonClass="light"
            />
        </div>
  )
}

export default Tour