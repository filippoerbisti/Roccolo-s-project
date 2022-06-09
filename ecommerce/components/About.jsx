import React, { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

import styles from '../styles/Contact.module.css';

const About = () => {
  const { t } = useTranslation('contact');

  const tOption = t('contact:objectEmail', { count: 150 }, { returnObjects: true });
  const [optionValue, setOptionValue] = useState('');

  function logValue() {
    console.log(optionValue)
  }

  return (
    <div className={styles.mx60}>
      <h1 className={styles.title}>{t('title')}</h1>
      <p className={styles.paragraph}>{t('info')}</p>
      <div>
        <div>
          <div>
            <label htmlFor={t('firstName')}>{t('firstName')}</label>
            <input type="text" placeholder={t('firstName')} name={t('firstName')} id={t('firstName')} />
          </div>
          <div>
            <label htmlFor={t('lastName')}>{t('lastName')}</label>
            <input type="text" placeholder={t('lastName')} name={t('lastName')} id={t('lastName')} />
          </div>
        </div>

        <div>
          <label htmlFor={t('email')}>{t('email')}</label>
          <input type="text" placeholder={t('email')} name={t('email')} id={t('email')} />
        </div>

        <div>
          <label htmlFor={t('object')}>{t('object')}</label>
          <select defaultValue={tOption.option0} onChange={(e) => {setOptionValue(e.target.value)}} name={t('object')} id={t('object')}>
            <option disabled>{tOption.option0}</option>
            <option value={tOption.option1}>{tOption.option1}</option>
            <option value={tOption.option2}>{tOption.option2}</option>
            <option value={tOption.option3}>{tOption.option3}</option>
          </select>
        </div>

        <div>
          <label htmlFor={t('message')}></label>
          <textarea placeholder={t('message')} name={t('message')} id={t('message')} cols="30" rows="5"></textarea>
        </div>

        
        <button onClick={logValue}>{t('button')}</button>
      </div>
    </div>
  )
}

export default About