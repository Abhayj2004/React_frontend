import React, { useState } from 'react';
import './contact.css';
import { FaEnvelope, FaPhone, FaFax, FaTwitter, FaInstagram, FaFacebook, FaGoogle } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p><FaEnvelope /> Email: abhay.jadhav@walchandsangli.ac.in</p>
        <p><FaPhone /> Phone: 8010445610</p>
        <p><FaFax /> Fax: +(1) 000 0000 002</p>
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com/abhay_j_17/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer"><FaGoogle /></a>
        </div>
      </div>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Enter Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" rows="6" placeholder="Enter Your Message" value={formData.message} onChange={handleChange} required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
