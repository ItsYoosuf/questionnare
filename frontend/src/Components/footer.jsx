import React from 'react';
import '../Assets/styles/Footer.css'; // Custom CSS for additional styling

const Footer = () => {
  return (
    <footer className="footer-bg py-3 text-center text-white">
      <div className="container">
        <div className="row">
          {/* Contact Information Column */}
          <div className="col-md-6 text-md-left footer-column">
            <h5>Contact Information</h5>
            <p>Email: contact@example.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>123 Street Name, City</p>
          </div>
          {/* Stay Connected Column */}
          <div className="col-md-6 text-md-left footer-column">
            <h5>Stay Connected</h5>
            <p>Subscribe to our newsletter to stay updated with our offers and news.</p>
            <form>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <button type="submit" className="btn btn-light">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;