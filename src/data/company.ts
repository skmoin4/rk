/**
 * Company profile for R K Air Duct.
 *
 * Every field below is sourced from the company's public IndiaMART profile
 * (https://www.indiamart.com/rkair-duct/profile.html). No history, client
 * names, certifications, project counts or performance figures have been
 * invented. Fields that are genuinely unknown are left out rather than filled
 * with placeholder values. Update this file to change site-wide details.
 */

export const company = {
  name: "R K Air Duct",
  shortName: "RK Air Duct",
  tagline: "Industrial Ducting & Commercial Kitchen Fabrication",
  // The source profile's own one-line "About Us".
  motto: "A leading manufacturer based in Nashik, committed to delivering quality products and services.",
  // Verbatim-aligned with the source listing's own wording.
  intro:
    "R K Air Duct is a Nashik-based fabricator and supplier of industrial air ducting and commercial kitchen equipment, working in galvanised iron, stainless steel and aluminium.",
  description:
    "Based in Nashik, Maharashtra, R K Air Duct supplies industrial air duct systems, GI ducting, exhaust hoods, deflection grilles, volume control dampers, blowers, storage racks and commercial kitchen equipment. The business works in galvanised iron, stainless steel and aluminium, and also offers kitchen chimney cleaning services.",
  location: {
    city: "Nashik",
    state: "Maharashtra",
    country: "India",
    display: "Nashik, Maharashtra, India",
  },
  // From the IndiaMART listing.
  contactPerson: "Munawar Shaikh",
  ceo: "R Saiyyad",
  legalStatus: "Proprietorship",
  natureOfBusiness: "Manufacturer, Supplier & Service Provider",
  gst: "27DKSPS4647L1Z3",
  gstRegistered: "2019",
  hsn: "73 — Articles of iron or steel",
  memberSince: "11 years on IndiaMART",
  sourceUrl: "https://www.indiamart.com/rkair-duct/profile.html",
  // No public phone number / full street address is published on the source
  // profile, so none is shown. Enquiries route through the demo form.
  email: "",
  phone: "",
} as const;

// Honest, source-supported selling points — no invented numbers or claims.
export const whyChooseUs = [
  {
    title: "GI & Stainless Steel Fabrication",
    body: "Ducting and kitchen equipment fabricated in galvanised iron and stainless steel, matched to the job.",
  },
  {
    title: "Ducting & Kitchen Under One Roof",
    body: "Industrial air ducts, exhaust hoods, blowers, racks and commercial kitchen equipment from a single supplier.",
  },
  {
    title: "Built to Your Requirement",
    body: "Round, rectangular, spiral and taper duct systems supplied to suit the layout and airflow of each site.",
  },
  {
    title: "Supply & Service",
    body: "Beyond supply, the business also provides kitchen chimney cleaning — keeping installed systems running clean.",
  },
];

export const services = [
  {
    title: "Industrial Air Ducting",
    body: "Round, rectangular, spiral and taper duct systems in galvanised iron for ventilation and air cooling.",
    icon: "wind",
  },
  {
    title: "Commercial Kitchen Fabrication",
    body: "Stainless steel exhaust hoods, storage racks and kitchen equipment for professional kitchens.",
    icon: "chef-hat",
  },
  {
    title: "Air Movement & Control",
    body: "Centrifugal and inline fans, deflection grilles and volume control dampers to drive and balance airflow.",
    icon: "fan",
  },
  {
    title: "Chimney Cleaning Service",
    body: "Kitchen chimney cleaning to keep exhaust and ducting systems clear and efficient.",
    icon: "spray-can",
  },
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
