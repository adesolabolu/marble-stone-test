const fs = require('fs');

const code = `import { useRef } from 'react'
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
    <motion.div style={{ y }} className="flex w-full flex-col gap-[3vh]">
      {items.map((p, i) => (
        <Link key={i} to={\`/works/\${p.slug}\`} data-cursor="view" className="group block h-[38vh] w-full overflow-hidden">
          <img
            src={p.img}
            alt={p.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
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
    <section ref={ref} className="relative h-[280vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-[#F8F9FA]">
        {/* image columns */}
        <div className="grid h-full w-full grid-cols-2 items-center gap-[3vh] px-[3vh] md:grid-cols-[1fr_1.2fr_1fr] md:px-[6vw]">
          <Column items={leftImages} y={yLeft} />
          <div className="hidden md:block" />
          <Column items={rightImages} y={yRight} />
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
`

fs.writeFileSync('src/sections/SplitScroll.tsx', code);
