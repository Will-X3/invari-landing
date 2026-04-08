import React, { useState } from "react";
import { X, CheckCircle } from "lucide-react";

export default function DemoRequestModal({ open, onClose }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md px-4">
      {/* Modal Card */}
      <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl p-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-muted-foreground hover:text-foreground transition"
        >
          <X className="w-5 h-5" />
        </button>

        {!success ? (
          <>
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground">
                Request a Demo
              </h2>

              <p className="text-sm text-muted-foreground mt-2">
                Tell us about your business and we'll reach out shortly.
              </p>
            </div>

            {/* Form */}
            <form
              action="https://formspree.io/f/mojpbdgz"
              method="POST"
              onSubmit={() => setLoading(true)}
              className="space-y-4"
            >
              {/* Subject (hidden but useful) */}
              <input
                type="hidden"
                name="_subject"
                value="New Invari Demo Request"
              />

              {/* Company */}
              <div>
                <input
                  type="text"
                  name="company"
                  required
                  placeholder="Company Name"
                  className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Work Email Address"
                  className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Briefly describe your compliance workflow or needs..."
                  className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white rounded-full py-3 font-semibold hover:bg-primary/90 transition shadow-md shadow-primary/20"
              >
                {loading ? "Sending..." : "Request Demo"}
              </button>

              {/* Footer Text */}
              <p className="text-xs text-muted-foreground text-center mt-2">
                We'll contact you within 24 hours.
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-10">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />

            <h3 className="text-xl font-semibold mb-2">Demo Requested</h3>

            <p className="text-muted-foreground mb-6">
              We'll reach out to you shortly.
            </p>

            <button
              onClick={onClose}
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
