import React from 'react';
import './PriceList.css';

const fullPricingData = [
  {
    category: 'Dental Essentials',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="url(#pricelist-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    ),
    items: [
      { name: 'Clinic Registration + Consultation + Full Mouth Scan', price: '₦18,500' },
      { name: 'Group Clinic Registration (10 people)', price: '₦50,000' },
      { name: 'Tooth Filling (per tooth)', price: '₦27,500 - ₦65,000' },
      { name: 'Routine Tooth Extraction', price: '₦35,000 - ₦55,000' },
      { name: 'Surgical Tooth Extraction', price: '₦95,000 - ₦185,500' }
    ]
  },
  {
    category: 'Hygiene & Preventive Treatments',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="url(#pricelist-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
    items: [
      { name: 'Ultrasonic Teeth Cleaning', price: '₦20,000 - ₦30,000' },
      { name: 'Retainers (post-alignment)', price: '₦40,000 - ₦100,000' },
      { name: 'Fashion Braces (non-functional)', price: '₦178,000' },
      { name: 'Jaw Locking (for weight loss)', price: 'FROM ₦157,000' }
    ]
  },
  {
    category: 'Cosmetic & Orthodontic Treatments',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="url(#pricelist-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
        <line x1="9" y1="9" x2="9.01" y2="9"></line>
        <line x1="15" y1="9" x2="15.01" y2="9"></line>
      </svg>
    ),
    items: [
      { name: 'Teeth Whitening (2 sessions)', price: '₦91,500' },
      { name: 'Extra Whitening Session', price: '₦45,000' },
      { name: 'Veneers (Instalments available)', price: 'FROM ₦3.5M' },
      { name: 'Crowns (Instalments available)', price: '₦165,000 - ₦225,000' },
      { name: 'Root Canal (Instalments available)', price: '₦110,000 - ₦150,000' },
      { name: 'Bridges (Instalments available)', price: 'FROM ₦380,000' },
      { name: 'Dentures', price: 'FROM ₦65,500' },
      { name: 'Implants (Instalments available)', price: '₦1,200,000 - ₦1.5M' },
      { name: 'Braces (Instalments available)', price: 'STARTS FROM ₦4.0M' },
      { name: 'Ivy Aligners (Instalments available)', price: '₦1.2M - ₦2.5M' },
      { name: 'Invisalign (Instalments available)', price: '$5,000' },
      { name: 'Grillz', price: 'FROM ₦780,000' }
    ]
  }
];

const carouselServices = [
  { category: 'ORTHODONTICS', title: 'Braces', bgImage: '/braces-bg.jpg' },
  { category: 'LUXURY DENTAL', title: 'Grillz', bgImage: '/grillz-bg.jpg' },
  { category: 'WEIGHT MANAGEMENT', title: 'Jaw Locking', bgImage: '/jaw-bg.jpg' },
  { category: 'AESTHETIC DENTISTRY', title: 'Fashion Braces', bgImage: '/fashion-braces-bg.jpg' }
];

const PriceList = () => {
  return (
    <main className="pricelist-page">
      {/* SVG Gradient Definition */}
      <svg width="0" height="0">
        <linearGradient id="pricelist-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="#FA7F59" offset="0%" />
          <stop stopColor="#ED1376" offset="100%" />
        </linearGradient>
      </svg>

      {/* Hero Section */}
      <section className="pricelist-hero">
        <div className="pricelist-hero-overlay"></div>
        <div className="pricelist-hero-content">
          <h1 className="pricelist-title">Price List</h1>
          <p className="pricelist-subtitle">
            Transparent pricing. Premium dental care. See what it costs to smile brighter at Yanga Dental Clinic.
          </p>
        </div>
      </section>

      {/* Pricing Grid Section */}
      <section className="pricelist-grid-container">
        <div className="pricelist-grid">
          {fullPricingData.map((category, index) => (
            <div className="pricelist-card" key={index}>
              <div className="pricelist-card-icon">
                {category.icon}
              </div>
              <h3 className="pricelist-card-title">{category.category}</h3>
              
              <ul className="pricelist-items">
                {category.items.map((item, itemIndex) => (
                  <li className="pricelist-item" key={itemIndex}>
                    <div className="pricelist-item-details">
                      <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="#ED1376" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="item-name">{item.name}</span>
                    </div>
                    <span className="item-price">{item.price}</span>
                  </li>
                ))}
              </ul>
              
              <a href="#book" className="pricelist-book-btn">
                BOOK YOUR APPOINTMENT <span className="arrow">↘</span>
              </a>
            </div>
          ))}
        </div>
        
        <div className="pricelist-action-container">
          <button className="pricelist-outline-btn">BOOK APPOINTMENT</button>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section className="pricelist-services-carousel">
        <div className="carousel-header">
          <h2>Our Services</h2>
          <div className="carousel-controls">
            <button className="carousel-btn">❮</button>
            <button className="carousel-btn">❯</button>
          </div>
        </div>
        
        <div className="carousel-track">
          {carouselServices.map((service, index) => (
            <div 
              className="carousel-card" 
              key={index}
              style={{ backgroundImage: `url(${service.bgImage})` }}
            >
              <div className="card-overlay">
                <div className="card-top">
                  <span className="card-category">{service.category}</span>
                  <h3 className="card-title">{service.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PriceList;
