import React from 'react';
import "./css/Bloque1.css";
import Waves from "./Waves"


export default function Bloque1() {
  return (
    <div className='Bloque1'>
        <div className='textContainer'>
            <p className='explore'>EXPLORE THE</p>
            <h1 className='tech'>TECH</h1>
            <h1 className='zone'>ZONE</h1>
            <p className='hereYou'>Here you’ll be able to redeem all of your hard-earned Aeropoints and exchange them for cool tech.</p>
            <div className='parentViewAllProducts'>
                <button href='#productos' className='viewAllProductsBtn'>VIEW ALL PRODUCTS</button>
            </div>
        </div>
    <Waves/>
    <Waves/>
    <Waves/>
    <Waves/>
    </div>
  );
}
