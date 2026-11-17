import { useParams, Link, Navigate } from 'react-router-dom'
import SEO from '../components/SEO'
import QuoteForm from '../components/QuoteForm'
import Accordion from '../components/Accordion'
import { getProductBySlug, productCategories } from '../data/verticals'
import { comprehensiveProductDetails } from '../data/productDetailsData'
import { HiCheck } from 'react-icons/hi'

import vhfImg from '../assets/products/antenna-vhf-uhf.jpg'
import gsmImg from '../assets/products/antenna-gsm-lte.jpg'
import wifiImg from '../assets/products/antenna-wifi.jpg'
import gpsImg from '../assets/products/antenna-gps-gnss.jpg'
import lpdaImg from '../assets/products/antenna-lpda.jpg'
import rfidImg from '../assets/products/antenna-rfid.jpg'
import duplexerImg from '../assets/products/rf-duplexer.jpg'
import couplerImg from '../assets/products/rf-coupler.jpg'
import splitterImg from '../assets/products/rf-splitter.jpg'
import attenuatorImg from '../assets/products/rf-attenuator.jpg'
import cablesImg from '../assets/products/rf-cables.jpg'

const productPhotos = {
  'vhf-uhf-antennas': vhfImg,
  'gsm-lte-antennas': gsmImg,
  'wifi-wlan-antennas': wifiImg,
  'gps-gnss-antennas': gpsImg,
  'lpa-wideband-antennas': lpdaImg,
  'rfid-antennas': rfidImg,
  'rf-cavity-duplexers': duplexerImg,
  'rf-directional-couplers': couplerImg,
  'rf-power-splitters': splitterImg,
  'rf-coaxial-attenuators': attenuatorImg,
  'rf-bandpass-filters': duplexerImg,
  'rf-coaxial-cable-assemblies': cablesImg,
  'rf-lightning-surge-arrestors': couplerImg,
}

export default function ProductDetailPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)

  if (!product) {
    return <Navigate to="/products" replace />
  }

  const productImage = productPhotos[product.slug] || product.image || vhfImg

  // Find deep product datasheet from comprehensive dataset
  const datasheet = comprehensiveProductDetails[product.slug] || {}

  // Find parent category and related products
  const parentCategory = productCategories.find(
    (c) => c.slug === product.categorySlug || c.slug === product.slug
  )
  const relatedProducts =
    parentCategory?.items.filter((i) => i.slug !== product.slug).slice(0, 4) || []

  // Combine electrical specs
  const electricalSpecs = datasheet.electricalSpecs || product.specs || {
    'Nominal Impedance': '50 Ohms',
    'VSWR': '≤ 1.5:1 across operating spectrum',
    'Polarization': 'Linear Vertical / Circular',
    'Connector Type': 'N-Female (50 Ohm Silver-Plated)',
    'Power Rating': '100 Watts continuous CW',
  }

  // Combine mechanical specs
  const mechanicalSpecs = datasheet.mechanicalSpecs || {
    'Chassis Metallurgy': 'High-tensile 6063-T6 aluminum alloy with alodine finish',
    'Radome Enclosure': 'UV-resistant fiberglass / high-impact ABS',
    'Mounting Hardware': 'Stainless steel 304 grade mast clamps',
    'Mast Diameter Acceptable': '35 mm to 65 mm OD',
    'Wind Survival Rating': '200 km/h operational / 250 km/h survival',
    'Ingress Protection': 'IP67 waterproof sealed casing',
    'Operating Temperature': '-40°C to +85°C ambient range',
  }

  const applications = datasheet.applications || [
    'Mission-Critical Public Safety & Police Wireless Communication Repeaters',
    'Defense, Tactical Military Field Radios & UAV Telemetry Links',
    'Marine Vessel VHF AIS Coastal Monitoring and Port Authority Stations',
    'SCADA Industrial Remote Telemetry for Electrical Substations & Oil Pipelines',
    'Private Cellular LTE 4G/5G Campus Networks & Enterprise In-Building DAS',
  ]

  const faqs = datasheet.faqs || [
    {
      question: `Can the ${product.name} be custom-tuned to our organization's frequency band?`,
      answer:
        'Yes. Our Peenya, Bengaluru manufacturing facility custom-tunes RF products to your exact frequency allocations, with verified Vector Network Analyzer (VNA) test plots provided with each unit.',
    },
    {
      question: 'What quality testing is performed on each production unit?',
      answer:
        '100% of units undergo S11 Return Loss, VSWR verification, insertion loss measurement, and passive intermodulation (PIM) screening before packaging.',
    },
    {
      question: 'What is the standard warranty and shipping turnaround?',
      answer:
        'Standard hardware ships within 3 to 5 business days across India. All passive components include a 12-month manufacturer replacement warranty against material defects.',
    },
  ]

  const accordionItems = faqs.map((f) => ({
    question: f.q || f.question,
    answer: f.a || f.answer,
  }))

  return (
    <>
      <SEO
        title={`${product.name} (Anand Technologies Technical Datasheet) | CoreForge Antenna & RF Bengaluru`}
        description={`${product.shortDescription} Manufactured to Anand Technologies testing standards in Peenya, Bengaluru. Full electrical and mechanical specifications.`}
        keywords={`CoreForge ${product.name}, RF antenna Bengaluru, Anand Technologies standard, 50 Ohm RF passives Bangalore, Peenya hardware manufacturer`}
        canonicalUrl={`https://www.coreforgeindia.com/products/${product.slug}`}
      />

      {/* Hero Header with Conic Pattern (100dvh Screen Fitting) */}
      <section className="relative overflow-hidden min-h-[100dvh] flex flex-col justify-center pt-24 pb-16 pattern-conic border-b-4 border-black dark:border-white">
        {/* High-legibility brutalist backdrop scrim */}
        <div className="absolute inset-0 bg-white/85 dark:bg-black/80 backdrop-blur-[1px] pointer-events-none" />

        <div className="section-shell relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-6">
            <Link to="/" className="hover:text-black dark:hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/products" className="hover:text-black dark:hover:text-white transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-black dark:text-white font-bold">{product.name}</span>
          </nav>

          <div className="max-w-4xl">
            <span className="font-mono text-xs font-bold uppercase text-neutral-600 dark:text-neutral-400 block mb-2">
              {product.categoryName || 'Antenna & RF Hardware'} · {product.group || 'Precision Component'}
            </span>

            <h1 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-neutral-950 dark:text-white leading-tight mb-6">
              {product.name}
            </h1>

            <p className="text-base sm:text-xl text-neutral-800 dark:text-neutral-300 max-w-3xl leading-relaxed mb-8">
              {product.shortDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#rf-quote" className="btn-primary text-xs">
                Request Hardware Quotation
              </a>
              <a href="#datasheet" className="btn-secondary text-xs">
                View Technical Datasheet
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Detail Section */}
      <section
        id="datasheet"
        className="py-20 sm:py-28 bg-[#fbfbfa] dark:bg-[#0c0c0d] border-b-4 border-black dark:border-white"
      >
        <div className="section-shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Full Technical Datasheet (5-8 Pages Equivalent Depth) */}
            <div className="lg:col-span-7 space-y-12">
              {/* Product Photograph on pure white background, uncropped */}
              <div className="border-4 border-black dark:border-white overflow-hidden bg-white shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#fff]">
                <div className="p-6 sm:p-10 flex items-center justify-center bg-white min-h-[340px]">
                  <img
                    src={productImage}
                    alt={product.name}
                    className="w-full max-h-[380px] object-contain filter grayscale contrast-115"
                  />
                </div>
                <div className="p-3 bg-black text-white text-xs font-mono flex justify-between border-t-2 border-black">
                  <span>EQUIPMENT: {product.name.toUpperCase()}</span>
                  <span>CALIBRATION: 50 OHM IMPEDANCE</span>
                </div>
              </div>

              {/* 1. Manufacturing Standard & Anand Technologies Benchmark */}
              <div className="border-4 border-black dark:border-white bg-white dark:bg-[#151516] p-8 shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#fff]">
                <span className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-wider block mb-2">
                  SECTION 01 · INDUSTRIAL BENCHMARK & CALIBRATION STANDARD
                </span>
                <h2 className="font-heading text-2xl font-black uppercase text-black dark:text-white mb-4">
                  Engineering Standards & Manufacturing Quality
                </h2>
                <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans mb-4">
                  {datasheet.standards ||
                    'Engineered and manufactured to Anand Technologies Bengaluru benchmarks. Every unit is calibrated using high-precision multi-port Vector Network Analyzers (VNA) in Peenya to guarantee Return Loss ≥ 14 dB (VSWR ≤ 1.5:1) across the specified passband.'}
                </p>
                {datasheet.calibration && (
                  <div className="border-t-2 border-black/10 dark:border-white/10 pt-4 mt-4">
                    <h4 className="font-heading text-base font-bold uppercase text-black dark:text-white mb-2">
                      VNA S-Parameter & Anechoic Chamber Calibration
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-mono">
                      {datasheet.calibration}
                    </p>
                  </div>
                )}
              </div>

              {/* 2. Full Electrical Specifications Table */}
              <div className="border-4 border-black dark:border-white bg-white dark:bg-[#151516] p-8 shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#fff]">
                <span className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-wider block mb-2">
                  SECTION 02 · ELECTRICAL PERFORMANCE METRICS
                </span>
                <h2 className="font-heading text-2xl font-black uppercase text-black dark:text-white mb-4">
                  Electrical Specifications
                </h2>
                <p className="text-xs font-mono text-neutral-500 mb-6">
                  Vector Network Analyzer (VNA) verified at 50-Ohm characteristic impedance.
                </p>

                <div className="border-2 border-black dark:border-white overflow-hidden">
                  <table className="w-full text-left text-xs sm:text-sm font-mono">
                    <tbody>
                      {Object.entries(electricalSpecs).map(([param, value], idx) => (
                        <tr
                          key={param}
                          className={
                            idx % 2 === 0
                              ? 'bg-neutral-50 dark:bg-neutral-900'
                              : 'bg-white dark:bg-[#151516]'
                          }
                        >
                          <td className="p-3.5 font-bold border-r border-black/10 dark:border-white/10 text-black dark:text-white w-5/12">
                            {param}
                          </td>
                          <td className="p-3.5 text-neutral-800 dark:text-neutral-200">
                            {value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 3. Full Mechanical & Environmental Specifications Table */}
              <div className="border-4 border-black dark:border-white bg-white dark:bg-[#151516] p-8 shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#fff]">
                <span className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-wider block mb-2">
                  SECTION 03 · MECHANICAL & ENVIRONMENTAL PARAMETERS
                </span>
                <h2 className="font-heading text-2xl font-black uppercase text-black dark:text-white mb-4">
                  Mechanical, Metallurgy & Ingress Protection
                </h2>
                <p className="text-xs font-mono text-neutral-500 mb-6">
                  Engineered for tropical, coastal, and harsh industrial environmental deployments.
                </p>

                <div className="border-2 border-black dark:border-white overflow-hidden">
                  <table className="w-full text-left text-xs sm:text-sm font-mono">
                    <tbody>
                      {Object.entries(mechanicalSpecs).map(([param, value], idx) => (
                        <tr
                          key={param}
                          className={
                            idx % 2 === 0
                              ? 'bg-neutral-50 dark:bg-neutral-900'
                              : 'bg-white dark:bg-[#151516]'
                          }
                        >
                          <td className="p-3.5 font-bold border-r border-black/10 dark:border-white/10 text-black dark:text-white w-5/12">
                            {param}
                          </td>
                          <td className="p-3.5 text-neutral-800 dark:text-neutral-200">
                            {value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 4. Real-World Mission-Critical Applications */}
              <div className="border-4 border-black dark:border-white bg-white dark:bg-[#151516] p-8 shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#fff]">
                <span className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-wider block mb-2">
                  SECTION 04 · INDUSTRIAL & DEFENSE APPLICATION DOMAINS
                </span>
                <h2 className="font-heading text-2xl font-black uppercase text-black dark:text-white mb-6">
                  Target Field Deployments
                </h2>
                <ul className="space-y-4">
                  {applications.map((app, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3.5 text-sm sm:text-base text-neutral-800 dark:text-neutral-200"
                    >
                      <span className="w-5 h-5 border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black flex items-center justify-center flex-shrink-0 mt-0.5">
                        <HiCheck className="h-3.5 w-3.5" />
                      </span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 5. Tower Rigging & Installation Guide */}
              <div className="border-4 border-black dark:border-white bg-white dark:bg-[#151516] p-8 shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#fff]">
                <span className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-wider block mb-2">
                  SECTION 05 · TOWER RIGGING & COAXIAL FEEDLINE GUIDE
                </span>
                <h2 className="font-heading text-2xl font-black uppercase text-black dark:text-white mb-4">
                  Field Installation & Tuning Standards
                </h2>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans mb-6">
                  {datasheet.installationGuide ||
                    'Mount securely to tower mast using supplied 304 stainless-steel hardware. Ensure line-of-sight elevation and minimum 2-meter physical clearance from conductive structures. Seal all coaxial connector junctions with two layers of self-amalgamating tape and UV-rated vinyl wrap. Ground chassis directly to master tower busbar.'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="border-2 border-black dark:border-white p-4 bg-[#fbfbfa] dark:bg-neutral-900">
                    <strong className="block text-black dark:text-white font-bold mb-1">
                      Coaxial Feeder Matching
                    </strong>
                    Use low-loss LMR-400 (up to 30m) or 1/2-inch Heliax (&gt;30m) to maintain system gain and low insertion loss.
                  </div>

                  <div className="border-2 border-black dark:border-white p-4 bg-[#fbfbfa] dark:bg-neutral-900">
                    <strong className="block text-black dark:text-white font-bold mb-1">
                      Surge Suppression
                    </strong>
                    Install inline 20kA coaxial lightning arrestor (CF-LA-NF) bonded to copper earthing busbar.
                  </div>
                </div>
              </div>

              {/* 6. Product-Specific Technical FAQ */}
              <div className="border-4 border-black dark:border-white bg-white dark:bg-[#151516] p-8 shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#fff]">
                <span className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-wider block mb-2">
                  SECTION 06 · FREQUENTLY ASKED HARDWARE QUESTIONS
                </span>
                <h2 className="font-heading text-2xl font-black uppercase text-black dark:text-white mb-6">
                  {product.name} Engineering FAQs
                </h2>
                <Accordion items={accordionItems} allowMultiple={false} />
              </div>
            </div>

            {/* Right Column: Quote Form & Related Products */}
            <div className="lg:col-span-5 space-y-12">
              <div id="rf-quote">
                <QuoteForm
                  initialCategory="product"
                  initialItemName={product.name}
                />
              </div>

              {/* Related Hardware in Category */}
              {relatedProducts.length > 0 && (
                <div className="border-4 border-black dark:border-white bg-white dark:bg-[#151516] p-6 shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#fff]">
                  <h3 className="font-heading text-lg font-black uppercase text-black dark:text-white mb-4">
                    Related RF Equipment Models
                  </h3>
                  <div className="space-y-4">
                    {relatedProducts.map((rel) => (
                      <Link
                        key={rel.slug}
                        to={`/products/${rel.slug}`}
                        className="block p-4 border-2 border-black dark:border-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group"
                      >
                        <span className="font-heading text-sm font-bold uppercase text-black dark:text-white block group-hover:underline">
                          {rel.name}
                        </span>
                        <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 line-clamp-2">
                          {rel.shortDescription}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
