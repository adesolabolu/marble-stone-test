import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from 'lucide-react'

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
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section id="faq" className="border-t border-[#1A1D20]/10 px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 font-display text-4xl font-extrabold uppercase tracking-tighter text-[#1A1D20] md:text-6xl">
          Client <span className="text-[#0F172A]">Inquiries</span>
        </h2>
        
        <div className="w-full border-t border-[#1A1D20]/20">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className="border-b border-[#1A1D20]/20">
                <button
                  onClick={() => toggle(i)}
                  data-umami-event="marble-stone - faq-expand"
                  className="flex w-full items-center justify-between py-6 text-left font-mono2 text-xs uppercase tracking-[0.1em] text-[#1A1D20] transition-colors hover:text-[#0F172A] md:text-sm"
                >
                  {faq.question}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="ml-4 shrink-0"
                  >
                    <ChevronDownIcon className="h-4 w-4" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                        opacity: { duration: 0.3, ease: 'easeOut', delay: 0.1 }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pr-12 font-sans text-base leading-relaxed text-[#1A1D20]">
                        {faq.answer}
                      </div>
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
