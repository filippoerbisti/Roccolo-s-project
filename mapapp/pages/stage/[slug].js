import React, {useState} from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

import { client, urlFor } from '../../lib/client';
import { useAuth } from '../../context/AuthContext';
import { doc, increment, updateDoc } from "firebase/firestore";
import { database } from '../../utils/firebase';

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
    const { t } = useTranslation('common');

    const currentLang = useRouter().locale;

    const { userDoc } = useAuth();

    const { image, name, description, audio, path, nextStage } = stage;

    const map = '#map';

    const assetAudio = audio.asset._ref.split('-'); // return array 3 object ("file", id, format)
    const idAudio = assetAudio[1];
    const formatAudio = assetAudio[2];
    const audioUrl = `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${idAudio}.${formatAudio}`;

    const completeStage = async() => {
        if(userDoc) {
            const stageRef = doc(database, "user_document", userDoc.email);

            switch (path) {
                case 'path1':
                    await updateDoc(stageRef, {
                        path1: true,
                        nPathsToComplete: increment(-1)
                    });
                    userDoc[path] = true;
                    break;
                case 'path2':
                    await updateDoc(stageRef, {
                        path2: true,
                        nPathsToComplete: increment(-1)
                    });
                    userDoc[path] = true;
                    break;
                case 'path3':
                    await updateDoc(stageRef, {
                        path3: true,
                        nPathsToComplete: increment(-1)
                    });
                    userDoc[path] = true;
                    break;
                case 'path4':
                    await updateDoc(stageRef, {
                        path4: true,
                        nPathsToComplete: increment(-1)
                    });
                    userDoc[path] = true;
                    break;
                case 'path5':
                    await updateDoc(stageRef, {
                        path5: true,
                        nPathsToComplete: increment(-1)
                    });
                    userDoc[path] = true;
                    break;
                case 'path6':
                    await updateDoc(stageRef, {
                        path6: true,
                        nPathsToComplete: increment(-1)
                    });
                    userDoc[path] = true;
                    break;
                default:
                    break;
            }
        }
    }

    return (
        <div className='detail-container'>
            <div style={{position: 'relative', backgroundImage: `url(${urlFor(image[0])})`, backgroundAttachment: 'fixed', backgroundPosition: 'top', backgroundRepeat: 'no-repeat', backgroundSize: '500px 350px', height: '250px'}}>
                <h1>{name}</h1>
                <Link href={'/' + currentLang + map}>
                    <span className='x-stage-detail'>X</span>
                </Link>
                {/* <img src={urlFor(image[0])} alt="" /> */}
            </div>
            <audio style={{width: '100%', margin: '0 auto'}} controls>
                <source src={audioUrl} type="audio/ogg" />
                <source src={audioUrl} type="audio/mpeg" />
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
                    // navigation={true}
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
                        onClick={completeStage}
                    >
                        {t('stageToBeComplete')}
                    </button>
                }
                {userDoc[path] &&
                    <button 
                        className='detail-complete-btn' 
                        style={{cursor: 'not-allowed', opacity: '0.7'}}
                        disabled
                    >
                        {t('stageCompleted')}!
                    </button>
                }
                {nextStage &&
                    <Link href={'/stage' + nextStage} style={{cursor: 'pointer'}}>
                        <p style={{textDecoration: 'underline', cursor: 'pointer'}}>{t('nextStage')} &gt;</p>
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
