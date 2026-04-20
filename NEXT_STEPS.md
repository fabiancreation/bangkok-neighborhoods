# Next Steps — Bangkok Neighborhoods Landing Page

Updated 2026-04-18. Items roughly ordered by priority: launch blockers first, then polish, then nice-to-have.

The landing page is live at [bangkok-neighborhoods.vercel.app](https://bangkok-neighborhoods.vercel.app). Everything below is what stands between "page looks ready" and "actually taking real money from real readers".

---

## 🚫 Launch blockers (before flipping Buy to live)

### 1. Finish the book manuscript
Upstream at `/Users/fabianarndt/Projekte/Claude/Books/bangkok-neighborhoods/`. The page should not take real orders until:
- [ ] Chapter 17 (On Nut / Bang Na) transition paragraphs rewritten (it was moved from Part V to Part IV, transitions are stale)
- [ ] All `[TODO: verify]` markers resolved — grep the `manuskript/` directory. Roughly 40 claims.
- [ ] Final copy pass against the styleguide (zero em-dashes, no AI vocabulary, observation-over-instruction)

### 2. Produce the actual eBook files
- [ ] Write `scripts/build-epub.sh` in the book repo (not this repo). Skeleton:
  ```bash
  pandoc manuskript/00-introduction.md manuskript/01-thonburi.md ... manuskript/20-closing-essay.md \
    --metadata-file=book-meta.yaml \
    --css=ebook.css \
    --toc --toc-depth=1 \
    -o dist/shape-of-bangkok.epub
  ```
- [ ] Produce `dist/shape-of-bangkok.mobi` via `ebook-convert` (Calibre)
- [ ] Validate in Apple Books, Kindle Previewer, Kobo reader

### 3. Set up Lemon Squeezy
- [ ] Create store if not already there (lemonsqueezy.com — German resident, merchant-of-record handles EU VAT automatically)
- [ ] Create product **"The Shape of Bangkok — eBook"**, $14 USD, one-time purchase
- [ ] Upload EPUB + MOBI as the delivered files
- [ ] Set 7-day refund window, enable auto-delivery
- [ ] Copy the hosted-checkout URL into Vercel env as `NEXT_PUBLIC_LS_CHECKOUT_URL`
- [ ] (Optional) Set up webhook to `/api/ls-webhook` with `LEMONSQUEEZY_WEBHOOK_SECRET` if you want purchase analytics

### 4. Wire Resend for the free-chapter lead magnet
- [ ] Sign up at resend.com, verify the sending domain (e.g. `shape-of-bangkok.com`)
- [ ] Create an audience named `shape-of-bangkok-readers`, copy the ID
- [ ] Set Vercel env vars:
  - `RESEND_API_KEY`
  - `RESEND_AUDIENCE_ID`
  - `RESEND_FROM_EMAIL` (e.g. `Fabian <hello@shape-of-bangkok.com>`)
- [ ] Smoke-test the sample gate and the footer newsletter form on production

### 5. Legal pages (DE jurisdiction)
- [ ] Write `/imprint` page at [src/app/imprint/page.tsx](src/app/imprint/page.tsx) — Impressum with full name, address, VAT ID if applicable, contact email
- [ ] Write `/privacy` page at [src/app/privacy/page.tsx](src/app/privacy/page.tsx) — DSGVO-compliant, covering Resend (email), Vercel Analytics, Lemon Squeezy (payments)
- [ ] Update the footer links — they currently point to `/imprint` and `/privacy` which 404

### 6. Custom domain
- [ ] Decide: `shape-of-bangkok.com` standalone **or** `bangkok.understandingthaiculture.com` subdomain
- [ ] Register or configure DNS, add in Vercel project settings
- [ ] Update `NEXT_PUBLIC_SITE_URL` env var to match (affects OG image URLs and structured data)

---

## 🎨 Polish (ship to marketing-ready)

### 7. Real hero image
The hero currently uses an artful warm gradient with SVG river and prang silhouette. Good-enough placeholder; a real photograph is better.

- [ ] Generate via Midjourney v7 or Nano Banana, Alun Prompt Method:
  > *"Chao Phraya river at dusk, Wat Arun's porcelain prang catching low golden light, longtail boat crossing the foreground, 35mm film grain, muted teal water, warm brass highlights, no text, editorial magazine photography, Alex Webb color palette, 3:2 aspect ratio."*
- [ ] Save as `public/hero.jpg` (AVIF/WebP preferred for perf)
- [ ] Swap into [src/components/HeroCrossing.tsx](src/components/HeroCrossing.tsx) — replace the SVG-gradient div with `next/image` using `priority` + `fill`

### 8. Real author portrait
- [ ] Fabian supplies a portrait photo — medium-format crop, black & white or warm-desaturated, honest not glossy
- [ ] Save as `public/author.jpg`
- [ ] Swap into [src/components/AuthorNote.tsx](src/components/AuthorNote.tsx) (currently an SVG silhouette with a warm wash)

### 9. Styled PDF for Chapter One delivery
Currently the `/api/subscribe` route sends the sample chapter as HTML email body. A styled PDF attachment reads better and feels more like a real book preview.

- [ ] Add `@react-pdf/renderer` dependency
- [ ] Build a PDF component mirroring the editorial typography (Fraunces for headings, Source Serif for body, drop cap on first paragraph)
- [ ] Render to buffer in the API route, attach to the Resend email
- [ ] Source text lives in [src/content/thonburi-chapter.ts](src/content/thonburi-chapter.ts) (shortened inline copy; re-sync from [the full manuscript](../../Books/bangkok-neighborhoods/manuskript/01-thonburi.md) after the manuscript is final)

### 10. Social proof
No testimonials yet, deliberately. After ARC readers give quotes:
- [ ] Add a pre-footer band between [SeriesContext](src/components/SeriesContext.tsx) and [FAQ](src/components/FAQ.tsx) with 3–5 pull-quote testimonials
- [ ] Keep the typography editorial — serif pull quote + mono attribution, not a carousel

---

## 🔬 Verification (pre-launch smoke test)

### 11. End-to-end checkout in test mode
- [ ] Set Lemon Squeezy to test mode, use a test card
- [ ] Verify EPUB delivery email arrives
- [ ] Verify analytics event fires (`buy_click` → `buy_complete`)
- [ ] Verify refund flow works via the LS dashboard

### 12. Technical QA
- [ ] `npm run voice-audit` returns zero on all `src/content/*.ts`
- [ ] Lighthouse mobile + desktop ≥ 95 on Performance, Accessibility, Best-Practices, SEO
- [ ] OG image renders correctly in Slack/Twitter/LinkedIn debuggers once real hero image is in place
- [ ] JSON-LD Book schema validates in Google Rich Results Test
- [ ] axe DevTools clean on every section; keyboard-only walkthrough works end-to-end

### 13. Cross-browser + device spot check
- [ ] Chrome / Safari / Firefox at 375, 768, 1024, 1440
- [ ] Real iPhone + real Android device for the atlas dialog, passage-reel pinned scroll, FAQ animation
- [ ] `prefers-reduced-motion` disables scroll pins and Ken Burns correctly

---

## 💭 Later / nice-to-have

- [ ] Audiobook edition when the narrator is booked and produced (FAQ already references this)
- [ ] Paperback via Amazon KDP / IngramSpark once demand is validated
- [ ] "Advance reader copy" form for press/reviewers (email capture with a different list tag)
- [ ] Translate key page copy to German for a `.de` variant (Fabian is DE native, may drive sales to the German diaspora in Thailand)
- [ ] Retarget existing `understandingthaiculture.com` readers with a launch campaign once the product is real

---

## Where things live

| Thing | Path |
|---|---|
| Landing page code | `/Users/fabianarndt/Projekte/Claude/Web/Bangkok-Neighborhoods/` |
| Book manuscript | `/Users/fabianarndt/Projekte/Claude/Books/bangkok-neighborhoods/` |
| Voice audit | `scripts/voice-audit.sh` |
| Deployed URL | https://bangkok-neighborhoods.vercel.app |
| GitHub repo | github.com/fabiancreation/bangkok-neighborhoods |
| Vercel project | vercel.com/fabiancreations-projects/bangkok-neighborhoods |
| Env var reference | [.env.example](.env.example) |
