import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/");
  };
  return (
    <div id="login-wrapper">
      <div id="login-left" style={{ backgroundImage: `url(/Signup.jpg)` }}>
        <a id="login-back" href="#" onClick={handleBackClick} >&lt; Back</a>
        <h3 id="login-brand">Appsi Studio</h3>
        <h1 id="login-title">Explore Near<br />Nature Spots</h1>
      </div>

      <div id="login-right">
        <h2 id="login-welcome">Welcome Back</h2>
        <p id="login-subtext">Enter your email and password to access your account</p>

        <label id="login-label-email">Email</label>
        <input id="login-input-email" type="email" placeholder="Enter your email" />

        <label id="login-label-password">Password</label>
        <div id="login-password-container">
          <input id="login-input-password" type="password" placeholder="Enter your password" />
          <span id="login-eye">&#128065;</span>
        </div>

        <div id="login-options">
          <label id="login-remember">
            <input type="checkbox" />
            Remember me
          </label>
          <a id="login-forgot" href="#">Forgot password? <span id="login-change">Change now</span></a>
        </div>

        <button id="login-button">Sign In</button>

        <p id="login-signup">
          Don’t have an account? <a href="#" id="login-signup-link" onClick={()=>{navigate("/Signup")}}>Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
