/**
 * Product catalogue for R K Air Duct.
 *
 * Product names and categories are taken directly from the company's public
 * IndiaMART profile and products-and-services listing. The source publishes NO
 * dimensions, capacities, prices or materials-of-construction tables, so none
 * are shown here.
 *
 * - `attributes` contains only facts derivable from the product's own name
 *   (GI = galvanised iron, SS = stainless steel, aluminium) plus its category.
 * - `description` is general, honest editorial copy describing the product TYPE.
 *   It makes no specific performance, dimensional or certification claim.
 * - Detailed specifications are intentionally shown as "available on enquiry".
 *
 * Replace the SVG files in /public/products with real photographs (same
 * filenames) when available.
 */

export type Category = {
  slug: string;
  name: string;
  blurb: string;
  image: string;
};

export type Product = {
  slug: string;
  name: string;
  categorySlug: string;
  summary: string;
  description: string;
  attributes: { label: string; value: string }[];
  image: string;
  gallery: string[];
  isService?: boolean;
};

export const categories: Category[] = [
  {
    slug: "industrial-air-duct",
    name: "Industrial Air Duct",
    blurb: "Round, rectangular and spiral duct systems for industrial ventilation and air cooling.",
    image: "/categories/industrial-air-duct.svg",
  },
  {
    slug: "gi-ducting",
    name: "GI Ducting",
    blurb: "Galvanised iron ducting components, including taper sections, for air distribution.",
    image: "/categories/gi-ducting.svg",
  },
  {
    slug: "kitchen-exhaust-hood",
    name: "Kitchen Exhaust Hood",
    blurb: "Stainless steel and wall-mounted exhaust hoods for commercial kitchens.",
    image: "/categories/kitchen-exhaust-hood.svg",
  },
  {
    slug: "air-distribution-control",
    name: "Air Distribution & Control",
    blurb: "Deflection grilles and volume control dampers to balance and direct airflow.",
    image: "/categories/air-distribution-control.svg",
  },
  {
    slug: "blowers-fans",
    name: "Blowers & Fans",
    blurb: "Centrifugal and inline cabinet fans to drive extraction and ventilation systems.",
    image: "/categories/blowers-fans.svg",
  },
  {
    slug: "storage-rack",
    name: "Storage Rack",
    blurb: "Stainless steel industrial storage and plate racks for kitchens and workspaces.",
    image: "/categories/storage-rack.svg",
  },
  {
    slug: "storage-box",
    name: "Storage Box",
    blurb: "Galvanised iron metal storage boxes for durable, everyday industrial storage.",
    image: "/categories/storage-box.svg",
  },
  {
    slug: "commercial-kitchen-equipment",
    name: "Commercial Kitchen Equipment",
    blurb: "Deep fat fryers and commercial refrigeration for professional kitchens.",
    image: "/categories/commercial-kitchen-equipment.svg",
  },
  {
    slug: "services",
    name: "Services",
    blurb: "Kitchen chimney cleaning to keep exhaust and ducting systems efficient.",
    image: "/categories/services.svg",
  },
];

export const products: Product[] = [
  {
    slug: "industrial-air-cooling-duct",
    name: "Industrial Air Cooling Duct",
    categorySlug: "industrial-air-duct",
    summary: "Ducting for distributing cooled air across industrial and workshop spaces.",
    description:
      "An industrial air cooling duct carries and distributes cooled or ventilated air through a facility. Fabricated as part of a wider duct system, it is sized and routed to suit the airflow and layout of the site it serves.",
    attributes: [
      { label: "Category", value: "Industrial Air Duct" },
      { label: "Application", value: "Industrial air cooling & ventilation" },
    ],
    image: "/products/industrial-air-cooling-duct.svg",
    gallery: ["/products/industrial-air-cooling-duct-2.svg", "/products/industrial-air-cooling-duct-3.svg"],
  },
  {
    slug: "gi-round-spiral-duct",
    name: "GI Round Spiral Duct",
    categorySlug: "industrial-air-duct",
    summary: "Spirally-formed galvanised iron round ducting for air handling.",
    description:
      "GI round spiral duct is a spirally-formed galvanised iron tube used for air handling and ventilation. Its round section and spiral seam make it a common choice for clean, efficient air distribution runs.",
    attributes: [
      { label: "Material", value: "Galvanised Iron (GI)" },
      { label: "Profile", value: "Round, spiral-formed" },
      { label: "Category", value: "Industrial Air Duct" },
    ],
    image: "/products/gi-round-spiral-duct.svg",
    gallery: ["/products/gi-round-spiral-duct-2.svg", "/products/gi-round-spiral-duct-3.svg"],
  },
  {
    slug: "industrial-rectangular-air-duct-system",
    name: "Industrial Rectangular Air Duct System",
    categorySlug: "industrial-air-duct",
    summary: "Rectangular-section duct system for industrial ventilation layouts.",
    description:
      "A rectangular air duct system uses rectangular-section ducting that fits neatly against walls and ceilings. It is fabricated and assembled to route air through industrial and commercial spaces along the planned layout.",
    attributes: [
      { label: "Profile", value: "Rectangular section" },
      { label: "Application", value: "Industrial ventilation" },
      { label: "Category", value: "Industrial Air Duct" },
    ],
    image: "/products/industrial-rectangular-air-duct-system.svg",
    gallery: [
      "/products/industrial-rectangular-air-duct-system-2.svg",
      "/products/industrial-rectangular-air-duct-system-3.svg",
    ],
  },
  {
    slug: "industrial-round-air-duct-system",
    name: "Industrial Round Air Duct System",
    categorySlug: "industrial-air-duct",
    summary: "Round-section duct system for efficient industrial airflow.",
    description:
      "A round air duct system uses circular-section ducting, valued for even airflow and efficient air movement. It is fabricated and connected into a complete system suited to the site's ventilation requirement.",
    attributes: [
      { label: "Profile", value: "Round section" },
      { label: "Application", value: "Industrial airflow & ventilation" },
      { label: "Category", value: "Industrial Air Duct" },
    ],
    image: "/products/industrial-round-air-duct-system.svg",
    gallery: [
      "/products/industrial-round-air-duct-system-2.svg",
      "/products/industrial-round-air-duct-system-3.svg",
    ],
  },
  {
    slug: "gi-round-taper-duct",
    name: "GI Round Taper Duct",
    categorySlug: "gi-ducting",
    summary: "Tapered galvanised iron duct section for transitions between duct sizes.",
    description:
      "A GI round taper duct is a tapered galvanised iron section used to transition between two different round duct diameters within a system, keeping airflow smooth where the run changes size.",
    attributes: [
      { label: "Material", value: "Galvanised Iron (GI)" },
      { label: "Profile", value: "Round, tapered" },
      { label: "Category", value: "GI Ducting" },
    ],
    image: "/products/gi-round-taper-duct.svg",
    gallery: ["/products/gi-round-taper-duct-2.svg", "/products/gi-round-taper-duct-3.svg"],
  },
  {
    slug: "wall-mounted-exhaust-hood",
    name: "Wall Mounted Exhaust Hood",
    categorySlug: "kitchen-exhaust-hood",
    summary: "Wall-mounted exhaust hood for capturing heat, smoke and fumes.",
    description:
      "A wall-mounted exhaust hood sits against the wall above a cooking line to capture heat, smoke and cooking fumes and direct them into the exhaust ducting. It is a core part of a commercial kitchen ventilation setup.",
    attributes: [
      { label: "Mounting", value: "Wall mounted" },
      { label: "Application", value: "Commercial kitchen exhaust" },
      { label: "Category", value: "Kitchen Exhaust Hood" },
    ],
    image: "/products/wall-mounted-exhaust-hood.svg",
    gallery: ["/products/wall-mounted-exhaust-hood-2.svg", "/products/wall-mounted-exhaust-hood-3.svg"],
  },
  {
    slug: "kitchen-stainless-steel-exhaust-hood",
    name: "Kitchen Stainless Steel Exhaust Hood",
    categorySlug: "kitchen-exhaust-hood",
    summary: "Stainless steel exhaust hood for professional kitchen ventilation.",
    description:
      "A stainless steel exhaust hood extracts heat, steam and grease-laden air from a commercial kitchen. Stainless steel makes it hygienic and easy to clean, suiting it to professional food preparation environments.",
    attributes: [
      { label: "Material", value: "Stainless Steel" },
      { label: "Application", value: "Commercial kitchen exhaust" },
      { label: "Category", value: "Kitchen Exhaust Hood" },
    ],
    image: "/products/kitchen-stainless-steel-exhaust-hood.svg",
    gallery: [
      "/products/kitchen-stainless-steel-exhaust-hood-2.svg",
      "/products/kitchen-stainless-steel-exhaust-hood-3.svg",
    ],
  },
  {
    slug: "aluminium-air-deflection-grill",
    name: "Aluminium Air Deflection Grill",
    categorySlug: "air-distribution-control",
    summary: "Aluminium grille that directs and diffuses supply air into a space.",
    description:
      "An aluminium air deflection grill fits at a duct outlet to direct and diffuse supply air into a room. Its angled louvres shape the throw of the air, and aluminium keeps it light and corrosion-resistant.",
    attributes: [
      { label: "Material", value: "Aluminium" },
      { label: "Function", value: "Air deflection & diffusion" },
      { label: "Category", value: "Air Distribution & Control" },
    ],
    image: "/products/aluminium-air-deflection-grill.svg",
    gallery: [
      "/products/aluminium-air-deflection-grill-2.svg",
      "/products/aluminium-air-deflection-grill-3.svg",
    ],
  },
  {
    slug: "volume-control-damper",
    name: "Volume Control Damper",
    categorySlug: "air-distribution-control",
    summary: "Adjustable damper that regulates the volume of air through a duct.",
    description:
      "A volume control damper sits within the ducting and uses adjustable blades to regulate how much air passes through. It is used to balance airflow across a system so each outlet delivers the intended volume.",
    attributes: [
      { label: "Function", value: "Airflow volume regulation" },
      { label: "Installation", value: "In-duct" },
      { label: "Category", value: "Air Distribution & Control" },
    ],
    image: "/products/volume-control-damper.svg",
    gallery: ["/products/volume-control-damper-2.svg", "/products/volume-control-damper-3.svg"],
  },
  {
    slug: "centrifugal-blower-fan",
    name: "Centrifugal Blower Fan",
    categorySlug: "blowers-fans",
    summary: "Centrifugal blower fan for extraction and ventilation duct systems.",
    description:
      "A centrifugal blower fan moves air through a duct system, providing the pressure needed for extraction and ventilation. It is commonly paired with exhaust hoods and industrial ducting to drive airflow.",
    attributes: [
      { label: "Type", value: "Centrifugal blower fan" },
      { label: "Application", value: "Extraction & ventilation" },
      { label: "Category", value: "Blowers & Fans" },
    ],
    image: "/products/centrifugal-blower-fan.svg",
    gallery: ["/products/centrifugal-blower-fan-2.svg", "/products/centrifugal-blower-fan-3.svg"],
  },
  {
    slug: "inline-cabinet-fan",
    name: "Inline Cabinet Fan",
    categorySlug: "blowers-fans",
    summary: "Compact in-line cabinet fan installed within a duct run.",
    description:
      "An inline cabinet fan is housed in a compact cabinet and installed directly within a duct run to boost airflow. Its enclosed design makes it a tidy way to add extraction or ventilation capacity along a duct line.",
    attributes: [
      { label: "Type", value: "Inline cabinet fan" },
      { label: "Installation", value: "In-line within ducting" },
      { label: "Category", value: "Blowers & Fans" },
    ],
    image: "/products/inline-cabinet-fan.svg",
    gallery: ["/products/inline-cabinet-fan-2.svg", "/products/inline-cabinet-fan-3.svg"],
  },
  {
    slug: "stainless-steel-industrial-storage-rack",
    name: "Stainless Steel Industrial Storage Rack",
    categorySlug: "storage-rack",
    summary: "Multi-tier stainless steel rack for industrial and kitchen storage.",
    description:
      "A stainless steel industrial storage rack provides sturdy, multi-tier shelving for kitchens, stores and workspaces. Stainless steel keeps it hygienic and corrosion-resistant for demanding environments.",
    attributes: [
      { label: "Material", value: "Stainless Steel" },
      { label: "Type", value: "Multi-tier storage rack" },
      { label: "Category", value: "Storage Rack" },
    ],
    image: "/products/stainless-steel-industrial-storage-rack.svg",
    gallery: [
      "/products/stainless-steel-industrial-storage-rack-2.svg",
      "/products/stainless-steel-industrial-storage-rack-3.svg",
    ],
  },
  {
    slug: "clean-plate-rack",
    name: "Clean Plate Rack",
    categorySlug: "storage-rack",
    summary: "Rack for storing and draining clean plates in commercial kitchens.",
    description:
      "A clean plate rack holds washed plates upright for draining and tidy storage in a commercial kitchen, keeping clean crockery organised and accessible on the line.",
    attributes: [
      { label: "Type", value: "Plate storage rack" },
      { label: "Application", value: "Commercial kitchen" },
      { label: "Category", value: "Storage Rack" },
    ],
    image: "/products/clean-plate-rack.svg",
    gallery: ["/products/clean-plate-rack-2.svg", "/products/clean-plate-rack-3.svg"],
  },
  {
    slug: "gi-metal-storage-box",
    name: "GI Metal Storage Box",
    categorySlug: "storage-box",
    summary: "Durable galvanised iron storage box for everyday industrial use.",
    description:
      "A GI metal storage box is a durable galvanised iron container for storing tools, parts and materials. Galvanised iron construction gives it strength and resistance to rust in working environments.",
    attributes: [
      { label: "Material", value: "Galvanised Iron (GI)" },
      { label: "Type", value: "Metal storage box" },
      { label: "Category", value: "Storage Box" },
    ],
    image: "/products/gi-metal-storage-box.svg",
    gallery: ["/products/gi-metal-storage-box-2.svg", "/products/gi-metal-storage-box-3.svg"],
  },
  {
    slug: "twin-tank-deep-fat-fryer",
    name: "Twin Tank Deep Fat Fryer",
    categorySlug: "commercial-kitchen-equipment",
    summary: "Two-tank deep fat fryer for high-volume commercial frying.",
    description:
      "A twin tank deep fat fryer has two separate frying tanks, letting a kitchen fry different items at once or keep oil separated. It suits busy commercial kitchens that need steady frying capacity.",
    attributes: [
      { label: "Configuration", value: "Twin tank" },
      { label: "Application", value: "Commercial frying" },
      { label: "Category", value: "Commercial Kitchen Equipment" },
    ],
    image: "/products/twin-tank-deep-fat-fryer.svg",
    gallery: ["/products/twin-tank-deep-fat-fryer-2.svg", "/products/twin-tank-deep-fat-fryer-3.svg"],
  },
  {
    slug: "two-door-vertical-refrigerator",
    name: "Two Door Vertical Refrigerator",
    categorySlug: "commercial-kitchen-equipment",
    summary: "Upright two-door refrigerator for commercial cold storage.",
    description:
      "A two door vertical refrigerator is an upright commercial fridge with two doors, giving generous cold storage for a professional kitchen while keeping contents organised and accessible.",
    attributes: [
      { label: "Configuration", value: "Two door, vertical" },
      { label: "Application", value: "Commercial cold storage" },
      { label: "Category", value: "Commercial Kitchen Equipment" },
    ],
    image: "/products/two-door-vertical-refrigerator.svg",
    gallery: [
      "/products/two-door-vertical-refrigerator-2.svg",
      "/products/two-door-vertical-refrigerator-3.svg",
    ],
  },
  {
    slug: "under-counter-refrigerator",
    name: "Under Counter Refrigerator",
    categorySlug: "commercial-kitchen-equipment",
    summary: "Compact under-counter refrigeration for the kitchen line.",
    description:
      "An under counter refrigerator fits beneath the worktop to keep ingredients cold and within reach at the point of use, making efficient use of space on a commercial kitchen line.",
    attributes: [
      { label: "Configuration", value: "Under-counter" },
      { label: "Application", value: "Commercial cold storage" },
      { label: "Category", value: "Commercial Kitchen Equipment" },
    ],
    image: "/products/under-counter-refrigerator.svg",
    gallery: ["/products/under-counter-refrigerator-2.svg", "/products/under-counter-refrigerator-3.svg"],
  },
  {
    slug: "kitchen-chimney-cleaning-service",
    name: "Kitchen Chimney Cleaning Service",
    categorySlug: "services",
    isService: true,
    summary: "Cleaning service to keep kitchen chimneys and exhaust systems efficient.",
    description:
      "Kitchen chimney cleaning removes built-up grease and residue from kitchen chimneys and exhaust systems, helping them extract effectively and run efficiently. Offered as a service alongside the company's fabrication and supply work.",
    attributes: [
      { label: "Type", value: "On-site cleaning service" },
      { label: "Application", value: "Kitchen chimneys & exhaust systems" },
      { label: "Category", value: "Services" },
    ],
    image: "/products/kitchen-chimney-cleaning-service.svg",
    gallery: [
      "/products/kitchen-chimney-cleaning-service-2.svg",
      "/products/kitchen-chimney-cleaning-service-3.svg",
    ],
  },
];

/* ---- helpers ---- */

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getCategoryName(slug: string): string {
  return getCategory(slug)?.name ?? slug;
}

export function productsByCategory(slug: string): Product[] {
  return products.filter((p) => p.categorySlug === slug);
}

export function categoryCount(slug: string): number {
  return products.filter((p) => p.categorySlug === slug).length;
}

export function relatedProducts(product: Product, limit = 3): Product[] {
  const sameCat = products.filter(
    (p) => p.categorySlug === product.categorySlug && p.slug !== product.slug
  );
  if (sameCat.length >= limit) return sameCat.slice(0, limit);
  const others = products.filter(
    (p) => p.categorySlug !== product.categorySlug && p.slug !== product.slug
  );
  return [...sameCat, ...others].slice(0, limit);
}

// Featured selection for the home page (a spread across categories).
export const featuredSlugs = [
  "gi-round-spiral-duct",
  "kitchen-stainless-steel-exhaust-hood",
  "industrial-rectangular-air-duct-system",
  "centrifugal-blower-fan",
  "aluminium-air-deflection-grill",
  "stainless-steel-industrial-storage-rack",
];

export const featuredProducts: Product[] = featuredSlugs
  .map((s) => getProduct(s))
  .filter((p): p is Product => Boolean(p));
