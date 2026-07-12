/**
 * Dema Plumbing Gallery Data
 * 
 * To add new gallery items, simply add a new object to the array.
 * Each item should have:
 *  - id: unique identifier (number)
 *  - title: short title for the project
 *  - description: brief description
 *  - category: project category (e.g., "bathroom", "kitchen", "pipe", "emergency")
 *  - location: project location
 *  - completionDate: completion date (YYYY-MM-DD format)
 *  - image: filename (e.g., "bathroom1.jpg")
 *  - featured: true/false for featured projects
 * 
 * To add a new project:
 * 1. Copy your image to /images/projects/
 * 2. Add one object below with your image filename
 * 3. Push to GitHub - that's it!
 */
window.galleryData = [
  {
    id: 1,
    title: "Solar Water Heater Installation",
    description: "Supply and installation of a high-pressure stainless steel solar water heating system with vacuum tube collector array and roof mounting frame for a residential property.",
    category: "water-heater",
    location: "Eldoret, Uasin Gishu County",
    completionDate: "2026-02-14",
    image: "water-heaters/water-heater-eldoret-1.webp",
    featured: true
  },
  {
    id: 2,
    title: "Synnova Solar Heater Installation",
    description: "Full installation of a Synnova pressurized solar water heater on a natural stone residential home, including roof mounting, plumbing connections, and pressure testing.",
    category: "water-heater",
    location: "Kapsabet, Nandi County",
    completionDate: "2026-03-22",
    image: "water-heaters/water-heater-kapsabet-1.webp",
    featured: false
  },
  {
    id: 3,
    title: "Solar Water Heater Installation",
    description: "Installation of a vacuum tube solar water heating system for a residential home bordering a tea estate, with collector alignment for optimal sun exposure.",
    category: "water-heater",
    location: "Kericho, Kericho County",
    completionDate: "2026-01-30",
    image: "water-heaters/water-heater-kericho-1.webp",
    featured: false
  },
  {
    id: 4,
    title: "Rough-In Plumbing - New Construction",
    description: "First-fix plumbing works for a new residential build, including drainage stub-outs and supply line rough-in ahead of the roof slab concrete pour.",
    category: "pipe",
    location: "Kisumu, Kisumu County",
    completionDate: "2026-04-10",
    image: "residential/pipe-installation-kisumu-1.webp",
    featured: false
  },
  {
    id: 5,
    title: "Luxury Bathroom Renovation",
    description: "Complete bathroom fit-out featuring black marble herringbone wall tiling, a wall-hung water-efficient toilet, and concealed cistern plumbing.",
    category: "bathroom",
    location: "Kisii, Kisii County",
    completionDate: "2026-05-05",
    image: "bathroom-installations/bathroom-kisii-1.webp",
    featured: true
  },
  {
    id: 6,
    title: "Modern Vanity & Basin Installation",
    description: "Supply and fitting of a modern countertop vessel basin with tall chrome mixer tap and matching mirrored cabinet for a residential bathroom upgrade.",
    category: "bathroom",
    location: "Migori, Migori County",
    completionDate: "2026-03-02",
    image: "bathroom-installations/bathroom-vanity-migori-1.webp",
    featured: false
  },
  {
    id: 7,
    title: "Institutional Urinal Installation",
    description: "Installation of a multi-bay urinal system with individual water supply valves and shared drainage line for an institutional facility.",
    category: "bathroom",
    location: "Homa Bay, Homa Bay County",
    completionDate: "2026-02-28",
    image: "commercial/bathroom-urinal-homabay-1.webp",
    featured: false
  },
  {
    id: 8,
    title: "Twin-Panel Solar Water Heater Installation",
    description: "Installation of two vacuum tube solar water heaters on a single residential roof to serve separate wings of the home.",
    category: "water-heater",
    location: "Turbo, Uasin Gishu County",
    completionDate: "2026-06-18",
    image: "water-heaters/water-heater-turbo-1.webp",
    featured: false
  }
];