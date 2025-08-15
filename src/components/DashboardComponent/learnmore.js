// src/pages/Pricing.js
import React from 'react';
import axios from 'axios';
import './learnmore.css';
import { FaCheckCircle, FaUserGraduate, FaChalkboardTeacher, FaRocket } from 'react-icons/fa';
import Headers from '../headers';


const plans = [
  {
    name: "Basic",
    price: "₹299",
    features: ["Access to letters A–Z", "Offline content", "Limited quizzes"],
    icon: <FaUserGraduate />,
    color: "#f1c40f"
  },
  {
    name: "Pro",
    price: "₹699",
    features: ["Everything in Basic", "Animated signs", "Live support", "Progress tracking"],
    icon: <FaChalkboardTeacher />,
    color: "#f39c12"
  },
  {
    name: "Premium",
    price: "₹1299",
    features: ["Everything in Pro", "Live classes", "Certification", "1-on-1 mentor sessions"],
    icon: <FaRocket />,
    color: "#e67e22"
  }
];

const subscribeToPlan = async (email, plan) => {
    console.log("Subscribing user:", email, "to plan:", plan);
  try {
    const res = await axios.post('http://localhost:3001/subscribe', { email, plan });
    return res.data;
  } catch (error) {
    console.error(error);
    return { error: "Subscription failed" };
  }
};


const LearnMore = () => {
  return (
    <div className="pricing-container">
      <h1 className="pricing-title">Choose Your Learning Plan</h1>
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div className="pricing-card" key={index} style={{ borderColor: plan.color }}>
            <div className="icon-container" style={{ backgroundColor: plan.color }}>
              {plan.icon}
            </div>
            <h2>{plan.name}</h2>
            <p className="price">{plan.price}/month</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <FaCheckCircle className="tick-icon" /> {feature}
                </li>
              ))}
            </ul>
            <button className="subscribe-btn" style={{ backgroundColor: plan.color }} onClick={()=>subscribeToPlan(Headers.userdata?.email, plan.name)}>
              Subscribe Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnMore;
