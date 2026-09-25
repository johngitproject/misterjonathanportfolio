/* Services catalogue, the three offers. No prices, no results,
   no profit promises, no invented URLs: external links resolve
   through site.trainingUrl / site.bookingUrl (TODO placeholders). */

export type ServiceCta =
  | { kind: "mailto"; label: string; subject: string }
  | { kind: "external"; label: string; urlKey: "trainingUrl" | "bookingUrl" }
  | { kind: "internal"; label: string; href: string };

export interface Service {
  number: string;
  name: string;
  positioning: string;
  tagline: string;
  description: string[];
  points?: string[];
  pointsLabel?: string;
  cta: ServiceCta;
}

export const services: Service[] = [
  {
    number: "01",
    name: "Freelance",
    positioning: "Coding & Trading Projects",
    tagline: "You bring the need. I design and build the solution.",
    description: [
      "I develop custom solutions for projects around software, data and trading, from a single script to a full analytical tool.",
    ],
    points: [
      "Python / backend development",
      "Data processing",
      "Dashboards",
      "Trading tools",
      "Indicators",
      "Automation",
      "Data pipelines",
      "Research tools",
    ],
    pointsLabel: "Representative examples",
    cta: { kind: "internal", label: "Start a Project", href: "/services/start-project" },
  },
  {
    number: "02",
    name: "Trading Education",
    positioning: "Learn the Process",
    tagline: "A structured way to learn trading, process over tips.",
    description: [
      "A structured training program around trading: not personalized consulting, but a methodology you can study, practice and make your own.",
    ],
    points: [
      "A structured approach to trading",
      "Market analysis",
      "Building a methodology",
      "Researching and validating ideas",
      "Discipline and decision process",
    ],
    pointsLabel: "What you learn",
    cta: { kind: "external", label: "Start Learning", urlKey: "trainingUrl" },
  },
  {
    number: "03",
    name: "Trading System Development",
    positioning: "Build Your Edge",
    tagline:
      "Turn a trading idea into a structured, testable, potentially automatable system.",
    description: [
      "Not signals, not tips: specialized guidance to design and build a working trading system, from a first intuition to a measurable, testable process.",
      "You can arrive with a strategy idea, a market intuition, a discretionary method, an existing strategy to test, an indicator idea, a validation problem or an automation need.",
    ],
    cta: { kind: "external", label: "Book a Call", urlKey: "bookingUrl" },
  },
];

export interface SystemStep {
  index: string;
  title: string;
  description: string;
}

/* Service 03 research & development flow. */
export const systemProcess: SystemStep[] = [
  { index: "01", title: "Idea", description: "Clarify the trading idea or hypothesis." },
  { index: "02", title: "Rules", description: "Turn the idea into explicit, measurable rules." },
  { index: "03", title: "Data", description: "Identify, prepare and structure the required data." },
  { index: "04", title: "Backtesting", description: "Historically test the system logic." },
  { index: "05", title: "Validation", description: "Analyze results, risks, biases and robustness." },
  { index: "06", title: "Automation", description: "Where relevant, automate collection, analysis, signals or parts of the system." },
  { index: "07", title: "System", description: "Build an exploitable, improvable methodology." },
];

export const howItWorks: SystemStep[] = [
  { index: "01", title: "Discover", description: "Understand the project, goal or trading problem." },
  { index: "02", title: "Define", description: "Clarify the scope, methodology and expected outcome." },
  { index: "03", title: "Build", description: "Develop, test or structure the solution." },
  { index: "04", title: "Deliver", description: "Deliver the final system, knowledge or next step." },
];

export const servicesHero = {
  eyebrow: "Services",
  title: "SERVICES",
  subtitle: "Build. Learn. Develop Your Edge.",
  description:
    "Three ways to work with me: I build your project, teach you the process, or help you turn a trading idea into a tested system.",
} as const;
