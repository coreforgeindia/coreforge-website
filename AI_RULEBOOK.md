# CoreForge Engineering: AI Rulebook & Content Standards

This document establishes the mandatory standards for all automated systems, AI agents, and content generators working on the CoreForge codebase and brand communications.

---

## 1. Punctuation & Typography Standards
- **STRICT PROHIBITION: Never use em dashes (`—`) or en dashes (`–`)**.
- Use standard hyphens (`-`), colons (`:`), or commas (`,`) instead.
- Use straight quotes or standard typographic quotes consistently.
- Headings must use **Playfair Display** styling; body text must use **Inter**.

## 2. Brand Tone & Voice
- **Engineering-first**: Speak like senior hardware and software engineers. Be direct, factual, and concise.
- **No promotional slop**: Avoid words like "supercharge", "unleash", "game-changer", "paradigm shift", "synergy".
- **Focus on execution**: Highlight real-world constraints: manufacturability, BOM cost, latency, PCB signal integrity, firmware reliability, and software scalability.

## 3. UI & Button Specifications
- All primary interactive action buttons must use the `.btn-primary` class (Solid black `#000000` with guaranteed white text `#ffffff`, inverting smoothly on hover).
- All secondary buttons must use the `.btn-secondary` class.
- Never render text color identical to or low-contrast with button background.

## 4. Architecture & Performance Rules
- **Route splitting**: Use `React.lazy()` and `Suspense` for all top-level page routes.
- **Transitions**: Keep page transitions fast (150ms to 250ms) without blocking user interaction.
- **Client Logos**: Display natural authentic client logos without boxes, borders, cards, or grayscale filters.
- **Internal Linking**: Blog posts and service sections must link contextually to dedicated service detail routes (`/services/hardware`, `/services/software`, `/services/training`, `/portfolio`, `/contact`).

## 5. Core Company Facts
- **Founded**: October 2024
- **Headquarters**: Bengaluru, Karnataka, India
- **Core Pillars**: Hardware Design & PCB, Custom Software & Web Platforms, Workshops & Hands-on Training
