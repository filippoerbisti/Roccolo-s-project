import React, { useState } from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import styles from '../styles/ContactUs.module.css';

const ContactUs = () => {
  const { t } = useTranslation('contact');

  const tOption = t('contact:objectEmail', { count: 150 }, { returnObjects: true });
  const [optionValue, setOptionValue] = useState('');
  const space = ' ';

  function logValue() {
    console.log(optionValue)
  }

  return (
    <div className={styles.mx60aic}>
      <h1 className={styles.title}>{t('title')}</h1>
      <p className={styles.paragraph}>{t('info')}</p>
      <div className={styles.center}>
        <div className={styles.row}>
          <div className={styles.col}>
            <label htmlFor={t('firstName')} className={styles.label}>{t('firstName')}</label>
            <input type="text" required placeholder={t('firstName')} className={styles.input} name={t('firstName')} id={t('firstName')} />
          </div>
          <div className={styles.col}>
            <label htmlFor={t('lastName')} className={styles.label}>{t('lastName')}</label>
            <input type="text" required placeholder={t('lastName')} className={styles.input} name={t('lastName')} id={t('lastName')} />
          </div>
        </div>

        <div className={styles.col}>
          <label htmlFor={t('email')} className={styles.label}>{t('email')}</label>
          <input type="email" required placeholder={t('email')} className={styles.input} name={t('email')} id={t('email')} />
        </div>

        <div className={styles.col}>
          <label htmlFor={t('object')} className={styles.label}>{t('object')}</label>
          <select defaultValue={tOption.option0} onChange={(e) => {setOptionValue(e.target.value)}} className={styles.select} name={t('object')} id={t('object')}>
            <option disabled>{tOption.option0}</option>
            <option value={tOption.option1}>{tOption.option1}</option>
            <option value={tOption.option2}>{tOption.option2}</option>
            <option value={tOption.option3}>{tOption.option3}</option>
          </select>
        </div>

        <div className={styles.col}>
          <label htmlFor={t('message')} className={styles.label}>{t('message')}</label>
          <textarea required placeholder={t('message')} className={styles.textarea} name={t('message')} id={t('message')} cols="30" rows="10"></textarea>
        </div>

        <div className={styles.col}>
          <label className={styles.label} htmlFor={t('newsletter')}>{t('newsletter')}</label>
          <div className={styles.rowNewslet}>
            <input type="checkbox" className={styles.checkbox} name={t('newsletter')} id={t('newsletter')} />
            <label htmlFor={t('newsletter')}>{t('newsletterPromo')}</label>
          </div>
        </div>

        <div className={styles.col}>
          <label className={styles.label} htmlFor={t('privacy')}>{t('privacy')}</label>
          <div className={styles.rowPrivacy}>
            <input type="checkbox" checked disabled className={styles.checkbox} name={t('privacy')} id={t('privacy')} />
            <label htmlFor={t('privacy')} className={styles.labelPrivacy}>
              <p>
                {t('acceptPrivacy')}
                <span className={styles.infoPrivacy}>
                  <Link href="/privacy-policy" className={styles.infoPrivacy}>{t('infoPrivacy')}</Link> *
                </span>
              </p>
            </label>
          </div>
        </div>

        <div className={styles.btnContainer}>
          <button onClick={logValue} className={styles.btn}>{t('button')}</button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs