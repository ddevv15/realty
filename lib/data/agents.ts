import { Agent } from "@/lib/types/property";
import { properties } from "@/lib/data/properties";

export const agents: Agent[] = [
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

export const getAgentById = (id: number | string) =>
  agents.find((agent) => agent.id === Number.parseInt(String(id)));

export const getAgentProperties = (agentId: number) =>
  properties.filter((property) => property.agent === agentId);

