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
                    <div className='box-intro-history'>
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
                            <img className='box-img' src='https://res.cloudinary.com/dl38nyo08/image/upload/v1665038674/Landing%20Roccolo/storia_c0imr6.png' />
                        </div>
                    </div>
                </div>
                
                <div className='height-card'>
                    <h2 className='text-center text-2xl my-5 font-bold'>{t('vineyardTitle')}</h2>
                    <div className='box-intro-vineyard'>
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
                            <img className='box-img' src='https://res.cloudinary.com/dl38nyo08/image/upload/v1665038673/Landing%20Roccolo/vigneti_i90ivg.png' />
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
                        Azienda gestione familiare
                    </p>
                    <p className='py-3.5'>
                        <span className='font-bold'>2. {t('visitParagrSpan2')}: </span>
                        {t('visitParagr2')}
                        Immergiti nel verde dei nostri vigneti
                    </p>
                    <p className='py-3.5'>
                        <span className='font-bold'>3. {t('visitParagrSpan3')}: </span>
                        {t('visitParagr3')}
                        Scopri i nostri vini nel nostro nuovo wineshop
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