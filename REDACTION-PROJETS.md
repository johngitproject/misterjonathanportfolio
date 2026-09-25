# FICHE DE RÉDACTION — 4 projets du portfolio

> Rédige en **anglais**, ton sobre et technique, phrases courtes.
> Seuls tes textes + la data existante seront utilisés. Rien d'inventé.
> Réponds bloc par bloc, même incomplet — le reste demeure en l'état.

## 0. Liens globaux (une fois pour tout le site)

```text
GitHub profil : https://github.com/johngitproject
Email de contact (confirmer) : jonathanflanda@gmail.com
CV (fichier ou URL) : a venir (# = Coming soon)
LinkedIn : https://www.linkedin.com/in/jonathan-m-flanda-079926124
```

## 1. Champs communs (valeurs actuelles validées)

```text
01 PERF-TRACKER
Subtitle  : Trading Performance Analytics
Category  : Trading / Data
Year      : 2026
Role      : Independent Developer
Ecosystem : The performance-audit layer of the portfolio: turns raw futures executions into structured performance, risk and behavioral review.
GitHub repo du projet : https://github.com/johngitproject/perf-tracker (PRIVATE — access on request)
PDF technique : Coming soon (aucun PDF)

02 MARKET RESEARCH
Subtitle  : Systematic research on market-generated information and key levels.
Category  : Trading / Research
Year      : 2025 — Present
Role      : Independent Researcher
Ecosystem : The levels-and-memory research layer: systematic context for discretionary trading decisions.
GitHub repo du projet : principal https://github.com/johngitproject/mgi-indicators + https://github.com/johngitproject/initzone-nq + https://github.com/johngitproject/acceptzone (tous PRIVATE)
PDF technique : Coming soon (aucun PDF)

03 MACRO REGIME
Subtitle  : Regime research linking Fed expectations and market pricing.
Category  : Macro / Research
Year      : 2025
Role      : Independent Researcher
Ecosystem : The regime backdrop: macro context for timing and risk, with a public newsletter as output.
GitHub repo du projet : https://github.com/johngitproject/regime-macro (PRIVATE, canonique — doublon regimemacro à supprimer)
PDF technique : Coming soon (aucun PDF)

04 ECONOMIC DATA PIPELINE
Subtitle  : Automated economic data collection and processing system.
Category  : Data / Infrastructure
Year      : 2026 — Present
Role      : Independent Developer
Ecosystem : The data backbone: designed to feed the Macro Regime Research program.
GitHub repo du projet : aucun — Coming soon (projet en développement)
PDF technique : Coming soon (aucun PDF)
```

## 2. PERF TRACKER (validé — rien à réécrire)

- [x] Subtitle : « Trading Performance Analytics » — OK, garder.
- [x] Overview : 4 paragraphes validés en l'état — garder marchés NQ/MNQ/US30, AMT / Volume Profile / Order Flow (pas ICT/SMC), TraderDesk / Africa TraderIA audience francophone et africaine.
- [x] 16 sections : Objective, The Problem, The System, Data Flow, Business Rule — NinjaTrader (netProfit = profit), Operation Grouping (1 min), Risk Engine (latent), Account Risk Model (EOD/Trailing), Dashboard, Journal, MAE/MFE, Monte Carlo (i.i.d. assumé), Report Generation (8 sections A4), Backup (JSON), Security/Privacy (local-first, pas une certification), Testing (~75 assertions + fake-indexeddb + lint 0) — aucune reformulation.
- [x] Metrics = capacités calculées — OK : Profit Factor, Expectancy, Win Rate, SQN, Sharpe, Sortino, Calmar, Ulcer, Kelly, VaR, Avg R (metricsState: calculated, légende « not results achieved »).
- [x] Engineering : 8 technos + rôles — OK : React 19 (UI), Vite 8 (build), Electron 43 (desktop), IndexedDB/idb (persistence), Recharts 3 (viz), PapaParse (CSV), jsPDF + html2canvas (PDF), electron-builder (packaging Windows).
- [x] Results : « Core application completed. Parser and metric tests implemented, database flow tested, Windows build generated... » — OK, garder.
- [x] Status/Next : distribution, installer + docs, open-source, production datasets, web app (planned) — OK, garder + note repo privé.
- [x] **GitHub URL : https://github.com/johngitproject/perf-tracker (PRIVATE — access on request)**
- [x] Screenshots : 6 en place, garder — dashboard, equity-curve, journal, monte-carlo, report, mae-mfe (+ cover). Données visibles = démo d'interface, pas des résultats vérifiés.

## 3. MARKET RESEARCH (complété — dossiers corrigés, chiffres gelés)

- [x] **1 phrase de logique par module :**

```text
MGI : Turns price, volume, structure and volatility observations into structured decision-support context.
OPEN RANGE : Derives objective intraday reference levels from a fixed initial market interval.
VOL STRUCTURE : Reads whether volatility sits in expansion, compression or transition as market context.
DELTAPROFILE : Reads volume and delta distribution across price levels as participation and structure.
SWING ZONES & ACCEPTZONES : Detects persistent zones and tests whether price acceptance gives them observable memory.
```

- [x] Dossiers repo — CORRIGÉ : anciens labels logiques (`mgicontextstrategy/mgi`, `open-range/`, `vol-structure-level/`, `deltaprofile/`, `swingzone/` + `acceptzone/`) remplacés par les 3 vrais repos privés : `mgi-indicators` (MGI Levels, Open Range, VolT, DeltaProfile) + `initzone-nq` (InitialZone NQ + backtester DCA F1-F4 2022-2025) + `acceptzone` (S1/S2 + moteur DCA + NT8).
- [x] Backtests MGI + Swing (Python) : CHIFFRES PUBLIABLES (runs gelés, sans compounding, hors frais/slippage) — AcceptZone S1 LONG NQ D1 2022-12-18→2025-12-12 : n=197, WR 83.2%, net $675,240, avg $3,428, PF 1.62, exits TP 160 / Emergency 23 / Expired 12 / EOD 2 (backtest_out/acceptzone_dca/long/) ; InitialZone LONG : n=83, WR 83.1%, net $318,037, PF 1.59 (backtest_out/initzone_dca/long/stats.md) ; Pool Daily 4x F1+F2+S1+S2 : n=398, WR 85.4%, net $1,669,101, PF 1.87 (backtest_out/portfolio_daily/daily_4x/stats_portfolio.md — somme ordonnée par exit, pas une equity tradable) ; Short S1 : n=146, WR 58.2%, net -$724,724, PF 0.54 (anti-cherry-picking).
- [x] **Mono-repo URL : pas de mono-repo — 3 repos privés : mgi-indicators (MGI/OpenRange/VolT/DeltaProfile) https://github.com/johngitproject/mgi-indicators + initzone-nq https://github.com/johngitproject/initzone-nq + acceptzone https://github.com/johngitproject/acceptzone — lien principal = mgi-indicators**
- [x] Sections programme (Research Question, Hypothesis, Methodology, Backtest, Results, Limitations, The Program) : OK — Backtest + Results déjà mis à jour avec sources gelées, le reste sans reformulation.
- [x] Status/Next : freeze swing-level methodology, extend Open Range + volatility structure, open-source selected modules (mgi-indicators, initzone-nq, acceptzone — actuellement privés) — OK.
- [x] Screenshots : 2 générés depuis CSV gelés + cover — equity-acceptzone-s1.png (cumul net par exit, n=197) + distribution-acceptzone.png (raisons + adds). Légende « research figures, not live results ». Plus de placeholders.

## 4. MACRO REGIME (complété — spec à publier, visuels gelés)

- [x] Subtitle / category / year / role — OK : « Regime research linking Fed expectations and market pricing. » / Macro / Research / 2025 / Independent Researcher.
- [x] Track A (macro inputs) / Track B (pricing vs published) / Regime Model : OK sans reformulation — Track A : inflation/emploi, taux + forward guidance, 3Y-10Y, FedWatch ; Track B : NFP/CPI expected vs published, ADX/Hurst, réutilise setup P02 ; Regime Model : Track A = backdrop, Track B = pricing-vs-reality gaps, couverture gelée 48 events (R=33/A=13/N=2, conditional_regime.csv 2022-2026, calendar_macro_2022_2026.csv).
- [x] **Newsletter : en développement — nom + canal à confirmer (reste « channels to be confirmed »)**
- [x] **Repo + notebooks URL : https://github.com/johngitproject/regime-macro (PRIVATE, canonique — doublon regimemacro à supprimer/confirmer)**
- [x] Modèle de régime : spec NON figée — reste « specification will be published before any conclusion » (formules/seuils à publier, réf bilan/ARTICLE_REGIME.md + scripts/query_macro.py + regime_filter.py). Aucune conclusion tradable revendiquée.
- [x] Status/Next : formalize spec, build expected-vs-published dataset, launch weekly newsletter (en dev), publish notebooks + methodology — OK.
- [x] Visuels : 2 générés depuis CSV gelés + cover — forwards-es20-distribution.png (N=48, mean +1.07 / med +2.41) + forwards-by-side.png (R +2.16% N=33 / A -1.51% N=13 / N -0.20% N=2, N=2 = épisode). Légende « coverage and distributions only, no signal ». Plus de placeholders.

## 5. ECONOMIC DATA PIPELINE (figé au stade concept — en développement)

- [x] **Sources de données retenues : non sélectionnées (projet en développement — cible : macro calendar expected vs published).**
- [x] **Stockage : SQLite vs Postgres en évaluation — aucun implémenté.**
- [x] API + dashboard : périmètre design target, pas un livrable — light API et/ou dashboard exposant les séries + monitoring d'ingestion.
- [x] Sections (Objective, Data Sources, Ingestion → Normalization → Storage, API & Monitoring, Architecture) : OK sans reformulation — flow sources → ingestion → normalization → database → API → analysis/dashboard.
- [x] Status/Next : select sources + storage, build ingestion + normalization, expose light API/dashboard, connect output to Macro Regime (P03) — OK.
- [x] **Repo URL : aucun — projet encore en développement, reste « Coming soon »**
- [x] Schéma d'architecture réel : aucun — cover illustrative (intended flow), sera remplacée par la vraie doc d'architecture au démarrage de l'implémentation.

## 6. Règles appliquées à l'intégration

- Tes textes = source de vérité ; data existante en complément.
- Chiffres / résultats : uniquement si écrits explicitement comme publiables.
- Liens : affichés seulement si URL réelle fournie, sinon « Coming soon ».
- Ton factuel, noms préservés (MGI, DeltaProfile, TraderDesk...).
