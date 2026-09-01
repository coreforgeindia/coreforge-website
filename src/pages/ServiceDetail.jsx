import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../utils/motion'
import { allServicesData } from '../utils/servicesData'
import {
  HiArrowRight,
  HiArrowLeft,
  HiCheck,
  HiOutlineCube,
  HiOutlineSparkles,
} from 'react-icons/hi'

export default function ServiceDetail() {
  const params = useParams()
  // Support both /services/:slug and /services/:category/:subSlug
  const slug = params.subSlug
    ? `${params.category}/${params.subSlug}`
    : params.slug || params.category

  const service = allServicesData[slug]

  if (!service) return <Navigate to="/services" replace />

  return (
    <>
      {/* ── Hero Banner ── */}
      <section className={`${service.heroBg} px-4 py-16 sm:px-6 sm:py-24`}>
        <div className="section-shell">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-400 mb-6 flex-wrap">
              <Link to="/services" className="hover:text-white transition-colors">
                All Services
              </Link>
              {service.parentSlug && (
                <>
                  <span>/</span>
                  <Link to={`/services/${service.parentSlug}`} className="hover:text-white transition-colors">
                    {service.parentTitle}
                  </Link>
                </>
              )}
              <span>/</span>
              <span className="text-white font-bold">{service.title}</span>
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0d9488] mb-3">
              {service.tagline}
            </p>
            <h1 className="font-heading text-[2.4rem] font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.6rem]">
              {service.title}
            </h1>
            <p className="mt-5 max-w-3xl text-sm sm:text-base leading-7 text-neutral-300">
              {service.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to={`/contact?service=${encodeURIComponent(service.title)}`}
                className="btn-primary !bg-white !text-black hover:!bg-neutral-200 shadow-lg"
              >
                Request Consultation
                <HiArrowRight className="h-4 w-4" />
              </Link>
              {service.parentSlug ? (
                <Link
                  to={`/services/${service.parentSlug}`}
                  className="btn-secondary !bg-transparent !text-white !border-white/20 hover:!bg-white/10"
                >
                  View Vertical Overview
                </Link>
              ) : (
                <Link
                  to="/portfolio"
                  className="btn-secondary !bg-transparent !text-white !border-white/20 hover:!bg-white/10"
                >
                  View Delivered Projects
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Sub-Services Grid (If Viewing Main Category) ── */}
      {service.subServices && (
        <section className="px-4 py-16 sm:px-6 lg:py-20 bg-[#fafafa] border-b border-black/5">
          <div className="section-shell">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              className="max-w-3xl mb-12"
            >
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0d9488]">
                DEDICATED SPECIALIZATIONS
              </span>
              <h2 className="mt-2 font-heading text-3xl font-bold tracking-[-0.03em] text-neutral-950 sm:text-4xl">
                Explore Individual Service Capabilities
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                Click any specialization below for in-depth technical specifications and deliverables.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
            >
              {service.subServices.map((sub) => (
                <motion.div key={sub.slug} variants={fadeUp} className="h-full">
                  <Link
                    to={`/services/${slug}/${sub.slug}`}
                    className="group flex flex-col justify-between h-full rounded-[24px] border border-black/10 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
                          <HiOutlineCube className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-bold text-[#0d9488] uppercase tracking-wider">
                          Dedicated Page
                        </span>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-neutral-950 mt-5 group-hover:text-black">
                        {sub.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-6">
                        {sub.desc}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-sm font-bold text-neutral-950 group-hover:text-[#0d9488]">
                      <span>Technical Details</span>
                      <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Core Capabilities & Features ── */}
      {service.features && (
        <section className="px-4 py-16 sm:px-6 lg:py-20 bg-white">
          <div className="section-shell">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              className="max-w-3xl mb-10"
            >
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0d9488]">
                KEY SPECIFICATIONS
              </span>
              <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-neutral-950">
                Core Engineering Capabilities
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {service.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="rounded-2xl border border-black/8 bg-[#fafafa] p-5 sm:p-6 flex items-start gap-3.5"
                >
                  <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-black text-white">
                    <HiCheck className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-xs sm:text-sm leading-6 text-neutral-800 font-medium">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Deliverables (If Sub-Service) ── */}
      {service.deliverables && (
        <section className="px-4 py-16 sm:px-6 lg:py-20 bg-[#fafafa] border-t border-black/5">
          <div className="section-shell">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              className="max-w-3xl mb-10"
            >
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0d9488]">
                GUARANTEED OUTPUTS
              </span>
              <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-neutral-950">
                What You Receive
              </h2>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="rounded-2xl border border-black/8 bg-white p-5 shadow-xs flex items-start gap-3.5">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-[#16a34a] text-white mt-0.5">
                    <HiCheck className="h-4 w-4" />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-neutral-800 leading-6">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Industries Served ── */}
      {service.industries && (
        <section className="px-4 py-12 sm:px-6 bg-white border-t border-black/5">
          <div className="section-shell">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-400 mb-4">
              Industries Served with this Capability
            </p>
            <div className="flex flex-wrap gap-2.5">
              {service.industries.map((ind) => (
                <span key={ind} className="rounded-full bg-black/5 border border-black/5 px-4 py-2 text-xs font-bold text-neutral-800">
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Call to Action ── */}
      <section className="px-4 py-16 sm:px-6 bg-[#f3f3f1]">
        <div className="section-shell">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-[28px] border border-black/10 bg-neutral-950 text-white p-8 sm:p-12 text-center shadow-xl"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#0d9488]">
              READY TO COMMENCE
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mt-2">
              Speak Directly with CoreForge Specialists
            </h3>
            <p className="mt-3 max-w-md mx-auto text-xs sm:text-sm leading-7 text-neutral-400">
              Discuss requirements, scope boundaries, and delivery timelines for {service.title.toLowerCase()}.
            </p>
            <div className="mt-7">
              <Link
                to={`/contact?service=${encodeURIComponent(service.title)}`}
                className="btn-primary !bg-white !text-black hover:!bg-neutral-200"
              >
                Initiate Project Discussion
                <HiArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
