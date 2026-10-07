import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: 'Is consultation required before I get treatment?',
    answer: 'Yes. All first-time patients must register for a consultation, which includes a full mouth X-ray. This ensures accurate diagnosis and the right treatment plan.\nCost: ₦18,500 (valid for 1 year).'
  },
  {
    question: 'How much does teeth cleaning cost?',
    answer: 'Ultrasonic teeth cleaning costs between ₦15,000 - ₦25,000, depending on the level of buildup. It removes stains, tartar, plaque, and calculus.'
  },
  {
    question: 'Can I pay for dental procedures in instalments?',
    answer: 'Yes. Instalment payment options are available for major procedures like veneers, braces, crowns, implants, and aligners. Ask during your consultation to set up a plan.'
  },
  {
    question: 'How do I book an appointment?',
    answer: 'You can book directly online using the "Book Now" button or call us at 0901 645 9100. Early booking is recommended due to high patient demand.'
  },
  {
    question: 'Do you offer teeth alignment without metal braces?',
    answer: 'Yes. We offer clear aligner options like Ivy Aligners (₦1.2M - ₦2M) and Invisalign ($5,000), which are discreet and effective alternatives to traditional braces.'
  },
  {
    question: 'Where is the clinic located?',
    answer: 'Avid Dental\nIle Zik Bus Stop, 601 Agege Motor Rd, Ile Zik, Ikeja 101233, Lagos'
  }
];

const FAQ = () => {
  // Set the first item (index 0) to be open by default to match your screenshot
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    // If clicking the currently open item, close it. Otherwise, open the new one.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-left">
        <span className="faq-subtitle">FAQ</span>
        <h2 className="faq-title">Need Help?<br />We've Got<br />Answers.</h2>
        <p className="faq-text">
          Got questions about your visit, payment options, or treatments?<br /><br />
          Check our most common questions or
        </p>
        <a href="#contact" className="contact-link">
          CONTACT OUR TEAM DIRECTLY <span className="arrow">↘</span>
        </a>
      </div>
      
      <div className="faq-right">
        <div className="accordion-container">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div className={`accordion-item ${isOpen ? 'active' : ''}`} key={index}>
                <button 
                  className="accordion-header" 
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <h3>{item.question}</h3>
                  <span className="accordion-icon">{isOpen ? '—' : '+'}</span>
                </button>
                
                <div 
                  className="accordion-content"
                  style={{ 
                    maxHeight: isOpen ? '500px' : '0',
                    opacity: isOpen ? 1 : 0,
                    paddingBottom: isOpen ? '1.5rem' : '0'
                  }}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;