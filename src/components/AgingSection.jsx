import React from "react";
import "./AgingSection.css";

const AgingSection = () => {
  return (
    <section className="aging-section">
      <div className="aging-content-wrapper">
        <div className="stroke-box"></div>
        <div className="aging-content">
          <h2>AGING & FACE LIFTING</h2>
          <div className="carousel-container">
            <button className="carousel-arrow">&lt;</button>
            <div className="carousel-options">
              <div className="carousel-option active">Ageing Skin</div>
              <div className="carousel-option">Fine Lines & Wrinkles</div>
              <div className="carousel-option">Lip Enhancement</div>
            </div>
            <button className="carousel-arrow">&gt;</button>
          </div>
          <div className="option-description">
            <h3>Ageing Skin</h3>
            <p>
              We offer various anti-ageing treatments to delay the natural ageing of your skin and allow you to look youthful at all times.
            </p>
            <button className="read-more-button">Read More</button>
          </div>
          <h3 className="treatments-heading">TREATMENTS AT BEAUTYZEN</h3>
          <div className="treatments-row">
            <div><img src="./src/assets/beautyzen-logo.png" alt="Icon" className="treatment-logo" /> HIFU</div>
            <div><img src="./src/assets/beautyzen-logo.png" alt="Icon" className="treatment-logo" /> Anti Wrinkle Injections</div>
            <div><img src="./src/assets/beautyzen-logo.png" alt="Icon" className="treatment-logo" /> Derma Pen World 4</div>
          </div>
          <div className="treatments-row">
            <div><img src="./src/assets/beautyzen-logo.png" alt="Icon" className="treatment-logo" /> ClearLift</div>
            <div><img src="./src/assets/beautyzen-logo.png" alt="Icon" className="treatment-logo" /> Dermal Fillers</div>
          </div>
        </div>
      </div>
      <img src="./src/assets/aging-image.png" alt="Aging Treatment" className="aging-image" />
    </section>
  );
};

export default AgingSection;
