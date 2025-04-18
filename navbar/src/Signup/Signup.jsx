import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div id="signup-wrapper">
      <div id="signup-left">
        <span id="back-button" onClick={()=>{navigate("/")}}>&lt; Back</span>
        <h1 id="signup-title">Get Started Now</h1>

        <form id="signup-form">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Enter your name" />

          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Enter your email" />

          <label htmlFor="password">Password</label>
          <div id="password-wrapper">
            <input id="password" type="password" placeholder="Enter your password" />
            <span id="eye-icon">👁️</span>
          </div>

          <div id="form-footer">
            <label id="terms">
              <input type="checkbox" />
              I agree to the <strong>terms & policy</strong>
            </label>
            <span id="forgot">
              Forgot password? <strong>Change now</strong>
            </span>
          </div>

          <button type="submit" id="signin-button">Sign In</button>
          <p id="signup-text">
            Already have an account? <a href="#" id="signup-link" onClick={()=>{navigate("/login")}}>Log In</a>
          </p>
        </form>
      </div>

      <div id="signup-right" style={{ backgroundImage: `url(/Login.jpg)` }}>
        <span id="studio-title">Appsi Studio</span>
      </div>
    </div>
  );
};

export default Signup;
