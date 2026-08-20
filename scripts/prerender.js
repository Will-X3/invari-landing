// scripts/prerender.js
//
// Runs after `vite build`. Serves the built dist/ folder locally, opens it
// in a headless browser, waits for React to render, then overwrites
// dist/index.html with the fully-rendered HTML. This is what lets crawlers
// (AI bots included) see real content instead of an empty <div id="root">.
//
// React still rehydrates normally in real browsers — this only changes
// what's in the initial HTML payload, not how the app behaves for users.

import { chromium } from "playwright";
import { createServer } from "http-server";
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "..", "dist");
const PORT = 4321;

// Add every real route here. Right now that's just "/".
// If you add routes to App.jsx later, add them here too.
const ROUTES = ["/"];

async function main() {
  const server = createServer({ root: distDir });
  await new Promise((resolve) => server.listen(PORT, resolve));

  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const route of ROUTES) {
    const url = `http://localhost:${PORT}${route}`;
    await page.goto(url, { waitUntil: "networkidle" });

    // Give React a moment past networkidle for any final render/hydration.
    await page.waitForTimeout(500);

    const html = await page.content();

    const outPath =
      route === "/"
        ? path.join(distDir, "index.html")
        : path.join(distDir, route.replace(/^\//, ""), "index.html");

    writeFileSync(outPath, html);
    console.log(`Prerendered: ${route} -> ${outPath}`);
  }

  await browser.close();
  server.close();
}

main().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
