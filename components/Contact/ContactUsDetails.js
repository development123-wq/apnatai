import React from "react";
import Image from "next/image";
import "../../public/css/ContactUs.css";

const contactInfo = [
  {
    id: 1,
    icon: "/images/images/p1.png", // Replace with your actual icon path
    title: "Phone",
    text: "+66 81 979 9307",
    color: "#00e2ee"
  },
  {
    id: 2,
    icon: "/images/images/p2.png", // Replace with your actual icon path
    title: "Email",
    text: "sales@ap-natai.com",
    color: "#00e2ee"
  },
  {
    id: 3,
    icon: "/images/images/p3.png", // Replace with your actual icon path
    title: "Address",
    text: "23/3 Moo 5 T.Khokkloi A.Takuatung Phang Nga 82140 Thailand",
    color: "#00e2ee"
  },
];

const ContactUs = () => {
  return (
    <section className="contact-section">
      
      <div className="contact-container">
        {contactInfo.map((item) => (
          <div key={item.id} className="contact-card">
            <div className="contact-icon">
              <Image src={item.icon} alt={item.title} width={70} height={70} />
            </div>
            <h3
              className="contact-title"
              style={{ color: item.title === "Address" ? "#ff5722" : "#000" }}
            >
              {item.title}
            </h3>
            <p className="contact-text" style={{textAlign:'center'}}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactUs;