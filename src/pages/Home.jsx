import React, { useState, useEffect } from 'react';
import './Home.css';
import Artists from './Artists';



const bannerImages = [
  'banner.jpg',
  'banner2.jpg',
  'banner3.jpg'
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? bannerImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <section id="home" className="home-section">
        <div className="banner">
          <div className="banner-overlay" />
          <img
            src={bannerImages[currentIndex]}
            alt="Dancer"
            className="banner-image"
          />
          <div className="banner-text">
            <h1>D3 Dance School Academy</h1>
            <p>Your journey to the world of dance begins here.</p>
          </div>
          <button className="banner-button prev" onClick={goToPrev}>‹</button>
          <button className="banner-button next" onClick={goToNext}>›</button>
        </div>

        <div className="about-section">
          <div className="about-content">
            <h2>About D3 Dance School Academy</h2>
            <p>
              D3 Dance School Academy is a premier institution dedicated to providing the highest quality dance education. 
              Our mission is to inspire a love for dance in every student, from beginners to advanced performers. 
              We offer a wide range of classes in various styles, taught by experienced and passionate instructors. 
              Our state-of-the-art facilities provide a welcoming and supportive environment for students to learn, grow, and express themselves through the art of dance.
            </p>
          </div>
        </div>
      </section>
      <Artists />
    </>
  );
};

export default Home;
