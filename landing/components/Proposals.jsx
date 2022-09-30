import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Proposals = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Swiper pagination={{clickable: true}} modules={[Pagination]} className="mySwiper">
        <SwiperSlide className="proposal parallax-proposal-1">
            <h1 className='text-2xl my-5 font-bold'>{t('proposal1')}</h1>
            <img src="https://res.cloudinary.com/dl38nyo08/image/upload/v1654615348/Roccolo%20del%20Lago/degustazioni_zs5pmi.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="proposal parallax-proposal-2">
            <h1 className='text-2xl my-5 font-bold'>{t('proposal2')}</h1>
            <img src="https://res.cloudinary.com/dl38nyo08/image/upload/v1654615348/Roccolo%20del%20Lago/degustazioni_zs5pmi.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="proposal parallax-proposal-3">
            <h1 className='text-2xl my-5 font-bold'>{t('proposal3')}</h1>
            <img src="https://res.cloudinary.com/dl38nyo08/image/upload/v1654615348/Roccolo%20del%20Lago/degustazioni_zs5pmi.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Proposals