import React from "react";
import { motion } from "framer-motion";

const rows = [
  {
    dimension: "Enforcement timing",
    traditional: "After the fact",
    invari: "Before persistence",
    invariDetail:
      "Invalid actions are blocked before any record is written — not flagged in a review cycle.",
  },
  {
    dimension: "Bound book entries",
    traditional: "Manual, error-prone",
    invari: "Automatic, both parties",
    invariDetail:
      "Transfers update both acquisition and disposition records simultaneously — correct and complete in 15 seconds.",
  },
  {
    dimension: "ERP system",
    traditional: "$8,000–$15,000/mo separate cost",
    invari: "Included free",
    invariDetail:
      "Every operational function — inventory, transfers, personnel, orders — governed by the same compliance engine at no additional charge.",
  },
  {
    dimension: "Audit record",
    traditional: "Log of what occurred",
    invari: "Proof of what was enforced",
    invariDetail:
      "Immutable, cryptographically hash-chained artifacts with full policy execution trace. Not a log — a proof.",
  },
  {
    dimension: "Policy conflict resolution",
    traditional: "Staff interpretation",
    invari: "Always most restrictive valid outcome",
    invariDetail:
      "Ambiguity never defaults to lenient. K=STRICT ensures conflicting rules resolve to the most restrictive valid interpretation — every time.",
  },
];

export default function Differentiation() {
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
            The Difference
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-foreground leading-tight">
            Not Another Compliance Tool —{" "}
            <span className="text-primary">A Compliance Engine</span>
          </h2>
          <p className="mt-4 text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Every existing tool works the same way: allow the action, assess
            compliance after. Invari is a categorically different architecture.
          </p>
        </motion.div>

        {/* Table header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-3 gap-4 mb-3 px-2"
        >
          <div />
          <div className="text-center">
            <span className="font-body text-xs font-semibold text-muted-foreground tracking-widest uppercase">
              Traditional Tools
            </span>
          </div>
          <div className="text-center">
            <span className="font-body text-xs font-semibold text-primary tracking-widest uppercase">
              Invari
            </span>
          </div>
        </motion.div>

        {/* Rows */}
        <div className="space-y-3">
          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="grid grid-cols-3 gap-4 items-start bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/20 transition-all duration-300"
            >
              {/* Dimension */}
              <div className="px-6 py-5 border-r border-border">
                <span className="font-body text-sm font-semibold text-foreground">
                  {row.dimension}
                </span>
              </div>

              {/* Traditional */}
              <div className="px-6 py-5 border-r border-border flex items-start gap-2">
                <span className="text-destructive mt-0.5 flex-shrink-0">✗</span>
                <span className="font-body text-sm text-muted-foreground">
                  {row.traditional}
                </span>
              </div>

              {/* Invari */}
              <div
                className="px-6 py-5 flex flex-col gap-1"
                style={{ background: "rgba(201,162,39,0.03)" }}
              >
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                  <span className="font-body text-sm font-semibold text-foreground">
                    {row.invari}
                  </span>
                </div>
                <p className="font-body text-xs text-muted-foreground leading-relaxed pl-5">
                  {row.invariDetail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
