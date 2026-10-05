import React from 'react';
import './DetailedServices.css';

const detailedServicesData = [
  { category: 'ORTHODONTICS', title: 'Braces', bgImage: '/braces-bg.jpg' },
  { category: 'LUXURY DENTAL', title: 'Grillz', bgImage: '/grillz-bg.jpg' },
  { category: 'WEIGHT MANAGEMENT', title: 'Jaw Locking', bgImage: '/jaw-bg.jpg' },
  { category: 'AESTHETIC DENTISTRY', title: 'Fashion Braces', bgImage: '/fashion-braces-bg.jpg' },
  { category: 'ORTHODONTICS', title: 'Retainers', bgImage: '/retainers-bg.jpg' },
  { category: 'IMPLANT DENTISTRY', title: 'Dental Implants', bgImage: '/implants-bg.jpg' },
  { category: 'ORTHODONTICS', title: 'Invisalign', bgImage: '/invisalign-bg.jpg' },
  { category: 'ORTHODONTICS / RESTORATIVE DENTISTRY', title: 'Ivy Aligners', bgImage: '/ivy-aligners-bg.jpg' },
  { category: 'RESTORATIVE DENTISTRY', title: 'Dentures', bgImage: '/dentures-bg.jpg' },
];

const DetailedServices = () => {
  return (
    <div className="detailed-services-page">
      <div className="services-hero">
        <h1 className="services-hero-title">Services</h1>
        <p className="services-hero-subtitle">
          At Yanga Dental Clinic, we offer a full range of high-quality dental services, tailored to your unique needs.
        </p>
      </div>

      <div className="detailed-services-grid">
        {detailedServicesData.map((service, index) => (
          <div 
            className="detailed-service-card" 
            key={index}
            style={{ backgroundImage: `url(${service.bgImage})` }}
          >
            <div className="card-overlay">
              <div className="card-top">
                <span className="card-category">{service.category}</span>
                <h3 className="card-title">{service.title}</h3>
              </div>
              <button className="view-details-btn">VIEW DETAILS</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailedServices;
