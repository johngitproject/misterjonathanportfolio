/* French content mirror. Same shapes as the English sources —
   the Bundle type in content.ts guarantees they stay in sync. */

import type { ExperienceEntry } from "@/data/experience";
import type { ExpertiseDomain, ProcessStep } from "@/data/profile";
import type { Service, SystemStep } from "@/data/services";
import type { NavItem } from "@/data/site";

export const siteFr = {
  name: "Mister Jonathan",
  role: "Trader & Développeur Indépendant",
  domains: "Data · IA · Systèmes Financiers",
  statement: "Je construis des systèmes logiciels pour le trading, la data & l’IA.",
  description:
    "À l’intersection de l’ingénierie logicielle, de la data science, de l’intelligence artificielle et des marchés financiers.",
  meta: "Indépendant · 2017—Présent",
  email: "jonathanflanda@gmail.com",
  github: "https://github.com/johngitproject",
  linkedin: "https://www.linkedin.com/in/jonathan-m-flanda-079926124",
  cvUrl: "#",
  trainingUrl: "#",
  bookingUrl: "#",
} as const;

export const navFr: NavItem[] = [
  { label: "Projets", href: "/projects" },
  { label: "À propos", href: "/about" },
  { label: "Parcours", href: "/experience" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const heroFr = {
  eyebrow: "01 / Mister Jonathan",
  identity: "Trader & Développeur Indépendant",
  domains: "Data · IA · Systèmes Financiers",
  statementTop: "Je construis des systèmes logiciels pour",
  statementAccent: "le trading, la data & l’IA.",
  description:
    "À l’intersection de l’ingénierie logicielle, de la data science, de l’intelligence artificielle et des marchés financiers.",
  meta: "Indépendant · 2017—Présent",
  systemsPanel: ["Logiciel", "Data", "IA", "Marchés Financiers"],
  statusLabel: "Statut",
  buildingLabel: "En construction",
};

export const aboutPreviewFr = {
  index: "02",
  eyebrow: "À propos",
  title: "Qui je suis",
  description:
    "Je suis trader et développeur indépendant, je construis des systèmes autour des marchés, de la data et de l’IA. Mon travail se situe à l’intersection de l’ingénierie logicielle, de la data science et de la recherche financière.",
} as const;

export const expertiseFr: ExpertiseDomain[] = [
  {
    title: "Ingénierie logicielle",
    items: ["Backend", "Applications web", "APIs", "Architecture système"],
  },
  {
    title: "Data & Recherche",
    items: [
      "Analyse de données",
      "Data science",
      "Recherche quantitative",
      "Backtesting",
    ],
  },
  {
    title: "IA",
    items: [
      "Applications IA",
      "Systèmes basés sur LLM",
      "Intelligence pilotée par la data",
    ],
  },
  {
    title: "Systèmes Financiers",
    items: [
      "Systèmes de trading",
      "Analyse de marché",
      "Recherche macro",
      "Données de marché",
    ],
  },
];

export const processFr: ProcessStep[] = [
  {
    index: "01",
    title: "Comprendre",
    description: "Définir le problème avant de construire la solution.",
  },
  {
    index: "02",
    title: "Rechercher",
    description: "Explorer données, hypothèses et savoir existant.",
  },
  {
    index: "03",
    title: "Modéliser",
    description:
      "Transformer le problème en système structuré ou hypothèse.",
  },
  {
    index: "04",
    title: "Construire",
    description: "Développer, intégrer et automatiser.",
  },
  {
    index: "05",
    title: "Tester & Affiner",
    description: "Mesurer, challenger les hypothèses et itérer.",
  },
];

export const experienceFr: ExperienceEntry[] = [
  {
    period: "2017–2019",
    organization: "IAM Global",
    role: "Commercial",
    domain: "VENTE",
    description:
      "Poste commercial. Première expérience professionnelle et découverte du travail orienté client.",
  },
  {
    period: "2020–2021",
    organization: "Trading Room Investing",
    role: "Marchés Financiers",
    domain: "MARCHÉS",
    description:
      "Évolution dans un environnement de marchés financiers, la période où la structure des marchés, la discipline et la pratique du trading sont devenues centrales.",
  },
  {
    period: "2021–2023",
    organization: "Cryptobusiness",
    role: "Consultant",
    domain: "CONSEIL",
    description:
      "Rôle de consultant dans l’univers crypto et des actifs numériques, à l’interface entre connaissance des marchés et conseil.",
  },
  {
    period: "2023–Présent",
    organization: "Indépendant",
    role: "Trader & Développeur",
    domain: "TRADING · LOGICIEL",
    description:
      "Trader et développeur indépendant construisant des systèmes logiciels autour du trading, de la data et de l’IA, le travail présenté dans ce portfolio.",
    current: true,
  },
];

export const servicesHeroFr = {
  eyebrow: "Services",
  title: "SERVICES",
  subtitle: "Construis. Apprends. Développe ton edge.",
  description:
    "Trois façons de travailler avec moi : je construis ton projet, t’enseigne la méthode, ou t’aide à transformer une idée de trading en système testé.",
} as const;

export const servicesFr: Service[] = [
  {
    number: "01",
    name: "Freelance",
    positioning: "Projets Code & Trading",
    tagline: "Tu apportes le besoin. Je conçois et construis la solution.",
    description: [
      "Je développe des solutions sur mesure pour des projets autour du logiciel, de la data et du trading, d’un simple script à un outil analytique complet.",
    ],
    points: [
      "Développement Python / backend",
      "Traitement de données",
      "Dashboards",
      "Outils de trading",
      "Indicateurs",
      "Automatisation",
      "Pipelines de données",
      "Outils de recherche",
    ],
    pointsLabel: "Exemples représentatifs",
    cta: {
      kind: "internal",
      label: "Démarrer un projet",
      href: "/services/start-project",
    },
  },
  {
    number: "02",
    name: "Formation Trading",
    positioning: "Apprends la méthode",
    tagline:
      "Une façon structurée d’apprendre le trading, la méthode avant les tuyaux.",
    description: [
      "Un programme de formation structuré autour du trading : pas du conseil personnalisé, mais une méthodologie à étudier, pratiquer et s’approprier.",
    ],
    points: [
      "Une approche structurée du trading",
      "Analyse de marché",
      "Construction d’une méthodologie",
      "Recherche et validation d’idées",
      "Discipline et processus de décision",
    ],
    pointsLabel: "Ce que tu apprends",
    cta: { kind: "external", label: "Commencer à apprendre", urlKey: "trainingUrl" },
  },
  {
    number: "03",
    name: "Développement de Système de Trading",
    positioning: "Construis ton edge",
    tagline:
      "Transformer une idée de trading en système structuré, testable et potentiellement automatisable.",
    description: [
      "Ni signaux, ni tuyaux : un accompagnement spécialisé pour concevoir et construire un système de trading fonctionnel, d’une première intuition à un processus mesurable et testable.",
      "Tu peux arriver avec une idée de stratégie, une intuition de marché, une méthode discrétionnaire, une stratégie existante à tester, une idée d’indicateur, un problème de validation ou un besoin d’automatisation.",
    ],
    cta: { kind: "external", label: "Réserver un appel", urlKey: "bookingUrl" },
  },
];

export const systemProcessFr: SystemStep[] = [
  { index: "01", title: "Idée", description: "Clarifier l’idée ou l’hypothèse de trading." },
  { index: "02", title: "Règles", description: "Transformer l’idée en règles explicites et mesurables." },
  { index: "03", title: "Data", description: "Identifier, préparer et structurer les données nécessaires." },
  { index: "04", title: "Backtesting", description: "Tester historiquement la logique du système." },
  { index: "05", title: "Validation", description: "Analyser résultats, risques, biais et robustesse." },
  {
    index: "06",
    title: "Automatisation",
    description:
      "Quand pertinent, automatiser la collecte, l’analyse, les signaux ou des parties du système.",
  },
  { index: "07", title: "Système", description: "Construire une méthodologie exploitable et améliorable." },
];

export const howItWorksFr: SystemStep[] = [
  {
    index: "01",
    title: "Découverte",
    description: "Comprendre le projet, l’objectif ou le problème de trading.",
  },
  {
    index: "02",
    title: "Cadrage",
    description: "Clarifier le périmètre, la méthodologie et le résultat attendu.",
  },
  {
    index: "03",
    title: "Construction",
    description: "Développer, tester ou structurer la solution.",
  },
  {
    index: "04",
    title: "Livraison",
    description: "Livrer le système final, la connaissance ou la prochaine étape.",
  },
];

export const contactFr = {
  ctaHeading: "Une idée à construire ?",
  ctaDesc:
    "Je suis ouvert aux projets intéressants, aux collaborations techniques et aux opportunités autour du trading, de la data, de l’IA et du logiciel.",
  metaDesc:
    "Contacte Mister Jonathan, projets intéressants, collaborations techniques et opportunités autour du trading, de la data, de l’IA et du logiciel.",
  form: {
    index: "02",
    eyebrow: "Contact",
    title: "Démarrer une conversation",
    description:
      "Écris directement, livré dans la même boîte mail, sans compte.",
  },
} as const;

export const pagesFr = {
  home: {
    projects: {
      index: "01",
      eyebrow: "Projets",
      title: "Travaux sélectionnés",
      description:
        "Systèmes logiciels, recherche de marché et infrastructure data construits autour des marchés et de la technologie.",
    },
    about: {
      index: "02",
      eyebrow: "À propos",
      title: "Qui je suis",
      roles: ["Trader", "Développeur", "Chercheur"],
    },
    experience: {
      index: "03",
      eyebrow: "Parcours",
      title: "D’où je viens",
      description:
        "Chronologie documentée, du commercial aux marchés financiers, du conseil au trading et au développement indépendants.",
    },
    expertise: {
      index: "04",
      eyebrow: "Expertise",
      title: "Ce que je sais faire",
      description:
        "Quatre domaines, prouvés par les projets ci-dessus, ni notes, ni pourcentages.",
    },
    process: {
      index: "05",
      eyebrow: "Ma méthode",
      title: "Le processus avant les fonctionnalités",
      statement:
        "Je ne construis pas seulement des fonctionnalités. J’étudie les problèmes, je modélise des systèmes et je teste ce que je construis.",
    },
  },
  projects: {
    index: "01",
    eyebrow: "Projets",
    title: "Travaux sélectionnés",
    description:
      "Systèmes logiciels, recherche quantitative et infrastructure data construits autour des marchés et de la technologie.",
  },
  about: {
    index: "01",
    eyebrow: "À propos",
    title: "Qui je suis",
    description:
      "Histoire personnelle et motivation. Pour la chronologie professionnelle documentée, voir Parcours.",
    sections: [
      {
        title: "Introduction",
        body: [
          "Je suis Mister Jonathan, trader et développeur indépendant. Mon travail se situe à l’intersection de l’ingénierie logicielle, de la data science, de l’intelligence artificielle et des marchés financiers.",
          "Ce portfolio documente ce que je construis et comment je réfléchis : systèmes de trading, recherche de marché et infrastructure data, chacun présenté avec sa méthodologie, ses limites et son statut actuel.",
        ],
      },
      {
        title: "Parcours",
        body: [
          "J’ai commencé dans le commercial, puis rejoint un environnement de marchés financiers où le trading est devenu central. Une période de conseil dans l’univers crypto et des actifs numériques a suivi.",
          "Depuis 2023, je travaille en indépendant comme trader et développeur. Cette indépendance façonne tout ici : je choisis les problèmes, je construis les systèmes, et je publie les preuves, y compris les parties non concluantes.",
        ],
      },
      {
        title: "Ce qui me motive",
        body: [
          "Les systèmes plutôt que les opinions. Les marchés récompensent la pensée structurée : définir la question, la modéliser, la construire, la tester, puis affiner. Cette boucle traverse chaque projet du site, d’une app de journaling React à la recherche de régimes macro.",
          "Les preuves plutôt que le storytelling. Un backtest avec des limites énoncées vaut mieux qu’un récit sans limites. Si un résultat est neutre ou négatif, il est quand même documenté.",
        ],
      },
    ],
    timelineLink: "VOIR LE PARCOURS",
  },
  experience: {
    index: "01",
    eyebrow: "Parcours",
    title: "Chronologie professionnelle",
    description:
        "Rôles documentés avec dates, organisation, domaine et contexte. Aucun accomplissement inventé, la période indépendante actuelle correspond au travail présenté dans ce portfolio.",
    note:
        "À propos, c’est l’histoire personnelle et la motivation, Parcours, c’est le dossier professionnel.",
  },
  services: {
      processLabel: "Le processus : recherche & développement",
    noReturnsNote:
        "Aucun rendement promis, aucune performance garantie, une méthode pour construire et valider un edge.",
    proof: {
      index: "03",
      eyebrow: "Preuve",
      title: "Travaux sélectionnés",
      description: "Les projets sont la preuve derrière les services.",
    },
    howHeader: {
      index: "02",
      eyebrow: "Processus",
      title: "Comment ça marche",
      description:
        "Un processus court pour les trois offres, pas de procédure lourde.",
    },
    startProject: {
      index: "04",
      eyebrow: "Services",
      title: "Démarrer un projet",
      description:
        "Parle-moi de ton projet, il s’ouvre en email pré-rempli. Rien n’est stocké.",
      back: "RETOUR AUX SERVICES",
    },
  },
  contact: {
    form: {
      index: "02",
      eyebrow: "Contact",
      title: "Démarrer une conversation",
      description:
        "Écris directement, livré dans la même boîte mail, sans compte.",
    },
  },
};
