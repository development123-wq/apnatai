import React from "react";
import { FaSun, FaHome, FaSearch } from "react-icons/fa";
import "../public/css/ServiceCard.css";
import Image from "next/image";

const ServiceCard = () => {
  return (
    <section className="service-section">
      <div className="fancy-mainheading">
        <h2>
          One-Stop <span>Service</span>
        </h2>
      </div>

      <div className="service-container">
        <div className="service-card">
          <div className="service-icon-box">
          <div className="icon-wrap">
            <Image
                      src="/images/imgsec1.png"
                      alt="Background"
                      
                      priority
                      className="bg-img"
                      width={80}
  height={80}
                    />
          </div>
          <h3 className="title">Land & Property Sourcing</h3>
          </div>
          <p className="description">
            We help you find the ideal land or property that perfectly fits your needs. From prime locations to reliable ownership, our team ensures a smooth, transparent, and stress-free sourcing process from start to finish.
          </p>
          <a href="/browse-catalog" className="read-more">
            Read More <span>&#187;</span>
          </a>
        </div>

        <div className="service-card">
          <div className="service-icon-box">

          <div className="icon-wrap">
           <Image
                      src="/images/imgsec2.png"
                      alt="Background"
                      
                      priority
                      className="bg-img"
                      width={80}
  height={80}
                    />
          </div>
          <h3 className="title">Design & Construction</h3>
          </div>
          <p className="description">
            Our expert team handles everything from creative design concepts to high-quality construction. We ensure every detail is planned, managed, and delivered with precision, bringing your vision to life with durability, style, and modern functionality.
          </p>
          <a href="/browse-catalog" className="read-more">
            Read More <span>&#187;</span>
          </a>
        </div>

        <div className="service-card">
          <div className="service-icon-box">

          <div className="icon-wrap">
            <Image
                      src="/images/imgsec3.png"
                      alt="Background"
                      
                      priority
                      className="bg-img"
                      width={80}
  height={80}
                    />
          </div>
          <h3 className="title">Management & Rental</h3>
          </div>
          <p className="description">
            We provide complete property management and rental services, ensuring your investment stays well-maintained, profitable, and worry-free. From tenant handling to maintenance and reporting, we take care of everything on your behalf.
          </p>
          <a href="/browse-catalog" className="read-more">
            Read More <span>&#187;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;