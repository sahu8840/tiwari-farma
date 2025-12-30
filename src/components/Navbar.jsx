import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand" onClick={closeMenu}>
            <div className="brand-logo">
              <h1>TIWARI FARMA</h1>
            </div>
          </Link>

          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <Link to="/" className={isActive('/')} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={isActive('/about')} onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/products" className={isActive('/products')} onClick={closeMenu}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/services" className={isActive('/services')} onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className={isActive('/contact')} onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

