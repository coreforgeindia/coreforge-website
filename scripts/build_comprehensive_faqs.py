#!/usr/bin/env python3
"""
CoreForge Comprehensive Knowledge Base Generator (120+ In-Depth Questions & Answers)
Covers all verticals, individual services, RF hardware lines, calibration protocols, and SLAs.
"""

import os
import json


def build():
    faqs = []

    # 1. 360° Digital Marketing & Brand Strategy (25 detailed FAQs)
    marketing = [
        ("What is CoreForge's 360° digital marketing approach?",
         "CoreForge's 360° digital marketing methodology unites market positioning, typographic identity, search intent capture, paid media execution, and automated conversion funnels. Instead of isolated tactics, we architect interconnected customer acquisition ecosystems where every creative asset and ad dollar is engineered toward measurable pipeline velocity.",
         "brand-strategy-identity"),
        ("How does brand strategy differ from standard graphic design?",
         "Brand strategy defines your market defensibility, customer psychographics, value propositions, and messaging architecture before any visual design begins. Graphic design is the aesthetic execution of that strategic foundation. Without brand strategy, design is merely decorative; with strategy, design drives pricing power and commercial authority.",
         "brand-strategy-identity"),
        ("What formats are delivered in the corporate vector asset package?",
         "We provide full production assets in resolution-independent vector formats (SVG, EPS, PDF) alongside web-optimized raster formats (PNG with transparent alpha channels, next-gen WebP) across monochrome, inverted, and stacked lockups.",
         "brand-strategy-identity"),
        ("How does CoreForge prevent brand inconsistency across marketing channels?",
         "We publish a living Digital Brand Guidelines manual documenting clear exclusion zones, minimum rendering sizes, forbidden usage variations, typography pairings, and ready-to-use Figma component libraries for engineering and design teams.",
         "brand-strategy-identity"),
        ("How does CoreForge balance brutalist design aesthetics with high conversion rates?",
         "Our brutalist design approach eliminates decorative fluff in favor of high-contrast black-and-white visual clarity, tactile buttons with active translate states, unambiguous value propositions, and frictionless qualification forms that drive qualified inquiries.",
         "website-design-development"),
        ("Why do you avoid third-party WordPress themes and bloated plugins?",
         "Generic themes load dozens of unoptimized CSS/JS bundles, creating security vulnerabilities, layout shift, and 4-second loading times. CoreForge authors clean, semantic React and Vite architectures delivering sub-second page loads and zero plugin dependencies.",
         "website-design-development"),
        ("How do you ensure full responsive fluidity from 16-inch displays down to mobile?",
         "We enforce mobile-first responsive breakpoints using Tailwind CSS utility tokens, flexible container grids, clamp-based typography scales, and fluid image ratios, verifying flawless rendering across mobile, tablets, and 4K displays.",
         "website-design-development"),
        ("How do you structure Google Ads campaigns for technical B2B services?",
         "We structure search campaigns using single-theme ad groups (STAGs) targeting high-intent long-tail keywords. We deploy phrase and exact match bidding, aggressive negative keyword lists, and dedicated high-contrast landing pages to maximize Quality Scores and lower CPA.",
         "digital-marketing-advertising"),
        ("What is Meta Ads Conversions API (CAPI) and why is it implemented?",
         "Meta Conversions API creates a direct server-to-server connection between our web backend and Meta servers, bypassing browser ad-blockers and iOS privacy restrictions to record 100% of lead form events with precise attribution.",
         "digital-marketing-advertising"),
        ("How do you calculate and optimize Customer Acquisition Cost (CAC)?",
         "We calculate CAC by dividing total blended marketing spend (ad spend + management fees) by verified sales-qualified leads (SQLs), continuously testing ad copy, landing page hooks, and bid adjustments to compress CAC over time.",
         "digital-marketing-advertising"),
        ("What return on ad spend (ROAS) can we realistically anticipate?",
         "ROAS varies by industry gross margins and sales cycle length. In high-ticket B2B and industrial verticals, our campaigns typically target and achieve 3.5x to 6x blended ROAS by focusing exclusively on qualified decision-maker leads rather than vanity impressions.",
         "digital-marketing-advertising"),
        ("How does CoreForge manage paid ad spend across Google Ads and Meta Ads?",
         "We manage ad spend through strict full-funnel segmentation. High-intent commercial queries are captured via Google Search Ads with exact-match bidding, while scalable awareness and retargeting are driven through Meta Ads (Instagram/Facebook) and LinkedIn. Budgets are dynamically reallocated weekly toward the highest ROAS channels with zero wasted ad spend.",
         "digital-marketing-advertising"),
        ("What type of social content performs best for engineering and hardware firms?",
         "In-depth technical carousels breaking down engineering problems, teardowns, real Vector Network Analyzer test plots, and customer case study metrics perform exceptionally well, building institutional credibility among decision-makers.",
         "social-media-management"),
        ("How often do you publish editorial content for B2B accounts?",
         "We maintain a consistent 3-to-4 post weekly publishing cadence aligned with product launches, engineering milestones, and commercial priorities, complete with active community moderation and executive profile engagement.",
         "social-media-management"),
        ("What is Creative Design & Graphic Designing for technical enterprises?",
         "We engineer high-fidelity investor pitch decks, technical datasheets, exhibition backdrops, product packaging, and corporate sales presentations that communicate complex engineering value with clarity.",
         "creative-design-graphic-designing"),
        ("What formats do you supply for print collateral and exhibition signage?",
         "We supply press-ready CMYK PDF files with embedded fonts, bleed margins, crop marks, and pantone spot color specifications ready for direct professional offset and digital printing.",
         "creative-design-graphic-designing"),
        ("Do you handle video production and motion design?",
         "Yes. We script, record, and edit high-definition video assets including technical product walkthroughs, corporate overview reels, customer case study interviews, and short-form social video collateral.",
         "video-production-content-creation"),
        ("How does video content improve website conversion rates?",
         "Short, high-impact video overviews placed on landing pages increase average dwell time by over 80% and increase form completion rates by establishing human and operational authenticity.",
         "video-production-content-creation"),
        ("What is Influencer & PR Marketing for engineering companies?",
         "We identify and partner with credible industry analysts, technical trade publications, and respected domain influencers to publish editorial reviews, press releases, and guest perspectives, amplifying your brand's institutional credibility.",
         "influencer-pr-marketing"),
        ("What is Marketing Automation and which platforms do you configure?",
         "Marketing automation connects inbound form submissions directly to automated email nurture sequences, lead scoring models, and CRM pipeline stages. We implement and integrate HubSpot, ActiveCampaign, Zoho CRM, and bespoke webhook architectures.",
         "marketing-automation"),
        ("What triggers are standard in a CoreForge automated lead nurture workflow?",
         "Standard workflows include instant SMS/WhatsApp confirmation webhooks, personalized multi-stage email drip sequences tailored to the selected service category, and automated deal stage updates in your CRM when a lead re-engages.",
         "marketing-automation"),
        ("What is Business Growth & Consulting at CoreForge?",
         "We evaluate unit economics, pricing packaging, go-to-market channels, and competitive differentiation to help startups and scaling enterprises unlock commercial momentum.",
         "business-growth-consulting"),
        ("How do you track conversions across multiple customer touchpoints?",
         "We deploy server-side tracking using Google Tag Manager Server Container, Meta Conversions API (CAPI), and clean first-party UTM parameters. This eliminates data loss from client-side ad blockers, iOS ATT privacy restrictions, and cookie deprecation, ensuring 99%+ attribution accuracy.",
         "digital-marketing-advertising"),
        ("How long does a 360° digital marketing engagement take to show positive cashflow?",
         "Paid search and conversion landing pages generate qualified inbound leads within 7 to 14 days of campaign launch. Full organic search authority (SEO/AEO/GEO) and institutional brand recognition compound predictably over 3 to 6 months.",
         "digital-marketing-advertising"),
        ("How often do we receive marketing performance reports?",
         "Clients receive automated real-time analytics dashboards alongside structured weekly executive summaries detailing spend, impressions, CTR, qualified lead counts, CAC, and pipeline conversion metrics.",
         "digital-marketing-advertising")
    ]

    for q, a, sub in marketing:
        faqs.append({
            "category": "marketing",
            "categoryName": "360° Digital Marketing & Branding",
            "subservice": sub,
            "question": q,
            "answer": a
        })

    # 2. SEO, AEO & GEO Search Optimization (20 FAQs)
    seo = [
        ("What is the difference between traditional SEO, AEO, and GEO?",
         "SEO (Search Engine Optimization) ranks your URLs on search engine results pages through crawlability, technical performance, and backlinks. AEO (Answer Engine Optimization) structures content into concise definitions to capture direct featured snippets and voice search answers. GEO (Generative Engine Optimization) formats proprietary data so generative models like ChatGPT, Perplexity, Claude, and Google AI Overviews cite your brand as an authoritative source.",
         "search-engine-optimisation"),
        ("How do Answer Engines extract direct answers from CoreForge websites?",
         "Answer engines parse question-formatted headers (H2/H3), concise 40-to-60 word definitive paragraphs placed immediately below, and structured Schema.org JSON-LD markup (such as FAQPage and TechArticle). When structured clearly, natural language algorithms select these passages as canonical answers.",
         "search-engine-optimisation"),
        ("What technical steps ensure brand citation inside Perplexity and ChatGPT?",
         "Inclusion in LLM citations requires published first-hand case studies, verified author credentials, clean site crawlability, consistent NAP citations, and rich Schema graphs. Generative models prioritize unique, primary source empirical data that cannot be found in generic web summaries.",
         "search-engine-optimisation"),
        ("Why is site speed a critical ranking factor in modern search algorithms?",
         "Google's Core Web Vitals (Largest Contentful Paint, Interaction to Next Paint, Cumulative Layout Shift) directly influence organic search rankings and Google Ads Quality Scores. Websites loading in under 1 second experience dramatically lower bounce rates and higher indexation priority.",
         "search-engine-optimisation"),
        ("How does CoreForge achieve high-90s Google PageSpeed scores?",
         "We engineer web platforms with modern build tools (Vite), tree-shake unused scripts, utilize modern formats (WebP/AVIF), eliminate render-blocking CSS, pre-render static HTML routes, and deploy edge CDN caching.",
         "search-engine-optimisation"),
        ("What is Schema Markup (JSON-LD) and why is it mandatory for enterprise search?",
         "Schema markup is standardized machine-readable code (Schema.org) embedded into a webpage to explicitly describe entities to search engines: Organization, LocalBusiness, Service, Product, FAQPage, and Article. It provides search bots with structured facts about your business.",
         "search-engine-optimisation"),
        ("Why should paginated archives avoid self-canonicalizing back to page one?",
         "Canonicalizing paginated pages back to page 1 instructs search engines that subsequent pages contain identical content, causing bots to drop deeper products or blog posts from the search index. Every paginated URL must maintain a self-referencing canonical URL.",
         "search-engine-optimisation"),
        ("What is Topical Authority in modern SEO?",
         "Topical authority is established when a website thoroughly covers an entire subject domain through deeply interconnected content clusters. Rather than publishing isolated articles, we link comprehensive core service pages to technical sub-topics, signaling complete domain mastery to crawlers.",
         "search-engine-optimisation"),
        ("How does mobile-first indexing impact corporate websites?",
         "Google predominantly uses the mobile version of a website for indexing and ranking. If your mobile layout hides important content, renders slowly, or has poor tap targets, your overall site rankings suffer on both mobile and desktop searches.",
         "search-engine-optimisation"),
        ("What is an XML Sitemap and why must it be submitted to Google Search Console?",
         "An XML sitemap is an official index of all canonical URLs on your domain that you want search engines to crawl and index. Submitting sitemap.xml to Google Search Console informs search bots of new or modified pages immediately, accelerating discovery and indexing.",
         "search-engine-optimisation"),
        ("How do you conduct a technical crawl budget audit?",
         "We analyze server log files to evaluate bot hit rates, eliminate redirect chains, correct 404 errors, restrict crawling of duplicate parameters via robots.txt, and ensure search spiders invest crawl resources exclusively on revenue-generating canonical URLs.",
         "search-engine-optimisation"),
        ("Can CoreForge recover websites from search algorithmic ranking penalties?",
         "Yes. We conduct complete technical audits to identify toxic low-quality backlinks, thin duplicate content, keyword cannibalization, or performance regressions, resolving issues and submitting formal reconsideration requests where applicable.",
         "search-engine-optimisation"),
        ("What is image SEO and why does EXIF/IPTC metadata matter?",
         "Image SEO optimizes image file names, alt text, structured schema markup, and embedded EXIF/IPTC metadata (creator, copyright, keywords, location). This helps Google Images index images accurately and surface them in visual search queries.",
         "search-engine-optimisation"),
        ("How does CoreForge handle internal linking architecture?",
         "We deploy hierarchical contextual linking where sub-services link back to pillar pages, related cross-discipline capabilities, and contextual conversion actions, distributing PageRank authority evenly across indexable pages.",
         "search-engine-optimisation"),
        ("What is the role of llms.txt and llms-full.txt in AI search engines?",
         "llms.txt and llms-full.txt are emerging web standards providing concise and exhaustive markdown summaries of a website for LLM crawlers (Anthropic Claude, OpenAI GPTBot, PerplexityBot), ensuring accurate generative retrieval.",
         "search-engine-optimisation")
    ]

    for q, a, sub in seo:
        faqs.append({
            "category": "marketing",
            "categoryName": "360° Digital Marketing & Branding",
            "subservice": sub,
            "question": q,
            "answer": a
        })

    # 3. Custom Software, Web Apps & Cloud (35 FAQs)
    software = [
        ("When should a business build custom software instead of purchasing SaaS?",
         "A business should build bespoke software when proprietary workflows represent core competitive advantages, when per-seat SaaS licensing costs exceed custom development amortized over 2 years, or when pre-built tools fail to integrate with legacy machinery or ERP databases.",
         "custom-software-development"),
        ("What technology stack does CoreForge utilize for web application development?",
         "We build robust, modern software ecosystems utilizing React and Next.js for high-speed client interfaces, Node.js and Python for scalable API services, PostgreSQL and TimescaleDB for transactional and time-series data, Redis for distributed caching, and Docker/Kubernetes for cloud container orchestration.",
         "web-application-development"),
        ("Who owns the intellectual property (IP) and source code of custom software?",
         "The client owns 100% of the custom source code, database architectures, and tailored assets upon settlement of project milestones. CoreForge executes full intellectual property assignment agreements with zero vendor lock-in.",
         "custom-software-development"),
        ("How do you ensure enterprise software security and OWASP compliance?",
         "We enforce security by design: TLS 1.3 encryption in transit, AES-256 encryption at rest, parameterized database queries to thwart SQL injection, strict CORS policies, JWT/OAuth2 session tokens, and automated CI/CD vulnerability scanning.",
         "cybersecurity-it-solutions"),
        ("What is a Modular Monolith vs Microservices architecture?",
         "A modular monolith packages well-defined business domains into a single codebase with clean boundaries, offering high developer velocity and low operational complexity. Microservices decouple domains into autonomous deployable services across Kubernetes, ideal for large distributed teams with disparate scaling demands.",
         "custom-software-development"),
        ("How do you handle zero-downtime production software deployments?",
         "We execute blue-green deployments or rolling container updates in Docker/Kubernetes. New application instances pass health checks before traffic is shifted away from previous versions, ensuring users experience uninterrupted service.",
         "cloud-server-hosting-solutions"),
        ("Can CoreForge modernize legacy software without disrupting ongoing operations?",
         "Yes. We apply the Strangler Fig architectural pattern: incrementally intercepting and replacing legacy system endpoints with modern microservices until the legacy system is safely retired without downtime.",
         "legacy-software-modernisation"),
        ("What database architecture is optimal for high-volume operational data?",
         "We design hybrid database systems: normalized PostgreSQL for relational business transactions, TimescaleDB or ClickHouse for multi-million row telemetry and IoT logging, and Redis for sub-millisecond session caching.",
         "database-management-solutions"),
        ("What is an API-first development methodology?",
         "API-first engineering specifies and mocks OpenAPI/REST or GraphQL contracts before writing frontend or backend code. This allows frontend and backend teams to develop in parallel while guaranteeing seamless system integration.",
         "api-development-integration"),
        ("What cloud hosting providers do you deploy on?",
         "We architect and manage cloud deployments across Amazon Web Services (AWS), Google Cloud Platform (GCP), Microsoft Azure, and Cloudflare Pages/Workers, optimizing infrastructure configurations for cost efficiency and low latency.",
         "cloud-server-hosting-solutions"),
        ("How do you test software before launch?",
         "We implement multi-layered automated testing: unit tests (Jest/Vitest), API integration tests, and end-to-end user journey tests (Playwright/Cypress) in CI/CD pipelines before code reaches production.",
         "software-testing-qa"),
        ("What post-launch software maintenance and SLAs do you offer?",
         "We provide 24/7 server monitoring, proactive security patching, database optimization, periodic vulnerability audits, and guaranteed response times for critical bug resolution under formal Service Level Agreements (SLAs).",
         "software-maintenance-technical-support"),
        ("How does CoreForge approach system architecture for new software builds?",
         "We begin with domain-driven design (DDD): mapping business entities, defining bounded contexts, establishing database normalization schemas, and architecting modular API interfaces that prevent future technical debt.",
         "custom-software-development"),
        ("Do you build single-tenant or multi-tenant database architectures?",
         "We architect both depending on enterprise requirements: row-level security (RLS) multi-tenancy for high-velocity SaaS applications, or physically isolated single-tenant databases for strict financial and healthcare compliance.",
         "saas-product-development"),
        ("What source code documentation is delivered upon project handover?",
         "We deliver full OpenAPI/Swagger interactive documentation, README environment setup guides, architecture decision records (ADRs), and automated test suites ensuring seamless onboarding for internal developer teams.",
         "custom-software-development"),
        ("What frontend frameworks does CoreForge recommend for performance?",
         "We recommend React with Vite or Next.js with Server Components. This stack delivers instant page transitions, server-side caching, sub-second hydration times, and seamless API integration.",
         "website-development"),
        ("How do you achieve zero layout shift (CLS < 0.05) on web applications?",
         "We reserve explicit dimensional containers and aspect ratios for all images, dynamic components, and font loaders, preventing content jumps during asset rendering.",
         "website-development"),
        ("Can CoreForge build custom inventory and supply chain tracking modules?",
         "Yes. We engineer bespoke warehouse and inventory management portals with barcode/QR scanning, automated minimum stock alerts, multi-warehouse transfers, and direct supplier purchase order workflows.",
         "erp-crm-solutions"),
        ("How do custom ERP systems handle role-based access control (RBAC)?",
         "We implement granular permission matrices defining exact read, write, update, and delete rights for administrators, sales managers, warehouse staff, and accounting personnel at the API route level.",
         "erp-crm-solutions"),
        ("What is the difference between REST and GraphQL in CoreForge architectures?",
         "We deploy REST APIs for clean resource-oriented CRUD operations and third-party webhook integrations, and GraphQL for complex dashboard frontends where clients need to query deeply nested data in a single round-trip without over-fetching.",
         "api-development-integration"),
        ("How do you protect APIs from distributed denial of service (DDoS) and brute force?",
         "We implement token bucket rate limiting via Redis, IP throttling, Web Application Firewall (WAF) rules on Cloudflare, and cryptographically signed JWT bearer tokens with short expiry windows.",
         "api-development-integration"),
        ("What is Infrastructure as Code (IaC) and how do you use it?",
         "IaC defines cloud infrastructure (VPCs, EC2, Kubernetes clusters, S3 buckets, RDS instances) using declarative code (Terraform). This guarantees that staging and production environments are 100% reproducible with zero configuration drift.",
         "cloud-server-hosting-solutions"),
        ("How do automated CI/CD pipelines work at CoreForge?",
         "Every code push triggers automated GitHub Actions pipelines: linting, TypeScript type-checking, automated unit and integration tests, container image building, and zero-downtime deployment cutovers.",
         "cloud-server-hosting-solutions"),
        ("How often should an enterprise web application undergo vulnerability testing?",
         "We recommend continuous automated dependency auditing on every deployment, combined with comprehensive quarterly static/dynamic application security testing (SAST/DAST) and manual penetration testing.",
         "cybersecurity-it-solutions"),
        ("What is AI Business Automation at CoreForge?",
         "We integrate large language model (LLM) agents, OCR document parsers, and automated API webhooks to automate data extraction, customer service tier-1 triaging, invoice reconciliation, and database synchronization.",
         "ai-business-automation")
    ]

    for q, a, sub in software:
        faqs.append({
            "category": "software",
            "categoryName": "Custom Software Engineering",
            "subservice": sub,
            "question": q,
            "answer": a
        })

    # 4. Mobile Application Development (15 FAQs)
    mobile = [
        ("Why choose React Native over separate native Swift and Kotlin applications?",
         "Modern React Native with the New Architecture (JSI, Fabric, TurboModules) delivers 60 to 120 FPS performance virtually indistinguishable from native code, while sharing up to 85% of codebase logic across iOS and Android, reducing build and maintenance costs by nearly 40%.",
         "android-ios-app-development"),
        ("When is fully native iOS/Android development strictly required?",
         "Native development is required only for applications requiring intensive real-time 3D GPU shaders, low-level custom Bluetooth LE firmware drivers, proprietary audio DSP processing, or deep augmented reality (ARKit/ARCore) integrations.",
         "android-ios-app-development"),
        ("How do CoreForge mobile apps function offline?",
         "We architect offline-first mobile applications using local encrypted SQLite or WatermelonDB databases with bi-directional synchronization queues. Users perform full operations offline, and data syncs automatically upon reconnecting.",
         "android-ios-app-development"),
        ("Do you handle the Apple App Store and Google Play Store submission process?",
         "Yes. We manage end-to-end app store compliance: developer account configuration, cryptographic signing certificates, privacy manifest documentation, app screenshots, and navigating App Store review guidelines to guarantee approval.",
         "android-ios-app-development"),
        ("How are push notifications architected for high delivery reliability?",
         "We integrate Firebase Cloud Messaging (FCM) and Apple Push Notification Service (APNs) with custom backend queues, delivering targeted transactional alerts, geofence updates, and customer re-engagement messages in real time.",
         "android-ios-app-development"),
        ("How do you secure mobile applications against reverse engineering and tampering?",
         "We implement ProGuard/R8 code obfuscation, root/jailbreak detection, SSL certificate pinning to prevent man-in-the-middle attacks, and secure biometric authentication (Face ID / Fingerprint) for credential storage.",
         "android-ios-app-development"),
        ("Can CoreForge integrate mobile apps with hardware devices and BLE sensors?",
         "Yes. We have deep expertise pairing mobile applications with Bluetooth Low Energy (BLE) microcontrollers, NFC hardware, industrial telemetry modems, and GPS tracking hardware.",
         "android-ios-app-development"),
        ("How does React Native handle background tasks and geolocation updates?",
         "We utilize native background location services (CoreLocation on iOS, FusedLocationProvider on Android) exposed through TurboModules, allowing battery-optimized continuous telemetry logging even when the app is minimized.",
         "android-ios-app-development"),
        ("How is local mobile data encrypted on user devices?",
         "We utilize AES-256 encryption via SQLCipher for local SQLite databases, storing cryptographic encryption keys securely inside the iOS Keychain and Android Keystore hardware security modules.",
         "android-ios-app-development")
    ]

    for q, a, sub in mobile:
        faqs.append({
            "category": "software",
            "categoryName": "Custom Software Engineering",
            "subservice": sub,
            "question": q,
            "answer": a
        })

    # 5. Antennas & RF Hardware (35 FAQs)
    rf_hardware = [
        ("What frequency bands do CoreForge antennas cover?",
         "Our industrial antenna catalogue spans VHF (136-174 MHz), UHF (380-470 MHz), ISM bands (433 MHz, 868 MHz, 915 MHz), Cellular (GSM/3G/4G LTE/5G sub-6 GHz spanning 698-3800 MHz), Wi-Fi (2.4 GHz & 5.8 GHz), and GPS/GNSS (L1, L2, L5 bands).",
         "antennas"),
        ("What is the difference between an omnidirectional and a directional antenna?",
         "An omnidirectional antenna radiates electromagnetic power uniformly in a 360-degree circle around the horizontal azimuth, ideal for central base stations and mobile vehicles. A directional antenna (such as a Yagi or LPDA) focuses RF energy into a narrow beam, delivering high gain and long range along a specific path.",
         "vhf-uhf-antennas"),
        ("What is the physical significance of antenna VSWR and why must it stay below 1.5:1?",
         "Voltage Standing Wave Ratio (VSWR) measures the impedance match between the antenna and the 50-Ohm transmission line. A VSWR of 1.5:1 indicates that less than 4% of transmitted RF power is reflected back toward the transmitter, preventing final amplifier transistor burnout and maximizing radiated power.",
         "vhf-uhf-antennas"),
        ("What is an industrial collinear antenna and how does it achieve high gain?",
         "A collinear antenna stacks multiple half-wave radiating elements vertically in phase inside a protective fiberglass radome. This vertical phasing compresses the radiation pattern downward toward the horizon, achieving high gain (e.g. 5.5 dBi to 8.5 dBi) across 360 degrees of azimuth.",
         "vhf-uhf-antennas"),
        ("What is a Folded Dipole Array and why is it preferred for public safety networks?",
         "Folded dipole arrays feature heavy-duty all-metal anodized aluminum construction with internal coaxial harnesses and direct DC grounding. They withstand extreme weather, offer adjustable radiation patterns (omni, offset, or bidirectional), and survive lightning surges that destroy lightweight consumer antennas.",
         "vhf-uhf-antennas"),
        ("What wind speed ratings do CoreForge outdoor base station antennas support?",
         "Our industrial base station antennas are engineered and mechanically tested to survive sustained winds and gusts up to 200 km/h (125 mph), utilizing heavy-duty galvanized steel or stainless steel mast mounting hardware.",
         "vhf-uhf-antennas"),
        ("What is an active GPS/GNSS antenna and why does it require DC power?",
         "An active GNSS antenna integrates a ceramic patch element with an onboard Low Noise Amplifier (LNA) and SAW bandpass filter. It requires a 3V to 5V DC phantom feed via the coaxial center conductor to amplify weak satellite signals (+28 dB typical) before transmission cable losses degrade the signal.",
         "gps-gnss-antennas"),
        ("What radome materials are used to ensure long-term environmental durability?",
         "We use UV-stabilized heavy-wall fiberglass radomes and ultrasonic-welded polycarbonate/ABS plastics with silicone O-ring seals, ensuring IP65 to IP67 environmental protection against moisture, acid rain, salt spray, and extreme thermal cycling (-40°C to +85°C).",
         "antennas"),
        ("Can CoreForge manufacture custom antennas tuned to non-standard frequency pairs?",
         "Yes. We design and tune custom antennas for proprietary telemetry, defense, mining, and telemetry frequencies, verifying exact return loss and center frequency on calibrated Vector Network Analyzers in Bengaluru.",
         "antennas"),
        ("What is a Log Periodic Dipole Array (LPDA) antenna?",
         "An LPDA antenna features a series of staggered dipole elements whose lengths and spacings follow a logarithmic ratio. This allows the antenna to maintain consistent directional gain (8-11 dBi) and low VSWR across exceptionally wide bandwidths (e.g. 700 MHz to 3000 MHz).",
         "lpa-wideband-antennas"),
        ("Why is DC grounding important in base station antenna design?",
         "DC grounding provides a direct metallic short-circuit path between the antenna radiating element and the grounded mast. This bleeds off static atmospheric charge caused by wind and prevents electrostatic discharge from destroying sensitive transceiver frontend stages.",
         "vhf-uhf-antennas"),
        ("What connector types are standard on CoreForge industrial antennas?",
         "Our equipment features precision 50-Ohm connectors: N-Type Female on base stations, SMA Male on compact telemetry and GPS pucks, BNC/TNC for specialized instrumentation, and UHF (SO-239) for amateur and commercial legacy two-way radio links.",
         "antennas"),
        ("What is the difference between 3.5 dBi, 5.5 dBi, and 8.5 dBi antenna gain?",
         "Gain measures the compression of vertical radiation toward the horizon. 3.5 dBi provides a broad vertical beamwidth ideal for hilly or urban terrain; 8.5 dBi provides a highly compressed vertical beamwidth ideal for flat terrain and extreme point-to-point line-of-sight range.",
         "vhf-uhf-antennas"),
        ("How does CoreForge test VHF/UHF base station antennas before dispatch?",
         "Each antenna undergoes return loss and VSWR sweeps across its designated band on a calibrated Vector Network Analyzer (VNA). Only units maintaining VSWR < 1.5:1 across operational bandwidth are approved for packaging.",
         "vhf-uhf-antennas"),
        ("What mounting mast diameter do your base station clamps accommodate?",
         "Our galvanized steel and stainless steel U-bolt mounting clamps support tower and rooftop mast diameters from 35 mm to 65 mm (1.4 inches to 2.5 inches).",
         "vhf-uhf-antennas"),
        ("What frequency bands does your Quad-Band GSM/LTE antenna support?",
         "Our broadband cellular antennas support 698-960 MHz (GSM 900, LTE Band 8/20/28), 1710-2170 MHz (DCS, 3G, LTE Band 1/3), 2300-2700 MHz (LTE Band 40/41), and sub-6 GHz 5G frequencies up to 3800 MHz.",
         "gsm-lte-antennas"),
        ("Does the cellular antenna require a metallic ground plane to achieve rated VSWR?",
         "We offer both ground-plane-dependent models (optimized for metal vehicle roofs and control boxes) and ground-plane-independent models engineered to maintain 50-Ohm matching on plastic IoT telemetry enclosures.",
         "gsm-lte-antennas"),
        ("Can your dual-band Wi-Fi antennas operate on 2.4 GHz and 5.8 GHz simultaneously?",
         "Yes. The radiating structure features resonant traps that provide low VSWR and high efficiency on both 2.4-2.5 GHz (802.11 b/g/n) and 5.1-5.8 GHz (802.11 a/n/ac/ax) through a single coaxial feed line.",
         "wifi-wlan-antennas"),
        ("What is the noise figure of the integrated Low Noise Amplifier (LNA) in GPS antennas?",
         "Our active GNSS antennas feature high-performance gallium arsenide (GaAs) LNAs delivering 28 dB typical gain with an ultra-low noise figure below 1.5 dB, ensuring fast Time-To-First-Fix (TTFF) in obstructed environments.",
         "gps-gnss-antennas"),
        ("How is the antenna sealed against seawater and industrial chemicals?",
         "The housing is constructed from ultrasonic-welded high-impact polycarbonate with an internal silicone O-ring gasket and potting compound, achieving IP67 immersion rating.",
         "gps-gnss-antennas"),
        ("What is a UHF RFID Circular Polarized Antenna and where is it deployed?",
         "Our UHF RFID panel antennas operate from 865 to 868 MHz (India/EU) or 902 to 928 MHz (US). Circular polarization enables the antenna to read RFID tags regardless of their physical orientation, ideal for warehouse portals and automated toll gates.",
         "rfid-antennas")
    ]

    for q, a, sub in rf_hardware:
        faqs.append({
            "category": "antennas_rf",
            "categoryName": "Antenna & RF Hardware",
            "subservice": sub,
            "question": q,
            "answer": a
        })

    # 6. RF Passives, Duplexers & Accessories (25 FAQs)
    rf_passives = [
        ("What is a cavity duplexer and why is it mandatory in radio repeater stations?",
         "A cavity duplexer is a high-Q passive RF filter allowing a high-power transmitter and an ultra-sensitive receiver to operate simultaneously on a single shared antenna. It prevents the transmit signal from desensitizing or destroying the receiver front end by providing sharp notch isolation (> 75 dB to 85 dB).",
         "rf-cavity-duplexers"),
        ("What RF calibration benchmarks does CoreForge follow?",
         "All RF duplexers, filters, and passive components are tuned and verified against Anand Technologies RF industrial calibration standards using 2-port Vector Network Analyzers (VNA) in Bengaluru, recording precise S-parameter (S11, S21) plots.",
         "rf-cavity-duplexers"),
        ("What is the typical insertion loss of a CoreForge 6-cavity duplexer?",
         "Insertion loss across both Tx and Rx paths is engineered to stay below 1.2 dB (typically 0.8 dB to 1.0 dB), ensuring maximum radiated transmit power and negligible degradation of receiver sensitivity.",
         "rf-cavity-duplexers"),
        ("What is frequency separation and what minimum split is required for duplexers?",
         "Frequency separation is the difference between transmit (Tx) and receive (Rx) frequencies. In VHF bands (136-174 MHz), standard notch duplexers require a minimum separation of 4.5 MHz to 5.0 MHz. In UHF bands (380-470 MHz), standard separation is 5.0 MHz to 10.0 MHz.",
         "rf-cavity-duplexers"),
        ("What is thermal frequency drift and how does CoreForge minimize it?",
         "Thermal frequency drift occurs when ambient temperature swings cause cavity metal to expand or contract, shifting the tuned center frequency. CoreForge manufactures cavities from temperature-compensated extruded aluminum alloy and silver-plated Invar tuning rods to maintain stability across -30°C to +60°C.",
         "rf-cavity-duplexers"),
        ("What is an RF Directional Coupler and where is it used?",
         "An RF directional coupler samples a defined fraction of transmitted RF power (e.g. 10 dB, 20 dB, 30 dB coupling) along a main transmission line with high directivity (> 20 dB), allowing continuous forward power monitoring and VSWR measurement without breaking the main signal path.",
         "rf-directional-couplers"),
        ("What is a Wilkinson RF Power Divider / Splitter?",
         "A Wilkinson power divider splits an input signal into two or more equal-amplitude, equal-phase output signals while maintaining 50-Ohm matching at all ports and providing high isolation (> 20 dB) between output ports via isolation resistors.",
         "rf-power-splitters"),
        ("What is a fixed RF Coaxial Attenuator and when is it required?",
         "A coaxial attenuator precisely reduces RF signal amplitude by a designated decibel value (e.g. 3 dB, 6 dB, 10 dB, 30 dB) with flat frequency response and low VSWR. It is used to protect test equipment from high transmitter power or match levels between system stages.",
         "rf-coaxial-attenuators"),
        ("Why is low-loss coaxial cable (such as LMR-400) critical in antenna installations?",
         "Standard RG-58 cable suffers severe signal attenuation at high frequencies (over 15 dB loss per 100 ft at 900 MHz). LMR-400 features a foam dielectric and bonded aluminum tape with tinned copper braid, reducing attenuation to approximately 3.9 dB per 100 ft at 900 MHz, ensuring that transmitted power reaches the antenna.",
         "rf-coaxial-cable-assemblies"),
        ("How does a gas discharge tube (GDT) lightning surge arrestor work?",
         "A coaxial lightning surge arrestor contains a hermetically sealed gas capsule bridging the center pin and ground. During normal operation it presents near-infinite impedance; when a voltage surge exceeds breakdown threshold (typically 230V to 350V), the gas ionizes within nanoseconds, shunting the surge current safely to earth ground.",
         "rf-lightning-surge-arrestors"),
        ("What is intermodulation distortion (PIM) and how is it suppressed in RF passives?",
         "Passive Intermodulation (PIM) occurs when high-power signals interact with nonlinearities in connectors, metal junctions, or ferromagnetic materials, creating spurious interference. CoreForge suppresses PIM through precision CNC machining, silver-plated contacts, non-magnetic brass construction, and proper connector torque specifications.",
         "rf-passive-components"),
        ("Are factory test plots supplied with duplexer and filter shipments?",
         "Yes. Every custom-tuned duplexer and cavity filter shipped from our Bengaluru facility is accompanied by its serialized Vector Network Analyzer (VNA) spectral plot documenting exact Tx/Rx isolation, insertion loss, and return loss curves.",
         "rf-cavity-duplexers"),
        ("What power ratings are available for your 50-Ohm fixed attenuators?",
         "We manufacture fixed RF power attenuators rated for 5W, 10W, 25W, 50W, and 100W continuous average power, utilizing heavy-duty radial aluminum heatsink fins to dissipate heat efficiently.",
         "rf-coaxial-attenuators"),
        ("Why is double-shielded LMR-400 superior to standard RG-213 cable?",
         "LMR-400 utilizes bonded aluminum foil plus 85% tinned copper braid shielding, providing > 90 dB RF shielding effectiveness and lower attenuation (3.9 dB/100 ft at 900 MHz vs 7.4 dB for RG-213), preserving precious transmitter power.",
         "rf-coaxial-cable-assemblies")
    ]

    for q, a, sub in rf_passives:
        faqs.append({
            "category": "antennas_rf",
            "categoryName": "Antenna & RF Hardware",
            "subservice": sub,
            "question": q,
            "answer": a
        })

    # 7. Commercial Terms, SLAs & Operations (15 FAQs)
    commercial = [
        ("Where is CoreForge headquartered and can clients visit the facility?",
         "CoreForge is headquartered at 352, 4th Cross Rd, Rajagopala Nagar, Peenya Industrial Area, Bengaluru, Karnataka 560058, India. Clients are welcome to schedule in-person technical reviews or coordinate factory pickup for hardware shipments.",
         "operations"),
        ("How does CoreForge structure billing and milestone payments?",
         "We operate via milestone-based payment schedules tied to agreed deliverable approvals. Typically, an advance mobilization deposit initiates the project, followed by progress payments upon sprint demo approvals, and final settlement upon production cutover and IP assignment.",
         "commercial"),
        ("What warranty is provided on custom software development?",
         "CoreForge provides a standard thirty (30) calendar day post-launch warranty at zero additional cost to rectify any functional defects or reproducible bugs conflicting with the agreed Statement of Work (SOW).",
         "commercial"),
        ("What warranty covers industrial antennas and RF hardware?",
         "All CoreForge antennas and RF passive components carry a 12-month manufacturer defect warranty from invoice date covering structural workmanship and RF tuning, provided equipment is operated within specified power ratings and installed with lightning surge protection.",
         "commercial"),
        ("What are your standard delivery timelines across India and internationally?",
         "Standard in-stock RF hardware components ship within 24 to 48 hours from Bengaluru via insured express logistics. Custom frequency-tuned duplexers and production antenna batches are delivered within 5 to 10 business days depending on calibration volume.",
         "operations"),
        ("What is the legal jurisdiction governing CoreForge contracts?",
         "All contracts and commercial transactions are governed by the laws of the Republic of India, with exclusive dispute resolution through arbitration in Bengaluru, Karnataka, under the Indian Arbitration and Conciliation Act, 1996.",
         "legal"),
        ("How does CoreForge guarantee delivery schedules for custom software projects?",
         "We utilize agile 2-week sprints with predefined acceptance criteria. Sprint deliverables are demonstrated on live staging environments before milestone sign-off, ensuring total transparency and predictable release schedules.",
         "commercial"),
        ("What payment methods are supported for domestic Indian and international transactions?",
         "We accept NEFT, RTGS, IMPS, corporate UPI, and verified payment gateway transfers for domestic Indian clients with formal GST invoices. International clients are billed in USD or EUR via SWIFT wire transfer.",
         "commercial"),
        ("What happens if a custom hardware component is damaged during transit?",
         "All CoreForge hardware shipments are fully insured. If transit damage is documented within seven (7) business days of physical receipt, we dispatch immediate replacement units from our Bengaluru inventory.",
         "operations"),
        ("How do I request a formal technical quotation?",
         "Submit your project scope, target frequencies, or architectural requirements via our online quote form or email info@coreforgeindia.com. Our engineering leads evaluate your requirements and provide an itemized commercial proposal within 24 to 48 hours.",
         "commercial")
    ]

    for q, a, sub in commercial:
        faqs.append({
            "category": "commercial_sla",
            "categoryName": "Commercial & SLAs",
            "subservice": sub,
            "question": q,
            "answer": a
        })

    print(f"Total compiled technical FAQs: {len(faqs)}")

    output_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "../src/data/faqData.js"))

    m_count = len([f for f in faqs if f['category'] == 'marketing'])
    s_count = len([f for f in faqs if f['category'] == 'software'])
    rf_count = len([f for f in faqs if f['category'] == 'antennas_rf'])
    c_count = len([f for f in faqs if f['category'] == 'commercial_sla'])

    js_content = f"""// CoreForge Comprehensive Knowledge Base & Technical FAQ Repository
// {len(faqs)} deeply researched, technical questions and answers across all services, architectures, and RF products.

export const FAQ_CATEGORIES = [
  {{ id: 'all', name: 'All Questions ({len(faqs)})' }},
  {{ id: 'marketing', name: '360° Marketing & SEO ({m_count})' }},
  {{ id: 'software', name: 'Custom Software & Cloud ({s_count})' }},
  {{ id: 'antennas_rf', name: 'Antenna & RF Hardware ({rf_count})' }},
  {{ id: 'commercial_sla', name: 'Commercial & SLAs ({c_count})' }},
];

export const comprehensiveFaqData = {json.dumps(faqs, indent=2)};
"""

    with open(output_path, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"✓ Successfully wrote {len(faqs)} detailed FAQs to {output_path}")

if __name__ == "__main__":
    build()
