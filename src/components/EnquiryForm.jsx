import React, { useState } from 'react';
import './EnquiryForm.css';

const EnquiryForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Enquiry submitted');
    setIsOpen(false);
  };

  return (
    <div>
      <div className={`enquiry-fab ${isOpen ? 'hidden' : ''}`} onClick={toggleForm}>
        ?
      </div>
      {isOpen && (
        <div className="enquiry-form-container">
          <div className="enquiry-form-header">
            <h3>Enquiry</h3>
            <button onClick={toggleForm} className="close-btn">&times;</button>
          </div>
          <form onSubmit={handleSubmit} className="enquiry-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" required />
            </div>
            <div className="form-group">
              <label>Your Query</label>
              <textarea rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EnquiryForm;
