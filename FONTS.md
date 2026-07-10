# Typography / Fonts Guide

This document describes the fonts used across **Vāṇī Saṃpuṭa**, why they were chosen, and where each one is applied.

## Why these fonts

The site is heavy with IAST / Sanskrit transliteration (e.g. `Vāṇī Saṃpuṭa`, `Svāmī Mahārāja`, `Śrī`). Many display fonts (such as the previously used *Playfair Display*) do **not** include dot-below diacritics like `ṇ ṭ ṣ ḥ ṛ ṁ`. When a glyph is missing, the browser silently falls back to a system font (Times) mid-word, producing an inconsistent, "broken" look.

**Gentium Book Plus** has complete IAST coverage, so every transliterated word renders in one cohesive, warm, scholarly serif — ideal for spiritual content.

## Font stack

| Role | Font | Notes |
| --- | --- | --- |
| Serif / display / titles / quotes | **Gentium Book Plus** | Full IAST diacritic support. Weights 400/700 + italics. |
| UI / navigation / body text | **Outfit** | Modern geometric sans. Gentium Book Plus is added as a fallback so any diacritics render cleanly. |
| Hindi (Devanagari) | **Noto Serif Devanagari** | Indic script. |
| Odia (Oriya) | **Noto Serif Oriya** | Indic script. |
| Bengali | **Noto Serif Bengali** | Indic script. |

Body font stack (from [src/index.css](src/index.css)):

```css
font-family: 'Outfit', 'Gentium Book Plus', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

Serif stack used for headings and titles:

```css
font-family: 'Gentium Book Plus', 'Georgia', serif;
```

## Where fonts are loaded

- **[public/index.html](public/index.html)** — loads Gentium Book Plus (400/700 + italics) and the three Noto Serif Indic families via Google Fonts `<link>`.
- **[src/index.css](src/index.css)** — `@import` loads Outfit + Gentium Book Plus.

## Where each font is applied

### Global rules — [src/index.css](src/index.css)
- `body` → **Outfit** (with Gentium Book Plus fallback)
- `h1`–`h6` → **Gentium Book Plus**

> All pages that don't set their own `font-family` (Audio Library, Video Library, About, Live, detail pages, etc.) inherit these global rules automatically.

### Header / navigation — [src/App.css](src/App.css)
- Brand title `.app-header h1` → **Gentium Book Plus** (via global `h1` rule)
- Mobile nav links → **Gentium Book Plus**

### Home page — [src/components/Home.css](src/components/Home.css)
- `.guru-name` (guru's name, italic) → **Gentium Book Plus**
- `.daily-quote-text` (English quote) → **Gentium Book Plus**
- `.daily-quote-text.font-hindi` → **Noto Serif Devanagari**
- `.daily-quote-text.font-odia` → **Noto Serif Oriya**
- `.daily-quote-text.font-bengali` → **Noto Serif Bengali**
- `.stat-number` → **Gentium Book Plus**
- `.recently-played-header h2` → **Gentium Book Plus**

### Articles — [src/components/Articles.css](src/components/Articles.css)
- `.articles-title-app` → **Gentium Book Plus**
- `.article-title-app` → **Gentium Book Plus**
- `.article-title` → **Gentium Book Plus**

## Adding / changing a font

1. Add the family to the Google Fonts `<link>` in [public/index.html](public/index.html) (and/or the `@import` in [src/index.css](src/index.css)).
2. Reference it in CSS, always keeping a serif/sans fallback, e.g. `'New Font', 'Gentium Book Plus', serif`.
3. Hard-refresh the browser so the new font file loads.

## Optional future enhancement

For extra visual hierarchy, a second display serif with full IAST support (e.g. **Cardo**) could be used for the large hero heading only, keeping Gentium Book Plus for body and titles.
