import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const Info = ({ userDoc  }) => {
  const { t } = useTranslation('common');

  return (
    <div className='info'>
      <p style={{textAlign: 'center'}}>
        {t('helloInfo')} {userDoc.name} {userDoc.surname}, 
        <br /> {t('periodInfo')}: 
        <br /> <span style={{fontWeight: 'bold'}}>{userDoc.dateBooking} - {userDoc.dateEndAccessApp}</span>
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