import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import { fadeUp, stagger } from '../utils/motion'

const services = [
  {
    number: '01',
    title: 'Web Development',
    tagline: 'Your Digital Presence, Built Right',
    description:
      'We build high-performance, fully custom web platforms that represent your brand with precision and scale with your growth.',
    items: [
      'Corporate websites and landing pages',
      'Full-stack web applications',
      'E-commerce and marketplace platforms',
      'Institutional portals — admission, student, staff management',
      'API integrations and backend systems',
      'Maintenance, hosting, and long-term support',
    ],
    note: 'Every project is built from scratch. No templates. No shortcuts.',
  },
  {
    number: '02',
    title: 'App Development',
    tagline: null,
    description:
      'We design and develop cross-platform mobile applications that are clean, fast, and built around how your users actually behave.',
    items: [
      'Customer-facing apps for retail, healthcare, logistics, and services',
      'Internal operations and field team apps',
      'Institutional apps — attendance, scheduling, communication',
      'Real-time dashboards and notification systems',
      'App Store & Play Store deployment end-to-end',
    ],
    note: 'Built once. Works everywhere. Looks like it was made for each platform.',
  },
  {
    number: '03',
    title: 'PCB Design & Development',
    tagline: null,
    description:
      'We design precision PCBs for product companies, startups, and R&D teams — handling the complete development pipeline in-house.',
    items: [
      'Schematic design and component selection',
      'PCB layout and routing',
      'Design rule checks and validation',
      'Prototype development and testing',
      'Fabrication-ready Gerber file delivery',
      'IoT and embedded system board design',
    ],
    note: 'Whether you have an idea on paper or a half-built prototype, we take it to completion.',
  },
  {
    number: '04',
    title: 'Business Management Solutions',
    tagline: null,
    description:
      'We build fully custom CRM systems and business management software tailored entirely to how your company operates — your workflow, your terminology, your team structure.',
    items: [
      'Custom CRM — sales pipeline, lead management, follow-up automation',
      'Operations management platforms',
      'Vendor and inventory management systems',
      'HR and team management dashboards',
      'Role-based access and multi-branch support',
      'AI-assisted features — smart reminders, lead scoring, predictive analytics',
    ],
    note: 'Who this is for: SMEs, retail chains, educational institutions, clinics, manufacturing units, and any business that has outgrown generic software.',
  },
  {
    number: '05',
    title: 'Workshops, Training & DIY Kits',
    tagline: null,
    description:
      'We run structured, cohort-based technical workshops designed to close the gap between theoretical knowledge and real-world engineering skills.',
    items: [
      'PCB Basic Design & Development',
      'IoT Projects — hands-on, project-based',
      'Embedded Systems Projects',
      'PCB End-to-End Design',
      'Web Development',
      'App Development',
    ],
    note: 'Format: Small cohorts · Mentor-driven · Certification on completion · Sunday schedule for zero disruption',
  },
  {
    number: '06',
    title: 'Technical Consultation',
    tagline: null,
    description:
      'Expert guidance for individuals, students, and organizations working on embedded systems, electronics, and hardware design challenges.',
    items: [
      'Expert guidance for embedded system and electronics projects',
      'Support for PCB and analog electronics design',
      'Design and performance review',
      'Mentoring for students and startups at any stage',
    ],
    note: null,
  },
]

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything we offer — built for clarity, speed, and real results."
        description="From hands-on workshops and DIY kits to custom software, hardware design, and expert consultation — CoreForge covers the full engineering lifecycle."
      />

      <section className="px-4 py-14 sm:px-6 lg:py-20">
        <div className="section-shell">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.number}
                variants={fadeUp}
                className="overflow-hidden rounded-[30px] border border-black/8 bg-white/80"
              >
                <div className="border-b border-black/8 bg-black px-6 py-5 sm:px-8">
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs font-semibold tracking-[0.3em] text-neutral-500">{service.number}</span>
                    <h2 className="text-xl font-bold tracking-[-0.04em] text-white sm:text-2xl">{service.title}</h2>
                  </div>
                  {service.tagline && (
                    <p className="mt-1 pl-10 text-sm text-neutral-400">{service.tagline}</p>
                  )}
                </div>

                <div className="p-6 sm:p-8">
                  <p className="max-w-3xl text-sm leading-7 text-neutral-600">{service.description}</p>

                  <ul className="mt-6 grid gap-y-2 sm:grid-cols-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-neutral-700">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-900" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {service.note && (
                    <p className="mt-6 border-t border-black/6 pt-5 text-xs italic text-neutral-500">{service.note}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
