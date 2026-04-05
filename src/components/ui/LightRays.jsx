import { useRef, useEffect } from 'react'
import { Renderer, Program, Triangle, Mesh } from 'ogl'

const DEFAULT_COLOR = '#ffffff'

const hexToRgb = (hex) => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return m ? [parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255] : [1, 1, 1]
}

export default function LightRays({
  raysColor = DEFAULT_COLOR,
  raysSpeed = 1,
  lightSpread = 0.5,
  rayLength = 1.8,
  fadeDistance = 1,
  mouseInfluence = 0.1,
  className = '',
}) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const renderer = new Renderer({ alpha: true, dpr: Math.min(window.devicePixelRatio, 2) })
    const gl = renderer.gl
    gl.canvas.style.width = '100%'
    gl.canvas.style.height = '100%'
    containerRef.current.appendChild(gl.canvas)

    const mouse = { x: 0.5, y: 0.5 }
    const smoothMouse = { x: 0.5, y: 0.5 }

    const program = new Program(gl, {
      vertex: `
        attribute vec2 position;
        varying vec2 vUv;
        void main() {
          vUv = position * 0.5 + 0.5;
          gl_Position = vec4(position, 0.0, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform float iTime;
        uniform vec2 iResolution;
        uniform vec3 raysColor;
        uniform vec2 mousePos;
        uniform float raysSpeed;
        uniform float lightSpread;
        uniform float rayLength;
        uniform float fadeDistance;
        uniform float mouseInfluence;
        varying vec2 vUv;

        float rand(vec2 co) {
          return fract(sin(dot(co.xy, vec2(12.9898,78.233))) * 43758.5453);
        }

        void main() {
          vec2 uv = vUv;
          vec2 center = vec2(0.5, -0.15);
          vec2 target = mix(center, mousePos, mouseInfluence);
          vec2 delta = uv - target;
          float angle = atan(delta.y, delta.x);
          float radius = length(delta);

          float rays = abs(sin(angle * 14.0 + iTime * raysSpeed)) * 0.45;
          rays += abs(sin(angle * 23.0 - iTime * raysSpeed * 0.7)) * 0.24;
          float spread = pow(max(0.0, 1.0 - radius / rayLength), 1.0 / max(lightSpread, 0.001));
          float fade = smoothstep(fadeDistance, 0.0, radius);
          float grain = rand(uv + iTime * 0.001) * 0.04;

          vec3 color = raysColor * (rays + grain) * spread * fade;
          gl_FragColor = vec4(color, spread * 0.9);
        }
      `,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: [0, 0] },
        raysColor: { value: hexToRgb(raysColor) },
        mousePos: { value: [0.5, 0.5] },
        raysSpeed: { value: raysSpeed },
        lightSpread: { value: lightSpread },
        rayLength: { value: rayLength },
        fadeDistance: { value: fadeDistance },
        mouseInfluence: { value: mouseInfluence },
      },
    })

    const mesh = new Mesh(gl, { geometry: new Triangle(gl), program })
    let frameId = null

    const resize = () => {
      if (!containerRef.current) return
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
      program.uniforms.iResolution.value = [gl.canvas.width, gl.canvas.height]
    }

    const onMouseMove = (event) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      mouse.x = (event.clientX - rect.left) / rect.width
      mouse.y = (event.clientY - rect.top) / rect.height
    }

    const render = (time) => {
      program.uniforms.iTime.value = time * 0.001
      smoothMouse.x += (mouse.x - smoothMouse.x) * 0.06
      smoothMouse.y += (mouse.y - smoothMouse.y) * 0.06
      program.uniforms.mousePos.value = [smoothMouse.x, smoothMouse.y]
      renderer.render({ scene: mesh })
      frameId = requestAnimationFrame(render)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove)
    frameId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      if (gl.canvas.parentNode) gl.canvas.parentNode.removeChild(gl.canvas)
    }
  }, [fadeDistance, lightSpread, mouseInfluence, rayLength, raysColor, raysSpeed])

  return <div ref={containerRef} className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`.trim()} />
}
