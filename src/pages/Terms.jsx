// src/TermsPage.js
import React from 'react';
import './terms.css'; // Optional: style this page separately

function TermsPage() {
  return (
    <div className="terms-page">
      <h2>Terms & Conditions</h2>
      <ul>
        <li>All bookings are non-refundable once confirmed.</li>
        <li>Students must arrive 10 minutes before class starts.</li>
        <li>Proper dance attire is required for all sessions.</li>
        <li>Respect instructors and fellow dancers at all times.</li>
        <li>Mobile phones must be on silent during class.</li>
      </ul>
    </div>
  );
}

export default TermsPage;
