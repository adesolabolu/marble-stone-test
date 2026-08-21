import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Shield, Sparkles, Activity, Layers, HeartHandshake } from 'lucide-react'

const steps = [
  {
    num: "01",
    phase: "PHASE 01",
    title: "Assessment & Diagnostic Inspection",
    desc: "A thorough microscopic and chemical evaluation of your stone's condition, identifying the exact geological classification, existing sealant integrity, and depth of surface etching or wear patterns.",
    tag: "Non-Destructive Testing",
    icon: Activity,
    deliverables: ["Geological Stone ID", "Depth Calibration", "Custom Restoration Plan"]
  },
  {
    num: "02",
    phase: "PHASE 02",
    title: "Surrounding Area Protection",
    desc: "Masking and hermetically sealing adjoining walls, baseboards, custom cabinetry, hardwood transitions, and fixtures. We ensure your residence remains completely pristine throughout the engagement.",
    tag: "Total Home Safeguard",
    icon: Shield,
    deliverables: ["Protective Poly-Shielding", "Zero-Residue Taping", "Air Containment"]
  },
  {
    num: "03",
    phase: "PHASE 03",
    title: "Mechanical Diamond Honing",
    desc: "Systematically removing damaged crystal layers using water-fed, industrial diamond abrasive pads. Our closed-loop wet grinding process is 100% dust-free and levels surface unevenness.",
    tag: "100% Dustless Technology",
    icon: Layers,
    deliverables: ["Diamond-Resin Progression", "Etch & Scratch Eradication", "Liipage Flattening"]
  },
  {
    num: "04",
    phase: "PHASE 04",
    title: "Polishing & Nano-Impregnation",
    desc: "Restoring the precise desired sheen—from museum matte and satin hone to mirror high-gloss—followed by deep-penetrating, breathable fluoropolymer sealers to repel future moisture and oils.",
    tag: "Precision Micro-Finish",
    icon: Sparkles,
    deliverables: ["Custom Sheen Level", "Sub-Surface Sealant", "Hydrophobic Shield"]
  },
  {
    num: "05",
    phase: "PHASE 05",
    title: "Post-Service Care & Consultation",
    desc: "We deliver a comprehensive handover inspection, complete with a customized care guide and pH-neutral maintenance recommendations to protect your architectural investment for generations.",
    tag: "Generational Longevity",
    icon: HeartHandshake,
    deliverables: ["Client Handover Review", "pH-Neutral Care Protocol", "Maintenance Schedule"]
  }
]

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  })

  return (
    <section id="process" className="overflow-hidden px-6 py-24 md:px-10 md:py-36 bg-[#F8F9FA] text-[#1A1D20]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 md:mb-24 flex flex-col gap-3 border-b border-[#1A1D20]/15 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[0.9] tracking-tighter break-words">
              Our <span className="text-[#0F172A]/40">Process</span>
            </h2>
          </div>
          <p className="max-w-sm font-mono2 text-[11px] uppercase tracking-wider text-[#1A1D20]/70">
            Dustless. Precision Diamond Honing. Pristine Execution.
          </p>
        </div>

        <div ref={containerRef} className="relative mx-auto mt-16 max-w-5xl md:mt-24">
          {/* Background Line */}
          <div className="absolute bottom-0 left-[28px] top-0 w-1 rounded-full bg-[#1A1D20]/10 md:left-1/2 md:-translate-x-1/2" />
          
          {/* Animated Progress Line */}
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute bottom-0 left-[28px] top-0 w-1 origin-top rounded-full bg-[#1A1D20] md:left-1/2 md:-translate-x-1/2"
          />

          <div className="flex flex-col gap-16 md:gap-24">
            {steps.map((step, idx) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex flex-col md:flex-row md:items-center ${
                    idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Side */}
                  <div className={`flex flex-1 pl-20 md:w-1/2 md:p-0 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:justify-end'}`}>
                    <div
                      className={`flex w-full flex-col ${
                        idx % 2 === 0 ? 'md:items-start md:text-left' : 'md:items-end md:text-right'
                      }`}
                    >
                      <div className={`mb-4 flex items-center gap-3 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                        <span className="rounded-full border border-[#1A1D20]/20 px-3 py-1 font-mono2 text-[10px] uppercase tracking-[0.2em] text-[#1A1D20]">
                          {step.phase}
                        </span>
                        <span className="font-mono2 text-[10px] uppercase tracking-widest text-[#1A1D20]/50">
                          {step.tag}
                        </span>
                      </div>

                      <h3 className="mb-4 font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl md:text-4xl">
                        {step.title}
                      </h3>
                      <p className="mb-6 text-sm leading-relaxed text-[#1A1D20]/75 md:text-base">
                        {step.desc}
                      </p>

                      <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                        {step.deliverables.map((item, dIdx) => (
                          <span
                            key={dIdx}
                            className="font-mono2 text-[10px] uppercase tracking-wider text-[#1A1D20]/60 bg-[#1A1D20]/5 px-2.5 py-1"
                          >
                            ✓ {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-[8px] top-0 flex h-11 w-11 md:h-14 md:w-14 items-center justify-center rounded-full border-[4px] border-[#F8F9FA] bg-[#1A1D20] text-[#F8F9FA] shadow-lg shadow-[#1A1D20]/10 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                    <Icon className="h-4 w-4 md:h-5 md:w-5" />
                  </div>

                  {/* Empty Side for alignment */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

