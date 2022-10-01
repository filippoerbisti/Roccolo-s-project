import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const NoAuthPeriod = ({ user, userDoc })  => {
    const { t } = useTranslation('common');

    return (
        <div className='no-auth-period'>
            <h2>
                {t('greetings')}, {user.email}
                <br />
                {t('activeLicense')}
                <br /> {t('fromDate')}: {userDoc.dateBooking}
                <br /> {t('toDate')}: {userDoc.dateEndAccessApp}
            </h2>
        </div>
    )
}

export default NoAuthPeriod