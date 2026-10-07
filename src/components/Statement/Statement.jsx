import React from 'react';
import './Statement.css';

const Statement = () => {
  return (
    <section className="statement-section" id="about">
      {/* Decorative Floating Images */}
      <div className="floating-img img-top-left">
        <img src="/floating1.jpg" alt="Smiling patient" />
      </div>
      
      <div className="floating-img img-bottom-left">
        <img src="/floating2.jpg" alt="Smiling patient" />
      </div>

      <div className="floating-img img-bottom-center">
        <img src="/floating4.jpg" alt="Smiling child patient" />
      </div>
      
      <div className="floating-img img-bottom-right">
        <img src="/floating3.jpg" alt="Smiling patient" />
      </div>

      <div className="statement-content">
        <p>
          At Avid Dental, we combine expert care with state-of-the-art technology. 
          From routine cleanings to advanced procedures, our skilled team and modern equipment 
          ensure precise, high-quality dental care for every patient.
        </p>
      </div>
    </section>
  );
};

export default Statement;