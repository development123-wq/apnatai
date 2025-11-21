import React from 'react';
import '../../public/css/AboutSection.css'; 
import aboutimg from '../../public/images/about/ab1.webp';
import Image from 'next/image';


const Mission = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left: Image */}
        <div className="about-image">
            <Image src={aboutimg} alt="Luxury Villa" width={600} height={400} />
          
        </div>

        {/* Right: Content */}
        <div className="about-content">
          <h2 className="about-title">
            Our Mission
          </h2>
          <p className="about-description">
         Our mission is to redefine the essence of real estate service excellence within Natai’s luxury market. We envision ourselves as the cornerstone of property expertise, where every client’s aspiration is met with meticulous attention to detail and an unwavering commitment to ethical practices. Through integrity, innovation, and insight, we strive to sustain Natai’s legacy as a sanctuary of upscale living. </p>
          {/* <p className="about-description">
            We’ve Lived In Natai For 20+ Years And Have Built A Reputation Based On Trust And Responsibility, Never Disappointing Our Neighbors.
          </p>
          <p className="about-description">
            We’ve Lived In Natai For 20+ Years And Have Built A Reputation Based On Trust And Responsibility, Never Disappointing Our Neighbors.
          </p>
          <p className="about-description">
            We’ve Lived In Natai For 20+ Years And Have Built A Reputation Based On Trust And Responsibility, Never Disappointing Our Neighbors.
          </p> */}
          
        </div>
        
      </div>
    </section>
  );
};

export default Mission;