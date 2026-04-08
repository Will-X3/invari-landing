import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ShieldCheck, Lock, FileCheck } from "lucide-react";
import { motion } from "framer-motion";
import DemoRequestModal from "@/components/DemoRequestModal";
import InvariLogo from "@/assets/InvariLogo.png"

export default function Hero() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-primary/8 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-xs font-body font-semibold text-primary tracking-wide uppercase">
                  Compliance-First Platform
                </span>
              </div>

              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground">
                Compliance That <span className="text-primary">Cannot</span>{" "}
                Break.
              </h1>

              <p className="mt-6 text-lg lg:text-xl font-body text-muted-foreground leading-relaxed max-w-xl">
                Invari enforces firearm lifecycle compliance automatically —
                preventing illegal actions before they happen and producing
                audit-ready records by design.
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                {/* Request Demo */}
                <Button
                  size="lg"
                  onClick={() => setDemoOpen(true)}
                  className="font-body font-semibold bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-13 text-base shadow-lg shadow-primary/25"
                >
                  Request Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>

                {/* Secondary Button */}
                <Button
                  variant="outline"
                  size="lg"
                  className="font-body font-semibold rounded-full px-8 h-13 text-base border-border hover:bg-secondary"
                >
                  <Play className="mr-2 w-4 h-4" />
                  See How It Works
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 flex items-center gap-8 text-sm font-body text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-primary" />
                  <span>Immutable Records</span>
                </div>

                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-primary" />
                  <span>Audit-Ready</span>
                </div>

                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>ATF Compliant</span>
                </div>
              </div>
            </motion.div>

            {/* Right Dashboard Mock */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Main Dashboard */}
                <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl shadow-primary/10 p-6 relative z-10">
                  {/* Window Header */}
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />

                    <div className="flex items-center gap-2 ml-3">
                      <img
                        src={InvariLogo}
                        alt="Invari"
                        className="h-4 w-auto object-contain"
                      />
                      <span className="text-xs font-medium text-gray-500">
                        .Core Intelligence Dashboard
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Lifecycle Status */}
                    <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-gray-900">
                          Lifecycle Status
                        </span>

                        <span className="text-xs font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full">
                          Active
                        </span>
                      </div>

                      {/* Step Indicators */}
                      <div className="flex gap-2">
                        {[
                          {
                            label: "Received",
                            color: "bg-blue-100 text-blue-700",
                          },
                          {
                            label: "Inspected",
                            color: "bg-indigo-100 text-indigo-700",
                          },
                          {
                            label: "In Stock",
                            color: "bg-green-100 text-green-700",
                          },
                          {
                            label: "Transfer",
                            color: "bg-gray-100 text-gray-500",
                          },
                        ].map((step) => (
                          <div
                            key={step.label}
                            className={`flex-1 text-center py-2 rounded-lg text-xs font-semibold ${step.color}`}
                          >
                            {step.label}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {/* Chain of Custody */}
                      <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                        <p className="text-xs text-gray-500 mb-1">
                          Chain of Custody
                        </p>

                        <p className="text-2xl font-bold text-gray-900">847</p>

                        <p className="text-xs text-green-600 mt-1 font-medium">
                          ✓ All verified
                        </p>
                      </div>

                      {/* Compliance Score */}
                      <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                        <p className="text-xs text-gray-500 mb-1">
                          Compliance Score
                        </p>

                        <p className="text-2xl font-bold text-gray-900">100%</p>

                        <p className="text-xs text-green-600 mt-1 font-medium">
                          ✓ Audit ready
                        </p>
                      </div>
                    </div>

                    {/* Policy Validation */}
                    <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-4">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-primary" />

                        <span className="text-xs font-semibold text-gray-900">
                          Policy Validation Active
                        </span>
                      </div>

                      <p className="text-xs text-gray-600 mt-1">
                        All transitions validated in real-time
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Live Badge */}
                <div className="absolute -top-4 -right-4 bg-white border border-gray-200 rounded-xl shadow-lg p-3 z-20">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

                    <span className="text-xs font-medium text-gray-900">
                      Live Enforcement
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <DemoRequestModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
}
