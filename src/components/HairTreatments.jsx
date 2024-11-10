import React, { useState } from 'react';
import './HairTreatments.css';
import beautyZenLogo from '../assets/beautyzen-logo.png'; // Add the correct path to the logo

const hairOptions = [
  { label: 'Hair Loss', description: 'Our hair loss doctors conduct a deep analysis of your concern. Upon finding the cause of hair loss, we serve you with the best surgical or non-surgical hair restoration treatments at the Centre.' },
  { label: 'Hair Fall', description: 'Hair fall treatments focus on strengthening the roots and nourishing the scalp to minimize hair shedding and promote healthy growth.' },
  { label: 'Hair Thinning', description: 'Hair thinning solutions work to improve hair density and volume by stimulating hair follicles and using targeted therapy for better growth.' }
];

const HairTreatments = () => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);

  const handleOptionClick = (index) => {
    setSelectedOptionIndex(index);
  };

  return (
    <section className="hair-treatments-section">
      <div className="hair-treatments-content">
        <h2>HAIR TREATMENTS</h2>
        <div className="carousel-container">
          <button className="carousel-arrow left-arrow">&#8249;</button>
          <div className="carousel-options">
            {hairOptions.map((option, index) => (
              <div
                key={index}
                className={`carousel-option ${selectedOptionIndex === index ? 'active' : ''}`}
                onClick={() => handleOptionClick(index)}
              >
                {option.label}
              </div>
            ))}
          </div>
          <button className="carousel-arrow right-arrow">&#8250;</button>
        </div>
        <div className="option-description">
          <h3>{hairOptions[selectedOptionIndex].label}</h3>
          <p>{hairOptions[selectedOptionIndex].description}</p>
          <button className="read-more-button">Read More</button>
        </div>
        <div className="treatments-list">
          <h3>TREATMENTS AT BEAUTYZEN</h3>
          <div className="treatments-row">
            <div><img src={beautyZenLogo} alt="Logo" className="treatment-logo" /> GFC</div>
            <div><img src={beautyZenLogo} alt="Logo" className="treatment-logo" /> Derma Pen World 4</div>
            <div><img src={beautyZenLogo} alt="Logo" className="treatment-logo" /> Mesotherapy</div>
          </div>
          <div className="treatments-row">
            <div><img src={beautyZenLogo} alt="Logo" className="treatment-logo" /> Hair Transplant</div>
            <div><img src={beautyZenLogo} alt="Logo" className="treatment-logo" /> Hair Growth Booster</div>
          </div>
        </div>
      </div>
      <div className="hair-treatments-image">
        <img src="/path/to/hair-treatment-image.jpg" alt="Hair Treatment" className="treatment-image" />
      </div>
    </section>
  );
};

export default HairTreatments;
