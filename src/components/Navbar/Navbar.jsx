import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../button/Button';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Gets the current route to highlight the active link

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <div className="logo-text">
            <span className="yanga">YANGA</span>
            <span className="dental-clinic">DENTAL CLINIC</span>
          </div>
        </div>
        
        <div className="nav-links">
          {/* Replaced <a> with <Link> for React Router navigation */}
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Our Services</Link>
          
          {/* Added a forward slash before the hash so cross-page anchor links work */}
          <a href="/#promos">Promos</a>
          <a href="/#pricing">Pricing</a>
          <a href="/#about">About Us</a>
          <a href="/#contact">Contact Us</a>
        </div>

        <div className="nav-actions">
          <button className="search-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          
          <div className="desktop-btn">
             <Button>BOOK NOW</Button>
          </div>

          <button className="hamburger-btn" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <button className="close-menu-btn" onClick={toggleMenu}>✕</button>
        
        <div className="mobile-nav-links">
          {/* Updated Mobile Links */}
          <Link to="/" onClick={toggleMenu} className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/services" onClick={toggleMenu} className={location.pathname === '/services' ? 'active' : ''}>Our Services</Link>
          <a href="/#promos" onClick={toggleMenu}>Promos</a>
          <a href="/#pricing" onClick={toggleMenu}>Pricing</a>
          <a href="/#about" onClick={toggleMenu}>About Us</a>
          <a href="/#contact" onClick={toggleMenu}>Contact Us</a>
        </div>

        <div className="mobile-contact-info">
          <p>51 Bode Thomas Street<br/>Surulere<br/>Lagos</p>
          
          <div className="contact-row">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span>07025030034 | 07079941036</span>
          </div>
          
          <div className="contact-row">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <span>HELLO@YANGADENTAL.COM</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
