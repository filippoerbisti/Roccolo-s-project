import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const NoAuthPeriod = ({ user, authorizedDates })  => {
    const { t } = useTranslation('common');

    const start = new Date(authorizedDates.start_date.toDate()).toString();
    const end = new Date(authorizedDates.end_date.toDate()).toString();

    return (
        <div className='no-auth-period'>
            <h2>
                {t('greetings')}, {user.email}
                <br />
                {t('activeLicense')}
                <br /> {t('fromDate')}: 
                <br /> {start}
                <br /> {t('toDate')}:
                <br /> {end}
            </h2>
        </div>
    )
}

export default NoAuthPeriod