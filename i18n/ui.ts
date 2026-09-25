import type { ProjectStatus } from "@/data/projects";

/* Chrome strings (everything that is not project content).
   Tags, filters and status codes stay in English everywhere —
   they are functional taxonomy, not prose. */

export interface UiStrings {
  menu: string;
  close: string;
  viewAllProjects: string;
  viewProject: string;
  readMore: string;
  viewTimeline: string;
  backToProjects: string;
  nextProject: string;
  backToTop: string;
  overview: string;
  roleInSystem: string;
  keyMetrics: string;
  engineering: string;
  interface: string;
  results: string;
  statusNext: string;
  repository: string;
  repoComingSoon: string;
  docComingSoon: string;
  viewOnGithub: string;
  technicalDoc: string;
  noFilterTitle: string;
  noFilterDesc: string;
  metaType: string;
  metaStack: string;
  metaRole: string;
  metaYear: string;
  breadcrumbProjects: string;
  directChannels: string;
  workingNote: string;
  metricsPending: string;
  metricsCalculated: string;
  resultsDefault: Record<ProjectStatus, string>;
  illustrativePrefix: string;
  additionalView: string;
  placeholderWord: string;
  theVisual: string;
  overviewSuffix: string;
  portraitTitle: string;
  startConversation: string;
  freelanceSubject: string;
  projectSubject: string;
  notFoundTitle: string;
  notFoundDesc: string;
  notFoundBack: string;
  comingSoonSuffix: string;
  form: {
    fullName: string;
    company: string;
    email: string;
    language: string;
    country: string;
    domain: string;
    category: string;
    topic: string;
    description: string;
    submit: string;
    selectPrompt: string;
    sending: string;
    sentOk: string;
    sentFail: string;
    other: string;
    otherTopic: string;
  };
  contactForm: {
    name: string;
    email: string;
    message: string;
    submit: string;
    sending: string;
    sentOk: string;
    sentFail: string;
    noKey: string;
  };
  heroPrimary: string;
  heroSecondary: string;
  viewExperience: string;
  techDomains: string;
  calculatedWord: string;
}

export const uiEn: UiStrings = {
  menu: "MENU",
  close: "CLOSE",
  viewAllProjects: "VIEW ALL PROJECTS",
  viewProject: "VIEW PROJECT",
  readMore: "READ MORE",
  viewTimeline: "VIEW FULL TIMELINE",
  backToProjects: "BACK TO PROJECTS",
  nextProject: "Next project",
  backToTop: "BACK TO TOP",
  overview: "Overview",
  roleInSystem: "Role in the system",
  keyMetrics: "Key Metrics",
  engineering: "Engineering",
  interface: "Interface",
  results: "Results",
  statusNext: "Status / Next",
  repository: "Repository",
  repoComingSoon: "Repository: Coming soon",
  docComingSoon: "Technical documentation: Coming soon",
  viewOnGithub: "VIEW ON GITHUB",
  technicalDoc: "TECHNICAL DOCUMENTATION",
  noFilterTitle: "No projects under this filter yet",
  noFilterDesc:
    "New work in this area is planned, the catalogue is data-driven, so it will appear here automatically once added.",
  metaType: "Type",
  metaStack: "Stack",
  metaRole: "Role",
  metaYear: "Year",
  breadcrumbProjects: "Projects",
  directChannels: "Direct channels",
  workingNote: "Working independently",
  metricsPending:
    "No figures are published, slots will be filled with verified data only.",
  metricsCalculated:
    "Capabilities computed by the system, not results achieved.",
  resultsDefault: {
    LIVE: "Live. Public metrics pending publication.",
    "IN DEVELOPMENT": "Validation ongoing.",
    RESEARCH: "No results claimed yet. Findings will be published here.",
    CONCEPT: "No results. Concept stage.",
  },
  illustrativePrefix: "Illustrative",
  additionalView: "Additional view",
  placeholderWord: "Placeholder",
  theVisual: "The visual",
  overviewSuffix: "Overview",
  portraitTitle: "Portrait",
  startConversation: "START A CONVERSATION",
  freelanceSubject: "Freelance Project Inquiry",
  projectSubject: "[Portfolio] Project Inquiry",
  notFoundTitle: "Page not found",
  notFoundDesc:
    "This level doesn’t exist in the dataset. Head back to the overview.",
  notFoundBack: "BACK HOME",
  comingSoonSuffix: "— Coming soon",
  form: {
    fullName: "Full name",
    company: "Company (optional)",
    email: "Email address",
    language: "Language",
    country: "Country",
    domain: "Domain",
    category: "Category",
    topic: "Topic",
    description: "Project description",
    submit: "Send via email",
    selectPrompt: "Select…",
    sending: "Sending…",
    sentOk: "Message sent. I'll reply soon.",
    sentFail: "Sending failed: ",
    other: "Other",
    otherTopic: "Specify your topic",
  },
  contactForm: {
    name: "Name",
    email: "Email address",
    message: "Message",
    submit: "Send message",
    sending: "Sending…",
    sentOk: "Message sent. I'll reply soon.",
    sentFail: "Sending failed: ",
    noKey: "Email service not configured yet.",
  },
  heroPrimary: "VIEW PROJECTS",
  heroSecondary: "ABOUT ME",
  viewExperience: "VIEW EXPERIENCE",
  techDomains: "Technologies and domains",
  calculatedWord: "Calculated",
};

export const uiFr: UiStrings = {
  menu: "MENU",
  close: "FERMER",
  viewAllProjects: "VOIR TOUS LES PROJETS",
  viewProject: "VOIR LE PROJET",
  readMore: "LIRE LA SUITE",
  viewTimeline: "VOIR TOUT LE PARCOURS",
  backToProjects: "RETOUR AUX PROJETS",
  nextProject: "Projet suivant",
  backToTop: "RETOUR EN HAUT",
  overview: "Aperçu",
  roleInSystem: "Rôle dans le système",
  keyMetrics: "Indicateurs clés",
  engineering: "Ingénierie",
  interface: "Interface",
  results: "Résultats",
  statusNext: "Statut / Suite",
  repository: "Dépôt",
  repoComingSoon: "Dépôt : Bientôt disponible",
  docComingSoon: "Documentation technique : Bientôt disponible",
  viewOnGithub: "VOIR SUR GITHUB",
  technicalDoc: "DOCUMENTATION TECHNIQUE",
  noFilterTitle: "Aucun projet pour ce filtre pour l’instant",
  noFilterDesc:
    "De nouveaux travaux sont prévus dans ce domaine, le catalogue est piloté par les données, ils apparaîtront ici automatiquement.",
  metaType: "Type",
  metaStack: "Stack",
  metaRole: "Rôle",
  metaYear: "Année",
  breadcrumbProjects: "Projets",
  directChannels: "Canaux directs",
  workingNote: "Travail en indépendant",
  metricsPending:
    "Aucun chiffre publié, les emplacements seront remplis avec des données vérifiées uniquement.",
  metricsCalculated:
    "Capacités calculées par le système, pas des résultats obtenus.",
  resultsDefault: {
    LIVE: "En ligne. Métriques publiques en attente.",
    "IN DEVELOPMENT": "Validation en cours.",
    RESEARCH:
      "Aucun résultat revendiqué pour l’instant. Les résultats seront publiés ici.",
    CONCEPT: "Aucun résultat. Stade concept.",
  },
  illustrativePrefix: "Illustratif",
  additionalView: "Vue supplémentaire",
  placeholderWord: "Placeholder",
  theVisual: "Le visuel",
  overviewSuffix: "Aperçu",
  portraitTitle: "Portrait",
  startConversation: "DÉMARRER UNE CONVERSATION",
  freelanceSubject: "Demande de projet freelance",
  projectSubject: "[Portfolio] Demande de projet",
  notFoundTitle: "Page introuvable",
  notFoundDesc:
    "Ce niveau n’existe pas dans le dataset. Retourne à la vue d’ensemble.",
  notFoundBack: "RETOUR",
  comingSoonSuffix: "— Bientôt disponible",
  form: {
    fullName: "Nom complet",
    company: "Société (optionnel)",
    email: "Adresse email",
    language: "Langue",
    country: "Pays",
    domain: "Domaine",
    category: "Catégorie",
    topic: "Sujet",
    description: "Description du projet",
    submit: "Envoyer par email",
    selectPrompt: "Choisir…",
    sending: "Envoi…",
    sentOk: "Message envoyé. Je réponds vite.",
    sentFail: "Échec d’envoi : ",
    other: "Autre",
    otherTopic: "Précise ton sujet",
  },
  contactForm: {
    name: "Nom",
    email: "Adresse email",
    message: "Message",
    submit: "Envoyer",
    sending: "Envoi…",
    sentOk: "Message envoyé. Je réponds vite.",
    sentFail: "Échec d’envoi : ",
    noKey: "Service email non configuré.",
  },
  heroPrimary: "VOIR LES PROJETS",
  heroSecondary: "À PROPOS",
  viewExperience: "VOIR LE PARCOURS",
  techDomains: "Technologies et domaines",
  calculatedWord: "Calculé",
};
