import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import InvariLogo from "../../assets/InvariLogo.png";
import DemoRequestModal from "@/components/DemoRequestModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Benefits", href: "#benefits" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <img
                src={InvariLogo}
                alt="Invari Logo"
                className="h-8 lg:h-10 w-auto object-contain"
              />
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Button */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                onClick={() => setDemoOpen(true)}
                className="font-body text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6"
              >
                Request Demo
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-background border-t border-border px-6 py-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm font-body font-medium text-muted-foreground py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <div className="flex flex-col gap-2 pt-2">
              <Button
                onClick={() => {
                  setMobileOpen(false);
                  setDemoOpen(true);
                }}
                className="font-body bg-primary text-primary-foreground rounded-full"
              >
                Request Demo
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Modal — placed outside nav for stability */}
      <DemoRequestModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
}
