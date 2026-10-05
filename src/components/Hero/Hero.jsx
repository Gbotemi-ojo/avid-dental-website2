import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <div className="hero-content">
          <p className="welcome-text">WELCOME TO YANGA DENTAL CLINIC</p>
          <h1 className="hero-title">Smile with<br/>Confidence.</h1>
          <p className="hero-subtitle">Get the healthy, beautiful smile you deserve.</p>
          
          {/* New Button Container */}
          <div className="hero-action-buttons">
            <button className="hero-btn-outline">PROMOS</button>
            <button className="hero-btn-solid">BOOK YOUR APPOINTMENT</button>
          </div>
        </div>
      </div>
      
      <div className="hero-right">
        <div className="image-container">
          <img 
            src="/avids1.jpg" 
            alt="Smiling patient" 
            className="model-image"
          />
          <div className="premium-badge">
             <div className="badge-placeholder">Yanga Premium</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
