import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
  return (
    <section id="faq" className="px-6 py-24 md:px-10 md:py-36 border-t border-[#1A1D20]/10">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 font-display text-4xl font-extrabold uppercase tracking-tighter text-[#1A1D20] md:text-6xl">
          Client <span className="text-[#0F172A]">Inquiries</span>
        </h2>
        <Accordion type="single" collapsible className="w-full border-t border-[#1A1D20]/20">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-[#1A1D20]/20">
              <AccordionTrigger className="font-mono2 text-xs md:text-sm uppercase tracking-[0.1em] text-[#1A1D20] hover:no-underline hover:text-[#0F172A] focus:text-[#0F172A] py-6 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#1A1D20] font-sans text-base leading-relaxed pb-6 pr-12">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
