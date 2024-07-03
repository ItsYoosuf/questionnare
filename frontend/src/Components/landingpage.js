import React from 'react';
import Navbar from './navbar.js';
import bgimg from '../Assets/images/bgimg.jpg';
import '../Assets/styles/landingpage.css';
function LandingPage() {
    return (
        <div className='landpage'>
            <Navbar />
            {/* Rest of the landing page content */}
            <img src={bgimg} alt="bgimg" />
            <div className="about-us-placeholder">
            <section className="about-us-section">
                <div className="container my-5">
                <h3 className="mb-3">About Us</h3>
                    <div className="row">
                    <div className="col">
                        <p>
                        Our certificate program rewards users with valuable certificates upon successfully completing informative videos and quizzes. Earn recognition for your mastery of the subject matter, enhance your professional portfolio, and demonstrate your expertise. Enjoy a flexible, personalized learning path tailored to your interests and goals. Join a vibrant community of lifelong learners, connect with like-minded individuals, and share your experiences. Start your journey today and unlock new opportunities through our engaging and rewarding certificate program.
                        </p>
                    </div>
                    <div className="about-us-images">
                        <img src={bgimg} alt="1" className="about-us-img"/>
                        <img src={bgimg} alt="2" className="about-us-img"/>
                        <img src={bgimg} alt="3" className="about-us-img"/>
                    </div>
                    </div>
                </div>
            </section>
            </div>
            <section className="news-section mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <i className="icon-placeholder"></i>
                            <h6>News Title 1</h6>
                            <p>Short description for news item 1.</p>
                        </div>
                        <div className="col-md-6">
                            <i className="icon-placeholder"></i>
                            <h6>News Title 2</h6>
                            <p>Short description for news item 2.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <i className="icon-placeholder"></i>
                            <h6>News Title 3</h6>
                            <p>Short description for news item 3.</p>
                        </div>
                        <div className="col-md-6">
                            <i className="icon-placeholder"></i>
                            <h6>News Title 4</h6>
                            <p>Short description for news item 4.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <i className="icon-placeholder"></i>
                            <h6>News Title 5</h6>
                            <p>Short description for news item 5.</p>
                        </div>
                        <div className="col-md-6">
                            <i className="icon-placeholder"></i>
                            <h6>News Title 6</h6>
                            <p>Short description for news item 6.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LandingPage;
