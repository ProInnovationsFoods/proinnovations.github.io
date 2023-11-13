import React from 'react';
import './video.css';

export const VideoIntro = () => {
 
  return (
    <section id='home' className='video'>
        <video autoPlay muted loop playsinline  src="./banner.mp4" type='video/mp4'>
        </video>
    </section>
  );
};
