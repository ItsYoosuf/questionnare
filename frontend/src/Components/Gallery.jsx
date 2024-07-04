import React, { useState, useEffect } from 'react';
import bgimg from '../Assets/images/bgimg.jpg';
import video1 from '../Assets/images/Video.mov';
// Import Bootstrap CSS in your project entry file or here if it's not globally imported
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/styles/Gallery.css';

function Gallery() {
  const [galleryItems, setGalleryItems] = useState({ images: [], videos: [] });

  useEffect(() => {
    // Simulate fetching data from a database
    const fetchedGalleryItems = {
      images: [
        { id: 1, url: bgimg, alt: 'Image 1' },
        { id: 2, url: bgimg, alt: 'Image 2' },
        { id: 3, url: bgimg, alt: 'Image 3' },
      ],
      videos: [
        { id: 1, url: video1, title: 'Video 1' },
        { id: 2, url: video1, title: 'Video 2' },
        { id: 3, url: video1, title: 'Video 3' },
      ],
    };
    setGalleryItems(fetchedGalleryItems);
  }, []);

  return (
    <div className="gallery-section container my-5">
      <h2>Gallery</h2>
      <div className="row">
        <h3>Images</h3>
        {galleryItems.images.map((image) => (
          <div key={image.id} className="col-md-4 col-sm-6 col-xs-12">
            <img src={image.url} alt={image.alt} className="img-fluid gallery-img" />
          </div>
        ))}
      </div>
      <div className="row">
        <h3>Videos</h3>
        {galleryItems.videos.map((video) => (
          <div key={video.id} className="col-md-4 col-sm-6 col-xs-12">
            <video controls className="img-fluid gallery-video">
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>  
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;