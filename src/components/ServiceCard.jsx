import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ title, description, image, icon }) => (
  <div className="service-card">
    <div className="service-image" style={{ backgroundImage: `url(${image})` }}></div>

    <div className="service-content">
      <div className="content-icon-text">
        <div className="icon">{icon}</div>
        <div>
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
        </div>
      </div>
      <a href="/" className="read-more">Read More ➔</a>
    </div>
  </div>
);

export default ServiceCard;
