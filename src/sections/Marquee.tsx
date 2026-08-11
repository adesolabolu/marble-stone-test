const items = ['Marble Polishing', 'Terrazzo Repair', 'Limestone Cleaning', 'Stain Removal', 'Sealing & Protection', 'Historic Restoration']

export default function Marquee() {
  const row = [...items, ...items]
  return (
    <section className="overflow-hidden border-y border-[#1A1D20]/10 py-5">
      <div className="animate-marquee flex w-max items-center">
        {[0, 1].map((half) => (
          <div key={half} className="flex w-max items-center">
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center">
                <span className="font-display text-2xl font-bold uppercase tracking-tight text-[#1A1D20] md:text-4xl">
                  {item}
                </span>
                <span className="mx-8 text-xl text-[#0F172A] md:mx-12">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
