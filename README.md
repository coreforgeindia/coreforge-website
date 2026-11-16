# CoreForge India - Official Website

CoreForge is a Bengaluru-based engineering firm delivering solutions across three core pillars:
- **360° Digital Marketing & Branding**
- **Software & App Development**
- **Antenna & RF Communication Products**

---

## Tech Stack

- **Frontend**: React 19, React Router v7, Vite 8
- **Styling**: Tailwind CSS v4, Framer Motion
- **Liquid Glass**: @ybouane/liquidglass with CSS glass fallback
- **Icons**: React Icons (Hi, Hi2)
- **Deployment**: Cloudflare Wrangler / Pages
- **SEO & Data**: Dynamic data layer in `src/data/verticals.js` with automated sitemap, robots, and LLM text generation

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Generate SEO files (sitemap.xml, robots.txt, llms.txt, llms-full.txt)
npm run generate:seo

# Production build
npm run build

# Preview build locally
npm run preview
```

---

## Architecture & Standards

All automated updates and contributions must strictly follow `AI_RULEBOOK.md`:
- Never use em dashes (`—`) or en dashes (`–`). Use standard hyphens or colons.
- Heading typography uses Playfair Display; body uses Inter.
- Interactive primary action buttons must use `.btn-primary` and `.btn-secondary`.
- Single source of truth for all vertical content in `src/data/verticals.js`.
