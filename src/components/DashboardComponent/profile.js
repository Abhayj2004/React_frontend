
// // import './profile.css';
// // import React, { useEffect , useState} from "react";

// // import axios from "axios";
// // const Profile = () => {
// //     const [userdata, setuserdata] = useState({});
// //      const getUserData = async () => {
// //     try {
// //       const response = await axios.get("http://localhost:3001/login/sucess", { withCredentials: true });
// //       setuserdata(response.data.user);  
      
            
        
// //     } catch (error) {
// //       console.error("Error fetching user data:", error);
// //     }
// //   };
// //   useEffect(() => {
// //       getUserData();
// //     }, []);
// //   return (
// //     <div className="profile-container">
// //       <div className="profile-card">
// //         <img src={userdata?.image} alt="Profile" className="profile-avatar" />
// //         <h2>{userdata?.name}</h2>
// //         <p className="profile-email">{userdata?.email}</p>
// //         <p className="profile-joined">Gogole-ID: {userdata?.googleId}</p>
// //         <p className="profile-bio">{userdata?.bio}</p>
// //         <button className="profile-edit-btn">Edit Profile</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;

// import './profile.css';
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Profile = () => {
//   const [userdata, setUserdata] = useState({});
//   const [isEditing, setIsEditing] = useState(false);
//   const [bio, setBio] = useState("");

//   const getUserData = async () => {
//     try {
//       const response = await axios.get("http://localhost:3001/login/sucess", { withCredentials: true });
//       setUserdata(response.data.user);
//       setBio(response.data.user.bio || "");
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   };

//   const handleSave = () => {
//     // You can send `bio` to backend using axios.post here
//     setUserdata(prev => ({ ...prev, bio }));
//     setIsEditing(false);
//   };

//   useEffect(() => {
//     getUserData();
//   }, []);

//   return (
//     <div className="profile-container">
//       <div className="profile-card">
//         <img src={userdata?.image} alt="Profile" className="profile-avatar" />
//         <h2>{userdata?.name}</h2>
//         <p className="profile-email">{userdata?.email}</p>
//         <p className="profile-joined">Google-ID: {userdata?.googleId}</p>

//         {isEditing ? (
//           <>
//             <textarea
//               value={bio}
//               onChange={(e) => setBio(e.target.value)}
//               className="profile-textarea"
//               placeholder="Enter your bio..."
//             />
//             <button className="profile-edit-btn" onClick={handleSave}>Save</button>
//           </>
//         ) : (
//           <>
//             <p className="profile-bio">{bio || "No bio yet."}</p>
//             <button className="profile-edit-btn" onClick={() => setIsEditing(true)}>Edit Profile</button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;
import './profile.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaStar , FaEnvelope, FaGoogle, FaUserCircle, FaPen } from "react-icons/fa";

const Profile = () => {
  const [userdata, setUserdata] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState("");

  const getUserData = async () => {
    try {
      const response = await axios.get("https://node-server-zc4m.onrender.com/login/sucess", {
        withCredentials: true,
      });
      const user = response.data.user;
      setUserdata(user);
      const storedBio = localStorage.getItem(`bio-${user.googleId}`);
      setBio(storedBio || user.bio || "");
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleSave = () => {
    localStorage.setItem(`bio-${userdata.googleId}`, bio);
    setUserdata((prev) => ({ ...prev, bio }));
    setIsEditing(false);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="profile-wrapper">
      <div className="profile-img-wrapper">
        <img src={userdata?.image} alt="Profile" className="profile-img" />
      </div>
      <div className="profile-card">
        <h2 className="profile-name">
          <FaUserCircle className="icon" /> {userdata?.name}
        </h2>
        <p className="profile-role">🌟 Role: Beginner</p>
        <p className="profile-email">
          <FaEnvelope className="icon" /> {userdata?.email}
        </p>
        <p className="profile-id">
          <FaGoogle className="icon" /> Google-ID: {userdata?.googleId}
        </p>

        {isEditing ? (
          <>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="profile-textarea"
              placeholder="Write your bio..."
            />
            <button className="profile-btn" onClick={handleSave}>
              Save
            </button>
          </>
        ) : (
          <>
            <p className="profile-bio">{bio || "No bio added yet."}</p>
            <button className="profile-btn" onClick={() => setIsEditing(true)}>
              <FaPen className="icon" /> Edit Profile
            </button>
          </>
        )}
      </div>
      <div>
        <>
  {/* Existing content above */}
  <div className="developer-rating">
    <p className="rating-title">⭐ Developer Rating </p>
    <div className="stars">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className="star-icon" />
      ))}
    </div>
  </div>
</>

      </div>
    </div>

    
  );
};

export default Profile;
