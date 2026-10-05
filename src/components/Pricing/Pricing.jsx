import React from 'react';
import './Pricing.css';

const pricingData = [
  {
    category: 'Dental Essentials',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="url(#pricing-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    ),
    items: [
      { name: 'Clinic Registration + Consultation + Full X-Ray', price: '₦18,500' },
      { name: 'Group Clinic Registration (10 people)', price: '₦50,000' },
      { name: 'Tooth Filling (per tooth)', price: '₦20,500 - ₦60,000' },
      { name: 'Routine Tooth Extraction', price: '₦35,000 - ₦55,000' }
    ]
  },
  {
    category: 'Hygiene & Preventive Treatments',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="url(#pricing-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
    items: [
      { name: 'Ultrasonic Teeth Cleaning', price: '₦15,000 - ₦25,000' },
      { name: 'Retainers (post-alignment)', price: '₦40,000 - ₦100,000' },
      { name: 'Fashion Braces (non-functional)', price: '₦125,000' },
      { name: 'Jaw Locking (for weight loss)', price: 'FROM ₦85,000' }
    ]
  },
  {
    category: 'Cosmetic & Orthodontic Treatments',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="url(#pricing-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
        <line x1="9" y1="9" x2="9.01" y2="9"></line>
        <line x1="15" y1="9" x2="15.01" y2="9"></line>
      </svg>
    ),
    items: [
      { name: 'Teeth Whitening (2 sessions)', price: '₦91,500' },
      { name: 'Extra Whitening Session', price: '₦45,000' },
      { name: 'Veneers (Instalments available)', price: 'FROM ₦3,500,000' },
      { name: 'Crowns (Instalments available)', price: '₦165,000 - ₦225,000' }
    ]
  }
];

const Pricing = () => {
  return (
    <section className="pricing-section" id="pricing">
      <svg width="0" height="0">
        <linearGradient id="pricing-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="#FA7F59" offset="0%" />
          <stop stopColor="#ED1376" offset="100%" />
        </linearGradient>
      </svg>

      <div className="pricing-header">
        <h2 className="pricing-title">Transparent Pricing, Premium Care</h2>
        <p className="pricing-subtitle">We believe in honest pricing and expert treatment. Here's a quick look at what to expect.</p>
      </div>

      <div className="pricing-grid">
        {pricingData.map((category, index) => (
          <div className="pricing-card" key={index}>
            <div className="pricing-card-icon">
              {category.icon}
            </div>
            <h3 className="pricing-card-title">{category.category}</h3>
            
            <ul className="pricing-list">
              {category.items.map((item, itemIndex) => (
                <li className="pricing-list-item" key={itemIndex}>
                  <div className="item-details">
                    <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="#ED1376" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="item-name">{item.name}</span>
                  </div>
                  <span className="item-price">{item.price}</span>
                </li>
              ))}
            </ul>
            
            <a href="#book" className="pricing-book-btn">
              BOOK YOUR APPOINTMENT <span className="arrow">↘</span>
            </a>
          </div>
        ))}
      </div>
      
      <div className="pricing-footer">
        <button className="view-full-pricelist">VIEW FULL PRICELIST</button>
      </div>
    </section>
  );
};

export default Pricing;
