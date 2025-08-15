

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import './headers.css';
import { FaHome, FaSignInAlt, FaSignOutAlt, FaTachometerAlt, FaSun, FaMoon } from "react-icons/fa";

const Headers = () => {
  const [userdata, setuserdata] = useState({});
  const [darkMode, setDarkMode] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const getUserData = async () => {
    try {
      const response = await axios.get("https://nodeserver-omega.vercel.app/login/sucess", { withCredentials: true });
      setuserdata(response.data.user);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const logout = () => {
    window.open("https://nodeserver-omega.vercel.app/logout", "_self");
  };

  useEffect(() => {
    getUserData();
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <header>
      <nav>
        <div className="left">
          <h1>ABHAY JADHAV</h1>
        </div>
        <div className="right">
          <ul>
            <li><NavLink to="/"><FaHome /> Home</NavLink></li>
            {
              Object.keys(userdata).length > 0 ? (
                <>
                  <li><NavLink to="/dashboard"><FaTachometerAlt /> Dashboard</NavLink></li>
                  <li onClick={logout}><FaSignOutAlt /> Logout</li>
                  <li className="profile" onClick={() => setShowDropdown(!showDropdown)}>
                    <img src={userdata?.image} alt="Profile" />
        
                    {showDropdown && (
                      <div className="dropdown">
                        <p>{userdata.name}</p>
                        <p>{userdata.email}</p>
                      </div>
                    )}
                  </li>
                </>
              ) : (
                <li><NavLink to="/login"><FaSignInAlt /> Login</NavLink></li>
              )
            }
            <li className="theme-toggle" onClick={toggleTheme}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Headers;
