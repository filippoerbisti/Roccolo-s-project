import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const NoAuthPeriod = ({ user, authorizedDates })  => {
    const { t } = useTranslation('common');

    // Start Date authorizedDates
    var dayStart = new Date(authorizedDates.start_date.toDate()).getUTCMonth() + 1;
    var monthStart = new Date(authorizedDates.start_date.toDate()).getUTCDate();
    var yearStart = new Date(authorizedDates.start_date.toDate()).getUTCFullYear();
    var start = dayStart + "/" + monthStart + "/" + yearStart;
    
    // End Date authorizedDates
    var dayEnd = new Date(authorizedDates.end_date.toDate()).getUTCMonth() + 1;
    var monthEnd = new Date(authorizedDates.end_date.toDate()).getUTCDate();
    var yearEnd = new Date(authorizedDates.end_date.toDate()).getUTCFullYear();
    var end = dayEnd + "/" + monthEnd + "/" + yearEnd;

    return (
        <div className='no-auth-period'>
            <h2>
                {t('greetings')}, {user.email}
                <br />
                {t('activeLicense')}
                <br /> {t('fromDate')}: {start}
                <br /> {t('toDate')}: {end}
            </h2>
        </div>
    )
}

export default NoAuthPeriod