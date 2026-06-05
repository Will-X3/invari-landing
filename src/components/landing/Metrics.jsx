import React, { useState } from "react";
import { motion } from "framer-motion";

const metrics = [
  {
    value: "0",
    label: "Invalid State Transitions Possible",
    sub: "Structurally blocked before persistence — not detected after",
  },
  {
    value: "100%",
    label: "Lifecycle Traceability",
    sub: "Every asset, every event, every actor — immutably recorded from first entry",
  },
  {
    value: "2",
    label: "Ledgers per Transaction",
    sub: "Accepted transitions and rejected attempts recorded in physically separate append-only stores",
  },
  {
    value: "5",
    label: "Independent Patent Claims",
    sub: "DAPA ledger, never-null custody, divergence lock, pre-outcome receipt, portable chain export",
  },
  {
    value: "Unified",
    label: "All Bound Books Updated per Transfer",
    sub: "Acquisition and disposition records for all parties written simultaneously in a single action",
  },
  {
    value: "Zero",
    label: "Exposed Enforcement API Surface",
    sub: "The compliance engine cannot be reached externally — no attack surface outside the governed UI",
  },
  {
    value: "Always",
    label: "Most Restrictive Valid Outcome",
    sub: "Policy ambiguity and conflict never default to permissive — the system fails closed",
  },
  {
    value: "100%",
    label: "Operator-Owned Compliance History",
    sub: "Full portable chain export verifiable without Invari's involvement, servers, or continued existence",
  },
];

function MetricCard({ m, delay }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="text-center rounded-2xl p-8 flex flex-col items-center cursor-default"
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
      <p
        className="font-heading text-5xl font-bold"
        style={{
          color: hovered ? "#FACC15" : "hsl(var(--primary))",
          transition: "color 0.3s ease",
        }}
      >
        {m.value}
      </p>
      <p
        className="font-body text-sm font-semibold mt-3"
        style={{
          color: hovered ? "#fff" : "hsl(var(--foreground))",
          transition: "color 0.3s ease",
        }}
      >
        {m.label}
      </p>
      <p
        className="font-body text-xs mt-2 leading-relaxed"
        style={{
          color: hovered
            ? "rgba(255,220,180,0.6)"
            : "hsl(var(--muted-foreground))",
          transition: "color 0.3s ease",
        }}
      >
        {m.sub}
      </p>
    </motion.div>
  );
}

export default function Metrics() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-body font-semibold text-primary tracking-widest uppercase">
            By the Numbers
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-foreground">
            Measurable Compliance Impact
          </h2>
          <p className="mt-4 text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Every number here is an architectural guarantee — not a projection.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <MetricCard key={i} m={m} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
