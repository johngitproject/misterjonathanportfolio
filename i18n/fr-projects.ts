import type { Project } from "@/data/projects";

/* French project mirror. Same slugs, statuses, tags, stacks, code
    lines and links, only prose is translated. The Project type
   guarantees structural parity with the English source. */

export const projectsFr: Project[] = [
  {
    id: "perf-tracker",
    number: "01",
    slug: "perf-tracker",
    title: "Perf Tracker",
    subtitle: "Analytique de performance pour le trading",
    category: "Trading / Data",
    shortDescription: "Système de performance & journaling pour le trading.",
    longDescription: [
      "TraderDesk Performance Tracker est une application Windows locale conçue pour transformer les données brutes de trading futures en analyse structurée de performance, de risque et d’exécution.",
      "Le système combine analytique des trades, journaling, analyse MAE/MFE, suivi de la discipline, métriques de risque et simulation Monte Carlo dans un environnement hors-ligne unique.",
      "L’objectif n’est pas seulement de mesurer le P&L, mais de comprendre comment la performance est produite, combien de risque est réellement subi, et où l’exécution peut progresser.",
      "Conçu pour les futures NQ, MNQ et US30 à travers une lecture AMT / Volume Profile / Order Flow (pas ICT/SMC) et développé en public comme TraderDesk / Africa TraderIA pour un public francophone et africain.",
    ],
    status: "IN DEVELOPMENT",
    type: "product",
    tags: ["REACT", "ELECTRON", "TRADING", "DATA"],
    stack: ["REACT", "ELECTRON", "INDEXEDDB", "RECHARTS", "JAVASCRIPT"],
    year: "2026",
    role: "Développeur indépendant",
    ecosystem:
      "La couche d’audit de performance du portfolio : transforme les exécutions futures brutes en revue structurée de performance, de risque et de comportement.",
    featured: true,
    highlight:
      "Analytique desktop locale, journaling et audit du risque pour le trading futures.",
    github: "https://github.com/johngitproject/perf-tracker",
    cover: {
      src: "/projects/perf-tracker/cover.jpg",
      alt: "Architecture système de TraderDesk Performance Tracker : de l’import CSV NinjaTrader au dashboard, journal et rapport",
      ratio: "16 / 9",
    },
    features: [
      "Analytique des trades et statistiques de performance",
      "Journal de trading intégré avec contexte et émotions",
      "Analyse MAE/MFE et du risque",
      "Simulation Monte Carlo et rapports PDF",
    ],
    engineering: [
      { tech: "React 19", role: "Interface utilisateur." },
      { tech: "Vite 8", role: "Outillage de build." },
      { tech: "Electron 43", role: "Runtime desktop." },
      { tech: "IndexedDB / idb", role: "Persistance locale." },
      { tech: "Recharts 3", role: "Visualisation de données." },
      { tech: "PapaParse", role: "Parsing CSV." },
      { tech: "jsPDF + html2canvas", role: "Génération de rapports PDF." },
      { tech: "electron-builder", role: "Packaging Windows." },
    ],
    metrics: [
      "Profit Factor",
      "Expectance",
      "Win Rate",
      "SQN",
      "Sharpe",
      "Sortino",
      "Calmar",
      "Ulcer",
      "Kelly",
      "VaR",
      "Avg R",
    ],
    metricsState: "calculated",
    resultsNote:
      "Application terminée. Tests du parseur et des métriques implémentés, flux base de données testé, build Windows généré. Suite : validation sur datasets, workflow de distribution, préparation open-source et tests en production.",
    interfaceNote:
      "Captures réelles de l’application : dashboard, courbe d’equity, journal, simulation Monte Carlo, rapport et analyse MAE/MFE. Les chiffres visibles sont des données de démonstration présentant l’interface, pas des résultats de trading vérifiés.",
    screenshots: [
      {
        src: "/projects/perf-tracker/dashboard.png",
        label: "Dashboard : vue d’ensemble",
        caption: "Net P&L, risque et distribution des R-multiples en un coup d’œil.",
        ratio: "1.96 / 1",
      },
      {
        src: "/projects/perf-tracker/equity-curve.png",
        label: "Courbe d’equity",
        caption: "Equity réalisée contre equity latente, le risque réellement subi.",
        ratio: "2.22 / 1",
      },
      {
        src: "/projects/perf-tracker/journal.png",
        label: "Journal",
        caption: "Journées calendrier avec P&L, contexte, émotions et conformité.",
        ratio: "1.95 / 1",
      },
      {
        src: "/projects/perf-tracker/monte-carlo.png",
        label: "Simulation Monte Carlo",
        caption:
          "Bootstrap sur le netProfit par trade : fan chart, probabilités de ruine et de cible.",
        ratio: "2.3 / 1",
      },
      {
        src: "/projects/perf-tracker/report.png",
        label: "Rapport PDF",
        caption: "PDF A4 structuré en huit sections.",
        ratio: "1.94 / 1",
      },
      {
        src: "/projects/perf-tracker/mae-mfe.png",
        label: "Analyse MAE / MFE",
        caption: "Scatter, seuil et qualité de sortie en profit sur MFE.",
        ratio: "2.54 / 1",
      },
    ],
    sections: [
      {
        title: "Objectif",
        paragraphs: [
          "Objectif principal : construire un environnement privé, local et structuré pour auditer la performance de trading au-delà du simple P&L.",
        ],
        list: [
          "Quantifier le risque réalisé et latent",
          "Analyser les distributions de trades",
          "Étudier MAE/MFE",
          "Mesurer la qualité d’exécution",
          "Relier résultats et contexte du journal",
          "Suivre la discipline",
          "Simuler des trajectoires d’equity possibles",
          "Générer des rapports structurés",
        ],
      },
      {
        title: "Le problème",
        paragraphs: [
          "Un compte de trading peut afficher un résultat profitable sans expliquer comment ce résultat a été produit.",
          "L’historique standard montre entrées, sorties et P&L, mais cache drawdown latent, qualité d’exécution, discipline et contexte émotionnel. TraderDesk réunit ces dimensions dans un workflow analytique local.",
        ],
        flow: [
          "DONNÉES BRUTES : Que s’est-il passé ?",
          "PERFORMANCE : Combien a été gagné ?",
          "RISQUE : Quelle exposition réelle ?",
          "EXÉCUTION / DISCIPLINE : Pourquoi ?",
        ],
      },
      {
        title: "Le système",
        paragraphs: [
          "Application desktop locale : les exports NinjaTrader sont parsés, normalisés et regroupés en opérations, analysés localement et persistés dans IndexedDB, un seul store pour dashboard, journal et rapports. Sauvegarde en JSON ; aucun compte, aucun cloud, aucune donnée ne quitte la machine.",
        ],
        flow: [
          "CSV NINJATRADER",
          "PARSEUR CSV",
          "NORMALISATION",
          "REGROUPEMENT",
          "MOTEUR ANALYTIQUE",
          "INDEXEDDB",
          "DASHBOARD / JOURNAL / RAPPORT",
        ],
      },
      {
        title: "Flux de données",
        paragraphs: [
          "CSV NinjaTrader Grid en entrée : parsing, mapping de colonnes, normalisation des dates, détection de doublons, regroupement et agrégation, vers un store IndexedDB local alimentant dashboard, journal, rapports, Monte Carlo et sauvegarde JSON.",
        ],
        list: [
          "`accounts`",
          "`trades`",
          "`uploadBatches`",
          "`journalEntries`",
          "`settings`",
        ],
      },
      {
        title: "Règle métier : NinjaTrader",
        paragraphs: [
          "Une vraie décision d’ingénierie : le champ Profit du CSV NinjaTrader Grid est déjà net, le système l’utilise directement et ne soustrait jamais les frais deux fois.",
          "`totalFees` reste disponible à titre informatif, affiché, jamais déduit deux fois.",
        ],
        code: ["netProfit = profit"],
      },
      {
        title: "Regroupement des opérations",
        paragraphs: [
          "Les exécutions deviennent des opérations quand elles partagent compte et instrument, sortent à une minute d’intervalle et se chevauchent, l’agrégation somme alors performance signée et excursion adverse absolue.",
        ],
        code: [
          "same account + same instrument",
          "exit time difference ≤ 1 minute",
          "overlapping intervals",
          "profitTotal = Σ netProfit",
          "maeAgrege = Σ |MAE|",
        ],
      },
      {
        title: "Moteur de risque",
        paragraphs: [
          "Deux equities : la réalisée suit les résultats clôturés ; la latente soustrait le MAE agrégé à l’equity précédente, révélant le risque que les résultats clôturés cachent. Le drawdown latent se mesure du pic précédent à cette equity latente.",
        ],
        code: [
          "equityLatente(i) = equity(i-1) - maeAgrege",
          "drawdownLatent = peak(i-1) - equityLatente",
        ],
      },
      {
        title: "Modèle de risque du compte",
        paragraphs: [
          "Chaque compte porte capital, drawdown maximum, cible et % de cible : en variantes EOD (maximum calculé sur les clôtures journalières) et trailing (plus haut intraday plus information latente).",
        ],
      },
      {
        title: "Dashboard",
        paragraphs: [
          "Cinq familles de capacités partageant un seul dataset, chaque chiffre ci-dessous est calculé par le système, jamais revendiqué comme résultat obtenu.",
        ],
        list: [
          "Performance : Net P&L, Win Rate, Profit Factor, Expectancy, Payoff, Avg R",
          "Risque : Max Drawdown, Sharpe, Sortino, Calmar, Ulcer, Kelly, VaR 95%",
          "Analytique des trades : R-multiples, distribution P&L, séries, MAE/MFE, qualité de sortie",
          "Analyse temporelle : P&L par période, Heatmap, expectance par période",
          "Comportement : Discipline, respect du plan, émotions",
        ],
      },
      {
        title: "Journal",
        paragraphs: [
          "Le journal est la couche contexte de la même boucle, chaque journée porte P&L, analyse, screenshots, plan, émotions, checklist pré-trade et conformité, reliant chaque trade à sa performance et à sa revue.",
        ],
        flow: ["TRADE", "PERFORMANCE", "JOURNAL", "CONTEXTE", "REVUE"],
        list: [
          "Calendrier mensuel",
          "P&L quotidien",
          "Analyse quotidienne",
          "Screenshots",
          "Plan de trading",
          "Tags de contexte",
          "Émotions",
          "Checklist pré-trade",
          "Conformité",
          "Trades du jour",
        ],
      },
      {
        title: "MAE / MFE",
        paragraphs: [
          "Un espace dédié étudie le risque réellement traversé par les opérations : scatter MAE/MFE, seuil MAE manuel avec compteurs sous/au-dessus et pourcentages, qualité de sortie en profit sur MFE.",
        ],
        list: [
          "Scatter MAE vs MFE",
          "Seuil MAE manuel",
          "Compteurs sous / au-dessus du seuil",
          "Part du total par côté",
          "Qualité de sortie : profit / MFE",
        ],
      },
      {
        title: "Monte Carlo",
        paragraphs: [
          "Composant analytique avancé : bootstrap avec remise sur le netProfit par trade, seed rejouable, fan chart et probabilités.",
          "Limite énoncée d’emblée, le modèle suppose une distribution i.i.d. et ne modélise pas explicitement les séries.",
        ],
        list: [
          "100–10 000 simulations (défaut 5 000)",
          "Horizon configurable (défaut 200)",
          "Seed rejouable",
          "Bootstrap avec remise sur le netProfit par trade",
          "Fan chart P5–P95",
          "Histogramme des résultats finaux",
          "Probabilité de ruine",
          "Probabilité d’atteindre la cible",
        ],
      },
      {
        title: "Génération de rapports",
        paragraphs: [
          "Rapports structurés générés dans l’application et exportés en PDF A4, avec graphiques capturés directement pour le document.",
        ],
        list: [
          "01 : Résumé exécutif",
          "02 : Performance",
          "03 : Risque",
          "04 : Trades",
          "05 : MAE / MFE",
          "06 : Analyse temporelle",
          "07 : Conclusion",
          "08 : Monte Carlo",
        ],
      },
      {
        title: "Sauvegarde",
        paragraphs: [
          "Tout l’état local (comptes, trades, batches, journaux, paramètres) voyage dans une seule sauvegarde JSON ; l’import la restaure et ne remplace les données existantes qu’après confirmation.",
        ],
        flow: ["EXPORT", "SAUVEGARDE JSON", "IMPORT"],
      },
      {
        title: "Sécurité / Confidentialité",
        paragraphs: [
          "Local-first par conception, aucun compte, cloud, publicité ou upload externe, avec isolation de contexte, sandboxing et liens externes via le shell du système côté Electron.",
          "Ceci décrit l’architecture. Ce n’est pas présenté comme une certification de sécurité.",
        ],
      },
      {
        title: "Tests",
        paragraphs: [
          "Validation mécanique, pas un score qualité : checks automatisés du parsing et des métriques, du flux base de données et du lint.",
        ],
        list: [
          "Parseur + métriques : ~75 assertions",
          "Flux base de données : fake-indexeddb",
          "Lint : 0 erreur",
        ],
      },
    ],
    statusNext: [
      "Préparer le workflow de distribution (installeur, release)",
      "Héberger l’installeur et la documentation",
      "Préparer la release open-source",
      "Valider avec des datasets de production",
      "Version application web (prévue)",
    ],
  },
  {
    id: "market-research",
    number: "02",
    slug: "market-research",
    title: "Market Research & Indicators",
    subtitle:
      "Recherche systématique sur l’information générée par le marché et les niveaux clés.",
    category: "Trading / Research",
    shortDescription:
      "Recherche systématique sur l’information générée par le marché et les niveaux clés.",
    longDescription: [
      "Un programme de recherche unique à plusieurs modules : MGI (Market Generated Information), niveaux d’Open Range, structure de volatilité, DeltaProfile, swing zones et accept zones, avec un backtest exploratoire des niveaux clés et de la mémoire des marchés, en commençant par les swing levels (`mgi-context-backtest`).",
      "Le dépôt est organisé en mono-repo : un dossier par indicateur, avec documentation, code et notebooks de backtest côte à côte.",
    ],
    status: "RESEARCH",
    type: "research",
    tags: ["PYTHON", "DATA", "TRADING", "RESEARCH", "BACKTESTING"],
    stack: ["PYTHON"],
    year: "2025–Présent",
    role: "Chercheur indépendant",
    ecosystem:
      "La couche de recherche niveaux-et-mémoire : du contexte systématique pour des décisions de trading discrétionnaires.",
    highlight:
      "Information générée par le marché, niveaux clés et effets de mémoire.",
    cover: {
      src: "/projects/market-research/cover.jpg",
      alt: "Illustration Market Research : analyse chandeliers se résolvant en information structurée",
      ratio: "16 / 9",
    },
    github: "https://github.com/johngitproject/mgi-indicators",
    interfaceNote:
      "Outputs de backtest figés, chiffres de recherche issus de runs figés (AcceptZone S1, pool portefeuille), pas des résultats de trading live. Coûts et slippage exclus sauf mention.",
    screenshots: [
      {
        src: "/projects/market-research/equity-acceptzone-s1.png",
        label: "AcceptZone S1 : net cumulé par sortie",
        caption:
          "NQ LONG S1, n=197, net 675 240 $, 2022-12-18 au 2025-12-12. Source : `backtest_out/acceptzone_dca/long/cycles.csv.`",
        ratio: "1.85 / 1",
      },
      {
        src: "/projects/market-research/distribution-acceptzone.png",
        label: "AcceptZone S1 : composition des sorties",
        caption:
          "TP 160 / Emergency 23 / Expired 12 / EOD 2. Adds 0/1/2/3 : 113/42/38/4. Même run figé.",
        ratio: "2.4 / 1",
      },
    ],
    engineering: [
      {
        tech: "Python",
        role: "Collecte de données, notebooks de backtest et mesure statistique.",
      },
    ],
    metrics: ["Taux de réussite", "Expectance", "Taille d’échantillon", "Coûts de transaction"],
    sections: [
      {
        title: "Question de recherche",
        paragraphs: [
          "Les niveaux de prix historiquement significatifs (points de swing, opening ranges, information précédemment générée) portent-ils une mémoire mesurable, observable systématiquement plutôt qu’anecdotiquement ?",
        ],
      },
      {
        title: "Hypothèse",
        paragraphs: [
          "Les marchés se souviennent : les niveaux de génération ou d’absorption significative d’information devraient montrer une signature comportementale détectable lors des visites suivantes (en rejet, acceptation ou volatilité), testée d’abord sur les swing levels (`mgi-context-backtest`), puis Open Range et structure de volatilité.",
        ],
      },
      {
        title: "Méthodologie",
        paragraphs: [
          "Chaque module suit le même pipeline pour des résultats comparables : définir le niveau objectivement, collecter les données, spécifier la mesure à l’avance, lancer le backtest, puis documenter limites et résultats ensemble.",
          "Seules les versions actuelles des indicateurs sont documentées ici ; l’historique des versions vit dans le dépôt.",
        ],
        flow: [
          "Question de recherche",
          "Hypothèse",
          "Données",
          "Méthode",
          "Backtest",
          "Résultats",
          "Limites",
        ],
      },
      {
        title: "Backtest",
        paragraphs: [
          "Backtests figés des niveaux clés et de la mémoire des marchés, en commençant par les swing levels, notebooks et outputs figés dans `backtest_out/`, un dossier par run. Les chiffres publiés ci-dessous viennent uniquement de ces fichiers figés.",
          "AcceptZone S1 LONG : `backtest_out/acceptzone_dca/long/cycles.csv`. InitialZone LONG : `backtest_out/initzone_dca/long/cycles.csv`. Pool F1+F2+S1+S2 : `backtest_out/portfolio_daily/daily_4x/equity_by_exit.csv`.",
        ],
      },
      {
        title: "Résultats",
        paragraphs: [
          "AcceptZone S1 LONG (NQ, D1, 2022-12-18 au 2025-12-12) : n=197, WR 83,2 %, net 675 240 $, moy. 3 428 $, PF 1,62. Sorties : TP 160 / Emergency 23 / Expired 12 / EOD 2. Source : stats.md du même run figé.",
          "InitialZone LONG (NQ, D1, même période) : n=83, WR 83,1 %, net 318 037 $, moy. 3 832 $, PF 1,59. Source : `backtest_out/initzone_dca/long/stats.md`.",
          "Pool portefeuille Daily 4x (F1+F2+S1+S2, somme simple, sans composition, frais et slippage exclus) : n=398, WR 85,4 %, net 1 669 101 $, PF 1,87. Ordonné par heure de sortie, pas une equity tradable. Source : stats_portfolio.md.",
          "Le côté short diffère : AcceptZone SHORT n=146, WR 58,2 %, net -724 724 $, PF 0,54. Publié pour éviter le cherry-picking.",
        ],
      },
      {
        title: "Limites",
        paragraphs: [
          "Limites connues : biais de look-ahead dans la définition des niveaux, dépendance au régime des effets de niveaux, coûts de transaction ignorés par les fills papier. Les résultats négatifs et neutres seront publiés, pas cachés.",
        ],
      },
      {
        title: "Le Programme",
        paragraphs: [
          "Travaux de recherche et d’ingénierie sur l’information générée par le marché, la structure de marché, la volatilité, le volume, le delta et les niveaux de prix persistants.",
          "Le programme suit un fil unique : les données de marché deviennent information, information révèle la structure à travers niveaux, volatilité et volume, et la structure fournit le contexte de recherche. Des outils de recherche et d’ingénierie pour l’analyse des marchés, pas des indicateurs commerciaux.",
        ],
        flow: [
          "Données de marché",
          "Information",
          "Structure",
          "Niveaux / Volatilité / Volume",
          "Contexte",
          "Recherche",
        ],
      },
      {
        title: "MGI : Market Generated Information",
        subtitle:
          "Extraire l’information générée directement par le comportement du marché.",
        status: "Experimental",
        glyph: "data",
        paragraphs: [
          "Rôle : exploiter l’information produite directement par le marché : prix, volume, structure, volatilité, comportement autour des niveaux, et évolution de l’information dans le temps. L’objectif : transformer les observations en information structurée utilisable en analyse.",
          "Présenté comme aide à la décision, pas comme système prédictif automatique.",
          "Contexte de recherche : `mgi-context-backtest` (`mgicontextstrategy/mgi`) comme expérience de validation associée. Backtest terminé ; chiffres en attente de publication.",
        ],
        flow: [
          "Données de marché",
          "Extraction d’information",
          "Contexte",
          "Aide à la décision",
        ],
      },
      {
        title: "Open Range Levels",
        subtitle: "Niveaux objectifs dérivés de l’opening range.",
        status: "In Development",
        glyph: "observe",
        paragraphs: [
          "Définition : l’Open Range est défini depuis un intervalle initial de marché fixe, dont les bornes servent de niveaux de référence objectifs pour le comportement ultérieur du prix. Aucune durée de range revendiquée ici.",
          "Usage : niveaux de référence, contexte de cassure et de rejet, structure intraday, interaction avec l’action ultérieure du prix. Rien de tout cela n’est une promesse de performance.",
          "État : code implémenté dans `open-range/`, pas encore de backtest.",
        ],
      },
      {
        title: "Vol Structure",
        subtitle:
          "Lire comment la volatilité s’étend, se contracte et change selon les conditions de marché.",
        status: "In Development",
        glyph: "markets",
        paragraphs: [
          "Ce qu’elle mesure : la structure de la volatilité, si le marché est en expansion, compression ou transition, et quel régime cela implique pour le prix. Du contexte de volatilité, pas un signal prédictif.",
          "Angle de recherche : structure de volatilité, régime et contexte, expansion contre compression, relation avec le comportement du prix.",
          "État : code implémenté dans `vol-structure-level/`, pas encore de backtest.",
        ],
        flow: ["Expansion", "Compression", "Transition"],
      },
      {
        title: "DeltaProfile",
        subtitle:
          "Distribution du volume et du delta pour lire participation et structure de marché.",
        status: "In Development",
        glyph: "structure",
        paragraphs: [
          "Version actuelle uniquement, aucune version legacy, prototype obsolète ou fonctionnalité retirée n’est documentée ici.",
          "Logique : distribution du volume et du delta sur les niveaux de prix, lue comme participation et interaction entre volume, delta et structure du prix. Fidèle à l’implémentation actuelle.",
          "État : code implémenté dans `deltaprofile/`, pas encore de backtest. Aucun screenshot disponible ; aucune métrique fabriquée.",
        ],
        code: ["Price Levels ↔ Volume ↔ Delta"],
      },
      {
        title: "Swing Zones & AcceptZones",
        subtitle:
          "Détecter les zones de marché persistantes et leur mémoire à travers l’action du prix.",
        status: "Experimental",
        glyph: "iterate",
        paragraphs: [
          "Swing Zones : zones dérivées de la structure des swings, où se situent niveaux et zones importants, et comment elles évoluent avec le marché. Aucune méthode de détection non documentée revendiquée.",
          "AcceptZones : zones où le marché montre de l’acceptation, relation entre comportement du prix et persistance d’une zone, en distinguant simple passage du prix et zone à mémoire observable.",
          "Level Memory : certaines zones restent pertinentes après leur création et servent de contexte aux interactions futures du prix. Backtesté en Python (`swingzone/`, `acceptzone/`) ; chiffres en attente de publication.",
        ],
        flow: [
          "Zone détectée",
          "Interaction du prix",
          "Persistance",
          "Re-test / Mémoire",
        ],
      },
    ],
    statusNext: [
      "Figer la méthodologie du backtest swing-level",
      "Étendre aux niveaux d’Open Range et à la structure de volatilité",
      "Publier le mono-repo avec documentation et notebooks",
      "Open-source des modules sélectionnés (`mgi-indicators`, `initzone-nq`, `acceptzone`, privés actuellement)",
    ],
  },
  {
    id: "macro-regime",
    number: "03",
    slug: "macro-regime",
    title: "Macro Regime Research",
    subtitle:
      "Recherche de régimes liant anticipations Fed et prix de marché.",
    category: "Macro / Research",
    shortDescription:
      "Recherche de régimes liant anticipations Fed et prix de marché.",
    longDescription: [
      "Un programme de recherche lié à deux volets : un modèle de régime macro construit sur les anticipations Fed (inflation, emploi, taux, forward guidance, obligations 3Y–10Y, FedWatch), et une hypothèse de détection de régime opposant prix de marché et information réellement publiée (NFP, CPI, ADX, Hurst), réutilisant le setup de backtest du Projet 02.",
      "Sortie publique prévue : newsletter macro hebdomadaire ; sortie technique : notebooks, documentation méthodologique et dépôt GitHub.",
    ],
    status: "RESEARCH",
    type: "research",
    tags: ["MACRO", "DATA", "RESEARCH", "TRADING", "PYTHON"],
    stack: ["PYTHON"],
    year: "2025",
    role: "Chercheur indépendant",
    ecosystem:
      "Le contexte de régime : contexte macro pour timing et risque, avec une newsletter publique en sortie.",
    highlight: "Anticipations Fed, prix de marché et détection de régime.",
    cover: {
      src: "/projects/macro-regime/cover.png",
      alt: "Illustration Macro Regime Research : inputs macro convergeant vers des états de régime",
      ratio: "16 / 9",
    },
    github: "https://github.com/johngitproject/regime-macro",
    interfaceNote:
      "Outputs de datasets figés, couverture et distributions forward issues de fichiers figés (48 événements emploi, 2022-2026), pas des signaux de trading. N<5 = un épisode, pas des statistiques.",
    screenshots: [
      {
        src: "/projects/macro-regime/forwards-es20-distribution.png",
        label: "ES forward 20j : distribution des événements",
        caption:
          "N=48 événements emploi. Source : `donnees/regime/conditional_regime.csv.`",
        ratio: "2.18 / 1",
      },
      {
        src: "/projects/macro-regime/forwards-by-side.png",
        label: "ES forward 20j : moyenne par côté de marché",
        caption:
          "R N=33 / A N=13 / N N=2. N=2 est un épisode, pas des statistiques. Même fichier figé.",
        ratio: "1.82 / 1",
      },
    ],
    engineering: [
      {
        tech: "Python",
        role: "Assemblage du dataset macro et notebooks de mesure de régime.",
      },
    ],
    sections: [
      {
        title: "Question de recherche",
        paragraphs: [
          "L’écart entre ce que les marchés pricent et ce que les données publient peut-il devenir un cadre de régime structuré et testable, plutôt qu’un commentaire narratif ?",
        ],
      },
      {
        title: "Volet A : Inputs macro",
        paragraphs: [
          "Un modèle de régime macro basé sur les anticipations Fed, construit sur des inputs observables plutôt que des opinions.",
        ],
        list: [
          "Inflation et données d’emploi",
          "Taux directeurs et forward guidance",
          "Dynamique obligataire 3Y–10Y",
          "Anticipations FedWatch",
        ],
      },
      {
        title: "Volet B : Prix de marché vs données publiées",
        paragraphs: [
          "Une hypothèse de détection de régime : comparer ce que le pricing implique avant les publications avec ce que les chiffres disent réellement, et vérifier si les régimes de divergence persistent.",
        ],
        list: [
          "NFP et CPI : attendu vs publié",
          "ADX et Hurst comme descripteurs de régime",
          "Réutilisation du setup de backtest du Projet 02",
        ],
      },
      {
        title: "Modèle de régime",
        paragraphs: [
          "Les deux volets convergent vers un modèle de régime unique : le Volet A définit le fond macro, le Volet B teste si les écarts pricing-réalité marquent des états de régime tradables. La spécification sera publiée avant toute conclusion.",
          "Couverture figée à publication : 48 événements emploi (`conditional_regime.csv`, 2022-2026), côtés R=33 / A=13 / N=2, calendrier macro dans `calendar_macro_2022_2026.csv`. Code dans `github.com/johngitproject/regime-macro` (privé).",
          "Couverture figée à publication : 48 événements emploi (`conditional_regime.csv`, 2022-2026), côtés R=33 / A=13 / N=2, calendrier macro dans `calendar_macro_2022_2026.csv`. Code dans `github.com/johngitproject/regime-macro` (privé).",
        ],
      },
      {
        title: "Résultats & Limites",
        paragraphs: [
          "Aucune conclusion revendiquée, recherche en cours, aucun résultat fabriqué pour la présentation. Limites connues : les révisions réécrivent l’histoire, les proxys d’anticipations sont imparfaits, et tout label de régime est plus clair a posteriori qu’en temps réel.",
        ],
      },
      {
        title: "Livrables",
        paragraphs: [
          "Deux canaux prévus : une newsletter macro hebdomadaire publique (en développement, canaux à confirmer) et des artefacts techniques : notebooks, documentation méthodologique et dépôt GitHub (regime-macro, privé actuellement).",
        ],
      },
    ],
    statusNext: [
      "Formaliser la spécification du modèle de régime",
      "Construire le dataset attendu-vs-publié",
      "Lancer la newsletter macro hebdomadaire",
      "Publier notebooks et documentation méthodologique",
    ],
  },
  {
    id: "economic-data-pipeline",
    number: "04",
    slug: "economic-data-pipeline",
    title: "Economic Data Pipeline",
    subtitle: "Système automatisé de collecte et traitement de données économiques.",
    category: "Data / Infrastructure",
    shortDescription:
      "Système automatisé de collecte et traitement de données économiques.",
    longDescription: [
      "Un projet d’infrastructure au stade concept : collecter automatiquement les données économiques, suivre un calendrier macro attendu contre publié, stocker des séries normalisées, et les exposer via une API légère et/ou un dashboard.",
      "Conçu pour alimenter le programme Macro Regime Research (Projet 03) et pour démontrer le travail backend et data-engineering.",
    ],
    status: "CONCEPT",
    type: "infrastructure",
    tags: ["PYTHON", "API", "DATABASE", "DATA ENGINEERING", "BACKEND"],
    stack: ["PYTHON"],
    year: "2026–Présent",
    role: "Développeur indépendant",
    ecosystem:
      "La colonne vertébrale data : conçue pour alimenter le programme Macro Regime Research.",
    highlight: "Ingestion, normalisation, stockage et API pour données macro.",
    cover: {
      src: "/projects/economic-data-pipeline/cover.jpg",
      alt: "Illustration Economic Data Pipeline : données brutes transformées en données structurées",
      ratio: "2.44 / 1",
    },
    engineering: [
      {
        tech: "Python",
        role: "Prévu : ingestion, normalisation, stockage et API légère.",
      },
    ],
    sections: [
      {
        title: "Objectif",
        paragraphs: [
          "Retirer la collecte manuelle de la boucle de recherche. Le pipeline doit transformer des publications macro dispersées en un store unique, propre et requêtable pour le code de recherche et les dashboards.",
        ],
      },
      {
        title: "Sources de données",
        paragraphs: [
          "Sources non encore sélectionnées, cette section les listera quand le concept passera en implémentation. Couverture visée : calendrier macro attendu contre publié.",
        ],
      },
      {
        title: "Ingestion → Normalisation → Stockage",
        paragraphs: [
          "Le flux prévu est du data engineering standard : ingestion planifiée, normalisation en séries cohérentes, puis stockage. SQLite et Postgres sont des options de conception à l’étude, aucune revendiquée comme implémentée.",
        ],
        flow: [
          "Sources de données",
          "Ingestion",
          "Normalisation",
          "Base de données",
          "API",
          "Analyse / Dashboard",
        ],
      },
      {
        title: "API & Monitoring",
        paragraphs: [
          "Une API légère et/ou un dashboard exposeront les séries stockées, avec un monitoring basique de la santé d’ingestion. Les deux sont des cibles de conception, pas des livrables terminés.",
        ],
      },
      {
        title: "Architecture",
        paragraphs: [
          "Le schéma ci-dessus montre le flux de données visé. Il sera remplacé par la vraie documentation d’architecture au démarrage de l’implémentation, et le pipeline alimentera directement le Projet 03.",
        ],
      },
    ],
    statusNext: [
      "Sélectionner sources et stockage (SQLite vs Postgres)",
      "Construire ingestion et normalisation",
      "Exposer API légère et/ou dashboard",
      "Connecter la sortie au programme Macro Regime Research",
    ],
  },
];
