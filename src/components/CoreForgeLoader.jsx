import { motion } from 'framer-motion'

export default function CoreForgeLoader({ duration = 3 }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] flex h-screen w-screen items-center justify-center bg-[#050505] selection:bg-none"
    >
      <div className="relative flex flex-col items-center justify-center px-4 w-full">
        {/* Ambient background glow */}
        <div className="absolute h-72 w-72 rounded-full bg-white/10 blur-3xl animate-pulse" />

        {/* Large, prominent SVG container (Double size) */}
        <svg
          viewBox="0 0 650 120"
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto w-full max-w-[85vw] select-none sm:max-w-[750px] lg:max-w-[900px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Smooth moving silver shimmer gradient */}
            <motion.linearGradient
              id="continuousSilverGradientLarge"
              gradientUnits="userSpaceOnUse"
              initial={{ x1: '-100%', x2: '0%' }}
              animate={{ x1: ['-100%', '100%'], x2: ['0%', '200%'] }}
              transition={{
                duration: 2.0,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <stop offset="0%" stopColor="#555555" />
              <stop offset="25%" stopColor="#999999" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="75%" stopColor="#aaaaaa" />
              <stop offset="100%" stopColor="#555555" />
            </motion.linearGradient>
          </defs>

          {/* Faint base text */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1.2"
            fill="none"
            style={{
              fontFamily: "'Nunito', 'Segoe UI', sans-serif",
              fontWeight: 900,
              fontSize: '76px',
              letterSpacing: '8px',
            }}
          >
            COREFORGE
          </text>

          {/* Continuous smooth shimmering silver text */}
          <motion.text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            stroke="url(#continuousSilverGradientLarge)"
            strokeWidth="1.6"
            fill="url(#continuousSilverGradientLarge)"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: [0, 1, 1], scale: [0.96, 1, 1] }}
            transition={{
              duration: duration,
              times: [0, 0.3, 1],
              ease: 'easeOut',
            }}
            style={{
              fontFamily: "'Nunito', 'Segoe UI', sans-serif",
              fontWeight: 900,
              fontSize: '76px',
              letterSpacing: '8px',
            }}
          >
            COREFORGE
          </motion.text>
        </svg>

        {/* Subtitle / Tagline: Innovate. Engineer. Deliver. */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: [0, 1, 0.9] }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mt-4 text-xs sm:text-sm font-extrabold uppercase tracking-[0.35em] text-neutral-300 text-center"
        >
          Innovate. Engineer. Deliver.
        </motion.p>
      </div>
    </motion.div>
  )
}
