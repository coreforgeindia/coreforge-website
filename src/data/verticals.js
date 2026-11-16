// CoreForge Single Source of Truth: Services and RF Products Data
// Strict Black and White Architecture - Anand Technologies RF Benchmark

const SITE_URL =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SITE_URL) ||
  (typeof globalThis !== 'undefined' && globalThis.process?.env?.VITE_SITE_URL) ||
  'https://www.coreforgeindia.com'

export const POSITIONING_LINE =
  '360° Digital Marketing, Brand Strategy & Custom Software Engineering | Precision Technology Solutions'

export const COMPANY_INFO = {
  name: 'CoreForge',
  legalName: 'CoreForge',
  founded: 'October 2024',
  tagline: 'INNOVATE · ENGINEER · DELIVER',
  positioning: POSITIONING_LINE,
  email: 'info@coreforgeindia.com',
  phone: '+919380841227',
  phoneFormatted: '+91 93808 41227',
  address: {
    street: '352, 4th Cross Rd, Rajagopala Nagar',
    locality: 'Peenya',
    city: 'Bengaluru',
    state: 'Karnataka',
    postalCode: '560058',
    country: 'IN',
  },
  url: 'https://www.coreforgeindia.com',
}

// ── 1. SERVICES (Digital Marketing & Branding + Software & App Development) ──
export const serviceCategories = [
  {
    slug: 'digital-marketing-branding',
    name: '360° Digital Marketing & Branding',
    shortName: 'Marketing & Branding',
    headline: 'High-Conversion Brand Strategy & Acquisition Infrastructure',
    description:
      'Data-driven digital marketing, brand positioning frameworks, technical SEO, and multi-channel customer acquisition architectures managed from Bengaluru.',
    image: '/src/assets/services/service-marketing.jpg',
    items: [
      {
        slug: 'brand-strategy-identity',
        name: 'Brand Strategy & Identity',
        shortDescription:
          'Comprehensive brand positioning frameworks, typographic scale design, logo guidelines, and unified visual identity systems.',
        deliverables: [
          'Brand positioning architecture and messaging matrices',
          'Primary, secondary, and mark vector assets in SVG, EPS, and PNG',
          'Complete brand guidelines book: typography, grid, and layout rules',
          'Digital social media templates and physical collateral specifications',
        ],
      },
      {
        slug: 'website-design-development',
        name: 'Website Design & Development',
        shortDescription:
          'Headless, high-performance websites engineered with React, Vite, and modern CSS for sub-second load times and high conversion rates.',
        deliverables: [
          'Custom UX/UI architecture in Figma adhering to modern design tokens',
          'Clean, semantic React/Next.js codebase with 100% responsive layouts',
          'Lighthouse 95+ performance optimization across mobile and desktop',
          'Server-side form capture, CRM integration, and analytics tracking',
        ],
      },
      {
        slug: 'digital-marketing-advertising',
        name: 'Digital Marketing & Advertising',
        shortDescription:
          'Data-driven paid media campaigns across Google Search, Meta Ads, LinkedIn, and programmatic display targeting verified ROI metrics.',
        deliverables: [
          'Full-funnel audience segmentation and search intent mapping',
          'High-converting landing page variants and A/B test setups',
          'Server-side tracking, Conversions API, and clean UTM attribution',
          'Weekly ROAS, CAC, and lead volume performance reporting',
        ],
      },
      {
        slug: 'social-media-management',
        name: 'Social Media Management',
        shortDescription:
          'B2B and B2C brand growth across LinkedIn, Instagram, X, and YouTube with consistent technical storytelling and community moderation.',
        deliverables: [
          'Monthly editorial content calendars aligned with product milestones',
          'Original high-resolution graphics, carousels, and technical write-ups',
          'Active community engagement, inbox management, and comment response',
          'Monthly reach, engagement rate, and inbound profile visit analytics',
        ],
      },
      {
        slug: 'creative-design-graphic-designing',
        name: 'Creative Design & Graphic Designing',
        shortDescription:
          'Precision digital and print graphic design: pitch decks, product datasheets, packaging, corporate reports, and marketing collateral.',
        deliverables: [
          'Investor pitch decks and technical sales presentation decks',
          'Print-ready product brochures, technical datasheets, and user manuals',
          'Exhibition booth graphics, backdrop banners, and physical signage',
          'Vector iconography sets and digital illustration assets',
        ],
      },
      {
        slug: 'video-production-content-creation',
        name: 'Video Production & Content Creation',
        shortDescription:
          'Script-to-screen video production including hardware product demos, software walkthroughs, corporate profiles, and 3D motion graphics.',
        deliverables: [
          'Technical storyboard development, scripting, and concept design',
          '4K studio and on-site hardware footage capture with professional lighting',
          'Motion graphics, title animation, sound mastering, and color grading',
          'Multi-ratio exports optimized for web, YouTube, and mobile feeds',
        ],
      },
      {
        slug: 'search-engine-optimisation',
        name: 'Search Engine Optimisation (SEO)',
        shortDescription:
          'Technical on-page, architecture, and backlink strategies designed to capture high-intent commercial keywords organically.',
        deliverables: [
          'Comprehensive technical site audit: crawl depth, speed, and indexing',
          'Keyword gap analysis against top competitors in your vertical',
          'On-page schema markup (JSON-LD), meta tags, and internal link trees',
          'High-authority outreach and programmatic content cluster creation',
        ],
      },
      {
        slug: 'influencer-pr-marketing',
        name: 'Influencer & PR Marketing',
        shortDescription:
          'Strategic technical influencer partnerships, media releases, and digital PR amplification to establish industry authority.',
        deliverables: [
          'Vetted tech influencer discovery, contract negotiation, and briefing',
          'Press release authoring and digital publication distribution',
          'Media kit preparation and executive thought-leadership articles',
          'Campaign impression, sentiment analysis, and earned media measurement',
        ],
      },
      {
        slug: 'marketing-automation',
        name: 'Marketing Automation',
        shortDescription:
          'Automated nurture workflows, email drip sequences, lead scoring, and CRM pipeline triggers using HubSpot, ActiveCampaign, and custom webhooks.',
        deliverables: [
          'Multi-stage lead nurturing email sequences and trigger logic',
          'CRM pipeline integration with automatic deal stage progression',
          'Abandoned inquiry re-engagement workflows and SMS/WhatsApp webhooks',
          'Comprehensive open rate, click-through, and conversion telemetry',
        ],
      },
      {
        slug: 'business-growth-consulting',
        name: 'Business Growth & Consulting',
        shortDescription:
          'Go-to-market roadmaps, pricing models, CAC optimization, and unit economics validation for tech startups and emerging enterprises.',
        deliverables: [
          'Total addressable market (TAM) sizing and competitor benchmarking',
          'Pricing structure, packaging tiers, and gross margin optimization',
          'Direct B2B outreach playbook and sales enablement collateral',
          'Quarterly growth milestone tracking and strategic KPI reviews',
        ],
      },
    ],
  },
  {
    slug: 'software-app-development',
    name: 'Software & App Development',
    shortName: 'Software Engineering',
    headline: 'Custom Web Platforms, Scalable APIs & Enterprise Systems',
    description:
      'Full-lifecycle software engineering from architecture design and database modeling to cloud deployment, mobile apps, and SLA-backed maintenance.',
    image: '/src/assets/services/service-software.jpg',
    items: [
      {
        slug: 'website-development',
        name: 'Website Development',
        shortDescription:
          'High-speed corporate portals and conversion websites built with React, Vite, and Next.js, optimized for zero layout shift and sub-second TTFB.',
        deliverables: [
          'Modern Component-Driven React/TypeScript Architecture',
          'Headless CMS or Dynamic Database-Backed Content Layer',
          'Complete SEO Meta, Automated Sitemap, and OpenGraph Setup',
          'Deployment to Cloudflare Pages, AWS CloudFront, or Vercel',
        ],
      },
      {
        slug: 'web-application-development',
        name: 'Web Application Development',
        shortDescription:
          'Complex web applications featuring real-time state, role-based access control, interactive dashboards, and scalable database backends.',
        deliverables: [
          'Multi-tenant authorization, authentication, and session control (JWT/OAuth)',
          'High-throughput state management with React, Zustand, and TailwindCSS',
          'Interactive analytics, data grids, and live WebSocket telemetry',
          'Containerized Docker image builds with CI/CD deployment pipelines',
        ],
      },
      {
        slug: 'android-ios-app-development',
        name: 'Android & iOS App Development',
        shortDescription:
          'Cross-platform and native mobile applications with offline storage, background push notifications, hardware Bluetooth/GPS integration, and app store compliance.',
        deliverables: [
          'High-performance React Native / Flutter cross-platform architecture',
          'Native hardware integration: BLE, GPS, camera, and biometric sensors',
          'Offline SQLite/Realm synchronization with cloud backends',
          'Google Play Store and Apple App Store submission management',
        ],
      },
      {
        slug: 'custom-software-development',
        name: 'Custom Software Development',
        shortDescription:
          'Bespoke software engines tailored to proprietary business logic, eliminating generic SaaS limitations and recurring licensing costs.',
        deliverables: [
          'Custom workflow automation engines and business rule processors',
          'Microservices backends built with Python (FastAPI), Node.js, or Go',
          'Strict unit and integration test coverage with automated pipelines',
          '100% intellectual property and complete source code repository handover',
        ],
      },
      {
        slug: 'erp-crm-solutions',
        name: 'ERP & CRM Solutions',
        shortDescription:
          'Enterprise resource planning, inventory control, purchase order tracking, and CRM sales pipelines engineered for manufacturing and logistics.',
        deliverables: [
          'Multi-warehouse stock tracking with barcode scanning integration',
          'Automated invoice generation, tax compliance, and payment tracking',
          'Role-based permissions for managers, operators, and accounting teams',
          'Real-time executive KPI dashboards with exportable financial reports',
        ],
      },
      {
        slug: 'saas-product-development',
        name: 'SaaS Product Development',
        shortDescription:
          'End-to-end multi-tenant SaaS architecture with automated subscription billing, user tenant isolation, analytics, and self-service onboarding.',
        deliverables: [
          'Multi-tenant schema design with strict row-level security isolation',
          'Stripe, Razorpay, or PayPal subscription and metered usage billing',
          'Customer onboarding wizard, team invites, and audit log generation',
          'Infrastructure autoscaling rules with automated database read replicas',
        ],
      },
      {
        slug: 'api-development-integration',
        name: 'API Development & Integration',
        shortDescription:
          'High-throughput REST and GraphQL APIs, third-party payment gateway links, webhook consumers, and legacy enterprise system connectors.',
        deliverables: [
          'OpenAPI 3.0 / Swagger documented endpoints with rate limiting',
          'Third-party connector integration: payment gateways, SMS, ERP, logistics',
          'Idempotent webhook ingestion engines with dead-letter queue recovery',
          'Sub-50ms query response times under high concurrent request loads',
        ],
      },
      {
        slug: 'ai-business-automation',
        name: 'AI & Business Automation',
        shortDescription:
          'Intelligent document extraction, automated customer support assistants, OCR processing, and predictive analytics integrated into existing workflows.',
        deliverables: [
          'Retrieval-Augmented Generation (RAG) knowledge base search systems',
          'Automated PDF, invoice, and bill of lading text and tabular parsing',
          'Predictive sales and inventory reordering forecast models',
          'Private local LLM or cloud API deployment with data privacy compliance',
        ],
      },
      {
        slug: 'database-management-solutions',
        name: 'Database Management Solutions',
        shortDescription:
          'Relational and NoSQL database modeling, query index optimization, zero-downtime migrations, and automated high-availability clustering.',
        deliverables: [
          'Schema normalization and indexing strategies for PostgreSQL & MySQL',
          'Time-series telemetry database setup using TimescaleDB & ClickHouse',
          'Automated daily backup replication with point-in-time recovery verification',
          'Database query optimization reducing CPU load and query execution times',
        ],
      },
      {
        slug: 'cloud-server-hosting-solutions',
        name: 'Cloud, Server & Hosting Solutions',
        shortDescription:
          'Cloud architecture sizing, Kubernetes orchestration, automated Docker pipelines, and cost-optimized infrastructure on AWS, GCP, and Cloudflare.',
        deliverables: [
          'Infrastructure as Code (Terraform / CloudFormation) provisioning',
          'Kubernetes / ECS cluster setup with zero-downtime rolling deploys',
          'SSL/TLS certificate automation, DDoS shielding, and WAF setup',
          'Cloud infrastructure cost audits reducing unnecessary monthly spend',
        ],
      },
      {
        slug: 'cybersecurity-it-solutions',
        name: 'Cybersecurity & IT Solutions',
        shortDescription:
          'Application security testing, penetration test reports, vulnerability remediation, SSL hardening, and OWASP Top 10 compliance audits.',
        deliverables: [
          'Full-stack static and dynamic application vulnerability assessment',
          'API authentication and authorization privilege escalation audits',
          'Server configuration hardening and firewall port restriction',
          'Actionable vulnerability remediation report with engineering fixes',
        ],
      },
      {
        slug: 'software-maintenance-technical-support',
        name: 'Software Maintenance & Technical Support',
        shortDescription:
          'SLA-guaranteed uptime monitoring, patch deployment, dependency upgrades, bug fixes, and continuous technical enhancements.',
        deliverables: [
          '24/7 automated uptime and latency monitoring with incident alerting',
          'Monthly security patching and third-party library version upgrades',
          'Guaranteed bug resolution response times backed by structured SLAs',
          'Dedicated engineering hours for ongoing feature additions and tweaks',
        ],
      },
    ],
  },
]

// ── 2. PRODUCTS (Antenna & RF Communication Hardware - Anand Tech Reference) ──
export const productCategories = [
  {
    slug: 'antennas',
    name: 'Antenna Systems',
    headline: 'Industrial VHF, UHF, Cellular, GPS & Broadband Antennas',
    description:
      'High-reliability antenna systems engineered for harsh environments, base station communications, vehicle tracking, marine telemetry, and IoT wireless networks.',
    items: [
      {
        slug: 'vhf-uhf-antennas',
        name: 'VHF / UHF Base Station & Mobile Antennas',
        group: 'Antennas',
        image: '/src/assets/products/antenna-vhf-uhf.jpg',
        shortDescription:
          'Heavy-duty collinear omnidirectional and directional Yagi antennas covering VHF (136-174 MHz) and UHF (380-470 MHz) commercial and public safety bands.',
        specs: {
          'Frequency Range': '136 - 174 MHz (VHF) / 380 - 470 MHz (UHF)',
          'Nominal Gain': '3.5 dBi / 5.5 dBi / 8.5 dBi options',
          'VSWR': '< 1.5:1 across designated operating band',
          'Impedance': '50 Ohms matched',
          'Polarization': 'Vertical linear',
          'Connector Type': 'N-Type Female / UHF (SO-239)',
          'Power Handling': '150W continuous (up to 300W peak)',
          'Material & Finish': 'Anodized high-grade aluminum, fiberglass radome',
          'Mounting Hardware': 'Heavy-duty galvanized stainless steel mast clamps',
          'Wind Survival': 'Up to 200 km/h with 0.5 inch radial ice',
        },
      },
      {
        slug: 'gsm-lte-antennas',
        name: 'GSM / LTE / 4G / 5G Cellular Antennas',
        group: 'Antennas',
        image: '/src/assets/products/antenna-gsm-lte.jpg',
        shortDescription:
          'Broadband cellular antennas in magnetic mount, rubber duck, and low-profile puck configurations supporting GSM 900/1800, 3G, 4G LTE, and sub-6 GHz 5G.',
        specs: {
          'Frequency Range': '698 - 960 MHz & 1710 - 2700 MHz (Broadband)',
          'Nominal Gain': '3.0 dBi (magnetic) / up to 12.0 dBi (directional panel)',
          'VSWR': '< 1.5:1 (typical)',
          'Impedance': '50 Ohms',
          'Polarization': 'Vertical linear',
          'Connector Type': 'SMA-Male / N-Male / FME options',
          'Cable Length': 'Standard 2m or 3m RG-58 / LMR-200 low-loss cable',
          'Base Type': 'Heavy-duty rare earth magnetic base or screw-through panel',
          'Operating Temp': '-40°C to +85°C',
        },
      },
      {
        slug: 'wifi-wlan-antennas',
        name: 'Wi-Fi / WLAN Dual-Band Antennas',
        group: 'Antennas',
        image: '/src/assets/products/antenna-wifi.jpg',
        shortDescription:
          'High-gain dual-band 2.4 GHz and 5.8 GHz Wi-Fi antennas in omnidirectional rubber duck, ceiling dome, directional panel, and cone configurations.',
        specs: {
          'Frequency Range': '2400 - 2500 MHz & 5150 - 5850 MHz',
          'Nominal Gain': '2.0 dBi, 5.0 dBi, 7.0 dBi, 10.0 dBi options',
          'VSWR': '< 1.5:1',
          'Impedance': '50 Ohms',
          'Polarization': 'Vertical / Dual polarization available',
          'Connector Type': 'RP-SMA Male / N-Male / SMA',
          'Housing Material': 'UV-resistant ABS radome (matte black / white)',
          'Application': 'Industrial IoT routers, base stations, outdoor bridges',
        },
      },
      {
        slug: 'gps-gnss-antennas',
        name: 'GPS / GNSS Active & Passive Antennas',
        group: 'Antennas',
        image: '/src/assets/products/antenna-gps-gnss.jpg',
        shortDescription:
          'Precision active GPS L1, GLONASS, and Galileo reception antennas with integrated low-noise amplifier (LNA) for vehicle tracking and marine navigation.',
        specs: {
          'Center Frequency': '1575.42 MHz ± 1.023 MHz (GPS L1) / 1602 MHz (GLONASS)',
          'LNA Gain': '28 dB ± 2 dB integrated active amplification',
          'Noise Figure': '< 1.5 dB',
          'Operating Voltage': '2.7V to 5.0V DC phantom power via coax',
          'VSWR': '< 1.5:1',
          'Connector Type': 'SMA Male / MCX / MMCX / Fakra',
          'Ingress Protection': 'IP67 waterproof sealed aerodynamic puck',
          'Mounting': 'Internal magnet or permanent screw-bolt mount',
        },
      },
      {
        slug: 'lpa-wideband-antennas',
        name: 'Log-Periodic & Wideband Antennas',
        group: 'Antennas',
        image: '/src/assets/products/antenna-vhf-uhf.jpg',
        shortDescription:
          'Broadband directional log-periodic dipole arrays (LPA) covering wide spectrums for EMC testing, surveillance, and multi-band telemetry.',
        specs: {
          'Frequency Range': '400 MHz to 6.0 GHz (Continuous broadband)',
          'Nominal Gain': '8.0 dBi to 11.0 dBi directional gain',
          'Front-to-Back Ratio': '> 20 dB',
          'VSWR': '< 1.8:1 typical across entire band',
          'Impedance': '50 Ohms',
          'Connector Type': 'N-Type Female precision coax',
          'Power Rating': '100W continuous CW',
          'Construction': 'Laser-cut corrosion-resistant aluminum alloy boom',
        },
      },
      {
        slug: 'rfid-antennas',
        name: 'UHF RFID Reader Antennas',
        group: 'Antennas',
        image: '/src/assets/products/antenna-wifi.jpg',
        shortDescription:
          'Circularly polarized UHF RFID reader panel antennas for automated warehouse inventory, asset tracking portals, and logistics gates.',
        specs: {
          'Frequency Range': '865 - 868 MHz (India/EU) / 902 - 928 MHz (US FCC)',
          'Nominal Gain': '6.0 to 9.0 dBic (Circular polarization)',
          'Axial Ratio': '< 2.0 dB at boresight',
          'Beamwidth (3dB)': '68° Horizontal x 68° Vertical',
          'Connector Type': 'TNC Female / SMA Female',
          'Radome Material': 'Heavy-duty impact-resistant polycarbonate',
          'Mounting': 'Standard VESA 75/100 and pole clamp brackets',
        },
      },
    ],
  },
  {
    slug: 'rf-passive-components',
    name: 'RF Passive Components',
    headline: 'High-Q Cavity Duplexers, Couplers, Splitters & Attenuators',
    description:
      'Precision machined RF passive hardware delivering ultra-low insertion loss, high power handling, and sharp out-of-band rejection.',
    items: [
      {
        slug: 'rf-cavity-duplexers',
        name: 'High-Q RF Cavity Duplexers',
        group: 'RF Passives',
        image: '/src/assets/products/rf-duplexer.jpg',
        shortDescription:
          'Precision CNC-machined cavity duplexers for VHF and UHF repeater base stations providing superior TX/RX frequency isolation.',
        specs: {
          'Frequency Range': '136 - 174 MHz (VHF) / 380 - 470 MHz (UHF)',
          'Channel Spacing': 'Min 4.5 MHz (VHF) / Min 5.0 MHz (UHF)',
          'Isolation (TX/RX)': '> 80 dB minimum (up to 90 dB)',
          'Insertion Loss': '< 0.8 dB typical',
          'Power Handling': '50W / 100W / 250W continuous options',
          'Impedance': '50 Ohms with VSWR < 1.3:1',
          'Connectors': 'N-Type Female with silver-plated contact pins',
          'Tuning Method': 'Precision brass adjustment rods with locknuts',
        },
      },
      {
        slug: 'rf-directional-couplers',
        name: 'Directional Couplers & Power Taps',
        group: 'RF Passives',
        image: '/src/assets/products/rf-duplexer.jpg',
        shortDescription:
          'Low PIM broad-band directional couplers for signal monitoring, transmitter power reflection measurement, and distributed antenna systems.',
        specs: {
          'Frequency Range': '698 - 2700 MHz (Broadband)',
          'Coupling Values': '6 dB, 10 dB, 15 dB, 20 dB, 30 dB',
          'Directivity': '> 20 dB',
          'Insertion Loss': '< 0.25 dB (for 20dB coupler)',
          'Power Rating': '200W average, 1 kW peak',
          'Connector Type': 'N-Type Female / 4.3-10 DIN options',
          'Enclosure': 'Tri-metal plated brass / aluminum alloy',
        },
      },
      {
        slug: 'rf-power-splitters',
        name: 'Power Splitters & Combiners',
        group: 'RF Passives',
        image: '/src/assets/products/rf-duplexer.jpg',
        shortDescription:
          '2-Way, 3-Way, and 4-Way reactive power dividers for multi-antenna transmitter feeds and cellular coverage distribution.',
        specs: {
          'Frequency Range': '698 - 3800 MHz (Covers 4G & 5G bands)',
          'Split Configuration': '2-Way / 3-Way / 4-Way symmetrical',
          'Insertion Loss': '< 0.15 dB above theoretical split',
          'Port Impedance': '50 Ohms nominal',
          'Power Rating': '300W continuous average power',
          'VSWR': '< 1.25:1 all ports',
          'Connectors': 'N-Type Female / 4.3-10 Female',
        },
      },
      {
        slug: 'rf-coaxial-attenuators',
        name: 'RF Coaxial Fixed Attenuators',
        group: 'RF Passives',
        image: '/src/assets/products/rf-duplexer.jpg',
        shortDescription:
          'Precision continuous power RF attenuators engineered for test equipment protection, power leveling, and impedance matching.',
        specs: {
          'Frequency Range': 'DC to 3.0 GHz / DC to 6.0 GHz',
          'Attenuation Values': '3 dB, 6 dB, 10 dB, 20 dB, 30 dB, 40 dB',
          'Accuracy': '± 0.3 dB to ± 0.6 dB',
          'Power Handling': '5W, 10W, 25W, 50W, 100W CW options',
          'Impedance': '50 Ohms with VSWR < 1.2:1',
          'Heat Sink': 'Black anodized aluminum radial cooling fins',
          'Connectors': 'SMA Male to Female / N-Type Male to Female',
        },
      },
      {
        slug: 'rf-bandpass-filters',
        name: 'Cavity Band Pass Filters',
        group: 'RF Passives',
        image: '/src/assets/products/rf-duplexer.jpg',
        shortDescription:
          'Narrowband and wideband cavity filters providing steep skirt selectivity and deep rejection of out-of-band interference.',
        specs: {
          'Center Frequencies': 'VHF, UHF, 868 MHz, 915 MHz, 2.4 GHz tuned',
          'Rejection Level': '> 60 dB at ± 10% from center frequency',
          'Passband Loss': '< 1.0 dB across designated 3dB bandwidth',
          'Input Power': 'Up to 100W CW',
          'VSWR': '< 1.3:1 in passband',
          'Connectors': 'N-Type Female precision coax',
        },
      },
    ],
  },
  {
    slug: 'rf-cables-connectivity',
    name: 'RF Cables & Connectivity',
    headline: 'Low-Loss Coaxial Cable Assemblies & Precision Connectors',
    description:
      'Mil-spec and industrial grade low-loss RF coaxial cable assemblies, phase-stable jumper cables, and adapters tested 100% on Vector Network Analyzers.',
    items: [
      {
        slug: 'rf-coaxial-cable-assemblies',
        name: 'Low-Loss RF Coaxial Cable Assemblies',
        group: 'Connectivity',
        image: '/src/assets/products/rf-cables.jpg',
        shortDescription:
          'Custom length coaxial cables (LMR-400, LMR-200, RG-58, RG-174, RG-213) terminated with precision gold and silver plated connectors.',
        specs: {
          'Cable Types': 'LMR-400 (ultra-low loss), LMR-200, RG-58 C/U, RG-174, RG-213',
          'Attenuation (LMR-400)': '< 0.22 dB/meter at 2.4 GHz; < 0.13 dB/meter at 900 MHz',
          'Connector Standards': 'SMA (Male/Female/RP), N-Type (Male/Female), BNC, TNC, MCX',
          'Testing': '100% VNA return loss and insertion loss certified',
          'Jacket Material': 'UV-resistant weatherproof non-halogenated PE jacket',
          'Customization': 'Fabricated to exact millimetre lengths with adhesive heat-shrink',
        },
      },
      {
        slug: 'rf-lightning-surge-arrestors',
        name: 'RF Lightning & Surge Protectors',
        group: 'Connectivity',
        image: '/src/assets/products/rf-cables.jpg',
        shortDescription:
          'Gas discharge tube coaxial lightning protectors shielding base stations and transceivers against electrical surges and direct lightning strikes.',
        specs: {
          'Frequency Range': 'DC to 3.0 GHz / DC to 6.0 GHz',
          'Surge Discharge Current': '20 kA (8/20 µs waveform)',
          'Sparkover Voltage': '230V ± 20% DC',
          'Insertion Loss': '< 0.15 dB',
          'VSWR': '< 1.2:1',
          'Connectors': 'N-Female to N-Female / N-Male to N-Female bulkheads',
          'Weatherproofing': 'IP67 waterproof silicone O-ring sealing',
        },
      },
    ],
  },
]

// ── HELPERS ──
export function getAllServices() {
  return serviceCategories
}

export function getAllServiceItems() {
  const items = []
  for (const cat of serviceCategories) {
    for (const item of cat.items) {
      items.push({ ...item, categorySlug: cat.slug, categoryName: cat.name })
    }
  }
  return items
}

export function getServiceBySlug(slug) {
  for (const cat of serviceCategories) {
    if (cat.slug === slug) return cat
    const item = cat.items.find((i) => i.slug === slug)
    if (item) return { ...item, categorySlug: cat.slug, categoryName: cat.name }
  }
  return null
}

export function getAllProducts() {
  return productCategories
}

export function getAllProductItems() {
  const items = []
  for (const cat of productCategories) {
    for (const item of cat.items) {
      items.push({ ...item, categorySlug: cat.slug, categoryName: cat.name })
    }
  }
  return items
}

export function getProductBySlug(slug) {
  for (const cat of productCategories) {
    if (cat.slug === slug) return cat
    const item = cat.items.find((i) => i.slug === slug)
    if (item) return { ...item, categorySlug: cat.slug, categoryName: cat.name }
  }
  return null
}

export function canonicalUrl(path) {
  const base = SITE_URL.replace(/\/+$/, '')
  const cleanPath = path === '/' ? '' : path.replace(/\/+$/, '')
  return `${base}${cleanPath}`
}

export function getAllRoutes() {
  const routes = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/services', priority: '0.95', changefreq: 'weekly' },
    { path: '/products', priority: '0.95', changefreq: 'weekly' },
    { path: '/about', priority: '0.8', changefreq: 'monthly' },
    { path: '/faqs', priority: '0.7', changefreq: 'monthly' },
    { path: '/blog', priority: '0.8', changefreq: 'weekly' },
    { path: '/contact', priority: '0.9', changefreq: 'monthly' },
    { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { path: '/terms', priority: '0.3', changefreq: 'yearly' },
  ]

  // Add individual services
  for (const cat of serviceCategories) {
    routes.push({ path: `/services/${cat.slug}`, priority: '0.9', changefreq: 'monthly' })
    for (const item of cat.items) {
      routes.push({ path: `/services/${item.slug}`, priority: '0.8', changefreq: 'monthly' })
    }
  }

  // Add individual products
  for (const cat of productCategories) {
    routes.push({ path: `/products/${cat.slug}`, priority: '0.9', changefreq: 'monthly' })
    for (const item of cat.items) {
      routes.push({ path: `/products/${item.slug}`, priority: '0.8', changefreq: 'monthly' })
    }
  }

  // Add blog article routes
  const blogSlugs = [
    'modern-search-seo-aeo-geo-playbook',
    'custom-web-applications-vs-off-the-shelf-saas',
    'high-converting-brand-architecture-blueprint',
    'google-ads-vs-meta-ads-allocation-guide',
    'sub-second-web-performance-core-web-vitals',
    'mobile-app-architecture-react-native-vs-native',
    'cavity-duplexer-isolation-vna-calibration-standards',
    'vhf-uhf-base-station-antennas-selection-guide',
    'industrial-iot-antenna-selection-gsm-gnss-integration',
    'conversion-rate-optimization-cognitive-engineering',
  ]
  for (const slug of blogSlugs) {
    routes.push({ path: `/blog/${slug}`, priority: '0.75', changefreq: 'monthly' })
  }

  return routes
}
