

import { Link } from 'react-router-dom';
import './homepage.css';
import { FaBookOpen, FaMicrophoneAlt, FaFolderOpen, FaHands } from 'react-icons/fa';


function Homepage() {
  const cards = [
    {
      title: "Learning Module",
      text: "Interactive modules to learn Indian Sign Language effectively.",
      img: "/learn.png",
      link: "/dashboard/home/1",
      icon: <FaBookOpen />
    },
    {
      title: "Speech To Sign",
      text: "Convert spoken words into sign language animations.",
      img: "/speech.png",
      link: "/dashboard/home/2",
      icon: <FaMicrophoneAlt />
    },
    {
      title: "Custom Library",
      text: "Save and review your favorite signs in one place.",
      img: "/lib.png",
      link: "/dashboard/home/3",
      icon: <FaFolderOpen />
    },
    {
      title: "Sign To Speech",
      text: "Use camera or input to translate signs into speech.",
      img: "/sign.png",
      link: "/dashboard/home/4",
      icon: <FaHands />
    }
  ];

  return (
    <div className="body-wrapper">
      <div className="cards-grid">
        {cards.map((card, index) => (
          <Link to={card.link} key={index} className="card-link">
            <div className="custom-card fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <img src={card.img} alt={card.title} className="card-img" />
              <div className="card-content">
                <div className="card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
