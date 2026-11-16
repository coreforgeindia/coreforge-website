import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  serviceCategories,
  productCategories,
  POSITIONING_LINE,
  COMPANY_INFO,
  getAllRoutes,
} from '../src/data/verticals.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const publicDir = path.resolve(rootDir, 'public')

const SITE_URL = process.env.VITE_SITE_URL || 'https://www.coreforgeindia.com'
const TODAY = new Date().toISOString().split('T')[0]

// ── 1. Generate sitemap.xml ──
function generateSitemap() {
  const routes = getAllRoutes()
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.path === '/' ? '/' : r.path}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, 'utf8')
  console.log(`✓ Generated sitemap.xml with ${routes.length} URLs`)
}

// ── 2. Generate robots.txt ──
function generateRobots() {
  const robots = `# CoreForge Robots.txt
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${SITE_URL}/sitemap.xml
`
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots, 'utf8')
  console.log('✓ Generated robots.txt')
}

// ── 3. Generate llms.txt (Concise Markdown Summary) ──
function generateLlmsTxt() {
  let content = `# CoreForge
> ${POSITIONING_LINE}

## Overview
CoreForge is a digital marketing and custom software engineering firm headquartered in Bengaluru, Karnataka, India. Founded in October 2024, CoreForge specializes in 360° Digital Marketing & Brand Strategy, and Custom Web & Mobile Software Engineering, alongside supplying an industrial catalogue of antenna and RF communication hardware.

## Core Practice: 360° Digital Marketing & Software Engineering (/services)

`

  for (const cat of serviceCategories) {
    content += `### [${cat.name}](${SITE_URL}/services/${cat.slug})\n`
    content += `${cat.description}\n\n`
    content += `**Capabilities & Sub-services:**\n`
    for (const item of cat.items) {
      content += `- **${item.name}**: ${item.shortDescription}\n`
    }
    content += '\n'
  }

  content += `## Auxiliary Hardware Supply: Antenna & RF Communication Products (/products)\n\n`

  for (const cat of productCategories) {
    content += `### [${cat.name}](${SITE_URL}/products/${cat.slug})\n`
    content += `${cat.description}\n\n`
    content += `**Engineered Hardware Lines:**\n`
    for (const item of cat.items) {
      content += `- **${item.name}** (${item.specs?.['Frequency Range'] || item.specs?.['Frequency'] || 'Industrial Grade'}): ${item.shortDescription}\n`
    }
    content += '\n'
  }

  content += `## Company Information
- Name: ${COMPANY_INFO.name}
- Founded: ${COMPANY_INFO.founded}
- Location: ${COMPANY_INFO.address.locality}, ${COMPANY_INFO.address.city}, ${COMPANY_INFO.address.state}, India
- Email: ${COMPANY_INFO.email}
- Phone: ${COMPANY_INFO.phoneFormatted}
- Website: ${SITE_URL}

## Core URLs
- Home: ${SITE_URL}/
- Services: ${SITE_URL}/services
- Products: ${SITE_URL}/products
- About Us: ${SITE_URL}/about
- FAQs: ${SITE_URL}/faqs
- Blog: ${SITE_URL}/blog
- Contact: ${SITE_URL}/contact
`

  fs.writeFileSync(path.join(publicDir, 'llms.txt'), content, 'utf8')
  console.log('✓ Generated llms.txt')
}

// ── 4. Generate llms-full.txt (Comprehensive Technical Index) ──
function generateLlmsFullTxt() {
  let content = `# CoreForge - Complete Technical & Engineering Reference
> ${POSITIONING_LINE}

## Company Factsheet
- Legal Entity: CoreForge
- Founded: October 2024
- Location: Peenya, Bengaluru, Karnataka, India
- Positioning: ${POSITIONING_LINE}
- Contact Email: ${COMPANY_INFO.email}
- Contact Phone: ${COMPANY_INFO.phoneFormatted}

## Complete Services Breakdown (/services)

`

  for (const cat of serviceCategories) {
    content += `## Service Category: ${cat.name}\n`
    content += `URL: ${SITE_URL}/services/${cat.slug}\n`
    content += `Summary: ${cat.description}\n\n`

    for (const item of cat.items) {
      content += `### ${item.name}\n`
      content += `URL: ${SITE_URL}/services/${item.slug}\n`
      content += `Description: ${item.shortDescription}\n`
      if (item.deliverables && item.deliverables.length > 0) {
        content += `Key Deliverables:\n`
        for (const del of item.deliverables) {
          content += `  - ${del}\n`
        }
      }
      content += '\n'
    }
  }

  content += `## Complete RF Hardware Breakdown (/products)\n\n`

  for (const cat of productCategories) {
    content += `## Product Category: ${cat.name}\n`
    content += `URL: ${SITE_URL}/products/${cat.slug}\n`
    content += `Summary: ${cat.description}\n\n`

    for (const item of cat.items) {
      content += `### ${item.name}\n`
      content += `URL: ${SITE_URL}/products/${item.slug}\n`
      if (item.application) content += `Application: ${item.application}\n`
      content += `Description: ${item.shortDescription}\n`

      if (item.specs) {
        content += `Technical Specifications (Anand Technologies RF Standard):\n`
        for (const [k, val] of Object.entries(item.specs)) {
          content += `  - ${k}: ${val}\n`
        }
      }
      content += '\n'
    }
  }

  fs.writeFileSync(path.join(publicDir, 'llms-full.txt'), content, 'utf8')
  console.log('✓ Generated llms-full.txt')
}

// Run all
generateSitemap()
generateRobots()
generateLlmsTxt()
generateLlmsFullTxt()

// Remove obsolete public/llm.txt if present
const oldLlmPath = path.join(publicDir, 'llm.txt')
if (fs.existsSync(oldLlmPath)) {
  fs.unlinkSync(oldLlmPath)
  console.log('✓ Removed obsolete public/llm.txt')
}
