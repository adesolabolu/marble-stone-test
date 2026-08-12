import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { Link } from 'react-router'
import { projects } from '@/data/content'

const leftImages = projects.slice(0, 3)
const rightImages = projects.slice(3, 6)

function Column({
  items,
  y,
}: {
  items: typeof projects
  y: MotionValue<string>
}) {
  return (
    <motion.div style={{ y }} className="flex w-full flex-col gap-[3vh] will-change-transform">
      {items.map((p, i) => (
        <Link key={i} to={`/works/${p.slug}`} data-cursor="view" className="group mx-auto block h-[38vh] w-[85%] sm:w-[90%] md:w-full overflow-hidden transform-gpu backface-hidden">
          <img
            src={p.img}
            alt={p.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 transform-gpu backface-hidden"
          />
        </Link>
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
    <section id="works" ref={ref} className="relative h-[280vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-[#F8F9FA]">
        {/* image columns */}
        <div className="grid h-full w-full grid-cols-2 items-center gap-[2vw] px-[2vw] md:grid-cols-[1fr_1.2fr_1fr] md:gap-[3vh] md:px-[6vw]">
          <Column items={leftImages} y={yLeft} />
          <div className="hidden md:block" />
          <Column items={rightImages} y={yRight} />
        </div>

        {/* center title */}
        <motion.div
          style={{ scale }}
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center mix-blend-difference will-change-transform transform-gpu backface-hidden"
        >
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
