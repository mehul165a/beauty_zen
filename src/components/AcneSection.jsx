import React from "react";
import "./AcneSection.css";

const AcneSection = () => {
  return (
    <section className="acne-section">
      <img src="./src/assets/acne-image.png" alt="Acne Treatment" className="acne-image" />
      <div className="acne-content-wrapper">
        <div className="stroke-box"></div>
        <div className="acne-content">
          <h2>ACNE & PIGMENTATION</h2>
          <div className="carousel-container">
            <button className="carousel-arrow">&lt;</button>
            <div className="carousel-options">
              <div className="carousel-option active">Acne/Pimples</div>
              <div className="carousel-option">Pigmentation</div>
              <div className="carousel-option">Open Pores</div>
            </div>
            <button className="carousel-arrow">&gt;</button>
          </div>
          <div className="option-description">
            <h3>ACNE/PIMPLES</h3>
            <p>We dive deep into figuring out the root cause behind your acne flare-ups and accordingly provide treatments based on your acne type or severity.</p>
            <button className="read-more-button">Read More</button>
          </div>
          <h3 className="treatments-heading">TREATMENTS AT BEAUTYZEN</h3>
          <div className="treatments-row">
            <div><img src="./src/assets/beautyzen-logo.png" alt="Icon" className="treatment-logo" /> ClearSkin</div>
            <div><img src="./src/assets/beautyzen-logo.png" alt="Icon" className="treatment-logo" /> Carbon Facial</div>
            <div><img src="./src/assets/beautyzen-logo.png" alt="Icon" className="treatment-logo" /> Hydrafacial MD</div>
          </div>
          <div className="treatments-row">
            <div><img src="./src/assets/beautyzen-logo.png" alt="Icon" className="treatment-logo" /> Medifacial</div>
            <div><img src="./src/assets/beautyzen-logo.png" alt="Icon" className="treatment-logo" /> Chemical Peels</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcneSection;
