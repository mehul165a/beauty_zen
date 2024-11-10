import React from 'react';
import './ContactForm.css';

const ContactForm = () => (
  <div className="contact-form-container">
    <h2>CONTACT US</h2>
    <div className="form-divider"></div>
    <form className="contact-form">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Name*</label>
          <input type="text" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email*</label>
          <input type="email" id="email" required />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone*</label>
        <input type="tel" id="phone" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" rows="4"></textarea>
      </div>
      <button type="submit" className="submit-button">Submit</button>
    </form>
  </div>
);

export default ContactForm;
