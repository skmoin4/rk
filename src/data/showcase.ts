/**
 * SAMPLE showcase content — testimonials, projects and gallery.
 *
 * ⚠️  IMPORTANT: The company's public source profile publishes NO customer
 * reviews, client names, project list or project photos. Everything in this
 * file is therefore clearly-labelled PLACEHOLDER content for the demo layout
 * only. It must NOT be presented as genuine customer feedback or as records of
 * specific completed jobs.
 *
 * Replace each entry with the client's real testimonials, real projects and
 * real photographs before using this site publicly. Testimonials here are
 * attributed to a generic role + sector (no invented person or company names).
 */

export type Testimonial = {
  quote: string;
  role: string; // generic role + sector, not a real named person/company
  sector: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The ducting was fabricated exactly to our kitchen layout and the exhaust draws beautifully — the team understood the airflow we needed.",
    role: "Owner",
    sector: "Commercial Kitchen · Nashik",
  },
  {
    quote:
      "Clean stainless steel hood and a tidy spiral duct run. Good finish and it was sized right for our line the first time.",
    role: "Operations Lead",
    sector: "Restaurant · Maharashtra",
  },
  {
    quote:
      "We needed round and rectangular ducts for an industrial space. The fabrication quality in GI was solid and delivery was on time.",
    role: "Project Engineer",
    sector: "HVAC Contractor · Nashik",
  },
  {
    quote:
      "Dampers and grilles helped us balance the airflow across the floor. Practical advice and a supplier that actually follows up.",
    role: "Facilities Manager",
    sector: "Industrial Unit · Maharashtra",
  },
  {
    quote:
      "Chimney cleaning service kept our exhaust running clean through a busy season. Reliable and thorough each visit.",
    role: "Kitchen Manager",
    sector: "Cloud Kitchen · Nashik",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  scope: string[]; // real product/service types involved
  image: string;
  location: string;
};

/**
 * SAMPLE / representative project types — NOT records of specific completed
 * jobs with named clients. They illustrate the kind of work the business is
 * set up to deliver, using real product categories. Replace with real,
 * photographed projects.
 */
export const projects: Project[] = [
  {
    slug: "commercial-kitchen-exhaust",
    title: "Commercial Kitchen Exhaust System",
    category: "Kitchen Ventilation",
    summary:
      "A complete kitchen extraction setup — stainless steel exhaust hood, spiral ducting and a centrifugal blower sized to the cooking line.",
    scope: ["Stainless steel exhaust hood", "GI round spiral duct", "Centrifugal blower fan"],
    image: "/projects/commercial-kitchen-exhaust.svg",
    location: "Nashik, Maharashtra",
  },
  {
    slug: "industrial-ventilation-ducting",
    title: "Industrial Ventilation Ducting",
    category: "Industrial Air Duct",
    summary:
      "Rectangular and round duct runs fabricated in galvanised iron to move and distribute air across an industrial floor.",
    scope: ["Industrial rectangular duct", "Industrial round duct", "Volume control damper"],
    image: "/projects/industrial-ventilation-ducting.svg",
    location: "Maharashtra",
  },
  {
    slug: "air-cooling-duct-distribution",
    title: "Air Cooling Duct Distribution",
    category: "Air Distribution",
    summary:
      "Air cooling ducts paired with aluminium deflection grilles to direct and diffuse cooled air evenly into the working space.",
    scope: ["Industrial air cooling duct", "Aluminium deflection grille", "GI round taper duct"],
    image: "/projects/air-cooling-duct-distribution.svg",
    location: "Nashik, Maharashtra",
  },
  {
    slug: "kitchen-fit-out-equipment",
    title: "Kitchen Fit-out & Equipment",
    category: "Commercial Kitchen",
    summary:
      "Stainless steel storage racks, plate racks and commercial refrigeration supplied to kit out a professional kitchen.",
    scope: ["Stainless steel storage rack", "Clean plate rack", "Two door refrigerator"],
    image: "/projects/kitchen-fit-out-equipment.svg",
    location: "Maharashtra",
  },
  {
    slug: "inline-extraction-upgrade",
    title: "Inline Extraction Upgrade",
    category: "Air Movement",
    summary:
      "An inline cabinet fan added into an existing duct run to boost extraction, with dampers to rebalance the airflow.",
    scope: ["Inline cabinet fan", "Volume control damper", "GI ducting"],
    image: "/projects/inline-extraction-upgrade.svg",
    location: "Nashik, Maharashtra",
  },
  {
    slug: "chimney-cleaning-maintenance",
    title: "Chimney Cleaning & Maintenance",
    category: "Service",
    summary:
      "Scheduled kitchen chimney and exhaust cleaning to keep grease build-up down and extraction performance up.",
    scope: ["Kitchen chimney cleaning service", "Exhaust hood maintenance"],
    image: "/projects/chimney-cleaning-maintenance.svg",
    location: "Nashik, Maharashtra",
  },
];

export type GalleryItem = {
  src: string;
  title: string;
  tag: string;
};

// SAMPLE gallery tiles (demo imagery). Replace with real site/work photos.
export const gallery: GalleryItem[] = [
  { src: "/gallery/gallery-1.svg", title: "Spiral Duct Run", tag: "Ducting" },
  { src: "/gallery/gallery-2.svg", title: "Stainless Exhaust Hood", tag: "Kitchen" },
  { src: "/gallery/gallery-3.svg", title: "Rectangular Duct System", tag: "Ducting" },
  { src: "/gallery/gallery-4.svg", title: "Centrifugal Blower", tag: "Air Movement" },
  { src: "/gallery/gallery-5.svg", title: "Deflection Grille", tag: "Distribution" },
  { src: "/gallery/gallery-6.svg", title: "Storage Racks", tag: "Kitchen" },
  { src: "/gallery/gallery-7.svg", title: "Round Duct Install", tag: "Ducting" },
  { src: "/gallery/gallery-8.svg", title: "Volume Control Damper", tag: "Distribution" },
  { src: "/gallery/gallery-9.svg", title: "Inline Cabinet Fan", tag: "Air Movement" },
  { src: "/gallery/gallery-10.svg", title: "Kitchen Equipment", tag: "Kitchen" },
  { src: "/gallery/gallery-11.svg", title: "GI Taper Section", tag: "Ducting" },
  { src: "/gallery/gallery-12.svg", title: "Fabrication Work", tag: "Workshop" },
];

export const galleryTags = ["All", "Ducting", "Kitchen", "Air Movement", "Distribution", "Workshop"];
