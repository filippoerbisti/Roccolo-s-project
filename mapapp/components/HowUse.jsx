import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const HowUse = ({ user }) => {
  const { t } = useTranslation('common');

  return (
    <div>
      <p>Inserire spiegazione e foto per download app</p>
    </div>
  )
}

export default HowUse