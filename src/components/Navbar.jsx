import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '/logo.png'; // Make sure this path is correct

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="brand">
          <Link to="/" className="logo-link">
            <img src={logo} alt="D3D Logo" className="logo-image" />
        
          <span className="site-title">Dance3Dance Academy</span>
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/artists">The Artists</Link></li>
          <li><Link to="/classes">Classes</Link></li>
          <li><Link to="/login">Booking a Slot</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
