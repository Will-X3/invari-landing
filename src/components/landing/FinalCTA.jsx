import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import { motion } from "framer-motion";
import DemoRequestModal from "@/components/DemoRequestModal";

export default function FinalCTA() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <>
      <section className="py-24 lg:py-32 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Shield Icon */}
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
              <Shield className="w-8 h-8 text-primary" />
            </div>

            {/* Heading */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Ready for Compliance That{" "}
              <span className="text-primary">Cannot Break?</span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg font-body text-muted-foreground max-w-xl mx-auto">
              See how Invari prevents compliance errors before they happen.
            </p>

            {/* CTA Button */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => setDemoOpen(true)}
                className="font-body font-semibold bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 h-14 text-base shadow-lg shadow-primary/25"
              >
                Request a Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal (Required for button to work) */}
      <DemoRequestModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
}
