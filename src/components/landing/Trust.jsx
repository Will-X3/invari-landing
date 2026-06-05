import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FlaskConical,
  ShieldCheck,
  FileCheck,
  Users,
  HardDriveDownload,
} from "lucide-react";

const signals = [
  {
    icon: FlaskConical,
    label: "Live Since Mid-2025",
    desc: "The enforcement engine and DAPA ledger are in production — not a demo environment, not a prototype. Active regulatory policy execution across multiple domains.",
  },
  {
    icon: ShieldCheck,
    label: "Provisional Patent Filed",
    desc: "Five independent claims covering the DAPA dual append-only ledger, never-null custody enforcement, divergence operational lock, pre-outcome receipt architecture, and portable full-chain export — all supported by production evidence.",
  },
  {
    icon: FileCheck,
    label: "ATF Policy in Production",
    desc: "Full ATF regulatory enforcement is live. Every state transition validated against versioned policy bundles. Ambiguous rules always resolve to the most restrictive valid interpretation.",
  },
  {
    icon: Users,
    label: "Founding Team Onsite",
    desc: "The pilot is structured to carry zero risk. Parallel run alongside your existing systems, defined asset subset, founding team physically present through your full audit cycle.",
  },
  {
    icon: HardDriveDownload,
    label: "Your Records. Always Yours.",
    desc: "Patent claim 5 covers portable full-chain export — a cryptographically verifiable, self-contained snapshot of your complete compliance history that reconstructs your entire ledger independently of Invari. Your chain of custody is yours to hold, verify, and present to any inspector without our involvement. We are not the custodian of your records. You are.",
  },
];

const hoverStyle = {
  background: "linear-gradient(135deg, #2C1A0E 0%, #3D2314 50%, #52300F 100%)",
  border: "1px solid rgba(201,162,39,0.35)",
  boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
};

const defaultStyle = {
  background: undefined,
  border: "1px solid hsl(var(--border))",
  boxShadow: undefined,
};

const claim5DefaultStyle = {
  background: "rgba(201,162,39,0.03)",
  border: "1px solid rgba(201,162,39,0.2)",
  boxShadow: undefined,
};

function SignalCard({ item, fullWidth = false }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-2xl p-8 flex gap-6 cursor-default"
      style={{
        ...(hovered
          ? hoverStyle
          : fullWidth
            ? claim5DefaultStyle
            : defaultStyle),
        transition: "all 0.3s ease",
      }}
    >
      <div
        className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
        style={{
          background: hovered
            ? "rgba(201,162,39,0.15)"
            : "rgba(var(--primary), 0.1)",
          transition: "background 0.3s ease",
        }}
      >
        <item.icon
          className="w-5 h-5"
          style={{
            color: hovered ? "#FACC15" : "hsl(var(--primary))",
            transition: "color 0.3s ease",
          }}
        />
      </div>
      <div>
        <h3
          className="font-heading text-base font-bold mb-2"
          style={{
            color: hovered ? "#fff" : "hsl(var(--foreground))",
            transition: "color 0.3s ease",
          }}
        >
          {item.label}
        </h3>
        <p
          className="font-body text-sm leading-relaxed"
          style={{
            color: hovered
              ? "rgba(255,220,180,0.7)"
              : "hsl(var(--muted-foreground))",
            transition: "color 0.3s ease",
          }}
        >
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function Trust() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-body font-semibold text-primary tracking-widest uppercase">
            Why Trust Invari
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-foreground">
            This Is Not a Promise.{" "}
            <span className="text-primary">It's Already Running.</span>
          </h2>
          <p className="mt-4 text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            The enforcement engine is live. The ledger is in production. The
            patent is filed. The pilot is designed so you risk nothing to see it
            for yourself.
          </p>
        </motion.div>

        {/* 2x2 grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          {signals.slice(0, 4).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <SignalCard item={item} />
            </motion.div>
          ))}
        </div>

        {/* Claim 5 — full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SignalCard item={signals[4]} fullWidth />
        </motion.div>

        {/* Bottom anchor line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        ></motion.div>
      </div>
    </section>
  );
}
