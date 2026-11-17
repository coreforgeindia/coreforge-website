import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { productCategories } from '../data/verticals'

// Dedicated uncropped white background product photographs
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

export default function Products() {
  return (
    <>
      <SEO
        title="Industrial Antenna & RF Hardware Products Catalogue | CoreForge Bengaluru"
        description="Industrial VHF/UHF, GSM/LTE, Wi-Fi antennas, cavity duplexers, RF couplers, attenuators, and low-loss cable assemblies supplied from Bengaluru."
        keywords="antenna manufacturer Bangalore, RF duplexer India, VHF UHF base station antenna, GPS antenna, RF cable assemblies"
        canonicalUrl="https://www.coreforgeindia.com/products"
      />

      {/* Hero Header with Conic Pattern (100dvh Screen Fitting) */}
      <section className="relative overflow-hidden min-h-[100dvh] flex flex-col justify-center pt-24 pb-16 pattern-conic border-b-4 border-black dark:border-white">
        {/* High-legibility brutalist backdrop scrim */}
        <div className="absolute inset-0 bg-white/85 dark:bg-black/80 backdrop-blur-[1px] pointer-events-none" />

        <div className="section-shell relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-neutral-950 dark:text-white leading-tight mb-6">
            Antenna & RF Hardware Catalogue
          </h1>
          <p className="text-base sm:text-xl text-neutral-800 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-8">
            An industrial-grade hardware portfolio engineered to strict telecommunication, telemetry, and defense RF standards across global frequency bands.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#antennas" className="btn-primary text-xs">
              Explore Antennas
            </a>
            <a href="#rf-passive-components" className="btn-secondary text-xs">
              Explore RF Passives
            </a>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-14 sm:py-24 bg-[#fbfbfa] dark:bg-[#0c0c0d]" aria-label="Products Catalogue">
        <div className="section-shell space-y-16 sm:space-y-24">
          {productCategories.map((cat, catIdx) => (
            <div key={cat.slug} id={cat.slug} className="space-y-6 sm:space-y-8">
              {/* Category Header */}
              <div className="border-b-4 border-black dark:border-white pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="font-mono text-xs font-bold text-neutral-500 uppercase block mb-1">
                    Category 0{catIdx + 1}
                  </span>
                  <h2 className="font-heading text-2xl sm:text-4xl font-black uppercase text-black dark:text-white">
                    {cat.name}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-md">
                  {cat.description}
                </p>
              </div>

              {/* Items Grid: 3-column mobile & desktop (3x3 grid layout) */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-4 md:gap-6">
                {cat.items.map((item) => {
                  const imageSrc = productPhotos[item.slug] || item.image || vhfImg

                  return (
                    <Link
                      key={item.slug}
                      to={`/products/${item.slug}`}
                      className="group flex flex-col justify-between border-2 border-black dark:border-white bg-white dark:bg-neutral-900 p-2 sm:p-4 text-center transition-all duration-200 hover:shadow-[4px_4px_0_#000] dark:hover:shadow-[4px_4px_0_#fff] active:translate-x-0.5 active:translate-y-0.5"
                    >
                      <div>
                        {/* Product Photo with Pure White Background */}
                        <div className="relative aspect-square w-full overflow-hidden border-2 border-black dark:border-white bg-white mb-2 p-1 flex items-center justify-center">
                          <img
                            src={imageSrc}
                            alt={item.name}
                            className="w-full h-full object-contain filter grayscale contrast-115 group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                          <span className="absolute top-1 left-1 bg-black text-white text-[9px] font-mono font-bold px-1.5 py-0.5 uppercase hidden sm:block">
                            {item.group}
                          </span>
                        </div>

                        <span className="font-heading text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-tight text-neutral-950 dark:text-white line-clamp-2 leading-tight group-hover:underline">
                          {item.name}
                        </span>

                        <span className="hidden sm:block font-mono text-[10px] text-neutral-500 dark:text-neutral-400 font-bold mt-1.5">
                          {item.specs?.['Frequency Range'] || item.specs?.['Frequency'] || '50 Ohm Matched'}
                        </span>
                      </div>

                      <div className="pt-2 sm:pt-3 border-t border-black/10 dark:border-white/10 mt-2 flex items-center justify-center">
                        <span className="font-mono text-[9px] sm:text-[11px] font-bold text-black dark:text-white uppercase tracking-wider">
                          Specs →
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
