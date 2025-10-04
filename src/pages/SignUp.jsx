import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Auth.css';

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log('Signing up...');
    navigate('/');
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-title-bar">
        <Link to="/login" className={`toggle-button ${location.pathname === '/login' ? 'active' : ''}`}>Login</Link>
        <Link to="/signup" className={`toggle-button ${location.pathname === '/signup' ? 'active' : ''}`}>Sign Up</Link>
      </div>

      <div className="auth-box">
        <div className="auth-left">
          <div className="color-animation" />
          <img src="/instructor-2.jpg" alt="Instructor" className="auth-image" />
        </div>
        <div className="auth-right">
          <h2>Sign Up</h2>
          <form onSubmit={handleSignUp}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" required />
            </div>
            <div className="button-wrapper">
              <button type="submit" className="auth-button">Sign Up</button>
            </div>
          </form>
          <p className="auth-switch">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
