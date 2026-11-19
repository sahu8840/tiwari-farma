import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-glow" aria-hidden="true" />
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <h3>TIWARI FARMA</h3>
            <p>
              Leading supplier of pharmaceutical raw materials, chemicals, and intermediates.
            </p>
            <p className="footer-tagline">Quality · Trust · Excellence</p>
          </div>

          <div className="footer-section">
            <h4>Explore</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Products</h4>
            <ul>
              <li>Levocetirizine Dihydrochloride</li>
              <li>Cetirizine Dihydrochloride</li>
              <li>Pregabalin</li>
              <li>Levosalbutamol Sulphate</li>
              <li>Vitamin D3</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul className="contact-info">
              <li>
                <strong>Address</strong>
                Gala No.8 B70 Arihant Commercial Complex,<br />
                Purna Village, Bhiwandi,<br />
                Dist-Thane 421302, Maharashtra
              </li>
              <li>
                <strong>Phone</strong>
                <a href="tel:+917208502625">+91 7208502625</a>
              </li>
              <li>
                <strong>Email</strong>
                <a href="mailto:info@tiwarifarma.com">info@tiwarifarma.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Tiwari Farma. All rights reserved.</p>
          <a href="https://www.tiwarifarma.com" className="footer-website">
            www.tiwarifarma.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
