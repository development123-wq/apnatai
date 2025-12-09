"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "../public/css/PropertyCard.css";

const IMAGE_BASE_URL =
  "https://techzenondev.com/apnatai/storage/app/public/";

const PropertyCard = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch(
          "https://techzenondev.com/apnatai/api/properties?property_status_id=1&status=1"
        );
        const data = await res.json();
        setProperties(data?.data?.data || []);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchProperties();
  }, []);

  const stripHtml = (html = "") => {
    if (!html) return "";
    return html.replace(/<[^>]+>/g, "");
  };

  const limitWords = (text, limit = 25) => {
    const words = text.split(" ");
    if (words.length <= limit) return text;
    return words.slice(0, limit).join(" ") + ".....";
  };

  return (
    <>
      <div className="fancy-mainheading">
        <h2>
          For Sale In <span>Natai Beach</span>
        </h2>
      </div>

      <div className="property-container">
        {properties.map((property) => {
          const mainImagePath =
            property.main_image ||
            property.featured_image ||
            property.image ||
            property.thumbnail ||
            "";

          const image = mainImagePath
            ? `${IMAGE_BASE_URL}${mainImagePath}`
            : "/images/property/pro1.png";

          const rawTitle =
            property.title ||
            property.name ||
            property.property_title ||
            "";

          const title =
            rawTitle && rawTitle.trim().length > 0
              ? rawTitle
              : "Natai Beach property image";

          const rawDesc =
            property.short_description ||
            property.description ||
            property.summary ||
            "No description available.";

          const cleanDesc = limitWords(stripHtml(rawDesc), 25);

          const slug =
            property.slug ||
            property.seo_slug ||
            property.url ||
            property.permalink ||
            "#";

          const bedrooms = property.min_beds || "N/A";
          const bathrooms = property.min_baths || "N/A";
          const area = property.max_area_sqft || property.max_area_sqft || "N/A";

          const price =
            property.price ||
            property.starting_from ||
            property.min_price ||
            "Price on request";

          return (
            <div className="property-card" key={property.id}>
              <div className="image-wrapper">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="property-image"
                />
              </div>

              <div className="property-content">
                <h3 className="property-title">
                  <a href={`/property/${slug}`}>{title}</a>
                </h3>

                <p
                  style={{ color: "#000", lineHeight: "20px" }}
                  className="property-description"
                >
                  {cleanDesc}
                </p>

                <div className="property-details">
                  <div className="detail-item">🛏 {bedrooms} Bedrooms</div>
                  <div className="detail-item">🛁 {bathrooms} Bathrooms </div>
                  <div className="detail-item">📐 {area} m²</div>
                </div>
              </div>

              <div className="property-footer">
                <div>
                  <p className="price">฿{price}</p>
                </div>

                <button
                  className="read-more-property"
                  onClick={() =>
                    (window.location.href = `/property/${slug}`)
                  }
                >
                  Read More »
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="loadmore-btn">
        <a className="about-button" href="./for-real-estates">
          Load More ❯❯
        </a>
      </div>
    </>
  );
};

export default PropertyCard;