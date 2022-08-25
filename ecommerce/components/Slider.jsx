import React from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

import dataMainImgSlider from '../store/dataMainImgSlider';

const Slider = () => {
    const images = dataMainImgSlider;

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {images?.map((image) => 
                    <SwiperSlide key={image._id}>
                        <a href={image.url} target="_blank" rel="noopener noreferrer">
                            <Image 
                                src={image.url}
                                layout="intrinsic"
                                width={1300} 
                                height={800} 
                                // objectFit="contain"
                                className='cursor-pointer'
                            />
                        </a>
                    </SwiperSlide>
                )}

            </Swiper>
        </>
    )
}

export default Slider