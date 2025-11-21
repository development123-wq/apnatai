"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Head from "next/head";
import "../../public/css/browsecatalog.css";
import axios from "axios";

export default function BrowseCatalog() {
  const searchParams = useSearchParams();

  // URL Params
  const urlType = searchParams.get("type") || "";
  const urlLocation = searchParams.get("location") || "";
  const urlLandSize = searchParams.get("landsize") || "";
  const urlBudget = searchParams.get("budget") || "";

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("default");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // REMOVE HTML TAGS
  const stripHTML = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]+>/g, "");
  };

  // TRIM DESCRIPTION TO 20 WORDS
  const trimWords = (text, wordLimit = 20) => {
    const words = text.split(/\s+/);
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + " ...";
  };

  // PRICE FORMAT (3-3 commas)
  const formatPrice3 = (price) => {
    if (!price) return "";
    return Number(price).toLocaleString("en-US");
  };

  // FETCH API DATA (DYNAMIC URL)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const propertyType = urlType || 4;
        const location = urlLocation || 9;
        const landSize = urlLandSize || 0;
        const minPrice = urlBudget || 0;

        const apiUrl = `https://techzenondev.com/apnatai/api/properties?per_page=20&property_status_id=2&property_type_id=${propertyType}&location_id=${location}&min_price=${minPrice}&min_area_sqft=${landSize}&status=1`;

        console.log("API URL:", apiUrl);

        const res = await axios.get(apiUrl);
        const propertyData = res.data?.data?.data || [];
        setItems(propertyData);
      } catch (err) {
        console.log("API Error:", err);
      }

      setLoading(false);
    };

    fetchData();
  }, [urlType, urlLocation, urlLandSize, urlBudget]);

  // SORTING
  const sortItems = () => {
    const sorted = [...items];

    switch (sortOrder) {
      case "title-asc":
        return sorted.sort((a, b) => a.title.localeCompare(b.title));

      case "title-desc":
        return sorted.sort((a, b) => b.title.localeCompare(a.title));

      case "price-asc":
        return sorted.sort((a, b) => a.min_price - b.min_price);

      case "price-desc":
        return sorted.sort((a, b) => b.min_price - a.min_price);

      default:
        return items;
    }
  };

  const sortedItems = sortItems();

  // PAGINATION
  const totalItems = sortedItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);

  // IMAGE URL BUILDER
  const getImageUrl = (path) =>
    path
      ? `https://techzenondev.com/apnatai/storage/app/public/${path}`
      : "/no-image.jpg";

  return (
    <>
      <Head>
        <title>Browse Catalog</title>
      </Head>

      {loading ? (
        <div className="loading">Loading properties...</div>
      ) : (
        <>
          {/* Top Bar */}
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
                  <option value="title-asc">Property Title A → Z</option>
                  <option value="title-desc">Property Title Z → A</option>
                  <option value="price-asc">Price Low → High</option>
                  <option value="price-desc">Price High → Low</option>
                </select>
              </div>
            </div>
          </section>

          {/* Catalog Cards */}
          <section className="catalog-section">
            <div className="left-column">
              {currentItems.length === 0 ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "50px",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  No property found for this search
                </div>
              ) : (
                <div
                  className="card-grid"
                  style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
                >
                  {currentItems.map((item) => (
                    <div className="catalog-card" key={item.id}>
                      <img src={getImageUrl(item.main_image)} alt={item.title} />

                      <div className="catalog-card-content">
                        <h3>{item.title}</h3>

                        <p>{trimWords(stripHTML(item.description), 20)}</p>

                        <div
                          className="catalog-features"
                          style={{ marginTop: "20px" }}
                        >
                          <span>🛏 {item.min_beds} Bedrooms</span>
                          <span>🛁 {item.min_baths} Bathrooms</span>
                          <span>📐 {item.min_area_sqft} m²</span>
                        </div>
                      </div>

                      <div className="catalog-card-footer">
                        <span className="catalog-price">
                          <strong>฿</strong> {formatPrice3(item.min_price)}
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
              )}

              {/* Pagination */}
              {currentItems.length > 0 && (
                <div className="pagination">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={currentPage === i + 1 ? "active" : ""}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </section>
        </>
      )}
    </>
  );
}
