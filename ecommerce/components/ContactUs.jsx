import React, { useState, useRef } from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import * as emailjs from '@emailjs/browser';
// import Recaptcha from 'react-recaptcha';
import axios from 'axios';

import styles from '../styles/ContactUs.module.css';

const ContactUs = () => {
  const { t } = useTranslation('contact');

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const fullname = firstname + " " + lastname;

  // const nameRef = useRef(null)
  // const emailRef = useRef(null)
  // const messageRef = useRef(null)

  const tOption = t('contact:objectEmail', { count: 150 }, { returnObjects: true });

  // const handleSubmit = async (e) => { 
  //   e.preventDefault();
  //   console.log('Sending')

  //   let data = {
  //     fullname,
  //     email,
  //     subject,
  //     message
  //   }

  //   axios.post('http://localhost:3000/api/mail', data, {
  //     headers: {
  //       'Accept': 'application/json, text/plain, */*',
  //       'Content-Type': 'application/json'
  //     },
  //     // body: JSON.stringify(data)
  //   })
  //   // fetch('/api/mail', {
  //   //   method: 'POST',
  //   //   headers: {
  //   //     'Accept': 'application/json, text/plain, */*',
  //   //     'Content-Type': 'application/json'
  //   //   },
  //   //   body: JSON.stringify(data)
  //   // })
  //   .then((res) => {
  //     console.log('Response received')
  //     if (res.status === 200) {
  //       console.log('Response succeeded!')
  //       setFirstname('');
  //       setLastname('');
  //       setEmail('');
  //       setSubject(`${tOption.option0}`);
  //       setMessage('');
  //     }
  //   })
  //   .catch(
  //     (e) => console.log(e),
  //   );
  // }

    // const [recaptchaLoad, setRecaptchaLoad] = useState(false);
    // const [isVerified, setIsVerified] = useState(false);
    
    // const recaptchaLoaded = () => {
    //     setRecaptchaLoad(true);
    // }
    
    // const verifiedRecaptcha = (response) => {
    //     if (response)
    //       setIsVerified(true);
    // }

  function sendEmail(e) {
    e.preventDefault();
    const templateParams = {
      from_name: fullname,
      from_email: email,
      to_name: 'Roccolo del Lago',
      subject: subject,
      message: message,
    }
    // if (recaptchaLoad && isVerified) {
        emailjs.send(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then((result) => {
          console.log('OK'+result.text);
        }, (error) => {
          console.log(error.text);
        });
    // } else {
    //     console.error('Please check reCaptcha and try again.')
    // }
  }

  return (
    <div className={styles.mx20}>
      <h1 className={styles.title}>{t('title')}</h1>
      <p className={styles.paragraph}>{t('info')}</p>
      <p className={styles.paragraph}>{t('infoStaff')}</p>
      <form method="post" onSubmit={sendEmail} className={styles.mx60aic}>
        <div className={styles.center}>
          <div className={styles.row}>
            <div className={styles.col}>
              <label htmlFor={t('firstName')} className={styles.label}>{t('firstName')}</label>
              <input 
                type="text" 
                required 
                value={firstname}
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
                placeholder={t('firstName')} 
                className={styles.input} 
                name={t('firstName')} 
                id={t('firstName')} 
              />
            </div>
            <div className={styles.col}>
              <label htmlFor={t('lastName')} className={styles.label}>{t('lastName')}</label>
              <input 
                type="text" 
                required 
                value={lastname}
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
                placeholder={t('lastName')} 
                className={styles.input} 
                name={t('lastName')} 
                id={t('lastName')} 
              />
            </div>
          </div>

          {/* <Recaptcha
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    render='explicit'
                    onloadCallback={recaptchaLoaded}
                    verifyCallback={verifiedRecaptcha}
          /> */}

          <div className={styles.col}>
            <label htmlFor={t('email')} className={styles.label}>{t('email')}</label>
            <input 
              type="email" 
              required 
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder={t('email')} 
              className={styles.input} 
              name={t('email')} 
              id={t('email')} 
            />
          </div>

          <div className={styles.col}>
            <label htmlFor={t('object')} className={styles.label}>{t('object')}</label>
            <select 
              defaultValue={tOption.option0} 
              onChange={(e) => {
                setSubject(e.target.value)
              }} 
              className={styles.select} name={t('object')} 
              id={t('object')}
            >
              <option disabled>{tOption.option0}</option>
              <option value={tOption.option1}>{tOption.option1}</option>
              <option value={tOption.option2}>{tOption.option2}</option>
              <option value={tOption.option3}>{tOption.option3}</option>
            </select>
          </div>

          <div className={styles.col}>
            <label htmlFor={t('message')} className={styles.label}>{t('message')}</label>
            <textarea 
              required
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }} 
              placeholder={t('message')} 
              className={styles.textarea} 
              name={t('message')} 
              id={t('message')} 
              cols="30" 
              rows="10"
            ></textarea>
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
            <button type="submit" onClick={(e)=>{sendEmail(e)}} className={styles.btn}>{t('button')}</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactUs