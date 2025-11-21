"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import "../../../public/css/browsecatalog.css";

export default function BrowseCatalog() {
  const itemsPerPage = 6;

  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("default");

  // 🔥 Convert HTML → plain text
  const stripHtml = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]+>/g, "");
  };

  // 🔥 Fetch API Data
  useEffect(() => {
    fetch("https://techzenondev.com/apnatai/api/properties")
      .then((res) => res.json())
      .then((data) => {
        const array = data?.data?.data;

        if (Array.isArray(array)) {
          setProperties(array);
        } else {
          console.error("API data is not array:", data);
        }
      })
      .catch((error) => console.error("API Error:", error));
  }, []);

  const totalItems = properties.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // 🔀 Sorting Logic
  const sortItems = (items, order) => {
    const sorted = [...items];

    switch (order) {
      case "title-asc":
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case "title-desc":
        return sorted.sort((a, b) => b.title.localeCompare(a.title));
      case "price-asc":
        return sorted.sort(
          (a, b) => parseInt(a.min_price) - parseInt(b.min_price)
        );
      case "price-desc":
        return sorted.sort(
          (a, b) => parseInt(b.min_price) - parseInt(a.min_price)
        );
      default:
        return items;
    }
  };

  const sortedItems = sortItems(properties, sortOrder);

  // 📌 Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {/* MAIN PROPERTY LIST */}
      <section className="catalog-section" style={{ background: "#fff" }}>
        <div className="left-column">
          <h2
            style={{
              fontSize: "40px",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Similar Properties
          </h2>

          <div
            className="card-grid card-three-grid"
            style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
          >
            {currentItems.map((item, index) => (
              <div className="catalog-card" key={index}>
                <img
                  src={`https://techzenondev.com/apnatai/storage/app/public/${item.main_image}`}
                  alt={item.title}
                />

                <div className="catalog-card-content">
                  <h3>{item.title}</h3>

                  <p className="catalog-desc">
                    {stripHtml(item.description).substring(0, 80)}...
                  </p>

                  <div className="catalog-features">
                    <span>🛏 {item.min_beds} Bedrooms</span>
                    <span>🛁 {item.min_baths} Bathrooms</span>
                    <span>📐 {item.min_area_sqft} m²</span>
                  </div>
                </div>

                <div className="catalog-card-footer">
                  {/* ✅ PRICE WITH COMMAS */}
                  <span className="catalog-price">
                    ฿{Number(item.min_price).toLocaleString("en-US")}
                  </span>

                  <a
                    href={`/property/${item.slug}`}
                    className="catalog-readmore"
                  >
                    Read More »
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
