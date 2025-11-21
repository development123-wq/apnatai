"use client";

import { useState } from "react";
import '../public/css/Footer.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  
  const [openPopup, setOpenPopup] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    alert("Subscribed with: " + email);
    setOpenPopup(false);
  };

  return (
    <>
      {/* ===== POPUP OVERLAY ===== */}
      {openPopup && (
        <div className="popupOverlay" onClick={() => setOpenPopup(false)}>
          <div className="popupBox" onClick={(e) => e.stopPropagation()}>
            <h2>Subscribe Our Newsletter</h2>

            <input
              type="email"
              placeholder="Enter your email"
              className="popupInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button className="popupBtn" onClick={handleSubscribe}>Subscribe</button>

            <button className="popupClose" onClick={() => setOpenPopup(false)}>✖</button>
          </div>
        </div>
      )}

      <footer className="footer">

        {/* Newsletter Section */}
        <div className="newsletter">
          <h2>NEWSLETTER</h2>
          <p>
            Receive Our Newsletter and Discover Our <br /> Stories, Collections, and Surprises.
          </p>
          <div className="email-section">
            <button
              className="subscribeButton"
              onClick={() => setOpenPopup(true)}
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-left">
            <img src="/images/logo/logo.png" alt="AP Natai" className="logoImage footerlogoImage" width="300px"/>
            <p className="logoText">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
            </p>
            <p className="logoText" style={{marginTop:'20px'}}>
              Lorem Ipsum Is Simply Dummy Text Of The Printing. Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
            </p>
          </div>

          <div className="footer-links">
            <div className="company">
              <h3>COMPANY</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/for-rentals">For Rentals</a></li>
                <li><a href="/browse-catalog">Browse Catalog</a></li>
                <li><a href="/for-real-estates">For Real Estate</a></li>
                <li><a href="/faqs">FAQs</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            <div className="property-types">
              <h3>PROPERTY TYPES</h3>
              <ul>
                <li><a href="#">Apartment</a></li>
                <li><a href="#">Condo</a></li>
                <li><a href="#">House</a></li>
                <li><a href="#">Land Plots</a></li>
                <li><a href="#">Penthouse</a></li>
                <li><a href="#">Townhouse</a></li>
                <li><a href="#">Villa</a></li>
              </ul>
            </div>

            <div>
              <h3>REACH US</h3>
              <ul>
                <li style={{display:'flex'}}><FaPhoneAlt /><span style={{paddingLeft:'10px'}}>+66 81 979 9307</span></li>
                <li style={{display:'flex'}}><FaEnvelope /><span style={{paddingLeft:'10px'}}>sales@ap-natai.com</span></li>
                <li style={{display:'flex'}}><FaMapMarkerAlt /><span style={{paddingLeft:'10px'}}>23/3 Moo 5 T.Khokkloi A.Takuatung <br />Phang Nga 82140 Thailand</span></li>
              </ul>
              <br />
              <div className="social-icons">
                <a href="https://www.instagram.com/apnataibeach"><FaInstagram /></a>
                <a href="#"><FaTwitter /></a>
                <a href="https://www.linkedin.com/company/apnataibeach/"><FaLinkedinIn /></a>
                <a href="https://www.facebook.com/apnataibeach"><FaFacebookF /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>Copyright© 2025 | AP Natai | All Rights Reserved.</p>
          <ul style={{columnCount:'3',listStyleType:'none'}}> <li style={{borderRight:'1px solid #dcdcdc60',textAlign:'center'}}><a href="/privacy-policy">Privacy Policy</a></li> <li style={{borderRight:'1px solid #dcdcdc60',textAlign:'center'}}><a href="/cookie-policy">Cookie Policy</a></li> <li><a href="/terms-conditions1">Terms & Conditions</a></li> </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;