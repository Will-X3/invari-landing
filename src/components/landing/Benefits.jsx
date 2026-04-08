import React from 'react';
import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, Users, Link2, Ban, FileText, Award } from "lucide-react";

const benefits = [
  { icon: CheckCircle, title: "Pass Audits With Confidence" },
  { icon: ShieldCheck, title: "Eliminate Manual Compliance Errors" },
  { icon: Users, title: "Reduce Staff Training Burden" },
  { icon: Link2, title: "Maintain Perfect Chain-of-Custody" },
  { icon: Ban, title: "Prevent Invalid Transfers" },
  { icon: FileText, title: "Generate Audit-Ready Records Instantly" },
  { icon: Award, title: "Maintain Regulatory Confidence" },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-body font-semibold text-primary tracking-widest uppercase">Merchant Outcomes</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-foreground">
            What Invari Delivers
          </h2>
          <p className="mt-4 text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Measurable outcomes that protect your business, your license, and your peace of mind.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex flex-col items-center text-center bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <b.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-base font-bold text-foreground">{b.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}