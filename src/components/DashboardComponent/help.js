import React from 'react';
import './help.css';
import { FaQuestionCircle, FaEnvelope, FaPhoneAlt, FaBook } from 'react-icons/fa';

const Help = () => {
  return (
    <div className="help-container">
      <h1><FaQuestionCircle /> Help & Support</h1>
      <p className="help-subtitle">Need assistance? We're here to guide you through everything.</p>

      <div className="help-grid">
        <div className="help-card">
          <FaBook className="help-icon book" />
          <h3>How to Use</h3>
          <p>Step-by-step guide to use the modules and learn sign language efficiently.</p>
        </div>

        <div className="help-card">
          <FaEnvelope className="help-icon email" />
          <h3>Contact Support</h3>
          <p>Facing issues? Reach out to us anytime via email and we’ll respond quickly.</p>
        </div>

        <div className="help-card">
          <FaPhoneAlt className="help-icon phone" />
          <h3>Call Us</h3>
          <p>Our support team is available Mon–Fri, 10am–6pm IST for voice assistance.</p>
        </div>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <ul>
          <li><strong>Q:</strong> How can I reset my password?</li>
          <li><strong>Q:</strong> Can I use this platform for professional training?</li>
          <li><strong>Q:</strong> Is this platform mobile-friendly?</li>
          <li><strong>Q:</strong> How do I track my learning progress?</li>
        </ul>
      </div>
    </div>
  );
};

export default Help;
