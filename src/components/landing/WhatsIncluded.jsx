import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Database,
  Users,
  ArrowLeftRight,
  ClipboardList,
  Building2,
} from "lucide-react";

const erpModules = [
  { icon: Database, label: "Asset & Inventory Management" },
  { icon: ArrowLeftRight, label: "Custody Transfer Workflows" },
  { icon: Users, label: "Personnel & RBAC" },
  { icon: ClipboardList, label: "Order Management" },
  { icon: Building2, label: "Business Relationship Management" },
  { icon: ShieldCheck, label: "Every Operation Compliance-Gated" },
];

export default function WhatsIncluded() {
  return (
    <section id="whats-included" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-body font-semibold text-primary tracking-widest uppercase">
            What's Included
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-foreground">
            One Platform. <span className="text-primary">No Add-Ons.</span>
          </h2>
          <p className="mt-4 text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Every licensed entity gets a full compliance-native ERP at no
            additional charge — because the compliance engine already governs
            every operation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Compliance Engine Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border-2 border-primary/30 rounded-2xl p-8 shadow-lg shadow-primary/5 flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xs font-body font-semibold text-primary tracking-widest uppercase mb-2">
              Invari Core
            </span>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
              Compliance Enforcement Engine
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
              Every lifecycle event is validated before it is written. Invalid
              actions are blocked before they exist — not flagged after the
              fact, not caught in a quarterly audit, not discovered when an ATF
              inspector is already on-site. A single enforcement finding can
              cost $50,000–$200,000 in remediation, or your license entirely.
              Invari makes that class of risk structurally impossible, not just
              unlikely.{" "}
            </p>
            <div className="mt-auto space-y-3">
              {[
                "Prevents invalid state transitions before persistence",
                "Immutable, tamper-evident audit ledger",
                "ATF policy enforcement in production",
                "Interpretive rules surface as human-affirmation gates",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                  <span className="font-body text-sm text-foreground/80">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Free ERP Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-card border border-border rounded-2xl p-8 flex flex-col relative overflow-hidden"
          >
            {/* Free badge */}
            <div
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                background: "rgba(201,162,39,0.1)",
                border: "0.5px solid rgba(201,162,39,0.35)",
                borderRadius: "9999px",
                padding: "4px 14px",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#C9A227",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Included Free
              </span>
            </div>

            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Database className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xs font-body font-semibold text-primary tracking-widest uppercase mb-2">
              Invari ERP
            </span>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
              Compliance-Native ERP
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
              A full enterprise resource planning layer gated behind the same
              compliance engine. Scaling your operation doesn't create new
              compliance exposure — every ERP action is governed by the same
              rules.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {erpModules.map(({ icon: Icon, label }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-secondary/60 rounded-xl px-3 py-2.5"
                >
                  <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="font-body text-xs font-medium text-foreground/80 leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="mt-auto rounded-xl p-4"
              style={{
                background: "rgba(201,162,39,0.05)",
                border: "0.5px solid rgba(201,162,39,0.2)",
              }}
            >
              <p className="font-body text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Competitors charge $8,000–$15,000/month
                </span>{" "}
                for a separate ERP system that still requires manual compliance
                reconciliation. Invari includes it — governed end-to-end — at no
                additional cost.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
