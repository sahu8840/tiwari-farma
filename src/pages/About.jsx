import React from 'react';
import Reveal from '../components/Reveal';
import './About.css';

const About = () => {
  const milestones = [
    { year: '2023', title: 'Company Founded', description: 'Started our journey in pharmaceutical trading' },
    { year: '2024', title: 'Expansion', description: 'Extended product portfolio and client base' },
    { year: '2025', title: 'Recognition', description: 'Became trusted partner for major pharma companies' },
  ];

  const values = [
    {
      title: 'Quality Assurance',
      description: 'We ensure all products meet the highest international quality standards and certifications.',
    },
    {
      title: 'Reliability',
      description: 'Consistent supply chain and timely delivery to meet your business requirements.',
    },
    {
      title: 'Innovation',
      description: 'Constantly evolving our product range to meet emerging market demands.',
    },
    {
      title: 'Integrity',
      description: 'Transparent business practices and ethical standards in all our dealings.',
    },
  ];

  const reasons = [
    { title: 'Quality Products', text: 'Sourced from certified manufacturers and aligned with regulatory standards.' },
    { title: 'Competitive Pricing', text: 'Strong market pricing without compromising quality.' },
    { title: 'Timely Delivery', text: 'Efficient logistics and supply chain management.' },
    { title: 'Expert Support', text: 'Technical and commercial guidance when you need it.' },
    { title: 'Wide Product Range', text: 'A comprehensive portfolio of pharmaceutical materials.' },
    { title: 'Customer Focus', text: 'Dedicated to meeting your specific requirements.' },
  ];

  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1>About Tiwari Farma</h1>
          <p>Your trusted partner in pharmaceutical excellence</p>
        </div>
      </section>

      <section className="company-overview">
        <div className="container">
          <Reveal className="overview-text">
            <h2>Who we are</h2>
            <p>
              Tiwari Farma is a leading supplier, trader, and distributor of Pharmaceutical Raw Materials,
              Nutraceuticals, Chemicals, Excipients, and Intermediates. With years of expertise in the
              pharmaceutical industry, we have established ourselves as a reliable partner for businesses
              seeking high-quality products and exceptional service.
            </p>
            <p>
              Our product range comprises Active Pharmaceutical Ingredients (APIs), Pharmaceutical Raw
              Materials, and Drug Intermediates. We serve pharmaceuticals, nutraceuticals, and chemical
              industries with tailored solutions for specific business needs.
            </p>
            <p>
              Based in Maharashtra, India, we have built a strong network of suppliers and clients across
              the country and internationally — guided by quality, reliability, and customer satisfaction.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <Reveal className="mv-block">
              <h3>Our Mission</h3>
              <p>
                To provide high-quality pharmaceutical raw materials and chemicals that meet international
                standards, while building long-term partnerships through reliability, transparency, and
                exceptional service.
              </p>
            </Reveal>
            <Reveal className="mv-block" delay={120}>
              <h3>Our Vision</h3>
              <p>
                To become a globally recognized leader in pharmaceutical trading — known for quality,
                innovation, and customer satisfaction — and to support healthcare by ensuring premium
                materials are available when needed.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="core-values">
        <div className="container">
          <Reveal className="section-header">
            <h2>Our core values</h2>
            <p>The principles that guide everything we do</p>
          </Reveal>
          <div className="values-grid">
            {values.map((value, index) => (
              <Reveal key={value.title} className="value-item" delay={index * 90}>
                <span className="value-num">0{index + 1}</span>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="our-journey">
        <div className="container">
          <Reveal className="section-header">
            <h2>Our journey</h2>
            <p>Milestones in our growth story</p>
          </Reveal>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <Reveal key={milestone.year} className="timeline-item" delay={index * 120}>
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <h4>{milestone.title}</h4>
                  <p>{milestone.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <div className="container">
          <Reveal className="section-header">
            <h2>Why choose Tiwari Farma?</h2>
          </Reveal>
          <div className="choose-us-grid">
            {reasons.map((item, index) => (
              <Reveal key={item.title} className="choose-item" delay={index * 70}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
