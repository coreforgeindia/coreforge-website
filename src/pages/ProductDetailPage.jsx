import { useParams, Link, Navigate } from 'react-router-dom'
import SEO from '../components/SEO'
import QuoteForm from '../components/QuoteForm'
import { getProductBySlug, productCategories } from '../data/verticals'
import { HiArrowRight } from 'react-icons/hi'

import vhfImg from '../assets/products/antenna-vhf-uhf.jpg'
import gsmImg from '../assets/products/antenna-gsm-lte.jpg'
import wifiImg from '../assets/products/antenna-wifi.jpg'
import gpsImg from '../assets/products/antenna-gps-gnss.jpg'
import duplexerImg from '../assets/products/rf-duplexer.jpg'
import cablesImg from '../assets/products/rf-cables.jpg'

const productPhotos = {
  'vhf-uhf-antennas': vhfImg,
  'gsm-lte-antennas': gsmImg,
  'wifi-wlan-antennas': wifiImg,
  'gps-gnss-antennas': gpsImg,
  'lpa-wideband-antennas': vhfImg,
  'rfid-antennas': wifiImg,
  'rf-cavity-duplexers': duplexerImg,
  'rf-directional-couplers': duplexerImg,
  'rf-power-splitters': duplexerImg,
  'rf-coaxial-attenuators': duplexerImg,
  'rf-bandpass-filters': duplexerImg,
  'rf-coaxial-cable-assemblies': cablesImg,
  'rf-lightning-surge-arrestors': cablesImg,
}

export default function ProductDetailPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)

  if (!product) {
    return <Navigate to="/products" replace />
  }

  const productImage = productPhotos[product.slug] || product.image || vhfImg

  // Find parent category and related products
  const parentCategory = productCategories.find(
    (c) => c.slug === product.categorySlug || c.slug === product.slug
  )
  const relatedProducts = parentCategory?.items.filter((i) => i.slug !== product.slug).slice(0, 3) || []

  return (
    <>
      <SEO
        title={`${product.name} | CoreForge Antenna & RF Bengaluru`}
        description={`${product.shortDescription} Engineered to Anand Technologies test standard in Bengaluru.`}
        keywords={`CoreForge ${product.name}, RF antenna Bengaluru, ${product.specs?.['Frequency Range'] || 'RF hardware'}`}
        canonicalUrl={`https://www.coreforgeindia.com/products/${product.slug}`}
      />

      {/* Hero Header with Conic Pattern */}
      <section className="relative py-20 sm:py-28 pattern-conic text-white border-b-4 border-black dark:border-white">
        <div className="section-shell relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/products" className="hover:text-white transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-white font-bold">{product.name}</span>
          </nav>

          <div className="max-w-4xl">
            <span className="font-mono text-xs font-bold uppercase text-neutral-400 block mb-2">
              {product.categoryName || 'Antenna & RF Hardware'} · {product.group || 'Precision Component'}
            </span>

            <h1 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-6">
              {product.name}
            </h1>

            <p className="text-base sm:text-xl text-neutral-300 max-w-3xl leading-relaxed mb-8">
              {product.shortDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#rf-quote" className="btn-primary text-xs">
                Request Hardware Quotation
              </a>
              <Link to="/products" className="btn-secondary text-xs">
                Back to RF Catalogue
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Detail Section */}
      <section className="py-20 sm:py-28 bg-[#fbfbfa] dark:bg-[#0c0c0d] border-b-4 border-black dark:border-white">
        <div className="section-shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Image, Specs & Operating Parameters */}
            <div className="lg:col-span-7 space-y-12">
              {/* Product Photograph */}
              <div className="border-4 border-black dark:border-white overflow-hidden bg-neutral-900 shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#fff]">
                <img
                  src={productImage}
                  alt={product.name}
                  className="w-full h-80 sm:h-96 object-cover filter contrast-105"
                />
                <div className="p-3 bg-black text-white text-xs font-mono flex justify-between">
                  <span>EQUIPMENT: {product.name.toUpperCase()}</span>
                  <span>CALIBRATION: 50 OHM IMPEDANCE</span>
                </div>
              </div>

              {/* Technical Specifications Table */}
              {product.specs && (
                <div className="border-4 border-black dark:border-white bg-white dark:bg-[#151516] p-8 shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#fff]">
                  <h2 className="font-heading text-2xl font-black uppercase text-black dark:text-white mb-4">
                    Technical Specifications
                  </h2>
                  <p className="text-xs font-mono text-neutral-500 mb-6">
                    Vector Network Analyzer (VNA) calibrated against Anand Technologies industrial benchmarks.
                  </p>

                  <div className="border-2 border-black dark:border-white overflow-hidden">
                    <table className="w-full text-left text-xs sm:text-sm font-mono">
                      <tbody>
                        {Object.entries(product.specs).map(([param, value], idx) => (
                          <tr
                            key={param}
                            className={idx % 2 === 0 ? 'bg-neutral-50 dark:bg-neutral-900' : 'bg-white dark:bg-[#151516]'}
                          >
                            <td className="p-3 font-bold border-r border-black/10 dark:border-white/10 text-black dark:text-white w-1/2">
                              {param}
                            </td>
                            <td className="p-3 text-neutral-700 dark:text-neutral-300">
                              {value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Environmental & Operating Notes */}
              <div className="border-4 border-black dark:border-white bg-white dark:bg-[#151516] p-8 shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#fff]">
                <h3 className="font-heading text-xl font-black uppercase text-black dark:text-white mb-4">
                  Application & Field Integration Notes
                </h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                  {product.application || 'Designed for continuous 24/7 industrial outdoor and mobile deployments.'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="border border-black/10 dark:border-white/10 p-3 bg-neutral-50 dark:bg-neutral-900">
                    <strong className="block text-black dark:text-white mb-1">Temperature Rating:</strong>
                    -40°C to +85°C Operating Range
                  </div>
                  <div className="border border-black/10 dark:border-white/10 p-3 bg-neutral-50 dark:bg-neutral-900">
                    <strong className="block text-black dark:text-white mb-1">Weather Ingress:</strong>
                    IP65 / IP67 Sealed Enclosure
                  </div>
                </div>
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
