import React from 'react';
import './Services.css';

const servicesData = [
  {
    id: 1,
    title: 'Clinic Registration',
    description: 'Consultation + Full Mouth X-ray',
    icon: <path d="M4 19v-5c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v5M8 12V7c0-2.2 1.8-4 4-4s4 1.8 4 4v5M6 16h12" />
  },
  {
    id: 2,
    title: 'Scaling & Polishing',
    description: 'Gentle stain, plaque & tartar removal',
    icon: <path d="M12 2v8M9 22c-1.5 0-3-1.5-3-3s1.5-4 3-4 3 2.5 3 4-1.5 3-3 3zm6 0c-1.5 0-3-1.5-3-3s1.5-4 3-4 3 2.5 3 4-1.5 3-3 3z" />
  },
  {
    id: 3,
    title: 'Dental Implants',
    description: 'Fixed tooth replacement solutions',
    icon: <path d="M5 8h14M7 8V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v3M9 14h6M10 20h4M12 8v12" />
  },
  {
    id: 4,
    title: 'Braces & Aligners',
    description: 'Braces, Invisalign, Ivy Aligners',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM12 8v4M10 10h4" />
  },
  {
    id: 5,
    title: 'Root Canal Therapy',
    description: 'Infection removal & tooth preservation',
    icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
  },
  {
    id: 6,
    title: 'Tooth Extraction',
    description: 'Routine & surgical removal of teeth',
    icon: <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2zM14 2v6h6M12 18v-6M9 15h6" />
  },
  {
    id: 7,
    title: 'Veneers & Smile Design',
    description: 'For a flawless smile makeover',
    icon: <path d="M12 20h9M3 20h9M12 4v16M8 8l4-4 4 4" />
  },
  {
    id: 8,
    title: 'Crowns & Bridges',
    description: 'Tooth protection & gap restoration',
    icon: <path d="M4 14l4-4 4 4 4-4 4 4M2 20h20" />
  }
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      {/* SVG Gradient Definition for the icons */}
      <svg width="0" height="0">
        <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="#FA7F59" offset="0%" />
          <stop stopColor="#ED1376" offset="100%" />
        </linearGradient>
      </svg>

      <div className="services-header">
        <span className="subtitle">MOST POPULAR SERVICES</span>
        <h2 className="title">Our Dental Expertise</h2>
      </div>

      <div className="services-grid">
        {servicesData.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="icon-container">
              {/* Replace these placeholder SVGs with your actual icon assets if needed */}
              <svg viewBox="0 0 24 24" fill="none" stroke="url(#icon-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {service.icon}
              </svg>
            </div>
            <div className="card-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <a href={`#${service.title.toLowerCase().replace(/ /g, '-')}`} className="view-details">
              VIEW DETAILS <span className="arrow">↘</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
