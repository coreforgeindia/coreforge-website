import { motion } from 'framer-motion'

export default function CoreForgeLoader({ duration = 3 }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex h-screen w-screen items-center justify-center bg-[#050505] selection:bg-none"
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Subtle background glow */}
        <div className="absolute h-48 w-48 rounded-full bg-white/5 blur-3xl animate-pulse" />

        <svg
          viewBox="0 0 500 100"
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto w-full max-w-[85vw] select-none sm:max-w-[550px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient
              id="silverGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#666666" />
              <stop offset="25%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#aaaaaa" />
              <stop offset="75%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#666666" />
            </linearGradient>
          </defs>

          {/* Base faint text outline */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="0.8"
            fill="none"
            style={{
              fontFamily: "'Nunito', 'Segoe UI', sans-serif",
              fontWeight: 900,
              fontSize: '60px',
              letterSpacing: '4px',
            }}
          >
            COREFORGE
          </text>

          {/* Animated drawing stroke text */}
          <motion.text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            stroke="url(#silverGradient)"
            strokeWidth="1.2"
            fill="url(#silverGradient)"
            initial={{
              strokeDasharray: 1000,
              strokeDashoffset: 1000,
              fillOpacity: 0,
            }}
            animate={{
              strokeDashoffset: [1000, 0, 0],
              fillOpacity: [0, 0.2, 1],
            }}
            transition={{
              duration: duration,
              times: [0, 0.65, 1],
              ease: 'easeInOut',
            }}
            style={{
              fontFamily: "'Nunito', 'Segoe UI', sans-serif",
              fontWeight: 900,
              fontSize: '60px',
              letterSpacing: '4px',
            }}
          >
            COREFORGE
          </motion.text>
        </svg>

        {/* Subtitle pulse indicator */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0, 1, 0.8] }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mt-4 text-[11px] font-bold uppercase tracking-[0.35em] text-neutral-400"
        >
          Engineering Lab
        </motion.p>
      </div>
    </motion.div>
  )
}
