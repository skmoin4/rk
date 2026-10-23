# R K Air Duct — Corporate Website (Frontend Demo)

A premium, production-quality frontend for **R K Air Duct**, a Nashik-based
fabricator and supplier of industrial air ducting and commercial kitchen
equipment. Built as a client presentation demo using the company's real
business information from its public IndiaMART profile.

> **Frontend-only demo.** There is no backend, database or enquiry delivery.
> The enquiry form validates in the browser and is clearly labelled as a demo.

## Tech stack

- **Next.js 15** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS 3** design system
- **GSAP + ScrollTrigger** for purposeful, reduced-motion-aware animation
- **lucide-react** icons

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint
```

## Pages / routes

| Route               | Description                                            |
| ------------------- | ------------------------------------------------------ |
| `/`                 | Home — hero, intro, categories, featured, capabilities |
| `/products`         | Catalogue with category filter + search               |
| `/products/[slug]`  | Product detail (gallery, attributes, related)          |
| `/about`            | Company profile                                        |
| `/contact`          | Company details + validated demo enquiry form          |

Plus `sitemap.xml`, `robots.txt` and a custom `404`.

## Editing content

All business content is kept out of the UI so the client can update it easily:

- **`src/data/company.ts`** — company name, location, GST, contact, capabilities.
  A public phone and street address are **not** in the source profile; add them
  here when available and they appear site-wide.
- **`src/data/products.ts`** — the product catalogue, categories and attributes.

### Images

`/public` contains clearly-labelled **DEMO** placeholder graphics (SVG), since
real product photos and the official logo were not reliably retrievable from the
source. To use real assets, replace the files in `/public/products`,
`/public/categories`, `/public/hero.svg`, etc. **keeping the same filenames** —
no code changes needed. Regenerate the placeholders any time with:

```bash
npm run gen:images
```

## Content accuracy

Product names, categories, location and GST details come directly from the
company's public IndiaMART profile
(<https://www.indiamart.com/rkair-duct/profile.html>). The source publishes **no**
specifications, dimensions, pricing, company history, certifications, client
names or project counts — so none are invented here. Product "attributes" are
limited to facts derivable from each product's own name (e.g. GI = galvanised
iron, SS = stainless steel) and its category; full specs are shown as
"available on enquiry".

Confirm permission before reusing any third-party product images on a public
production site.
