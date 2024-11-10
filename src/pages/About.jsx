import React from "react";
import "./About.css";
import WhyChooseCard from "../components/WhyChooseCard";

const About = () => (
  <div className="about-page">
    <div className="banner">
      <img src=".//assets/banner-image.png" alt="Banner" className="banner-image" />
    </div>

    <section className="about-section">
      <h2 className="about-title">About BeautyZen</h2>
      <p className="intro-text">
        <em>Wishing for happy, healthy, beautiful skin at all times?<br /> That's possible with us!</em>
      </p>
      <div className="about-content">
        <img src=".//assets/about-1.png" alt="BeautyZen Interior" className="about-image" />
        <p className="about-description">
          Welcome to BeautyZen, one of India’s premier skin and aesthetic centers, conveniently located across multiple
          locations in Mumbai, Maharashtra. Here, we blend world-class treatments with the expertise of top aestheticians,
          always keeping our clients’ needs at the forefront. Our approach is unhurried and results-driven, prioritizing
          each client’s individual journey and crafting customized treatment plans for optimal results.<br /><br />
          As a highly regarded skin, aesthetic, and plastic surgery center, we offer an extensive range of cosmetic and
          general skin and hair care services to address diverse aesthetic and medical concerns. Staffed by accredited
          skincare experts with the clinical knowledge to ensure safe and effective treatments, BeautyZen takes pride in
          its dedication to excellence. With thousands of clients traveling from distant places to experience our care,
          we are honored to be a part of their journey to achieve healthy, radiant skin.
        </p>
      </div>
      
      <div className="quote-box">
        <img src=".//assets/beautyzen-logo.png" alt="BeautyZen Logo" className="logo" />
        <p className="quote-box-text">
          Mumbai has recently become a top destination for cosmetic treatments. Whether invasive or
          non-invasive, BeautyZen provides you with the very best.
        </p>
      </div>
    </section>

    <section className="premium-section">
      <h3 className="premium-title">Premium Skin Care Centre in Mumbai</h3>
      <div className="premium-bar"></div>
      <div className="premium-content">
        <p className="premium-description-left">
          Welcome to BeautyZen, Mumbai’s premier destination for luxurious skin and hair care. Renowned for our 
          medical-grade skincare, aesthetic treatments, and cutting-edge laser technology, we are a certified 
          facility committed to exceptional beauty and wellness. Whether addressing a medical skin concern needing 
          specialized care or simply enhancing your natural beauty, our skilled experts are dedicated to helping 
          you achieve remarkable results. At BeautyZen, our team of renowned skin specialists, dermatologists, 
          and highly-trained professionals have decades of experience in providing real solutions for a range of 
          skin issues. Our aesthetic experts in Mumbai focus on delivering personalized care tailored to each 
          individual’s unique needs, ensuring naturally radiant results. Our center features a range of minimally 
          invasive cosmetic procedures, designed to give you flawless skin and a timeless, natural look that boosts 
          self-confidence from the inside out. Every treatment option at BeautyZen is bespoke, crafted specifically 
          for you to enhance and accentuate your beauty. We support you through every step of your aesthetic journey, 
          whether your goal is to enhance your features or turn back the visible signs of aging. Our experts conduct 
          a comprehensive assessment to create a customized treatment plan aligned with your personal aspirations. 
          At BeautyZen, we bring out the best in you, so you can look and feel fantastic, inside and out.
        </p>
        <img src=".//assets/about-2.png" alt="Center" className="premium-image" />
      </div>
      <p className="premium-description-below">
        At BeautyZen, we welcome individuals of all ages and genders, offering comprehensive solutions to address a full 
        spectrum of skin and cosmetic concerns. From minimally invasive treatments to advanced surgeries, our goal is to 
        enhance and transform our clients’ appearance with precision. We specialize in treating a variety of aesthetic 
        concerns, including fine lines, wrinkles, crepey skin, stretch marks, skin tags, acne scars, pigmentation issues, 
        sun damage, uneven skin tone and texture, dryness, and more. BeautyZen also provides advanced surgical options, 
        from butt lifts to hair transplants, achieving transformative results for a refined appearance. Our minimally 
        invasive cosmetic procedures ensure flawless skin and a completely natural look, boosting self-confidence from 
        the inside out. At BeautyZen, we prioritize care. Each client’s safety, privacy, skin and body intricacies, and 
        lifestyle are central to our practice. Our reputation for high-quality, efficient service and premium, customized 
        treatments and products speaks for itself, grounded in evidence-based science for optimal results. Following a 
        thorough assessment, our specialists create a bespoke skincare plan that includes a tailored daily regimen for 
        home. We strive for each of our clients to feel extraordinary in their skin, experiencing enhanced confidence, 
        and enjoying the lasting benefits of healthy, radiant skin.
      </p>
    </section>

<section className="features-section">
  <h3>Our Features</h3>
  <div className="features-cards">
    <div className="feature-card">
      <div className="feature-icon-container">
        <img src=".//assets/cost-efficient-quality-care-icon.svg" alt="Icon 1" className="feature-icon" />
      </div>
      <p>Cost-efficient Quality Care</p>
    </div>
    <div className="feature-card">
      <div className="feature-icon-container">
        <img src=".//assets/cutting-edge-icon.svg" alt="Icon 2" className="feature-icon" />
      </div>
      <p>Cutting Edge Technologies</p>
    </div>
    <div className="feature-card">
      <div className="feature-icon-container">
        <img src=".//assets/experienced-team-icon.svg" alt="Icon 3" className="feature-icon" />
      </div>
      <p>Experienced Team</p>
    </div>
    <div className="feature-card">
      <div className="feature-icon-container">
        <img src=".//assets/advanced-skin-icon.svg" alt="Icon 4" className="feature-icon" />
      </div>
      <p>Advanced Skin Concerns, Cosmetic & Plastic Surgery treatments</p>
    </div>
    <div className="feature-card">
      <div className="feature-icon-container">
        <img src=".//assets/COVID-19-icon.svg" alt="Icon 5" className="feature-icon" />
      </div>
      <p>Follows all COVID 19 Guidelines</p>
    </div>
    <div className="feature-card">
      <div className="feature-icon-container">
        <img src=".//assets/client-satisfaction-icon.svg" alt="Icon 6" className="feature-icon" />
      </div>
      <p>100% Client Satisfaction</p>
    </div>
  </div>
</section>

    <section className="transformation-section">
      <h3>We Deliver the Transformation</h3>
      <p className="transformation-text">
      At BeautyZen, we recognize that enhancing skin health and body aesthetics can truly transform lives, which is why we approach each client’s journey with genuine care and attention. Our professionally accredited aesthetic practitioners, doctors, and trained nurses engage in understanding each individual’s story, asking insightful questions to design personalized treatments that address their unique concerns. We consider all factors influencing a client’s skin and body to recommend the most effective approach for achieving vibrant, healthy results.

Our advanced aesthetic treatments are at the core of what we offer. At BeautyZen, clients have access to a range of cutting-edge technologies, including LASER, HIFU, Ultherapy, and CoolSculpting, all within our fully equipped center and offered at accessible prices. These innovations empower clients to redefine their appearance and embrace a confident, radiant self-image. Beyond our clinical expertise, we are dedicated to inspiring confidence and self-assurance, particularly as we address common aging concerns with transparency and a focus on well-being.

Achieving a beautiful complexion requires consistent, quality skincare, and we know that many products fall short. As Mumbai’s leading skin and hair center, BeautyZen is committed to guiding clients in selecting skincare products that truly work for their skin type, helping them maintain a long-lasting, healthy glow.  

If you’re ready to feel great in your skin and confident in your body, reach out to BeautyZen’s expert team today and begin your journey to timeless beauty.
      </p>
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
          icon={<img src=".//assets/best-results-container.svg" alt="Affordable Cost Icon" style={{ width: "30px", height: "30px" }} />} 
        />
        <WhyChooseCard 
          text="Open All 7 Days a Week" 
          icon={<img src=".//assets/7days-container.svg" alt="Open All Week Icon" style={{ width: "30px", height: "30px" }} />} 
        />
      </div>
    </section>
  </div>
);

export default About;
