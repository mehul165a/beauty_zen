import React from 'react';
import './Contact.css';
import ContactForm from '../components/ContactForm'

const Contact = () => (
  <div className="contact-page">
    <div className="banner">
      <img src=".//assets/banner-image.png" alt="Banner" className="banner-image" />
    </div>

    <div className="contact-form-section">
      <ContactForm />
    </div>
  </div>
);

export default Contact;
