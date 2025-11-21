'use client';
import "../../app/globals.css";

import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import InnerBanner from '../../components/InnerBanner';

const About = () => {

  // Accordion active index
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // FAQ DATA
  const faqs = [
    {
      q: "What services does AP Natai provide?",
      a: "We provide property rentals, management, and premium real estate services in Natai, Phang-nga."
    },
    {
      q: "How can I contact customer support?",
      a: "You can reach us via the contact form or by emailing support@example.com."
    },
    {
      q: "Do you offer property management?",
      a: "Yes, we offer complete property management including maintenance, guest services, and marketing."
    },
    {
      q: "Is there any service charge?",
      a: "Service charges vary based on property type and required management services."
    }
  ];

  return (
    <>
      <Header/>
      <InnerBanner/>

      {/* FAQ SECTION */}
      <section
        style={{
          maxWidth: "1000px",
          margin: "60px auto",
          padding: "20px",
          fontFamily: "Arial, sans-serif"
        }}
      >
        <h2
          style={{
            fontSize: "34px",
            marginBottom: "20px",
            textAlign: "center",
            color: "#00e2ee",
            fontWeight: "700"
          }}
        >
          Frequently Asked Questions
        </h2>

        <div>
          {faqs.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                marginBottom: "12px",
                overflow: "hidden"
              }}
            >
              {/* QUESTION */}
              <div
                onClick={() => toggleFAQ(index)}
                style={{
                  padding: "18px 20px",
                  cursor: "pointer",
                  background: "#f8f8f8",
                  fontSize: "18px",
                  fontWeight: "600",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                {item.q}
                <span style={{ fontSize: "22px" }}>
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              {/* ANSWER */}
              {activeIndex === index && (
                <div
                  style={{
                    padding: "16px 20px",
                    background: "#fff",
                    fontSize: "16px",
                    color: "#555",
                    borderTop: "1px solid #eee",
                    transition: "all 0.3s ease-in-out"
                  }}
                >
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer/>
    </>
  );
};

export default About;