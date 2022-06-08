import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const Wedding = () => {
  const { t } = useTranslation('event');

  const tWedding = t('event:wedding', { count: 150 }, { returnObjects: true });

  return (
    <div>
      <h1>{tWedding.title}</h1>
      <p>{tWedding.p}</p>
    </div>
  )
}

export default Wedding