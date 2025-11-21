import React, { useState } from "react";
import Image from "next/image";
import "../public/css/PropertyCardGuest.css";

const PropertyCardGuests = [
  {
    id: 1,
    image: "/images/images/banner-6-680x510.jpg", 
    title: "New & Existing Guests",
    description: "Experience unmatched luxury and seamless convenience with AP Natai’s premium services curated exclusively for our valued guests.",
    listItems: [
      "Villas for Rent",
      "Seafront Villas for Rent",
      "Get Help",
    ]
  },
  {
    id: 2,
    image: "/images/images/banner-5-1024x469-1-680x469.webp", 
    title: "Property Owners",
    description: "Unlock unparalleled value for your property with AP Natai’s bespoke services tailored exclusively for discerning property owners.",
    listItems: [
      "Sell",
      "List with us",
      "Property Management",
      "Property Maintenance (Concierge)",
      "Property Marketing",
      "Staff Sourcing & Service",
      "Renovations",
    ]
  },
  {
    id: 3,
    image: "/images/images/banner-3-1024x469-1-680x469.webp",
    title: "Investors & Future Owners",
    description: "Amplify your investment portfolio with AP Natai’s strategic services, meticulously crafted for astute investors.",
    listItems: [
      "Buy Property",
      "Buy Land",
      "Build",
      "Project Management",
      "Property Development",
      "Investment Opportunities",
      "Property Research & Scouting",
    ]
  },
];

const PropertyCard = () => {
  const [showMore, setShowMore] = useState({});

  const handleToggle = (id) => {
    setShowMore((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the state for the clicked property
    }));
  };

  return (
    <>
      <div className="image-guest">
        <p></p>
      </div>

      <div className="property-container custom-sec-two">
        <div className="fancy-mainheading fancy-mainheading-two">
          <h2 className="typing-text">Diversify Your <span>Real Estate Journey</span></h2>
        </div>

        {PropertyCardGuests.map((property) => (
          <div className="property-card" key={property.id}>
            <div className="image-wrapper">
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="property-image"
              />
            </div>

            <div className="property-content">
              <h3 className="property-title">{property.title}</h3>
              <p className="property-description">{property.description}</p>

              <ul className="property-list">
                {property.listItems.slice(0, 3).map((item, index) => (
                  <li key={index} className="list-item">{item}</li>
                ))}
              </ul>

              {property.listItems.length > 3 && (
                <>
                  {showMore[property.id] && (
                    <ul className="property-list">
                      {property.listItems.slice(3).map((item, index) => (
                        <li key={index} className="list-item">{item}</li>
                      ))}
                    </ul>
                  )}

                  <button
                    className={`read-more-btn ${showMore[property.id] ? "collapsed" : ""}`}
                    onClick={() => handleToggle(property.id)}
                  >
                    {showMore[property.id] ? "Show Less" : "Read More"}
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PropertyCard;