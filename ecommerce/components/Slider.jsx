import React from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { EffectCoverflow, Autoplay, Pagination, Navigation } from "swiper";

import dataMainImgSlider from '../store/dataMainImgSlider';

const Slider = () => {
    const images = dataMainImgSlider;

    return (
        <>
            <Swiper
                // slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {images?.map((image) => 
                    <SwiperSlide key={image.url}>
                        <a href={image.url} target="_blank" rel="noopener noreferrer">
                            <Image 
                                src={image.url}
                                layout="intrinsic"
                                width={1200} 
                                height={700} 
                                // objectFit="contain"
                                className='cursor-pointer'
                                // blurDataURL={image.url}
                                // placeholder='blur'
                            />
                        </a>
                    </SwiperSlide>
                )}

            </Swiper>
        </>
    )
}

export default Slider