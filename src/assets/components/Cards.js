import React from 'react';
import hero from "../images/Hero-responsive.png";
import cohete from "../images/cohete.png"
import manos from "../images/manos.png"
import chico from "../images/chinito.png"
import "./css/Cards.css";
import browse from "../browse.svg"


export default function Cards() {
  return (
    <div className='cards-container'>
        <img src={hero} alt='hero-responsive' className='ilustracion'/>
          <div className='Card1'> {/*CARD Number 1*/}
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
          <div className='Card2'> {/*CARD Number 2*/}
            <img src={manos} alt="manos" className='coheteimg'/>
            <div className='whiteHalf'>
              <div className='browserContainer'>
                <img src={browse} alt="browseicon" className='browserIcon'/>
              </div>
              <p className='Browse'>2-choose</p>
              <p className='compTextCard2'>
              Exchange your hard-earned AeroPoints for a cool tech item
              </p>
            </div>
          </div>
          <div className='Card3'> {/*CARD Number 3*/}
            <img src={chico} alt="chico" className='coheteimg'/>
            <div className='whiteHalf'>
              <div className='browserContainer'>
                <img src={browse} alt="browseicon" className='browserIcon'/>
              </div>
              <p className='Browse'>3-enjoy</p>
              <p className='compTextCard2'>
              All done We’ll take care of delivery of your tech item!
              </p>
            </div>
          </div>
    </div>
  );
}
