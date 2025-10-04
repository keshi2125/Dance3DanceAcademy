import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in...');
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
          <img src="/instructor-1.jpg" alt="Instructor" className="auth-image" />
        </div>
        <div className="auth-right">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email</label>
              <input type="email" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" required />
            </div>
            <div className="button-wrapper">
              <button type="submit" className="auth-button">Login</button>
            </div>
          </form>
          <p className="auth-switch">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
