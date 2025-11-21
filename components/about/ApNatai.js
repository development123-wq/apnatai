import React from 'react';
import '../../public/css/AboutSection.css'; 
import aboutimg from '../../public/images/about/ab5.webp';
import Image from 'next/image';


const ApNatai = () => {
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
            AP Natai’s role in Natai’s development
          </h2>
          <p className="about-description">
        As pioneers in Natai’s property landscape, we take pride in our strategic role in shaping its development. Our approach is grounded in sustainability, ensuring that as Natai grows, it does so with respect for the natural environment and local heritage. Through responsible stewardship, we aim to foster a property market that is vibrant, ethical, and forward-thinking. </p>
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

export default ApNatai;