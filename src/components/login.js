

import React from "react";
import './login.css';
import { NavLink } from "react-router-dom";

const Login = () => {
  const loginWithGoogle = () => {
    window.open("https://node-server-zc4m.onrender.com/auth/google/callback", "_self");
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <form className="login-form">
          <h2>Welcome Back ✫</h2>
          <p>Please login to your account</p>

          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />

          <button type="submit">Login</button>

          <div className="footer-text">
            <p>
              Don't have an account? <NavLink to = "/signup">Sign up</NavLink>
            </p>
          </div>
        </form>
        <button className="logingogle" onClick={loginWithGoogle}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;