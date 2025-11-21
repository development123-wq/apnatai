import React from "react";
import "../../public/css/ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* LEFT SIDE - MAP */}
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=23/3%20Moo%205%20T.Khokkloi%20A.Takuatung%20Phang%20Nga%2082140%20Thailand&output=embed"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Optional Social Icons */}
          <div className="">
            <a href="#" className="social-icon fb">F</a>
            <a href="#" className="social-icon in">in</a>
            <a href="#" className="social-icon ig">IG</a>
          </div>
        </div>

        {/* RIGHT SIDE - CONTACT FORM */}
        <div className="form-container">
          <h2 className="form-title" style={{fontSize:'40px',fontWeight:'600'}}>GET IN TOUCH</h2>
          <form className="contact-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone" required />
            <input type="text" placeholder="Budget" />
            <input type="text" placeholder="Property Type" />
            <textarea placeholder="Message" rows="4"></textarea>
            <button type="submit" className="submit-btn">Send Query</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;