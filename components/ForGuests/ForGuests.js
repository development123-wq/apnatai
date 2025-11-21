import React from "react";
import "../../public/css/forguests.css";
import aboutimg from "../../public/images/images/viva.webp";
import Image from "next/image";


const ForGuests = () => {
  return (
    <section className="business-section">
      <div className="business-top">
        {/* Left Image */}
        <div className="business-image">
          <Image src={aboutimg} alt="Business meeting" width={700} height={500} />
        </div>

        {/* Right Text */}
        <div className="business-content">
          <h1>
            Rent Property in Natai,{" "}<br/>
            <span className="accent"> Phang-nga</span>
          </h1>
          <p className="description-custom">
            Step into the realm of luxury as you explore properties for rent in Natai, Phang-nga. With AP Natai, every rental becomes a doorway to opulence and unmatched comfort.
          </p>
          <button className="learn-btn">Learn More</button>
        </div>
      </div>

      {/* Bottom 3 angled boxes */}
      <div className="business-bottom">
        <div className="bottom-card">
          <h3>WHY?</h3>
          <p>
            When you’re looking to rent property in Natai, Phang-nga, AP Natai stands as the unrivalled choice. With over two decades in the region, our curated list of luxury rentals ensures you find the perfect abode that resonates with your aspirations.
          </p>
        </div>

        <div className="bottom-card">
          <h3>UNIQUE</h3>
          <p>
            When you’re looking to rent property in Natai, Phang-nga, AP Natai stands as the unrivalled choice. With over two decades in the region, our curated list of luxury rentals ensures you find the perfect abode that resonates with your aspirations.
          </p>
        </div>

        <div className="bottom-card">
          <h3>EXPERTISE</h3>
          <p>
            Since 2005, AP Natai has been the cornerstone of luxury rentals in Natai, Phang-nga. Our deep-rooted presence and unparalleled expertise make us the only choice for discerning individuals looking to rent property in Natai.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForGuests;
