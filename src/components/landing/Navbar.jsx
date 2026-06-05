import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import InvariLogo from "../../assets/logo.png";
import InvariMascot from "../../assets/InvariMascot.png";
import DemoRequestModal from "@/components/DemoRequestModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "What's Included", href: "#whats-included" },
    { label: "Benefits", href: "#benefits" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.3s ease",
          background: scrolled ? "rgba(30, 16, 7, 0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? "0.5px solid rgba(201, 162, 39, 0.2)"
            : "none",
          boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "72px",
            }}
          >
            {/* Logo */}
            <a
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
              }}
            >
              <img
                src={InvariMascot}
                alt="Invari"
                style={{ height: "36px", width: "auto", objectFit: "contain" }}
              />
              <img
                src={InvariLogo}
                alt="Invari"
                style={{
                  height: "42px",
                  width: "auto",
                  objectFit: "contain",
                  marginLeft: "-35px",
                }}
              />
            </a>

            {/* Desktop Links */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "36px",
              }}
              className="hidden md:flex"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.65)",
                    textDecoration: "none",
                    letterSpacing: "0.04em",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#FACC15")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.65)")
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex" style={{ alignItems: "center" }}>
              <button
                onClick={() => setDemoOpen(true)}
                style={{
                  padding: "10px 24px",
                  borderRadius: "9999px",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  cursor: "pointer",
                  border: "1px solid rgba(201, 162, 39, 0.5)",
                  background:
                    "linear-gradient(135deg, #C9A227 0%, #A8831F 100%)",
                  color: "#0a0704",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Request Demo
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "rgba(255,255,255,0.8)",
                padding: "4px",
              }}
            >
              {mobileOpen ? (
                <X style={{ width: "22px", height: "22px" }} />
              ) : (
                <Menu style={{ width: "22px", height: "22px" }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            style={{
              background: "rgba(30, 16, 7, 0.99)",
              borderTop: "0.5px solid rgba(201, 162, 39, 0.15)",
              padding: "16px 24px 24px",
            }}
            className="md:hidden"
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "block",
                    padding: "12px 0",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    borderBottom: "0.5px solid rgba(255,255,255,0.06)",
                    transition: "color 0.2s",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <button
              onClick={() => {
                setMobileOpen(false);
                setDemoOpen(true);
              }}
              style={{
                marginTop: "20px",
                width: "100%",
                padding: "12px",
                borderRadius: "9999px",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                border: "1px solid rgba(201, 162, 39, 0.4)",
                background: "linear-gradient(135deg, #C9A227 0%, #A8831F 100%)",
                color: "#0a0704",
              }}
            >
              Request Demo
            </button>
          </div>
        )}
      </nav>

      <DemoRequestModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
}
