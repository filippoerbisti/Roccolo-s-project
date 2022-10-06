import React, {useState} from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

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

const Path = () => {
  let lorem = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita beatae cumque eligendi quis voluptatibus dignissimos ducimus pariatur! Necessitatibus, repudiandae, eveniet itaque tenetur pariatur nemo dolor ab iure dolores quos mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus tempora totam nam omnis sequi recusandae cumque, vitae officia sint doloribus eligendi eum, pariatur temporibus qui minima, sapiente magnam quos modi.';

  return (
    <div className='detail-container'>
      <div style={{position: 'relative'}}>
        <h1>TAPPA 1</h1>
        <img src="https://res.cloudinary.com/dl38nyo08/image/upload/v1655394258/Roccolo%20del%20Lago/casual%20img/pexels-pixabay-39511_nkcwju.jpg" alt="" />
      </div>
      <audio controls>
        <source src="horse.ogg" type="audio/ogg" />
        <source src="horse.mp3" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio> 
      <div className='detail-txt'>
        <p>
          <ReadMore>{lorem}</ReadMore>
        </p>
      </div>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiperGalleryPath"
        >
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dl38nyo08/image/upload/v1652781402/samples/landscapes/nature-mountains.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dl38nyo08/image/upload/v1652781402/samples/landscapes/nature-mountains.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dl38nyo08/image/upload/v1652781402/samples/landscapes/nature-mountains.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dl38nyo08/image/upload/v1652781402/samples/landscapes/nature-mountains.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='detail-btn'>
        <button className='detail-complete-btn'>Completa tappa</button>
        <Link href={''}>
          <p style={{textDecoration: 'underline'}}>Prossima tappa &gt;</p>
        </Link>
      </div>
    </div>
  )
}

export default Path