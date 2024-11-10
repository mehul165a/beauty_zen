import React, { useState } from "react";
import "./UnwantedHairSection.css";

const options = [
  {
    id: 1,
    title: "Facial Hair Reduction",
    description:
      "Since Your Face Is The Prime Focus Of Your Personality, It Is Important To Keep Your Face Free Of Excess Hair. At BeautyZen, We Have Qualified Laser Experts And Medically-Certified Laser Machines To Help You Permanently Remove Undesirable Facial Hair That Comes In Way Of Your Confidence. We Offer Guaranteed Results - An 80 To 90% Noticeable Reduction In Facial Hair Growth With Our Advanced Lasers.",
  },
  {
    id: 2,
    title: "Beard Shaping",
    description:
      "Beard Shaping Is An Essential Part Of Grooming For Those Who Prefer A Neat And Stylish Appearance. At BeautyZen, We Use Advanced Techniques To Shape And Maintain Your Beard For A Polished Look.",
  },
  {
    id: 3,
    title: "Full Body Laser",
    description:
      "Experience Smooth And Hair-Free Skin Across Your Entire Body With Our Full Body Laser Treatments. Our Experts Use Top-Of-The-Line Laser Technology To Provide Safe And Effective Hair Removal Solutions.",
  },
];

const UnwantedHairSection = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  return (
    <div className="unwanted-hair-section">
      <div className="options-container">
        {options.map((option) => (
          <div
            key={option.id}
            className={`option-box ${selectedOption === option.id ? "active" : ""}`}
            onClick={() => setSelectedOption(option.id)}
          >
            {option.title}
          </div>
        ))}
      </div>

      <div className="image-container">
        <img src="/path/to/your/image.jpg" alt="Treatment" className="treatment-image" />
      </div>

      <div className="description-container">
        <h3 className="description-heading">{options[selectedOption - 1].title}</h3>
        <p className="description-text">
          {options[selectedOption - 1].description}{" "}
          <button className="read-more-button">Read More</button>
        </p>
      </div>
    </div>
  );
};

export default UnwantedHairSection;
