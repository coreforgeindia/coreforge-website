import { useState } from 'react'

export default function BorderGlow({
  children,
  glowColor = '60 60 60',
  backgroundColor = '#ffffff',
  borderRadius = 28,
}) {
  const [style, setStyle] = useState({})

  const updateGlow = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100
    setStyle({
      background: `radial-gradient(circle at ${x}% ${y}%, rgba(${glowColor} / 0.22), transparent 36%)`,
    })
  }

  return (
    <div
      className="relative overflow-hidden border border-black/8"
      onMouseMove={updateGlow}
      onMouseLeave={() => setStyle({})}
      style={{ borderRadius, backgroundColor }}
    >
      <div className="absolute inset-0 transition duration-300" style={style} />
      <div className="relative">{children}</div>
    </div>
  )
}
