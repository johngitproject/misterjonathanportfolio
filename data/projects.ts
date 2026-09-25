/* Project catalogue, the single source of truth for every
   project surface (homepage, /projects, /projects/[slug]).
   Adding a project = adding one entry here. No invented
   metrics, results, users, revenue or repository URLs:
   unavailable content is omitted or rendered as a labelled
   placeholder. Never present a placeholder as a real result. */

import type { DomainGlyphMotif } from "@/components/visuals/DomainGlyph";

export type ProjectStatus = "LIVE" | "IN DEVELOPMENT" | "RESEARCH" | "CONCEPT";
export type ProjectType = "product" | "research" | "infrastructure";

export interface CaseSection {
  title: string;
  subtitle?: string;
  status?: string;
  glyph?: DomainGlyphMotif;
  paragraphs: string[];
  list?: string[];
  flow?: string[];
  code?: string[];
}

export interface EngineeringItem {
  tech: string;
  role: string;
}

export interface Project {
  id: string;
  number: string;
  slug: string;
  title: string;
  subtitle?: string;
  category?: string;
  shortDescription: string;
  longDescription: string[];
  status: ProjectStatus;
  type: ProjectType;
  tags: string[];
  stack: string[];
  year?: string;
  role?: string;
  ecosystem?: string;
  featured?: boolean;
  highlight: string;
  github?: string;
  technicalPdf?: string;
  features?: string[];
  engineering: EngineeringItem[];
  metrics?: string[];
  metricsState?: "pending" | "calculated";
  cover?: { src: string; alt: string; ratio?: string };
  resultsNote?: string;
  interfaceNote?: string;
  screenshots?: { src: string; label: string; caption?: string; ratio?: string }[];
  sections: CaseSection[];
  statusNext: string[];
}

export const statusColor: Record<ProjectStatus, string> = {
  LIVE: "bg-up text-up",
  "IN DEVELOPMENT": "bg-accent text-accent",
  RESEARCH: "bg-flat text-flat",
  CONCEPT: "bg-mute text-mute",
};

/* Default results copy per status. Shown only when a project
   has no explicit resultsNote. Never invent results. */
export function defaultResultsNote(status: ProjectStatus): string {
  switch (status) {
    case "LIVE":
      return "Live. Public metrics pending publication.";
    case "IN DEVELOPMENT":
      return "Validation ongoing.";
    case "RESEARCH":
      return "No results claimed yet. Findings will be published here.";
    case "CONCEPT":
      return "No results. Concept stage.";
  }
}

export const projects: Project[] = [
  {
    id: "perf-tracker",
    number: "01",
    slug: "perf-tracker",
    title: "Perf Tracker",
    subtitle: "Trading Performance Analytics",
    category: "Trading / Data",
    shortDescription: "Trading performance & journaling system.",
    longDescription: [
      "TraderDesk Performance Tracker is a local-first Windows application designed to turn raw futures trading data into structured performance, risk and execution analysis.",
      "The system combines trade analytics, journaling, MAE/MFE analysis, discipline tracking, risk metrics and Monte Carlo simulation in a single offline environment.",
      "The objective is not simply to measure P&L, but to understand how performance is produced, how much risk is actually experienced, and where execution can be improved.",
      "Built for NQ, MNQ and US30 futures through an AMT / Volume Profile / Order Flow lens, not ICT/SMC, and developed in public as TraderDesk / Africa TraderIA for a francophone and African audience.",
    ],
    status: "IN DEVELOPMENT",
    type: "product",
    tags: ["REACT", "ELECTRON", "TRADING", "DATA"],
    stack: ["REACT", "ELECTRON", "INDEXEDDB", "RECHARTS", "JAVASCRIPT"],
    year: "2026",
    role: "Independent Developer",
    ecosystem:
      "The performance-audit layer of the portfolio: turns raw futures executions into structured performance, risk and behavioral review.",
    featured: true,
    highlight: "Local-first desktop analytics, journaling and risk audit for futures trading.",
    cover: {
      src: "/projects/perf-tracker/cover.jpg",
      alt: "TraderDesk Performance Tracker system architecture: from NinjaTrader CSV input to dashboard, journal and report output",
      ratio: "16 / 9",
    },
    github: "https://github.com/johngitproject/perf-tracker",
    features: [
      "Trade analytics and performance statistics",
      "Integrated trading journal with context and emotions",
      "MAE/MFE and risk analysis",
      "Monte Carlo simulation and PDF reports",
    ],
    engineering: [
      {
        tech: "React 19",
        role: "User interface.",
      },
      {
        tech: "Vite 8",
        role: "Build tooling.",
      },
      {
        tech: "Electron 43",
        role: "Desktop runtime.",
      },
      {
        tech: "IndexedDB / idb",
        role: "Local persistence.",
      },
      {
        tech: "Recharts 3",
        role: "Data visualization.",
      },
      {
        tech: "PapaParse",
        role: "CSV parsing.",
      },
      {
        tech: "jsPDF + html2canvas",
        role: "PDF report generation.",
      },
      {
        tech: "electron-builder",
        role: "Windows packaging.",
      },
    ],
    metrics: [
      "Profit Factor",
      "Expectancy",
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
      "Core application completed. Parser and metric tests implemented, database flow tested, Windows build generated. Next: dataset validation, distribution workflow, open-source preparation and further production testing.",
    interfaceNote:
      "Real application screenshots: dashboard, equity curve, journal, Monte Carlo simulation, report and MAE/MFE analysis. Figures visible are demonstration data presenting the interface. Not verified trading results.",
    screenshots: [
      {
        src: "/projects/perf-tracker/dashboard.png",
        label: "Dashboard: performance overview",
        caption: "Net P&L, risk and R-multiple distribution at a glance.",
        ratio: "1.96 / 1",
      },
      {
        src: "/projects/perf-tracker/equity-curve.png",
        label: "Equity curve",
        caption: "Realized equity against latent equity, the risk actually experienced.",
        ratio: "2.22 / 1",
      },
      {
        src: "/projects/perf-tracker/journal.png",
        label: "Journal",
        caption: "Calendar days carrying P&L, context, emotions and compliance.",
        ratio: "1.95 / 1",
      },
      {
        src: "/projects/perf-tracker/monte-carlo.png",
        label: "Monte Carlo simulation",
        caption: "Bootstrap over per-trade netProfit: fan chart, ruin and target probabilities.",
        ratio: "2.3 / 1",
      },
      {
        src: "/projects/perf-tracker/report.png",
        label: "PDF report",
        caption: "Structured A4 PDF across eight sections.",
        ratio: "1.94 / 1",
      },
      {
        src: "/projects/perf-tracker/mae-mfe.png",
        label: "MAE / MFE analysis",
        caption: "Scatter, threshold and exit quality as profit over MFE.",
        ratio: "2.54 / 1",
      },
    ],
    sections: [
      {
        title: "Objective",
        paragraphs: [
          "Primary objective: build a private, local and structured environment for auditing trading performance beyond simple P&L.",
        ],
        list: [
          "Quantify realized and latent risk",
          "Analyze trade distributions",
          "Study MAE/MFE",
          "Measure execution quality",
          "Connect trading results with journal context",
          "Monitor discipline",
          "Simulate possible equity paths",
          "Generate structured reports",
        ],
      },
      {
        title: "The Problem",
        paragraphs: [
          "A trading account can show a profitable result without explaining how that result was produced.",
          "Standard trade history shows entries, exits and P&L, but hides latent drawdown, execution quality, discipline and emotional context. TraderDesk brings these dimensions together in one local workflow.",
        ],
        flow: [
          "RAW TRADE DATA: What happened?",
          "PERFORMANCE: How much was made?",
          "RISK: How much was actually exposed?",
          "EXECUTION / DISCIPLINE: Why did it happen?",
        ],
      },
      {
        title: "The System",
        paragraphs: [
          "Local-first desktop application: NinjaTrader exports are parsed, normalized and grouped into operations, analyzed locally and persisted in IndexedDB, one store for dashboard, journal and reports. Backup travels as JSON; no account, no cloud, no data leaves the machine.",
        ],
        flow: [
          "NINJATRADER CSV",
          "CSV PARSER",
          "TRADE NORMALIZATION",
          "OPERATION GROUPING",
          "ANALYTICS ENGINE",
          "INDEXEDDB",
          "DASHBOARD / JOURNAL / REPORT",
        ],
      },
      {
        title: "Data Flow",
        paragraphs: [
          "NinjaTrader Grid CSV in: parsing, column mapping, date normalization, duplicate detection, grouping and aggregation, into a local IndexedDB store feeding dashboard, journal, reports, Monte Carlo and JSON backup.",
        ],
        list: [
          "accounts",
          "trades",
          "`uploadBatches`",
          "`journalEntries`",
          "settings",
        ],
      },
      {
        title: "Business Rule: NinjaTrader",
        paragraphs: [
          "A genuine engineering decision: the Profit field of the NinjaTrader Grid CSV is already net, so the system uses it directly and never subtracts fees a second time.",
          "totalFees remains available as information, it is displayed, not deducted twice.",
        ],
        code: ["netProfit = profit"],
      },
      {
        title: "Operation Grouping",
        paragraphs: [
          "Executions become operations when they share account and instrument, exit within one minute and overlap, aggregation then sums signed performance and absolute adverse excursion.",
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
        title: "Risk Engine",
        paragraphs: [
          "Two equities: realized follows closed results; latent subtracts aggregated MAE from previous equity, exposing risk closed results hide. Latent drawdown is measured from the previous peak to that latent equity.",
        ],
        code: [
          "equityLatente(i) = equity(i-1) - maeAgrege",
          "drawdownLatent = peak(i-1) - equityLatente",
        ],
      },
      {
        title: "Account Risk Model",
        paragraphs: [
          "Each account carries capital, maximum drawdown, target and target %: in EOD (maximum from daily closes) and trailing (highest intraday equity plus latent information) variants.",
        ],
      },
      {
        title: "Dashboard",
        paragraphs: [
          "Five capability families share one dataset, every figure below is computed by the system, never claimed as a result achieved.",
        ],
        list: [
          "Performance: Net P&L, Win Rate, Profit Factor, Expectancy, Payoff, Avg R",
          "Risk: Max Drawdown, Sharpe, Sortino, Calmar, Ulcer, Kelly, VaR 95%",
          "Trade Analytics: R-multiples, P&L distribution, Streaks, MAE/MFE, Exit Quality",
          "Time Analysis: P&L by period, Heatmap, Expectancy by period",
          "Behavior: Discipline, Plan compliance, Emotion",
        ],
      },
      {
        title: "Journal",
        paragraphs: [
          "The journal is the context layer of the same loop, each day carries P&L, analysis, screenshots, plan, emotions, pre-trade checklist and compliance, linking every trade back to performance and forward to review.",
        ],
        flow: ["TRADE", "PERFORMANCE", "JOURNAL", "CONTEXT", "REVIEW"],
        list: [
          "Monthly calendar",
          "Daily P&L",
          "Daily analysis",
          "Screenshots",
          "Trading plan",
          "Context tags",
          "Emotions",
          "Pre-trade checklist",
          "Compliance",
          "Trades of the day",
        ],
      },
      {
        title: "MAE / MFE",
        paragraphs: [
          "A dedicated workspace studies the risk actually traversed by operations: MAE/MFE scatter, a manual MAE threshold with below/above counters and percentages, and exit quality measured as profit over MFE.",
        ],
        list: [
          "MAE vs MFE scatter",
          "Manual MAE threshold",
          "Below / above threshold counters",
          "Share of total per side",
          "Exit quality: profit / MFE",
        ],
      },
      {
        title: "Monte Carlo",
        paragraphs: [
          "An advanced analytical component: bootstrap with replacement over per-trade netProfit, replayable seed, fan chart and outcome probabilities.",
          "Limitation stated upfront, the model assumes an i.i.d. distribution and does not explicitly model streaks.",
        ],
        list: [
          "100–10 000 simulations (default 5 000)",
          "Configurable horizon (default 200)",
          "Replayable seed",
          "Bootstrap with replacement on netProfit per trade",
          "P5–P95 fan chart",
          "Final-results histogram",
          "Ruin probability",
          "Target-reaching probability",
        ],
      },
      {
        title: "Report Generation",
        paragraphs: [
          "Structured reports are generated inside the application and exported as A4 PDF, with charts captured directly for the document.",
        ],
        list: [
          "01: Executive Summary",
          "02: Performance",
          "03: Risk",
          "04: Trades",
          "05: MAE / MFE",
          "06: Temporal Analysis",
          "07: Conclusion",
          "08: Monte Carlo",
        ],
      },
      {
        title: "Backup",
        paragraphs: [
          "Full local state (accounts, trades, batches, journals, settings) travels as one JSON backup; import restores it and replaces existing data only after confirmation.",
        ],
        flow: ["EXPORT", "JSON BACKUP", "IMPORT"],
      },
      {
        title: "Security / Privacy",
        paragraphs: [
          "Local-first by design, no account, cloud, advertising or external upload, with context isolation, sandboxing and OS-shell external links on the Electron side.",
          "This describes the architecture. It is not presented as a security certification.",
        ],
      },
      {
        title: "Testing",
        paragraphs: [
          "Validation is mechanical, not a quality score: automated checks cover parsing and metrics, the database flow and lint.",
        ],
        list: [
          "Parser + metrics: ~75 assertions",
          "Database flow: fake-indexeddb",
          "Lint: 0 errors",
        ],
      },
    ],
    statusNext: [
      "Prepare the distribution workflow (installer, release)",
      "Host installer and documentation",
      "Prepare the open-source release",
      "Validate with production datasets",
      "Web application version (planned)",
    ],
  },
  {
    id: "market-research",
    number: "02",
    slug: "market-research",
    title: "Market Research & Indicators",
    subtitle: "Systematic research on market-generated information and key levels.",
    category: "Trading / Research",
    shortDescription:
      "Systematic research on market-generated information and key levels.",
    longDescription: [
      "A single research program with multiple modules: MGI (Market Generated Information), Open Range levels, volatility structure, DeltaProfile, swing zones and accept zones, and an exploratory backtest of key levels and market memory, starting with swing levels (`mgi-context-backtest`).",
      "The repository is organized as a mono-repo: one folder per indicator, with documentation, code and backtest notebooks side by side.",
    ],
    status: "RESEARCH",
    type: "research",
    tags: ["PYTHON", "DATA", "TRADING", "RESEARCH", "BACKTESTING"],
    stack: ["PYTHON"],
    year: "2025–Present",
    role: "Independent Researcher",
    ecosystem:
      "The levels-and-memory research layer: systematic context for discretionary trading decisions.",
    highlight: "Market-generated information, key levels and memory effects.",
    cover: {
      src: "/projects/market-research/cover.jpg",
      alt: "Market Research illustration: candlestick chart analysis resolving into structured information",
      ratio: "16 / 9",
    },
    github: "https://github.com/johngitproject/mgi-indicators",
    interfaceNote:
      "Locked backtest outputs, research figures from frozen runs (AcceptZone S1, portfolio pool), not live trading results. Costs and slippage excluded unless stated.",
    screenshots: [
      {
        src: "/projects/market-research/equity-acceptzone-s1.png",
        label: "AcceptZone S1: cumulative net by exit",
        caption:
          "NQ LONG S1, n=197, net $675,240, 2022-12-18 to 2025-12-12. Source: `backtest_out/acceptzone_dca/long/cycles.csv.",
        ratio: "1.85 / 1",
      },
      {
        src: "/projects/market-research/distribution-acceptzone.png",
        label: "AcceptZone S1: exit composition",
        caption:
          "TP 160 / Emergency 23 / Expired 12 / EOD 2. Adds 0/1/2/3: 113/42/38/4. Same locked run.",
        ratio: "2.4 / 1",
      },
    ],
    engineering: [
      {
        tech: "Python",
        role: "Data collection, backtest notebooks and statistical measurement.",
      },
    ],
    metrics: ["Hit Rate", "Expectancy", "Sample Size", "Transaction Costs"],
    sections: [
      {
        title: "Research Question",
        paragraphs: [
          "Do historically significant price levels (swing points, opening ranges, previously generated information) carry measurable memory that can be observed systematically rather than anecdotally?",
        ],
      },
      {
        title: "Hypothesis",
        paragraphs: [
          "Markets remember: levels of significant information generation or absorption should show a detectable signature (rejection, acceptance or volatility), tested first on swing levels (`mgi-context-backtest`), then Open Range and volatility structure.",
        ],
      },
      {
        title: "Methodology",
        paragraphs: [
          "Each module follows the same pipeline so results stay comparable: define the level objectively, collect the data, specify the measurement in advance, run the backtest, then document limitations alongside results.",
          "Only current indicator versions are documented here; version history lives in the repository.",
        ],
        flow: [
          "Research question",
          "Hypothesis",
          "Data",
          "Method",
          "Backtest",
          "Results",
          "Limitations",
        ],
      },
      {
        title: "Backtest",
        paragraphs: [
          "Locked backtests of key levels and market memory, starting with swing levels, notebooks and frozen outputs in backtest_out/, one folder per run. Published figures below come from those frozen files only.",
          "AcceptZone S1 LONG: `backtest_out/acceptzone_dca/long/cycles.csv`. InitialZone LONG: `backtest_out/initzone_dca/long/cycles.csv`. Pool F1+F2+S1+S2: `backtest_out/portfolio_daily/daily_4x/equity_by_exit.csv`.",
        ],
      },
      {
        title: "Results",
        paragraphs: [
          "AcceptZone S1 LONG (NQ, D1, 2022-12-18 to 2025-12-12): n=197, WR 83.2%, net $675,240, avg $3,428, PF 1.62. Exits: TP 160 / Emergency 23 / Expired 12 / EOD 2. Source: stats.md of the same locked run.",
          "InitialZone LONG (NQ, D1, same period): n=83, WR 83.1%, net $318,037, avg $3,832, PF 1.59. Source: backtest_out/initzone_dca/long/stats.md.",
          "Portfolio pool Daily 4x (F1+F2+S1+S2, simple sum, no compounding, fees and slippage excluded): n=398, WR 85.4%, net $1,669,101, PF 1.87. Ordered by exit time, not a tradable equity. Source: stats_portfolio.md.",
          "Short side differs: AcceptZone SHORT n=146, WR 58.2%, net -$724,724, PF 0.54. Published to avoid cherry-picking.",
        ],
      },
      {
        title: "Limitations",
        paragraphs: [
          "Known limits: look-ahead bias in level definition, regime dependence of level effects, transaction costs ignored by paper fills. Negative and neutral findings will be published, not hidden.",
        ],
      },
      {
        title: "The Program",
        paragraphs: [
          "Research and engineering work focused on market-generated information, market structure, volatility, volume, delta and persistent price levels.",
          "The program follows one thread: market data becomes information, information reveals structure across levels, volatility and volume, and structure provides context for research. These are research and engineering tools for market analysis, not commercial indicators.",
        ],
        flow: [
          "Market Data",
          "Information",
          "Structure",
          "Levels / Volatility / Volume",
          "Context",
          "Research",
        ],
      },
      {
        title: "MGI: Market Generated Information",
        glyph: "data",
        subtitle: "Extracting information generated directly by market behavior.",
        status: "Experimental",
        paragraphs: [
          "Role: exploit information produced directly by the market: price, volume, structure, volatility, behavior around levels, and how information evolves over time. The objective is to turn market observations into structured information usable in an analysis process.",
          "Presented as decision support, not as an automatic predictive system.",
          "Implementation: NinjaTrader 8 indicators in `github.com/johngitproject/mgi-indicators` (private): MGI Levels, Open Range, VolT, DeltaProfile. Validation experiment `mgi-context-backtest`; figures come from frozen `backtest_out/` runs only.",
        ],
        flow: [
          "Market Data",
          "Information Extraction",
          "Context",
          "Decision Support",
        ],
      },
      {
        title: "Open Range Levels",
        glyph: "observe",
        subtitle: "Objective levels derived from the opening range.",
        status: "In Development",
        paragraphs: [
          "Definition: the Open Range is defined from a fixed initial market interval, with its boundaries used as objective reference levels for subsequent price behavior. No range duration is claimed here.",
          "Usage: reference levels, breakout and rejection context, intraday structure, and interaction with subsequent price action. None of this is a performance promise.",
          "State: code implemented in `open-range/`, no backtest yet.",
        ],
      },
      {
        title: "Vol Structure",
        glyph: "markets",
        subtitle:
          "Reading how volatility expands, contracts and changes across market conditions.",
        status: "In Development",
        paragraphs: [
          "What it measures: the structure of volatility, whether the market sits in expansion, compression or transition, and what regime that implies for price behavior. Volatility context, not a predictive signal.",
          "Research angle: volatility structure, regime and context, expansion versus compression, and the relationship with price behavior.",
          "State: code implemented in `vol-structure-level/`, no backtest yet.",
        ],
        flow: ["Expansion", "Compression", "Transition"],
      },
      {
        title: "DeltaProfile",
        glyph: "structure",
        subtitle:
          "Volume and delta distribution used to read participation and market structure.",
        status: "In Development",
        paragraphs: [
          "Current version only, no legacy version, obsolete prototype or removed feature is documented here.",
          "Logic: volume and delta distribution across price levels, read as participation and interaction between volume, delta and price structure. Faithful to the current implementation.",
          "State: code implemented in `deltaprofile/`, no backtest yet. No screenshots available; no metrics fabricated.",
        ],
        code: ["Price Levels ↔ Volume ↔ Delta"],
      },
      {
        title: "Swing Zones & AcceptZones",
        glyph: "iterate",
        subtitle:
          "Detecting persistent market zones and their memory across price action.",
        status: "Experimental",
        paragraphs: [
          "Swing Zones: zones derived from swing structure: where the important levels and zones sit, and how they evolve as the market progresses. No undocumented detection method is claimed.",
          "AcceptZones: zones where the market shows acceptance: the relationship between price behavior and zone persistence, distinguishing a mere price passage from a zone with observable memory.",
          "Level Memory: some zones stay relevant after their creation and serve as context on future price interactions. Locked Python DCA backtests: `github.com/johngitproject/acceptzone` (S1/S2, NT8 indicator) and `github.com/johngitproject/initzone-nq` (InitialZone NQ, F1-F4 2022-2025). All repos private, access on request.",
        ],
        flow: [
          "Zone detected",
          "Price interaction",
          "Persistence",
          "Re-test / Memory",
        ],
      },
    ],
    statusNext: [
      "Freeze the swing-level backtest methodology",
      "Extend to Open Range levels and volatility structure",
      "Open-source selected modules (`mgi-indicators`, `initzone-nq`, `acceptzone`, currently private)",
    ],
  },
  {
    id: "macro-regime",
    number: "03",
    slug: "macro-regime",
    title: "Macro Regime Research",
    subtitle: "Regime research linking Fed expectations and market pricing.",
    category: "Macro / Research",
    shortDescription:
      "Regime research linking Fed expectations and market pricing.",
    longDescription: [
      "One linked research program with two tracks: a macro regime model built on Fed expectations (inflation, employment, rates, forward guidance, 3Y–10Y bonds, FedWatch), and a regime-detection hypothesis contrasting market pricing with actually published information (NFP, CPI, ADX, Hurst), reusing the Project 02 backtest setup.",
      "Planned public output is a weekly macro newsletter; technical output is notebooks, methodology documentation and a GitHub repository.",
    ],
    status: "RESEARCH",
    type: "research",
    tags: ["MACRO", "DATA", "RESEARCH", "TRADING", "PYTHON"],
    stack: ["PYTHON"],
    year: "2025",
    role: "Independent Researcher",
    ecosystem:
      "The regime backdrop: macro context for timing and risk, with a public newsletter as output.",
    highlight: "Fed expectations, market pricing and regime detection.",
    cover: {
      src: "/projects/macro-regime/cover.png",
      alt: "Macro Regime Research illustration: macro inputs converging into market regime states",
      ratio: "16 / 9",
    },
    github: "https://github.com/johngitproject/regime-macro",
    interfaceNote:
      "Locked dataset outputs, coverage and forward distributions from frozen files (48 employment events, 2022-2026), not trading signals. N<5 = episode, not statistics.",
    screenshots: [
      {
        src: "/projects/macro-regime/forwards-es20-distribution.png",
        label: "ES forward 20d: event distribution",
        caption:
          "N=48 employment events. Source: donnees/regime/conditional_regime.csv.",
        ratio: "2.18 / 1",
      },
      {
        src: "/projects/macro-regime/forwards-by-side.png",
        label: "ES forward 20d: mean by market side",
        caption:
          "R N=33 / A N=13 / N N=2. N=2 is an episode, not statistics. Same locked file.",
        ratio: "1.82 / 1",
      },
    ],
    engineering: [
      {
        tech: "Python",
        role: "Macro dataset assembly and regime-measurement notebooks.",
      },
    ],
    sections: [
      {
        title: "Research Question",
        paragraphs: [
          "Can the gap between what markets price in and what data actually prints be turned into a structured, testable regime framework, instead of narrative commentary?",
        ],
      },
      {
        title: "Track A: Macro Inputs",
        paragraphs: [
          "A macro regime model based on Fed expectations, built from observable inputs rather than opinions.",
        ],
        list: [
          "Inflation and employment data",
          "Policy rates and forward guidance",
          "3Y–10Y bond dynamics",
          "FedWatch expectations",
        ],
      },
      {
        title: "Track B: Market Pricing vs Published Data",
        paragraphs: [
          "A regime-detection hypothesis: compare what market pricing implies ahead of releases with what the published figures actually say, and check whether the divergence regimes persist.",
        ],
        list: [
          "NFP and CPI: expected vs published",
          "ADX and Hurst as regime descriptors",
          "Reuse of the Project 02 backtest setup",
        ],
      },
      {
        title: "Regime Model",
        paragraphs: [
          "The two tracks converge into a single regime model: Track A defines the macro backdrop, Track B tests whether pricing-vs-reality gaps mark tradable regime states. The model specification will be published before any conclusion is drawn from it.",
          "Frozen coverage at publication: 48 employment events (conditional_regime.csv, 2022-2026), sides R=33 / A=13 / N=2, macro calendar in calendar_macro_2022_2026.csv. Code in github.com/johngitproject/regime-macro (private).",
        ],
      },
      {
        title: "Results & Limitations",
        paragraphs: [
          "No tradable conclusion claimed. Work in progress, nothing fabricated. Charts show event coverage and forward distributions only. Known limits: data revisions rewrite history, expectations proxies are imperfect, regimes are clearer in hindsight than in real time, N<5 is an episode, not statistics.",
        ],
      },
      {
        title: "Output",
        paragraphs: [
          "Two output channels are planned: a public weekly macro newsletter (in development, channels to be confirmed) and technical artifacts: notebooks, methodology documentation and a GitHub repository (regime-macro, currently private).",
        ],
      },
    ],
    statusNext: [
      "Formalize the regime model specification",
      "Build the expected-vs-published dataset",
      "Launch the weekly macro newsletter",
      "Publish notebooks and methodology documentation",
    ],
  },
  {
    id: "economic-data-pipeline",
    number: "04",
    slug: "economic-data-pipeline",
    title: "Economic Data Pipeline",
    subtitle: "Automated economic data collection and processing system.",
    category: "Data / Infrastructure",
    shortDescription:
      "Automated economic data collection and processing system.",
    longDescription: [
      "A concept-stage infrastructure project: automatically collect economic data, track a macro calendar of expected versus published figures, store normalized series, and expose them through a light API and/or dashboard.",
      "It is designed to feed the Macro Regime Research program (Project 03) and to stand alone as a demonstration of backend and data-engineering work.",
    ],
    status: "CONCEPT",
    type: "infrastructure",
    tags: ["PYTHON", "API", "DATABASE", "DATA ENGINEERING", "BACKEND"],
    stack: ["PYTHON"],
    year: "2026–Present",
    role: "Independent Developer",
    ecosystem:
      "The data backbone: designed to feed the Macro Regime Research program.",
    highlight: "Ingestion, normalization, storage and API for macro data.",
    cover: {
      src: "/projects/economic-data-pipeline/cover.jpg",
      alt: "Economic Data Pipeline illustration: raw economic data transformed into structured data",
      ratio: "2.44 / 1",
    },
    // TODO: create the repository once the concept moves to implementation.
    engineering: [
      {
        tech: "Python",
        role: "Planned: ingestion, normalization, storage and a light API.",
      },
    ],
    sections: [
      {
        title: "Objective",
        paragraphs: [
          "Remove manual data collection from the research loop. The pipeline should turn scattered macro releases into one clean, queryable store that research code and dashboards can rely on.",
        ],
      },
      {
        title: "Data Sources",
        paragraphs: [
          "Sources are not yet selected, this section will list them once the concept moves to implementation. The target coverage is a macro calendar with expected versus published figures.",
        ],
      },
      {
        title: "Ingestion → Normalization → Storage",
        paragraphs: [
          "The planned flow is standard data engineering: scheduled ingestion, normalization into consistent series, then storage. SQLite and Postgres are design options under evaluation, neither is claimed as implemented.",
        ],
        flow: [
          "Data sources",
          "Ingestion",
          "Normalization",
          "Database",
          "API",
          "Analysis / Dashboard",
        ],
      },
      {
        title: "API & Monitoring",
        paragraphs: [
          "A light API and/or dashboard will expose the stored series, and basic monitoring will track ingestion health. Both are design targets, not completed deliverables.",
        ],
      },
      {
        title: "Architecture",
        paragraphs: [
          "The diagram above shows the intended data flow. It will be replaced by the real architecture documentation once implementation starts, and the pipeline will feed Project 03 directly.",
        ],
      },
    ],
    statusNext: [
      "Select data sources and storage (SQLite vs Postgres)",
      "Build ingestion and normalization",
      "Expose a light API and/or dashboard",
      "Connect output to the Macro Regime Research program",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project | undefined {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return undefined;
  return projects[(index + 1) % projects.length];
}

/* Filter matching for /projects. Filters are tag-driven:
   a project matches when one of its tags equals the filter,
   except SOFTWARE which matches buildable system types
   (product, infrastructure). No hidden taxonomy. */
export function matchesFilter(
  project: Project,
  filter: string,
): boolean {
  if (filter === "ALL") return true;
  if (filter === "SOFTWARE")
    return project.type === "product" || project.type === "infrastructure";
  return project.tags.includes(filter);
}
