import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileCheck,
  Users,
  Lock,
  Scale,
  HardDriveDownload,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Your License Is Protected by Architecture",
    desc: "An ATF enforcement finding doesn't just cost money — it can end your business. Invari makes the class of errors that trigger findings structurally impossible. Not harder to make. Impossible.",
    stat: "$50K–$200K",
    statLabel: "average remediation cost per finding",
  },
  {
    icon: FileCheck,
    title: "Audit Readiness Is a Side Effect, Not a Project",
    desc: "Every lifecycle event writes itself to an immutable, tamper-evident ledger with a full enforcement trace. When an inspector arrives, you don't scramble — you export. Your compliance record exists because the system runs.",
    stat: "Zero",
    statLabel: "manual reconciliation required",
  },
  {
    icon: Users,
    title: "Training Is 'If You See It, Click It'",
    desc: "The UI only surfaces actions that are valid for that entity, that user, at that moment. Capabilities are gated by both entity type and user authority — there are no wrong buttons to press because the wrong buttons don't exist on screen.",
    stat: "Near zero",
    statLabel: "training overhead",
  },
  {
    icon: Lock,
    title: "The System Fails Closed by Default",
    desc: "Invari's posture is conservative resolution at every layer — ambiguity, conflict, and uncertainty all produce the same outcome: the most restrictive valid result, or a structural halt. The system never silently defaults to permissive.",
    stat: "Always",
    statLabel: "most restrictive valid outcome",
  },
  {
    icon: Scale,
    title:
      "The Only Attack Surface Is Social Engineering — and Even That Is Governed",
    desc: "The enforcement engine exposes no API or external attack surface. Every employee action is gated by DCP-RBAC authority. Even if someone is deceived into acting, their authority boundary is enforced by the system before any state change occurs.",
    stat: "Zero",
    statLabel: "exposed enforcement API surface",
  },
  {
    icon: HardDriveDownload,
    title: "Your Records Are Always Yours",
    desc: "Full portable chain export — a cryptographically verifiable, self-contained snapshot of your entire compliance history that reconstructs independently of Invari. Present it to any inspector, at any time, without us.",
    stat: "100%",
    statLabel: "operator-owned, independently verifiable",
  },
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
          <span className="text-xs font-body font-semibold text-primary tracking-widest uppercase">
            Operator Outcomes
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-foreground">
            What Changes When Compliance{" "}
            <span className="text-primary">Cannot Break</span>
          </h2>
          <p className="mt-4 text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Not features. The actual operational reality once the enforcement
            engine is running.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card border border-border rounded-2xl p-7 hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <b.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-right">
                  <p className="font-heading text-xl font-bold text-primary leading-none">
                    {b.stat}
                  </p>
                  <p className="font-body text-xs text-muted-foreground mt-1 leading-tight">
                    {b.statLabel}
                  </p>
                </div>
              </div>
              <h3 className="font-heading text-base font-bold text-foreground mb-3">
                {b.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
