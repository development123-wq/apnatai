'use client';

import '../public/css/ContactBanner.css';

export default function HeroBanner() {
  return (
    <div className="hero-banner contact-hero-banner">
      <div className="overlay-contact">
        <div className="hero-sec-overlaymain">
        <h1 className="hero-title">
          Wake Up To Endless Ocean Views <br />
          And The <span className="highlight">Elegance Of Privacy</span>
        </h1>
        <p className="hero-subtitle" style={{textAlign:'center'}}>
          Reach out to us for personalized assistance, exclusive property insights, and seamless guidance. Our team is here to support your journey with care, clarity, and professionalism.
        </p>
        <a className="hero-button" href="/contact">Contact Us Today</a>
        </div>
      </div>
    </div>
  );
}
