import React from "react";
import InvariLogoText from "../../assets/InvariLogoText.png";
import InvariMascot from "../../assets/InvariMascot.png";

export default function Footer() {
  const links = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "What's Included", href: "#whats-included" },
    { label: "Benefits", href: "#benefits" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <footer
      style={{
        background:
          "linear-gradient(135deg, #2C1A0E 0%, #3D2314 40%, #52300F 70%, #6B3F1A 100%)",
        borderTop: "0.5px solid rgba(201, 162, 39, 0.25)",
        padding: "56px 0 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle warm sheen overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(201,162,39,0.08) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "28px",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none",
            }}
          >
            <img
              src={InvariMascot}
              alt="Invari"
              style={{ height: "52px", width: "auto", objectFit: "contain" }}
            />
            <img
              src={InvariLogoText}
              alt="Invari"
              style={{ height: "28px", width: "auto", objectFit: "contain" }}
            />
          </a>

          {/* Links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "36px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "rgba(255, 220, 180, 0.5)",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FACC15")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255, 220, 180, 0.5)")
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div
            style={{
              width: "100%",
              height: "0.5px",
              background:
                "linear-gradient(to right, transparent, rgba(201,162,39,0.3), transparent)",
            }}
          />

          {/* Copyright */}
          <p
            style={{
              fontSize: "12px",
              color: "rgba(255, 220, 180, 0.3)",
              letterSpacing: "0.06em",
              textAlign: "center",
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} Invari Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
