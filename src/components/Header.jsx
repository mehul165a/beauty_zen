import React from "react";
import "./Header.css";

const Header = () => (
  <header className="header">
    <div className="logo">
      <img src=".//assets/beautyzen-logo.png" alt="BeautyZen Logo" className="logo-image" />
    </div>
    <nav className="nav-links">
      <a href="/" className="nav-item">Home</a>
      <a href="/services" className="nav-item">Services</a>
      <a href="/about" className="nav-item">About</a>
      <a href="/contact" className="nav-item">Contact Us</a>
    </nav>
  </header>
);

export default Header;
