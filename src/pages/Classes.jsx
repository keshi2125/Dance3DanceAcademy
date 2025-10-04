import React from 'react';
import './Classes.css';
import footer from './Footer';

const classes = [
  {
    title: 'Beginner Hip Hop',
    description: 'Learn the fundamentals of hip hop dance, including basic steps, rhythm, and coordination.',
    schedule: 'Mondays & Wednesdays, 6:00 PM - 7:00 PM',
    status: 'Ongoing'
  },
  {
    title: 'Intermediate Contemporary',
    description: 'Explore expressive movement and storytelling through contemporary dance techniques.',
    schedule: 'Tuesdays & Thursdays, 7:30 PM - 9:00 PM',
    status: 'Ongoing'
  },
  {
    title: 'Advanced Ballet Workshop',
    description: 'A 4-week intensive workshop focusing on advanced ballet techniques, including pointe work and partnering.',
    schedule: 'Saturdays, 10:00 AM - 1:00 PM',
    status: 'Upcoming'
  },
  {
    title: 'Salsa for Couples',
    description: 'Learn the passionate and energetic dance of salsa with a partner. No prior experience needed!',
    schedule: 'Fridays, 8:00 PM - 9:30 PM',
    status: 'Upcoming'
  }
];

const Classes = () => {
  return (
    <>
    <section id="classes" className="classes-page">
      <div className="container">
        <h1 className="page-title">Classes</h1>
        <div className="class-list">
          <div className="class-section">
            <h2>Ongoing Classes</h2>
            <div className="class-cards">
              {classes.filter(c => c.status === 'Ongoing').map((c, index) => (
                <div className="class-card" key={index}>
                  <h3>{c.title}</h3>
                  <p>{c.description}</p>
                  <p><strong>Schedule:</strong> {c.schedule}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="class-section">
            <h2>Upcoming Classes</h2>
            <div className="class-cards">
              {classes.filter(c => c.status === 'Upcoming').map((c, index) => (
                <div className="class-card upcoming" key={index}>
                  <h3>{c.title}</h3>
                  <p>{c.description}</p>
                  <p><strong>Schedule:</strong> {c.schedule}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer/>
    </>
  );
};

export default Classes;
