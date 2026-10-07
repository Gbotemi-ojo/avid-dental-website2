import React from 'react';
import './Reasons.css';

const Reasons = () => {
  return (
    <section className="reasons-section">
      <div className="reasons-image-container">
        {/* Replace with your actual team image from the public folder */}
        <img 
          src="/team.jpg" 
          alt="Avid Dental Team" 
          className="team-image"
        />
      </div>
      
      <div className="reasons-content">
        <div className="badge-wrapper">
          <span className="upgrade-badge">Smile Upgrade Available</span>
        </div>
        
        <span className="reasons-subtitle">EXPERIENCE AVID DENTAL EXCELLENCE</span>
        
        <h2 className="reasons-title">
          Here's More Reason to<br />
          Choose Us <span className="pink-text">Today</span>
        </h2>
        
        <ul className="reasons-list">
          <li>- World-Class Dental Facility</li>
          <li>- Skilled, Caring Professionals</li>
          <li>- Transparent, Flexible Options</li>
          <li>- Trusted by Families Across Lagos</li>
        </ul>
        
        <button className="reasons-btn">BOOK YOUR APPOINTMENT</button>
      </div>
    </section>
  );
};

export default Reasons;
