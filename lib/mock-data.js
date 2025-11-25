const formatAddressSlug = (chunks) =>
  chunks
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

// Property mock data
export const properties = [
  {
    id: 1,
    title: "Modern Downtown Loft",
    price: 625000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1850,
    image: "/modern-loft-downtown-city.jpg",
    location: "Downtown District",
    description:
      "Stunning contemporary loft with floor-to-ceiling windows and premium finishes.",
    agent: 1,
    featured: true,
    type: "Apartment",
    address: {
      street: "500 S Clinton St",
      unit: "Apt 743",
      city: "Chicago",
      state: "IL",
      zip: "60607",
      neighborhood: "Downtown District",
      latitude: 41.8754,
      longitude: -87.641,
      full: "500 S Clinton St Apt 743, Chicago, IL 60607",
    },
  },
  {
    id: 2,
    title: "Suburban Family Home",
    price: 450000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2500,
    image: "/suburban-family-house-backyard.jpg",
    location: "Riverside",
    description:
      "Spacious family home with large backyard and modern amenities.",
    agent: 2,
    featured: true,
    type: "House",
    address: {
      street: "1180 Riverside Dr",
      city: "Riverside",
      state: "IL",
      zip: "60546",
      neighborhood: "Riverside",
      latitude: 41.8316,
      longitude: -87.8237,
      full: "1180 Riverside Dr, Riverside, IL 60546",
    },
  },
  {
    id: 3,
    title: "Waterfront Penthouse",
    price: 1200000,
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2800,
    image: "/luxury-penthouse-waterfront-view.jpg",
    location: "Harborside",
    description:
      "Exclusive penthouse with panoramic water views and luxury features.",
    agent: 1,
    featured: true,
    type: "Penthouse",
    address: {
      street: "88 Harbor View Cir",
      unit: "PH1",
      city: "Chicago",
      state: "IL",
      zip: "60601",
      neighborhood: "Harborside",
      latitude: 41.8859,
      longitude: -87.6133,
      full: "88 Harbor View Cir PH1, Chicago, IL 60601",
    },
  },
  {
    id: 4,
    title: "Cozy Studio Apartment",
    price: 275000,
    bedrooms: 1,
    bathrooms: 1,
    sqft: 650,
    image: "/cozy-studio-apartment-modern-design.jpg",
    location: "Midtown",
    description:
      "Efficient and well-designed studio perfect for young professionals.",
    agent: 3,
    featured: false,
    type: "Studio",
    address: {
      street: "725 W Superior St",
      unit: "Unit 304",
      city: "Chicago",
      state: "IL",
      zip: "60654",
      neighborhood: "Midtown",
      latitude: 41.8954,
      longitude: -87.6472,
      full: "725 W Superior St Unit 304, Chicago, IL 60654",
    },
  },
  {
    id: 5,
    title: "Historic Victorian Estate",
    price: 850000,
    bedrooms: 5,
    bathrooms: 3,
    sqft: 3200,
    image: "/historic-victorian-mansion-estate.jpg",
    location: "Heritage Hills",
    description:
      "Beautifully restored Victorian mansion with original hardwoods and charm.",
    agent: 2,
    featured: false,
    type: "House",
    address: {
      street: "1420 Heritage Hill Rd",
      city: "Evanston",
      state: "IL",
      zip: "60201",
      neighborhood: "Heritage Hills",
      latitude: 42.0597,
      longitude: -87.6847,
      full: "1420 Heritage Hill Rd, Evanston, IL 60201",
    },
  },
  {
    id: 6,
    title: "Contemporary Garden Townhouse",
    price: 525000,
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 1900,
    image: "/modern-townhouse-with-garden-courtyard.jpg",
    location: "Garden District",
    description: "Stylish townhouse with private garden and high-end finishes.",
    agent: 3,
    featured: false,
    type: "Townhouse",
    address: {
      street: "233 Garden Ln",
      unit: "Townhome 12",
      city: "Oak Park",
      state: "IL",
      zip: "60302",
      neighborhood: "Garden District",
      latitude: 41.8926,
      longitude: -87.7886,
      full: "233 Garden Ln Townhome 12, Oak Park, IL 60302",
    },
  },
].map((property) => ({
  ...property,
  addressSlug:
    property.addressSlug ||
    formatAddressSlug([
      property.address.street,
      property.address.unit,
      property.address.city,
      property.address.state,
      property.address.zip,
    ]),
}));

// Agent mock data
export const agents = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah@realestategroup.com",
    phone: "(555) 123-4567",
    image: "/professional-woman-headshot.png",
    bio: "Award-winning real estate agent with 15 years of experience in luxury properties.",
    specialty: "Luxury Homes & Penthouses",
    listings: [1, 3],
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael@realestategroup.com",
    phone: "(555) 234-5678",
    image: "/professional-man-headshot.png",
    bio: "Specializing in family homes and suburban properties with a focus on value.",
    specialty: "Family Homes",
    listings: [2, 5],
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    email: "emma@realestategroup.com",
    phone: "(555) 345-6789",
    image: "/professional-woman-headshot-latin.jpg",
    bio: "Young agent with expertise in urban apartments and starter homes.",
    specialty: "Urban Properties",
    listings: [4, 6],
  },
];

// Get property by ID
export function getPropertyById(id) {
  return properties.find((p) => p.id === Number.parseInt(id));
}

// Get property by address slug
export function getPropertyByAddressSlug(slug) {
  return properties.find((p) => p.addressSlug === slug);
}

// Get featured properties
export function getFeaturedProperties() {
  return properties.filter((p) => p.featured);
}

// Get agent by ID
export function getAgentById(id) {
  return agents.find((a) => a.id === Number.parseInt(id));
}

// Get all properties for an agent
export function getAgentProperties(agentId) {
  return properties.filter((p) => p.agent === agentId);
}

// Filter properties based on given filters
export function filterProperties(filters) {
  return properties.filter((property) => {
    // Check search term
    if (
      filters.searchTerm &&
      !property.title
        .toLowerCase()
        .includes(filters.searchTerm.toLowerCase()) &&
      !property.location
        .toLowerCase()
        .includes(filters.searchTerm.toLowerCase())
    ) {
      return false;
    }

    // Check price range
    if (
      property.price < filters.priceRange[0] ||
      property.price > filters.priceRange[1]
    ) {
      return false;
    }

    // Check property type
    if (
      filters.propertyType !== "all" &&
      property.type !== filters.propertyType
    ) {
      return false;
    }

    // Check bedrooms
    if (filters.bedrooms !== "all") {
      const minBedrooms = Number.parseInt(filters.bedrooms);
      if (property.bedrooms < minBedrooms) {
        return false;
      }
    }

    return true;
  });
}
