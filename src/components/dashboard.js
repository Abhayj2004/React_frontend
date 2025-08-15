import './dashboard.css';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Leftbar from './DashboardComponent/leftbar';
import About from './DashboardComponent/about';
import axios from "axios";
import Homepage from './DashboardComponent/homepage';
import Contact from './DashboardComponent/contact';
import Profile from './DashboardComponent/profile';
import Settings from './DashboardComponent/setting';
import Learnpage from './HomeComponents/LearningModule/learningmodule';
import LearnL1 from './HomeComponents/LearningModule/learnLevel1';
import LearnL2 from './HomeComponents/LearningModule/learnLevel2';
import LearnL3 from './HomeComponents/LearningModule/learnLevel3';
import Notification from './DashboardComponent/notification';
import Help from './DashboardComponent/help';
import Convert from './HomeComponents/SpeechToSign/Pages/speechToSign';
import LearnMore from './DashboardComponent/learnmore';
import SignToSpeech from './HomeComponents/signToSpeech/signToSpeech';
import CustomeLib from './HomeComponents/CutomeLib/CustomeLib';
import AddSign from './HomeComponents/CutomeLib/Addsign';
import SignList from './HomeComponents/CutomeLib/SignList';



const Dashboard = () => {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false); // 👈 new state for toggle

  const getUserData = async () => {
    try {
      const response = await axios.get("https://nodeserver-omega.vercel.app/login/sucess", { withCredentials: true });
      console.log(response.data.user);
    } catch (error) {
      navigate("/login");
    }
  };

  useEffect(() => {
    getUserData();
  });

  return (
    <div className="dashboard-wrapper">
      
      <button className="sidebar-toggle" onClick={() => setShowSidebar(!showSidebar)}>
        ☰
      </button>

      
      <div className={`leftbar-container ${showSidebar ? 'show' : ''}`}>
        <Leftbar />
      </div>

      <div className="rightbar-container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="/home/1" element={<Learnpage />} />
          <Route path="/home/2" element={<Convert />} />
          <Route path="/home/3" element={<CustomeLib />} />
          <Route path="/home/4" element={< SignToSpeech/>} />
          <Route path="/home/1/level1" element={<LearnL1 />} />
          <Route path="/home/1/level2" element={<LearnL2 />} />
          <Route path="/home/1/level3" element={<LearnL3 />} />
          <Route path="/home/3/custom-library/AddSign" element={<AddSign />} />
          <Route path="/home/3/custom-library/SignList" element={<SignList />} />
          
          <Route path="profile" element={<Profile />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="learnmore" element={<LearnMore />} />
          <Route path="notifications" element={<Notification />} />
          <Route path="setting" element={<Settings/>} />
          <Route path="help" element={<Help />} />
      
  
      

        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
