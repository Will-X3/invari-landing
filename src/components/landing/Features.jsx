import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Workflow,
  Lock,
  FileCheck,
  MapPin,
  ShieldAlert,
  Navigation,
} from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "Lifecycle Enforcement Engine",
    desc: "Every action is validated before it is accepted. Illegal transitions are blocked automatically. Users are only shown valid next actions based on the firearm's lifecycle state.",
    benefits: [
      "Prevents accidental violations",
      "Reduces training complexity",
      "Eliminates invalid workflow steps",
    ],
  },
  {
    icon: Lock,
    title: "Immutable Chain-of-Custody Ledger",
    desc: "Every event is recorded with cryptographic continuity. History cannot be silently altered. Every firearm maintains a provable lifecycle history.",
    benefits: [
      "Audit-ready at any time",
      "Tamper-evident records",
      "Full traceability from manufacture to disposition",
    ],
  },
  {
    icon: FileCheck,
    title: "Automated 4473 & NICS Workflow Control",
    desc: "Forms and background checks only appear when required. Users cannot accidentally initiate compliance steps at the wrong time.",
    benefits: [
      "Prevents form sequencing errors",
      "Reduces compliance risk",
      "Eliminates irrelevant workflows",
    ],
  },
  {
    icon: MapPin,
    title: "Always-Known Custody State",
    desc: "Every firearm always has a legal custodian and a physical custodian. No ambiguous ownership states exist.",
    benefits: [
      "Eliminates custody confusion",
      "Supports lawful transfers",
      "Ensures traceability",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Policy-Driven Write Validation",
    desc: "Every action must pass compliance validation before it enters the system. Invalid transitions are blocked immediately.",
    benefits: [
      "Prevents illegal actions before they happen",
      "Eliminates after-the-fact corrections",
      "Protects business liability",
    ],
  },
  {
    icon: Navigation,
    title: "Guided Workflow Interface",
    desc: "Users only see actions that are valid at that moment. No guesswork. No freeform mistakes.",
    benefits: [
      "Reduces training time",
      "Simplifies onboarding",
      "Prevents human error",
    ],
  },
];

function FeatureCard({ feature, delay }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-2xl p-7 flex flex-col cursor-default"
      style={{
        background: hovered
          ? "linear-gradient(135deg, #2C1A0E 0%, #3D2314 50%, #52300F 100%)"
          : undefined,
        border: hovered
          ? "1px solid rgba(201,162,39,0.35)"
          : "1px solid hsl(var(--border))",
        boxShadow: hovered ? "0 20px 60px rgba(0,0,0,0.3)" : undefined,
        transition: "all 0.3s ease",
      }}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
        style={{
          background: hovered
            ? "rgba(201,162,39,0.15)"
            : "rgba(var(--primary), 0.1)",
          transition: "background 0.3s ease",
        }}
      >
        <feature.icon
          className="w-6 h-6"
          style={{
            color: hovered ? "#FACC15" : "hsl(var(--primary))",
            transition: "color 0.3s ease",
          }}
        />
      </div>

      {/* Title */}
      <h3
        className="font-heading text-lg font-bold mb-3"
        style={{
          color: hovered ? "#fff" : "hsl(var(--foreground))",
          transition: "color 0.3s ease",
        }}
      >
        {feature.title}
      </h3>

      {/* Description */}
      <p
        className="font-body text-sm leading-relaxed mb-5"
        style={{
          color: hovered
            ? "rgba(255,220,180,0.7)"
            : "hsl(var(--muted-foreground))",
          transition: "color 0.3s ease",
        }}
      >
        {feature.desc}
      </p>

      {/* Benefit bullets */}
      <div className="space-y-2 mt-auto">
        {feature.benefits.map((b, j) => (
          <div key={j} className="flex items-start gap-2">
            <div
              className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
              style={{
                background: hovered ? "#FACC15" : "hsl(var(--primary))",
                transition: "background 0.3s ease",
              }}
            />
            <span
              className="font-body text-xs font-medium"
              style={{
                color: hovered
                  ? "rgba(255,220,180,0.7)"
                  : "rgba(var(--foreground), 0.8)",
                transition: "color 0.3s ease",
              }}
            >
              {b}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-body font-semibold text-primary tracking-widest uppercase">
            Platform Features
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-foreground">
            Built for Compliance, Not Workarounds
          </h2>
          <p className="mt-4 text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Six integrated capabilities that make invalid compliance states
            structurally impossible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
