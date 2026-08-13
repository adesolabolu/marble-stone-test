import { useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
  useScroll,
} from 'framer-motion'

import marbleImg from '@/assets/images/marble_texture_1786471487386.jpg'
import graniteImg from '@/assets/images/granite_texture_1786471500714.jpg'
import terrazzoImg from '@/assets/images/terrazzo_texture_1786471515129.jpg'
import limestoneImg from '@/assets/images/limestone_texture_1786471563558.jpg'
import travertineImg from '@/assets/images/travertine_texture_1786471578831.jpg'
import onyxImg from '@/assets/images/onyx_texture_1786471631015.jpg'

const surfacesData = [
  {
    title: 'Marble',
    category: 'Metamorphic Rock',
    year: 'Classic',
    img: marbleImg,
  },
  {
    title: 'Granite',
    category: 'Igneous Rock',
    year: 'Durable',
    img: graniteImg,
  },
  {
    title: 'Terrazzo',
    category: 'Composite Material',
    year: 'Modern',
    img: terrazzoImg,
  },
  {
    title: 'Limestone',
    category: 'Sedimentary Rock',
    year: 'Natural',
    img: limestoneImg,
  },
  {
    title: 'Travertine',
    category: 'Terrestrial Sedimentary',
    year: 'Porous',
    img: travertineImg,
  },
  {
    title: 'Onyx',
    category: 'Banded Calcite',
    year: 'Translucent',
    img: onyxImg,
  },
]

function MobileParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%'])

  return (
    <div ref={ref} className="col-span-3 mt-2 aspect-[3/2] w-full overflow-hidden md:hidden">
      <motion.img
        style={{ y, scale: 1.3 }}
        src={src}
        alt={alt}
        className="h-full w-full object-cover will-change-transform"
      />
    </div>
  )
}

export default function Surfaces() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<number | null>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 200, damping: 25, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 200, damping: 25, mass: 0.5 })
  const velocity = useVelocity(springX)
  const rotate = useTransform(velocity, [-1200, 1200], [-10, 10], { clamp: true })

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
  }

  return (
    <section id="surfaces" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mb-8 flex flex-col items-start gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
        <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tighter md:text-7xl">
          Surfaces
        </h2>
      </div>

      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={() => setActive(null)}
        className="relative"
      >
        {/* floating preview */}
        <AnimatePresence>
          {active !== null && (
            <motion.div
              className="pointer-events-none absolute left-0 top-0 z-20 hidden md:block will-change-transform"
              style={{ x: springX, y: springY }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                style={{ rotate }}
                className="relative aspect-[3/2] w-[26vw] -translate-x-1/2 -translate-y-1/2 overflow-hidden will-change-transform"
              >
                {surfacesData.map((s, i) => (
                  <motion.img
                    key={s.title}
                    src={s.img}
                    alt={s.title}
                    className="absolute inset-0 h-full w-full object-cover will-change-[transform,opacity]"
                    initial={false}
                    animate={{
                      opacity: active === i ? 1 : 0,
                      scale: active === i ? 1 : 1.15,
                    }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  />
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* rows */}
        <div className="border-t border-[#1A1D20]/15">
          {surfacesData.map((s, i) => (
            <div
              key={s.title}
              onMouseEnter={() => setActive(i)}
              className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-4 overflow-hidden border-b border-[#1A1D20]/15 py-6 md:grid-cols-[3rem_1fr_auto_5rem] md:gap-8 md:py-9"
            >
              <span className="font-mono2 text-[11px] tracking-[0.2em] text-[#1A1D20] transition-colors duration-500 group-hover:text-[#0F172A]">
                {(i + 1).toString().padStart(2, '0')}
              </span>
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight transition-all duration-500 group-hover:translate-x-4 group-hover:text-[#1A1D20] md:text-5xl md:group-hover:translate-x-8">
                {s.title}
              </h3>
              <span className="hidden font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#1A1D20] md:block">
                {s.category}
              </span>
              <span className="text-right font-mono2 text-[11px] tracking-[0.2em] text-[#1A1D20]">
                {s.year}
              </span>

              {/* mobile thumb */}
              <MobileParallaxImage src={s.img} alt={s.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
