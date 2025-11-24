'use client';
import "../../../app/globals.css";
import "../agent.css";

import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import AgentProperty from '../../../components/AgentPropertyLou';
import InnerBanner from '../../../components/InnerBanner';

const ForRental = () => {

  const [agent, setAgent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://techzenondev.com/apnatai/api/agents/4")
      .then((res) => res.json())
      .then((data) => {
        setAgent(data.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch API");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;

  return (
    <>
      <Header />
      <InnerBanner />

      <div className="agent-container">
        <div className="agent-card">

          {/* IMAGE */}
          <img
            src={`https://techzenondev.com/apnatai/public/${agent.image}`}
            alt={agent.title}
            className="agent-image"
          />

          {/* DETAILS */}
          <div className="agent-details">
            <h2 style={{marginBottom:'20px'}}>{agent.title}</h2>
            {/* <p className="agent-short-desc">{agent.short_description}</p> */}

            <div
              className="agent-description"
              dangerouslySetInnerHTML={{ __html: agent.description }}
            />

            {/* CONTACT */}
            <div className="contact-box">
              <h3>Contact Details</h3>

              <div className="contact-item">📞 <span>{agent.mobile}</span></div>
              <div className="contact-item">💬 <span>{agent.whatsapp_number}</span></div>
              <div className="contact-item">✉️ <span>{agent.email}</span></div>
            </div>

            {/* BUTTONS */}
            <div className="agent-buttons">
              <a href={`tel:${agent.mobile}`} className="agent-btn call">Call Now</a>
              <a href={`https://wa.me/${agent.whatsapp_number}`} className="agent-btn whatsapp">WhatsApp</a>
              <a href={`mailto:${agent.email}`} className="agent-btn email">Email</a>
            </div>
          </div>

        </div>
      </div>
<AgentProperty/>
      <Footer />
    </>
  );
};

export default ForRental;
