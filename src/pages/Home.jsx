import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import GrowthCharts from '../components/GrowthCharts';
import './Home.css';

const Home = () => {
  const [expandedProduct, setExpandedProduct] = useState(null);

  const pillars = [
    {
      id: 1,
      title: 'Unparalleled Quality',
      description:
        'Pharmaceutical raw materials that meet international standards and rigorous quality checks.',
    },
    {
      id: 2,
      title: 'Trusted Partnership',
      description:
        'A reliable bridge for the pharma industry with dependable supply chain solutions.',
    },
    {
      id: 3,
      title: 'Customer Focus',
      description:
        'Timely delivery, clear communication, and service built around your requirements.',
    },
  ];

  const categories = [
    { title: 'APIs', text: 'Active pharmaceutical ingredients for finished formulations.' },
    { title: 'Nutraceuticals', text: 'High-purity ingredients for wellness and nutrition brands.' },
    { title: 'Excipients', text: 'Reliable inactive ingredients that support formulation stability.' },
    { title: 'Intermediates', text: 'Key building blocks for efficient drug manufacturing.' },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Levocetirizine Dihydrochloride',
      therapeuticActivity: 'Anti-histamine, Anti-allergenic',
      standards: 'IP / USP',
      casNo: '130018-77-8',
    },
    {
      id: 2,
      name: 'Cetirizine Dihydrochloride',
      therapeuticActivity: 'Anti-histamine, Anti-allergenic',
      standards: 'IP / BP / EP',
      casNo: '83881-52-1',
    },
    {
      id: 3,
      name: 'Pregabalin',
      therapeuticActivity: 'Anticonvulsant',
      standards: 'IP / EP',
      casNo: '148553-50-8',
    },
    {
      id: 4,
      name: 'Levosalbutamol Sulphate',
      therapeuticActivity: 'Anti-asthmatic',
      standards: 'IP',
      casNo: '148563-16-0',
    },
    {
      id: 5,
      name: 'Salbutamol Sulphate',
      therapeuticActivity: 'Anti-asthmatic',
      standards: 'IP',
      casNo: '51022-70-9',
    },
    {
      id: 6,
      name: 'Vitamin D3',
      therapeuticActivity: 'Essential Vitamin',
      standards: 'USP / IP',
      casNo: '67-97-0',
    },
  ];

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-media" aria-hidden="true">
          <div className="hero-image" />
          <div className="hero-shade" />
          <div className="hero-orbs">
            <span className="orb orb-1" />
            <span className="orb orb-2" />
            <span className="orb orb-3" />
          </div>
        </div>

        <div className="container hero-inner">
          <p className="hero-brand">Tiwari Farma</p>
          <h1 className="hero-title">Precision materials for modern pharma</h1>
          <p className="hero-support">
            APIs, nutraceuticals, chemicals, excipients & intermediates — sourced with care.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary">
              View Products
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Talk to Us
            </Link>
          </div>
        </div>

        <div className="hero-scroll" aria-hidden="true">
          <span />
        </div>
      </section>

      <section className="pillars-section">
        <div className="container">
          <Reveal className="section-header">
            <h2>Built on three pillars</h2>
            <p>The standards that shape every partnership we form</p>
          </Reveal>
          <div className="pillars-grid">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.id} className="pillar-item" delay={index * 120}>
                <span className="pillar-index">0{pillar.id}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="growth-section">
        <div className="container">
          <Reveal className="section-header">
            <h2>Growing fast</h2>
            <p>Momentum across clients and product demand since we started</p>
          </Reveal>
          <GrowthCharts />
        </div>
      </section>

      <section className="categories-section">
        <div className="container">
          <Reveal className="section-header">
            <h2>What we supply</h2>
            <p>A focused range for pharmaceutical and chemical manufacturers</p>
          </Reveal>
          <div className="categories-grid">
            {categories.map((item, index) => (
              <Reveal key={item.title} className="category-row" delay={index * 90}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="products-preview-section">
        <div className="container">
          <Reveal className="section-header">
            <h2>Featured products</h2>
            <p>Tap a product to view activity, standards, and CAS details</p>
          </Reveal>
          <div className="featured-products-grid">
            {featuredProducts.map((product, index) => {
              const open = expandedProduct === product.id;
              return (
                <Reveal key={product.id} delay={index * 70}>
                  <button
                    type="button"
                    className={`featured-product ${open ? 'expanded' : ''}`}
                    onClick={() =>
                      setExpandedProduct(open ? null : product.id)
                    }
                    aria-expanded={open}
                  >
                    <div className="product-top">
                      <h4>{product.name}</h4>
                      <span className="expand-icon" aria-hidden="true">
                        {open ? '−' : '+'}
                      </span>
                    </div>
                    {open && (
                      <div className="product-details">
                        <div className="detail-item">
                          <strong>Therapeutic Activity</strong>
                          <span>{product.therapeuticActivity}</span>
                        </div>
                        <div className="detail-item">
                          <strong>Standards</strong>
                          <span>{product.standards}</span>
                        </div>
                        <div className="detail-item">
                          <strong>CAS No.</strong>
                          <span>{product.casNo}</span>
                        </div>
                      </div>
                    )}
                  </button>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="products-cta">
            <Link to="/products" className="btn btn-outline">
              Browse Full Catalog
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-bg" aria-hidden="true" />
        <div className="container">
          <Reveal className="cta-content">
            <h2>Need a quote or product match?</h2>
            <p>Share your requirement — we’ll respond with options and pricing.</p>
            <Link to="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
