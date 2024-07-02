import React from 'react';
import Navbar from './navbar.js';
import bgimg from '../Assets/images/bgimg.jpg';
import '../Assets/styles/landingpage.css';
function LandingPage() {
    return (
        <div>
            <Navbar />
            {/* Rest of the landing page content */}
            <img src={bgimg} alt="bgimg" />
        </div>
    );
}

export default LandingPage;
