import React from 'react';
import '../assets/styles/styles.css';

function HeroBanner() {
  return (
    <>
     <div className='hero-banner'>
        <div>
            <h1 className='text-center'>Automate UI Design & Code Generation In Minutes</h1>
            <p className='subtitle'>Drag, Drop, and Get Code for Android & Web Instantly.</p>
            <div className='flex justify-center mt-4'>
                <h1 className='get-started-button'>Get Started</h1>
            </div>
        </div>
     </div> 
    </>
  )
}

export default HeroBanner
