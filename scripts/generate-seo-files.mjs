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

// Primary image mappings for Google Image Search indexing
const routeImageMap = {
  '/': {
    loc: `${SITE_URL}/favicon.png`,
    title: 'CoreForge - 360° Digital Marketing & Custom Software Engineering',
    caption: 'CoreForge engineering laboratory headquartered in Bengaluru, Karnataka, India.',
  },
  '/services': {
    loc: `${SITE_URL}/assets/service-marketing.jpg`,
    title: 'CoreForge Services Architecture',
    caption: '360° Digital Marketing, Brand Strategy, and Custom Software Development services.',
  },
  '/products': {
    loc: `${SITE_URL}/assets/antenna-vhf-uhf.jpg`,
    title: 'CoreForge Industrial Antenna & RF Hardware Catalogue',
    caption: 'VHF/UHF antennas, cavity duplexers, and RF passive components calibrated in Bengaluru.',
  },
  '/about': {
    loc: `${SITE_URL}/assets/service-software.jpg`,
    title: 'About CoreForge Engineering Lab',
    caption: 'Founded in October 2024 in Peenya Industrial Area, Bengaluru, Karnataka.',
  },
  '/services/digital-marketing-branding': {
    loc: `${SITE_URL}/assets/service-marketing.jpg`,
    title: '360° Digital Marketing & Branding Division',
    caption: 'Enterprise brand strategy, performance media acquisition, and technical SEO architecture.',
  },
  '/services/software-app-development': {
    loc: `${SITE_URL}/assets/service-software.jpg`,
    title: 'Custom Software & App Development Division',
    caption: 'Bespoke web platforms, cloud backends, and cross-platform React Native applications.',
  },
  '/services/brand-strategy-identity': {
    loc: `${SITE_URL}/assets/brand-strategy.jpg`,
    title: 'Brand Strategy & Identity Design',
    caption: 'Typographic scales, minimalist monochrome visual identity, and positioning systems.',
  },
  '/services/website-design-development': {
    loc: `${SITE_URL}/assets/web-development.jpg`,
    title: 'Website Design & Development',
    caption: 'High-performance responsive websites built with React, Vite, and modern CSS.',
  },
  '/services/digital-marketing-advertising': {
    loc: `${SITE_URL}/assets/paid-advertising.jpg`,
    title: 'Digital Marketing & Performance Advertising',
    caption: 'Paid acquisition campaigns across Google Ads, Meta Ads, and LinkedIn.',
  },
  '/services/website-development': {
    loc: `${SITE_URL}/assets/web-development.jpg`,
    title: 'Custom Website Development',
    caption: 'Production-grade enterprise web portals with sub-second load times.',
  },
  '/services/custom-software-development': {
    loc: `${SITE_URL}/assets/custom-webapp.jpg`,
    title: 'Custom Software Development',
    caption: 'Cloud software, REST APIs, and database architectures replacing generic SaaS.',
  },
  '/services/android-ios-app-development': {
    loc: `${SITE_URL}/assets/mobile-app.jpg`,
    title: 'Android & iOS Mobile Application Development',
    caption: 'Cross-platform mobile apps engineered with React Native and native TurboModules.',
  },
  '/products/vhf-uhf-antennas': {
    loc: `${SITE_URL}/assets/antenna-vhf-uhf.jpg`,
    title: 'VHF / UHF Base Station & Mobile Antennas',
    caption: 'Industrial folded dipole arrays and fiberglass collinear antennas for two-way communications.',
  },
  '/products/gsm-lte-antennas': {
    loc: `${SITE_URL}/assets/antenna-gsm-lte.jpg`,
    title: 'GSM / LTE / 4G / 5G Cellular Antennas',
    caption: 'Broadband multi-band antennas supporting 698-2700 MHz and sub-6 GHz 5G IoT telemetry.',
  },
  '/products/wifi-wlan-antennas': {
    loc: `${SITE_URL}/assets/antenna-wifi.jpg`,
    title: 'Dual-Band 2.4 GHz & 5.8 GHz Industrial Wi-Fi Antennas',
    caption: 'Outdoor directional and omnidirectional Wi-Fi antennas for SCADA automation.',
  },
  '/products/gps-gnss-antennas': {
    loc: `${SITE_URL}/assets/antenna-gps-gnss.jpg`,
    title: 'Marine & Vehicle GPS GNSS Active Antennas',
    caption: 'IP67 waterproof active satellite antennas with integrated 28 dB Low Noise Amplifier.',
  },
  '/products/rf-cavity-duplexers': {
    loc: `${SITE_URL}/assets/rf-duplexer.jpg`,
    title: 'RF Cavity Duplexers & Bandpass Filters',
    caption: 'High-Q 6-cavity notch duplexers with greater than 75 dB Tx-Rx isolation.',
  },
  '/products/rf-coaxial-cable-assemblies': {
    loc: `${SITE_URL}/assets/rf-cables.jpg`,
    title: 'Low-Loss RF Coaxial Cable Assemblies & Connectors',
    caption: 'Precision 50-Ohm LMR-400 and RG-213 low-loss coaxial cables with silver-plated connectors.',
  },
}

function escapeXml(str) {
  if (!str) return ''
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

// ── 1. Generate Google-Compliant sitemap.xml ──
function generateSitemap() {
  const routes = getAllRoutes()

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
        http://www.google.com/schemas/sitemap-image/1.1
        http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd">
`

  for (const r of routes) {
    const loc = `${SITE_URL}${r.path === '/' ? '/' : r.path}`
    const img = routeImageMap[r.path]

    xml += `  <url>\n`
    xml += `    <loc>${escapeXml(loc)}</loc>\n`
    xml += `    <lastmod>${TODAY}</lastmod>\n`
    xml += `    <changefreq>${r.changefreq}</changefreq>\n`
    xml += `    <priority>${r.priority}</priority>\n`

    if (img) {
      xml += `    <image:image>\n`
      xml += `      <image:loc>${escapeXml(img.loc)}</image:loc>\n`
      xml += `      <image:title>${escapeXml(img.title)}</image:title>\n`
      xml += `      <image:caption>${escapeXml(img.caption)}</image:caption>\n`
      xml += `    </image:image>\n`
    }

    xml += `  </url>\n`
  }

  xml += `</urlset>\n`

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, 'utf8')
  console.log(`✓ Generated Google-compliant sitemap.xml with ${routes.length} canonical URLs`)
}

// ── 2. Generate robots.txt ──
function generateRobots() {
  const robots = `# CoreForge Robots.txt
# Strict Search Engine Crawling Directives
User-agent: *
Allow: /

# Prevent crawler cycle on build artifacts
Disallow: /node_modules/

# Canonical Sitemaps
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
