import React from 'react';
import '../../public/css/AboutSection.css'; 
import aboutimg from '../../public/images/about/ab2.webp';
import Image from 'next/image';


const WhyUs = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        

        {/* Right: Content */}
        <div className="about-content">
          <h2 className="about-title">
            Why Choose AP Natai ?
          </h2>
          <p className="about-description">
          Choosing AP Natai means opting for a service that is as exclusive as the properties we represent.
            </p>
          <p className="about-description">
         Our in-depth knowledge of Natai’s real estate dynamics enables us to offer tailored advice, ensuring our clients make informed decisions. Whether it’s securing your dream property or managing your estate, we guarantee a service that is both comprehensive and personalised.
           </p>
          {/* <p className="about-description">
            We’ve Lived In Natai For 20+ Years And Have Built A Reputation Based On Trust And Responsibility, Never Disappointing Our Neighbors.
          </p>
          <p className="about-description">
            We’ve Lived In Natai For 20+ Years And Have Built A Reputation Based On Trust And Responsibility, Never Disappointing Our Neighbors.
          </p> */}
          
        </div>
        {/* Left: Image */}
        <div className="about-image">
            <Image src={aboutimg} alt="Luxury Villa" width={600} height={400} />
          
        </div>
      </div>
    </section>
  );
};

export default WhyUs;