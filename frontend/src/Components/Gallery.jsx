import React, { useState, useEffect } from 'react';
import '../Assets/styles/Gallery.css';
function Gallery() {
  const [galleryItems, setGalleryItems] = useState({ images: [], videos: [] });

  useEffect(() => {
    // Simulate fetching data from a database
    const fetchedGalleryItems = {
      images: [
        { id: 1, url: 'image1.jpg', alt: 'Image 1' },
        { id: 2, url: 'image2.jpg', alt: 'Image 2' },
        { id: 3, url: 'image3.jpg', alt: 'Image 3' },
      ],
      videos: [
        { id: 1, url: 'video1.mp4', title: 'Video 1' },
        { id: 2, url: 'video2.mp4', title: 'Video 2' },
        { id: 3, url: 'video3.mp4', title: 'Video 3' },
      ],
    };
    setGalleryItems(fetchedGalleryItems);
  }, []);

  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="row">
        <h3>Images</h3>
        {galleryItems.images.map((image) => (
          <div key={image.id} className="col">
            <img src={image.url} alt={image.alt} style={{ width: '100%' }} />
          </div>
        ))}
      </div>
      <div className="row">
        <h3>Videos</h3>
        {galleryItems.videos.map((video) => (
          <div key={video.id} className="col">
            <video controls style={{ width: '100%' }}>
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;     