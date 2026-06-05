import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, FileX, Clock } from "lucide-react";

const consequences = [
  {
    icon: AlertTriangle,
    stat: "$50K–$200K",
    label:
      "A single ATF enforcement finding — remediation costs, legal exposure, or loss of licensure entirely.",
  },
  {
    icon: FileX,
    stat: "After the fact.",
    label:
      "Every existing compliance tool works the same way: allow the action, assess compliance later. The bad entry is already written before anyone catches it.",
  },
  {
    icon: Clock,
    stat: "Too late.",
    label:
      "By the time an inspector is on-site, a quarterly audit surfaces an error, or a transfer is flagged — the damage is done. You cannot unwind a completed action.",
  },
];

export default function PainPoints() {
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
            The Problem
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-foreground">
            Every Compliance Tool Works{" "}
            <span className="text-destructive">the Same Broken Way</span>
          </h2>
          <p className="mt-4 text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            They don't prevent violations. They document them — after they've
            already happened. That's not compliance infrastructure. That's a
            paper trail for when things go wrong.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {consequences.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-card border border-border rounded-2xl p-8 flex flex-col hover:border-destructive/20 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-destructive/10 flex items-center justify-center mb-6">
                <item.icon className="w-5 h-5 text-destructive" />
              </div>
              <p className="font-heading text-2xl font-bold text-foreground mb-3">
                {item.stat}
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Pivot line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div
            style={{
              background: "rgba(201,162,39,0.05)",
              border: "0.5px solid rgba(201,162,39,0.2)",
              borderRadius: "16px",
              padding: "32px 40px",
            }}
          >
            <p className="font-heading text-xl font-bold text-foreground mb-2">
              The absence of enforcement environments — not the absence of
              compliance tools — is what creates systemic risk.
            </p>
            <p className="font-body text-sm text-muted-foreground">
              Existing systems document activity. Invari governs legality at the
              moment of execution.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
