/* Professional timeline. Only documented roles are listed,
   no invented accomplishments, clients or outcomes. */

export interface ExperienceEntry {
  period: string;
  organization: string;
  role: string;
  domain: string;
  description: string;
  current?: boolean;
}

export const experience: ExperienceEntry[] = [
  {
    period: "2017–2019",
    organization: "IAM Global",
    role: "Commercial",
    domain: "SALES",
    description:
      "Commercial role. First professional experience and introduction to client-facing work.",
  },
  {
    period: "2020–2021",
    organization: "Trading Room Investing",
    role: "Financial Markets",
    domain: "MARKETS",
    description:
      "Worked inside a financial-markets environment, the period where market structure, discipline and trading practice became the core focus.",
  },
  {
    period: "2021–2023",
    organization: "Cryptobusiness",
    role: "Consultant",
    domain: "CONSULTING",
    description:
      "Consulting role in the crypto and digital-asset space, bridging market knowledge and advisory work.",
  },
  {
    period: "2023–Present",
    organization: "Independent",
    role: "Trader & Developer",
    domain: "TRADING · SOFTWARE",
    description:
      "Independent trader and developer building software systems around trading, data and AI, the work presented in this portfolio.",
    current: true,
  },
];
