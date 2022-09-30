import React from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import toast from 'react-hot-toast';
import Form from './Form';
import Proposals from './Proposals';

const Main = () => {
    const { t } = useTranslation('common');
    const router = useRouter();

    const mapapp = 'https://mapapproccolo.vercel.app';

    const bookTastingNow = () => {
        toast.loading('Redirecting...');
        router.push(mapapp);
    };

    return (
        <div>
            {/* Intro Img in backgroud */}
            <section className="section-background parallax">
                <div>
                    {/* EXAMPLE WITH TAILWINDCSS */}
                    <h1 className="intro-title">
                        Benvenuti al Roccolo,
                        <br />
                        dove il tempo è il signore del vino
                    </h1>
                </div>
            </section>

            {/* Box history & vineyards (txt + img) */}
            <section className="box-container">
                <div className='w-1/2 mr-2.5'>
                    <h2 className='text-center text-2xl my-5 font-bold'>La storia dell'antico Roccolo</h2>
                    <div className='box-intro'>
                        <div className='box-txt-img'>
                            <div className='box-txt'>
                                <p>Costruito nella metà dell'800, il Roccolo è una piccola costruzione di tre piani 
                                    utilizzato in origine dai cacciatori per catturare con le reti gli  uccelli migratori.
                                </p>
                                <p>Tale tecnica di caccia era definita Acupio, dal latino Yaucupium, avis (uccello) e capere (prendere).
                                    Sulle piante venivano posizionate le gabbiette con uccelli da richiamo.
                                    Le reti erano sistemate sulla fila esterna delle piante del boschetto.
                                </p>
                                <p>La cattura degli uccelli era favorita dal richiamo proveniente dalle gabbiette che attiravano i volatili migratori
                                    e da uno speciale strumento usato dai cacciatori, detto spauracchio, che veniva lanciato provocando rumore nel boschetto.
                                    L'allarme provocato dallo spauracchio spingeva gli uccelli verso le reti di cattura.
                                </p>
                            </div>
                            <img className='box-img' src='https://res.cloudinary.com/dl38nyo08/image/upload/v1664462336/mapapp/roccolo-roccolo_v1pmex.jpg' />
                        </div>
                    </div>
                </div>
                
                <div className='w-1/2 ml-2.5'>
                    <h2 className='text-center text-2xl my-5 font-bold'>I Vigneti</h2>
                    <div className='box-intro'>
                        <div className='box-txt-img'>
                            <div className='box-txt'>
                                <p>Da questi terreni selezioniamo le migliori uve per la produzione del Bardolino Classico e del Chiaretto, vini fruttatie freschi che sanno
                                    rappresentare al meglio la produzione vitivinicola del Lago di Garda.
                                    Corvina, Rondinella e Molinara nascono su terreni morenici di origine glaciale da vigneti che seguono un sistema di allevamento a cordone speronato libero.
                                </p>
                                <p>Quì, dove il Lago di Garda regola il clima del territorio, lo mitiga per garantire una temperatura media annua di 15°C, le mani esperte
                                    seguono con amorevole cura la coltivazione della vite e si dedicano alla produzione di vini di qualità.
                                </p>
                            </div>
                            <img className='box-img' src='https://res.cloudinary.com/dl38nyo08/image/upload/v1664462336/mapapp/roccolo-roccolo_v1pmex.jpg' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Box Visit */}
            <h2 className='text-center text-2xl my-5 font-bold'>Visite</h2>
            <section className="section-background parallax1 flex flex-col pb-10">
                <h3>Visita i posti suggestivi della tenuta e le sue cantine</h3>
                <h4>Immergiti nella natura e scopri la storia di questo posto</h4>
                <div className='background-opacity'>
                    <p className='py-3.5'>
                        <span className='font-bold'>1. Azienda: </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo facere quod nesciunt iste quos sunt facilis soluta consectetur, modi perspiciatis obcaecati corporis delectus corrupti, temporibus repellendus? Itaque provident molestiae recusandae?
                    </p>
                    <p className='py-3.5'>
                        <span className='font-bold'>2. Vigneto: </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima impedit esse tenetur totam, eligendi, perferendis nam culpa voluptatibus, ipsam consectetur sit mollitia rerum deserunt natus maxime asperiores? Iusto, modi quos.
                    </p>
                    <p className='py-3.5'>
                        <span className='font-bold'>3. Cantina: </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque suscipit saepe laborum tenetur placeat cumque. Cupiditate beatae earum dignissimos adipisci officiis dolorum dolores laborum, illum quas. Sed provident quae libero!
                    </p>
                </div>
            </section>

            {/* Box Selected Tastings */}
            <h2 className='text-center text-2xl my-5 font-bold'>Degustazioni</h2>
            <section >
                <Proposals />
            </section>
                
            {/* Box Form */}
            <section className='section-background parallax-form'>
                <div className='background-opacity-form'>
                    <h2 className='text-center text-2xl my-5 font-bold'>Prenota la tua degustazione</h2>
                    <div className="stepper">
                        <Form />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main