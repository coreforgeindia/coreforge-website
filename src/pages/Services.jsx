import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import { fadeUp, stagger } from '../utils/motion'
import {
  HiOutlineCode,
  HiOutlineChip,
  HiOutlineAcademicCap,
  HiOutlineGlobe,
  HiOutlineDeviceMobile,
  HiOutlineDatabase,
  HiOutlineLightBulb,
  HiOutlineCog,
  HiOutlineBeaker,
  HiOutlinePuzzle,
  HiOutlineClipboardCheck,
  HiOutlineDesktopComputer,
} from 'react-icons/hi'

const services = [
  {
    id: 'software',
    number: '01',
    title: 'Software & Tech Solutions',
    tagline: 'Digital Solutions Designed Around Your Business',
    description:
      'Every business is unique. That\'s why we build technology specifically for your workflow instead of forcing your business to adapt to generic software.',
    subsections: [
      {
        title: 'Custom Software Development',
        icon: HiOutlineCode,
        description: 'Tailor-made software built specifically for your business operations.',
        items: [
          'ERP Solutions: Complete Enterprise Resource Planning systems for manufacturing, retail, healthcare, education, logistics, and more',
          'CRM Solutions: Manage leads, customers, sales pipelines, and customer support efficiently',
        ],
      },
      {
        title: 'Web Development',
        icon: HiOutlineGlobe,
        items: [
          'Corporate Websites',
          'Business Websites',
          'E-Commerce',
          'Web Applications',
          'Customer Portals',
        ],
      },
      {
        title: 'Mobile App Development',
        icon: HiOutlineDeviceMobile,
        items: [
          'Android Apps',
          'iOS Apps',
          'Cross Platform Apps',
        ],
      },
      {
        title: 'Business Intelligence',
        icon: HiOutlineDatabase,
        description: 'Interactive dashboards, reports, KPIs, analytics, and decision-making tools.',
      },
    ],
    industries: ['Manufacturing', 'Healthcare', 'Education', 'Retail', 'Logistics', 'Startups', 'SMEs', 'Enterprises'],
  },
  {
    id: 'hardware',
    number: '02',
    title: 'Hardware Design & Embedded Systems',
    tagline: 'Turning Electronic Ideas into Real Products',
    description:
      'CoreForge specializes in complete electronic product development from concept and schematic design to PCB manufacturing support and embedded firmware.',
    subsections: [
      {
        title: 'Electronics Product Design',
        icon: HiOutlineLightBulb,
        items: [
          'Circuit Design',
          'Product Architecture',
          'Component Selection',
          'Prototype Development',
        ],
      },
      {
        title: 'PCB Design Services',
        icon: HiOutlineChip,
        items: [
          'Schematic Design',
          'PCB Layout',
          'Multi-Layer PCB',
          'High-Speed PCB',
          'Design Review',
        ],
      },
      {
        title: 'Embedded Systems',
        icon: HiOutlineCog,
        items: [
          'STM32 Development',
          'ESP32 Development',
          'Arduino Solutions',
          'RTOS',
          'Firmware Development',
          'Driver Development',
        ],
      },
      {
        title: 'End-to-End PCB Development',
        icon: HiOutlineClipboardCheck,
        items: [
          'Requirement Analysis',
          'Schematic Capture',
          'PCB Layout',
          'Gerber Generation',
          'Manufacturing Support',
          'Assembly Support',
          'Testing',
          'Validation',
        ],
      },
      {
        title: 'Consulting Services',
        icon: HiOutlinePuzzle,
        items: [
          'Hardware Design Review',
          'PCB Optimization',
          'Embedded Consulting',
          'Product Development Guidance',
        ],
      },
    ],
  },
  {
    id: 'training',
    number: '03',
    title: 'Workshops, Training & DIY Kits',
    tagline: 'Learn by Building',
    description:
      'We believe engineering is best learned through practical experience. CoreForge conducts hands-on workshops, industrial training, and technical bootcamps that prepare students and professionals for real-world engineering challenges.',
    subsections: [
      {
        title: 'Training Programs',
        icon: HiOutlineAcademicCap,
        groups: [
          {
            label: 'Embedded Systems',
            items: ['Embedded C', 'STM32', 'ESP32', 'Arduino', 'IoT'],
          },
          {
            label: 'Hardware Design',
            items: ['PCB Design', 'Analog Electronics', 'Digital Electronics', 'Circuit Design'],
          },
          {
            label: 'Software Development',
            items: ['Web Development', 'Mobile App Development', 'Full Stack Development'],
          },
        ],
      },
      {
        title: 'Corporate & College Workshops',
        icon: HiOutlineDesktopComputer,
        items: [
          'Faculty Development Programs',
          'Industrial Workshops',
          'Student Bootcamps',
          'Internship Programs',
        ],
      },
      {
        title: 'DIY Electronics Kits',
        icon: HiOutlineBeaker,
        items: [
          'Beginner Kits',
          'IoT Kits',
          'Robotics Kits',
          'Embedded Learning Kits',
          'Custom Project Kits',
        ],
      },
      {
        title: 'Projects',
        icon: HiOutlinePuzzle,
        items: [
          'Final Year Projects',
          'Competition Projects',
          'Research Prototypes',
        ],
      },
    ],
  },
]

function ServiceSubsection({ sub }) {
  const Icon = sub.icon
  return (
    <div className="rounded-[20px] border border-black/6 bg-white/60 p-5 sm:p-6">
      <div className="flex items-start gap-3">
        {Icon && (
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-black text-white">
            <Icon className="h-5 w-5" />
          </div>
        )}
        <div className="flex-1">
          <h4 className="text-lg font-bold tracking-[-0.03em] text-neutral-950">{sub.title}</h4>
          {sub.description && (
            <p className="mt-2 text-sm leading-7 text-neutral-600">{sub.description}</p>
          )}
        </div>
      </div>

      {sub.items && (
        <ul className="mt-4 grid gap-y-1.5 sm:grid-cols-2">
          {sub.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-700">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-900" />
              {item}
            </li>
          ))}
        </ul>
      )}

      {sub.groups && (
        <div className="mt-4 space-y-4">
          {sub.groups.map((group) => (
            <div key={group.label}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">{group.label}</p>
              <ul className="mt-2 grid gap-y-1.5 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-700">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-900" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Main Categories"
        title="Everything we offer: built for clarity, speed, and real results."
        description="From custom software and hardware design to hands-on training and DIY kits, CoreForge covers the full engineering lifecycle."
      />

      <section className="px-4 py-14 sm:px-6 lg:py-20">
        <div className="section-shell">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.number}
                variants={fadeUp}
                id={service.id}
                className="overflow-hidden rounded-[30px] border border-black/8 bg-white/80"
              >
                {/* Service Header */}
                <div className="border-b border-black/8 bg-black px-6 py-6 sm:px-8">
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs font-semibold tracking-[0.3em] text-neutral-500">{service.number}</span>
                    <h2 className="text-xl font-bold tracking-[-0.04em] text-white sm:text-2xl">{service.title}</h2>
                  </div>
                  <p className="mt-2 pl-10 text-sm font-medium text-neutral-300">{service.tagline}</p>
                </div>

                {/* Service Body */}
                <div className="p-6 sm:p-8">
                  <p className="max-w-3xl text-sm leading-7 text-neutral-600">{service.description}</p>

                  {/* Subsections grid */}
                  <div className="mt-6 grid gap-4 lg:grid-cols-2">
                    {service.subsections.map((sub) => (
                      <ServiceSubsection key={sub.title} sub={sub} />
                    ))}
                  </div>

                  {/* Industries */}
                  {service.industries && (
                    <div className="mt-6 border-t border-black/6 pt-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">Industries We Serve</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {service.industries.map((industry) => (
                          <span key={industry} className="rounded-full bg-black px-4 py-1.5 text-xs font-medium text-white">
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>
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
