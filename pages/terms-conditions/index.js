'use client';
import "../../app/globals.css";

import Image from 'next/image';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const About = () => {
  // Auto updated date
  const updatedDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <Header />

      {/* Terms and Conditions SECTION */}
      <section
        style={{
          padding: "60px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
          fontFamily: "Arial, sans-serif",
          lineHeight: "1.8",
          color: "#333",
          textAlign: "left",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            marginBottom: "10px",
            fontWeight: "700",
            color: "#00e2ee",
            textAlign: "left",
          }}
        >
          Terms and Conditions
        </h1>

        {/* Updated Date */}
        <p
          style={{
            fontSize: "14px",
            marginBottom: "25px",
            color: "#666",
            fontStyle: "italic",
          }}
        >
          Last Updated: {updatedDate}
        </p>

        <p style={{ fontSize: "16px", marginBottom: "20px" }}>
          This Terms and Conditions explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this policy carefully to understand our practices regarding your personal data.
        </p>

        <h2 style={{ fontSize: "24px", marginTop: "30px", color: "#00e2ee" }}>
          1. Information We Collect
        </h2>
        <p style={{ marginBottom: "15px" }}>
          We may collect information about you in a variety of ways. The information we may collect on the site includes:
        </p>
        <ul style={{ marginLeft: "20px", marginBottom: "20px" }}>
          <li>Personal Data (Name, Email, Phone Number)</li>
          <li>Usage Data (IP Address, Browser Type, Visit Duration)</li>
          <li>Cookies and Tracking Technologies</li>
        </ul>

        <h2 style={{ fontSize: "24px", marginTop: "30px", color: "#00e2ee" }}>
          2. How We Use Your Information
        </h2>
        <p style={{ marginBottom: "20px" }}>
          We use the information we collect from you to provide and improve our services. This includes:
        </p>
        <ul style={{ marginLeft: "20px", marginBottom: "20px" }}>
          <li>Improving user experience</li>
          <li>Responding to customer service requests</li>
          <li>Sending promotional emails and updates</li>
        </ul>

        <h2 style={{ fontSize: "24px", marginTop: "30px", color: "#00e2ee" }}>
          3. Sharing of Your Information
        </h2>
        <p style={{ marginBottom: "20px" }}>
          We do not sell or rent your data. We may share your information with trusted third-party service providers only to help us operate our website or conduct business.
        </p>

        <h2 style={{ fontSize: "24px", marginTop: "30px", color: "#00e2ee" }}>
          4. Data Security
        </h2>
        <p style={{ marginBottom: "20px" }}>
          We use administrative, technical, and physical security measures to help protect your personal information from unauthorized access.
        </p>

        <h2 style={{ fontSize: "24px", marginTop: "30px", color: "#00e2ee" }}>
          5. Your Rights
        </h2>
        <p style={{ marginBottom: "20px" }}>
          You have the right to request access, correction, or deletion of your personal data. Contact us anytime to exercise your rights.
        </p>

        <h2 style={{ fontSize: "24px", marginTop: "30px", color: "#00e2ee" }}>
          6. Contact Us
        </h2>
        <p style={{ marginBottom: "40px" }}>
          If you have questions or comments about this Terms and Conditions, please contact us at:
          <br />
          <strong>Email:</strong> info@example.com
          <br />
          <strong>Phone:</strong> +66 81 979 9307
          <br />
          <strong>Address:</strong> 23/3 Moo 5 T.Khokkloi A.Takuatung
Phang Nga 82140 Thailand
        </p>
      </section>

      <Footer />
    </>
  );
};

export default About;
