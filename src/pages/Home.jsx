import React, { useState } from "react";
import "./Home.css";
import WhyChooseCard from "../components/WhyChooseCard";
import HairTreatments from "../components/HairTreatments";
import AcneSection from "../components/AcneSection";
import UnwantedHairSection from "../components/UnwantedHairSection";
import AgingSection from "../components/AgingSection";
import FatReductionSection from "../components/FatReductionSection";

const carouselData = [
  {
    title: "SOPRANO TITANIUM LASER",
    description: "The Soprano Titanium Laser is excellent for removing unwanted hair. Its innovative 3D technology combines the three most efficient hair removal laser wavelengths (755nm, 810nm, and 1064nm) into a single applicator. It improves the skin's quality, smoothes it, and removes dryness and ingrown hairs. The most widely utilized lasers by laser professionals can eradicate pimples, irritations, and even the slightest skin imperfections.",
    image: ".//assets/soprano-image.png"
  },
  {
    title: "Advanced Treatment 2",
    description: "Description for the second treatment goes here...",
    image: "/path/to/carousel-image2.jpg"
  },
  {
    title: "Advanced Treatment 3",
    description: "Description for the third treatment goes here...",
    image: "/path/to/carousel-image3.jpg"
  },
  {
    title: "Advanced Treatment 4",
    description: "Description for the fourth treatment goes here...",
    image: "/path/to/carousel-image4.jpg"
  },
  {
    title: "Advanced Treatment 5",
    description: "Description for the fifth treatment goes here...",
    image: "/path/to/carousel-image5.jpg"
  }
];

const treatmentOptions = [
  { name: "Hair Loss", description: "Our hair loss doctors conduct a deep analysis of your concern. Upon finding the cause of hair loss we serve you with the best surgical or non-surgical hair restoration treatments at the Centre." },
  { name: "Hair Fall", description: "We provide specialized treatments to combat hair fall, ensuring stronger and healthier hair growth with advanced technology." },
  { name: "Hair Thinning", description: "Our experts tailor solutions to address hair thinning, restoring volume and strength with proven methodologies." }
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-text-container">
          <h1>Care For Your Skin, <br />Care For Your <br /> Beauty</h1>
          <p>Our skin care clinic best dermatologists in India offer premium aesthetics.</p>
          <button className="hero-button">Read more</button>
        </div>
        <img src=".//assets/home-banner.png" alt="Facial Treatment" className="hero-image" />
      </section>

      <section className="welcome-section">
        <p className="welcome-text">Welcome To</p>
        <h2 className="welcome-title">BEAUTYZEN</h2>
        <p className="welcome-subtitle">Because You Deserve to Feel Beautiful Inside and Out</p>
        <div className="welcome-content">
          <div className="welcome-column">
            <p>
              BeautyZen is Mumbai's leading skin and hair care centre, offering a wide range of luxurious treatments
              designed to enhance your natural beauty. Our highly skilled professionals specialize in personalized,
              results-driven therapies that address a variety of skin and hair concerns. By combining the latest
              technologies and scientifically proven methods, we provide safe and effective solutions that deliver
              lasting results. At BeautyZen, we are dedicated to ensuring each client enjoys a relaxing experience
              tailored to their individual needs and preferences.
            </p>
          </div>
          <div className="welcome-column">
            <p>
              We believe in making beauty accessible, which is why BeautyZen offers flexible financing plans and special
              promotions to suit your budget. Whether you're seeking anti-aging treatments, acne solutions, or hair
              restoration, our expert team is here to help you achieve your beauty goals. We prioritize client safety and
              well-being, adhering to the highest standards of hygiene and professionalism. Experience the transformative
              power of BeautyZen and feel confident with skin and hair that radiates health and beauty. Schedule your
              consultation today!
            </p>
          </div>
        </div>
      </section>

    <HairTreatments />

    <AcneSection />

    <UnwantedHairSection />

    <AgingSection />

    <FatReductionSection />

      <section className="why-choose-container">
        <h2>Why Choose BeautyZen?</h2>
        <div className="why-choose-bar"></div>
        <div className="why-choose-cards">
          <WhyChooseCard 
            text="World Class Luxurious Infrastructure" 
            icon={<img src=".//assets/world-class-icon.svg" alt="World Class Icon" style={{ width: "30px", height: "30px" }} />} 
          />
          <WhyChooseCard 
            text="World best and US FDA approved Technologies" 
            icon={<img src=".//assets/fda-approved-icon.svg" alt="FDA Approved Icon" style={{ width: "30px", height: "30px" }} />} 
          />
          <WhyChooseCard 
            text="Experienced and Qualified Experts" 
            icon={<img src=".//assets/qualified-experts-icon.svg" alt="Qualified Experts Icon" style={{ width: "30px", height: "30px" }} />} 
          />
          <WhyChooseCard 
            text="Best Results at Affordable Cost" 
            icon={<img src=".//assets/affordable-cost-icon.svg" alt="Affordable Cost Icon" style={{ width: "30px", height: "30px" }} />} 
          />
          <WhyChooseCard 
            text="Open All 7 Days a Week" 
            icon={<img src=".//assets/open-7-days-icon.svg" alt="Open All Week Icon" style={{ width: "30px", height: "30px" }} />} 
          />
        </div>
      </section>

      <section className="carousel-section">
        <div className="carousel-left">
          <img src=".//assets/home-last.png" alt="Clinic Room" className="carousel-static-image" />
        </div>
        <div className="carousel-right">
          <img
            src={carouselData[currentIndex].image}
            alt={carouselData[currentIndex].title}
            className="carousel-main-image"
          />
          <div className="carousel-text-container">
            <h3 className="carousel-title">{carouselData[currentIndex].title}</h3>
            <p className="carousel-description">{carouselData[currentIndex].description}</p>
          </div>
          <div className="carousel-dots">
            {carouselData.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentIndex === index ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
