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
 * 1. Copy your image to /assets/images/projects/
 * 2. Add one object below with your image filename
 * 3. Push to GitHub - that's it!
 */
window.galleryData = [
  {
    id: 1,
    title: "Bathroom Renovation",
    description: "Complete bathroom installation with modern fixtures and premium fittings in a residential property.",
    category: "bathroom",
    location: "Eldoret",
    completionDate: "2024-03-15",
    image: "bathroom1.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Kitchen Fitting",
    description: "Modern kitchen plumbing installation with sink, dishwasher connection, and garbage disposal.",
    category: "kitchen",
    location: "Eldoret",
    completionDate: "2024-02-20",
    image: "kitchen1.jpg",
    featured: true
  },
  {
    id: 3,
    title: "Pipe Installation",
    description: "New copper pipe system installation for a residential property with full water distribution network.",
    category: "pipe",
    location: "Eldoret",
    completionDate: "2024-01-10",
    image: "pipe1.jpg",
    featured: false
  },
  {
    id: 4,
    title: "Water Heater Install",
    description: "Energy-efficient tankless water heater installation with proper venting and safety features.",
    category: "water-heater",
    location: "Eldoret",
    completionDate: "2024-04-05",
    image: "tank1.jpg",
    featured: true
  },
  {
    id: 5,
    title: "Drain Cleaning",
    description: "Professional drain cleaning service using hydro-jetting technology for commercial building.",
    category: "drain",
    location: "Eldoret",
    completionDate: "2024-02-28",
    image: "drain1.jpg",
    featured: false
  },
  {
    id: 6,
    title: "Emergency Service",
    description: "24/7 burst pipe repair and water damage mitigation for residential client.",
    category: "emergency",
    location: "Eldoret",
    completionDate: "2024-03-01",
    image: "emergency1.jpg",
    featured: true
  },
  {
    id: 7,
    title: "Sewage System",
    description: "Complete sewage line replacement and new drainage system for apartment complex.",
    category: "sewage",
    location: "Eldoret",
    completionDate: "2024-01-25",
    image: "sewage1.jpg",
    featured: false
  },
  {
    id: 8,
    title: "Shower Installation",
    description: "Luxury shower installation with rainfall showerhead and body jets.",
    category: "bathroom",
    location: "Eldoret",
    completionDate: "2024-03-20",
    image: "shower1.jpg",
    featured: false
  }
  // Add more items as needed by copying the structure above
];