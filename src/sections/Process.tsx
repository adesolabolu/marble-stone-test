import { motion } from 'framer-motion'

const steps = [
  {
    title: "Assessment & Diagnostic Inspection",
    desc: "A thorough evaluation of the stone's condition, identifying the stone type, structural integrity, and depth of damage."
  },
  {
    title: "Surrounding Area Protection",
    desc: "Masking off walls, baseboards, cabinets, and wood trim to ensure your home remains pristine and protected from any splashes."
  },
  {
    title: "Mechanical Honing & Grinding",
    desc: "Removing the damaged surface layer using water-fed diamond abrasive pads. This is a dustless process that flattens and smooths the stone."
  },
  {
    title: "Polishing & Impregnating Sealer",
    desc: "Achieving the desired finish (matte, satin, or high-gloss) followed by a deep penetrating sealer to prevent future absorption."
  },
  {
    title: "Post-Service Care Consultation",
    desc: "We leave you with a clean floor and a customized maintenance plan, educating you on proper pH-neutral cleaning routines."
  }
]

export default function Process() {
  return (
    <section id="process" className="px-6 py-24 md:px-10 md:py-36 bg-[#F8F9FA] text-[#1A1D20]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 md:mb-24 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between border-b border-[#1A1D20]/15 pb-10">
          <div className="md:w-1/2">
            <h2 className="mb-4 font-display text-[10vw] sm:text-5xl md:text-6xl font-extrabold uppercase leading-[0.85] tracking-tighter">
              Restoration <span className="text-[#0F172A]/40">Process</span>
            </h2>
            <p className="font-mono2 text-xs md:text-sm uppercase tracking-[0.1em] text-[#1A1D20]/70">
              Dustless. Methodical. Pristine.
            </p>
          </div>
          <div className="md:w-1/3 text-sm leading-relaxed opacity-80">
            We understand the anxiety of having contractors in your home. Our 5-step workflow guarantees a completely dust-free environment with zero mess left behind.
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl md:mt-24">
          {/* Main vertical line */}
          <div className="absolute bottom-0 left-[34px] top-0 w-2 rounded-full bg-[#1A1D20]/5 md:left-1/2 md:-translate-x-1/2" />

          <div className="flex flex-col gap-12 md:gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex flex-col md:flex-row md:items-center py-4 ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Side */}
                <div className={`flex flex-1 pl-24 pt-4 md:w-1/2 md:p-0 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:justify-end'}`}>
                  <div
                    className={`flex flex-col ${
                      idx % 2 === 0 ? 'md:items-start md:text-left' : 'md:items-end md:text-right'
                    }`}
                  >
                    <span className="mb-3 font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#1A1D20]/40">
                      Phase 0{idx + 1}
                    </span>
                    <h3 className="mb-4 font-display text-xl font-bold uppercase tracking-tight sm:text-2xl md:text-3xl">
                      {step.title}
                    </h3>
                    <p className="max-w-sm text-sm leading-relaxed text-[#1A1D20]/70">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="absolute left-[8px] top-4 flex h-[60px] w-[60px] md:h-20 md:w-20 items-center justify-center rounded-full border-[6px] border-[#F8F9FA] bg-[#1A1D20] text-[#F8F9FA] shadow-lg shadow-[#1A1D20]/10 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                  <span className="font-mono2 text-lg md:text-xl font-bold leading-none">
                    0{idx + 1}
                  </span>
                </div>

                {/* Empty Side for alignment */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
