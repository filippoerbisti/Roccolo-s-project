import React from 'react'

const WineShop = () => {
  return (
    <div className={styles.mx20}>
      <h1 className={styles.title}>{t('title')}</h1>
      <p className={styles.paragraph}>{t('info')}</p>
      <p className={styles.paragraph}>{t('infoStaff')}</p>
    </div>
  )
}

export default WineShop