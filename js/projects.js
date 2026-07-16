/**
 * Dema Plumbing and Pipe Fitting Eldoret - Projects Data
 * 
 * To add a new project:
 * 1. Create a new folder inside images/projects/ (e.g., images/projects/bathroom-installation-eldoret/)
 * 2. Copy project photos into that folder
 * 3. Add a project object to this array
 * 
 * No HTML editing required - projects are rendered dynamically.
 */

const projects = [
  // Example project structure - add your real projects here
  /*
  {
    id: 1,
    title: "Bathroom Plumbing Installation",
    location: "Eldoret",
    county: "Uasin Gishu",
    category: "bathroom-installations",
    description: "Complete bathroom plumbing installation including shower, toilet, sink, and drainage system for a residential property.",
    dateCompleted: "2024-06-15",
    images: [
      "images/projects/bathroom-installation-eldoret/photo1.webp",
      "images/projects/bathroom-installation-eldoret/photo2.webp",
      "images/projects/bathroom-installation-eldoret/photo3.webp"
    ],
    services: ["Bathroom & Kitchen Fitting", "Pipe Installation"],
    featured: true
  },
  */
];

// Helper function to get projects by category
function getProjectsByCategory(category) {
  return projects.filter(project => project.category === category);
}

// Helper function to get featured projects
function getFeaturedProjects() {
  return projects.filter(project => project.featured);
}

// Helper function to get project by ID
function getProjectById(id) {
  return projects.find(project => project.id === id);
}

// Helper function to get all unique categories
function getCategories() {
  return [...new Set(projects.map(project => project.category))];
}

// Helper functionto get all unique locations
function getLocations() {
  return [...new Set(projects.map(project => project.location))];
}
