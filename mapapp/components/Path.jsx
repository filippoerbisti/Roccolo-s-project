import React from 'react';
import Link from 'next/link';

const Path = () => {
  return (
    <div className='detail-container'>
      <div style={{position: 'relative'}}>
        <h1>TAPPA 1</h1>
        <img src="https://res.cloudinary.com/dl38nyo08/image/upload/v1655394258/Roccolo%20del%20Lago/casual%20img/pexels-pixabay-39511_nkcwju.jpg" alt="" />
      </div>
      <audio controls>
        <source src="horse.ogg" type="audio/ogg" />
        <source src="horse.mp3" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio> 
      <div className='detail-txt'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita beatae cumque eligendi quis voluptatibus dignissimos ducimus pariatur! Necessitatibus, repudiandae, eveniet itaque tenetur pariatur nemo dolor ab iure dolores quos mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus tempora totam nam omnis sequi recusandae cumque, vitae officia sint doloribus eligendi eum, pariatur temporibus qui minima, sapiente magnam quos modi.</p>
      </div>
      <div>
        <img src="https://res.cloudinary.com/dl38nyo08/image/upload/v1655394258/Roccolo%20del%20Lago/casual%20img/pexels-pixabay-39511_nkcwju.jpg" alt="" />
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

export default Path