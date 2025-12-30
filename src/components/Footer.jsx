import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>TIWARI FARMA</h3>
            <p>Leading supplier of pharmaceutical raw materials, chemicals, and intermediates.</p>
            <div className="footer-tagline">
              <p>Quality • Trust • Excellence</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Products</h4>
            <ul>
              <li>Active Pharmaceutical Ingredients</li>
              <li>Pharmaceutical Raw Materials</li>
              <li>Nutraceuticals</li>
              <li>Chemicals & Excipients</li>
              <li>Drug Intermediates</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="contact-info">
              <li>
                <strong>Address:</strong><br />
                Gala No.8 B70 Arihant Commercial Complex<br />
                Purna Village, Bhiwandi<br />
                Dist-Thane 421302, Maharashtra
              </li>
              <li>
                <strong>Phone:</strong><br />
                +91 8591106468<br />
                +91 7208502625
              </li>
              <li>
                <strong>Email:</strong><br />
                info@tiwarifarma.com<br />
                info.tiwarifarma@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Tiwari Farma. All rights reserved.</p>
          <p className="footer-website">www.tiwarifarma.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

