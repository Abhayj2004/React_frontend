import React from 'react';
import { FaHandPeace, FaLanguage, FaGlobe, FaArrowRight, FaAccessibleIcon, FaBookOpen } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Break the Silence, Speak with Hands</h1>
          <p className="hero-subtitle">Real-time Sign Language Translation powered by AI</p>
          <a href="/translator" className="hero-button">
            Try It Now <FaArrowRight className="icon" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About the App</h2>
        <p>
          Our Sign Language Translator uses computer vision and machine learning to help bridge communication
          between the hearing and speech impaired and the world. From real-time gesture recognition to multilingual
          support, it's designed with accessibility and education in mind.
        </p>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature-card">
          <FaHandPeace className="feature-icon" />
          <h3>Live Gesture Recognition</h3>
          <p>Translate signs into full sentences using your webcam in real time.</p>
        </div>
        <div className="feature-card">
          <FaLanguage className="feature-icon" />
          <h3>Multilingual Output</h3>
          <p>Supports English, Hindi, and Marathi for better inclusivity.</p>
        </div>
        <div className="feature-card">
          <FaAccessibleIcon className="feature-icon" />
          <h3>Speech to Sign</h3>
          <p>Convert voice input into sign-based animations or text.</p>
        </div>
        <div className="feature-card">
          <FaBookOpen className="feature-icon" />
          <h3>Sign Language Learning</h3>
          <p>Interactive tutorials to learn various signs and meanings.</p>
        </div>
        <div className="feature-card">
          <FaGlobe className="feature-icon" />
          <h3>Emotion & Expression</h3>
          <p>Detect tone and intent from expressions using AI (coming soon).</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Sign Translator App | Developed by Abhay Jadhav</p>
        <div className="footer-icons">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="mailto:youremail@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
