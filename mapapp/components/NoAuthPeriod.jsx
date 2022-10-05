import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const NoAuthPeriod = ({ userDoc })  => {
    const { t } = useTranslation('common');

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    const fullname = capitalizeFirstLetter(userDoc.name) + " " + capitalizeFirstLetter(userDoc.surname);

    return (
        <div className='no-auth-period'>
            <h1 style={{marginBottom: '20px', fontSize: 'large'}}>MAPAPP</h1>
            <h2>
                {t('greetings')} {fullname}
                <br />
                {t('activeLicense')}
                <br /> {t('fromDate')}: {userDoc.dateBooking}
                <br /> {t('toDate')}: {userDoc.dateEndAccessApp}
            </h2>
        </div>
    )
}

export default NoAuthPeriod