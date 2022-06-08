import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const Tasting = () => {
  const { t } = useTranslation('event');

  const tTasting = t('event:tasting', { count: 150 }, { returnObjects: true });

  return (
    <div>
      <h1>{tTasting.title}</h1>
      <p>{tTasting.p}</p>
    </div>
  )
}

export default Tasting