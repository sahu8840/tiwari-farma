import React from 'react';
import './About.css';

const About = () => {
  const milestones = [
    { year: 'Est. 2020', title: 'Company Founded', description: 'Started our journey in pharmaceutical trading' },
    { year: '2021', title: 'Expansion', description: 'Extended product portfolio and client base' },
    { year: '2022', title: 'Recognition', description: 'Became trusted partner for major pharma companies' },
    { year: '2023', title: 'Growth', description: 'Expanded to international markets' }
  ];

  const values = [
    {
      title: 'Quality Assurance',
      description: 'We ensure all products meet the highest international quality standards and certifications.',
      icon: '✓'
    },
    {
      title: 'Reliability',
      description: 'Consistent supply chain and timely delivery to meet your business requirements.',
      icon: '🔒'
    },
    {
      title: 'Innovation',
      description: 'Constantly evolving our product range to meet emerging market demands.',
      icon: '💡'
    },
    {
      title: 'Integrity',
      description: 'Transparent business practices and ethical standards in all our dealings.',
      icon: '⚖️'
    }
  ];

  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>About Tiwari Farma</h1>
          <p>Your Trusted Partner in Pharmaceutical Excellence</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="company-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <h2>Who We Are</h2>
              <p>
                Tiwari Farma is a leading supplier, trader, and distributor of Pharmaceutical Raw Materials, 
                Nutraceuticals, Chemicals, Excipients, and Intermediates. With years of expertise in the 
                pharmaceutical industry, we have established ourselves as a reliable partner for businesses 
                seeking high-quality products and exceptional service.
              </p>
              <p>
                Our product range comprises Active Pharmaceutical Ingredients (APIs), Pharmaceutical Raw 
                Materials, and Drug Intermediates. We serve various sectors including pharmaceuticals, 
                nutraceuticals, and chemical industries, providing tailored solutions to meet specific 
                business requirements.
              </p>
              <p>
                Located in Maharashtra, India, we have built a strong network of suppliers and clients 
                across the country and internationally. Our commitment to quality, reliability, and 
                customer satisfaction has made us a preferred choice in the pharmaceutical trading industry.
              </p>
            </div>
            <div className="overview-image">
              <div className="image-placeholder">
                <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none">
                  <rect width="400" height="400" fill="#e2e8f0"/>
                  <path d="M150 180 L150 280 L250 280 L250 180 M150 220 L250 220 M200 180 L200 220" 
                        stroke="#64748b" strokeWidth="4" strokeLinecap="round"/>
                  <circle cx="200" cy="140" r="30" stroke="#64748b" strokeWidth="4"/>
                  <text x="200" y="360" textAnchor="middle" fill="#64748b" fontSize="16" fontWeight="600">
                    Pharmaceutical Excellence
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <h3>Our Mission</h3>
              <p>
                To provide high-quality pharmaceutical raw materials and chemicals that meet international 
                standards, while building long-term partnerships with our clients through reliability, 
                transparency, and exceptional service.
              </p>
            </div>
            <div className="mv-card">
              <h3>Our Vision</h3>
              <p>
                To become a globally recognized leader in pharmaceutical trading, known for our commitment 
                to quality, innovation, and customer satisfaction. We aim to contribute to the healthcare 
                industry by ensuring the availability of premium pharmaceutical products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="our-journey">
        <div className="container">
          <div className="section-header">
            <h2>Our Journey</h2>
            <p>Milestones in our growth story</p>
          </div>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <h4>{milestone.title}</h4>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Tiwari Farma?</h2>
          </div>
          <div className="choose-us-grid">
            <div className="choose-item">
              <h4>✓ Quality Products</h4>
              <p>All products are sourced from certified manufacturers and meet regulatory standards</p>
            </div>
            <div className="choose-item">
              <h4>✓ Competitive Pricing</h4>
              <p>Best market prices without compromising on quality</p>
            </div>
            <div className="choose-item">
              <h4>✓ Timely Delivery</h4>
              <p>Efficient logistics and supply chain management</p>
            </div>
            <div className="choose-item">
              <h4>✓ Expert Support</h4>
              <p>Knowledgeable team providing technical and commercial support</p>
            </div>
            <div className="choose-item">
              <h4>✓ Wide Product Range</h4>
              <p>Comprehensive portfolio of pharmaceutical materials</p>
            </div>
            <div className="choose-item">
              <h4>✓ Customer Focus</h4>
              <p>Dedicated to meeting your specific requirements</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

