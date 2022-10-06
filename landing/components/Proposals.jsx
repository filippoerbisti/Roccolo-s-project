import React, { useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Proposals = () => {
  const { t } = useTranslation('common');

  const viewDetail1 = () => {
    let detail = document.getElementById('detail1');
    detail.style.display = 'flex';
    detail.style.flexDirection = 'column';
  }

  const hideDetail1 = () => {
    let detail = document.getElementById('detail1');
    detail.style.display = 'none';
  }

  const viewDetail2 = () => {
    let detail = document.getElementById('detail2');
    detail.style.display = 'flex';
    detail.style.flexDirection = 'column';
  }

  const hideDetail2 = () => {
    let detail = document.getElementById('detail2');
    detail.style.display = 'none';
  }

  const viewDetail3 = () => {
    let detail = document.getElementById('detail3');
    detail.style.display = 'flex';
    detail.style.flexDirection = 'column';
  }

  const hideDetail3 = () => {
    let detail = document.getElementById('detail3');
    detail.style.display = 'none';
  }

  return (
    <>
      <Swiper pagination={{clickable: true}} spaceBetween={20} modules={[Pagination]} className="mySwiper">
        <SwiperSlide className="proposal parallax-proposal-1">
          <h1 className='text-2xl my-5 uppercase'>{t('proposal1')}</h1>
          <button onClick={viewDetail1}>{t('clickDetail')}</button>
          <div className='proposal-card'>
            <div id='detail1' className='proposal-card-detail'>
              <span className='close-proposal-detail' onClick={hideDetail1}>X</span>
              <h2>{t('detail')}</h2>
              <p>ciao</p>
            </div>
            <img src="https://res.cloudinary.com/dl38nyo08/image/upload/v1665041204/Landing%20Roccolo/tasting_package_1_dokzq3.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="proposal parallax-proposal-2">
          <h1 className='text-2xl my-5 uppercase'>{t('proposal2')}</h1>
          <button onClick={viewDetail2}>{t('clickDetail')}</button>
          <div className='proposal-card'>
            <div id='detail2' className='proposal-card-detail'>
              <span className='close-proposal-detail' onClick={hideDetail2}>X</span>
              <h2>{t('detail')}</h2>
              <p>ciao</p>
            </div>
            <img src="https://res.cloudinary.com/dl38nyo08/image/upload/v1665041204/Landing%20Roccolo/tasting_package_2_llmpyk.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="proposal parallax-proposal-3">
          <h1 className='text-2xl my-5 uppercase'>{t('proposal3')}</h1>
          <button onClick={viewDetail3}>{t('clickDetail')}</button>
          <div className='proposal-card'>
            <div id='detail3' className='proposal-card-detail'>
              <span className='close-proposal-detail' onClick={hideDetail3}>X</span>
              <h2>{t('detail')}</h2>
              <p>ciao</p>
            </div>
            <img src="https://res.cloudinary.com/dl38nyo08/image/upload/v1665041204/Landing%20Roccolo/tasting_package_3_ojd5kw.png" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Proposals