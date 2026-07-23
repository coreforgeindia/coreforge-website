import { motion } from "framer-motion";

export default function CoreForgeLoader({
  duration = 5,
}: {
  duration?: number;
}) {
  return (
    <div className="fixed inset-0 z-[9999] flex h-screen w-screen items-center justify-center bg-black">
      <div className="h-[200px] w-full">
        <div className="flex h-full w-full items-center justify-center">
          <svg
            viewBox="0 0 500 100"
            xmlns="http://www.w3.org/2000/svg"
            className="h-auto w-full max-w-[90vw] select-none sm:max-w-[600px]"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient
                id="silverGradient"
                gradientUnits="userSpaceOnUse"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#8f8f8f" />
                <stop offset="25%" stopColor="#f8f8f8" />
                <stop offset="50%" stopColor="#bdbdbd" />
                <stop offset="75%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#8f8f8f" />
              </linearGradient>

              <radialGradient
                id="revealMask"
                gradientUnits="userSpaceOnUse"
                r="28%"
                cx="50%"
                cy="50%"
              >
                <stop offset="0%" stopColor="white" />
                <stop offset="100%" stopColor="black" />
              </radialGradient>

              <mask id="textMask">
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  fill="url(#revealMask)"
                />
              </mask>
            </defs>

            {/* Faint silver base outline */}
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              stroke="#a9a9a9"
              strokeWidth="0.45"
              fill="transparent"
              style={{
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: 800,
                fontSize: "67px",
                letterSpacing: "2px",
                opacity: 0.45,
              }}
            >
              COREFORGE
            </text>

            {/* Draw-on white/silver outline */}
            <motion.text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              stroke="#f5f5f5"
              strokeWidth="0.55"
              fill="transparent"
              initial={{
                strokeDashoffset: 1000,
                strokeDasharray: 1000,
              }}
              animate={{
                strokeDashoffset: 0,
              }}
              transition={{
                duration,
                ease: "easeOut",
              }}
              style={{
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: 800,
                fontSize: "67px",
                letterSpacing: "2px",
              }}
            >
              COREFORGE
            </motion.text>

            {/* Silver highlight layer */}
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              stroke="url(#silverGradient)"
              strokeWidth="0.7"
              mask="url(#textMask)"
              fill="transparent"
              style={{
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: 800,
                fontSize: "67px",
                letterSpacing: "2px",
              }}
            >
              COREFORGE
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
