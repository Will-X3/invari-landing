import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Does this replace my bound book?",
    a: "Yes — Invari serves as your digital bound book, maintaining every acquisition and disposition record required under ATF regulations. But it goes further: both parties' records are updated simultaneously on a transfer, history is immutable and cryptographically verifiable, and every entry was validated before it was written. If an ATF inspector asks for records, every firearm has a complete, tamper-evident lifecycle history available instantly — not reconstructed from spreadsheets."
  },
  {
    q: "What happens if ATF regulations change?",
    a: "Policy bundles are versioned independently of the core infrastructure. When regulations change, the bundle updates and classifications are recertified — at no additional cost to you beyond Policy Bundle Subscription regardless of tier. Your system enforces current law automatically. You don't chase regulatory updates or retrain staff. The engine does it."
  },
  {
    q: "We already have an ERP. Do we have to replace it?",
    a: "The pilot runs alongside your existing systems — no disruption, no forced cutover. You run Invari on a defined asset subset while your current workflow continues unchanged. After the audit cycle, the comparison speaks for itself. If you proceed, Invari's compliance-native ERP replaces your existing system entirely — and given it's included at no additional charge, most operators find it an easy decision."
  },
  {
    q: "What if Invari goes away — do we lose our compliance records?",
    a: "No. The ledger export architecture produces cryptographically verifiable, self-contained snapshots that are independently verifiable without Invari's involvement. You hold a legally defensible copy of your compliance record at any time. Operators are never placed in regulatory jeopardy by a billing dispute or platform availability issue. Read access and ledger data are retained regardless of payment status — federal retention requirements don't bend to billing cycles."
  },
  {
    q: "Can I take my full compliance history with me — and verify it without you?",
    a: "Yes — and this is a patent claim, not a marketing promise. The portable full-chain export produces a self-contained snapshot of your complete compliance history: every accepted transition, every blocked attempt, every enforcement artifact, all hash-chained in sequence. The export reconstructs your entire ledger independently of Invari's systems. You can verify the cryptographic chain yourself, present it to an ATF inspector, or hand it to your legal counsel — without our involvement, our servers, or our continued existence as a company. We are not the custodian of your records. You are. We built it that way on purpose."
  },
  {
    q: "How does the pilot actually work?",
    a: "Invari runs in parallel alongside your existing systems on a defined asset subset — your current workflow is completely unchanged. The founding team is physically onsite through your full audit cycle. Single-click bulk import via your existing bound book export. Domain licensing and boundary fees apply only to the subset. If the audit cycle doesn't prove it, you don't proceed. There is no commitment, no disruption, and no compliance exposure."
  },
  {
    q: "How does Invari handle ambiguous or conflicting ATF rules?",
    a: "Under K=STRICT, all policy ambiguity and inter-policy conflict always resolve to the most restrictive valid interpretation — never the lenient default that creates liability. Regulatory sections that require human judgment are classified as interpretive and surface as affirmation gates before the action proceeds. Invari does not interpret law. It executes certified classifications and makes ambiguity visible before it becomes your problem."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

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
            Questions We Actually Get
          </h2>
          <p className="mt-4 text-lg font-body text-muted-foreground max-w-xl mx-auto">
            From operators who've been burned by compliance tools that promised more than they delivered.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-card border rounded-xl overflow-hidden transition-colors duration-200"
              style={{
                borderColor: openIndex === i ? "rgba(201,162,39,0.3)" : undefined,
              }}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-body font-semibold text-foreground text-sm leading-snug">
                  {faq.q}
                </span>
                <ChevronDown
                  className="flex-shrink-0 w-4 h-4 text-muted-foreground transition-transform duration-200"
                  style={{ transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <p className="font-body text-sm text-muted-foreground leading-relaxed px-6 pb-5">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
