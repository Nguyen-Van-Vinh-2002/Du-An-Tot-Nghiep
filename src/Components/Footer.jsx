import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>Your company description goes here.</p>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <p>Stay connected on social media:</p>
            <div className="social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom py-2">
        <div className="container text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
