import { experience, type ExperienceEntry } from "@/data/experience";
import {
  aboutPreview,
  expertise,
  hero,
  process,
  type ExpertiseDomain,
  type ProcessStep,
} from "@/data/profile";
import { projects, type Project } from "@/data/projects";
import {
  howItWorks,
  services,
  servicesHero,
  systemProcess,
  type Service,
  type SystemStep,
} from "@/data/services";
import { nav, site, type NavItem } from "@/data/site";
import { getLang, type Lang } from "./lang";
import { uiEn, uiFr, type UiStrings } from "./ui";
import {
  aboutPreviewFr,
  contactFr,
  experienceFr,
  expertiseFr,
  heroFr,
  howItWorksFr,
  navFr,
  pagesFr,
  processFr,
  servicesFr,
  servicesHeroFr,
  siteFr,
  systemProcessFr,
} from "./fr";
import { projectsFr } from "./fr-projects";

export interface SectionCopy {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export interface Bundle {
  site: {
    name: string;
    role: string;
    domains: string;
    statement: string;
    description: string;
    meta: string;
    email: string;
    github: string;
    linkedin: string;
    cvUrl: string;
    trainingUrl: string;
    bookingUrl: string;
  };
  nav: NavItem[];
  hero: {
    eyebrow: string;
    identity: string;
    domains: string;
    statementTop: string;
    statementAccent: string;
    description: string;
    meta: string;
    systemsPanel: readonly string[];
    statusLabel: string;
    buildingLabel: string;
  };
  aboutPreview: { index: string; eyebrow: string; title: string; description: string };
  expertise: ExpertiseDomain[];
  process: ProcessStep[];
  experience: ExperienceEntry[];
  servicesHero: { eyebrow: string; title: string; subtitle: string; description: string };
  services: Service[];
  systemProcess: SystemStep[];
  howItWorks: SystemStep[];
  projects: Project[];
  ui: UiStrings;
  contact: { ctaHeading: string; ctaDesc: string; metaDesc: string; form: SectionCopy };
  pages: {
    home: {
      projects: SectionCopy;
      about: SectionCopy & { roles: string[] };
      experience: SectionCopy;
      expertise: SectionCopy;
      process: SectionCopy & { statement: string };
    };
    projects: SectionCopy;
    about: SectionCopy & {
      sections: { title: string; body: string[] }[];
      timelineLink: string;
    };
    experience: SectionCopy & { note: string };
    services: {
      processLabel: string;
      noReturnsNote: string;
      proof: SectionCopy;
      howHeader: SectionCopy;
      startProject: SectionCopy & { back: string };
    };
    contact: { form: SectionCopy };
  };
}

const en: Bundle = {
  site,
  nav,
  hero: { ...hero, statusLabel: "Status", buildingLabel: "Building" },
  aboutPreview,
  expertise,
  process,
  experience,
  servicesHero,
  services,
  systemProcess,
  howItWorks,
  projects,
  ui: uiEn,
  contact: {
    ctaHeading: "Have an idea worth building?",
    ctaDesc:
      "I’m open to interesting projects, technical collaborations and opportunities around trading, data, AI and software.",
    metaDesc:
      "Get in touch with Mister Jonathan, open to interesting projects, technical collaborations and opportunities around trading, data, AI and software.",
      form: {
        index: "02",
        eyebrow: "Contact",
        title: "Start a Conversation",
        description:
          "Write directly, delivered to the same inbox, no account needed.",
      },
  },
  pages: {
    home: {
      projects: {
        index: "01",
        eyebrow: "Projects",
        title: "Selected work",
        description:
          "Software systems, market research and data infrastructure built around markets and technology.",
      },
      about: {
        index: aboutPreview.index,
        eyebrow: aboutPreview.eyebrow,
        title: aboutPreview.title,
        roles: ["Trader", "Developer", "Researcher"],
      },
      experience: {
        index: "03",
        eyebrow: "Experience",
        title: "Where I come from",
        description:
          "A documented timeline, from commercial work to financial markets, consulting, and independent trading and development.",
      },
      expertise: {
        index: "04",
        eyebrow: "Expertise",
        title: "What I can do",
        description:
          "Four domains, evidenced by the projects above, no ratings, no percentages.",
      },
      process: {
        index: "05",
        eyebrow: "How I build",
        title: "Process before features",
        statement:
          "I don’t just build features. I investigate problems, model systems and test what I build.",
      },
    },
    projects: {
      index: "01",
      eyebrow: "Projects",
      title: "Selected work",
      description:
        "Software systems, quantitative research and data infrastructure built around markets and technology.",
    },
    about: {
      index: "01",
      eyebrow: "About",
      title: "Who I am",
      description:
        "Personal story and motivation. For the documented professional timeline, see Experience.",
      sections: [
        {
          title: "Introduction",
          body: [
            "I’m Mister Jonathan, an independent trader and developer. My work sits at the intersection of software engineering, data science, artificial intelligence and financial markets.",
            "This portfolio documents what I build and how I think: trading systems, market research and data infrastructure, each presented with its methodology, its limits and its current status.",
          ],
        },
        {
          title: "Background",
          body: [
            "I started in commercial work, then moved into a financial-markets environment where trading became the core focus. A consulting period in the crypto and digital-asset space followed.",
            "Since 2023 I work independently as a trader and developer. That independence shapes everything here: I choose the problems, I build the systems, and I publish the evidence, including the inconclusive parts.",
          ],
        },
        {
          title: "What drives me",
          body: [
            "Systems over opinions. Markets reward structured thinking: define the question, model it, build it, test it, then refine. That loop runs through every project on this site, from a React journaling app to macro regime research.",
            "Evidence over narrative. A backtest with stated limitations is worth more than a story without one. If a result is neutral or negative, it still gets documented.",
          ],
        },
      ],
      timelineLink: "VIEW EXPERIENCE",
    },
    experience: {
      index: "01",
      eyebrow: "Experience",
      title: "Professional timeline",
        description:
          "Documented roles with dates, organization, domain and context. No invented accomplishments, the current independent period is the work presented across this portfolio.",
        note: "About is the personal story and motivation, Experience is the professional record.",
    },
    services: {
      processLabel: "The process: research & development",
      noReturnsNote:
        "No promised returns, no guaranteed performance, a method to build and validate an edge.",
      proof: {
        index: "03",
        eyebrow: "Proof",
        title: "Selected work",
        description: "The projects are the evidence behind the services.",
      },
      howHeader: {
        index: "02",
        eyebrow: "Process",
        title: "How it works",
        description:
          "One short process for all three offers, no heavy procedure.",
      },
      startProject: {
        index: "04",
        eyebrow: "Services",
        title: "Start a Project",
        description:
          "Tell me about your project, it opens as a pre-filled email. Nothing is stored.",
        back: "BACK TO SERVICES",
      },
    },
    contact: {
      form: {
        index: "02",
        eyebrow: "Contact",
        title: "Start a Conversation",
        description:
          "Write directly, delivered to the same inbox, no account needed.",
      },
    },
  },
};

const fr: Bundle = {
  site: siteFr,
  nav: navFr,
  hero: heroFr,
  aboutPreview: aboutPreviewFr,
  expertise: expertiseFr,
  process: processFr,
  experience: experienceFr,
  servicesHero: servicesHeroFr,
  services: servicesFr,
  systemProcess: systemProcessFr,
  howItWorks: howItWorksFr,
  projects: projectsFr,
  ui: uiFr,
  contact: contactFr,
  pages: pagesFr,
};

export const content: Record<Lang, Bundle> = { en, fr };

export async function getDictionary(): Promise<Bundle> {
  const lang = await getLang();
  return content[lang];
}
