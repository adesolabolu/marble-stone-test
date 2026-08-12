import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: "What is the difference between honing and polishing?",
    answer: "Honing uses abrasive diamonds to remove scratches and etches, leaving a smooth, matte or satin finish. Polishing uses finer diamonds and friction to create a highly reflective, glossy surface."
  },
  {
    question: "Can you remove water rings and dull spots from my marble?",
    answer: "Yes. Those 'water rings' are actually chemical burns called etches, caused by acidic substances like lemon or vinegar. We can hone out the damaged layer and re-polish the stone to its original condition."
  },
  {
    question: "How often should I seal my natural stone?",
    answer: "It depends on the stone type and usage. Generally, high-traffic areas or porous stones like limestone should be sealed annually. Denser stones like granite may only need sealing every 3-5 years."
  },
  {
    question: "Does sealing make the stone stain-proof?",
    answer: "No sealer makes stone completely stain-proof. Impregnating sealers provide a crucial window of time (usually 20-30 minutes) to wipe up spills before they penetrate the stone's pores and cause a permanent stain."
  },
  {
    question: "Can cracked terrazzo be repaired seamlessly?",
    answer: "We strive for near-seamless repairs. We custom-tint the epoxy binder to match your existing floor and source matching marble aggregate, grinding the repair flat so it blends naturally with the surrounding floor."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="border-t border-[#1A1D20]/10 px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 font-mono2 text-[11px] uppercase tracking-[0.3em] text-[#0F172A]">
              ( FAQ )
            </p>
            <h2 className="font-display text-4xl font-extrabold uppercase tracking-tighter text-[#1A1D20] md:text-6xl">
              Client <span className="text-[#0F172A]">Inquiries</span>
            </h2>
          </div>
          <p className="max-w-xs font-mono2 text-[11px] uppercase tracking-[0.15em] text-[#1A1D20]/70">
            Common questions regarding natural stone restoration & maintenance.
          </p>
        </div>

        <div className="w-full border-t border-[#1A1D20]/20">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className="border-b border-[#1A1D20]/20">
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  data-hover
                  className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors duration-200 hover:text-[#0F172A]"
                >
                  <span className="font-mono2 text-xs uppercase tracking-[0.1em] text-[#1A1D20] md:text-sm font-semibold">
                    {faq.question}
                  </span>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1A1D20]/5 text-[#1A1D20] transition-transform duration-300">
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -6, opacity: 0 }}
                        transition={{ duration: 0.25, delay: 0.05 }}
                        className="pb-6 pr-12 font-sans text-base leading-relaxed text-[#1A1D20]/80"
                      >
                        {faq.answer}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

