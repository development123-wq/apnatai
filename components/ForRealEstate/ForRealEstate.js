"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import "../../public/css/browsecatalog.css";
import imglogo from "../../public/images/logo/Door-Logo-1-768x768.png";

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

  // 🔥 Format price with commas
  const formatPrice = (num) => {
    if (!num) return 0;
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // 🔥 Fetch API Data
  useEffect(() => {
    fetch("https://techzenondev.com/apnatai/api/properties?property_status_id=2&status=1")
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
      <Head>
        <title>Browse Catalog</title>
      </Head>

      {/* FILTER + SORT */}
      <section className="filterbytotal">
        <div className="filterbar-wrapper">
          <div className="filter-status-bar">
            Showing {indexOfFirstItem + 1} to{" "}
            {indexOfLastItem > totalItems ? totalItems : indexOfLastItem} of{" "}
            {totalItems} properties
          </div>

          <div className="sort-dropdown">
            <select
              value={sortOrder}
              onChange={(e) => {
                setSortOrder(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="default">Default Order</option>
              <option value="title-asc">Property Title A to Z</option>
              <option value="title-desc">Property Title Z to A</option>
              <option value="price-asc">Price Low to High</option>
              <option value="price-desc">Price High to Low</option>
            </select>
          </div>
        </div>
      </section>

      {/* MAIN PROPERTY LIST */}
      <section className="catalog-section">
        <div className="left-column">
          <div className="card-grid">
            {currentItems.map((item, index) => (
              <div className="catalog-card" key={index}>
                <img
                  src={`https://techzenondev.com/apnatai/storage/app/public/${item.main_image}`}
                  alt={item.title}
                />

                <div className="catalog-card-content">
                  <h3>{item.title}</h3>

                  {/* √ Normal Description (HTML removed) */}
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
                  <span className="catalog-price">
                    ฿{formatPrice(item.min_price)}
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

          {/* Pagination Buttons */}
          <div className="pagination">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={currentPage === i + 1 ? "active" : ""}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="right-column">
          <h2>Agents List</h2>

          <div className="right-column-one">
            <Image
              src={imglogo}
              alt="imglogo"
              className="property-image"
              width="100"
              height="100"
            />
            <h3>Antoine Mouille</h3>
            <a href="mailto:antoine@ap-natai.com">antoine@ap-natai.com</a>
            <br />
            <a href="tel:+660819799307">+66 (0) 81 979 9307</a>
          </div>

          <div className="right-column-one">
            <Image
              src={imglogo}
              alt="imglogo"
              className="property-image"
              width="100"
              height="100"
            />
            <h3>Lou Mouille</h3>
            <a href="mailto:antoine@ap-natai.com">antoine@ap-natai.com</a>
            <br />
            <a href="tel:+660819799307">+66 (0) 81 979 9307</a>
          </div>
        </div>
      </section>
    </>
  );
}
