import React from "react";
import "./Services.css";
import ServiceCard from "../components/ServiceCard";
import WhyChooseCard from "../components/WhyChooseCard";

const Services = () => (
  <div className="services-page">
    <div className="banner">
      <img src=".//assets/banner-image.png" alt="Banner" className="banner-image" />
    </div>

    <section className="services-container">
      <div className="services-section white-bg">
        <div className="services-header">
          <h2>What Services We Offer</h2>
          <button className="view-all-button">View All Services</button>
        </div>

        <div className="service-cards-row">
          <ServiceCard 
            title="Rhinoplasty" 
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit." 
            image=".//assets/rhinoplasty.png" 
            icon={<img src=".//assets/rhinoplasty-icon.svg" alt="Rhinoplasty Icon" style={{height:'45px', width:'45px'}} />} // Add icon path here
          />
          <ServiceCard 
            title="Botox Injection" 
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit." 
            image=".//assets/botox-injection.png" 
            icon={<img src=".//assets/botox-injection-icon.svg" alt="Botox Icon" style={{height:'45px', width:'45px'}} />} // Add icon path here
          />
          <ServiceCard 
            title="Breast Implant" 
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit." 
            image=".//assets/breast-implant.png" 
            icon={<img src=".//assets/breast-implant-icon.svg" alt="Breast Implant Icon" style={{height:'45px', width:'45px'}}/>} // Add icon path here
          />
        </div>
      </div>

      <div className="services-section cream-bg">
        <div className="service-cards-row">
          <ServiceCard 
            title="Facelift" 
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit." 
            image=".//assets/facelift.png" 
            icon={<img src=".//assets/facelift-icon.svg" alt="Facelift Icon" style={{height:'45px', width:'45px'}} />} // Add icon path here
          />
          <ServiceCard 
            title="Body Shaping" 
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit." 
            image=".//assets/body-shaping.png" 
            icon={<img src=".//assets/body-shaping-icon.svg" alt="Body Shaping Icon" style={{height:'45px', width:'45px'}}/>} // Add icon path here
          />
          <ServiceCard 
            title="Buttocks Reshape" 
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit." 
            image=".//assets/buttocks-reshape.png" 
            icon={<img src=".//assets/buttocks-reshape-icon.svg" alt="Buttocks Reshape Icon" style={{height:'45px', width:'45px'}}/>} // Add icon path here
          />
        </div>
      </div>
    </section>

    <section className="why-choose-container">
      <h2>Why Choose BeautyZen?</h2>
      <div className="why-choose-cards">
        <WhyChooseCard 
          text="World Class Luxurious Infrastructure" 
          icon={<img src=".//assets/world-class-container.svg" alt="World Class Icon" style={{ width: "30px", height: "30px" }} />} 
        />
        <WhyChooseCard 
          text="World best and US FDA approved Technologies" 
          icon={<img src=".//assets/world-best-container.svg" alt="FDA Approved Icon" style={{ width: "30px", height: "30px" }} />} 
        />
        <WhyChooseCard 
          text="Experienced and Qualified Experts" 
          icon={<img src=".//assets/experienced-container.svg" alt="Qualified Experts Icon" style={{ width: "30px", height: "30px" }} />} 
        />
        <WhyChooseCard 
          text="Best Results at Affordable Cost" 
          icon={<img src=".//assets/best-results-container.svg" alt="Affordable Icon" style={{ width: "30px", height: "30px" }} />} 
        />
        <WhyChooseCard 
          text="Open All 7 Days a Week" 
          icon={<img src=".//assets/7days-container.svg" alt="Open All Week Icon" style={{ width: "30px", height: "30px" }} />} 
        />
      </div>
    </section>
  </div>
);

export default Services;
