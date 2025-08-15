import React, { useState } from 'react';
import axios from 'axios';
import './Addsign.css';
import { FaHandPeace, FaCamera, FaCheckCircle } from 'react-icons/fa';

function AddSign() {
  const [className, setClassName] = useState('');
  const [imageCount, setImageCount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!className || !imageCount) return;

    try {
      await axios.post('http://127.0.0.1:5000/start', {
        class_name: className,
        image_count: parseInt(imageCount),
      });
      alert('✅ Capture Started!');
    } catch (error) {
      alert('❌ Error starting capture');
      console.error(error);
    }
  };

  return (
    <div className="sign-capture-container">
      <h1><FaHandPeace /> Hand Gesture Capture</h1>
      
      <form onSubmit={handleSubmit} className="sign-form">
        <input
          type="text"
          placeholder="✍️ Enter Class Name"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="📸 Number of Images"
          value={imageCount}
          onChange={(e) => setImageCount(e.target.value)}
          required
        />
        <button type="submit">
          <FaCamera className="btn-icon" /> Start Capture
        </button>
      </form>

      <div className="live-preview">
        <img
          src="http://127.0.0.1:5000/video_feed"
          alt="Live Video"
          width="640"
          height="480"
        />
      </div>
    </div>
  );
}

export default AddSign;
