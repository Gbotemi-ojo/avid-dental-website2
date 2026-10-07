import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="stats-content">
        <div className="stat-item">
          <h3>3,200</h3>
          <p>Happy Patients<br/>Served</p>
        </div>
        
        <div className="stat-item">
          <h3>1,800</h3>
          <p>Teeth<br/>Professionally<br/>Whitened</p>
        </div>
        
        <div className="stat-item">
          <h3>950</h3>
          <p>Braces & Aligners<br/>Completed</p>
        </div>
        
        <div className="stat-item">
          <h3>15</h3>
          <p>Years of Combined<br/>Dental Experience</p>
        </div>
      </div>
      
      <div className="stats-image-container">
        {/* Replace with your actual building image from the public folder */}
        <img 
          src="/clinic-building.jpg" 
          alt="Avid Dental exterior" 
          className="clinic-image"
        />
      </div>
    </section>
  );
};

export default Stats;
