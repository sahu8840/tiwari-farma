import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Trading & Distribution',
      description: 'Comprehensive trading and distribution services for pharmaceutical raw materials, chemicals, and intermediates across India and internationally.',
      features: [
        'Wide distribution network',
        'Efficient logistics management',
        'Timely delivery across regions',
        'Bulk order handling'
      ],
      icon: '🚚'
    },
    {
      id: 2,
      title: 'Product Sourcing',
      description: 'Expert sourcing services to find the right products at competitive prices from reliable manufacturers worldwide.',
      features: [
        'Global supplier network',
        'Quality verification',
        'Competitive pricing',
        'Custom product sourcing'
      ],
      icon: '🔍'
    },
    {
      id: 3,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes to ensure all products meet international pharmaceutical standards and regulatory requirements.',
      features: [
        'COA verification',
        'Batch testing',
        'Regulatory compliance',
        'Documentation support'
      ],
      icon: '✓'
    },
    {
      id: 4,
      title: 'Supply Chain Solutions',
      description: 'End-to-end supply chain management to ensure seamless flow of materials from source to destination.',
      features: [
        'Inventory management',
        'Demand forecasting',
        'Warehousing solutions',
        'Just-in-time delivery'
      ],
      icon: '📦'
    },
    {
      id: 5,
      title: 'Technical Support',
      description: 'Expert technical guidance and support for product selection, specifications, and applications.',
      features: [
        'Product consultation',
        'Technical documentation',
        'Application support',
        'Regulatory guidance'
      ],
      icon: '👨‍🔬'
    },
    {
      id: 6,
      title: 'Custom Solutions',
      description: 'Tailored solutions to meet specific business requirements including custom formulations and packaging.',
      features: [
        'Custom formulations',
        'Private labeling',
        'Packaging solutions',
        'Contract manufacturing'
      ],
      icon: '⚙️'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Inquiry',
      description: 'Submit your product requirements and specifications'
    },
    {
      step: '02',
      title: 'Quotation',
      description: 'Receive competitive pricing and product details'
    },
    {
      step: '03',
      title: 'Confirmation',
      description: 'Order confirmation with delivery timelines'
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Timely delivery with complete documentation'
    }
  ];

  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive Solutions for Your Pharmaceutical Needs</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>What We Offer</h2>
            <p>Professional services tailored to your business requirements</p>
          </div>
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Process</h2>
            <p>Simple and efficient workflow for seamless experience</p>
          </div>
          <div className="process-steps">
            {processSteps.map((item, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{item.step}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="step-arrow">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section">
        <div className="container">
          <div className="section-header">
            <h2>Industries We Serve</h2>
            <p>Serving diverse sectors with specialized solutions</p>
          </div>
          <div className="industries-grid">
            <div className="industry-card">
              <h4>Pharmaceutical Manufacturing</h4>
              <p>Raw materials and intermediates for drug production</p>
            </div>
            <div className="industry-card">
              <h4>Nutraceutical Industry</h4>
              <p>Quality ingredients for dietary supplements</p>
            </div>
            <div className="industry-card">
              <h4>Research & Development</h4>
              <p>Specialty chemicals for R&D applications</p>
            </div>
            <div className="industry-card">
              <h4>Chemical Industry</h4>
              <p>Industrial chemicals and intermediates</p>
            </div>
            <div className="industry-card">
              <h4>Healthcare Sector</h4>
              <p>Medical-grade materials and supplies</p>
            </div>
            <div className="industry-card">
              <h4>Export Houses</h4>
              <p>Bulk supply for international markets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Partner With Us?</h2>
            <p>Benefits of choosing Tiwari Farma as your partner</p>
          </div>
          <div className="benefits-content">
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div className="benefit-text">
                <h4>Reliable Supply</h4>
                <p>Consistent availability and on-time delivery</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div className="benefit-text">
                <h4>Quality Guarantee</h4>
                <p>All products meet international standards</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div className="benefit-text">
                <h4>Competitive Pricing</h4>
                <p>Best market rates without compromising quality</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div className="benefit-text">
                <h4>Expert Team</h4>
                <p>Knowledgeable professionals at your service</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div className="benefit-text">
                <h4>Customer Support</h4>
                <p>Dedicated support throughout the process</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div className="benefit-text">
                <h4>Flexible Solutions</h4>
                <p>Customized services to meet your needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <h2>Ready to Work Together?</h2>
          <p>Contact us to discuss your requirements and get started</p>
          <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
};

export default Services;

