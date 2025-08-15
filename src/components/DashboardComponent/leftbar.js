
import './leftbar.css';
import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaInfoCircle, FaEnvelope, FaBookOpen, FaCog, FaBell, FaQuestionCircle } from "react-icons/fa";

const Leftbar = () => {
  return (
    <div className="leftbar">
      <h2>Dashboard</h2>
      <ul>
        <li><NavLink to="/dashboard/home"><FaHome className="icon" />Home</NavLink></li>
        <li><NavLink to="/dashboard/profile"><FaUser className="icon" /> Profile</NavLink></li>
        <li><NavLink to="/dashboard/about"><FaInfoCircle className="icon" /> About</NavLink></li>
        <li><NavLink to="/dashboard/contact"><FaEnvelope className="icon" /> Contact Us</NavLink></li>
        <li><NavLink to="/dashboard/learnmore"><FaBookOpen className="icon" /> Learn More</NavLink></li>
        <li><NavLink to="/dashboard/setting"><FaCog className="icon" /> Settings</NavLink></li>
        <li><NavLink to="/dashboard/notifications"><FaBell className="icon" /> Notifications</NavLink></li>
        <li><NavLink to="/dashboard/help"><FaQuestionCircle className="icon" /> Help</NavLink></li>
      </ul>
    </div>
  );
};

export default Leftbar;
