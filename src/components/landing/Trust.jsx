import React from "react";
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
    desc: "Four independent claims covering the DAPA dual append-only ledger, never-null custody enforcement, divergence operational lock, and pre-outcome receipt architecture — all supported by production evidence.",
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

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {signals.slice(0, 4).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 flex gap-6"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-foreground mb-2">
                  {item.label}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Claim 5 — full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 flex gap-6"
          style={{
            background: "rgba(201,162,39,0.03)",
            borderColor: "rgba(201,162,39,0.2)",
          }}
        >
          <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
            <HardDriveDownload className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-heading text-base font-bold text-foreground mb-2">
              {signals[4].label}
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {signals[4].desc}
            </p>
          </div>
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
