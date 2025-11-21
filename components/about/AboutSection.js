"use client";
import React from 'react';
import '../../public/css/AboutSection.css'; 
import { useEffect, useState } from "react";
import aboutimg from '../../public/images/about/ab3.webp';
import axios from "axios";
import Image from 'next/image';


const AboutSection = () => {
   const [about, setAbout] = useState(null);

     useEffect(() => {fetch("https://techzenondev.com/apnatai/api/about-us")
      .then((res) => res.json())
      .then((data) => setAbout(data.data))
      .catch((err) => console.error("Error fetching about data:", err));
  }, []);

  if (!about) return <p>Loading...</p>;

  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left: Image */}
        <div className="about-image">
            <Image src={aboutimg} alt="Luxury Villa" width={600} height={400} />
          
        </div>

        {/* Right: Content */}
        <div className="about-content">
          <h4 className="about-subtitle">{about.title}</h4>
          <h2 className="about-title">
            {about.short_description}
          </h2>
          <p>
          {about.description}
           </p>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;