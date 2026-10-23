/**
 * Generates clearly-labelled DEMO placeholder imagery (SVG) for the
 * RK Air Duct demo site, in the brand's blue/green identity (taken from the
 * company logo). These are temporary engineering-style graphics, not real
 * product photos — replace the files in /public with real photos (same
 * filenames) when available.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, "..", "public");

const BLUE = "#1388C6";
const GREEN = "#54B23C";
const LINE = "#8FCBEB"; // soft blue line-work on dark
const LABEL = "#DCEBF6";

function ensure(p) {
  mkdirSync(dirname(p), { recursive: true });
}

function defs(id) {
  return `
  <defs>
    <linearGradient id="bg-${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0C2437"/>
      <stop offset="1" stop-color="#061320"/>
    </linearGradient>
    <linearGradient id="accent-${id}" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${BLUE}"/>
      <stop offset="1" stop-color="${GREEN}"/>
    </linearGradient>
    <radialGradient id="glow-${id}" cx="50%" cy="42%" r="55%">
      <stop offset="0" stop-color="${BLUE}" stop-opacity="0.22"/>
      <stop offset="0.6" stop-color="${GREEN}" stop-opacity="0.06"/>
      <stop offset="1" stop-color="#061320" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid-${id}" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0V40" fill="none" stroke="#ffffff" stroke-opacity="0.05" stroke-width="1"/>
    </pattern>
  </defs>`;
}

const motifs = {
  duct: (c) => `
    <g stroke="${c}" stroke-width="3" fill="none" stroke-linecap="round">
      <path d="M90 170 h120 l60 -40 h140 l60 40 h120"/>
      <path d="M90 230 h120 l60 40 h140 l60 -40 h120"/>
      <ellipse cx="90" cy="200" rx="18" ry="42"/>
      <ellipse cx="690" cy="200" rx="18" ry="42"/>
      <path d="M300 130 v140 M500 130 v140" stroke-opacity="0.5"/>
    </g>`,
  spiral: (c) => `
    <g stroke="${c}" stroke-width="3" fill="none">
      <ellipse cx="390" cy="200" rx="150" ry="90"/>
      <ellipse cx="390" cy="200" rx="150" ry="90" transform="rotate(8 390 200)" stroke-opacity="0.4"/>
      <path d="M240 200 q150 -60 300 0 M240 200 q150 60 300 0"/>
      <path d="M270 150 l-20 10 M330 128 l-18 14 M450 128 l18 14 M510 150 l20 10" stroke-opacity="0.6"/>
    </g>`,
  rect: (c) => `
    <g stroke="${c}" stroke-width="3" fill="none" stroke-linejoin="round">
      <rect x="250" y="120" width="260" height="160" rx="6"/>
      <path d="M250 120 l40 -34 h260 l-40 34 M510 120 l40 -34 v160 l-40 34"/>
      <path d="M300 150 h160 M300 190 h160 M300 230 h160" stroke-opacity="0.4"/>
    </g>`,
  round: (c) => `
    <g stroke="${c}" stroke-width="3" fill="none">
      <ellipse cx="300" cy="200" rx="26" ry="80"/>
      <path d="M300 120 h200 M300 280 h200"/>
      <ellipse cx="500" cy="200" rx="26" ry="80"/>
      <path d="M360 160 v80 M430 160 v80" stroke-opacity="0.4"/>
    </g>`,
  taper: (c) => `
    <g stroke="${c}" stroke-width="3" fill="none">
      <path d="M240 150 h120 l140 30 h60 M240 250 h120 l140 -30 h60"/>
      <ellipse cx="240" cy="200" rx="16" ry="50"/>
      <ellipse cx="560" cy="200" rx="10" ry="30"/>
    </g>`,
  hood: (c) => `
    <g stroke="${c}" stroke-width="3" fill="none" stroke-linejoin="round">
      <path d="M250 140 h260 l40 90 h-340 z"/>
      <path d="M360 140 v-40 h60 v40" />
      <path d="M230 230 h320 v30 h-320 z"/>
      <path d="M300 280 v30 M480 280 v30" stroke-opacity="0.5"/>
    </g>`,
  rack: (c) => `
    <g stroke="${c}" stroke-width="3" fill="none" stroke-linecap="round">
      <rect x="280" y="110" width="200" height="190" rx="4"/>
      <path d="M280 160 h200 M280 205 h200 M280 250 h200"/>
      <path d="M280 300 l-18 24 M480 300 l18 24 M280 110 l-18 -14 M480 110 l18 -14" stroke-opacity="0.5"/>
    </g>`,
  plate: (c) => `
    <g stroke="${c}" stroke-width="3" fill="none">
      <rect x="280" y="140" width="200" height="130" rx="4"/>
      <path d="M305 140 v130 M345 140 v130 M385 140 v130 M425 140 v130 M455 140 v130" stroke-opacity="0.5"/>
      <path d="M260 290 h240"/>
    </g>`,
  box: (c) => `
    <g stroke="${c}" stroke-width="3" fill="none" stroke-linejoin="round">
      <rect x="290" y="170" width="190" height="120" rx="4"/>
      <path d="M290 170 l40 -40 h190 l-40 40 M480 170 l40 -40 v120 l-40 40"/>
      <path d="M360 210 h50" stroke-opacity="0.6"/>
    </g>`,
  fryer: (c) => `
    <g stroke="${c}" stroke-width="3" fill="none" stroke-linejoin="round">
      <rect x="280" y="150" width="200" height="150" rx="6"/>
      <rect x="300" y="170" width="70" height="60" rx="3"/>
      <rect x="390" y="170" width="70" height="60" rx="3"/>
      <path d="M300 260 h160" stroke-opacity="0.5"/>
      <path d="M280 300 l-16 22 M480 300 l16 22"/>
    </g>`,
  fridge: (c) => `
    <g stroke="${c}" stroke-width="3" fill="none" stroke-linejoin="round">
      <rect x="310" y="110" width="150" height="200" rx="8"/>
      <path d="M385 110 v200" stroke-opacity="0.6"/>
      <path d="M360 150 v24 M410 150 v24"/>
    </g>`,
  blower: (c) => `
    <g stroke="${c}" stroke-width="3" fill="none">
      <circle cx="380" cy="200" r="85"/>
      <circle cx="380" cy="200" r="14"/>
      <path d="M380 200 L380 125 M380 200 L444 238 M380 200 L316 238" stroke-opacity="0.7"/>
      <path d="M465 160 h70 v80 h-55" />
    </g>`,
  inline: (c) => `
    <g stroke="${c}" stroke-width="3" fill="none" stroke-linejoin="round">
      <rect x="300" y="150" width="160" height="110" rx="10"/>
      <path d="M250 180 h50 M250 230 h50 M460 180 h50 M460 230 h50"/>
      <circle cx="380" cy="205" r="38"/>
      <path d="M380 205 L380 170 M380 205 L410 225 M380 205 L350 225" stroke-opacity="0.7"/>
    </g>`,
  grille: (c) => `
    <g stroke="${c}" stroke-width="3" fill="none" stroke-linecap="round">
      <rect x="265" y="130" width="230" height="150" rx="6"/>
      <path d="M285 158 h190 M285 186 h190 M285 214 h190 M285 242 h190" stroke-opacity="0.75"/>
      <path d="M470 150 l14 -10 M470 178 l14 -10 M470 206 l14 -10 M470 234 l14 -10" stroke-opacity="0.5"/>
    </g>`,
  damper: (c) => `
    <g stroke="${c}" stroke-width="3" fill="none">
      <rect x="270" y="130" width="220" height="150" rx="6"/>
      <g stroke-linecap="round">
        <path d="M295 160 l45 -22 M295 160 l45 22" transform="translate(0,0)"/>
      </g>
      <path d="M300 150 l40 20 M300 190 l40 20 M300 230 l40 20" stroke-opacity="0.8"/>
      <path d="M365 150 l40 20 M365 190 l40 20 M365 230 l40 20" stroke-opacity="0.8"/>
      <path d="M430 150 l40 20 M430 190 l40 20 M430 230 l40 20" stroke-opacity="0.8"/>
    </g>`,
  service: (c) => `
    <g stroke="${c}" stroke-width="3" fill="none" stroke-linecap="round">
      <path d="M250 150 h260 l40 90 h-340 z"/>
      <circle cx="420" cy="250" r="34"/>
      <path d="M444 274 l34 34" stroke-width="5"/>
      <path d="M300 300 l0 20 M360 300 l0 20" stroke-opacity="0.4"/>
    </g>`,
  facility: (c) => `
    <g stroke="${c}" stroke-width="3" fill="none" stroke-linejoin="round">
      <path d="M160 300 v-120 l90 -50 v60 l90 -50 v60 l90 -50 v150 z"/>
      <path d="M200 260 h40 v40 h-40z M290 260 h40 v40 h-40z M380 260 h40 v40 h-40z M470 230 h40 v70 h-40z" stroke-opacity="0.5"/>
    </g>`,
  hero: (c) => `
    <g stroke="${c}" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.9">
      <path d="M120 420 h160 l80 -60 h200 l80 60 h200"/>
      <path d="M120 520 h160 l80 60 h200 l80 -60 h200"/>
      <ellipse cx="120" cy="470" rx="22" ry="58"/>
      <ellipse cx="1040" cy="470" rx="22" ry="58"/>
      <path d="M440 360 v220 M680 360 v220" stroke-opacity="0.4"/>
    </g>`,
};

/** Fan-vortex emblem echoing the logo: alternating blue/green blades. */
function vortex(cx, cy, r, op = 1) {
  let blades = "";
  const colors = [BLUE, GREEN, BLUE, GREEN];
  for (let i = 0; i < 4; i++) {
    const a = (i * Math.PI) / 2;
    const x1 = cx + Math.cos(a) * r * 0.22;
    const y1 = cy + Math.sin(a) * r * 0.22;
    const x2 = cx + Math.cos(a) * r;
    const y2 = cy + Math.sin(a) * r;
    const cxp = cx + Math.cos(a + 0.9) * r * 0.78;
    const cyp = cy + Math.sin(a + 0.9) * r * 0.78;
    const x3 = cx + Math.cos(a + Math.PI / 2) * r * 0.22;
    const y3 = cy + Math.sin(a + Math.PI / 2) * r * 0.22;
    blades += `<path d="M${x1} ${y1} Q ${cxp} ${cyp} ${x2} ${y2} Q ${
      cx + Math.cos(a + 1.5) * r * 0.6
    } ${cy + Math.sin(a + 1.5) * r * 0.6} ${x3} ${y3} Z" fill="${colors[i]}" fill-opacity="${
      0.9 * op
    }"/>`;
  }
  return `<g>${blades}<circle cx="${cx}" cy="${cy}" r="${r * 0.14}" fill="#fff" fill-opacity="${
    0.9 * op
  }"/></g>`;
}

function tag(label) {
  return `
    <g transform="translate(24,24)">
      <rect x="0" y="0" width="86" height="24" rx="4" fill="url(#accent-tag)"/>
      <text x="43" y="16" font-family="Arial, sans-serif" font-size="12" font-weight="700"
        letter-spacing="1.5" fill="#ffffff" text-anchor="middle">DEMO</text>
    </g>
    <defs><linearGradient id="accent-tag" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${BLUE}"/><stop offset="1" stop-color="${GREEN}"/>
    </linearGradient></defs>`;
}

function wrapLabel(label, max = 22) {
  const words = label.split(" ");
  const lines = [];
  let cur = "";
  for (const w of words) {
    if ((cur + " " + w).trim().length > max) {
      lines.push(cur.trim());
      cur = w;
    } else cur += " " + w;
  }
  if (cur.trim()) lines.push(cur.trim());
  return lines.slice(0, 3);
}

function escapeXml(s) {
  return s.replace(/[<>&'"]/g, (c) =>
    ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" }[c])
  );
}

function productSvg(label, motifKey) {
  const id = motifKey + Math.random().toString(36).slice(2, 6);
  const motif = (motifs[motifKey] || motifs.duct)(LINE);
  const lines = wrapLabel(label);
  const startY = 358 - (lines.length - 1) * 13;
  const text = lines
    .map(
      (l, i) =>
        `<text x="400" y="${startY + i * 28}" font-family="Arial, sans-serif" font-size="20" font-weight="600" fill="${LABEL}" text-anchor="middle">${escapeXml(
          l
        )}</text>`
    )
    .join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600" role="img" aria-label="${escapeXml(
    label
  )} — demo image">
  ${defs(id)}
  <rect width="800" height="600" fill="url(#bg-${id})"/>
  <rect width="800" height="600" fill="url(#grid-${id})"/>
  <rect width="800" height="600" fill="url(#glow-${id})"/>
  <rect x="0" y="0" width="800" height="6" fill="url(#accent-${id})"/>
  <g transform="translate(0,20)">${motif}</g>
  ${text}
  <line x1="340" y1="312" x2="460" y2="312" stroke="url(#accent-${id})" stroke-width="2"/>
  ${tag(label)}
</svg>`;
}

function categorySvg(label, motifKey) {
  const id = "cat-" + motifKey + Math.random().toString(36).slice(2, 5);
  const motif = (motifs[motifKey] || motifs.duct)(LINE);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500" role="img" aria-label="${escapeXml(
    label
  )} — demo image">
  ${defs(id)}
  <rect width="800" height="500" fill="url(#bg-${id})"/>
  <rect width="800" height="500" fill="url(#grid-${id})"/>
  <rect width="800" height="500" fill="url(#glow-${id})"/>
  <rect x="0" y="0" width="6" height="500" fill="url(#accent-${id})"/>
  <g transform="translate(0,20)">${motif}</g>
  ${tag(label)}
</svg>`;
}

function heroSvg() {
  const id = "hero";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800" role="img" aria-label="Industrial ducting — demo image">
  ${defs(id)}
  <rect width="1200" height="800" fill="url(#bg-${id})"/>
  <rect width="1200" height="800" fill="url(#grid-${id})"/>
  <rect width="1200" height="800" fill="url(#glow-${id})"/>
  ${motifs.hero(LINE)}
  ${vortex(900, 220, 120, 0.5)}
</svg>`;
}

function swirlSvg() {
  // standalone rotating emblem for hero background
  return `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600" role="img" aria-label="">
  <defs><radialGradient id="sg" cx="50%" cy="50%" r="50%">
    <stop offset="0" stop-color="#1388C6" stop-opacity="0.0"/>
    <stop offset="1" stop-color="#1388C6" stop-opacity="0.0"/>
  </radialGradient></defs>
  ${vortex(300, 300, 240, 1)}
  <g opacity="0.5">${vortex(300, 300, 150, 1)}</g>
</svg>`;
}

function bannerSvg(name, label, motifKey, w = 1200, h = 640) {
  const id = name + Math.random().toString(36).slice(2, 5);
  const motif = (motifs[motifKey] || motifs.facility)(LINE);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${escapeXml(
    label
  )} — demo image">
  ${defs(id)}
  <rect width="${w}" height="${h}" fill="url(#bg-${id})"/>
  <rect width="${w}" height="${h}" fill="url(#grid-${id})"/>
  <rect width="${w}" height="${h}" fill="url(#glow-${id})"/>
  <g transform="translate(${w / 2 - 400},${h / 2 - 320}) scale(1.1)">${motif}</g>
  ${tag(label)}
</svg>`;
}

function ogSvg() {
  const id = "og";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-label="RK Air Duct">
  ${defs(id)}
  <rect width="1200" height="630" fill="url(#bg-${id})"/>
  <rect width="1200" height="630" fill="url(#grid-${id})"/>
  <rect width="1200" height="630" fill="url(#glow-${id})"/>
  ${vortex(980, 300, 170, 0.85)}
  <g transform="translate(90,250)">
    <text x="0" y="40" font-family="Arial" font-size="56" font-weight="800" fill="#ffffff">R K AIR DUCT</text>
    <rect x="2" y="60" width="150" height="5" fill="url(#accent-${id})"/>
    <text x="2" y="104" font-family="Arial" font-size="24" fill="${LINE}">Industrial Ducting &amp; Commercial Kitchen Fabrication · Nashik</text>
  </g>
</svg>`;
}

/* ---- data ---- */
const products = [
  ["industrial-air-cooling-duct", "Industrial Air Cooling Duct", "duct"],
  ["gi-round-spiral-duct", "GI Round Spiral Duct", "spiral"],
  ["industrial-rectangular-air-duct-system", "Industrial Rectangular Air Duct System", "rect"],
  ["industrial-round-air-duct-system", "Industrial Round Air Duct System", "round"],
  ["gi-round-taper-duct", "GI Round Taper Duct", "taper"],
  ["wall-mounted-exhaust-hood", "Wall Mounted Exhaust Hood", "hood"],
  ["kitchen-stainless-steel-exhaust-hood", "Kitchen Stainless Steel Exhaust Hood", "hood"],
  ["aluminium-air-deflection-grill", "Aluminium Air Deflection Grill", "grille"],
  ["volume-control-damper", "Volume Control Damper", "damper"],
  ["centrifugal-blower-fan", "Centrifugal Blower Fan", "blower"],
  ["inline-cabinet-fan", "Inline Cabinet Fan", "inline"],
  ["stainless-steel-industrial-storage-rack", "Stainless Steel Industrial Storage Rack", "rack"],
  ["clean-plate-rack", "Clean Plate Rack", "plate"],
  ["gi-metal-storage-box", "GI Metal Storage Box", "box"],
  ["twin-tank-deep-fat-fryer", "Twin Tank Deep Fat Fryer", "fryer"],
  ["two-door-vertical-refrigerator", "Two Door Vertical Refrigerator", "fridge"],
  ["under-counter-refrigerator", "Under Counter Refrigerator", "fridge"],
  ["kitchen-chimney-cleaning-service", "Kitchen Chimney Cleaning Service", "service"],
];

const categories = [
  ["industrial-air-duct", "Industrial Air Duct", "duct"],
  ["gi-ducting", "GI Ducting", "taper"],
  ["kitchen-exhaust-hood", "Kitchen Exhaust Hood", "hood"],
  ["air-distribution-control", "Air Distribution & Control", "grille"],
  ["blowers-fans", "Blowers & Fans", "blower"],
  ["storage-rack", "Storage Rack", "rack"],
  ["storage-box", "Storage Box", "box"],
  ["commercial-kitchen-equipment", "Commercial Kitchen Equipment", "fryer"],
  ["services", "Services", "service"],
];

function projectSvg(title, category, motifKey) {
  const id = "proj-" + motifKey + Math.random().toString(36).slice(2, 5);
  const motif = (motifs[motifKey] || motifs.duct)(LINE);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="640" viewBox="0 0 800 512" role="img" aria-label="${escapeXml(
    title
  )} — demo image">
  ${defs(id)}
  <rect width="800" height="512" fill="url(#bg-${id})"/>
  <rect width="800" height="512" fill="url(#grid-${id})"/>
  <rect width="800" height="512" fill="url(#glow-${id})"/>
  <rect x="0" y="0" width="800" height="6" fill="url(#accent-${id})"/>
  <g transform="translate(0,-10)">${motif}</g>
  <g transform="translate(40,432)">
    <rect x="0" y="-26" width="${category.length * 8 + 24}" height="26" rx="13" fill="url(#accent-${id})"/>
    <text x="12" y="-8" font-family="Arial" font-size="13" font-weight="700" fill="#fff">${escapeXml(
      category
    )}</text>
    <text x="0" y="28" font-family="Arial" font-size="24" font-weight="700" fill="${LABEL}">${escapeXml(
      title
    )}</text>
  </g>
  ${tag("Project")}
</svg>`;
}

function gallerySvg(title, motifKey) {
  const id = "gal-" + motifKey + Math.random().toString(36).slice(2, 5);
  const motif = (motifs[motifKey] || motifs.duct)(LINE);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="700" height="560" viewBox="0 0 800 640" role="img" aria-label="${escapeXml(
    title
  )} — demo image">
  ${defs(id)}
  <rect width="800" height="640" fill="url(#bg-${id})"/>
  <rect width="800" height="640" fill="url(#grid-${id})"/>
  <rect width="800" height="640" fill="url(#glow-${id})"/>
  <g transform="translate(0,60)">${motif}</g>
  <text x="400" y="560" font-family="Arial" font-size="22" font-weight="600" fill="${LABEL}" text-anchor="middle">${escapeXml(
    title
  )}</text>
  <line x1="340" y1="528" x2="460" y2="528" stroke="url(#accent-${id})" stroke-width="2"/>
  ${tag(title)}
</svg>`;
}

const projectList = [
  ["commercial-kitchen-exhaust", "Commercial Kitchen Exhaust System", "Kitchen Ventilation", "hood"],
  ["industrial-ventilation-ducting", "Industrial Ventilation Ducting", "Industrial Air Duct", "rect"],
  ["air-cooling-duct-distribution", "Air Cooling Duct Distribution", "Air Distribution", "grille"],
  ["kitchen-fit-out-equipment", "Kitchen Fit-out & Equipment", "Commercial Kitchen", "rack"],
  ["inline-extraction-upgrade", "Inline Extraction Upgrade", "Air Movement", "inline"],
  ["chimney-cleaning-maintenance", "Chimney Cleaning & Maintenance", "Service", "service"],
];

const galleryList = [
  ["gallery-1", "Spiral Duct Run", "spiral"],
  ["gallery-2", "Stainless Exhaust Hood", "hood"],
  ["gallery-3", "Rectangular Duct System", "rect"],
  ["gallery-4", "Centrifugal Blower", "blower"],
  ["gallery-5", "Deflection Grille", "grille"],
  ["gallery-6", "Storage Racks", "rack"],
  ["gallery-7", "Round Duct Install", "round"],
  ["gallery-8", "Volume Control Damper", "damper"],
  ["gallery-9", "Inline Cabinet Fan", "inline"],
  ["gallery-10", "Kitchen Equipment", "fryer"],
  ["gallery-11", "GI Taper Section", "taper"],
  ["gallery-12", "Fabrication Work", "facility"],
];

let count = 0;
for (const [slug, title, category, motif] of projectList) {
  const p = join(PUBLIC, "projects", `${slug}.svg`);
  ensure(p);
  writeFileSync(p, projectSvg(title, category, motif));
  count++;
}
for (const [slug, title, motif] of galleryList) {
  const p = join(PUBLIC, "gallery", `${slug}.svg`);
  ensure(p);
  writeFileSync(p, gallerySvg(title, motif));
  count++;
}

for (const [slug, label, motif] of products) {
  const base = join(PUBLIC, "products", `${slug}.svg`);
  ensure(base);
  writeFileSync(base, productSvg(label, motif));
  writeFileSync(join(PUBLIC, "products", `${slug}-2.svg`), productSvg(label + " — detail", motif));
  writeFileSync(join(PUBLIC, "products", `${slug}-3.svg`), productSvg(label + " — alt view", motif));
  count += 3;
}
for (const [slug, label, motif] of categories) {
  const p = join(PUBLIC, "categories", `${slug}.svg`);
  ensure(p);
  writeFileSync(p, categorySvg(label, motif));
  count++;
}

ensure(join(PUBLIC, "hero.svg"));
writeFileSync(join(PUBLIC, "hero.svg"), heroSvg());
writeFileSync(join(PUBLIC, "swirl.svg"), swirlSvg());
writeFileSync(join(PUBLIC, "about-facility.svg"), bannerSvg("facility", "Fabrication Facility", "facility"));
writeFileSync(join(PUBLIC, "about-signboard.svg"), bannerSvg("signboard", "RK Air Duct, Nashik", "duct"));
writeFileSync(join(PUBLIC, "cta-bg.svg"), bannerSvg("cta", "Ducting Installation", "round", 1600, 600));
writeFileSync(join(PUBLIC, "og.svg"), ogSvg());
count += 6;

console.log(`Generated ${count} demo placeholder images (blue/green brand) into /public`);
