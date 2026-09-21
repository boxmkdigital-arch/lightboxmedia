# Handoff: Lightbox Media — bilingual LED billboard agency website

## Overview
A five-page marketing website for **Lightbox Media**, a Macedonian DOOH (digital out-of-home) agency
operating LED billboards in Skopje, Ohrid and Gevgelija. Dark premium aesthetic, fully bilingual
(Macedonian / English) with an in-page language toggle, an interactive location map, modal YouTube
players for each billboard reel, a looping client-logo marquee, and a contact/booking form.

Pages: **Насловна / Home**, **Локации / Locations**, **Услуги / Services**, **Портфолио / Portfolio**,
**Контакт / Contact**. All five live in one prototype file and are switched client-side (no routing).

## About the Design Files
The files in this bundle are **design references created in HTML** — a working prototype that shows the
intended look, copy and behaviour. They are **not production code to copy directly**.

The task is to **recreate these designs in the target codebase's existing environment** (Next.js/React,
Nuxt/Vue, Astro, WordPress theme, etc.) using its established routing, component patterns, styling
solution and i18n library. If no codebase exists yet, pick the framework that best fits the project —
for a marketing site of this kind, a statically-rendered React/Next.js app with an i18n layer and real
routes (`/`, `/locations`, `/services`, `/portfolio`, `/contact`) is the natural target.

Two prototype-only mechanisms must NOT be carried over:
1. `<image-slot>` — a drag-and-drop placeholder used so the client could drop images into the mock.
   In production these become ordinary `<img>` / CMS-managed media.
2. The single-file client-side page switcher (`state.page`) — replace with real routes.

## Fidelity
**High-fidelity.** Colors, typography, spacing, radii, transitions, responsive breakpoints and all copy
(both languages) are final and should be reproduced faithfully. Copy is client-approved — do not rewrite it.

---

## Global chrome

### Layout container
- Max content width **1280px**, centred, horizontal padding `clamp(18px, 5vw, 40px)`.
- Page background: `#07070a` plus two fixed radial accents on the root wrapper:
  - `radial-gradient(1100px 600px at 78% -10%, rgba(56,132,255,.16), transparent 60%)`
  - `radial-gradient(900px 520px at 6% 8%, rgba(255,138,46,.09), transparent 62%)`
- Hairline dividers between bands: `1px solid rgba(255,255,255,.07)`.

### Navigation (sticky)
- `position:sticky; top:0; z-index:50`, background `rgba(8,8,11,.82)`, `backdrop-filter: blur(18px)`,
  bottom border `1px solid rgba(255,255,255,.07)`. Min height **76px**, padding `10px clamp(16px,5vw,40px)`.
- Left: logo `assets/logo-white.png`, height `clamp(34px, 7vw, 46px)`.
- Centre/right: 5 links, uppercase, **13px / 500 / letter-spacing .1em**, color `#a3a3ac`, hover `#ffffff`,
  min tap height 44px.
  - MK: Насловна · Локации · Услуги · Портфолио · Контакт
  - EN: Home · Locations · Services · Portfolio · Contact
  - Each link renders BOTH language spans stacked in a 1-cell grid and cross-fades between them
    (opacity + 6px translateY, `.25s`), so the nav never reflows on language change. Reproduce this
    cross-fade, or drop it if the target i18n solution re-renders cleanly.
- Right: language pill + primary CTA.
  - **MK | EN pill** — transparent, `1px solid rgba(255,255,255,.14)`, radius 999px, padding `7px 13px`,
    11px / 700 / .14em. Active side `#ffffff`, inactive `#6a6a74`, divider `#3d3d45`. Hover border `rgba(255,255,255,.34)`.
  - **CTA "Резервирај" / "Book now"** — background `#0ABA02`, text `#07070a`, radius 999px,
    padding `12px 24px`, 13px / 700 / .04em, uppercase. Hover: `translateY(-1px)` +
    `box-shadow: 0 8px 34px rgba(255,255,255,.22)`, `.3s ease`.
- **Responsive nav rules** (these were tuned against real device widths — keep them):
  | Breakpoint | Behaviour |
  |---|---|
  | ≤1010px | links shrink to 12px / .04em, gap `clamp(10px,2vw,20px)`, no mid-list wrap |
  | ≤820px | link row drops **below** the logo/pill/CTA row (order: logo, CTA group, links) |
  | ≤700px | links 11px / .05em, 38px tap height |
  | ≤470px | link row goes full width, `justify-content: space-between`, 10px / letter-spacing 0 |

### Footer
Top border hairline; 1280px row, padding 40px, `flex` + `space-between` + wrap:
logo (56px, opacity .85) · `info@lightboxmedia.mk · 078 320 230 · 070 223 286` (Roboto Mono 11px / .14em / `#5e5e6a`) · `© 2026` (`#3f3f48`).

---

## Screens / Views

### 1. Home (Насловна)
**Purpose:** establish the network, prove reach, drive to booking.

Sections top to bottom:

1. **Hero** — `min-height: clamp(520px, 70vh, 640px)`, full-bleed background video or image behind
   two stacked overlays: `rgba(0,0,0,.62)` and
   `linear-gradient(100deg, rgba(7,7,10,.9) 0%, rgba(7,7,10,.62) 46%, rgba(7,7,10,.2) 100%)`.
   Content padding `clamp(84px,11vw,120px) clamp(18px,5vw,40px)`.
   - Eyebrow: Roboto Mono 11px, `.32em`, uppercase, **`#0ABA02`**.
   - H1: `clamp(40px, 5.67vw, 76px)`, weight 900, line-height 1.02, letter-spacing `-.035em`, max-width 900px.
   - Sub: 19px / 300 / line-height 1.6 / `#a8a8b2`, max-width 620px.
   - Buttons (flex, gap 14px, `white-space:nowrap`, padding `16px 30px`, radius 999px, 13px/700/.06em uppercase):
     primary `#0ABA02` on `#07070a` → Contact; secondary transparent with `1px solid rgba(255,255,255,.22)`,
     hover border `rgba(255,255,255,.55)` → Locations.
2. **Benefits** — four items (see `BENEFITS` data), each with a small square accent swatch in the item's hue.
   Grid `repeat(auto-fit, minmax(210px, 1fr))`.
3. **Interactive map** — see "Map component" below.
4. **Location reels** ("Видео од локациите" / "Location reels") — directly under the map.
   Section head: mono 11px eyebrow + "Види сè / See all →" link to Locations.
   Grid `repeat(auto-fit, minmax(min(100%,260px), 1fr))`, gap `clamp(14px,2vw,22px)`.
   Card: `1px solid rgba(255,255,255,.08)`, radius 18px, background `#0c0c11`, overflow hidden.
   Hover: `translateY(-4px)` + border tinted to the city hue at 55% alpha, `.3s ease`.
   Thumbnail area 190px tall = YouTube poster image, `object-fit: cover`, with a
   `linear-gradient(to top, rgba(7,7,10,.75), rgba(7,7,10,.12))` scrim and a centred
   "▶ Прикажи видео / Play preview" label (12px / 700 / .18em).
   Footer row (padding `18px 20px`): city name 17px/700 and size in Roboto Mono 11px in the city hue.
   | City | Hue | Size | YouTube ID |
   |---|---|---|---|
   | Скопје | `oklch(0.72 0.17 245)` blue | 50 m² | `a0LOYsoLJPA` |
   | Охрид | `oklch(0.72 0.17 55)` orange | 40 m² | `Pv317kdpnAE` |
   | Гевгелија | `oklch(0.72 0.17 145)` green | 2 × 15 m² | `Yf_1vpeQTqI` |
5. **Reach** — "1.000.000+" headline figure with the network list (`NET` data: city, address, size,
   hue dot). Two-column on desktop, wraps to one; the right column's `border-left` divider uses
   `padding-left: clamp(0px, 4vw, 56px)`.
6. **Clients marquee** — see "Logo marquee" below.
7. **Closing booking band** — headline `t.homeCta`, both phone numbers, email, CTA. Padding `clamp(26px,4.5vw,56px)`.

### 2. Locations (Локации)
1. **Showreel band** — full-width video slot with heading "Шоурил / Showreel" and the line
   `t.showreelLine`.
2. **Interactive map** (same component as home).
3. **Three location cards** — one per city, accent-hued. Each has:
   - a 210px media header: YouTube poster + ▶ badge, opening the modal player (same three IDs as above);
   - city name, address (`t.addr1..3`), size, and the descriptive body (`t.card1..3`).
4. **Stats band** — three figures: monthly reach, LED screens in network, daily airtime.
   Grid `repeat(auto-fit, minmax(min(100%,200px), 1fr))`, hairline top and bottom borders.
5. **VIP exclusivity block** — glass panel: `1px solid rgba(255,255,255,.1)`, radius 22px,
   `linear-gradient(150deg, rgba(255,255,255,.055), rgba(255,255,255,.015))`, `backdrop-filter: blur(24px)`,
   padding `clamp(26px,4.5vw,52px) clamp(24px,4.5vw,56px)`. Title `t.vipTitle`, body `t.vipBody`,
   then the three `VIP` points. Mentions the **+40%** long-term surcharge.

### 3. Services (Услуги)
Four numbered pillars from `PILLARS` (01–04), grid `repeat(auto-fit, minmax(260px, 1fr))`.
Each card: mono number in the pillar hue, title (uppercase-ish display weight 700), body 300 weight,
and a wrapping row of tag chips (mono 11px, pill, `1px solid rgba(255,255,255,.12)`).

### 4. Portfolio (Портфолио)
12-slot client logo grid (`CLIENTS` data, slot ids `logo-1` … `logo-12`).
Default state `filter: grayscale(1) brightness(.72)`, `opacity: .7`; on hover → full color, opacity 1,
transition `filter .4s ease, opacity .4s ease`. A `revealLogos` flag forces all logos to full color.
Named clients so far: State Video Lottery, RK Vardar 1961, MTEL; the rest are placeholders.

### 5. Contact (Контакт)
Two columns, `repeat(auto-fit, minmax(min(100%,300px), 1fr))`.
- Left: eyebrow, H1 `clamp(40px,5.67vw,76px)`/900, sub 18px/300, then the phone numbers as
  `tel:` links at `clamp(23px,3.28vw,44px)`/700 and the email at `clamp(16px,2.24vw,30px)`/500
  (hover → orange `oklch(0.72 0.17 55)`).
- Right: glass form panel (same glass recipe as the VIP block), padding 44px.
  Fields: Name, Company, Email, Phone (2-up grid, `minmax(min(100%,280px),1fr)`), a Location
  `<select>` (Охрид — Центар (40 m²) / Гевгелија (2 × 15 m²) / Скопје - Аеродром (50 m²) / Цела Мрежа),
  and a Message textarea (4 rows, `resize: vertical`).
  Inputs: background `rgba(7,7,10,.6)`, `1px solid rgba(255,255,255,.12)`, radius 10px,
  padding `14px 15px`, **font-size 16px** (deliberate — prevents iOS focus zoom),
  focus border `oklch(0.72 0.17 245 / .7)`, no outline.
  Labels: Roboto Mono 10px / .2em / uppercase / `#7b7b86`.
  Submit: `#0ABA02`, radius 999px, padding `17px 24px`, 14px/700/.04em uppercase.
  Under it, `t.formNote` at 12px/300/`#65656f`.
- On submit the prototype swaps the panel for a success state (min-height 520px, centred): a 16px
  green square with `box-shadow: 0 0 26px oklch(0.72 0.17 145 / .9)`, `t.sentTitle`, `t.sentBody`.
  **No backend is wired.** Production must POST to the real CRM endpoint and handle validation + errors.

---

## Shared components

### Map component (home + locations)
- A container of `height: clamp(300px, 48vw, 440px)` holding a Macedonia map image with three pins
  positioned by percentage (Skopje, Ohrid, Gevgelija — Gevgelija carries two screens).
- Pin: small dot in the city hue with a pulsing halo — `@keyframes lbpulse` (2.6s ease-out infinite:
  scale 1 → 2.6, opacity .55 → 0).
- Inline pin label (name + size) sits to the right of the dot, `white-space: nowrap`. **Hidden below 700px.**
- Hovering (desktop) or tapping (mobile) a pin reveals a popup card with the location name, size and
  1–2 photos. Popups are `pointer-events: none` while closed — only the open popup accepts input;
  this was a real bug (an invisible popup stole hover from its neighbour), so keep it.
- Popup widths `min(300px, 74vw)` and `min(440px, 82vw)` (the two-photo Gevgelija card).
- **Below 700px** popups become a bottom sheet: `position: fixed; left/right 12px; bottom 14px;
  width auto; z-index 90`, with photos 130px tall.

### Logo marquee (home clients section)
- Head row: eyebrow "Клиенти што ни веруваат / Trusted by" + "Види сè / See all →" to Portfolio.
- Track: two identical halves of the 12 client logos side by side (`width: max-content`, gap 56px
  inside each half plus `padding-right: 56px`), animated with
  `@keyframes lbmarquee { from { translate3d(0,0,0) } to { translate3d(-50%,0,0) } }`, **42s linear infinite**.
  The two-equal-halves structure is what makes the `-50%` loop seamless — don't collapse it.
- Edge fade: `mask-image: linear-gradient(to right, transparent, #000 9%, #000 91%, transparent)`.
- `animation-play-state: paused` on container hover.
- Each logo cell: 128 × 60, `object-fit: contain`, grayscale by default, full color on hover
  (same filter recipe as the Portfolio grid). Home and Portfolio share the same logo assets.

### Video modal (all pages)
- Trigger: any location card / reel card.
- Overlay: `position: fixed; inset: 0; z-index: 200`, `rgba(4,4,6,.92)` + `backdrop-filter: blur(12px)`,
  `display: grid; place-items: center`, padding `clamp(14px,4vw,48px)`.
- Dialog width `min(1120px, 94vw, calc((100dvh - 170px) * 16 / 9))` — capped by viewport **height** too,
  so the title and the fallback link stay visible in short windows.
- Header: title 22px/700 + circular close button (38px, `1px solid rgba(255,255,255,.2)`, hover
  border `rgba(255,255,255,.5)`).
- Player: `aspect-ratio: 16/9`, radius 18px, `box-shadow: 0 40px 120px rgba(0,0,0,.7)`,
  iframe `https://www.youtube-nocookie.com/embed/<id>?autoplay=1&rel=0&modestbranding=1&playsinline=1`.
- Below: "Отвори на YouTube / Open on YouTube ↗" link (mono 10px, hover `#0ABA02`) as a fallback.
- Closes on overlay click and on the ✕; inner clicks stop propagation. **Add Escape-to-close and focus
  trapping in production** — the prototype does not implement them.

---

## Interactions & Behavior
- **Language toggle** — flips MK/EN for every string in the UI. Prototype default is MK (prop `defaultLang`).
  In production use the codebase's i18n layer with locale-prefixed routes (`/mk`, `/en`) and
  `lang` on `<html>`. Both string sets are in `COPY` in the prototype.
- **Navigation** — prototype sets `state.page`; production uses real routes with the active link
  styled `#ffffff`.
- **Hover transitions** — cards `translateY(-4px)` + tinted border, `.3s ease`; buttons
  `translateY(-1px)` + glow, `.3s ease`; logos `filter/opacity .4s ease`.
- **Map pins** — hover on desktop, tap on mobile; only one popup open at a time.
- **Marquee** — pauses on hover; should also respect `prefers-reduced-motion` in production (not yet handled).
- **Form** — prototype only flips to a success panel. Production needs required-field validation,
  email/phone format checks, an inline error state per field, a submitting state on the button, and a
  server-error state.
- **Responsive** — verified at 390 / 430 / 470 / 700 / 768 / 820 / 1010 / 1280px. Everything is fluid:
  `clamp()` type, `auto-fit` grids, no fixed widths except the 1280px cap.

## State Management
| State | Type | Purpose |
|---|---|---|
| `lang` | `"MK" \| "EN"` | active language (→ i18n locale in production) |
| `page` | `"home" \| "locations" \| "services" \| "portfolio" \| "contact"` | active view (→ router) |
| `pin` | pin id \| null | which map popup is open |
| `video` | `{ id, title } \| null` | open modal player; null = closed |
| `sent` | boolean | contact form success panel |
| form fields | strings | uncontrolled in the prototype; make them controlled + validated |

Data fetching: none in the prototype. In production, location copy, client logos and the reel IDs are
good CMS candidates; the contact form needs a POST endpoint (the copy promises a reply within 24 hours
and that submissions land in their CRM).

## Design Tokens

### Colors
| Token | Value | Use |
|---|---|---|
| Background | `#07070a` | page |
| Surface | `#0c0c11` | cards |
| Nav surface | `rgba(8,8,11,.82)` + blur 18px | sticky header |
| Hairline | `rgba(255,255,255,.07)` | dividers |
| Card border | `rgba(255,255,255,.08)` → `rgba(255,255,255,.12)` | cards / inputs |
| Ink | `#f2f2f4` | body text |
| Ink strong | `#ffffff` | hover / active |
| Ink muted | `#a8a8b2`, `#9c9ca6` | paragraphs |
| Ink dim | `#a3a3ac`, `#7b7b86`, `#6d6d78`, `#5e5e6a`, `#3f3f48` | nav, labels, meta |
| **Brand green** | **`#0ABA02`** | primary CTA, eyebrow accent, link hover |
| Accent blue | `oklch(0.72 0.17 245)` | Skopje |
| Accent orange | `oklch(0.72 0.17 55)` | Ohrid |
| Accent green | `oklch(0.72 0.17 145)` | Gevgelija / success |
| Hero scrim | `rgba(0,0,0,.62)` + 100deg gradient | hero |

### Typography
- **Roboto** 300 / 400 / 500 / 700 / 900, Latin + Cyrillic subsets — all UI text.
- **Roboto Mono** 400 / 500 — eyebrows, labels, meta, sizes (always uppercase with wide tracking).
- Fallback stack: `Roboto, Helvetica, Arial, sans-serif`.

| Role | Size | Weight | Tracking / leading |
|---|---|---|---|
| Display H1 | `clamp(40px, 5.67vw, 76px)` | 900 | `-.035em` / 1.02 |
| Section title | `clamp(30px, 4vw, 54px)` | 900 | `-.03em` |
| Card title | 17–22px | 700 | `-.01em` |
| Body large | 18–19px | 300 | 1.6 |
| Body | 15px | 300–400 | 1.6 |
| Nav link | 13px | 500 | `.1em` uppercase |
| Button | 13–14px | 700 | `.04em`–`.06em` uppercase |
| Eyebrow (mono) | 11px | 400 | `.2em`–`.32em` uppercase |
| Micro label (mono) | 10px | 400 | `.2em`–`.24em` uppercase |

### Spacing
Base 4px. Common: 6 / 9 / 12 / 14 / 18 / 20 / 22 / 26 / 28 / 40 / 44 / 56 / 72 px.
Fluid patterns in use: gutters `clamp(18px,5vw,40px)`, section padding
`clamp(56px,8vw,96px)` top / `clamp(72px,10vw,120px)` bottom, grid gaps `clamp(14px,2vw,22px)`.

### Radius
10px (inputs) · 18px (media cards, modal player) · 22px (glass panels) · 999px (pills, buttons) · 3px (accent squares).

### Shadows
- CTA hover: `0 8px 34px rgba(255,255,255,.22)` / `0 10px 34px rgba(10,186,2,.35)`
- Submit hover: `0 10px 40px rgba(255,255,255,.24)`
- Modal player: `0 40px 120px rgba(0,0,0,.7)`
- Success dot glow: `0 0 26px oklch(0.72 0.17 145 / .9)`

### Motion
`.25s` language cross-fade · `.3s ease` hover (transform, border, shadow) · `.4s ease` logo
filter/opacity · `2.6s` pin pulse · `42s` linear marquee.

## Assets
| Asset | Path / source | Notes |
|---|---|---|
| Logo (white) | `assets/logo-white.png` | nav 34–46px, footer 56px |
| Hero background | `assets/hero.mp4` (or uploaded image) | client-supplied |
| Showreel | `assets/showreel.mp4` | Locations page |
| Per-city clips | `assets/skopje.mp4`, `ohrid.mp4`, `gevgelija.mp4` | optional local fallbacks |
| Location photos | uploaded into `<image-slot>` in the prototype | replace with real media |
| Client logos | 12 slots `logo-1`…`logo-12` | shared by Portfolio grid and home marquee |
| Reels | YouTube `a0LOYsoLJPA` (Skopje), `Pv317kdpnAE` (Ohrid), `Yf_1vpeQTqI` (Gevgelija) | embedded via `youtube-nocookie.com` |

**Note on YouTube:** these uploads previously returned embed error 153. If embedding is disabled on any
of them, the modal will fail — either enable "Allow embedding" in YouTube Studio or self-host the MP4s.

## Files
| File | What it is |
|---|---|
| `Lightbox Media.dc.html` | the full prototype — all five pages, both languages, all interactions |
| `support.js` | prototype runtime (template + logic glue). **Not needed in production.** |
| `image-slot.js` | drag-and-drop image placeholder used for the mock's media. **Not needed in production.** |
| `assets/` | logo and video assets referenced above |

Read the prototype for exact markup and inline styles; every value in this README is taken from it.
All styling in the prototype is inline by design — translate it to the target codebase's styling
solution (CSS modules, Tailwind, styled-components) rather than copying inline styles.

## Open items for the implementer
1. Wire the contact form to the real CRM endpoint; add validation and error states.
2. Real routes + locale-prefixed i18n instead of the single-file page switcher.
3. Replace `<image-slot>` with real media (CMS or static).
4. Accessibility pass: Escape-to-close and focus trap on the video modal, `prefers-reduced-motion`
   for the marquee and pin pulse, visible focus rings on nav/CTA, `alt` text on all logos and photos.
5. Confirm YouTube embedding is enabled on all three reels.
6. SEO/meta: titles, descriptions and Open Graph per page, per locale.
