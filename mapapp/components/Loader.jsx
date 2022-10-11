import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const Loader = () => {
    const { t } = useTranslation('common');

    return (
        <div className='walker'>
            <div id="walk-container">
                <div id="walk"></div>
            </div>
            <p>{t('loading')} ...</p>
        </div>
    )
}

export default Loader