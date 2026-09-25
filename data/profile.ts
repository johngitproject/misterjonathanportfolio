/* Profile content: expertise domains, build process,
   hero and about copy. Projects serve as evidence,
   no skill percentages or ratings. */

export interface ExpertiseDomain {
  title: string;
  items: string[];
}

export const expertise: ExpertiseDomain[] = [
  {
    title: "Software Engineering",
    items: [
      "Backend",
      "Web Applications",
      "APIs",
      "System Architecture",
    ],
  },
  {
    title: "Data & Research",
    items: ["Data Analysis", "Data Science", "Quantitative Research", "Backtesting"],
  },
  {
    title: "AI",
    items: ["AI Applications", "LLM-based Systems", "Data-driven Intelligence"],
  },
  {
    title: "Financial Systems",
    items: [
      "Trading Systems",
      "Market Analysis",
      "Macro Research",
      "Market Data",
    ],
  },
];

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
}

export const process: ProcessStep[] = [
  {
    index: "01",
    title: "Understand",
    description: "Define the problem before building the solution.",
  },
  {
    index: "02",
    title: "Research",
    description: "Explore data, assumptions and existing knowledge.",
  },
  {
    index: "03",
    title: "Model",
    description: "Turn the problem into a structured system or hypothesis.",
  },
  {
    index: "04",
    title: "Build",
    description: "Develop, integrate and automate.",
  },
  {
    index: "05",
    title: "Test & Refine",
    description: "Measure, challenge assumptions and iterate.",
  },
];

export const hero = {
  eyebrow: "01 / Mister Jonathan",
  identity: "Independent Trader & Developer",
  domains: "Data · AI · Financial Systems",
  statementTop: "I build software systems for",
  statementAccent: "trading, data & AI.",
  description:
    "Building at the intersection of software engineering, data science, artificial intelligence and financial markets.",
  meta: "Independent · 2017–Present",
  systemsPanel: ["Software", "Data", "AI", "Financial Markets"],
} as const;

export const aboutPreview = {
  index: "02",
  eyebrow: "About",
  title: "Who I am",
  description:
    "I’m an independent trader and developer building systems around markets, data and AI. My work sits at the intersection of software engineering, data science and financial research.",
} as const;
