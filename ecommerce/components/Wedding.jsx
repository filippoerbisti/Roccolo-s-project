import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const Wedding = () => {
  const { t } = useTranslation('events');

  return (
    <div>
      <h1>{t('wedding.title')}</h1>
    </div>
  )
}

export default Wedding