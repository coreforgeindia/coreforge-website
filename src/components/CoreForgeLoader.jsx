import { motion } from 'framer-motion'

/**
 * CoreForge fullscreen loader.
 *
 * @param {number}  duration  – animation cycle length in seconds (default 3)
 * @param {boolean} loop      – if true the shimmer repeats forever (use when offline / buffering)
 */
export default function CoreForgeLoader({ duration = 3, loop = false }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] flex h-screen w-screen items-center justify-center bg-[#050505] selection:bg-none"
    >
      <div className="relative flex flex-col items-center justify-center px-4 w-full">
        {/* Ambient background glow */}
        <div className="absolute h-72 w-72 rounded-full bg-white/10 blur-3xl animate-pulse" />

        {/* SVG logo animation */}
        <svg
          viewBox="0 0 650 120"
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto w-full max-w-[85vw] select-none sm:max-w-[750px] lg:max-w-[900px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Continuous silver shimmer gradient */}
            <motion.linearGradient
              id="continuousSilverGradient"
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

          {/* Shimmering silver text */}
          <motion.text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            stroke="url(#continuousSilverGradient)"
            strokeWidth="1.6"
            fill="url(#continuousSilverGradient)"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{
              opacity: loop ? [0, 1, 0.85, 1] : [0, 1, 1],
              scale: loop ? [0.96, 1, 1, 1] : [0.96, 1, 1],
            }}
            transition={{
              duration: loop ? duration * 1.2 : duration,
              times: loop ? [0, 0.2, 0.7, 1] : [0, 0.3, 1],
              ease: 'easeOut',
              repeat: loop ? Infinity : 0,
              repeatType: 'loop',
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

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: [0, 1, 0.9] }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mt-4 text-xs sm:text-sm font-extrabold uppercase tracking-[0.35em] text-neutral-300 text-center"
        >
          Innovate. Engineer. Deliver.
        </motion.p>

        {/* "Reconnecting…" message shown only in loop/offline mode */}
        {loop && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.7, 0.4, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 text-center"
          >
            Reconnecting…
          </motion.p>
        )}
      </div>
    </motion.div>
  )
}
