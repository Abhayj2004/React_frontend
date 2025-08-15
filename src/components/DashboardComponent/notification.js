// Notification.jsx
import React, { useEffect, useState } from 'react';
import './notification.css';
import { FaCheckCircle, FaInfoCircle, FaBell } from 'react-icons/fa';
import axios from 'axios';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = async () => {
    try {
      const res = await axios.get('http://localhost:3001/notifications', { withCredentials: true });
      setNotifications(res.data);
    } catch (err) {
      console.error("Error fetching notifications", err);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const getIcon = (type) => {
    switch (type) {
      case 'progress':
        return <FaCheckCircle className="icon progress" />;
      case 'update':
        return <FaInfoCircle className="icon update" />;
      case 'reminder':
      default:
        return <FaBell className="icon reminder" />;
    }
  };

  return (
    <div className="notification-page">
    <div className="notification-container">
      <h2>Notifications 🔔</h2>
      {notifications.map((note) => (
        <div key={note.id} className="notification-card">
          <div className="icon-container">
            {getIcon(note.type)}
          </div>
          <div className="notification-content">
            <h3>{note.title}</h3>
            <p>{note.message}</p>
            <span className="date">{note.date}</span>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Notification;
