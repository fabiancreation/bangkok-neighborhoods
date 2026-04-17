# The Shape of Bangkok — Landing Page

Standalone Next.js landing page for the book *The Shape of Bangkok — History and Culture Explained Through Neighborhoods* by Fabian Arndt. Volume II of the *Understanding Thai Culture* series.

## Quickstart

```bash
npm install
cp .env.example .env.local   # fill in Lemon Squeezy + Resend keys
npm run dev
```

Open http://localhost:3000.

## Structure

```
src/
├── app/           layout, page, sample-chapter, api routes, sitemap, robots, OG image
├── components/    all section components (hero, atlas, passage reel, buy card, etc.)
├── content/       typed content modules (single source of truth for copy)
└── lib/           fonts, motion, Lemon Squeezy, Resend, analytics, JSON-LD
public/
├── cover.svg      typographic book cover (also served as OG image base)
└── bangkok-map.svg  (generated inline in NeighborhoodAtlas.tsx)
```

## Voice audit

Copy is held to the manuscript's styleguide:

```bash
npm run voice-audit
```

Must return zero em-dashes and zero AI vocabulary hits. See `CLAUDE.md`.

## Deployment

GitHub + Vercel. Point the Vercel project at this repo. Add the env vars from `.env.example` to the Vercel dashboard. Promote to production when the manuscript is publication-ready.
