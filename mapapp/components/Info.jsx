import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const Info = ({ userDoc  }) => {
  const { t } = useTranslation('common');

  var today = new Date();

    // Uppercase First Letter
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  
    const fullname = capitalizeFirstLetter(userDoc.name) + " " + capitalizeFirstLetter(userDoc.surname);

  return (
    <div className='info'>
      <p style={{textAlign: 'center'}}>
        {t('helloInfo')} {fullname}, 
        <br /> {t('periodInfo')}: 
        <br /> <span style={{fontWeight: 'bold'}}>{userDoc.dateBooking} - {userDoc.dateEndAccessApp}</span>
        <br /> <span style={{fontWeight: 'bold'}}>{t('hourTasting')} {today.getHours() < 13 ? '11.00' : '16.00'}.</span>
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