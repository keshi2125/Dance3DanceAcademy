import React, { useState } from 'react';
import './Artists.css';
import instructor1 from '/instructor-1.jpg';
import instructor2 from '/instructor-2.jpg';
import instructor3 from '/instructor-3.jpg';
import instructor4 from '/instructor4.jpg';
import Classes from './Classes';

const artists = [
  {
    name: 'John Doe',
    specialty: 'Hip Hop',
    experience: '10 years of experience in choreographing and teaching. Has won multiple national-level competitions.',
    image: instructor1,
  },
  {
    name: 'Jane Smith',
    specialty: 'Contemporary',
    experience: 'Trained at the Royal Ballet School. Has performed in numerous international stages.',
    image: instructor2,
  },
  {
    name: 'Michael Clark',
    specialty: 'Ballet',
    experience: 'A principal dancer with over 15 years of experience. Known for his powerful and graceful performances.',
    image: instructor3,
  },
  {
    name: 'Emily White',
    specialty: 'Salsa',
    experience: 'An award-winning salsa dancer and instructor. Her classes are known for being energetic and fun.',
    image:
      instructor4,
  },
];

const Artists = () => {
  const [selectedArtist, setSelectedArtist] = useState(null);

  return (
    <>
    <section id="artists" className="artists-page">
    <div className="artists-page">
      <div className="container">
        <h1 className="page-title">Our Artists</h1>
        <div className="artist-list">
          {artists.map((artist, index) => (
            <div
              className="artist-card"
              key={index}
              onClick={() => setSelectedArtist(artist)}
            >
              <img src={artist.image} alt={artist.name} />
              <div className="artist-info">
                <h3>{artist.name}</h3>
                <p><strong>Specialty:</strong> {artist.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedArtist && (
        <div className="artist-popup" onClick={() => setSelectedArtist(null)}>
          <div className="popup-content">
            <img src={selectedArtist.image} alt={selectedArtist.name} />
            <h2>{selectedArtist.name}</h2>
            <p><strong>Specialty:</strong> {selectedArtist.specialty}</p>
            <p>{selectedArtist.experience}</p>
          </div>
        </div>
      )}
    </div>
    </section>
    <Classes/>
    </>
  );
};

export default Artists;
