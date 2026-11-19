import React, { useState } from 'react';
import Reveal from '../components/Reveal';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailBody = `
Full Name: ${formData.fullName}

Company Name: ${formData.companyName}

Email Address: ${formData.email}

Phone Number: ${formData.phone}

Message:
${formData.message}
    `.trim();

    const recipients = 'info@tiwarifarma.com,info.tiwarifarma@gmail.com';
    const mailtoLink = `mailto:${recipients}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 500);
  };

  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Product inquiries, quotations, and partnership conversations</p>
        </div>
      </section>

      <section className="contact-content-section">
        <div className="container">
          <div className="contact-layout">
            <Reveal className="contact-info-column">
              <div className="info-panel">
                <h3>Get in touch</h3>
                <p className="info-intro">
                  Reach out for product-related inquiries, quotations, or general questions.
                  We typically respond during business hours.
                </p>

                <div className="contact-details">
                  <div className="contact-detail-item">
                    <span className="detail-label">Address</span>
                    <p>
                      Gala No.8 B70 Arihant Commercial Complex<br />
                      Purna Village, Bhiwandi<br />
                      Dist-Thane 421302, Maharashtra, India
                    </p>
                  </div>

                  <div className="contact-detail-item">
                    <span className="detail-label">Phone</span>
                    <p>
                      <a href="tel:+917208502625">+91 7208502625</a>
                    </p>
                  </div>

                  <div className="contact-detail-item">
                    <span className="detail-label">Email</span>
                    <p>
                      <a href="mailto:info@tiwarifarma.com">info@tiwarifarma.com</a>
                      <br />
                      <a href="mailto:info.tiwarifarma@gmail.com">info.tiwarifarma@gmail.com</a>
                    </p>
                  </div>

                  <div className="contact-detail-item">
                    <span className="detail-label">Website</span>
                    <p>
                      <a
                        href="https://www.tiwarifarma.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.tiwarifarma.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="business-hours">
                  <span className="detail-label">Business Hours</span>
                  <p>
                    Monday – Saturday: 9:00 AM – 6:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal className="contact-form-column" delay={120}>
              <div className="form-panel">
                <h3>Send a message</h3>
                <p className="form-intro">
                  Fill out the form and we’ll open your email client with the details ready to send.
                </p>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name *</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="companyName">Company Name *</label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Tell us about your requirements…"
                    />
                  </div>

                  <button type="submit" className="submit-button">
                    Send Message
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <Reveal className="section-header">
            <h2>Visit our location</h2>
            <p>
              Gala No.8 B70 Arihant Commercial Complex, Purna Village, Bhiwandi,
              Dist-Thane 421302, Maharashtra
            </p>
          </Reveal>
          <Reveal className="map-frame" delay={100}>
            <iframe
              title="Tiwari Farma location"
              src="https://www.google.com/maps?q=Gala+No.8+B70+Arihant+Commercial+Complex+Purna+Village+Bhiwandi+Dist-Thane+421302+Maharashtra&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
