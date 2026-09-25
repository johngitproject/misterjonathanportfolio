/* Central site content.
   External links and contact details are placeholders (TODO)
   to be replaced with real values. Nothing here invents
   metrics, clients, revenue or achievements. */

export const site = {
  name: "Mister Jonathan",
  role: "Independent Trader & Developer",
  domains: "Data · AI · Financial Systems",
  statement: "I build software systems for trading, data & AI.",
  description:
    "Building at the intersection of software engineering, data science, artificial intelligence and financial markets.",
  meta: "Independent · 2017–Present",
  email: "jonathanflanda@gmail.com",
  github: "https://github.com/johngitproject",
  linkedin: "https://www.linkedin.com/in/jonathan-m-flanda-079926124",
  cvUrl: "https://www.linkedin.com/in/jonathan-m-flanda-079926124", // temporaire : pointe vers LinkedIn
  // TODO: external service URLs, fill in when available, never invent.
  trainingUrl: "#",
  bookingUrl: "#",
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const nav: NavItem[] = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const projectFilters = [
  "ALL",
  "SOFTWARE",
  "DATA",
  "AI",
  "TRADING",
  "RESEARCH",
] as const;

export type ProjectFilter = (typeof projectFilters)[number];
