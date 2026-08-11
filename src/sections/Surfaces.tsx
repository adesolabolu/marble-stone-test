import FlowingMenu from '@/components/ui/FlowingMenu'

import marble from '@/assets/images/marble_floor_1786158213406.jpg'
import granite from '@/assets/images/granite_monument_1786158241878.jpg'
import terrazzo from '@/assets/images/terrazzo_floor_1786158232435.jpg'
import limestone from '@/assets/images/limestone_facade_1786158222568.jpg'
import travertine from '@/assets/images/travertine_spa_1786158252358.jpg'
import onyx from '@/assets/images/backlit_onyx_1786158262441.jpg'

const surfaceItems = [
  { link: '#', text: 'Marble', image: marble },
  { link: '#', text: 'Granite', image: granite },
  { link: '#', text: 'Terrazzo', image: terrazzo },
  { link: '#', text: 'Limestone', image: limestone },
  { link: '#', text: 'Travertine', image: travertine },
  { link: '#', text: 'Onyx', image: onyx }
]

export default function Surfaces() {
  return (
    <section className="py-28 md:py-40 bg-[#1A1D20] text-[#F8F9FA]">
      <div className="px-6 md:px-10 mb-14">
        <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tighter md:text-7xl">
          Surfaces
        </h2>
        <p className="mt-6 max-w-xl font-mono2 text-sm uppercase tracking-widest text-[#F8F9FA]/70">
          The fine materials we restore, polish, and protect.
        </p>
      </div>
      
      <div style={{ height: '600px', position: 'relative' }}>
        <FlowingMenu 
          items={surfaceItems} 
          bgColor="#1A1D20" 
          textColor="#F8F9FA" 
          borderColor="#F8F9FA20"
          marqueeBgColor="#F8F9FA"
          marqueeTextColor="#1A1D20"
          speed={20}
        />
      </div>
    </section>
  )
}
