import React, { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import useTranslation from 'next-translate/useTranslation';
import * as emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import * as gtag from '../lib/gtag';

import styles from '../styles/ContactUs.module.css';

const ContactUs = () => {
  const { t } = useTranslation('contact');

  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const tOption = t('contact:objectEmail', { count: 150 }, { returnObjects: true });

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const fullname = capitalizeFirstLetter(firstname) + " " + capitalizeFirstLetter(lastname);

  const sendEmail = async (e) => {
    e.preventDefault();

    gtag.event({
      action: 'submit_form',
      category: 'Contact',
      label: email,
    })

    const isCaptchaChecked = () => {
      return grecaptcha && grecaptcha.getResponse().length !== 0;
    }

    if (isCaptchaChecked()) {
      if (fullname !== '' && email !== '' && subject !== '' && message !== '') {    
        const templateParams = {
          from_name: fullname,
          from_email: email,
          to_name: 'Roccolo del Lago',
          subject: subject,
          message: message,
        }

        const toastLoading = toast.loading(`${t('emailSend')}`);
        
        // Send email to ourselves -> info + Send email to client -> reminder
        emailjs.send(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then((result) => {
          setFirstname('');
          setLastname('');
          setEmail('');
          setSubject('');
          setMessage('');
          setNewsletter(false);
          
          toast.dismiss(toastLoading);
          toast.success(`${t('emailOk')}`);
        }, (error) => {
          toast.error(`${t('emailErr')}`);
        });

        //Newsletter - TODO

      } else {
        toast.error(`${t('emailCompiled')}`);
      }
    } else {
      toast.error(`${t('emailRecaptcha')}`)
    }
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
              <input 
                value={newsletter}
                onChange={(e) => {
                  setNewsletter(e.target.checked);
                }}
                type="checkbox" 
                className={styles.checkbox} 
                name={t('newsletter')} 
                id={t('newsletter')} 
              />
              <label htmlFor={t('newsletter')}>{t('newsletterPromo')} - TODO</label>
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

          {/* Google reCAPTCHA v2 checkbox  */}
          <div className={styles.recaptcha}>
            <div 
              className='g-recaptcha'
              data-sitekey={recaptchaSiteKey} 
              data-theme="light"
              data-size="normal"
            ></div> 

            <div className={styles.btnContainer}>
              <button type="submit" onClick={(e)=>{sendEmail(e)}} className={styles.btn}>{t('button')}</button>
            </div>
          </div>
        </div>
      </form>
      <Script src="https://www.google.com/recaptcha/api.js" async defer></Script>
    </div>
  )
}

export default ContactUs