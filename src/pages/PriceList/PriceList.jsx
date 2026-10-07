import React from 'react';
import './PriceList.css';

const fullPricingData = [
  {
    category: 'Consultation & Preventive',
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
      { name: 'Registration & Consultation', price: '₦5,000' },
      { name: 'Registration & Consultation (family)', price: '₦10,000' },
      { name: 'Scaling and Polishing', price: '₦40,000' },
      { name: 'Scaling and Polishing with Gross Stain', price: '₦50,000' },
      { name: 'Curretage/Subgingival (per tooth)', price: '₦30,000' },
      { name: 'Topical Flouridation/Desensitization', price: '₦20,000' },
      { name: 'X-Ray', price: '₦10,000' },
      { name: 'Gingivectomy/Operculectomy', price: '₦30,000' },
      { name: 'Fissure Sealant', price: '₦20,000' },
      { name: 'Fluoride Treatment', price: '₦35,000' }
    ]
  },
  {
    category: 'Extractions & Surgery',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="url(#pricelist-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
    items: [
      { name: 'Simple Extraction Anterior', price: '₦40,000' },
      { name: 'Simple Extraction Posterior', price: '₦50,000' },
      { name: 'Extraction of Retained Root', price: '₦50,000' },
      { name: 'Surgical Extraction (Impacted 3rd Molar)', price: '₦100,000' },
      { name: 'Incision & Drainage/Suturing with Debridement', price: '₦50,000' },
      { name: 'Pulpotomy/Pulpectomy', price: '₦50,000' },
      { name: 'Intermaxillary Fixation', price: '₦150,000' }
    ]
  },
  {
    category: 'Restorative & Fillings',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="url(#pricelist-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
        <line x1="9" y1="9" x2="9.01" y2="9"></line>
        <line x1="15" y1="9" x2="15.01" y2="9"></line>
      </svg>
    ),
    items: [
      { name: 'Temporary Dressing', price: '₦20,000' },
      { name: 'Amalgam Filling', price: '₦30,000' },
      { name: 'FUJI 9 (Posterior GIC) (per filling)', price: '₦50,000' },
      { name: 'Composite Buildup', price: '₦50,000' },
      { name: 'Esthetic Tooth Filling', price: '₦35,000' },
      { name: 'GIC Filling', price: '₦40,000' },
      { name: 'Root Canal Treatment Anterior', price: '₦100,000' },
      { name: 'Root Canal Treatment Posterior', price: '₦150,000' },
      { name: 'Tooth Whitening (3 Sessions)', price: '₦100,000' },
      { name: 'Stainless Steel Crown', price: '₦75,000' },
      { name: 'PFM Crown', price: '₦150,000' },
      { name: 'Zirconium Crown', price: '₦250,000' },
      { name: 'Gold Crown', price: '₦0' },
      { name: 'Metallic Crown', price: '₦70,000' },
      { name: 'E-Max Crown', price: '₦300,000' },
      { name: 'Crown Cementation', price: '₦30,000' },
      { name: 'Splinting with Wires', price: '₦100,000' },
      { name: 'Splinting with GIC Composite', price: '₦150,000' }
    ]
  },
  {
    category: 'Orthodontics & Implants',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="url(#pricelist-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    ),
    items: [
      { name: 'Orthodontist Consult', price: '₦20,000' },
      { name: 'Braces Consultation', price: '₦20,000' },
      { name: 'Braces', price: '₦0' },
      { name: 'Aligners', price: '₦0' },
      { name: 'Essix Retainer', price: '₦100,000' },
      { name: 'Dental Implant – One Tooth', price: '₦1,200,000' },
      { name: 'Dental Implant – Two Teeth', price: '₦1,800,000' },
      { name: 'Partial Denture', price: '₦50,000' },
      { name: 'Removable Denture (Additional Tooth)', price: '₦50,000' },
      { name: 'Flexible Denture (per tooth)', price: '₦75,000' },
      { name: 'Flexible Denture (2nd tooth)', price: '₦40,000' },
      { name: 'Denture Repair', price: '₦30,000' },
      { name: 'Band & Loop Space Maintainers', price: '₦60,000' },
      { name: 'LLA & TPA Space Maintainers', price: '₦70,000' }
    ]
  }
];

const carouselServices = [
  { category: 'ORTHODONTICS', title: 'Braces', bgImage: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80' },
  { category: 'LUXURY DENTAL', title: 'Grillz', bgImage: 'https://images.unsplash.com/photo-1629909603654-28e377c37b09?auto=format&fit=crop&w=800&q=80' },
  { category: 'WEIGHT MANAGEMENT', title: 'Jaw Locking', bgImage: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80' },
  { category: 'AESTHETIC DENTISTRY', title: 'Fashion Braces', bgImage: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80' }
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
            Transparent pricing. Premium dental care. See what it costs to smile brighter at Avid Dental.
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
