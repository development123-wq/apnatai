"use client";
import React from 'react';
import { useRouter } from 'next/router';  

import '../public/css/innerbanner.css';

const InnerBanner = ({ title, buttonText = "Get a Consultant", buttonLink = "/contact" }) => {
  const router = useRouter();

  // ✅ Get current path
  const path = router.pathname;

  // ✅ Map URL path to heading text
  const headingMap = {
    '/about': 'About Us',
    '/faqs':'FAQs',
    '/agents':'Our Agents',
    '/agents/antoine-mouille': 'Antoine Mouille',
    '/agents/lou-mouille': 'Lou Mouille',
    '/reviews': 'Happy Clients',
    '/about-natai-phang-nga': 'About Natai Phang Nga',
    '/for-guests': 'For Guests',
    '/for-owners': 'For Owners',
    '/for-investors': 'For Investors',
    '/browse-catalog': 'Browse Catalog',
    '/contact': 'Contact Us',
    '/for-rentals': 'For Rentals',
    '/for-real-estates': 'For Real Estate',
    '/news': 'News & Events',
    '/search-for-real-estate': 'Search For Realestate'


  };

  const pageTitle = headingMap[path] || 'Page';

  return (
    <section className="inner-banner">
      <div className="banner-overlay">
        <h1 className="banner-title">{title || pageTitle}</h1>
        <a href={buttonLink} className="banner-btn">
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default InnerBanner;
