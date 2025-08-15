// import React, { useState } from "react";
// import "./settings.css";
// import { FaUser, FaLanguage, FaBell, FaMoon, FaTrash } from "react-icons/fa";

// const Settings = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [notifications, setNotifications] = useState(true);
//   const [level, setLevel] = useState("Beginner");
//   const [language, setLanguage] = useState("ISL");

//   const handleDeleteAccount = () => {
//     if (window.confirm("Are you sure you want to delete your account?")) {
//       // DELETE logic goes here
//       alert("Account deleted (not really)");
//     }
//   };

//   return (
//     <div className={`settings-container ${darkMode ? "dark" : ""}`}>
//       <h2>Settings ⚙️</h2>

//       <div className="setting-section">
//         <h3><FaUser /> Account</h3>
//         <label>Change Name: <input type="text" placeholder="New Name" /></label>
//         <label>Change Email: <input type="email" placeholder="New Email" /></label>
//       </div>

//       <div className="setting-section">
//         <h3><FaLanguage /> Language Preferences</h3>
//         <label>Preferred Sign Language:
//           <select value={language} onChange={(e) => setLanguage(e.target.value)}>
//             <option value="ISL">Indian Sign Language (ISL)</option>
//             <option value="ASL">American Sign Language (ASL)</option>
//           </select>
//         </label>

//         <label>Learning Level:
//           <select value={level} onChange={(e) => setLevel(e.target.value)}>
//             <option value="Beginner">Beginner</option>
//             <option value="Intermediate">Intermediate</option>
//             <option value="Advanced">Advanced</option>
//           </select>
//         </label>
//       </div>

//       <div className="setting-section">
//         <h3><FaBell /> Notifications</h3>
//         <label>
//           <input type="checkbox" checked={notifications} onChange={() => setNotifications(!notifications)} />
//           Enable notifications
//         </label>
//       </div>

//       <div className="setting-section">
//         <h3><FaMoon /> Theme</h3>
//         <label>
//           <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
//           Enable Dark Mode
//         </label>
//       </div>

//       <div className="setting-section danger">
//         <h3><FaTrash /> Danger Zone</h3>
//         <button className="delete-btn" onClick={handleDeleteAccount}>Delete Account</button>
//       </div>
//     </div>
//   );
// };

// export default Settings;

import React, { useState } from "react";
import "./setting.css";
import { FaUserCog, FaBell, FaMoon, FaLanguage, FaTrashAlt } from "react-icons/fa";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [signLang, setSignLang] = useState("ISL");

  return (
    <div className="settings-container">
      <h2><FaUserCog /> Account Settings</h2>
      <div className="setting-section">
        <label>Name:</label>
        <input type="text" placeholder="Abhay Jadhav" />
      </div>

      <div className="setting-section">
        <label>Email:</label>
        <input type="email" placeholder="example@gmail.com" />
      </div>

      <div className="setting-section">
        <label>Password:</label>
        <input type="password" placeholder="Change your password" />
      </div>

      <h2><FaLanguage /> Sign Language Preferences</h2>
      <div className="setting-section">
        <label>Preferred Language:</label>
        <select value={signLang} onChange={(e) => setSignLang(e.target.value)}>
          <option value="ISL">Indian Sign Language</option>
          <option value="ASL">American Sign Language</option>
        </select>
      </div>

      <h2><FaMoon /> Appearance</h2>
      <div className="setting-toggle">
        <label>Dark Mode</label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
      </div>

      <h2><FaBell /> Notifications</h2>
      <div className="setting-toggle">
        <label>Email Notifications</label>
        <input
          type="checkbox"
          checked={notifications}
          onChange={() => setNotifications(!notifications)}
        />
      </div>

      <h2><FaTrashAlt /> Danger Zone</h2>
      <div className="danger-zone">
        <button className="delete-btn">Delete Account</button>
      </div>
    </div>
  );
};

export default Settings;
