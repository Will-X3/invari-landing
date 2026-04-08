import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Differentiation() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-body font-semibold text-primary tracking-widest uppercase">The Difference</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-foreground leading-tight">
              Not Another Compliance Tool —{' '}
              <span className="text-primary">A Compliance Engine</span>
            </h2>
            <p className="mt-6 text-lg font-body text-muted-foreground leading-relaxed">
              Most systems record actions. Invari prevents invalid ones. Instead of detecting errors after they happen, Invari blocks them before they exist.
            </p>
            <p className="mt-4 text-base font-body text-foreground/80 leading-relaxed">
              That difference is what makes compliance reliable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                <span className="font-body text-sm font-semibold text-muted-foreground">Traditional Tools</span>
              </div>
              <div className="space-y-2">
                {["Record actions after they happen", "Detect errors in post-review", "Rely on user training", "Generate reports from flawed data"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-body text-muted-foreground">
                    <span className="text-destructive">✗</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border-2 border-primary/30 rounded-2xl p-6 shadow-lg shadow-primary/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="font-body text-sm font-semibold text-primary">Invari</span>
              </div>
              <div className="space-y-2">
                {["Validate actions before they execute", "Block errors before they exist", "Guide users to valid actions only", "Produce audit-ready records by design"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-body text-foreground">
                    <span className="text-primary">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}