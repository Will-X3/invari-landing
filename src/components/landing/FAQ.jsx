import React from 'react';
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does Invari prevent compliance errors?",
    a: "Invari enforces compliance at the moment actions occur. Instead of detecting errors after they happen, the system validates every action against lifecycle rules and policy constraints before it is accepted. Invalid transitions are blocked automatically — users can only perform actions that are legally and procedurally valid."
  },
  {
    q: "Can it support multiple locations?",
    a: "Yes. Invari is designed for multi-location operations. Each location maintains its own compliance state while sharing centralized policy rules and reporting. Custody tracking works seamlessly across locations."
  },
  {
    q: "How does the audit trail work?",
    a: "Every event is recorded with cryptographic continuity into an immutable ledger. History cannot be silently altered. When an auditor requests records, every firearm has a complete, tamper-evident lifecycle history available instantly."
  },
  {
    q: "Does this replace my bound book?",
    a: "Invari is designed to serve as your digital compliance record system. It maintains all the information traditionally kept in bound books, but with the added benefits of lifecycle enforcement, immutable history, and instant audit readiness."
  },
  {
    q: "How does the lifecycle engine work?",
    a: "The lifecycle engine defines every valid state a firearm can exist in and every valid transition between states. When a user attempts an action, the engine validates it against the current state, applicable policies, and custody requirements. Only valid actions are permitted — invalid ones are blocked before they can enter the system."
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-body font-semibold text-primary tracking-widest uppercase">FAQ</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-foreground">
            Common Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors">
                <AccordionTrigger className="font-body font-semibold text-foreground text-left py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}