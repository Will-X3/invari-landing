import React from 'react';
import { motion } from "framer-motion";

const metrics = [
  { value: "90%", label: "Reduction in Compliance Errors" },
  { value: "50%", label: "Less Training Time Required" },
  { value: "100%", label: "Lifecycle Traceability" },
  { value: "24/7", label: "Audit-Ready at All Times" },
];

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
          <span className="text-xs font-body font-semibold text-primary tracking-widest uppercase">By the Numbers</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-foreground">
            Measurable Compliance Impact
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center bg-card border border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <p className="font-heading text-5xl font-bold text-primary">{m.value}</p>
              <p className="font-body text-sm font-medium text-muted-foreground mt-3">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}