import React, { useState } from 'react';
import './FatReductionSection.css';
import beautyZenLogo from '../assets/beautyzen-logo.png'; // Ensure the path to your logo is correct

const fatReductionOptions = [
  {
    label: 'Upper Body Contouring',
    description: 'If you want to get rid of surplus fat protruding over your bra straps, our Centre offers multiple treatment options for you. To address your bra bulges, we have Exilis Ultra 360, HIFU, Ultherapy, Coolsculpting, and Liposuction.'
  },
  {
    label: 'Lower Body Contouring',
    description: 'Lower body contouring treatments aim to enhance and reshape areas below the waist, using advanced procedures for noticeable results.'
  },
  {
    label: 'Stomach',
    description: 'Our stomach contouring solutions help flatten and tone your abdominal area with non-invasive and minimally invasive options tailored for you.'
  }
];

const FatReductionSection = () => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);

  const handleOptionClick = (index) => {
    setSelectedOptionIndex(index);
  };

  return (
    <section className="fat-reduction-section">
      <div className="fat-reduction-content">
        <h2>FAT REDUCTION & BODY CONTOURING</h2>
        <div className="carousel-container">
          <button className="carousel-arrow left-arrow">&#8249;</button>
          <div className="carousel-options">
            {fatReductionOptions.map((option, index) => (
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
          <h3>{fatReductionOptions[selectedOptionIndex].label}</h3>
          <p>{fatReductionOptions[selectedOptionIndex].description}</p>
          <button className="read-more-button">Read More</button>
        </div>
        <div className="treatments-list">
          <h3>TREATMENTS AT BEAUTYZEN</h3>
          <div className="treatments-row">
            <div><img src={beautyZenLogo} alt="Logo" className="treatment-logo" /> HIFU</div>
            <div><img src={beautyZenLogo} alt="Logo" className="treatment-logo" /> Coolsculpting</div>
          </div>
        </div>
      </div>
      <div className="fat-reduction-image">
        <img src="/path/to/fat-reduction-image.jpg" alt="Fat Reduction" className="reduction-image" />
      </div>
    </section>
  );
};

export default FatReductionSection;
