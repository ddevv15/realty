export type Address = {
  street: string;
  unit?: string;
  city: string;
  state: string;
  zip: string;
  neighborhood?: string;
  latitude: number;
  longitude: number;
  full: string;
};

export type Property = {
  id: number;
  title: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
  location: string;
  description: string;
  agent: number;
  featured: boolean;
  type: string;
  address: Address;
  addressSlug: string;
};

export type Agent = {
  id: number;
  name: string;
  email: string;
  phone: string;
  image: string;
  bio: string;
  specialty: string;
  listings: number[];
};

export type PropertyFilters = {
  searchTerm?: string;
  priceRange: [number, number];
  propertyType: string;
  bedrooms: string;
};

