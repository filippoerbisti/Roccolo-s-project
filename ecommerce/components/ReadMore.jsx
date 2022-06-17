import React, { useState} from 'react';
import useTranslation from 'next-translate/useTranslation';

const ReadMore = ({ children }) => {
    const text = children;

    const { t } = useTranslation('common');

    const [isReadMore, setIsReadMore] = useState(true);
  
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
  
    return (
      <span>
        {isReadMore ? text.slice(0, 400) : text}
        
        {text.length >= 400 && (
          <span onClick={toggleReadMore} className='showMore'>
            {isReadMore ? `${t('readMore')}` : `${t('showLess')}`}
          </span>
        )}
      </span>
    )
}

export default ReadMore