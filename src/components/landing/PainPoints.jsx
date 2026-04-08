import React from 'react';
import { motion } from "framer-motion";
import { AlertTriangle, FileX, Link2Off, Users, FileWarning, Package, Clock, Search, Ban } from "lucide-react";

const painPoints = [
  { icon: AlertTriangle, text: "Fear of ATF audits" },
  { icon: FileX, text: "Manual recordkeeping errors" },
  { icon: Link2Off, text: "Broken chain-of-custody records" },
  { icon: Users, text: "Staff training mistakes" },
  { icon: FileWarning, text: "Missing 4473 or NICS sequencing" },
  { icon: Package, text: "Inventory mismatches" },
  { icon: Clock, text: "Time-consuming compliance workflows" },
  { icon: Search, text: "Difficulty proving history during audits" },
  { icon: Ban, text: "Risk of invalid transfers or lifecycle mistakes" },
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
          <span className="text-xs font-body font-semibold text-primary tracking-widest uppercase">The Problem</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-foreground">
            Compliance Shouldn't Keep You Up at Night
          </h2>
          <p className="mt-4 text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            FFLs face an impossible standard: perfect records, zero errors, constant readiness. Most tools don't help — they just digitize the same broken process.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                <point.icon className="w-5 h-5 text-destructive" />
              </div>
              <span className="font-body text-sm font-medium text-foreground">{point.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}