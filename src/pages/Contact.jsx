import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct email body with all form fields
    const emailBody = `
Full Name: ${formData.fullName}

Company Name: ${formData.companyName}

Email Address: ${formData.email}

Phone Number: ${formData.phone}

Message:
${formData.message}
    `.trim();

    // Email recipients
    const recipients = 'info@tiwarifarma.com,info.tiwarifarma@gmail.com';
    
    // Construct mailto URL with encoded parameters
    const mailtoLink = `mailto:${recipients}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Optional: Clear form after opening email client
    setTimeout(() => {
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 500);
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with us for product inquiries and quotations</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content-section">
        <div className="container">
          <div className="contact-layout">
            {/* Contact Information */}
            <div className="contact-info-column">
              <div className="info-card">
                <h3>Get in Touch</h3>
                <p className="info-intro">
                  We're here to help! Reach out to us for any product-related inquiries, 
                  quotations, or general questions.
                </p>

                <div className="contact-details">
                  <div className="contact-detail-item">
                    <div className="detail-icon">📍</div>
                    <div className="detail-content">
                      <h4>Address</h4>
                      <p>
                        Gala No.8 B70 Arihant Commercial Complex<br />
                        Purna Village, Bhiwandi<br />
                        Dist-Thane 421302, Maharashtra, India
                      </p>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="detail-icon">📞</div>
                    <div className="detail-content">
                      <h4>Phone</h4>
                      <p>
                        <a href="tel:+918591106468">+91 8591106468</a><br />
                        <a href="tel:+917208502625">+91 7208502625</a>
                      </p>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="detail-icon">✉️</div>
                    <div className="detail-content">
                      <h4>Email</h4>
                      <p>
                        <a href="mailto:info@tiwarifarma.com">info@tiwarifarma.com</a><br />
                        <a href="mailto:info.tiwarifarma@gmail.com">info.tiwarifarma@gmail.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="detail-icon">🌐</div>
                    <div className="detail-content">
                      <h4>Website</h4>
                      <p>
                        <a href="https://www.tiwarifarma.com" target="_blank" rel="noopener noreferrer">
                          www.tiwarifarma.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="business-hours">
                  <h4>Business Hours</h4>
                  <p>
                    Monday - Saturday: 9:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-column">
              <div className="form-card">
                <h3>Send Us a Message</h3>
                <p className="form-intro">
                  Fill out the form below and click "Send Message" to open your email client with pre-filled details.
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
                        placeholder="Enter your full name"
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
                        placeholder="Enter company name"
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
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="submit-button"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="map-section">
        <div className="container">
          <div className="section-header">
            <h2>Visit Our Location</h2>
            <p>Find us at our office in Bhiwandi, Maharashtra</p>
          </div>
          <div className="map-placeholder">
            <div className="map-content">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                <path d="M50 10 L50 90 M10 50 L90 50" stroke="#cbd5e1" strokeWidth="2"/>
                <circle cx="50" cy="50" r="30" fill="#2563eb" opacity="0.2"/>
                <path d="M50 25 C37.5 25 27.5 35 27.5 47.5 C27.5 62.5 50 75 50 75 C50 75 72.5 62.5 72.5 47.5 C72.5 35 62.5 25 50 25 Z" fill="#2563eb"/>
                <circle cx="50" cy="47.5" r="7.5" fill="white"/>
              </svg>
              <p>Bhiwandi, Thane, Maharashtra</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

