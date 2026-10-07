import React, { useState } from 'react';
import './BookAppointment.css';

const BookAppointment = () => {
  const [selectedClinic, setSelectedClinic] = useState('Surulere');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <main className="book-appointment-page">
      <div className="booking-card">
        <div className="booking-header">
          <h1>Yanga Dental</h1>
          <p>Request an appointment</p>
        </div>

        <form className="appointment-form" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="form-group full-width">
            <label>Full name *</label>
            <input type="text" required />
          </div>

          {/* Phone & Email Row */}
          <div className="form-group half-width">
            <label>Phone number *</label>
            <input type="tel" placeholder="+234..." required />
          </div>
          <div className="form-group half-width">
            <label>Email (optional)</label>
            <input type="email" />
          </div>

          {/* Date & Time Row */}
          <div className="form-group half-width">
            <label>Preferred date *</label>
            <input type="date" required />
          </div>
          <div className="form-group half-width">
            <label>Preferred time</label>
            <select>
              <option value="no-preference">No preference</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
          </div>

          {/* Clinic Selection */}
          <div className="form-group full-width">
            <label>Which clinic? *</label>
            <div className="clinic-toggle">
              <button 
                type="button" 
                className={`clinic-btn ${selectedClinic === 'Surulere' ? 'active' : ''}`}
                onClick={() => setSelectedClinic('Surulere')}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Surulere
              </button>
              <button 
                type="button" 
                className={`clinic-btn ${selectedClinic === 'Egbeda' ? 'active' : ''}`}
                onClick={() => setSelectedClinic('Egbeda')}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Egbeda
              </button>
            </div>
          </div>

          {/* Reason for visit */}
          <div className="form-group full-width">
            <label>Reason for visit (optional)</label>
            <input type="text" placeholder="e.g. Toothache, cleaning, aligners consultation" />
          </div>

          {/* Submit Button */}
          <button type="submit" className="request-submit-btn">
            Request appointment
          </button>
        </form>

        <p className="booking-disclaimer">
          This does not confirm your appointment yet — the times above are our opening hours, not a live diary, so the slot you pick may already be taken. Our front desk will call you to finalise the date and time.
        </p>
      </div>
    </main>
  );
};

export default BookAppointment;
