import React, {useState} from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import { client, urlFor } from '../../lib/client';

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

const StageDetails = ({ stage }) => {

    const { image, name, description, audio } = stage;

    return (
        <div className='detail-container'>
            <div style={{position: 'relative'}}>
                <h1>{name}</h1>
                <img src="https://res.cloudinary.com/dl38nyo08/image/upload/v1655394258/Roccolo%20del%20Lago/casual%20img/pexels-pixabay-39511_nkcwju.jpg" alt="" />
            </div>
            <audio style={{width: '100%', margin: '0 auto'}} controls>
                <source src="horse.ogg" type="audio/ogg" />
                <source src="horse.mp3" type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio> 
            <div className='detail-txt'>
                <h2 style={{textTransform: 'uppercase', marginBottom: '10px', textAlign: 'center'}}>{name}</h2>
                <p>
                    <ReadMore>{description}</ReadMore>
                </p>
            </div>
            <div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiperGalleryPath"
                >
                    {image?.map((img) => 
                        <SwiperSlide>
                            <img src={urlFor(img)} alt="" />
                        </SwiperSlide>
                    )}
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

export const getStaticPaths = async () => {
    const query = `*[_type == "stage"] {
        slug { 
             current 
        } 
    }`;

    const stages = await client.fetch(query);

    const paths = stages.map((stage) => ({
        params: {
            slug: stage.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == "stage" && slug.current == '${slug}'][0]`;

    const stage = await client.fetch(query);
  
    return {
      props: { stage }
    }
}

export default StageDetails