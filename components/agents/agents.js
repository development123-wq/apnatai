"use client";

import { useEffect, useState } from "react";

export default function AgentsList() {
  const [agents, setAgents] = useState([]);

  // Remove HTML tags from description
  const stripHtml = (html) => {
    if (!html) return "";
    return html.replace(/<\/?[^>]+(>|$)/g, "");
  };

  useEffect(() => {
    fetch("https://techzenondev.com/apnatai/api/agents/active")
      .then((res) => res.json())
      .then((data) => {
        if (data.data && Array.isArray(data.data.data)) {
          setAgents(data.data.data);
        } else {
          console.error("Unexpected API response:", data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "30px",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {agents.map((agent) => (
        <div
          key={agent.id}
          style={{
            width: "520px",
            background: "#fff",
            borderRadius: "20px",
            padding: "35px",
            border: "1px solid #00e2ee",
            boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
            position: "relative",
          }}
        >
          {/* Profile Section */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
              gap: "20px",
            }}
          >
            <img
              src={`https://techzenondev.com/apnatai/public/${agent.image}`}
              alt={agent.name}
              style={{
                width: "95px",
                height: "95px",
                objectFit: "cover",
                borderRadius: "50%",
                padding:'3px',
                border: "2px solid #00e2ee",
              }}
            />

            <div>
              <h3
                style={{
                  margin: "0",
                  fontSize: "22px",
                  fontWeight: "700",
                }}
              >
                {agent.title}
              </h3>

              <p
                style={{
                  margin: "3px 0",
                  fontSize: "15px",
                  color: "#777",
                }}
              >
                {agent.email}
              </p>
            </div>
          </div>

          {/* Clean Description */}
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.6,
              color: "#444",
            }}
          >
            {agent.description
              ? stripHtml(agent.description).slice(0, 200) + "..."
              : "No description available."}
          </p>

          {/* Contact Info */}
          <div
            style={{
              marginTop: "15px",
              color: "#555",
              fontSize: "14px",
            }}
          >
            <p>📞 Mobile: {agent.mobile}</p>
            <p>💬 WhatsApp: {agent.whatsapp_number}</p>
          </div>

          {/* Button */}
          <button
            style={{
              marginTop: "18px",
              background: "#00e2ee",
              color: "#fff",
              padding: "10px 25px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontWeight: "600",
            }}
            onClick={() =>
              window.location.href = `./${agent.url}`
            }
          >
            Read More
          </button>
        </div>
      ))}
    </div>
  );
}
