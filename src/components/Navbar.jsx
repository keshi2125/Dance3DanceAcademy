import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '/logo.png'; // Ensure this path is correct

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo and Title */}
        <div className="brand">
          <Link to="/" className="logo-link">
            <img src={logo} alt="D3D Logo" className="logo-image" />
            <span className="site-title">Dance3Dance Academy</span>
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <ul className="nav-links desktop">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/artists">The Artists</Link></li>
          <li><Link to="/classes">Classes</Link></li>
          <li><Link to="/login">Booking a Slot</Link></li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="nav-controls mobile">
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <ul className={`nav-links mobile-dropdown ${menuOpen ? 'show' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/artists">The Artists</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        <li><Link to="/login">Booking a Slot</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
