# Bangkok Neighborhoods — Landing Page

## Type
Standalone Next.js landing page for the book **"The Shape of Bangkok — History and Culture Explained Through Neighborhoods"** by Fabian Arndt. Volume II of the *Understanding Thai Culture* series.

## Status
Phase 1–4 complete. EPUB production, Lemon Squeezy product setup, and live hero AI image remain.

## Stack
- Next.js 16 + React 19 + TypeScript 5
- Tailwind CSS 4 (`@theme inline` tokens in `src/app/globals.css`)
- framer-motion, Radix Accordion + Dialog, lucide-react
- Resend (transactional email + audience)
- Lemon Squeezy (merchant-of-record checkout; hosted overlay)
- Vercel Analytics + Speed Insights

## Voice rules (non-negotiable, mirrored from book styleguide)

All page copy in `src/content/*.ts` is held to the manuscript's own bar:

- **Zero em-dashes (—).** Use periods, commas, parentheses, or new sentences.
- **No AI vocabulary.** Forbidden: *crucial, pivotal, vibrant, bustling, hidden gem, must-see, unforgettable, breathtaking, stunning, renowned, nestled, juxtaposition, tapestry, testament, beacon, furthermore, moreover, additionally, showcase, foster, enhance, delve, garner, interplay.*
- **No promotional hype.** The voice observes and offers. It does not advertise.
- **Observation over instruction.** Describe what happens. Do not tell readers what to do.
- **Concrete before abstract.** Street names, soi numbers, times, prices, before characterization.
- **Specificity over generality.** "A woman grilling bananas on a wooden dock" before "local atmosphere."

Run the voice audit before shipping any copy change:

```bash
npm run voice-audit
```

## Content sources

Content copy lives in typed modules — single source of truth:
- `src/content/copy.ts` — all page copy (hero, pitch, author, buy, newsletter, footer, sample gate)
- `src/content/neighborhoods.ts` — 19 chapters, metadata, teasers, map coordinates
- `src/content/passages.ts` — 5 excerpt passages
- `src/content/faq.ts` — 6 FAQ items

Original manuscript: `/Users/fabianarndt/Projekte/Claude/Books/bangkok-neighborhoods/manuskript/`.

## Design tokens

See `src/app/globals.css`. Palette: `ink-950`, `paper-50`, `brass-500`, `river-700`, `chili-500`. Fonts: Fraunces (display), Source Serif 4 (body), IBM Plex Sans (UI), IBM Plex Mono (labels), Noto Serif Thai (Thai script).

## Conversion

- **Primary CTA:** `Buy · $14` → Lemon Squeezy hosted checkout (via `NEXT_PUBLIC_LS_CHECKOUT_URL`).
- **Lead magnet:** Free Chapter One PDF gated behind email capture → Resend delivery.
- **Newsletter:** Footer subscribe form → Resend audience.

## Not yet done

- [ ] Replace hero gradient with AI-generated Chao Phraya image (`public/hero.jpg`)
- [ ] Ship real author portrait (replace SVG placeholder in `AuthorNote`)
- [ ] Generate EPUB + MOBI via `pandoc`/Calibre from the manuscript → upload to Lemon Squeezy
- [ ] Create Lemon Squeezy product and paste checkout URL into `.env.local`
- [ ] Replace chapter-one email HTML with a styled PDF attachment (via `@react-pdf/renderer`) when ready
- [ ] Write `/imprint` and `/privacy` pages (German jurisdiction)

## Deployment

GitHub (`fabiancreation`) + Vercel, same workflow as other series projects. Environment variables in `.env.local` (see `.env.example`). Never commit `.env.local`.

## Output
`/Users/fabianarndt/Projekte/Claude/Web/Bangkok-Neighborhoods/Output/`

## What not to do
- Do not reuse the parent UTC site's color tokens (gold/cream) or Playfair/DM Sans fonts. This book has its own visual identity.
- Do not reuse anything from `/Web/Bangkok-Salespage/` — that was FlexiFunnels HTML, this is Next.js.
- Do not introduce em-dashes. `npm run voice-audit` must return zero.
- Do not add testimonials until real ones exist. Specificity + prose quality carry trust.
