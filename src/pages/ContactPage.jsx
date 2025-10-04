import React from 'react';
import './contact.css'; // Optional styling

function ContactPage() {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p><strong>Academy Name:</strong> Rhythm Dance Academy</p>
      <p><strong>Address:</strong> 123 Main Street, Dindigul, Tamil Nadu, India</p>
      <p><strong>Email:</strong> info@rhythmdanceacademy.in</p>
      <p><strong>Phone:</strong> +91 98765 43210</p>

      <h3>Our Location</h3>
      <div className="map-container">
        <iframe
          title="Academy Location"
          src="https://www.google.com/maps/embed?pb=..." 
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactPage;
