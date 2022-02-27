import React from 'react';
import hero from "../images/Hero-responsive.png";
import cohete from "../images/cohete.png"
import "./css/Cards.css";
import browse from "../browse.svg"


export default function Cards() {
  return (
    <div className='cards-container'>
        <img src={hero} alt='hero-responsive' className='ilustracion'/>
        <div className='Card1'>
          <img src={cohete} alt="cohete" className='coheteimg'/>
          <div className='whiteHalf'>
            <div className='browserContainer'>
              <img src={browse} alt="browseicon" className='browserIcon'/>
            </div>
            <p className='Browse'>1-Browse</p>
            <p className='compText'>
            Browse our tech catalog with more than 20 top tech products
            </p>
          </div>
        </div>
    </div>
  );
}
