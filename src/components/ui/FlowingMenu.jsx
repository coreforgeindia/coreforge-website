import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'

function FlowingMenu({
  items = [],
  speed = 18,
  textColor = '#111111',
  bgColor = '#f7f7f5',
  marqueeBgColor = '#111111',
  marqueeTextColor = '#f7f7f5',
  borderColor = 'rgba(17,17,17,0.08)',
}) {
  return (
    <div className="w-full overflow-hidden rounded-[32px] border" style={{ backgroundColor: bgColor, borderColor }}>
      <nav className="flex h-full flex-col">
        {items.map((item, idx) => (
          <MenuItem
            key={idx}
            {...item}
            speed={speed}
            textColor={textColor}
            marqueeBgColor={marqueeBgColor}
            marqueeTextColor={marqueeTextColor}
            borderColor={borderColor}
          />
        ))}
      </nav>
    </div>
  )
}

function MenuItem({ link, text, image, speed, textColor, marqueeBgColor, marqueeTextColor, borderColor }) {
  const itemRef = useRef(null)
  const marqueeRef = useRef(null)
  const marqueeInnerRef = useRef(null)
  const animationRef = useRef(null)
  const [repetitions, setRepetitions] = useState(4)

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0)
    const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height)
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom'
  }

  const distMetric = (x, y, x2, y2) => {
    const xDiff = x - x2
    const yDiff = y - y2
    return xDiff * xDiff + yDiff * yDiff
  }

  useEffect(() => {
    const calculateRepetitions = () => {
      if (!marqueeInnerRef.current) return
      const marqueeContent = marqueeInnerRef.current.querySelector('.marquee__part')
      if (!marqueeContent) return
      const contentWidth = marqueeContent.offsetWidth
      const viewportWidth = window.innerWidth
      const needed = Math.ceil(viewportWidth / Math.max(contentWidth, 1)) + 2
      setRepetitions(Math.max(4, needed))
    }

    calculateRepetitions()
    window.addEventListener('resize', calculateRepetitions)
    return () => window.removeEventListener('resize', calculateRepetitions)
  }, [text, image])

  useEffect(() => {
    const setupMarquee = () => {
      if (!marqueeInnerRef.current) return
      const marqueeContent = marqueeInnerRef.current.querySelector('.marquee__part')
      if (!marqueeContent) return

      const contentWidth = marqueeContent.offsetWidth
      if (contentWidth === 0) return

      animationRef.current?.kill()
      animationRef.current = gsap.to(marqueeInnerRef.current, {
        x: -contentWidth,
        duration: speed,
        ease: 'none',
        repeat: -1,
      })
    }

    const timer = setTimeout(setupMarquee, 50)
    return () => {
      clearTimeout(timer)
      animationRef.current?.kill()
    }
  }, [text, image, repetitions, speed])

  const handleMouseEnter = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return
    const rect = itemRef.current.getBoundingClientRect()
    const x = ev.clientX - rect.left
    const y = ev.clientY - rect.top
    const edge = findClosestEdge(x, y, rect.width, rect.height)

    gsap
      .timeline({ defaults: { duration: 0.6, ease: 'expo' } })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0)
  }

  const handleMouseLeave = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return
    const rect = itemRef.current.getBoundingClientRect()
    const x = ev.clientX - rect.left
    const y = ev.clientY - rect.top
    const edge = findClosestEdge(x, y, rect.width, rect.height)

    gsap
      .timeline({ defaults: { duration: 0.6, ease: 'expo' } })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
  }

  return (
    <div ref={itemRef} className="relative flex-1 overflow-hidden border-t first:border-t-0" style={{ borderColor }}>
      <a
        className="flex min-h-[112px] items-center justify-center px-6 py-8 text-center text-2xl font-semibold uppercase tracking-[0.16em] sm:text-4xl"
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ color: textColor }}
      >
        {text}
      </a>
      <div ref={marqueeRef} className="pointer-events-none absolute inset-0 overflow-hidden translate-y-[101%]" style={{ backgroundColor: marqueeBgColor }}>
        <div className="h-full w-full overflow-hidden">
          <div ref={marqueeInnerRef} className="flex h-full w-fit items-center will-change-transform" aria-hidden="true">
            {[...Array(repetitions)].map((_, idx) => (
              <div className="marquee__part flex flex-shrink-0 items-center" key={idx} style={{ color: marqueeTextColor }}>
                <span className="whitespace-nowrap px-4 text-2xl font-medium uppercase tracking-[0.16em] sm:text-4xl">{text}</span>
                <div
                  className="mx-6 h-16 w-44 rounded-full bg-cover bg-center sm:h-20 sm:w-56"
                  style={{ backgroundImage: `url(${image})` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlowingMenu
