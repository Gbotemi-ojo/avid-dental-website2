import React from 'react';
import './BookAppointment.css';

const BookAppointment = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <main className="book-appointment-page">
      <div className="booking-card">
        <div className="booking-header">
          <h1>Avid Dental</h1>
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
            <input type="tel" placeholder="0901 645 9100" required />
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
