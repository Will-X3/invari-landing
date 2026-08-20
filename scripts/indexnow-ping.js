// scripts/indexnow-ping.js
//
// Run this after every deploy (or wire into your CI/Vercel deploy hook).
// Notifies IndexNow-participating engines (Bing, Yandex, etc.) that your
// pages changed, so they recrawl immediately instead of waiting for their
// normal cycle. This does NOT directly notify Google (they don't support
// IndexNow) but Bing's index feeds ChatGPT Search and other AI tools.
//
// SETUP (one-time):
// 1. Get your key from Bing Webmaster Tools -> IndexNow section
//    (or generate any random hex string yourself, IndexNow doesn't
//    require Bing-issued keys specifically).
// 2. Create a file at public/<your-key>.txt containing just the key
//    itself as plain text. It must be reachable at
//    https://www.invari.app/<your-key>.txt after deploy.
// 3. Set INDEXNOW_KEY below (or via env var) to match.

const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "REPLACE_WITH_YOUR_KEY";
const HOST = "www.invari.app";
const URLS = ["https://www.invari.app/"];

async function ping() {
  if (INDEXNOW_KEY === "REPLACE_WITH_YOUR_KEY") {
    console.warn(
      "IndexNow: no key set (INDEXNOW_KEY env var or edit script). Skipping ping."
    );
    return;
  }

  const body = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
    urlList: URLS,
  };

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      console.log(`IndexNow: pinged successfully (${res.status})`);
    } else {
      console.warn(`IndexNow: ping returned ${res.status}`);
    }
  } catch (err) {
    // Non-fatal — don't fail the deploy over a notification ping.
    console.warn("IndexNow: ping failed (non-fatal):", err.message);
  }
}

ping();
