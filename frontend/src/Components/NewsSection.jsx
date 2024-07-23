import React, { useState, useEffect } from 'react';
import '../Assets/styles/NewsSection.css';
import axios from 'axios';
function NewsSection() {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    axios.get('http://localhost:3001/api/news')
      .then(response => {
        // Assuming the response data is the array of news items
        setNewsItems(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the news items:', error);
      });
  }, []); // Empty dependency array means this effect runs once on mount  

  return (
    <section className="news-section mt-5" id='news-section'>
      <div className="container my-5">
      <h4>News</h4>
        <div className="row">
        {newsItems.map((item) => (
        <div key={item._id} className="col-md-6"> {/* Use item._id for unique key */}
          <div className="news-item">
            <i className="icon-placeholder"></i>
          <div>
          <h6>{item.title}</h6>
            <p>{item.description}</p>
          </div>
          </div>
        </div>
))}
        </div>
      </div>
    </section>
  );
}

export default NewsSection;