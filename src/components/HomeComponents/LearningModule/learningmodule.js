import React from 'react';
import './learningmodule.css';
import { FaBaby, FaUserGraduate, FaBrain } from 'react-icons/fa';

const Learnpage =()=> {
  const levels = [
    {
      title: "LEVEL 1",
      description: "Beginner level for learning sign language. This level is designed for those who are new to sign language and want to learn the basics.",
      link: "1/level1",
      icon: <FaBaby />
    },
    {
      title: "LEVEL 2",
      description: "Intermediate level for learning sign language. Ideal for learners with basic understanding who wish to improve their skills.",
      link: "1/level2",
      icon: <FaUserGraduate />
    },
    {
      title: "LEVEL 3",
      description: "Advanced level for mastering sign language. Perfect for those looking to become fluent and confident signers.",
      link: "1/level3",
      icon: <FaBrain />
    }
  ];

  return (
    <div className="learn-container">
      <h2 className="learn-heading">Explore Our Learning Levels</h2>
      {levels.map((level, index) => (
        <div
          className="learn-card fade-in"
          style={{ animationDelay: `${index * 0.2}s` }}
          key={index}
        >
          <div className="learn-icon">{level.icon}</div>
          <div className="learn-content">
            <h3>{level.title}</h3>
            <p>{level.description}</p>
            <a href={level.link} className="learn-btn">Click Here</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Learnpage;
