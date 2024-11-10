import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [activeTab, setActiveTab] = useState('concerns'); 
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section quick-links">
          <h4>QUICK LINKS</h4>
          <ul>
            <li><a href="/">&#8250; Home</a></li>
            <li><a href="/about">&#8250; About Us</a></li>
            <li><a href="/contact">&#8250; Contact Us</a></li>
            <li><a href="/services">&#8250; Services</a></li>
          </ul>
        </div>
        
        <div className="footer-section logo-info">
          <div className="logo">
            <img src="//assets/beautyzen-logo.png" alt="BeautyZen Logo" className="beautyzen-logo" />
          </div>
          <p>Contact Us! If you want to achieve beautiful skin, stronger hair, and enhanced overall appearance.</p>
        </div>
        
        <div className="footer-section contact-info">
          <h4>ADDRESS</h4>
          <p>S-347, 2nd & 3rd Floor, Near Marine Drive, Mumbai 220017</p>
          <h4>EMAIL</h4>
          <p>info@xyzestheticclinic.com</p>
          <h4>CONTACT NUMBER</h4>
          <p>+91-7290015801</p>
          <p>+91-7290015802</p>
          <p>+91-7290015803</p>
        </div>
      </div>

      <div className="footer-middle">
        <div className="concerns-treatments">
          <div className="tab-headings">
            <h4 
              className={activeTab === 'concerns' ? 'active' : ''} 
              onClick={() => setActiveTab('concerns')}
            >
              CONCERNS
            </h4>
            <h4 
              className={activeTab === 'treatments' ? 'active' : ''} 
              onClick={() => setActiveTab('treatments')}
            >
              TREATMENTS
            </h4>
          </div>

          {activeTab === 'concerns' ? (
            <div className="concerns-content">
              <p><span className="concern-heading">Hair</span><br /> Hairfall | Hair Thinning | Hair Loss | Dandruff</p>
              <p><span className="concern-heading">Acne & Pigmentation</span><br /> Acne/Pimples | Open Pores | Acne Scars Pigmentation | Under Eye Dark Circles</p>
              <p><span className="concern-heading">Unwanted Hair</span><br /> Facial Hair Reduction | Beard Shaping | Full Body Laser</p>
              <p><span className="concern-heading">Ageing & Face Lifting</span><br /> Fine Lines & Wrinkles | Ageing Skin | Lip Reshaping | Chin Enhancement | Double Chin Reduction | Under Eye Rejuvenation</p>
              <p><span className="concern-heading">Fat Reduction & Body Contouring</span><br /> Upper Body Contouring | Lower Body Contouring | Stretchmarks</p>
            </div>
          ) : (
            <div className="treatments-content">
              <p>Laser Hair Removal | Chemical Peels | Botox & Fillers | PRP Therapy | Microdermabrasion</p>
              <p>Anti-Aging Treatments | Body Contouring | Skin Tightening | Acne Treatment | Pigmentation Treatment</p>
              <p>Hair Loss Treatment | Skin Rejuvenation | Facial Treatments | Stretchmark Reduction</p>
            </div>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <p className="disclaimer">
          The information on the Web Site is provided for informational purposes only and is not meant to substitute the advice provided by your doctor...
        </p>
        <p>© Copyright 2024 BeautyZen All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
