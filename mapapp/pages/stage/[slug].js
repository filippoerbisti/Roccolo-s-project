import React, {useState} from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import { useAuth } from '../../context/AuthContext';
import { 
    doc,  
    increment,  
    updateDoc
  } from 'firebase/firestore';
  import { database } from '../../utils/firebase';

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
    const { userDoc } = useAuth();

    const { image, name, description, audio, path, nextStage } = stage;

    const completePath = async (userDoc) => {
        if(userDoc !== null) {
            updateDoc(doc(database, "user_document", userDoc.email), {nPathsToComplete: increment(-1)})
            updateDoc(doc(database, "user_document", userDoc.email), {path6: false})
            userDoc[path] = true;
        }
    }

    return (
        <div className='detail-container'>
            <div style={{position: 'relative'}}>
                <h1>{name}</h1>
                <img src={urlFor(image[0])} alt="" />
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
                {!userDoc[path] &&
                    <button 
                        className='detail-complete-btn' 
                        style={{cursor: 'pointer'}}
                        onClick={completePath}
                    >
                        Completa tappa
                    </button>
                }
                {userDoc[path] &&
                    <button 
                        className='detail-complete-btn' 
                        style={{opacity: '0.7', cursor: 'not-allowed'}}
                        disabled
                    >
                        Completata!
                    </button>
                }
                {nextStage &&
                    <Link href={'/stage' + nextStage} style={{cursor: 'pointer'}}>
                        <p style={{textDecoration: 'underline', cursor: 'pointer'}}>Prossima tappa &gt;</p>
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
