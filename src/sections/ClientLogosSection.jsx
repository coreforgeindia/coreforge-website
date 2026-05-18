import { motion } from 'framer-motion'
import { fadeUp } from '../utils/motion'
import anandLogo from '../assets/logos/favicon.jpg'
import vyomLogo from '../assets/logos/VyomTronic_logo_no_BG.png'
import vNurtureLogo from '../assets/logos/image.png'
import infinityLogo from '../assets/logos/INFINITY PROLABS (3).png'
import omegaLogo from '../assets/logos/image (1).png'

const clients = [
  { name: 'Anand Technologies', logo: anandLogo },
  { name: 'VyomTronics', logo: vyomLogo },
  { name: 'V-Nurture', logo: vNurtureLogo },
  { name: 'Infinity Prolabs', logo: infinityLogo },
  { name: 'Omega Cocktails', logo: omegaLogo },
]

function LogoBox({ name, logo }) {
  return (
    <div className="flex h-28 items-center justify-center rounded-[20px] border border-black/8 bg-white px-6 py-5 shadow-[0_4px_16px_rgba(17,17,17,0.06)] transition hover:shadow-[0_8px_32px_rgba(17,17,17,0.10)]">
      <img src={logo} alt={name} className="max-h-16 max-w-[150px] object-contain" />
    </div>
  )
}

export default function ClientLogosSection() {
  return (
    <section className="px-4 pb-10 sm:px-6">
      <div className="section-shell">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={fadeUp}>
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
            Trusted by teams and businesses
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {clients.map((client) => (
              <LogoBox key={client.name} name={client.name} logo={client.logo} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
