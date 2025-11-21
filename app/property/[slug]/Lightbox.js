"use client";
import { useState } from "react";

export default function Lightbox({ src }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Thumbnail */}
      <img
        src={src}
        style={{
          width: "100%",
          cursor: "pointer",
          borderRadius: 8,
        }}
        onClick={() => setOpen(true)}
      />

      {/* FULL SCREEN LIGHTBOX */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setOpen(false)}
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              background: "transparent",
              border: "none",
              fontSize: 40,
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
              lineHeight: "30px",
            }}
          >
            ×
          </button>

          {/* IMAGE */}
          <img
            src={src}
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: 10,
              boxShadow: "0 0 25px rgba(255,255,255,0.3)",
            }}
          />
        </div>
      )}
    </>
  );
}
