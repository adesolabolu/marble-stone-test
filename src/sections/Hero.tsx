import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const line1 = 'LITHOS'.split('')
const line2 = 'STONE'.split('')

const letterAnim = {
  hidden: { y: '110%', rotate: 4 },
  show: (i: number) => ({
    y: '0%',
    rotate: 0,
    transition: { delay: 0.2 + i * 0.06, duration: 1, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section id="top" ref={ref} className="relative flex min-h-screen flex-col justify-between overflow-hidden px-6 pb-8 pt-28 md:px-10">
      <motion.div style={{ y, opacity }} className="flex flex-1 flex-col justify-between">
        <motion.p
          className="font-mono2 font-bold text-[11px] uppercase tracking-[0.35em] text-[#1A1D20]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          ( Artisans of natural stone — est. 2008 )
        </motion.p>

        <div className="select-none py-2">
          <h1 className="font-display font-extrabold leading-[0.82] tracking-tighter origin-bottom scale-y-[1.15] md:scale-y-100">
            <span className="block overflow-hidden whitespace-nowrap pr-[2vw] text-[12vw] md:text-[12vw]">
              {line1.map((ch, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  custom={i}
                  variants={letterAnim}
                  initial="hidden"
                  animate="show"
                >
                  {ch}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden whitespace-nowrap text-[12.5vw] text-[#0F172A] md:text-[12.5vw]">
              {line2.map((ch, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  custom={i + 4}
                  variants={letterAnim}
                  initial="hidden"
                  animate="show"
                >
                  {ch}
                </motion.span>
              ))}
            </span>
          </h1>
        </div>

        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-md flex-col gap-8">
            <motion.p
              className="text-sm leading-relaxed text-[#1A1D20] md:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              We restore, protect, and maintain architectural stone for properties
              that demand perfection. Marble, granite, terrazzo, and limestone —
              revived with mastery and care.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center bg-[#1A1D20] px-6 py-4 font-mono2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#F8F9FA] transition-colors hover:bg-[#0F172A]"
              >
                Get a free quote
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center border border-[#1A1D20]/20 px-6 py-4 font-mono2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#1A1D20] transition-colors hover:border-[#1A1D20]"
              >
                Explore services
              </a>
            </motion.div>
          </div>

          <motion.div
            className="flex items-center gap-10 font-mono2 font-bold text-[11px] uppercase tracking-[0.25em] text-[#1A1D20]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
          >
            <span className="hidden md:inline">Scroll ↓</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
