import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import work1 from '@/assets/images/marble_floor_1786158213406.jpg'
import work2 from '@/assets/images/limestone_facade_1786158222568.jpg'
import work3 from '@/assets/images/terrazzo_floor_1786158232435.jpg'
import work4 from '@/assets/images/granite_monument_1786158241878.jpg'
import work5 from '@/assets/images/travertine_spa_1786158252358.jpg'
import work6 from '@/assets/images/backlit_onyx_1786158262441.jpg'

const leftImages = [work1, work2, work3]
const rightImages = [work4, work5, work6]

function Column({
  images,
  y,
}: {
  images: string[]
  y: MotionValue<string>
}) {
  return (
    <motion.div style={{ y }} className="flex w-full flex-col gap-[3vh]">
      {images.map((src, i) => (
        <div key={i} className="h-[38vh] w-full overflow-hidden">
          <img
            src={src}
            alt=""
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      ))}
    </motion.div>
  )
}

export default function SplitScroll() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  const yLeft = useTransform(scrollYProgress, [0, 1], ['2%', '-34%'])
  const yRight = useTransform(scrollYProgress, [0, 1], ['-34%', '2%'])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92])

  return (
    <section ref={ref} className="relative h-[280vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-[#F8F9FA]">
        {/* image columns */}
        <div className="grid h-full w-full grid-cols-2 items-center gap-[3vh] px-[3vh] md:grid-cols-[1fr_1.2fr_1fr] md:px-[6vw]">
          <Column images={leftImages} y={yLeft} />
          <div className="hidden md:block" />
          <Column images={rightImages} y={yRight} />
        </div>

        {/* center title */}
        <motion.div
          style={{ scale }}
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center mix-blend-difference"
        >
          <p className="mb-4 font-mono2 text-[11px] uppercase tracking-[0.4em] text-[#F8F9FA]">
            ( 2024 — 2026 )
          </p>
          <h2 className="text-center font-display text-[11vw] font-extrabold uppercase leading-[0.85] tracking-tighter text-[#F8F9FA] md:text-[9vw]">
            Selected
            <br />
            <span>Works</span>
          </h2>
        </motion.div>
      </div>
    </section>
  )
}
