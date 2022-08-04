import React from 'react';
import "./hero.css";


const hero = ({imageSrc}) => {
  return <div className="hero"> 
    <img src={imageSrc} alt="Travel" className='hero__image' />
        <h1 className='hero__title'>Travel made simple.</h1>
    </div>
 
}

export default hero