import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../utils/motion'
import {
  HiOutlineDatabase,
  HiOutlineSearch,
  HiOutlineRefresh,
  HiOutlineShieldCheck,
  HiOutlineBeaker,
  HiOutlineCloudUpload,
  HiOutlineCheckCircle,
  HiOutlineThumbUp,
} from 'react-icons/hi'

const steps = [
  {
    num: '01',
    title: 'BACKUP',
    desc: 'Secure full state, dependencies, configuration, and data before initiation.',
    icon: HiOutlineDatabase,
    badgeColor: 'bg-[#1e3a8a]',
  },
  {
    num: '02',
    title: 'INSPECT',
    desc: 'Analyze architecture, schematic/code structure, and technical requirements.',
    icon: HiOutlineSearch,
    badgeColor: 'bg-[#0d9488]',
  },
  {
    num: '03',
    title: 'UPDATE',
    desc: 'Execute clean engineering development, board routing, or feature modules.',
    icon: HiOutlineRefresh,
    badgeColor: 'bg-[#2563eb]',
  },
  {
    num: '04',
    title: 'CHECK',
    desc: 'Perform linting, design rule checks (DRC), and static code analysis.',
    icon: HiOutlineShieldCheck,
    badgeColor: 'bg-[#9333ea]',
  },
  {
    num: '05',
    title: 'TEST',
    desc: 'Unit testing, signal integrity validation, API tests, and cross-device QA.',
    icon: HiOutlineBeaker,
    badgeColor: 'bg-[#eab308]',
  },
  {
    num: '06',
    title: 'DEPLOY',
    desc: 'Staging release, cloud rollout, or prototype fabrication handoff.',
    icon: HiOutlineCloudUpload,
    badgeColor: 'bg-[#16a34a]',
  },
  {
    num: '07',
    title: 'VERIFY',
    desc: 'Telemetry validation, live end-to-end testing, and performance benchmark.',
    icon: HiOutlineCheckCircle,
    badgeColor: 'bg-[#0f766e]',
  },
  {
    num: '08',
    title: 'APPROVE',
    desc: 'Client walk-through, deliverable sign-off, and handover of full source code.',
    icon: HiOutlineThumbUp,
    badgeColor: 'bg-[#000000]',
  },
]

export default function WorkflowSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:py-24 bg-white border-y border-black/5">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0d9488]">
            ENGINEERING DISCIPLINE
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-[-0.03em] text-neutral-950 sm:text-4xl lg:text-5xl">
            Our 8-Step Execution Pipeline
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-7 text-neutral-600">
            From initial concept to production sign-off: how CoreForge delivers zero-defect software, hardware, and embedded systems.
          </p>
        </motion.div>

        {/* 8-Step Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.num}
                variants={fadeUp}
                className="relative rounded-2xl border border-black/10 bg-[#fafafa] p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-black tracking-widest text-neutral-400">
                    STEP {step.num}
                  </span>
                  <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${step.badgeColor} text-white shadow-xs`}>
                    <Icon className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="font-heading text-lg font-bold text-neutral-950 tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-6 text-neutral-600">
                  {step.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
