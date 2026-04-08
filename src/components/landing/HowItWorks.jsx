import React from 'react';
import { motion } from "framer-motion";
import { Package, Navigation, Lock } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Package,
    title: "Register the Asset",
    desc: "Every regulated firearm exists as a serialized asset with lifecycle identity. From the moment it enters your system, it has a traceable, immutable record.",
  },
  {
    num: "02",
    icon: Navigation,
    title: "Follow Guided Workflows",
    desc: "Users are shown only valid next actions. Compliance steps occur in the correct order automatically — no guesswork, no mistakes.",
  },
  {
    num: "03",
    icon: Lock,
    title: "Maintain Immutable History",
    desc: "Every action becomes part of a tamper-evident lifecycle ledger. Audit readiness is built in — not bolted on.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-body font-semibold text-primary tracking-widest uppercase">How It Works</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-foreground">
            Three Steps to Unbreakable Compliance
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-12 h-px bg-border z-0" style={{ transform: 'translateX(-1.5rem)' }} />
              )}
              <div className="relative bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <span className="font-heading text-5xl font-bold text-primary/15">{step.num}</span>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mt-4 mb-5">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}