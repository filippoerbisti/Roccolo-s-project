import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const NoAuthPeriod = ({ user, userDoc })  => {
    const { t } = useTranslation('common');

    // Start Date authorizedDates
    var dayStart = new Date(userDoc.datebooking.toDate()).getUTCMonth() + 1;
    var monthStart = new Date(userDoc.datebooking.toDate()).getUTCDate();
    var yearStart = new Date(userDoc.datebooking.toDate()).getUTCFullYear();
    var start = dayStart + "/" + monthStart + "/" + yearStart;
    
    // End Date authorizedDates
    var dayEnd = new Date(userDoc.dateEndAccessApp.toDate()).getUTCMonth() + 1;
    var monthEnd = new Date(userDoc.dateEndAccessApp.toDate()).getUTCDate();
    var yearEnd = new Date(userDoc.dateEndAccessApp.toDate()).getUTCFullYear();
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