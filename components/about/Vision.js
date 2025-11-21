import React from 'react';
import '../../public/css/AboutSection.css'; 
import aboutimg from '../../public/images/about.png';
import Image from 'next/image';


const Vision = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        

        {/* Right: Content */}
        <div className="about-content">
          <h2 className="about-title">
            Our Vision
          </h2>
          <p className="about-description">
          Our vision is to establish Natai as the epitome of refined coastal living, where architecture, nature, and community coexist in perfect harmony. We aim to inspire a future where every property embodies sophistication, sustainability, and serenity — creating timeless spaces that reflect the true essence of luxury and belonging.  </p>
          <p className="about-description">We aspire to craft a community that blends innovation with authenticity, where modern architecture coexists with the serenity of the sea. By fostering sustainable growth and preserving Natai’s natural charm, we envision a future where every home becomes a sanctuary of sophistication, comfort, and enduring value.</p>
          
        </div>
        {/* Left: Image */}
        <div className="about-image">
            <Image src={aboutimg} alt="Luxury Villa" width={600} height={400} />
          
        </div>
      </div>
    </section>
  );
};

export default Vision;