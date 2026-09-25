# Mister Jonathan — Portfolio V1

Personal portfolio of Mister Jonathan, independent trader & developer
(Data · AI · Financial Systems).

Stack: Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Develop

```bash
npm install
npm run dev
```

## Verify

```bash
npx tsc --noEmit
npx eslint
npm run build
```

## Notes

- Design tokens live in `app/globals.css` (single source of truth).
- Projects live in `data/projects.ts` — adding a project is adding one
  entry; `/projects` and `/projects/[slug]` update automatically.
- Contact links and social URLs in `data/site.ts` are placeholders
  (`TODO`) to replace with real values.
- Project previews are illustrative placeholders, clearly labelled as
  such, until replaced by real artifacts.
- Contact forms (project inquiry + conversation) submit through
  Web3Forms: set `NEXT_PUBLIC_WEB3FORMS_KEY` in `.env.local`
  (gitignored, never commit it). Without the key, the project form
  falls back to a pre-filled `mailto:`.
