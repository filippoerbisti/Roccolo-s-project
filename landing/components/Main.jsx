import React from 'react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

const Main = () => {
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
                    <h2>Roccolo del Lago</h2>
                    <div className='btn-container'>
                        <button onClick={bookTastingNow} className='btn'>Prenota Ora</button>
                    </div>
                </div>
            </section>
            <section className="text-bloc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima fuga debitis quasi eius aliquid sapiente? Cumque blanditiis quibusdam, ex totam aliquam provident alias culpa, sit illo, eum doloribus doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reprehenderit voluptatum aperiam pariatur numquam praesentium recusandae, ipsa at iusto eveniet, distinctio sunt dolore nemo veniam maiores vitae deserunt cum ducimus.</p>
                <div className='btn-container'>
                    <button onClick={bookTastingNow} className='btn'>Prenota Ora</button>
                </div>
            </section>
            <section className="section-background parallax1">
                <h2>I nostri Vini</h2>
            </section>
                
            <section className="text-bloc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima fuga debitis quasi eius aliquid sapiente? Cumque blanditiis quibusdam, ex totam aliquam provident alias culpa, sit illo, eum doloribus doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reprehenderit voluptatum aperiam pariatur numquam praesentium recusandae, ipsa at iusto eveniet, distinctio sunt dolore nemo veniam maiores vitae deserunt cum ducimus.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima fuga debitis quasi eius aliquid sapiente? Cumque blanditiis quibusdam, ex totam aliquam provident alias culpa, sit illo, eum doloribus doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reprehenderit voluptatum aperiam pariatur numquam praesentium recusandae, ipsa at iusto eveniet, distinctio sunt dolore nemo veniam maiores vitae deserunt cum ducimus.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima fuga debitis quasi eius aliquid sapiente? Cumque blanditiis quibusdam, ex totam aliquam provident alias culpa, sit illo, eum doloribus doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reprehenderit voluptatum aperiam pariatur numquam praesentium recusandae, ipsa at iusto eveniet, distinctio sunt dolore nemo veniam maiores vitae deserunt cum ducimus.</p>
            </section>
                
            <section className="section-background parallax2">
                <h2>La nostra Uva</h2>
            </section>
            <section className="section-background parallax3">
                <h2>I nostri Vigneti</h2>
            </section>
                    
        </div>
    )
}

export default Main