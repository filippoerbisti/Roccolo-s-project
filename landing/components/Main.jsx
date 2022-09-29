import React from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import toast from 'react-hot-toast';
import Form from './Form';

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
            <section className="section-background parallax">
                <div>
                    {/* EXAMPLE WITH TAILWINDCSS */}
                    <h1 className="text-3xl font-bold text-center">
                        Benvenuti al Roccolo,
                        <br />
                        dove il tempo è il signore del vino
                    </h1>
                </div>
            </section>
            <section className="text-bloc flex flex-row">
                <div className='box-intro'>
                    <h2 className='text-center text-2xl'>La storia dell'antico Roccolo</h2>
                    <div className='flex flex-row'>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis temporibus totam odit, magni rem eaque, quas maiores voluptatum doloribus repellendus qui ipsam est error quod nobis atque dolore, non ipsa.</p>
                        <img src='https://res.cloudinary.com/dl38nyo08/image/upload/v1654615348/Roccolo%20del%20Lago/degustazioni_zs5pmi.png' />
                    </div>
                </div>
                <div className='box-intro'>
                    <h2 className='text-center text-2xl'>I Vigneti</h2>
                    <div className='flex flex-row'>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis temporibus totam odit, magni rem eaque, quas maiores voluptatum doloribus repellendus qui ipsam est error quod nobis atque dolore, non ipsa.</p>
                        <img src='https://res.cloudinary.com/dl38nyo08/image/upload/v1654615348/Roccolo%20del%20Lago/degustazioni_zs5pmi.png' />
                    </div>
                </div>
            </section>

            <h2 className='text-center text-2xl mt-10'>Visite</h2>
            <section className="section-background parallax1 flex flex-col">
                <h3 className='text-2xl p-5'>Visita i posti suggestivi della tenuta e le sue cantine</h3>
                <h4 className='text-xl p-5'>Immergiti nella natura e scopri la storia di questo posto</h4>
                <div>
                    <p>
                        <span className='font-bold'>1. Azienda:</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo facere quod nesciunt iste quos sunt facilis soluta consectetur, modi perspiciatis obcaecati corporis delectus corrupti, temporibus repellendus? Itaque provident molestiae recusandae?
                    </p>
                    <p>
                        <span className='font-bold'>2. Vigneto:</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima impedit esse tenetur totam, eligendi, perferendis nam culpa voluptatibus, ipsam consectetur sit mollitia rerum deserunt natus maxime asperiores? Iusto, modi quos.
                    </p>
                    <p>
                        <span className='font-bold'>3. Cantina:</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque suscipit saepe laborum tenetur placeat cumque. Cupiditate beatae earum dignissimos adipisci officiis dolorum dolores laborum, illum quas. Sed provident quae libero!
                    </p>
                </div>
            </section>

            <h2 className='text-center text-2xl mt-10'>Degustazioni</h2>
            <section className="section-background parallax1 flex flex-col">
                <h3 className='text-2xl p-5'>3 proposte</h3>
            </section>
                
            <section className="text-bloc stepper">
                <Form />
            </section>
                
            <section className="section-background parallax2">
                <h2>{t('ourGrape')}</h2>
            </section>
            <section className="section-background parallax3">
                <h2>{t('ourVineyards')}</h2>
            </section>
                    
        </div>
    )
}

export default Main