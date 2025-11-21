import React from "react";
import Image from "next/image";
import aboutimg from "../../public/images/images/viva2.jpg";
import "../../public/css/businessevents.css";

const BusinessEvents = () => {
  return (
    <section className="events-section">
      <div className="events-header">
        <h1>
          Seafront Villas for Rent in Natai,{" "}
          <span className="highlight"> Phang-nga</span> 
        </h1>
        <p className="description-custom">
          Experience luxury at its finest as you explore properties for sale in Natai, Phang-nga. Every estate presented by AP Natai is a testament to elegance, luxury, and architectural prowess.
        </p>
      </div>

      <div className="events-body">
        {/* Left image */}
        <div className="events-image">
          <Image src={aboutimg} alt="Business meeting" width={600} height={400} /><br/><br/>
           <button className="learn-btn">Get A Free Consultation</button>
        </div>

        {/* Right content */}
        <div className="events-right">
          <div className="event-card">
            <h3>Your Seaside Sanctuary with AP Natai</h3>
            <p>
              If renting a seafront villa in Natai, Phang-nga is on your mind, look no further than AP Natai. Our selection of luxury rental properties ensures that you find a haven that mirrors your dream seaside sanctuary.
            </p>
          </div>

          <div className="event-card">
            <h3>A Rental Experience Like No Other</h3>
            <p>
              With AP Natai, renting a seafront villa is an experience in itself. We go beyond just offering properties; we offer homes that resonate with your vision of beachside luxury, ensuring that every moment spent is a memory cherished.
            </p>
          </div>

          <div className="event-card">
            <h3>Your Trusted Partner in Natai Beachfront Rentals</h3>
            <p>
              Having been established in 2005, AP Natai stands as a beacon of trust when it comes to seafront villa rentals in Natai, Phang-nga. Our legacy combined with our unparalleled local insights makes us the first choice for discerning renters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessEvents;
