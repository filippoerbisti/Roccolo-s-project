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
      <p>Ciao {user.email}, <br /> ricordiamo il periodo di accesso all'app: <br /> {start} - {end}</p>
      <h4>Nota bene:</h4>
      <p>Per ottenere il 100% delle funzionalità e un migliore utilizzo si chiede di abilitare l'accesso alla fotocamera.</p>
    </div>
  )
}

export default Info