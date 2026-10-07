import React from 'react';
import './Promos.css';

const Promos = () => {
  return (
    <main className="promos-page">
      {/* Promo Hero Section */}
      <section className="promo-hero-section">
        <div className="promo-hero-overlay"></div>
        <div className="promo-hero-content">
          <span className="promo-badge">PROMO</span>
          <h1 className="promo-title">
            Smile Brighter<br />
            with Yanga<br />
            Dental
          </h1>
          <p className="promo-subtitle">
            Premium Dental Care. Exclusive Offers. Limited Time Only.
          </p>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="promo-included-section">
        <h2 className="included-title">What's Included</h2>
        <ul className="included-list">
          <li>
            <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="#ec008c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span><strong>Flexible Payment Plans</strong> – available on Veneers, Braces, Crowns, and Implants</span>
          </li>
          <li>
            <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="#ec008c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span><strong>Family Group Plans</strong> – Register 10 family members and friends for ₦50,000 (save ₦135,000)</span>
          </li>
        </ul>
      </section>

      {/* Features Split Section */}
      <section className="promo-features-section">
        {/* Left Column: Why Choose */}
        <div className="feature-card">
          <div className="feature-image-container">
            {/* Replace with your actual image from the public folder */}
            <img src="" alt="Dental clinic room" className="feature-image" />
          </div>
          <div className="feature-content pink-bg">
            <h3>Why Choose Yanga Dental</h3>
            <ul className="feature-list">
              <li>- Modern, fully equipped dental clinic in a serene location</li>
              <li>- Experienced dentists & specialist care for all age groups</li>
              <li>- Transparent pricing. No hidden charges.</li>
              <li>- Clean, calming environment designed for your comfort</li>
              <li>- Same-day appointments available</li>
              <li>- Weekend bookings welcome</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Top Rated Services */}
        <div className="feature-card">
          <div className="feature-image-container">
            {/* Replace with your actual image from the public folder */}
            <img src="/promo-room2.jpg" alt="Dental clinic chair" className="feature-image" />
          </div>
          <div className="feature-content orange-bg">
            <h3>Our Top Rated Services</h3>
            <ul className="feature-list">
              <li>- Ultrasonic Scaling & Polishing</li>
              <li>- Teeth Whitening (Double Session)</li>
              <li>- Root Canal Therapy</li>
              <li>- Braces & Clear Aligners</li>
              <li>- Veneers & Smile Makeovers</li>
              <li>- Surgical Extractions</li>
              <li>- Dental Implants</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Promos;
