# Design Brief — aboutmarkmansour.com Redesign

## Design Read
Redesign of a personal portfolio/about page for a general/mixed audience (recruiters, peers, professional network), with a Linear-style minimalist language, leaning toward Tailwind utilities + a non-Inter sans + restrained motion.

**Dials:** `DESIGN_VARIANCE: 6` · `MOTION_INTENSITY: 4` · `VISUAL_DENSITY: 3`
(Minimalist preset; redesign-preserve on IA/content, since the page structure works and the copy is real and specific.)

## Mode: Redesign — Preserve Content, Overhaul Visuals
There is no brand identity to protect. The site runs on the **unmodified AstroWind template defaults**: Inter Variable, blue primary (`rgb(1 97 239)`), violet accent (`rgb(109 40 217)`) — the exact "AI-purple + Inter" combination flagged as a generic default. Visually this is a greenfield job. The content, IA, and voice are real and worth preserving as-is.

## Current State Audit

**Stack:** Astro 5 + Tailwind (via CSS custom properties in `CustomStyles.astro`) + AstroWind component library (`Hero`, `Features2`, `Features3`, `Testimony`, `Testimonials`, `Content` widgets).

**Brand tokens (template defaults, unowned):**
- Font: Inter Variable (`--aw-font-sans`)
- Primary: `rgb(1 97 239)` (blue), Accent: `rgb(109 40 217)` (violet)
- No custom radius/shadow system — inherits Tailwind defaults

**Information architecture (single long-scroll homepage):**
1. Header — sticky nav, "Blog" link, "Contact Me" (mailto) CTA
2. Hero — "Hi, I'm Mark Mansour." + 2-paragraph intro + LinkedIn CTA
3. "How I work" — 5-item feature grid (Empowering my team, Alignment, Delegation, Collaboration, My Focus) + 1 testimonial (Kamen Moutafov, Microsoft)
4. "What I do" — 5-item feature grid (Culture & Leadership, Scope & Impact, Influence & Decision Making, Knowledge, Judgement & Risk Management) + 1 testimonial (Sean Maloney, Epic Games)
5. Testimonials — 3 more quotes (Ido Benshachar, Neil Macneale IV, Joe Isenhour — all Microsoft/AWS colleagues)
6. About Me — bio + casual photo
7. Footer — LinkedIn/GitHub/RSS icons, contact email, "Made with Astro"

Plus a separate `/blog` section (Astro content collections, working and out of scope for this redesign unless asked).

**Content is strong and specific** — five named, verifiable testimonials from real former colleagues with titles (Microsoft, Epic Games, AWS). This is a genuine trust signal and should not be diluted or replaced with placeholder content.

## Patterns to Preserve
- All copy voice, testimonials, and bio content — verbatim
- IA / section order (it tells a coherent story: intro → how I work → what I do → social proof → about)
- Nav structure (Blog link + contact action)
- Footer social links (LinkedIn, GitHub, RSS) and contact email
- URL structure (`/blog`, `/[...blog]` slugs) — no route changes

## Patterns to Retire (AI-slop tells present today)
- Inter as default sans (Section 4.1 — discouraged as default)
- Blue/violet as primary+accent pairing reads as template-default, not a chosen brand voice
- Five testimonials in a flat `Testimonials` grid + two more embedded as `Testimony` blocks inside feature sections — six total quote-shaped blocks across the page, no hierarchy between them
- Two 5-item feature grids back to back ("How I work" / "What I do") — same layout family used twice in a row (Section 4.7 repetition ban)
- Global `navigation.ts` header data still points at the AstroWind GitHub repo with a "Download" action — leftover template artifact not fully cleaned up (currently masked by a local override in `index.astro`, but live on other pages/footer context)

## Known Cleanup Item (found during audit, not visual)
`src/navigation.ts` — `headerData.actions` still reads `{ text: 'Download', href: 'https://github.com/arthelokyo/astrowind' }`. `index.astro` overrides this locally with "Contact Me," but the shared file is stale. Worth fixing regardless of visual direction chosen.

## Modernization Levers (priority order per Section 11.D)
1. **Typography refresh** — replace Inter with a deliberate sans (Geist, Outfit, or similar); this alone resets the "generic AI template" read.
2. **Color recalibration** — drop the blue/violet template pair for a single restrained accent on a neutral (zinc/stone) base.
3. **Spacing & rhythm** — current section padding is template-default; tighten/loosen per `VISUAL_DENSITY: 3`.
4. **Testimonial hierarchy** — consolidate 6 quote-blocks into one considered pattern (e.g., 2 featured pull-quotes + a compact grid for the rest) instead of the current flat repetition.
5. **Feature-grid variation** — break the back-to-back 5-column grids into two distinct layout families so the page doesn't repeat itself (Section 4.7).
6. **Hero recomposition** — current hero is centered text + single CTA; fine for a manifesto-style personal intro, but worth deciding deliberately rather than inheriting the template's default.

## Decisions
- **Hero:** keep centered/editorial. Message-as-design is the right call for a personal intro; no asymmetric split, no forced use of the casual photo in the hero.
- **Accent color:** deep emerald on a zinc/stone neutral base. Calm and distinct from the banned blue/violet template pairing, appropriate for a senior engineering-leader's personal site. Locked per Section 4.2 (one accent, used identically across every section).
- **Dark mode:** keep the existing toggle (`showToggleTheme`) and design both modes from the start per Section 6.C. No light-only or dark-only shortcut.
