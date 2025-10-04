import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Address Section */}
        <div className="footer-section address-section">
          <h3>Address</h3>
          <p>123 Main Street, Dindigul, Tamil Nadu, India</p>
        </div>

        {/* Navigation Links Section */}
        <div className="footer-section links-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/terms" className="terms-link">Terms & Conditions</Link></li>
            <li><a href="#home">Home</a></li>
            <li><a href="#artists">The Artists</a></li>
            <li><a href="#classes">Classes</a></li>
            <li><a href="#login">Booking a Slot</a></li>
            <li><Link to="/contact" className="contact-link">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-rights">
        <p>© 2025 All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
