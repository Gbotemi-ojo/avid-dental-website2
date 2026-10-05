import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* Top Banner */}
      <div className="footer-banner">
        <h2 className="footer-banner-title">
          Thousands of Confident<br />
          Smiles, Delivered with Care in<br />
          the Heart of Surulere
        </h2>
        <button className="footer-book-btn">BOOK NOW</button>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        {/* Column 1: Brand & About */}
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <span className="yanga-logo-text">YANGA</span>
            <span className="dental-clinic-badge">DENTAL CLINIC</span>
          </div>
          <p className="footer-about-text">
            We believe your smile is your superpower. At Yanga Dental, we are committed to delivering premium dental care in a warm, modern and professional environment. From cleanings to cosmetic procedures, we treat every patient like family because you deserve to smile with confidence.
          </p>
          <div className="social-icons">
            {/* Instagram */}
            <a href="#instagram" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            {/* Facebook */}
            <a href="#facebook" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            {/* X (Twitter) */}
            <a href="#x" aria-label="X">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l16 16M4 20L20 4"></path></svg>
            </a>
          </div>
        </div>

        {/* Column 2: Popular Services */}
        <div className="footer-col">
          <h4 className="footer-heading">POPULAR SERVICES</h4>
          <ul className="footer-links">
            <li><a href="#teeth-cleaning">Teeth Cleaning</a></li>
            <li><a href="#scaling">Scaling & Polishing</a></li>
            <li><a href="#braces">Braces & Aligners</a></li>
            <li><a href="#veneers">Veneers</a></li>
            <li><a href="#extraction">Tooth Extraction</a></li>
            <li><a href="#implants">Dental Implants</a></li>
            <li><a href="#root-canal">Root Canal Therapy</a></li>
            <li><a href="#dentures">Dentures & Crowns</a></li>
          </ul>
        </div>

        {/* Column 3: More Pages */}
        <div className="footer-col">
          <h4 className="footer-heading">MORE PAGES</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#promos">Promos</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#book">Book Appointment</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-col contact-col">
          <h4 className="footer-heading">CONTACT</h4>
          <div className="contact-details">
            <p>51 Bode Thomas Street<br/>Surulere, Lagos</p>
            <p>32 Akowonjo Road, Egbeda<br/>Lagos</p>
            
            <div className="contact-row">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fbb03b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>07025030034 | 07079941036</span>
            </div>
            
            <div className="contact-row">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fbb03b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span>hello@yangadental.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2026 Yanga Dental Clinic. All rights reserved. | Built by PhiliaTech.</p>
      </div>
    </footer>
  );
};

export default Footer;
