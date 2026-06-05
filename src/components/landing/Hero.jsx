import React, { useState } from "react";
import { ArrowRight, Play, ShieldCheck, Lock, FileCheck } from "lucide-react";
import { motion } from "framer-motion";
import DemoRequestModal from "@/components/DemoRequestModal";
import InvariMascot from "../../assets/InvariMascot.png";
import InvariLogoText from "../../assets/InvariLogoText.png";

export default function Hero() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <>
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          paddingTop: "80px",
        }}
      >
        <div
          style={{
            position: "relative",
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "80px 24px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "center",
            }}
            className="hero-grid"
          >
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(201,162,39,0.08)",
                  border: "0.5px solid rgba(201,162,39,0.25)",
                  borderRadius: "9999px",
                  padding: "6px 16px",
                  marginBottom: "32px",
                }}
              >
                <ShieldCheck
                  style={{ width: "14px", height: "14px", color: "#C9A227" }}
                />
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "#C9A227",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Compliance-First Platform
                </span>
              </div>

              {/* Headline */}
              <h1
                style={{
                  fontSize: "clamp(42px, 5vw, 72px)",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  color: "#000",
                  margin: "0 0 24px",
                }}
              >
                Compliance That{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #FACC15 0%, #C9A227 50%, #A8831F 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Cannot
                </span>{" "}
                Break.
              </h1>

              {/* Body */}
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: 1.7,
                  color: "rgba(0, 0, 0, 0.6)",
                  maxWidth: "520px",
                  margin: "0 0 40px",
                }}
              >
                Invari enforces firearm lifecycle compliance automatically —
                preventing illegal actions before they happen and producing
                audit-ready records by design.
              </p>

              {/* Buttons */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "16px",
                  alignItems: "center",
                  marginBottom: "48px",
                }}
              >
                {/* Primary CTA */}
                <button
                  onClick={() => setDemoOpen(true)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "14px 32px",
                    borderRadius: "9999px",
                    fontSize: "15px",
                    fontWeight: 600,
                    cursor: "pointer",
                    border: "1px solid rgba(201,162,39,0.4)",
                    background:
                      "linear-gradient(135deg, #C9A227 0%, #A8831F 100%)",
                    color: "#0a0704",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.background =
                      "linear-gradient(135deg, #FACC15 0%, #C9A227 100%)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.background =
                      "linear-gradient(135deg, #C9A227 0%, #A8831F 100%)";
                  }}
                >
                  Request Demo
                  <ArrowRight style={{ width: "16px", height: "16px" }} />
                </button>

                {/* Secondary CTA — chocolate palette */}
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "14px 32px",
                    borderRadius: "9999px",
                    fontSize: "15px",
                    fontWeight: 600,
                    cursor: "pointer",
                    border: "1px solid rgba(201,162,39,0.3)",
                    background:
                      "linear-gradient(135deg, #2C1A0E 0%, #3D2314 100%)",
                    color: "rgba(255,220,180,0.85)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.borderColor = "rgba(201,162,39,0.55)";
                    e.currentTarget.style.color = "#FACC15";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "rgba(201,162,39,0.3)";
                    e.currentTarget.style.color = "rgba(255,220,180,0.85)";
                  }}
                >
                  <Play style={{ width: "14px", height: "14px" }} />
                  See How It Works
                </button>
              </div>

              {/* Trust Indicators */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "32px",
                  flexWrap: "wrap",
                }}
              >
                {[
                  { icon: Lock, label: "Immutable Records" },
                  { icon: FileCheck, label: "Audit-Ready" },
                  { icon: ShieldCheck, label: "ATF Compliant" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "13px",
                      color: "rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <Icon
                      style={{
                        width: "14px",
                        height: "14px",
                        color: "#C9A227",
                      }}
                    />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Dashboard Mock */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              style={{ position: "relative" }}
              className="hidden lg:block"
            >
              {/* Main Dashboard Card */}
              <div
                style={{
                  background: "rgba(18, 13, 8, 0.9)",
                  border: "0.5px solid rgba(201,162,39,0.2)",
                  borderRadius: "20px",
                  padding: "24px",
                  position: "relative",
                  zIndex: 10,
                  boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Window Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "9999px",
                      background: "#ff5f57",
                    }}
                  />
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "9999px",
                      background: "#febc2e",
                    }}
                  />
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "9999px",
                      background: "#28c840",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginLeft: "12px",
                    }}
                  >
                    <img
                      src={InvariMascot}
                      alt="Invari"
                      style={{ height: "16px", width: "auto" }}
                    />
                    <img
                      src={InvariLogoText}
                      alt="Invari"
                      style={{ height: "10px", width: "auto" }}
                    />
                    <span
                      style={{
                        fontSize: "11px",
                        color: "rgba(255,255,255,0.3)",
                      }}
                    >
                      · Core Intelligence Dashboard
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {/* Lifecycle Status */}
                  <div
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "0.5px solid rgba(255,255,255,0.07)",
                      borderRadius: "12px",
                      padding: "16px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "12px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "rgba(255,255,255,0.85)",
                        }}
                      >
                        Lifecycle Status
                      </span>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 600,
                          color: "#4ade80",
                          background: "rgba(74,222,128,0.1)",
                          padding: "3px 10px",
                          borderRadius: "9999px",
                          border: "0.5px solid rgba(74,222,128,0.2)",
                        }}
                      >
                        Active
                      </span>
                    </div>

                    <div style={{ display: "flex", gap: "8px" }}>
                      {[
                        {
                          label: "Received",
                          color: "rgba(96,165,250,0.15)",
                          text: "#93c5fd",
                        },
                        {
                          label: "Inspected",
                          color: "rgba(129,140,248,0.15)",
                          text: "#a5b4fc",
                        },
                        {
                          label: "In Stock",
                          color: "rgba(74,222,128,0.15)",
                          text: "#86efac",
                        },
                        {
                          label: "Transfer",
                          color: "rgba(255,255,255,0.04)",
                          text: "rgba(255,255,255,0.25)",
                        },
                      ].map((step) => (
                        <div
                          key={step.label}
                          style={{
                            flex: 1,
                            textAlign: "center",
                            padding: "8px 4px",
                            borderRadius: "8px",
                            fontSize: "11px",
                            fontWeight: 600,
                            background: step.color,
                            color: step.text,
                          }}
                        >
                          {step.label}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "12px",
                    }}
                  >
                    {[
                      {
                        label: "Chain of Custody",
                        value: "847",
                        sub: "✓ All verified",
                        subColor: "#4ade80",
                      },
                      {
                        label: "Compliance Score",
                        value: "100%",
                        sub: "✓ Audit ready",
                        subColor: "#4ade80",
                      },
                    ].map((metric) => (
                      <div
                        key={metric.label}
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "0.5px solid rgba(255,255,255,0.07)",
                          borderRadius: "12px",
                          padding: "16px",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "11px",
                            color: "rgba(255,255,255,0.4)",
                            marginBottom: "6px",
                          }}
                        >
                          {metric.label}
                        </p>
                        <p
                          style={{
                            fontSize: "26px",
                            fontWeight: 700,
                            color: "#ffffff",
                            margin: "0 0 4px",
                          }}
                        >
                          {metric.value}
                        </p>
                        <p
                          style={{
                            fontSize: "11px",
                            color: metric.subColor,
                            fontWeight: 500,
                          }}
                        >
                          {metric.sub}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Policy Validation */}
                  <div
                    style={{
                      background: "rgba(201,162,39,0.06)",
                      border: "0.5px solid rgba(201,162,39,0.2)",
                      borderRadius: "12px",
                      padding: "16px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <ShieldCheck
                        style={{
                          width: "14px",
                          height: "14px",
                          color: "#C9A227",
                        }}
                      />
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "rgba(255,255,255,0.85)",
                        }}
                      >
                        Policy Validation Active
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: "11px",
                        color: "rgba(255,255,255,0.4)",
                        marginTop: "4px",
                      }}
                    >
                      All transitions validated in real-time
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Live Badge — glow removed */}
              <div
                style={{
                  position: "absolute",
                  top: "-16px",
                  right: "-16px",
                  background: "rgba(18,13,8,0.95)",
                  border: "0.5px solid rgba(201,162,39,0.25)",
                  borderRadius: "12px",
                  padding: "10px 14px",
                  zIndex: 20,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                  backdropFilter: "blur(12px)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "9999px",
                    background: "#4ade80",
                    animation: "pulse 2s infinite",
                  }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  Live Enforcement
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <DemoRequestModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
}
