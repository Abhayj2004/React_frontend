import React, { useEffect, useState } from 'react';
import './CustomeLib.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaPlus, FaList, FaRocket } from 'react-icons/fa';

const CustomeLib = () => {
  const [signs, setSigns] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/signs')
      .then(res => res.json())
      .then(data => setSigns(data))
      .catch(err => console.error('Error:', err));
  }, []);

  const handleTrainModel = async () => {
    try {
      const res = await axios.post('http://localhost:5000/train_model');
      alert(res.data.message);
    } catch (err) {
      console.error('Training error:', err);
      alert('Training failed.');
    }
  };

  return (
    <div className="lib-container">
      <header className="lib-header">
        <h1>🧠 Sign Language Dashboard</h1>
        <div className="lib-buttons">
          <button className="lib-btn" onClick={() => navigate('custom-library/AddSign')}>
            <FaPlus /> Capture Sign
          </button>
          <button className="lib-btn" onClick={() => navigate('custom-library/SignList')}>
            <FaList /> View All Signs
          </button>
        </div>
      </header>

      <h2 className="overview-title">📦 Sign Classes Overview</h2>
      <div className="cardd-grid">
        {signs.map((sign, index) => (
          <div className="card" key={index}>
            <img
              src={`http://localhost:5000/${sign.image_url}`}
              alt={sign.class_name}
              className="cardd-image"
            />
            <div className="cardd-title">{sign.class_name}</div>
          </div>
        ))}
      </div>

      <div className="train-btn-wrapper">
        <button className="train-button" onClick={handleTrainModel}>
          <FaRocket className="rocket-icon" /> Train CNN Model
        </button>
      </div>
    </div>
  );
};

export default CustomeLib;
