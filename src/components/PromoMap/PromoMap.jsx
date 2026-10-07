import React from 'react';
import './PromoMap.css';

const PromoMap = () => {
  return (
    <section className="promo-map-section">
      <div className="promo-content">
        <div className="promo-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9M3 20h9M12 4v16M8 8l4-4 4 4" />
          </svg>
        </div>
        
        <h2 className="promo-title">
          Book Now to Claim Your<br />
          Special Discount and<br />
          Experience Premium<br />
          Dental Care!
        </h2>
        
        <div className="promo-buttons">
          <button className="promo-btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            0901 645 9100
          </button>
          <button className="promo-btn-solid">BOOK AN APPOINTMENT</button>
        </div>
      </div>
      
      <div className="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d31712.468105819797!2d3.3685503999999997!3d6.5142784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x103b91e1db9e2ee5%3A0xcd83f1cef4aa229a!2sAvid%20Dental%20Clinic%20Lagos%2C%20Ile%20Zik%20Bus%20Stop%2C%20601%20Agege%20Motor%20Rd%2C%20Ile%20Zik%2C%20Ikeja%20101233%2C%20Lagos!3m2!1d6.6023837!2d3.3314089!5e0!3m2!1sen!2sng!4v1791204317524!5m2!1sen!2sng" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="strict-origin-when-cross-origin"
          title="Dental Clinic Location"
        ></iframe>
      </div>
    </section>
  );
};

export default PromoMap;