import React from 'react';
import './About.css';

const treatmentsData = [
  { category: 'ORTHODONTICS', title: 'Braces' },
  { category: 'LUXURY DENTAL', title: 'Grillz' },
  { category: 'WEIGHT MANAGEMENT', title: 'Jaw Locking' },
  { category: 'AESTHETIC DENTISTRY', title: 'Fashion Braces' }
];

const About = () => {
  return (
    <main className="about-page">
      {/* About Hero Section */}
      <section className="about-hero">
        <div className="about-hero-image-container">
          <img src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80" alt="Avid Dental Dentist" className="about-hero-image" />
        </div>
        <div className="about-hero-content">
          <span className="about-badge">ABOUT US</span>
          <h1 className="about-title">
            Why Avid<br />
            Dental<br />
            Clinic?
          </h1>
          <p className="about-subtitle">The Ultimate Dental Experience in Ikeja</p>
          <ul className="about-features-list">
            <li>Modern facility with the latest equipment</li>
            <li>Transparent pricing with flexible options</li>
            <li>Comfortable, judgement-free environment</li>
            <li>Trusted by hundreds of patients across Lagos.</li>
          </ul>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="about-welcome">
        <div className="welcome-image-container">
          <img src="https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=800&q=80" alt="Dentists treating patient" className="welcome-image" />
        </div>
        <div className="welcome-content">
          <h2>Welcome to<br />Avid Dental<br />Clinic</h2>
          <span className="welcome-subtitle">Your Comfort. Our Priority.</span>
          <p>
            At Avid Dental, we combine expert care with the warmth of true hospitality. From your first visit to every follow-up, our modern clinic in Ikeja, Lagos is designed to make you feel at ease while delivering top-tier dental solutions. Whether you need a routine cleaning, a confident smile makeover, or advanced restorative treatment—we're here to serve you with precision and compassion.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-story">
        <div className="story-header">
          <h2>Our Story</h2>
          <p>
            We believe everyone deserves to feel confident in their smile. That's why Avid Dental offers a full spectrum of services from routine cleanings and exams to life-changing veneers, braces, and implants. With cutting-edge technology and a skilled, friendly team, we're on a mission to raise the standard of dental care in Nigeria, one smile at a time
          </p>
        </div>
        <div className="story-images">
          <div className="story-img-wrapper"><img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" alt="Team" /></div>
          <div className="story-img-wrapper"><img src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80" alt="Equipment" /></div>
          <div className="story-img-wrapper"><img src="https://images.unsplash.com/photo-1581594549595-35f6edc7b762?auto=format&fit=crop&w=800&q=80" alt="Patient care" /></div>
        </div>
      </section>

      {/* Facilities Gallery */}
      <section className="about-gallery">
        <h2 className="gallery-title">Tour our state-of-the-art facilities designed for<br />your comfort and peace of mind.</h2>
        <div className="gallery-grid">
          {/* 6 Empty image wrappers for the gallery grid */}
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80" alt="Facility 1" /></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?auto=format&fit=crop&w=800&q=80" alt="Facility 2" /></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1606713070249-ec9e0f595f5b?auto=format&fit=crop&w=800&q=80" alt="Facility 3" /></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80" alt="Facility 4" /></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80" alt="Facility 5" /></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80" alt="Facility 6" /></div>
        </div>
      </section>

      {/* Treatments Carousel */}
      <section className="about-treatments">
        <div className="treatments-header">
          <h2>Dentistry treatments</h2>
          <div className="treatments-controls">
            <button className="treatments-btn">❮</button>
            <button className="treatments-btn">❯</button>
          </div>
        </div>
        <div className="treatments-track">
          {treatmentsData.map((item, index) => (
            <div className="treatment-card" key={index}>
              <div className="treatment-overlay">
                <span className="treatment-category">{item.category}</span>
                <h3 className="treatment-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="about-booking">
        <div className="booking-header">
          <span className="booking-subtitle">BOOK YOUR VISIT TO AVID DENTAL</span>
          <h2>Take the next step and schedule an<br />appointment today</h2>
        </div>
        <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>TREATMENT TYPE *</label>
            <select required>
              <option value="" disabled selected>Select Treatment</option>
              <option value="cleaning">Teeth Cleaning</option>
              <option value="braces">Braces & Aligners</option>
              <option value="whitening">Teeth Whitening</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>PREFERRED DATE</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>PREFERRED TIME SLOT</label>
            <select>
              <option value="" disabled selected>Select Time Slot</option>
              <option value="morning">Morning (9AM - 12PM)</option>
              <option value="afternoon">Afternoon (12PM - 4PM)</option>
              <option value="evening">Evening (4PM - 6PM)</option>
            </select>
          </div>
          <div className="form-group">
            <label>FULL NAME *</label>
            <input type="text" placeholder="Your Full Name" required />
          </div>
          <div className="form-group">
            <label>PHONE NUMBER *</label>
            <input type="tel" placeholder="Your Phone Number" required />
          </div>
          <div className="form-group">
            <label>EMAIL ADDRESS</label>
            <input type="email" placeholder="Your Email Address" />
          </div>
          <div className="form-submit-wrapper">
            <button type="submit" className="submit-btn">CONFIRM MY APPOINTMENT</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default About;
