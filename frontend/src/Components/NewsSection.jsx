import React, { useState, useEffect } from 'react';
import '../Assets/styles/NewsSection.css';

function NewsSection() {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    const fetchedNewsItems = [
      { id: 1, title: 'News Title 1', description: 'Short description for news item 1.' },
      { id: 2, title: 'News Title 2', description: 'Short description for news item 2.' },
      { id: 3, title: 'News Title 3', description: 'Short description for news item 3.' },
      { id: 4, title: 'News Title 4', description: 'Short description for news item 4.' },
      { id: 5, title: 'News Title 5', description: 'Short description for news item 5.' },
      { id: 6, title: 'News Title 6', description: 'Short description for news item 6.' }
      // Add more news items as needed
    ];
    setNewsItems(fetchedNewsItems);
  }, []);

  return (
    <section className="news-section mt-5">
      <div className="container">
        <div className="row">
          {newsItems.map((item) => (
            <div key={item.id} className="col-md-6">
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