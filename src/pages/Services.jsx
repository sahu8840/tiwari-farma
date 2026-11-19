import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Trading & Distribution',
      description:
        'Comprehensive trading and distribution for pharmaceutical raw materials, chemicals, and intermediates across India and internationally.',
      features: [
        'Wide distribution network',
        'Efficient logistics management',
        'Timely delivery across regions',
        'Bulk order handling',
      ],
    },
    {
      id: 2,
      title: 'Product Sourcing',
      description:
        'Expert sourcing to find the right products at competitive prices from reliable manufacturers worldwide.',
      features: [
        'Global supplier network',
        'Quality verification',
        'Competitive pricing',
        'Custom product sourcing',
      ],
    },
    {
      id: 3,
      title: 'Quality Assurance',
      description:
        'Rigorous quality processes so products meet international pharmaceutical standards and regulatory requirements.',
      features: [
        'COA verification',
        'Batch testing',
        'Regulatory compliance',
        'Documentation support',
      ],
    },
    {
      id: 4,
      title: 'Supply Chain Solutions',
      description:
        'End-to-end supply chain management for a seamless flow of materials from source to destination.',
      features: [
        'Inventory management',
        'Demand forecasting',
        'Warehousing solutions',
        'Just-in-time delivery',
      ],
    },
    {
      id: 5,
      title: 'Technical Support',
      description:
        'Expert technical guidance for product selection, specifications, and applications.',
      features: [
        'Product consultation',
        'Technical documentation',
        'Application support',
        'Regulatory guidance',
      ],
    },
    {
      id: 6,
      title: 'Custom Solutions',
      description:
        'Tailored solutions for specific business needs including packaging and specialty requirements.',
      features: [
        'Custom formulations',
        'Private labeling',
        'Packaging solutions',
        'Contract manufacturing',
      ],
    },
  ];

  const processSteps = [
    { step: '01', title: 'Inquiry', description: 'Share your product requirements and specifications' },
    { step: '02', title: 'Quotation', description: 'Receive competitive pricing and product details' },
    { step: '03', title: 'Confirmation', description: 'Order confirmation with delivery timelines' },
    { step: '04', title: 'Delivery', description: 'Timely delivery with complete documentation' },
  ];

  const industries = [
    { title: 'Pharmaceutical Manufacturing', text: 'Raw materials and intermediates for drug production' },
    { title: 'Nutraceutical Industry', text: 'Quality ingredients for dietary supplements' },
    { title: 'Research & Development', text: 'Specialty chemicals for R&D applications' },
    { title: 'Chemical Industry', text: 'Industrial chemicals and intermediates' },
    { title: 'Healthcare Sector', text: 'Medical-grade materials and supplies' },
    { title: 'Export Houses', text: 'Bulk supply for international markets' },
  ];

  const benefits = [
    { title: 'Reliable Supply', text: 'Consistent availability and on-time delivery' },
    { title: 'Quality Guarantee', text: 'All products meet international standards' },
    { title: 'Competitive Pricing', text: 'Strong market rates without compromising quality' },
    { title: 'Expert Team', text: 'Knowledgeable professionals at your service' },
    { title: 'Customer Support', text: 'Dedicated support throughout the process' },
    { title: 'Flexible Solutions', text: 'Customized services to meet your needs' },
  ];

  return (
    <div className="services-page">
      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>End-to-end solutions for pharmaceutical supply needs</p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <Reveal className="section-header">
            <h2>What we offer</h2>
            <p>Professional services tailored to your business</p>
          </Reveal>
          <div className="services-grid">
            {services.map((service, index) => (
              <Reveal key={service.id} className="service-card" delay={index * 80}>
                <span className="service-index">0{service.id}</span>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <Reveal className="section-header">
            <h2>Our process</h2>
            <p>A clear path from inquiry to delivery</p>
          </Reveal>
          <div className="process-steps">
            {processSteps.map((item, index) => (
              <Reveal key={item.step} className="process-step" delay={index * 100}>
                <div className="step-number">{item.step}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="industries-section">
        <div className="container">
          <Reveal className="section-header">
            <h2>Industries we serve</h2>
            <p>Specialized support across healthcare and chemical sectors</p>
          </Reveal>
          <div className="industries-grid">
            {industries.map((item, index) => (
              <Reveal key={item.title} className="industry-card" delay={index * 70}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <Reveal className="section-header">
            <h2>Why partner with us?</h2>
            <p>Benefits of choosing Tiwari Farma</p>
          </Reveal>
          <div className="benefits-content">
            {benefits.map((item, index) => (
              <Reveal key={item.title} className="benefit-item" delay={index * 70}>
                <div className="benefit-mark" aria-hidden="true" />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <Reveal>
            <h2>Ready to work together?</h2>
            <p>Tell us what you need — we’ll help you move forward</p>
            <Link to="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Services;
