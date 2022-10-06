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
      <Swiper pagination={{clickable: true}} spaceBetween={20} modules={[Pagination]} className="mySwiper">
        <SwiperSlide className="proposal parallax-proposal-1">
            <h1 className='text-2xl my-5 uppercase'>{t('proposal1')}</h1>
            <img src="https://res.cloudinary.com/dl38nyo08/image/upload/v1665041204/Landing%20Roccolo/tasting_package_1_dokzq3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="proposal parallax-proposal-2">
            <h1 className='text-2xl my-5 uppercase'>{t('proposal2')}</h1>
            <img src="https://res.cloudinary.com/dl38nyo08/image/upload/v1665041204/Landing%20Roccolo/tasting_package_2_llmpyk.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="proposal parallax-proposal-3">
            <h1 className='text-2xl my-5 uppercase'>{t('proposal3')}</h1>
            <img src="https://res.cloudinary.com/dl38nyo08/image/upload/v1665041204/Landing%20Roccolo/tasting_package_3_ojd5kw.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Proposals