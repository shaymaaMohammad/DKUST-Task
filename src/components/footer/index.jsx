import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import  {FooterWrapper} from "./styles.js";

const Footer = () => {
  return (
    <FooterWrapper>
      <footer className="site-footer">
        <div className="footer-container footer-columns">
        
        <div className="footer-col">
          <h3 className="footer-col-title">Contact Detail</h3>
          <p className="footer-text-muted text-spacing">
            123 Business Street,<br />Suite 100, New York,<br />NY 10001
          </p>
          <p className="footer-text-muted text-item"><strong>Phone:</strong> +1 234 567 8900</p>
          <p className="footer-text-muted"><strong>Email:</strong> shaymaamohammad692@gmail.com</p>
        </div>

        <div className="footer-col">
          <h3 className="footer-col-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#!">About Us</a></li>
            <li><a href="#!">Services</a></li>
            <li><a href="#!">Portfolio</a></li>
            <li><a href="#!">Blog</a></li>
            <li><a href="#!">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-col-title">Our Services</h3>
          <ul className="footer-links">
            <li><a href="#!">Web Development</a></li>
            <li><a href="#!">Machine Learning</a></li>
            <li><a href="#!">Robotics</a></li>
            <li><a href="#!">Industrial Consulting</a></li>
            <li><a href="#!">Data Analytics</a></li>
          </ul>
        </div>

        <div className="footer-col">
         <h3 className="newsletter-title">Subscribe Newsletter</h3>
          <p className="footer-text-muted text-spacing">
            Subscribe to our newsletter to get the latest updates and news.
          </p>
          <form className="newsletter-form-group newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              id="email-footer" 
              className="footer-form-control" 
              placeholder="Email Address" 
              required 
            />
            <button className="btn-green-submit" type="submit">
              <i className="bi bi-send"></i>
              </button>

          </form>
        </div>
        
      </div>

      <div className="footer-bottom-container footer-bottom">
        <p className="footer-copyright">Copyright &copy; All Rights Reserved</p>
        
        <div className="footer-social-icons">
          <a href="#!"><i className="bi bi-facebook"></i></a>
          <a href="#!"><i className="bi bi-twitter"></i></a>
          <a href="#!"><i className="bi bi-linkedin"></i></a>
          <a href="#!"><i className="bi bi-instagram"></i></a>
        </div>
      </div>
    </footer>
    </FooterWrapper>
  );
};

export default Footer;
