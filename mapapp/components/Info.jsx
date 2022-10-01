import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const Info = ({ user, userDoc }) => {
  const { t } = useTranslation('common');

  // Start Date authorizedDates
  let dateBooking = userDoc.dateBooking.getUTCDate() + "/" + (userDoc.dateBooking.getUTCMonth() + 1) + "/" + userDoc.dateBooking.getUTCFullYear();

  // End Date authorizedDates
  let dateEndBooking = userDoc.dateEndAccessApp.getUTCDate() + "/" + (userDoc.dateEndAccessApp.getUTCMonth() + 1) + "/" + userDoc.dateEndAccessApp.getUTCFullYear();

  return (
    <div className='info'>
      <p style={{textAlign: 'center'}}>
        {t('helloInfo')} {user.email}, 
        <br /> {t('periodInfo')}: 
        <br /> <span style={{fontWeight: 'bold'}}>{dateBooking} - {dateEndBooking}</span>
      </p>
      <br />
      <p>
        {t('functionalityInfo')}
        <span style={{fontWeight: 'bold'}}> {t('camAccessInfo')}.</span>
      </p>
      <br />
    </div>
  )
}

export default Info