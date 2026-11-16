import { useEffect, useRef, useState } from 'react'

/**
 * Checks if WebGL is available in the current browser environment.
 */
function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas')
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    )
  } catch {
    return false
  }
}

/**
 * LiquidGlassRoot
 * Encapsulates @ybouane/liquidglass initialization, fallback handling,
 * and WebGL context lifecycle management.
 */
export default function LiquidGlassRoot({
  children,
  className = '',
  defaults = {},
  enabled = true,
  ...props
}) {
  const rootRef = useRef(null)
  const [webGLReady, setWebGLReady] = useState(false)
  const defaultsString = JSON.stringify(defaults)

  useEffect(() => {
    if (!enabled) return

    // Fallback checks
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    const prefersReducedTransparency = window.matchMedia(
      '(prefers-reduced-transparency: reduce)'
    ).matches
    const isMobile = window.innerWidth < 768

    if (
      prefersReducedMotion ||
      prefersReducedTransparency ||
      isMobile ||
      !isWebGLAvailable()
    ) {
      return
    }

    let instance = null
    let isCancelled = false

    async function setupLiquidGlass() {
      try {
        const { LiquidGlass } = await import('@ybouane/liquidglass')
        if (isCancelled || !rootRef.current) return

        const glassElements = rootRef.current.querySelectorAll('.liquid-glass-item')
        if (!glassElements || glassElements.length === 0) return

        instance = await LiquidGlass.init({
          root: rootRef.current,
          glassElements: Array.from(glassElements),
          defaults: {
            blurAmount: 0.15,
            refraction: 0.25,
            chromAberration: 0.015,
            edgeHighlight: 0.08,
            specular: 0.05,
            opacity: 0.95,
            cornerRadius: 16,
            shadowOpacity: 0.1,
            ...(defaultsString ? JSON.parse(defaultsString) : {}),
          },
        })

        if (isCancelled) {
          instance?.destroy?.()
        } else {
          setWebGLReady(true)
        }
      } catch (err) {
        // Fall back gracefully to CSS glass
        console.warn('LiquidGlass WebGL fallback active:', err)
      }
    }

    setupLiquidGlass()

    return () => {
      isCancelled = true
      try {
        instance?.destroy?.()
      } catch {
        // Safe tear down
      }
    }
  }, [enabled, defaultsString])

  return (
    <div
      ref={rootRef}
      className={`relative ${webGLReady ? 'liquid-glass-active' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
