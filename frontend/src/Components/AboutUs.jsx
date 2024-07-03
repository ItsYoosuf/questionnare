import React, { useState, useEffect } from 'react';
import bgimg from '../Assets/images/bgimg.jpg';
import '../Assets/styles/AboutUs.css';

function AboutUs() {
  const [aboutContent, setAboutContent] = useState({
    title: '',
    description: '',
    images: [],
  });

  useEffect(() => {
    // Simulate fetching data
    const fetchedData = {
      title: 'About Us',
      description: 'Our certificate program rewards users with valuable certificates upon successfully completing informative videos and quizzes. Earn recognition for your mastery of the subject matter, enhance your professional portfolio, and demonstrate your expertise. Enjoy a flexible, personalized learning path tailored to your interests and goals. Join a vibrant community of lifelong learners, connect with like-minded individuals, and share your experiences. Start your journey today and unlock new opportunities through our engaging and rewarding certificate program.',
      images: [bgimg, bgimg, bgimg], // Assuming bgimg is the placeholder for all images
    };
    setAboutContent(fetchedData);
  }, []);

  return (
    <div className="about-us-placeholder">
      <section className="about-us-section">
        <div className="container my-5">
          <h3 className="mb-3">{aboutContent.title}</h3>
          <div className="row">
            <div className="col">
              <p>{aboutContent.description}</p>
            </div>
            <div className="about-us-images">
              {aboutContent.images.map((image, index) => (
                <img key={index} src={image} alt={`About us ${index + 1}`} className="about-us-img"/>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;