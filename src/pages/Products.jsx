import React, { useState } from 'react';
import './Products.css';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'api', name: 'Active Pharmaceutical Ingredients' },
    { id: 'nutraceuticals', name: 'Nutraceuticals' },
    { id: 'excipients', name: 'Excipients' },
    { id: 'intermediates', name: 'Drug Intermediates' },
    { id: 'chemicals', name: 'Specialty Chemicals' }
  ];

  const products = [
    {
      id: 1,
      name: 'Levosulpiride API',
      category: 'api',
      description: 'High purity Active Pharmaceutical Ingredient for antipsychotic medications',
      applications: ['Pharmaceutical Manufacturing', 'Research']
    },
    {
      id: 2,
      name: 'Sulpiride API',
      category: 'api',
      description: 'Premium grade API for psychiatric and gastrointestinal applications',
      applications: ['Pharmaceutical Manufacturing']
    },
    {
      id: 3,
      name: 'Levocetirizine Hydrochloride',
      category: 'api',
      description: 'Third-generation antihistamine compound for allergy treatment',
      applications: ['Pharmaceutical Manufacturing', 'Tablet Production']
    },
    {
      id: 4,
      name: 'Methylcobalamin',
      category: 'nutraceuticals',
      description: 'Active form of Vitamin B12 for neurological health',
      applications: ['Nutraceutical Production', 'Dietary Supplements']
    },
    {
      id: 5,
      name: 'Microcrystalline Cellulose',
      category: 'excipients',
      description: 'Versatile pharmaceutical excipient for tablet formulations',
      applications: ['Tablet Binding', 'Capsule Filling']
    },
    {
      id: 6,
      name: 'Magnesium Stearate',
      category: 'excipients',
      description: 'Pharmaceutical grade lubricant for tablet manufacturing',
      applications: ['Tablet Lubrication', 'Capsule Production']
    },
    {
      id: 7,
      name: 'Pharmaceutical Intermediates',
      category: 'intermediates',
      description: 'Custom intermediates for API synthesis and drug development',
      applications: ['API Synthesis', 'Drug Development']
    },
    {
      id: 8,
      name: 'Specialty Chemicals',
      category: 'chemicals',
      description: 'High-quality chemicals for pharmaceutical and research applications',
      applications: ['Research', 'Manufacturing']
    },
    {
      id: 9,
      name: 'Omega-3 Fatty Acids',
      category: 'nutraceuticals',
      description: 'Premium grade omega-3 for cardiovascular health supplements',
      applications: ['Dietary Supplements', 'Nutraceutical Production']
    },
    {
      id: 10,
      name: 'Starch Derivatives',
      category: 'excipients',
      description: 'Modified starches for pharmaceutical applications',
      applications: ['Tablet Disintegration', 'Binding']
    },
    {
      id: 11,
      name: 'Amino Acids',
      category: 'nutraceuticals',
      description: 'Essential and non-essential amino acids for nutritional supplements',
      applications: ['Nutraceutical Production', 'Sports Nutrition']
    },
    {
      id: 12,
      name: 'Synthetic Intermediates',
      category: 'intermediates',
      description: 'Custom synthetic intermediates for complex API manufacturing',
      applications: ['API Synthesis', 'Chemical Research']
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="products-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Products</h1>
          <p>Comprehensive Range of Pharmaceutical Raw Materials & Chemicals</p>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          {/* Category Filter */}
          <div className="category-filter">
            <h3>Filter by Category:</h3>
            <div className="category-buttons">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card-detail">
                <div className="product-icon">
                  <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="3" />
                    <path d="M50 25 L50 75 M25 50 L75 50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-applications">
                  <strong>Applications:</strong>
                  <ul>
                    {product.applications.map((app, index) => (
                      <li key={index}>{app}</li>
                    ))}
                  </ul>
                </div>
                <button className="inquiry-btn">Request Quote</button>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="no-products">
              <p>No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Product Features */}
      <section className="product-features">
        <div className="container">
          <div className="section-header">
            <h2>Product Advantages</h2>
            <p>Why choose our products</p>
          </div>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-number">01</div>
              <h4>Certified Quality</h4>
              <p>All products meet international pharmaceutical standards and certifications</p>
            </div>
            <div className="feature-item">
              <div className="feature-number">02</div>
              <h4>Authentic Documentation</h4>
              <p>Complete documentation including COA, MSDS, and regulatory compliance</p>
            </div>
            <div className="feature-item">
              <div className="feature-number">03</div>
              <h4>Competitive Pricing</h4>
              <p>Best market rates with flexible payment terms</p>
            </div>
            <div className="feature-item">
              <div className="feature-number">04</div>
              <h4>Reliable Supply</h4>
              <p>Consistent availability and timely delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="products-cta">
        <div className="container">
          <h2>Can't Find What You're Looking For?</h2>
          <p>Contact us for custom requirements and bulk orders</p>
          <a href="/contact" className="btn btn-primary">Contact Us</a>
        </div>
      </section>
    </div>
  );
};

export default Products;

