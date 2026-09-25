/* Project track taxonomy: Domain > Category > Topic.
   Bilingual labels inline ({ en, fr }) so the cascade works
   identically in both languages with zero duplication. */

export interface TrackTopic {
  en: string;
  fr: string;
}

export interface TrackCategory {
  en: string;
  fr: string;
  topics: TrackTopic[];
}

export interface TrackDomain {
  en: string;
  fr: string;
  categories: TrackCategory[];
}

export const projectTracks: TrackDomain[] = [
  {
    en: "Coding",
    fr: "Code",
    categories: [
      {
        en: "Data & Trading Systems",
        fr: "Systèmes Data & Trading",
        topics: [
          { en: "Data pipelines", fr: "Pipelines de données" },
          { en: "Trading dashboards", fr: "Dashboards de trading" },
          { en: "Market analysis tools", fr: "Outils d’analyse de marché" },
          { en: "Python automation", fr: "Automatisation Python" },
          { en: "APIs & backend systems", fr: "APIs & systèmes backend" },
        ],
      },
      {
        en: "Custom Software",
        fr: "Logiciel sur mesure",
        topics: [
          { en: "Web applications", fr: "Applications web" },
          { en: "Internal tools", fr: "Outils internes" },
          { en: "Automation", fr: "Automatisation" },
          { en: "Data processing", fr: "Traitement de données" },
        ],
      },
    ],
  },
  {
    en: "Trading",
    fr: "Trading",
    categories: [
      {
        en: "Trading Research & Tools",
        fr: "Recherche & Outils Trading",
        topics: [
          { en: "Market research", fr: "Recherche de marché" },
          { en: "Quantitative analysis", fr: "Analyse quantitative" },
          { en: "Trading indicators", fr: "Indicateurs de trading" },
          { en: "Backtesting", fr: "Backtesting" },
          { en: "Market dashboards", fr: "Dashboards de marché" },
        ],
      },
      {
        en: "Trading Systems",
        fr: "Systèmes de Trading",
        topics: [
          { en: "Strategy development", fr: "Développement de stratégie" },
          { en: "Order-flow tools", fr: "Outils d’order-flow" },
          { en: "Risk frameworks", fr: "Cadres de risque" },
          { en: "Data-driven research", fr: "Recherche data-driven" },
        ],
      },
    ],
  },
];
