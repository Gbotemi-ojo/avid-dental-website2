import React from 'react';
import './DetailedServices.css';

const detailedServicesData = [
  { category: 'ORTHODONTICS', title: 'Braces', bgImage: '/avid8.png' },
  { category: 'LUXURY DENTAL', title: 'Grillz', bgImage: '/avid9.png' },
  { category: 'WEIGHT MANAGEMENT', title: 'Jaw Locking', bgImage: '/avid10.png' },
  { category: 'AESTHETIC DENTISTRY', title: 'Fashion Braces', bgImage: '/avid11.png' },
  { category: 'ORTHODONTICS', title: 'Retainers', bgImage: '/avid12.png' },
  { category: 'IMPLANT DENTISTRY', title: 'Dental Implants', bgImage: '/avid13.png' },
  { category: 'ORTHODONTICS', title: 'Invisalign', bgImage: '/avid14.png' },
  { category: 'ORTHODONTICS / RESTORATIVE DENTISTRY', title: 'Ivy Aligners', bgImage: '/avid15.png' },
  { category: 'RESTORATIVE DENTISTRY', title: 'Dentures', bgImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80' },
];

const DetailedServices = () => {
  return (
    <div className="detailed-services-page">
      <div className="services-hero">
        <h1 className="services-hero-title">Services</h1>
        <p className="services-hero-subtitle">
          At Avid Dental, we offer a full range of high-quality dental services, tailored to your unique needs.
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
