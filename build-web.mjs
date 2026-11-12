// Copies the web app into www/ for Capacitor (iOS and Android builds).
import { cpSync, mkdirSync, rmSync } from "node:fs";
rmSync("www", { recursive: true, force: true });
mkdirSync("www", { recursive: true });
for (const f of ["index.html", "manifest.webmanifest", "sw.js"]) cpSync(f, `www/${f}`);
cpSync("icons", "www/icons", { recursive: true });
console.log("Copied the app into www/");
