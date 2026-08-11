import work1 from '@/assets/images/marble_floor_1786158213406.jpg'
import work2 from '@/assets/images/limestone_facade_1786158222568.jpg'
import work3 from '@/assets/images/terrazzo_floor_1786158232435.jpg'
import work4 from '@/assets/images/granite_monument_1786158241878.jpg'
import work5 from '@/assets/images/travertine_spa_1786158252358.jpg'
import work6 from '@/assets/images/backlit_onyx_1786158262441.jpg'
import breakImg from '@/assets/images/marble_veins_macro_1786158271592.jpg'

export interface Project {
  slug: string
  title: string
  category: string
  year: string
  img: string
  client: string
  deliverables: string[]
  description: string[]
  gallery: string[]
}

export const projects: Project[] = [
  {
    slug: 'palazzo-marble',
    title: 'Palazzo Floors',
    category: 'Marble Restoration',
    year: '2026',
    img: work1,
    client: 'The Grand Hotel',
    deliverables: ['Polishing', 'Honing', 'Stain Removal', 'Sealing'],
    description: [
      'The Grand Hotel came to us with a century-old Calacatta marble lobby that had lost its luster to decades of foot traffic. We approached the restoration with a deep respect for the material\'s history — preserving its natural veining while eliminating deep-set stains and etches.',
      'Using diamond abrasives and a meticulous honing process, we brought back a mirror-like finish that reflects the chandelier light perfectly, protecting it with an impregnating sealer that ensures it lasts another century.',
    ],
    gallery: [work4, work2],
  },
  {
    slug: 'limestone-facade',
    title: 'Limestone Façade',
    category: 'Exterior Cleaning',
    year: '2025',
    img: work2,
    client: 'Heritage Trust',
    deliverables: ['Poultice Cleaning', 'Efflorescence Removal', 'Weatherproofing'],
    description: [
      'A historic civic building\'s limestone exterior was severely damaged by urban pollution and harsh weather. Traditional pressure washing would have destroyed the delicate carving work.',
      'We utilized custom chemical poultices and low-pressure micro-abrasion to gently lift carbon deposits and biological growth from the stone. The result reveals the original warm tones of the limestone without compromising its structural integrity.',
    ],
    gallery: [work5, work1],
  },
  {
    slug: 'terrazzo-revival',
    title: 'Mid-Century Terrazzo',
    category: 'Terrazzo Repair',
    year: '2025',
    img: work3,
    client: 'Modernist Estate',
    deliverables: ['Crack Repair', 'Resurfacing', 'Crystallization'],
    description: [
      'A 1960s modernist home featured a bespoke terrazzo floor suffering from structural cracks and severe yellowing from improper wax buildup over the years.',
      'We painstakingly color-matched the original marble chips and binder to patch the fissures seamlessly. After stripping the old coatings, a multi-step crystallization process was applied to achieve a durable, high-gloss surface that celebrates the mid-century aesthetic.',
    ],
    gallery: [work6, work3],
  },
  {
    slug: 'granite-monument',
    title: 'Civic Monument',
    category: 'Granite Restoration',
    year: '2026',
    img: work4,
    client: 'City Council',
    deliverables: ['Graffiti Removal', 'Repointing', 'Thermal Finish Restoration'],
    description: [
      'Tasked with restoring a central granite monument that had been subjected to vandalism and environmental wear. The challenge was removing deep-penetrating aerosol paints without altering the stone\'s rough thermal finish.',
      'Through a combination of specialized solvents and controlled laser ablation, the graffiti was entirely extracted. We re-pointed the joints with historically accurate mortar, returning the monument to its dignified state.',
    ],
    gallery: [work1, work6],
  },
  {
    slug: 'travertine-bath',
    title: 'Travertine Spa',
    category: 'Honing & Filling',
    year: '2024',
    img: work5,
    client: 'Private Residence',
    deliverables: ['Epoxy Filling', 'Honing', 'Mold Remediation'],
    description: [
      'A luxury master bath clad entirely in unfilled travertine had become a maintenance nightmare, with water and soap scum trapped in the stone\'s natural voids.',
      'We performed a comprehensive cleaning to eradicate embedded mold, followed by a custom-tinted epoxy fill of thousands of individual holes. The stone was then honed to a smooth, matte finish that is both elegant and perfectly hygienic.',
    ],
    gallery: [work3, work4],
  },
  {
    slug: 'onyx-bar',
    title: 'Backlit Onyx',
    category: 'Specialty Stone',
    year: '2025',
    img: work6,
    client: 'Lumina Lounge',
    deliverables: ['Scratch Removal', 'Resin Infusion', 'High-Gloss Polishing'],
    description: [
      'A stunning backlit onyx bar top had suffered from severe scratching and acidic etching from spilled cocktails, dulling its translucency and dramatic impact.',
      'We meticulously diamond-polished the surface to remove all damage, treating microscopic fissures with an optically clear resin infusion. The final high-gloss polish restored the stone\'s depth, allowing the backlighting to shine through brilliantly once again.',
    ],
    gallery: [work2, work5],
  },
]

export interface Article {
  slug: string
  title: string
  date: string
  tag: string
  img: string
  excerpt: string
  quote: string
  body: string[]
}

export const articles: Article[] = [
  {
    slug: 'the-art-of-polishing',
    title: 'The Art of Polishing: Beyond the Surface',
    date: 'Jun 2026',
    tag: 'Process',
    img: work2,
    excerpt:
      'True stone restoration isn\'t just about shine. It\'s about revealing the natural character of the earth\'s oldest materials.',
    quote: 'We don\'t make the stone beautiful. We simply remove what\'s hiding its beauty.',
    body: [
      'Every restoration project at LITHOS begins the same way: an assessment of the stone\'s history. It sounds romantic, but the reason is brutally practical — applying the wrong abrasive to a sensitive marble can cause irreversible damage.',
      'The process of polishing is a careful sequence of refinement. We start with coarse diamond grits to level uneven tiles and remove deep scratches, gradually moving to finer grits. If you skip a step, the surface might look shiny initially, but the underlying damage will quickly become apparent under grazing light.',
      'The final step isn\'t a chemical coating; it\'s the friction-induced reaction of crystallization or a high-quality impregnating sealer. This allows the stone to breathe while protecting it from future stains. It\'s a labor of patience, but the result is a finish that honors the material\'s millions of years of formation.',
    ],
  },
  {
    slug: 'understanding-etching',
    title: 'Understanding Etching: The Enemy of Marble',
    date: 'Apr 2026',
    tag: 'Education',
    img: work4,
    excerpt:
      'Those dull spots on your kitchen island aren\'t stains — they are chemical burns. Here\'s how to prevent and treat them.',
    quote: 'Marble is alkaline. Acid is its natural enemy. A single lemon drop can alter the surface in seconds.',
    body: [
      'Most clients call us complaining of "water stains" on their marble countertops. But when we arrive, we find etching. An etch isn\'t a stain (which is something absorbed into the stone); it\'s a chemical burn that has physically dissolved the top layer of the polished finish.',
      'Because marble is composed primarily of calcium carbonate, it reacts instantly with acids — lemon juice, wine, vinegar, and many common household cleaners. The acid eats away the polish, leaving a dull, slightly rough mark. No amount of wiping will remove it, because the surface itself has been altered.',
      'The only true fix for etching is professional honing and re-polishing. To prevent it, we always recommend using cutting boards, coasters, and strictly pH-neutral cleaners. Appreciating marble means understanding its delicate chemistry.',
    ],
  },
  {
    slug: 'limestone-preservation',
    title: 'Limestone Preservation in Historic Architecture',
    date: 'Feb 2026',
    tag: 'Heritage',
    img: work6,
    excerpt:
      'Cleaning a historic building requires more restraint than force. The goal is preservation, not perfection.',
    quote: 'The patina of age is irreplaceable. We must clean without erasing history.',
    body: [
      'Working on heritage buildings changes how you view restoration. The goal is never to make a century-old limestone façade look like it was installed yesterday. The goal is to halt deterioration while respecting the patina of time. Over-cleaning is a tragedy we see too often in our industry.',
      'We reject high-pressure washing and harsh acidic cleaners, which can blast away the protective outer crust (the "quarry sap") of old limestone, exposing softer material underneath and accelerating future decay. Instead, we rely on specialized poultices and nebulous water mists to gently coax dirt from the pores.',
      'The process is slow, but it ensures the architectural details — the sharp edges of a carved cornice, the delicate texture of a column — survive for the next generation. Restoration is, fundamentally, an act of stewardship.',
    ],
  },
  {
    slug: 'terrazzo-resurgence',
    title: 'The Resurgence of Terrazzo',
    date: 'Dec 2025',
    tag: 'Trends',
    img: breakImg,
    excerpt:
      'Once the unsung hero of mid-century commercial spaces, terrazzo is experiencing a massive renaissance in modern design.',
    quote: 'Terrazzo is the original sustainable floor — durable, repairable, and infinitely customizable.',
    body: [
      'Terrazzo was born in 15th-century Venice when marble workers began pressing leftover chips into a clay base for their own terraces. Today, it\'s the darling of high-end residential and commercial design. Its appeal lies in its seamlessness and its incredible durability — a properly maintained terrazzo floor will easily outlast the building it sits in.',
      'The challenge with old terrazzo isn\'t structural failure; it\'s usually decades of bad maintenance. We frequently find beautiful mid-century floors buried under thick layers of yellowing acrylic wax. The transformation when we strip this wax and diamond-polish the raw floor is always astonishing.',
      'We love restoring terrazzo because it\'s the ultimate sustainable floor. Instead of ripping out a damaged surface and sending it to a landfill, we can repair cracks, match missing aggregate, and grind it back to a flawless, modern finish.',
    ],
  },
]

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)
export const getArticle = (slug: string) => articles.find((a) => a.slug === slug)
export const nextProject = (slug: string) =>
  projects[(projects.findIndex((p) => p.slug === slug) + 1) % projects.length]
export const nextArticle = (slug: string) =>
  articles[(articles.findIndex((a) => a.slug === slug) + 1) % articles.length]
