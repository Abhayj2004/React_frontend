import React from "react";
import './signup.css';
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
  
  

const Signup = () => {
    const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://node-server-zc4m.onrender.com/signup", form);
      alert(response.data.message);
    } catch (error) {
      alert("Signup failed");
      console.error(error);
    }
  };
  return (
    <div className="signup-background">
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Create Account 💖</h2>
          <p>Join us by creating your profile</p>

          <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Create Password" value={form.password} onChange={handleChange} required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} required />

          <button type="submit">Sign Up</button>

          <div className="footer-text">
            <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
