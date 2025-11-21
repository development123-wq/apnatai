'use client';
import "../../app/globals.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import InnerBanner from "../../components/InnerBanner";

const About = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://techzenondev.com/apnatai/api/reviews/active")
      .then((res) => res.json())
      .then((data) => {
        if (data.status && data.data && Array.isArray(data.data.data)) {
          setReviews(data.data.data);
        }
      })
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);

  return (
    <>
      <Header />
      <InnerBanner />

      {/* ✅ Reviews Section */}
      <section className="review-section">
        <div className="container">
         

          <div className="review-grid">
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div key={index} className="review-card">
                  <div className="quote-icon">❝</div>
                  <div className="review-top">
                    <div className="review-image">
                      <Image
                        src={`https://techzenondev.com/apnatai/public/${review.image}`}
                        alt={review.name}
                        width={90}
                        height={90}
                        className="rounded-img"
                        style={{borderRadius:'100px',objectFit:'cover',border: '1px solid #00e2ee',
          borderRadius:'100px',
          padding:'3px'}}
                      />
                    </div>
                    <div className="review-info">
                      <h3 className="review-name">{review.name}</h3>
                      <p className="review-position">{review.position}</p>
                      <div className="review-rating">
                        {Array.from({ length: review.star }).map((_, i) => (
                          <span key={i}>⭐</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div
                    className="review-description"
                    dangerouslySetInnerHTML={{ __html: review.review }}
                  />
                </div>
              ))
            ) : (
              <p className="no-reviews">No reviews available.</p>
            )}
          </div>
        </div>
      </section>

      <Footer />

      {/* ✅ CSS */}
      <style jsx>{`
        .review-section {
          padding: 90px 0;
          background: linear-gradient(180deg, #fff 0%, #fafafa 100%);
        }

        .container {
          width: 90%;
          max-width: 1150px;
          margin: auto;
        }

        .review-heading {
          text-align: center;
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 60px;
          color: #1a1a1a;
          position: relative;
        }

        .review-heading::after {
          content: "";
          width: 80px;
          height: 3px;
          background: #f5b301;
          display: block;
          margin: 10px auto 0;
          border-radius: 2px;
        }

        .review-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          
        }

        .review-card {
          background: #fff;
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
          position: relative;
          transition: all 0.3s ease;
          overflow: hidden;
          border: 1px solid #00e2ee;
        }

        .review-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
        }

        .quote-icon {
          position: absolute;
          top: 15px;
          right: 25px;
          font-size: 60px;
          color: #00e2eeac;
          pointer-events: none;
        }

        .review-top {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }

        .review-image {
          flex-shrink: 0;
          margin-right: 15px;
          
        }
         
        .rounded-img {
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #f5b301;
          transition: 0.3s ease;
        }

        .review-card:hover .rounded-img {
          transform: scale(1.05);
        }

        .review-info {
          text-align: left;
        }

        .review-name {
          font-size: 18px;
          font-weight: 600;
          margin: 0;
          color: #222;
        }

        .review-position {
          font-size: 14px;
          color: #777;
          text-transform: capitalize;
          margin: 4px 0 6px;
        }

        .review-rating {
          color: #f5b301;
          font-size: 16px;
        }

        .review-description {
          font-size: 15px;
          color: #555;
          line-height: 1.7;
          margin-top: 10px;
        }

        .review-description p {
          margin: 0;
        }

        .no-reviews {
          text-align: center;
          font-size: 16px;
          color: #777;
        }

        @media (max-width: 900px) {
          .review-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }
        }
      `}</style>
    </>
  );
};

export default About;