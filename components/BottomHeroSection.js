// components/BottomHero.js (Example)
import React from 'react';
import '../public/css/BottomHero.css';

const BottomHero = () => {
  return (
   <div className="hero-maincontainer">
    <div className="hero-container">
      <div className="content-overlay">
        <div className="text-block">
          <h1 className="heading">
            Escape The Ordinary <br />
            Embrace The Ocean
          </h1>
          <p className="subtext">
            Interested In Working Together? Fill Out Some Info And We Will Be In Touch Shortly. We Can't Wait To Hear From You! Lorem Ipsum Is Simply Dummy Text Of The Printing Industry.
          </p>
          <button className="cta-button">
            Request Your Service
          </button>
        </div>

        <div className="stats-bar">
          <div className="stat-item">
            <p className="stat-number">20+</p>
            <p className="stat-label">Years Of Experience</p>
          </div>
          <div className="stat-item">
            <p className="stat-number">100%</p>
            <p className="stat-label">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BottomHero;