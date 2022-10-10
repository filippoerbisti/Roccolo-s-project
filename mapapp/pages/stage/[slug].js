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

    const { image, name, description, audio, nextStage } = stage;

    return (
        <div className='detail-container'>
            <div style={{position: 'relative', backgroundImage: `url(${urlFor(image[0])})`, backgroundAttachment: 'fixed', backgroundPosition: 'top', backgroundRepeat: 'no-repeat', backgroundSize: '500px 350px', height: '250px'}}>
                <h1>{name}</h1>
                {/* <img src={urlFor(image[0])} alt="" /> */}
            </div>
            <audio style={{width: '100%', margin: '0 auto'}} controls>
                <source src={audio} type="audio/ogg" />
                <source src={audio} type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio> 
            <div className='detail-txt'>
                <h2 style={{textTransform: 'uppercase', marginBottom: '10px', textAlign: 'center'}}>{name}</h2>
                <p>
                    <ReadMore>{description}</ReadMore>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, incidunt nobis est numquam facere perferendis ex tempora molestias asperiores sed praesentium eligendi repellendus corrupti ducimus alias dolorem dolore ab quidem.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, incidunt nobis est numquam facere perferendis ex tempora molestias asperiores sed praesentium eligendi repellendus corrupti ducimus alias dolorem dolore ab quidem.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, incidunt nobis est numquam facere perferendis ex tempora molestias asperiores sed praesentium eligendi repellendus corrupti ducimus alias dolorem dolore ab quidem.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, incidunt nobis est numquam facere perferendis ex tempora molestias asperiores sed praesentium eligendi repellendus corrupti ducimus alias dolorem dolore ab quidem.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, incidunt nobis est numquam facere perferendis ex tempora molestias asperiores sed praesentium eligendi repellendus corrupti ducimus alias dolorem dolore ab quidem.
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
                        <SwiperSlide key={img._id}>
                            <img src={urlFor(img)} alt="" />
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
            <div className='detail-btn'>
                <button 
                    className='detail-complete-btn' 
                    style={{cursor: 'pointer'}}
                >
                    Completa tappa
                </button>
                {nextStage &&
                    <Link href={'/stage' + nextStage} style={{cursor: 'pointer'}}>
                        <p style={{textDecoration: 'underline'}}>Prossima tappa &gt;</p>
                    </Link>
                }
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
