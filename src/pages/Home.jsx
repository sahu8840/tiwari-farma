import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const features = [
    {
      id: 1,
      title: 'Unparalleled Quality',
      description: 'We guarantee the highest quality pharmaceutical raw materials that meet international standards.',
      icon: '✓'
    },
    {
      id: 2,
      title: 'Trusted Partner',
      description: 'Connecting bridge for the pharma industry with reliable supply chain solutions.',
      icon: '🤝'
    },
    {
      id: 3,
      title: 'Customer Satisfaction',
      description: 'Your satisfaction is our priority. We ensure timely delivery and excellent service.',
      icon: '⭐'
    }
  ];

  const topProducts = [
    'Levosulpiride/Sulpiride API',
    'Levocetirizine Hydrochloride',
    'Methylcobalamin',
    'Pharmaceutical Excipients',
    'Active Pharmaceutical Ingredients',
    'Drug Intermediates'
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to Tiwari Farma</h1>
            <p className="hero-subtitle">
              Your Trusted Partner in Pharmaceutical Raw Materials & Chemicals
            </p>
            <p className="hero-description">
              Leading supplier, trader of Pharmaceutical Raw Material, Nutraceuticals, Chemicals, 
              Excipients & Intermediates. Our product range comprises of Active Pharmaceutical Ingredients, 
              Pharmaceutical Raw Materials and Drug Intermediates.
            </p>
            <div className="hero-buttons">
              <Link to="/products" className="btn btn-primary">View Products</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Our 3 Pillars</h2>
            <p>Core values that drive our commitment to excellence</p>
          </div>
          <div className="features-grid">
            {features.map((feature) => (
              <div key={feature.id} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="products-preview-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Products</h2>
            <p>Some of the products we specialize in</p>
          </div>
          <div className="products-preview-grid">
            {topProducts.map((product, index) => (
              <div key={index} className="product-preview-card">
                <div className="product-preview-icon">
                  <svg width="50" height="50" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="3" />
                    <path d="M50 30 L50 70 M30 50 L70 50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
                <h4>{product}</h4>
              </div>
            ))}
          </div>
          <div className="products-cta">
            <Link to="/products" className="btn btn-primary">View All Products</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Contact us today for product inquiries and quotations</p>
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

