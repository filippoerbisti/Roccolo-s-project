import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import {Form, Proposals} from './';

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

const Main = () => {
    const { t } = useTranslation('common');
    const router = useRouter();

    // On load check if asPath has value (asPath is equals to #<id_section>)
    useEffect(() => {
        if(router.asPath)
            router.push('/');
    }, []);

    const paragrToSliceHistory = `${t('historyParagr1')} ${t('historyParagr2')} ${t('historyParagr3')}`;
    const paragrToSliceVineyard = `${t('vineyardParagr1')} ${t('vineyardParagr2')}`;

    return (
        <div>
            {/* Intro Img in backgroud */}
            <section className="section-background parallax">
                <h1 className="intro-title">
                    {t('introTitle1')},
                    <br />
                    {t('introTitle2')}
                </h1>
            </section>

            {/* Box history & vineyards (txt + img) */}
            <section className="box-container">
                <div className='height-card'>
                    <h2 className='text-center text-2xl my-5 font-bold'>{t('historyTitle')}</h2>
                    <div className='box-intro'>
                        <div className='box-txt-img'>
                            <div className='box-txt'>
                                <div className='pc-not-slice-text'>
                                    <p>{t('historyParagr1')}</p>
                                    <p>{t('historyParagr2')}</p>
                                    <p>{t('historyParagr3')}</p>
                                </div>
                                <p className='mobile-slice-text'>
                                    <ReadMore>
                                        {paragrToSliceHistory}
                                    </ReadMore>
                                </p>
                            </div>
                            <img className='box-img' src='https://res.cloudinary.com/dl38nyo08/image/upload/v1664462336/mapapp/roccolo-roccolo_v1pmex.jpg' />
                        </div>
                    </div>
                </div>
                
                <div className='height-card'>
                    <h2 className='text-center text-2xl my-5 font-bold'>{t('vineyardTitle')}</h2>
                    <div className='box-intro'>
                        <div className='box-txt-img'>
                            <div className='box-txt'>
                                <div className='pc-not-slice-text'>
                                    <p>{t('vineyardParagr1')}</p>
                                    <p>{t('vineyardParagr2')}</p>
                                </div>
                                <p className='mobile-slice-text'>
                                    <ReadMore>
                                        {paragrToSliceVineyard}
                                    </ReadMore>
                                </p>
                            </div>
                            <img className='box-img' src='https://res.cloudinary.com/dl38nyo08/image/upload/v1664462336/mapapp/roccolo-roccolo_v1pmex.jpg' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Box Visit */}
            <h2 id='visit' className='text-center text-2xl my-5 font-bold visit-title'>{t('visitTitle1')}</h2>
            <section className="section-background parallax1 flex flex-col pb-10">
                <h3>{t('visitTitle2')}</h3>
                <h4>{t('visitTitle3')}</h4>
                <div className='background-opacity'>
                    <p className='py-3.5'>
                        <span className='font-bold'>1. {t('visitParagrSpan1')}: </span>
                        {t('visitParagr1')}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo facere quod nesciunt iste quos sunt facilis soluta consectetur, modi perspiciatis obcaecati corporis delectus corrupti, temporibus repellendus? Itaque provident molestiae recusandae?
                    </p>
                    <p className='py-3.5'>
                        <span className='font-bold'>2. {t('visitParagrSpan2')}: </span>
                        {t('visitParagr2')}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima impedit esse tenetur totam, eligendi, perferendis nam culpa voluptatibus, ipsam consectetur sit mollitia rerum deserunt natus maxime asperiores? Iusto, modi quos.
                    </p>
                    <p className='py-3.5'>
                        <span className='font-bold'>3. {t('visitParagrSpan3')}: </span>
                        {t('visitParagr3')}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque suscipit saepe laborum tenetur placeat cumque. Cupiditate beatae earum dignissimos adipisci officiis dolorum dolores laborum, illum quas. Sed provident quae libero!
                    </p>
                </div>
            </section>

            {/* Box Selected Tastings */}
            <h2 id='tasting' className='text-center text-2xl my-5 font-bold'>{t('tastingTitle')}</h2>
            <section >
                <Proposals />
            </section>
                
            {/* Box Form */}
            <section id='booking' className='section-background parallax-form'>
                <div className='background-opacity-form'>
                    <h2 className='text-center text-2xl my-5 font-bold'>{t('formTitle')}</h2>
                    <div className="stepper">
                        <Form />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main