import React, { useState } from "react";
import { motion } from "framer-motion";
import { Package, Navigation, Lock } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Package,
    title: "Register the Asset",
    desc: "Every regulated firearm exists as a serialized asset with lifecycle identity. From the moment it enters your system, it has a traceable, immutable record.",
  },
  {
    num: "02",
    icon: Navigation,
    title: "Follow Guided Workflows",
    desc: "Users are shown only valid next actions. Compliance steps occur in the correct order automatically — no guesswork, no mistakes.",
  },
  {
    num: "03",
    icon: Lock,
    title: "Maintain Immutable History",
    desc: "Every action becomes part of a tamper-evident lifecycle ledger. Audit readiness is built in — not bolted on.",
  },
];

export default function HowItWorks() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="how-it-works" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-body font-semibold text-primary tracking-widest uppercase">
            How It Works
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-foreground">
            Three Steps to Unbreakable Compliance
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => {
            const hovered = hoveredIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-16 left-full w-12 h-px z-0"
                    style={{
                      transform: "translateX(-1.5rem)",
                      background: hovered ? "rgba(201,162,39,0.4)" : undefined,
                    }}
                  />
                )}
                <div
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative rounded-2xl p-8 text-center cursor-default"
                  style={{
                    background: hovered
                      ? "linear-gradient(135deg, #2C1A0E 0%, #3D2314 50%, #52300F 100%)"
                      : undefined,
                    border: hovered
                      ? "1px solid rgba(201,162,39,0.35)"
                      : "1px solid hsl(var(--border))",
                    boxShadow: hovered
                      ? "0 20px 60px rgba(0,0,0,0.3)"
                      : undefined,
                    transition: "all 0.3s ease",
                  }}
                >
                  {/* Step number */}
                  <span
                    className="font-heading text-5xl font-bold"
                    style={{
                      color: hovered
                        ? "rgba(201,162,39,0.25)"
                        : "rgba(var(--primary), 0.15)",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {step.num}
                  </span>

                  {/* Icon circle */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mt-4 mb-5"
                    style={{
                      background: hovered
                        ? "rgba(201,162,39,0.15)"
                        : "rgba(var(--primary), 0.1)",
                      transition: "background 0.3s ease",
                    }}
                  >
                    <step.icon
                      className="w-7 h-7"
                      style={{
                        color: hovered ? "#FACC15" : "hsl(var(--primary))",
                        transition: "color 0.3s ease",
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="font-heading text-xl font-bold mb-3"
                    style={{
                      color: hovered ? "#fff" : "hsl(var(--foreground))",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{
                      color: hovered
                        ? "rgba(255,220,180,0.7)"
                        : "hsl(var(--muted-foreground))",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
