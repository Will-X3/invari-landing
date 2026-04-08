import React from 'react';
import { motion } from "framer-motion";
import { FileCheck, Lock, Workflow, ShieldAlert, Link2 } from "lucide-react";

const trustItems = [
  { icon: FileCheck, label: "Audit-Ready Records" },
  { icon: Lock, label: "Immutable History" },
  { icon: Workflow, label: "Lifecycle Enforcement" },
  { icon: ShieldAlert, label: "Policy Validation" },
  { icon: Link2, label: "Chain-of-Custody Continuity" },
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
          className="text-center mb-12"
        >
          <span className="text-xs font-body font-semibold text-primary tracking-widest uppercase">Trust & Integrity</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-foreground">
            Built on Uncompromising Standards
          </h2>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3 hover:border-primary/30 transition-all duration-300"
            >
              <item.icon className="w-5 h-5 text-primary" />
              <span className="font-body text-sm font-medium text-foreground">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}