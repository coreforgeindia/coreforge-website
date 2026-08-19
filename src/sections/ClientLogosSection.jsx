import { motion } from 'framer-motion'
import { fadeUp } from '../utils/motion'

// Import all 12 client logos
import anandLogo from '../assets/logos/Anand Technologies.webp'
import coffeeCabsLogo from '../assets/logos/Coffee cabs.webp'
import daivaLogo from '../assets/logos/Daiva.webp'
import emsLogo from '../assets/logos/EMS.webp'
import gatLogo from '../assets/logos/Global Academy of Technology.webp'
import infinityLogo from '../assets/logos/Infinity Prolabs.webp'
import nandiLogo from '../assets/logos/Nandi Power Controls and Systems.webp'
import omegaLogo from '../assets/logos/Omega Cocktails.webp'
import sbLogo from '../assets/logos/S B Technologies.webp'
import sushmaLogo from '../assets/logos/Sushma Digital.webp'
import vNurtureLogo from '../assets/logos/V-Nurture.webp'
import vyomLogo from '../assets/logos/VyomTronic.webp'

// 6 distinct logos in row 1
const row1 = [
  { name: 'Anand Technologies', logo: anandLogo },
  { name: 'Global Academy of Technology', logo: gatLogo },
  { name: 'Omega Cocktails', logo: omegaLogo },
  { name: 'Daiva', logo: daivaLogo },
  { name: 'V-Nurture', logo: vNurtureLogo },
  { name: 'Infinity Prolabs', logo: infinityLogo },
]

// 6 distinct logos in row 2 (completely different order & set)
const row2 = [
  { name: 'VyomTronic', logo: vyomLogo },
  { name: 'Nandi Power Controls', logo: nandiLogo },
  { name: 'Sushma Digital', logo: sushmaLogo },
  { name: 'EMS', logo: emsLogo },
  { name: 'Coffee Cabs', logo: coffeeCabsLogo },
  { name: 'S B Technologies', logo: sbLogo },
]

function MarqueeRow({ clients, direction = 'left' }) {
  // Duplicate array once for seamless continuous loop without tight repeats
  const items = [...clients, ...clients]

  return (
    <div className="relative overflow-hidden py-4">
      {/* Side Fade Gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-[#f3f3f1] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-[#f3f3f1] to-transparent" />

      <div className={`marquee-track ${direction === 'left' ? 'marquee-left' : 'marquee-right'}`}>
        {items.map((client, i) => (
          <div
            key={`${client.name}-${i}`}
            className="flex-shrink-0 flex items-center justify-center px-8 sm:px-12 transition-transform duration-300 hover:scale-110"
            title={client.name}
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-16 sm:h-20 w-auto max-w-[16rem] object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ClientLogosSection() {
  return (
    <section className="py-16 sm:py-24 overflow-hidden border-b border-black/5 bg-[#fafafa]">
      <div className="section-shell px-4 sm:px-6 mb-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="max-w-3xl mx-auto"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0d9488]">
            TRUSTED PARTNERS
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-[-0.03em] text-neutral-950 sm:text-4xl lg:text-5xl">
            Trusted by Industry Leaders &amp; Institutions
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-7 text-neutral-600">
            From established engineering enterprises and universities to high-growth startups, teams rely on CoreForge for execution.
          </p>
        </motion.div>
      </div>

      <div className="space-y-4">
        <MarqueeRow clients={row1} direction="left" />
        <MarqueeRow clients={row2} direction="right" />
      </div>
    </section>
  )
}
