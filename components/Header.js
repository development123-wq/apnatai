'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../public/css/Header.module.css';
import logoimage from '../public/images/logo/logo.png';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Top Section */}
      <div className={styles.topBar}>
        <div className={styles.logoSection}>
          <div className={styles.logoBox}>
            <Image src={logoimage} alt="AP Natai Logo" width={200} />
          </div>
        </div>

        {/* Hamburger icon for mobile */}
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav
          className={`${styles.navbar} ${menuOpen ? styles.navActive : ''}`}
        >
          <a href="/">Home</a>
          <div className={styles.dropdown}>
            <a href="#" className={styles.dropbtn}>
              <span className="dropdownarrowcustom">About Us </span>
            </a>
            <div className={styles.dropdownContent}>
              <a href="/about">About Us</a>
              <a href="/about-natai-phang-nga">About Natai </a>
              <a href="/reviews">Reviews</a>
            </div>
          </div>

          {/* Dropdown */}
          <div className={styles.dropdown}>
            <a href="#" className={styles.dropbtn}>
              <span className="dropdownarrowcustom">Our Services </span>
            </a>
            <div className={styles.dropdownContent}>
              <a href="/for-guests">For Guests</a>
              <a href="/for-owners">For Owners</a>
              <a href="/for-investors">For Investors</a>
            </div>
          </div>

         
          <div className={styles.dropdown}>
            <a href="#" className={styles.dropbtn}>
              <span className="dropdownarrowcustom">Property Catalogue </span>
            </a>
            <div className={styles.dropdownContent}>
              <a href="/browse-catalog">Browse Catalog</a>
              <a href="/for-rentals">For Rentals</a>
              <a href="/for-real-estates">For Real Estate</a>
            </div>
          </div>
          <a href="/news">News</a>
          <a href="/contact">Contact</a>

          <a
            href="https://techzenondev.com/apnatai"
            className={styles.contactBtnMobile}
          >
            Login
          </a>
        </nav>

        <a
          href="https://techzenondev.com/apnatai"
          className={styles.contactBtn}
        >
          Login
        </a>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomBar}>
        <div className={styles.contactInfo}>
          <a href="tel:+660990893516">
            <FaPhoneAlt /> +66 (0) 99 089 3516
          </a>
          <a href="mailto:sales@ap-natai.com">
            <FaEnvelope /> sales@ap-natai.com
          </a>
        </div>

        <div className={styles.socialIcons}>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
          <a href="#">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
