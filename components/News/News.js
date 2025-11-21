'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import '../../public/css/browsecatalog.css';

export default function BlogPage() {
  const itemsPerPage = 6;
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // 🔹 Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://techzenondev.com/apnatai/api/blogs-active');
        if (response.data.status && response.data.data) {
          setBlogs(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    fetchBlogs();
  }, []);

  // 🔍 Filter based on search
  const filteredPosts = blogs.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 🔢 Pagination logic
  const totalItems = filteredPosts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPosts.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="right-column right-column-custom">
        <h2>Search Blog</h2>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // reset pagination on new search
            }}
          />
        </div>
      </div>

      <section className="catalog-section">
        <div className="left-column left-column-custom">
          <div className="card-grid card-grid-custom">
            {currentItems.length > 0 ? (
              currentItems.map((item, index) => (
                <div className="catalog-card" key={index}>
                  {/* 🖼 Blog Image */}
                  <div className="image-wrapper">
                    <img
                      src={
                        item.image
                          ? `https://techzenondev.com/apnatai/public/${item.image}`
                          : '/images/property/pro1.png'
                      }
                      alt={item.title}
                    />
                    <span className="date-overlay">
                      {new Date(item.publish_date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>

                  {/* 🧾 Title + Description */}
                  <div className="catalog-card-content">
                    <h3>{item.title}</h3>
                    <p
                      className="catalog-desc"
                      dangerouslySetInnerHTML={{
                        __html:
                          item.description.length > 150
                            ? item.description.slice(0, 150) + '...'
                            : item.description,
                      }}
                    ></p>
                  </div>

                  {/* 🔗 Read More Button */}
                  <div className="catalog-card-footer">
                    <a href="#" className="catalog-readmore">
                      Read More »
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ textAlign: 'center', width: '100%' }}>No blogs found.</p>
            )}
          </div>

          {/* 🔢 Pagination */}
          {totalPages > 1 && (
            <div className="pagination">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={currentPage === i + 1 ? 'active' : ''}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 🖌 Custom Styling */}
      <style jsx>{`
        .image-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
        }

        .image-wrapper img {
          width: 100%;
          border-radius: 6px;
          display: block;
          object-fit: cover;
        }

        .date-overlay {
          position: absolute;
          top: 8px;
          left: 8px;
          background: rgba(0, 0, 0, 0.7);
          color: #fff;
          padding: 4px 8px;
          border-radius: 10px;
          font-size: 13px;
        }

        .search-box {
          margin-top: 10px;
        }

        .search-box input {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 15px;
          outline: none;
          transition: 0.2s ease;
        }

        .search-box input:focus {
          border-color: #0070f3;
          box-shadow: 0 0 4px rgba(0, 112, 243, 0.3);
        }
      `}</style>
    </>
  );
}