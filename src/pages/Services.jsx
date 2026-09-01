import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import WorkflowSection from '../sections/WorkflowSection'
import WebPackagesSection from '../sections/WebPackagesSection'
import { fadeUp, stagger } from '../utils/motion'
import {
  HiOutlineChip,
  HiOutlineCode,
  HiOutlineAcademicCap,
  HiArrowRight,
  HiCheck,
} from 'react-icons/hi'

const mainServices = [
  {
    slug: 'software',
    number: '01',
    title: 'Software & Tech Solutions',
    tagline: 'Digital Solutions Designed Around Your Business',
    description: "Every business is unique. We build technology specifically for your workflow instead of forcing your business to adapt to generic software.",
    icon: HiOutlineCode,
    subLinks: [
      { name: 'Custom Software Development', path: '/services/software/custom-software' },
      { name: 'Web Development & E-Commerce', path: '/services/software/web-development' },
      { name: 'Mobile App Development (Android & iOS)', path: '/services/software/mobile-apps' },
      { name: 'Business Intelligence & Dashboards', path: '/services/software/business-intelligence' },
    ],
    industries: ['Manufacturing', 'Healthcare', 'Education', 'Retail', 'Logistics', 'Startups', 'Enterprises'],
  },
  {
    slug: 'hardware',
    number: '02',
    title: 'Hardware Design & Embedded Systems',
    tagline: 'Turning Electronic Ideas into Real Products',
    description: 'CoreForge specializes in complete electronic product development: from concept and schematic design to PCB manufacturing support, RTOS, and embedded firmware.',
    icon: HiOutlineChip,
    subLinks: [
      { name: 'Electronics Product Design', path: '/services/hardware/product-design' },
      { name: 'PCB Design Services (2-layer to 8+ layer)', path: '/services/hardware/pcb-design' },
      { name: 'Embedded Systems & Firmware (STM32/ESP32)', path: '/services/hardware/embedded-systems' },
      { name: 'End-to-End PCB Development & Testing', path: '/services/hardware/end-to-end-pcb' },
      { name: 'Hardware Consulting & Design Review', path: '/services/hardware/consulting' },
    ],
    industries: ['IoT & Smart Devices', 'Industrial Automation', 'Consumer Electronics', 'Healthcare Devices', 'Automotive'],
  },
  {
    slug: 'training',
    number: '03',
    title: 'Workshops, Training & DIY Kits',
    tagline: 'Learn by Building',
    description: 'We believe engineering is best learned through practical experience. CoreForge conducts hands-on workshops, industrial training, and technical bootcamps that prepare students and engineers for real-world engineering challenges.',
    icon: HiOutlineAcademicCap,
    subLinks: [
      { name: 'Embedded Systems & IoT Bootcamps', path: '/services/training/embedded-training' },
      { name: 'Hardware & PCB Design Courses', path: '/services/training/hardware-courses' },
      { name: 'Software Development Programs', path: '/services/training/software-programs' },
      { name: 'Corporate & College Workshops (FDPs)', path: '/services/training/workshops' },
      { name: 'DIY Electronics & Robotics Kits', path: '/services/training/diy-kits' },
      { name: 'Academic & Competition Project Guidance', path: '/services/training/academic-projects' },
    ],
    industries: ['Engineering Colleges', 'Universities', 'Corporate R&D', 'Makerspaces', 'Polytechnics'],
  },
]

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="ENGINEERING CAPABILITIES"
        title="Everything we build: engineered for clarity, speed, and real results."
        description="From custom software and multi-layer PCB design to hands-on training and DIY kits, CoreForge covers the full engineering lifecycle."
      />

      {/* Main Categories Deep Dive */}
      <section className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="section-shell">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {mainServices.map((service) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.slug}
                  variants={fadeUp}
                  id={service.slug}
                  className="overflow-hidden rounded-[32px] border border-black/10 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  {/* Category Header */}
                  <div className="border-b border-black/10 bg-neutral-950 p-6 sm:p-8 text-white">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <span className="text-xs font-mono font-bold tracking-widest text-[#0d9488]">
                            CATEGORY {service.number}
                          </span>
                          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mt-0.5">
                            {service.title}
                          </h2>
                        </div>
                      </div>
                      <Link
                        to={`/services/${service.slug}`}
                        className="btn-primary !bg-white !text-black hover:!bg-neutral-200 self-start sm:self-auto !text-xs !py-2.5 !px-5"
                      >
                        Explore Vertical Overview
                        <HiArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                    <p className="mt-4 text-xs sm:text-sm text-neutral-300 max-w-2xl leading-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Sub-Services List */}
                  <div className="p-6 sm:p-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
                      Dedicated Specializations Under This Category
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {service.subLinks.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="group flex items-center justify-between rounded-xl border border-black/5 bg-[#fafafa] p-4 transition-all duration-200 hover:bg-black hover:text-white"
                        >
                          <div className="flex items-center gap-3">
                            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-black text-white group-hover:bg-white group-hover:text-black">
                              <HiCheck className="h-3 w-3" />
                            </span>
                            <span className="text-xs sm:text-sm font-bold">{sub.name}</span>
                          </div>
                          <HiArrowRight className="h-4 w-4 text-neutral-400 group-hover:text-white transition-transform group-hover:translate-x-1" />
                        </Link>
                      ))}
                    </div>

                    {/* Industries */}
                    <div className="mt-8 pt-6 border-t border-black/5 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold text-neutral-400 mr-2">Industries:</span>
                      {service.industries.map((ind) => (
                        <span key={ind} className="rounded-full bg-black/5 px-3 py-1 text-[11px] font-bold text-neutral-700">
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* 8-Step Engineering Workflow Pipeline */}
      <WorkflowSection />

      {/* Web Development Packages & Checklists */}
      <WebPackagesSection />
    </>
  )
}
