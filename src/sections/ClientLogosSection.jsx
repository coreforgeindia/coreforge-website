import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../utils/motion'

// Import all 12 WebP optimized client logos
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

const clients = [
  { name: 'Anand Technologies', logo: anandLogo },
  { name: 'Coffee Cabs', logo: coffeeCabsLogo },
  { name: 'Daiva', logo: daivaLogo },
  { name: 'EMS', logo: emsLogo },
  { name: 'Global Academy of Technology', logo: gatLogo },
  { name: 'Infinity Prolabs', logo: infinityLogo },
  { name: 'Nandi Power Controls', logo: nandiLogo },
  { name: 'Omega Cocktails', logo: omegaLogo },
  { name: 'S B Technologies', logo: sbLogo },
  { name: 'Sushma Digital', logo: sushmaLogo },
  { name: 'V-Nurture', logo: vNurtureLogo },
  { name: 'VyomTronic', logo: vyomLogo },
]

export default function ClientLogosSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:py-24">
      <div className="section-shell">
        {/* Title & Description Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-neutral-950 sm:text-4xl lg:text-5xl">
            Our Clients
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-7 text-neutral-600">
            Trusted by top engineering firms, educational institutions, startups, and growing enterprises.
          </p>
        </motion.div>

        {/* Large Prominent Logo Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 sm:gap-6"
        >
          {clients.map((client) => (
            <motion.div
              key={client.name}
              variants={fadeUp}
              className="flex h-44 sm:h-48 flex-col items-center justify-between rounded-2xl border border-black/10 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.09)]"
            >
              <div className="flex h-28 sm:h-32 w-full items-center justify-center p-1">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-24 sm:max-h-28 w-full object-contain transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="text-center text-xs sm:text-sm font-extrabold text-neutral-900 line-clamp-1">
                {client.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
