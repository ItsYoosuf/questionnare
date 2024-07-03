// landingpage.js
import React from 'react';
import Navbar from './navbar';
import AboutUs from './AboutUs'; // Import AboutUs component
import NewsSection from './NewsSection'; // Import NewsSection component
import Events from './Events'; // Import Events component
import Gallery from './Gallery'; // Import Gallery component
import bgimg from '../Assets/images/bgimg.jpg';
import '../Assets/styles/landingpage.css';

function LandingPage() {
  return (
    <div className='landpage'>
      <Navbar />
      <img src={bgimg} alt="bgimg" />
      {/* Rest of the landing page content */}
      <AboutUs /> {/* Use AboutUs component */}
      <NewsSection /> {/* Use NewsSection component */}
      <Events/>
      <Gallery/>
    </div>
  );
}

export default LandingPage;