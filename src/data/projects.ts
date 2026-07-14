/**
 * Projects — single source for the index and detail pages.
 *
 * Text stays from the Railway demo. Images use live KAMU Concepts assets.
 */

const local = (path: string) => `/assets/projects/${path}`;

export interface GalleryShot {
  /** ratio class suffix used by the layout — fixed per slot */
  demo: string;
}

export interface Project {
  n: string;
  slug: string;
  name: string;
  meta: string;
  location: string;
  year: string;
  type: string;
  scope: string;
  file: string;
  demo: string;
  logo?: string;
  intro: string;
  body: string;
  /** mid-gallery editorial block */
  storyTitle: string;
  story: [string, string];
  materials: string[];
  quote: string;
  gallery: string[];
}

const yuccaVillasStudio = [
  local('yucca-villas-studio/01-living-pool-view.jpg'),
  local('yucca-villas-studio/02-pool-deck.jpg'),
  local('yucca-villas-studio/03-outdoor-dining.jpg'),
  local('yucca-villas-studio/04-bedroom.jpg'),
  local('yucca-villas-studio/05-bathroom.jpg'),
];

const villaKamal = [
  local('villa-kamal/thumbnail.jpg'),
  local('villa-kamal/01.jpg'),
  local('villa-kamal/02.jpg'),
  local('villa-kamal/03.jpg'),
  local('villa-kamal/04.jpg'),
];

const villaLamer = [
  local('villa-lamer/thumbnail.jpg'),
  local('villa-lamer/01.jpg'),
  local('villa-lamer/02.jpg'),
  local('villa-lamer/03.jpg'),
];

const villaBocce = [
  local('villa-bocce/thumbnail.jpg'),
  local('villa-bocce/01.jpg'),
  local('villa-bocce/02.jpg'),
  local('villa-bocce/03.jpg'),
];

const camayaBali = [
  local('camaya-bali/thumbnail.jpg'),
  local('camaya-bali/01.jpg'),
  local('camaya-bali/02.jpg'),
  local('camaya-bali/03.jpg'),
  local('camaya-bali/04.jpg'),
  local('camaya-bali/05.jpg'),
  local('camaya-bali/06.jpg'),
  local('camaya-bali/07.jpg'),
  local('camaya-bali/08.jpg'),
  local('camaya-bali/09.jpg'),
  local('camaya-bali/10.jpg'),
];

const mahiMahi = [
  local('mahi-mahi/thumbnail.jpg'),
  local('mahi-mahi/01.jpg'),
  local('mahi-mahi/02.jpg'),
  local('mahi-mahi/03.jpg'),
  local('mahi-mahi/04.jpg'),
];

const noRushVilla = [
  local('no-rush-villa/thumbnail.jpg'),
  local('no-rush-villa/01.jpg'),
  local('no-rush-villa/02.jpg'),
  local('no-rush-villa/03.jpg'),
  local('no-rush-villa/04.jpg'),
  local('no-rush-villa/05.jpg'),
];

const laviSavi = [
  local('lavi-savi/thumbnail.jpg'),
  local('lavi-savi/01.jpg'),
  local('lavi-savi/02.jpg'),
  local('lavi-savi/03.jpg'),
  local('lavi-savi/04.jpg'),
  local('lavi-savi/05.jpg'),
];

export const projects: Project[] = [
  {
    n: '01',
    slug: 'yucca-villas-studio',
    name: 'Yucca Villas Studio',
    meta: 'Bali · Residential',
    location: 'Bali',
    year: '2025',
    type: 'Residential',
    scope: 'Full Interior',
    file: 'project-01.jpg',
    demo: yuccaVillasStudio[0],
    logo: local('yucca-villas-studio/logo-yucca-villa.png'),
    intro:
      'A boutique hotel above Bingin beach, designed around one idea: arrival should feel like an exhale. Eighteen rooms, a restaurant and a sunset bar — all built from a quiet palette of teak, limestone plaster and hand-woven fibre.',
    body: 'We kept the architecture honest and let the materials do the talking. Local makers produced every piece of loose furniture; the lighting is warm and low, the layouts open to the sea breeze. Nothing decorative, nothing loud — just calm, tactile rooms that age well.',
    quote: 'The brief was simple — make arrival feel like an exhale.',
    storyTitle: 'Designed around arrival',
    story: [
      'The sequence from street to sea is choreographed room by room. Guests step out of the noise of Bingin into a low, shaded lobby; ceilings lift gradually toward the water until the horizon does the welcoming. Nothing in the first five minutes asks for attention — that restraint is the design.',
      'Every loose piece was made within the island: tables from reclaimed teak beams, light fittings woven by hand in Tabanan, plaster mixed with local limestone. The building will patina in the salt air, and it was specified to do exactly that.',
    ],
    materials: ['Reclaimed teak', 'Limestone plaster', 'Hand-woven fibre', 'Brushed brass'],
    gallery: yuccaVillasStudio,
  },
  {
    n: '02',
    slug: 'villa-kamal',
    name: 'Villa Kamal',
    meta: 'Bali · Residential',
    location: 'Bali',
    year: '2025',
    type: 'Residential',
    scope: 'Full Interior',
    file: 'project-02.jpg',
    demo: villaKamal[0],
    logo: local('villa-kamal/logo.png'),
    intro:
      'A clifftop family villa where earth tones meet the horizon. Rammed-earth textures, rattan and warm timber ground the house against the ocean light.',
    body: 'The interior follows the sun — morning rooms face east over the garden, living spaces open west to the sea. Every built-in was drawn by the studio and made within twenty kilometres of the site.',
    storyTitle: 'The house follows the sun',
    story: [
      'Mornings belong to the east rooms — breakfast happens against the garden wall while it is still cool. By late afternoon the house has rotated its life westward, to deep verandas and the long ocean light. The plan is really a sundial with bedrooms.',
      "Rammed-earth walls hold the day's heat and give it back at night. Against that mass, everything else is light: rattan, linen, pale timber — pieces that can be picked up and moved as the family's day moves.",
    ],
    materials: ['Rammed earth', 'Rattan', 'Warm teak', 'Basalt stone'],
    quote: 'A clifftop house should hold you, not perform for you.',
    gallery: villaKamal.slice(1),
  },
  {
    n: '03',
    slug: 'villa-lamer',
    name: 'Villa Lamer',
    meta: 'Canggu, Bali · Residential',
    location: 'Canggu, Bali',
    year: '2024',
    type: 'Residential',
    scope: 'Concept & FF&E',
    file: 'project-05.jpg',
    demo: villaLamer[0],
    logo: local('villa-lamer/logo.png'),
    intro:
      'A renovation of a 90s villa into a slow, light-filled home. We stripped it back to structure and rebuilt the atmosphere with plaster, linen and pale teak.',
    body: 'The clients asked for fewer things, better made. The result is a house with almost nothing in it — and everything it needs.',
    storyTitle: 'Stripped back to structure',
    story: [
      'The renovation began with subtraction. Dropped ceilings came out, three partition walls came down, and the original concrete frame turned out to be the best-looking thing in the house. We kept it visible and built the calm around it.',
      'What was added is deliberately few: lime plaster in two warm tones, pale teak joinery, and linen at every window. The clients asked for fewer things, better made — the budget went into hands, not objects.',
    ],
    materials: ['Lime plaster', 'Pale teak', 'Linen', 'Terrazzo'],
    quote: 'Fewer things, better made.',
    gallery: villaLamer.slice(1),
  },
  {
    n: '04',
    slug: 'villa-bocce',
    name: 'Villa Bocce',
    meta: 'Seminyak, Bali · Residential',
    location: 'Seminyak, Bali',
    year: '2024',
    type: 'Residential',
    scope: 'Full Interior',
    file: 'project-06.jpg',
    demo: villaBocce[0],
    logo: local('villa-bocce/logo.png'),
    intro:
      'A guesthouse in the back streets of Seminyak, designed for long stays. Muted green, bone and terracotta — the brand palette, lived in.',
    body: 'Rooms are small but never tight: high ceilings, soft light, one good chair. The shared kitchen is the heart of the house.',
    storyTitle: 'Small rooms, tall ceilings',
    story: [
      'A long-stay guesthouse lives or dies by its smallest room, so every room got the same three guarantees: height, cross-ventilation, and one genuinely good chair. The floor plans are tight; the sections are generous.',
      'The brand palette is used here at full confidence — mist green limewash in the stairwell, terracotta tile underfoot, bone linen everywhere light lands. The shared kitchen anchors the house socially the way a hearth used to.',
    ],
    materials: ['Mist green limewash', 'Terracotta tile', 'Bone linen', 'Teak'],
    quote: 'Generosity is a section drawing, not a square-metre count.',
    gallery: villaBocce.slice(1),
  },
  {
    n: '05',
    slug: 'camaya-bali',
    name: 'Camaya Bali',
    meta: 'Bali - Hospitality',
    location: 'Bali',
    year: '2024',
    type: 'Hospitality',
    scope: 'Interior Styling & FF&E',
    file: 'project-05.jpg',
    demo: camayaBali[0],
    logo: local('camaya-bali/logo.png'),
    intro:
      'A quiet hillside retreat shaped around open air, soft timber and views that do most of the talking. Camaya Bali is designed to feel private without feeling closed.',
    body: 'The styling keeps the rooms light and tactile: woven details, warm wood, natural linen and small moments of shadow. Every piece is placed to frame the landscape, not compete with it.',
    storyTitle: 'A retreat shaped by the view',
    story: [
      'The experience begins with distance from the noise. Furniture sits low, sightlines stay open, and the palette is kept warm enough to make the surrounding green feel even deeper.',
      'Details are intentionally restrained: woven fibre for texture, timber for warmth, and simple linen layers to soften the light. The project works because nothing tries to outshine the site.',
    ],
    materials: ['Warm timber', 'Woven fibre', 'Natural linen', 'Handmade ceramics'],
    quote: 'The view is the main material.',
    gallery: camayaBali.slice(1),
  },
  {
    n: '06',
    slug: 'mahi-mahi',
    name: 'Mahi Mahi',
    meta: 'Bali - Hospitality',
    location: 'Bali',
    year: '2024',
    type: 'Hospitality',
    scope: 'Interior Styling & FF&E',
    file: 'project-06.jpg',
    demo: mahiMahi[0],
    logo: local('mahi-mahi/logo.png'),
    intro:
      'A relaxed tropical stay built around breezy rooms, natural surfaces and a palette that feels close to the coast. Mahi Mahi is casual, warm and easy to live in.',
    body: 'The interior direction balances resort comfort with residential softness. Texture leads the project: timber grain, woven seating, pale fabric and daylight moving through the space.',
    storyTitle: 'Casual comfort, carefully held',
    story: [
      'The rooms are composed to feel effortless, but the restraint is deliberate. Each setting gives guests what they need first: a place to rest, a place to gather, and enough breathing room between objects.',
      'Materials stay honest and practical for daily hospitality use. Durable timber, woven texture and light fabrics create an atmosphere that feels calm without becoming precious.',
    ],
    materials: ['Timber', 'Woven rattan', 'Light linen', 'Textured plaster'],
    quote: 'A relaxed room still needs discipline.',
    gallery: mahiMahi.slice(1),
  },
  {
    n: '07',
    slug: 'no-rush-villa',
    name: 'No Rush Villa',
    meta: 'Bali - Residential',
    location: 'Bali',
    year: '2025',
    type: 'Residential',
    scope: 'Full Interior',
    file: 'project-07.jpg',
    demo: noRushVilla[0],
    logo: local('no-rush-villa/logo.png'),
    intro:
      'A villa designed around the feeling its name suggests: slower mornings, fewer distractions and rooms that let the day unfold gently.',
    body: 'The palette is quiet and grounded, with soft upholstery, timber, natural fibre and warm neutral surfaces. The project avoids decorative noise in favour of calm proportion and useful comfort.',
    storyTitle: 'A slower way through the day',
    story: [
      'No Rush Villa is arranged as a sequence of pauses. The furniture leaves room around itself, circulation stays open, and the lighting keeps every room soft rather than sharp.',
      'Natural materials carry the atmosphere: timber for weight, woven details for tactility, and pale upholstery to keep the interiors breathable. It is simple, but not empty.',
    ],
    materials: ['Natural timber', 'Woven fibre', 'Soft upholstery', 'Warm plaster'],
    quote: 'The luxury is not having to hurry.',
    gallery: noRushVilla.slice(1),
  },
  {
    n: '08',
    slug: 'lavi-savi',
    name: 'Lavi & Savi',
    meta: 'Bali · Residential',
    location: 'Bali',
    year: '2026',
    type: 'Residential',
    scope: 'Interior Styling & FF&E',
    file: 'project-08.jpg',
    demo: laviSavi[0],
    intro:
      'A soft residential setting shaped around quiet rituals, filtered daylight and pieces that feel collected rather than staged. Lavi & Savi reads as a calm home first, then a design statement second.',
    body: 'The palette stays warm and tactile: pale upholstery, woven texture, dark timber notes and natural light doing most of the work. Furniture is arranged for easy conversation, slow mornings and rooms that can breathe between objects.',
    storyTitle: 'A home with a slower rhythm',
    story: [
      'The direction is intentionally restrained. Instead of filling each corner, the rooms rely on generous negative space, natural textures and a few strong silhouettes to carry the mood.',
      'Every setting is composed to feel lived-in: a chair close to the light, a table with room around it, soft materials against harder architectural lines. The result is quiet, personal and easy to inhabit.',
    ],
    materials: ['Natural timber', 'Textured upholstery', 'Woven fibre', 'Warm plaster'],
    quote: 'The strongest rooms leave space for daily life to happen.',
    logo: local('lavi-savi/logo.png'),
    gallery: laviSavi.slice(1),
  },
];
