import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const Info = ({ user, authorizedDates }) => {
  const { t } = useTranslation('common');

  // Start Date authorizedDates
  var dayStart = new Date(authorizedDates.start_date.toDate()).getUTCDate();
  var monthStart = new Date(authorizedDates.start_date.toDate()).getUTCMonth() + 1;
  var yearStart = new Date(authorizedDates.start_date.toDate()).getUTCFullYear();
  var start = dayStart + "/" + monthStart + "/" + yearStart;

  // End Date authorizedDates
  var dayEnd = new Date(authorizedDates.end_date.toDate()).getUTCDate();
  var monthEnd = new Date(authorizedDates.end_date.toDate()).getUTCMonth() + 1;
  var yearEnd = new Date(authorizedDates.end_date.toDate()).getUTCFullYear();
  var end = dayEnd + "/" + monthEnd + "/" + yearEnd;

  return (
    <div className='info'>
      <p style={{textAlign: 'center'}}>
        {t('helloInfo')} {user.email}, 
        <br /> {t('periodInfo')}: 
        <br /> <span style={{fontWeight: 'bold'}}>{start} - {end}</span>
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