import React from 'react';
import './about.css';

export const About = () => {
 
  return (
    <div className='about-container' id ='about'>
        <div className='flex-row d-flex justify-content-center'>
            <h1 className='mt-5 mb-5 title-about'>ABOUT US</h1>
        </div>
        <h2 className='about-description mt-5'>Welcome to PRO INNOVENTIONS, where innovation meets precision in every solution. With a commitment to excellence, we are your trusted partner for Conveyor Belt Design, Process Automation, Manufacturing of Metal-Mechanical Solutions, and Engineering Parts Services.</h2>
       {/*  <div className='flex-row d-flex justify-content-center about-description'>
            <p>Welcome to PRO INNOVENTIONS, where innovation meets precision in every solution. With a commitment to excellence, we are your trusted partner for Conveyor Belt Design, Process Automation, Manufacture of Metal-Mechanical Solutions, and Engineering Parts Services.</p>
        </div> */}
    </div>
  );
};
