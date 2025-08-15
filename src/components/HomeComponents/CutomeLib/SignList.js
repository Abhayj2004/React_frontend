import React, { useEffect, useState } from 'react';
import './SignList.css';
import { FaTrashAlt } from 'react-icons/fa';

function SignList() {
  const [signs, setSigns] = useState([]);

  const fetchSigns = () => {
    fetch('http://localhost:5000/signs')
      .then(res => res.json())
      .then(data => setSigns(data))
      .catch(err => console.error("Failed to load signs:", err));
  };

  useEffect(() => {
    fetchSigns();
  }, []);

  const handleDelete = (className) => {
    if (window.confirm(`Are you sure you want to delete "${className}"?`)) {
      fetch(`http://localhost:5000/delete_sign/${className}`, {
        method: 'DELETE',
      })
        .then(res => {
          if (res.ok) {
            alert(`Deleted "${className}"`);
            fetchSigns();
          } else {
            res.json().then(data => alert(`Error: ${data.error}`));
          }
        })
        .catch(err => alert('Failed to delete: ' + err));
    }
  };

  return (
    <div className="sign-list-container">
      <h1 className="sign-list-title">📘 Saved Hand Signs</h1>
      <div className="sign-grid">
        {signs.map((sign, index) => (
          <div key={index} className="sign-card">
            <img src={`http://localhost:5000${sign.image_url}`} alt={sign.class_name} />
            <p className="sign-name">{sign.class_name}</p>
            <button className="delete-btn" onClick={() => handleDelete(sign.class_name)}>
              <FaTrashAlt /> Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SignList;
