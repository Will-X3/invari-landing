import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import sitemap from "vite-plugin-sitemap";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://invari.app",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
