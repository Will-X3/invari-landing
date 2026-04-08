import React from "react";
import InvariLogo from "@/assets/InvariLogo.png";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={InvariLogo}
              alt="Invari Logo"
              className="h-8 w-auto object-contain"
            />
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 flex-wrap justify-center">
            <a
              href="#features"
              className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>

            <a
              href="#how-it-works"
              className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </a>

            <a
              href="#benefits"
              className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
            >
              Benefits
            </a>

            <a
              href="#faq"
              className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm font-body text-muted-foreground text-center md:text-right">
            © {new Date().getFullYear()} Invari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
