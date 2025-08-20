import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import OpenAccount from '../OpenAccount';
// import Footer from '../Footer';
// import Navbar from '../Navbar';
import Education from './Education';

function HomePage() {
    return ( 
        <>
        
        <Hero /> 
        <Awards />
        <Stats />
        <Pricing />
        <Education/>
        <OpenAccount />
        
        </>
     );
}

export default HomePage;