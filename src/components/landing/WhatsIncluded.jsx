import React, { useState } from "react";
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

const checkItems = [
  "Prevents invalid state transitions before persistence",
  "Immutable, tamper-evident audit ledger",
  "ATF policy enforcement in production",
  "Interpretive rules surface as human-affirmation gates",
];

export default function WhatsIncluded() {
  const [leftHovered, setLeftHovered] = useState(false);
  const [rightHovered, setRightHovered] = useState(false);

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
            onMouseEnter={() => setLeftHovered(true)}
            onMouseLeave={() => setLeftHovered(false)}
            className="rounded-2xl p-8 flex flex-col cursor-default"
            style={{
              background: leftHovered
                ? "linear-gradient(145deg, #1A0C05 0%, #2C1A0E 40%, #3D2314 100%)"
                : "linear-gradient(145deg, #2C1A0E 0%, #3D2314 50%, #52300F 100%)",
              border: leftHovered
                ? "1px solid rgba(201,162,39,0.6)"
                : "1px solid rgba(201,162,39,0.3)",
              boxShadow: leftHovered
                ? "0 24px 64px rgba(0,0,0,0.5)"
                : "0 8px 32px rgba(0,0,0,0.3)",
              transition: "all 0.3s ease",
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
              style={{
                background: leftHovered
                  ? "rgba(201,162,39,0.2)"
                  : "rgba(201,162,39,0.1)",
                transition: "background 0.3s ease",
              }}
            >
              <ShieldCheck
                className="w-6 h-6"
                style={{
                  color: leftHovered ? "#FACC15" : "#C9A227",
                  transition: "color 0.3s ease",
                }}
              />
            </div>

            <span
              className="text-xs font-body font-semibold tracking-widest uppercase mb-2"
              style={{ color: "#C9A227" }}
            >
              Invari Core
            </span>

            <h3
              className="font-heading text-2xl font-bold mb-3"
              style={{ color: "#fff" }}
            >
              Compliance Enforcement Engine
            </h3>

            <p
              className="font-body text-sm leading-relaxed mb-6"
              style={{
                color: leftHovered
                  ? "rgba(255,220,180,0.8)"
                  : "rgba(255,220,180,0.6)",
                transition: "color 0.3s ease",
              }}
            >
              Every lifecycle event is validated before it is written. Invalid
              actions are blocked before they exist — not flagged after the
              fact, not caught in a quarterly audit, not discovered when an ATF
              inspector is already on-site. A single enforcement finding can
              cost $50,000–$200,000 in remediation, or your license entirely.
              Invari makes that class of risk structurally impossible, not just
              unlikely.
            </p>

            <div className="mt-auto space-y-3">
              {checkItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex-shrink-0 font-bold"
                    style={{ color: "#FACC15" }}
                  >
                    ✓
                  </span>
                  <span
                    className="font-body text-sm"
                    style={{
                      color: leftHovered
                        ? "rgba(255,255,255,0.9)"
                        : "rgba(255,255,255,0.7)",
                      transition: "color 0.3s ease",
                    }}
                  >
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
            onMouseEnter={() => setRightHovered(true)}
            onMouseLeave={() => setRightHovered(false)}
            className="rounded-2xl p-8 flex flex-col relative overflow-hidden cursor-default"
            style={{
              background: rightHovered
                ? "linear-gradient(145deg, #1A0C05 0%, #2C1A0E 40%, #3D2314 100%)"
                : "linear-gradient(145deg, #2C1A0E 0%, #3D2314 50%, #52300F 100%)",
              border: rightHovered
                ? "1px solid rgba(201,162,39,0.6)"
                : "1px solid rgba(201,162,39,0.3)",
              boxShadow: rightHovered
                ? "0 24px 64px rgba(0,0,0,0.5)"
                : "0 8px 32px rgba(0,0,0,0.3)",
              transition: "all 0.3s ease",
            }}
          >
            {/* Free badge */}
            <div
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                background: "rgba(201,162,39,0.15)",
                border: "0.5px solid rgba(201,162,39,0.5)",
                borderRadius: "9999px",
                padding: "4px 14px",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#FACC15",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Included Free
              </span>
            </div>

            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
              style={{
                background: rightHovered
                  ? "rgba(201,162,39,0.2)"
                  : "rgba(201,162,39,0.1)",
                transition: "background 0.3s ease",
              }}
            >
              <Database
                className="w-6 h-6"
                style={{
                  color: rightHovered ? "#FACC15" : "#C9A227",
                  transition: "color 0.3s ease",
                }}
              />
            </div>

            <span
              className="text-xs font-body font-semibold tracking-widest uppercase mb-2"
              style={{ color: "#C9A227" }}
            >
              Invari ERP
            </span>

            <h3
              className="font-heading text-2xl font-bold mb-3"
              style={{ color: "#fff" }}
            >
              Compliance-Native ERP
            </h3>

            <p
              className="font-body text-sm leading-relaxed mb-6"
              style={{
                color: rightHovered
                  ? "rgba(255,220,180,0.8)"
                  : "rgba(255,220,180,0.6)",
                transition: "color 0.3s ease",
              }}
            >
              A full enterprise resource planning layer gated behind the same
              compliance engine. Scaling your operation doesn't create new
              compliance exposure — every ERP action is governed by the same
              rules.
            </p>

            {/* ERP module chips */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {erpModules.map(({ icon: Icon, label }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-xl px-3 py-2.5"
                  style={{
                    background: "rgba(0,0,0,0.25)",
                    border: "0.5px solid rgba(201,162,39,0.2)",
                    transition: "border-color 0.3s ease",
                  }}
                >
                  <Icon
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: "#C9A227" }}
                  />
                  <span
                    className="font-body text-xs font-medium leading-tight"
                    style={{ color: "rgba(255,220,180,0.75)" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Competitor callout */}
            <div
              className="mt-auto rounded-xl p-4"
              style={{
                background: "rgba(0,0,0,0.3)",
                border: "0.5px solid rgba(201,162,39,0.25)",
              }}
            >
              <p
                className="font-body text-xs leading-relaxed"
                style={{ color: "rgba(255,220,180,0.6)" }}
              >
                <span className="font-semibold" style={{ color: "#fff" }}>
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
