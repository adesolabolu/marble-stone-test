import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Shield, Sparkles, Activity, Layers, HeartHandshake, ArrowRight } from 'lucide-react'

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
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end']
  })

  // Horizontal translation for cards track across vertical scroll range - reaching the final card cleanly
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%'])

  return (
    <section
      id="process"
      ref={targetRef}
      className="relative h-[380vh] bg-[#F8F9FA] text-[#1A1D20]"
    >
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden px-6 py-6 sm:px-10 sm:py-8 md:px-14 md:py-10">
        {/* Top Header */}
        <div className="mb-6 flex flex-col gap-3 border-b border-[#1A1D20]/15 pb-4 sm:flex-row sm:items-end sm:justify-between md:mb-8">
          <div>
            <h2 className="font-display text-2xl font-extrabold uppercase tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Our <span className="text-[#0F172A]/40">Process</span>
            </h2>
          </div>

          <p className="hidden max-w-sm font-mono2 text-[11px] uppercase tracking-wider text-[#1A1D20]/70 md:block">
            Dustless. Precision Diamond Honing. Pristine Execution.
          </p>
        </div>

        {/* Horizontal Moving Cards Track */}
        <div className="relative my-auto overflow-visible py-2">
          <motion.div
            style={{ x }}
            className="flex items-center gap-5 sm:gap-6 md:gap-8 will-change-transform"
          >
            {steps.map((step, idx) => {
              const Icon = step.icon
              return (
                <div
                  key={idx}
                  className="group relative flex h-[330px] w-[75vw] sm:h-[360px] sm:w-[390px] md:h-[380px] md:w-[430px] flex-shrink-0 flex-col justify-between border border-[#1A1D20]/15 bg-white p-5 sm:p-6 md:p-7 shadow-[0_8px_24px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-[#1A1D20]/40"
                >
                  {/* Giant numeral in background watermark */}
                  <span className="pointer-events-none absolute bottom-2 right-4 select-none font-mono2 text-[5.5rem] font-extrabold leading-none text-[#1A1D20]/5 sm:text-[6.5rem] md:text-[7.5rem]">
                    {step.num}
                  </span>

                  {/* Card Header */}
                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <span className="rounded-full border border-[#1A1D20]/20 px-2.5 py-0.5 font-mono2 text-[9px] uppercase tracking-[0.2em] text-[#1A1D20]">
                        {step.phase}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono2 text-[9px] uppercase tracking-widest text-[#1A1D20]/50">
                          {step.tag}
                        </span>
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1A1D20] text-white">
                          <Icon className="h-3 w-3" />
                        </div>
                      </div>
                    </div>

                    <h3 className="font-display text-lg font-bold uppercase tracking-tight text-[#1A1D20] sm:text-xl md:text-2xl leading-snug">
                      {step.title}
                    </h3>
                  </div>

                  {/* Card Body */}
                  <div className="relative z-10 my-auto py-2">
                    <p className="text-xs leading-relaxed text-[#1A1D20]/75 sm:text-[13px] md:text-sm">
                      {step.desc}
                    </p>
                  </div>

                  {/* Card Footer Deliverables */}
                  <div className="relative z-10 border-t border-[#1A1D20]/10 pt-3">
                    <div className="flex flex-wrap gap-1.5">
                      {step.deliverables.map((item, dIdx) => (
                        <span
                          key={dIdx}
                          className="font-mono2 text-[8.5px] uppercase tracking-wider text-[#1A1D20]/60 bg-[#F8F9FA] px-2 py-0.5"
                        >
                          ✓ {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Final Outcome Card */}
            <div className="relative flex h-[330px] w-[72vw] sm:h-[360px] sm:w-[320px] md:h-[380px] md:w-[350px] flex-shrink-0 flex-col justify-between bg-[#1A1D20] p-5 text-[#F8F9FA] sm:p-6 md:p-7 shadow-xl">
              <div>
                <span className="font-mono2 text-[9px] uppercase tracking-[0.25em] text-[#F8F9FA]/60">
                  ASSURANCE
                </span>
                <h3 className="mt-2 font-display text-xl font-bold uppercase tracking-tight sm:text-2xl md:text-3xl text-white">
                  Zero Dust. <br />
                  Flawless Stone.
                </h3>
              </div>

              <p className="text-xs text-[#F8F9FA]/70 leading-relaxed sm:text-[13px]">
                Ready to restore your marble, granite, or terrazzo surfaces to their original factory luster?
              </p>

              <a
                href="#contact"
                className="group flex items-center justify-between border border-white/20 bg-white/10 px-4 py-3 font-mono2 text-[11px] uppercase tracking-widest text-white transition-all hover:bg-white hover:text-[#1A1D20]"
              >
                <span>Request Assessment</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

