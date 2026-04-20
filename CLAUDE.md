# Bangkok Neighborhoods — Landing Page

## Type
Standalone Next.js landing page for the book **"The Shape of Bangkok — History and Culture Explained Through Neighborhoods"** by Fabian Arndt. Volume II of the *Understanding Thai Culture* series.

## Status
**Deployed to production** at [bangkok-neighborhoods.vercel.app](https://bangkok-neighborhoods.vercel.app). Checkout runs in Lemon Squeezy test mode (placeholder URL) until the manuscript is publication-ready.

## Repo
- GitHub: `fabiancreation/bangkok-neighborhoods` (public)
- Vercel: `fabiancreations-projects/bangkok-neighborhoods`
- Auto-deploy on push to `main`

## Stack
- Next.js 16.2.3 + React 19.2.4 + TypeScript 5
- Tailwind CSS 4 (`@theme inline` tokens in `src/app/globals.css`)
- framer-motion, Radix Accordion + Dialog, lucide-react
- Resend (transactional email + audience)
- **Lemon Squeezy** for payments (merchant of record; handles EU VAT automatically)
- Vercel Analytics + Speed Insights

## Design direction
**Editorial with Thai warmth.** Paper-light cream backgrounds as the default surface. Dark sections use warm browns (never pure black). Five Thai-inspired accent colors map to meaning:

| Token | Use |
|---|---|
| `brass-500` | Part I (old river), general accent |
| `tamarind-500` | Part II (trade/layers), primary CTA |
| `chili-500` | Part III (political upheaval) |
| `saffron-500` | Part IV (new money), eyebrow labels on dark |
| `jade-500` | Part V (the edges), temple greenery |
| `blush-500` | Secondary warmth (dusk, lotus) |
| `river-700` | Chao Phraya teal |

Fonts: Fraunces display (H1/H2), Source Serif 4 body, IBM Plex Sans UI, IBM Plex Mono labels, Noto Serif Thai for `คลอง` characters.

## Voice rules (non-negotiable)
Page copy in `src/content/*.ts` is held to the manuscript's own bar:

- **Zero em-dashes (—).** Use periods, commas, parentheses, or new sentences.
- **No AI vocabulary.** Forbidden: *crucial, pivotal, vibrant, bustling, hidden gem, must-see, unforgettable, breathtaking, stunning, renowned, nestled, juxtaposition, tapestry, testament, beacon, furthermore, moreover, additionally, showcase, foster, enhance, delve, garner, interplay.*
- **No promotional hype.** The voice observes and offers. It does not advertise.
- **Observation over instruction.** Describe what happens. Do not tell readers what to do.
- **Concrete before abstract.** Street names, soi numbers, times, prices, before characterization.

Run the voice audit before shipping any copy change:

```bash
npm run voice-audit
```

## Content sources

Typed modules — single source of truth:
- `src/content/copy.ts` — all page copy (hero, pitch, author, buy, newsletter, footer, sample gate)
- `src/content/neighborhoods.ts` — 19 chapters, metadata, teasers, map coordinates
- `src/content/passages.ts` — 5 excerpt passages
- `src/content/faq.ts` — 6 FAQ items
- `src/content/thonburi-chapter.ts` — inline sample chapter for `/sample-chapter`

Original manuscript: `/Users/fabianarndt/Projekte/Claude/Books/bangkok-neighborhoods/manuskript/`. When the manuscript changes, re-sync affected passages/teasers.

## Conversion
- **Primary CTA:** `Buy · $14` → Lemon Squeezy hosted checkout (via `NEXT_PUBLIC_LS_CHECKOUT_URL`)
- **Lead magnet:** Free Chapter One PDF gated behind email capture → Resend delivery
- **Newsletter:** Footer subscribe form → Resend audience `shape-of-bangkok-readers`

## Known gaps (pre-launch)

### Assets
- [ ] Real AI-generated Chao Phraya hero image → `public/hero.jpg` (currently an artful gradient with SVG river + prang silhouette)
- [ ] Real author portrait → replace SVG silhouette in `AuthorNote`

### Commerce
- [ ] Create Lemon Squeezy product ("The Shape of Bangkok — eBook") in their dashboard
- [ ] Generate EPUB + MOBI via `pandoc` + Calibre from the manuscript; upload as the deliverable
- [ ] Set env vars in Vercel dashboard: `NEXT_PUBLIC_LS_CHECKOUT_URL`, `LEMONSQUEEZY_WEBHOOK_SECRET`, `RESEND_API_KEY`, `RESEND_AUDIENCE_ID`, `RESEND_FROM_EMAIL`
- [ ] Optional: styled PDF delivery for Chapter One via `@react-pdf/renderer` (currently sends HTML email)

### Legal
- [ ] `/imprint` page (German jurisdiction: Impressum required)
- [ ] `/privacy` page (DSGVO compliance)

### Domain
- [ ] Custom domain decision: `shape-of-bangkok.com` standalone, or `bangkok.understandingthaiculture.com` subdomain?

### Book manuscript blockers (upstream, not this repo)
The page is live but the Buy button shouldn't go live until:
- Chapter 17 transitions rewritten
- ~40 `[TODO: verify]` fact-checks resolved

## Deployment

```bash
git push origin main     # → auto-deploys to Vercel
```

Never commit `.env.local`. Only `.env.example` (placeholders) is in the repo.

## Output
`/Users/fabianarndt/Projekte/Claude/Web/Bangkok-Neighborhoods/Output/`

## What not to do
- Do not reuse the parent UTC site's color tokens (gold/cream) or Playfair/DM Sans fonts. This book has its own visual identity.
- Do not reuse anything from `/Web/Bangkok-Salespage/` — that was FlexiFunnels HTML, this is Next.js.
- Do not introduce em-dashes. `npm run voice-audit` must return zero.
- Do not add testimonials until real ones exist. Specificity + prose quality carry trust.
- Do not use pure black (`#000`) or near-black (`#0c0a08`) as dominant background. The palette moved to warm browns (`ink-900: #2a201a`). Pure-black editorial felt monastic and cold to the author.
