import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import ClientLogosSection from '../sections/ClientLogosSection'
import { fadeUp, stagger } from '../utils/motion'
import { HiOutlineChip, HiOutlineCode, HiOutlineAcademicCap, HiArrowRight, HiCheck } from 'react-icons/hi'

const projectCaseStudies = [
  {
    title: 'Multi-Layer STM32 Industrial Control Board',
    category: 'Hardware & Embedded',
    icon: HiOutlineChip,
    description: '4-layer PCB layout with high-speed signals, RS485 communication, ADC sensor isolation, and custom FreeRTOS firmware for automated factory machinery.',
    metrics: ['4-Layer Impedance Matched', 'FreeRTOS Firmware', '100% Hardware Test Passed'],
    tech: ['STM32F4', 'KiCad', 'FreeRTOS', 'RS485', 'Modbus'],
  },
  {
    title: 'ESP32 Smart Agriculture & Edge Gateway',
    category: 'IoT & Sensors',
    icon: HiOutlineChip,
    description: 'Low-power solar IoT sensor node with LoRaWAN telemetry, soil moisture calibration, and custom cloud dashboard integration.',
    metrics: ['Low-Power Solar Deep Sleep', '5km LoRa Range', 'Real-Time MQTT Dashboard'],
    tech: ['ESP32', 'LoRaWAN', 'MQTT', 'Node.js', 'Grafana'],
  },
  {
    title: 'Custom Enterprise ERP & Warehouse System',
    category: 'Software & Web',
    icon: HiOutlineCode,
    description: 'End-to-end custom ERP platform built for a Bengaluru manufacturing plant: managing inventory, billing, dispatch, and barcode tracking.',
    metrics: ['40% Faster Order Processing', 'Automated Barcode Invoicing', 'Zero Downtime Architecture'],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'TailwindCSS'],
  },
  {
    title: 'Industrial IoT Analytics & Monitoring Portal',
    category: 'Web Applications & BI',
    icon: HiOutlineCode,
    description: 'High-throughput telemetry portal handling 100,000+ daily data points with live alerts, historical analytics, and automated reporting.',
    metrics: ['100k+ Sensor Data Points/Day', 'Sub-Second Live Alerts', 'Role-Based Access Control'],
    tech: ['Next.js', 'Python', 'TimescaleDB', 'Chart.js'],
  },
  {
    title: 'Embedded Systems & IoT Hands-On Bootcamp',
    category: 'Workshops & Training',
    icon: HiOutlineAcademicCap,
    description: 'Practical training program conducted for 200+ engineering students featuring custom DIY hardware kits, circuit assembly, and C programming.',
    metrics: ['200+ Trained Engineers', '20+ DIY Microcontroller Kits', '100% Practical Execution'],
    tech: ['Arduino', 'ESP32', 'Circuit Simulation', 'Firmware Debugging'],
  },
]

export default function Portfolio() {
  return (
    <>
      <SEO
        title="Engineering Portfolio & Case Studies | CoreForge Bengaluru"
        description="Explore real-world engineering projects delivered by CoreForge across IoT edge gateways, multi-layer PCBs, custom ERP portals, embedded firmware, and technical workshops."
        keywords="CoreForge portfolio, embedded projects India, PCB design case studies, custom ERP projects Bengaluru, IoT case studies"
        canonicalUrl="https://coreforgeindia.com/portfolio"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'CoreForge Portfolio & Case Studies',
          url: 'https://coreforgeindia.com/portfolio',
          description: 'Snapshots of hardware, embedded firmware, PCB, and software engineering projects delivered by CoreForge.',
        }}
      />
      <PageHero
        eyebrow="Portfolio & Case Studies"
        title="Projects and partnerships that speak for themselves."
        description="A snapshot of the engineering work we've delivered: from multi-layer PCB prototypes and embedded firmware to custom enterprise software, mobile apps, and technical workshops."
      />

      {/* Unique Portfolio Case Studies Grid */}
      <section className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="section-shell">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {projectCaseStudies.map((project) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={project.title}
                  variants={fadeUp}
                  className="group flex flex-col justify-between rounded-[28px] border border-black/10 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-bold text-[#0d9488] uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-neutral-950 mt-5 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-3 leading-6">
                      {project.description}
                    </p>

                    <div className="mt-6 space-y-2 border-t border-black/5 pt-4">
                      {project.metrics.map((m) => (
                        <div key={m} className="flex items-center gap-2 text-xs font-semibold text-neutral-800">
                          <HiCheck className="h-4 w-4 text-[#0d9488] flex-shrink-0" />
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-black/5 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-bold text-neutral-600">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <ClientLogosSection />
    </>
  )
}
