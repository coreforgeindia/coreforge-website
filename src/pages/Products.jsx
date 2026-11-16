import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { productCategories } from '../data/verticals'

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

export default function Products() {
  return (
    <>
      <SEO
        title="Industrial Antenna & RF Hardware Products Catalogue | CoreForge Bengaluru"
        description="Industrial VHF/UHF, GSM/LTE, Wi-Fi antennas, cavity duplexers, RF couplers, attenuators, and low-loss cable assemblies supplied from Bengaluru."
        keywords="antenna manufacturer Bangalore, RF duplexer India, VHF UHF base station antenna, GPS antenna, RF cable assemblies"
        canonicalUrl="https://www.coreforgeindia.com/products"
      />

      {/* Hero Header with Conic Pattern (Uiverse.io by csemszepp) */}
      <section className="relative py-24 sm:py-32 pattern-conic text-white border-b-4 border-black dark:border-white">
        <div className="section-shell relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-tight mb-6">
            Antenna & RF Hardware Catalogue
          </h1>
          <p className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-8">
            An industrial-grade hardware portfolio engineered to strict telecommunication, telemetry, and defense RF standards across global frequency bands.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 sm:py-28 bg-[#fbfbfa] dark:bg-[#0c0c0d]" aria-label="Products Catalogue">
        <div className="section-shell space-y-24">
          {productCategories.map((cat, catIdx) => (
            <div key={cat.slug} id={cat.slug} className="space-y-8">
              {/* Category Header */}
              <div className="border-b-4 border-black dark:border-white pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="font-mono text-xs font-bold text-neutral-500 uppercase block mb-1">
                    Category 0{catIdx + 1}
                  </span>
                  <h2 className="font-heading text-3xl sm:text-4xl font-black uppercase text-black dark:text-white">
                    {cat.name}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-md">
                  {cat.description}
                </p>
              </div>

              {/* Items Grid: Direct links to individual product pages */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.items.map((item) => {
                  const imageSrc = productPhotos[item.slug] || item.image || vhfImg

                  return (
                    <Link
                      key={item.slug}
                      to={`/products/${item.slug}`}
                      className="brutalist-card group text-left"
                    >
                      <div>
                        {/* Product Photo */}
                        <div className="relative h-52 w-full overflow-hidden border-2 border-black dark:border-white bg-neutral-900 mb-4">
                          <img
                            src={imageSrc}
                            alt={item.name}
                            className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                          <span className="absolute top-2 left-2 bg-black text-white text-[10px] font-mono font-bold px-2 py-0.5 uppercase">
                            {item.group}
                          </span>
                        </div>

                        <span className="brutalist-card__title">
                          {item.name}
                        </span>

                        <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 line-clamp-2">
                          {item.shortDescription}
                        </p>
                      </div>

                      <div className="pt-4 border-t-2 border-black dark:border-white flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-black dark:text-white uppercase tracking-wider group-hover:underline">
                          View Technical Specifications →
                        </span>
                        <span className="font-mono text-[11px] text-neutral-500 font-bold">
                          {item.specs?.['Frequency Range'] || item.specs?.['Frequency'] || '50 Ohm'}
                        </span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
