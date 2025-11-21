'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "../../app/globals.css";
import Aboutus from '../../components/about/AboutSection';
import Vision from '../../components/about/Vision';
import Mission from '../../components/about/Mission';
import ApNatai from '../../components/about/ApNatai';
import WhyUs from '../../components/about/WhyUs';
import aboutimg from '../../public/images/about/ab1.webp';
import aboutimg2 from '../../public/images/about/ab2.webp';
import aboutimg1 from '../../public/images/about.png';



import Image from 'next/image';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import InnerBanner from '../../components/InnerBanner';
import AboutCommitment from '../../components/about/AboutCommitment';


const About = () => {
  return (
    <>
    <Header/>
    <InnerBanner/>
    <Aboutus/>
    {/* Vision section */}

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

    {/* Vision section end */}


    {/* Mission Section start */}

 <section className="about-section">
      <div className="about-container">
        {/* Left: Image */}
        <div className="about-image">
            <Image src={aboutimg1} alt="Luxury Villa" width={600} height={400} />
          
        </div>

        {/* Right: Content */}
        <div className="about-content">
          <h2 className="about-title">
            Our Mission
          </h2>
          <p className="about-description">
         Our mission is to redefine the essence of real estate service excellence within Natai’s luxury market. We envision ourselves as the cornerstone of property expertise, where every client’s aspiration is met with meticulous attention to detail and an unwavering commitment to ethical practices. Through integrity, innovation, and insight, we strive to sustain Natai’s legacy as a sanctuary of upscale living. </p>
          
          
        </div>
        
      </div>
    </section>

    {/* Mission Section end */}

    {/* Why section start */}

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
              
              
            </div>
            {/* Left: Image */}
            <div className="about-image">
                <Image src={aboutimg2} alt="Luxury Villa" width={600} height={400} />
              
            </div>
          </div>
        </section>
    {/* Why section end */}
    
   
    <AboutCommitment/>
    <ApNatai/>
    <Footer/>



    </>
  );
};

export default About;
