import React from "react";
import "./WhyChooseCard.css";

const WhyChooseCard = ({ text, icon }) => (
  <div className="why-choose-card">
    <div className="icon-container">
      {icon}
    </div>
    <p className="card-text">{text}</p>
  </div>
);

export default WhyChooseCard;
