import React from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import toast from 'react-hot-toast';

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
                    <h1 className="text-3xl font-bold underline">
                        Title with TailwindCss
                    </h1>
                    <h2>Roccolo del Lago</h2>
                    <div className='btn-container'>
                        <button onClick={bookTastingNow} className='btn'>{t('bookNow')}</button>
                    </div>
                </div>
            </section>
            <section className="text-bloc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima fuga debitis quasi eius aliquid sapiente? Cumque blanditiis quibusdam, ex totam aliquam provident alias culpa, sit illo, eum doloribus doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reprehenderit voluptatum aperiam pariatur numquam praesentium recusandae, ipsa at iusto eveniet, distinctio sunt dolore nemo veniam maiores vitae deserunt cum ducimus.</p>
                <div className='btn-container'>
                    <button onClick={bookTastingNow} className='btn'>{t('bookNow')}</button>
                </div>
            </section>
            <section className="section-background parallax1">
                <h2>{t('ourWines')}</h2>
            </section>
                
            <section className="text-bloc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima fuga debitis quasi eius aliquid sapiente? Cumque blanditiis quibusdam, ex totam aliquam provident alias culpa, sit illo, eum doloribus doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reprehenderit voluptatum aperiam pariatur numquam praesentium recusandae, ipsa at iusto eveniet, distinctio sunt dolore nemo veniam maiores vitae deserunt cum ducimus.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima fuga debitis quasi eius aliquid sapiente? Cumque blanditiis quibusdam, ex totam aliquam provident alias culpa, sit illo, eum doloribus doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reprehenderit voluptatum aperiam pariatur numquam praesentium recusandae, ipsa at iusto eveniet, distinctio sunt dolore nemo veniam maiores vitae deserunt cum ducimus.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima fuga debitis quasi eius aliquid sapiente? Cumque blanditiis quibusdam, ex totam aliquam provident alias culpa, sit illo, eum doloribus doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reprehenderit voluptatum aperiam pariatur numquam praesentium recusandae, ipsa at iusto eveniet, distinctio sunt dolore nemo veniam maiores vitae deserunt cum ducimus.</p>
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