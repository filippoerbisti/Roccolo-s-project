import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const NoAuthPeriod = ({ userDoc })  => {
    const { t } = useTranslation('common');

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    const fullname = capitalizeFirstLetter(userDoc.name) + " " + capitalizeFirstLetter(userDoc.surname);

    var today = new Date();

    return (
        <div className='no-auth-period-container'>
            <div className='no-auth-period'>
                <h1 style={{marginBottom: '20px', fontSize: 'larger', textAlign: 'center', letterSpacing: '2px'}}>MAPAPP</h1>
                <h2>
                    {t('greetings')} {fullname},
                    <br />
                    {t('activeLicense')}:
                    <br /> {t('fromDate')}: {userDoc.dateBooking}
                    <br /> {t('toDate')}: {userDoc.dateEndAccessApp}
                </h2>
                <br />
                <h3 style={{fontWeight: 'bold'}}>{t('tastingRemember')} {today.getHours() < 13 ? '11.00' : '16.00'} {t('on')} {userDoc.dateBooking}.</h3>
            </div>
        </div>
    )
}

export default NoAuthPeriod