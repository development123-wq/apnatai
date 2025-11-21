"use client";
import React, { useEffect, useState } from "react";
import "../../public/css/forguests.css";
import aboutimg from "../../public/images/images/viva.webp";
import Image from "next/image";

const ForGuests = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetch("https://techzenondev.com/apnatai/api/agents/active")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.data)) {
          setAgents(data.data);
        }
      })
      .catch((err) => console.log("API Error:", err));
  }, []);

  return (
    <section className="business-section">

      {/* --- TOP SECTION (UNCHANGED) --- */}
      <div className="business-top">
        <div className="business-image">
          <Image src={aboutimg} alt="Business meeting" width={700} height={500} />
        </div>

        <div className="business-content">
          <h1>
            Rent Property in Natai, <br />
            <span className="accent"> Phang-nga</span>
          </h1>
          <p className="description-custom">
            Step into the realm of luxury as you explore properties for rent in
            Natai, Phang-nga. With AP Natai, every rental becomes a doorway to
            opulence and unmatched comfort.
          </p>
          <button className="learn-btn">Learn More</button>
        </div>
      </div>

      {/* --- BOTTOM EXISTING 3 BOXES (UNCHANGED) --- */}
      <div className="business-bottom">
        <div className="bottom-card">
          <h3>WHY?</h3>
          <p>
            When you’re looking to rent property in Natai, Phang-nga, AP Natai
            stands as the unrivalled choice...
          </p>
        </div>

        <div className="bottom-card">
          <h3>UNIQUE</h3>
          <p>
            With over two decades in the region...
          </p>
        </div>

        <div className="bottom-card">
          <h3>EXPERTISE</h3>
          <p>
            Since 2005, AP Natai has been the cornerstone of luxury rentals...
          </p>
        </div>
      </div>

      {/* --- NEW: AGENTS LIST SECTION (API DATA) --- */}
      <div className="agents-section">
        <h2 className="agents-title">Meet Our Active Agents</h2>

        <div className="agents-grid">
          {agents.map((agent) => (
            <div className="agent-card" key={agent.id}>
              <Image
                src={agent.image || "https://via.placeholder.com/300"}
                alt={agent.name}
                width={300}
                height={300}
                className="agent-img"
              />

              <h3>{agent.name}</h3>

              {agent.email && <p><strong>Email:</strong> {agent.email}</p>}
              {agent.phone && <p><strong>Phone:</strong> {agent.phone}</p>}
              {agent.description && (
                <p className="agent-desc">{agent.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default ForGuests;
