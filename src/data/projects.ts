/**
 * Projects — single source for the index and detail pages.
 *
 * Text stays from the Railway demo. Images use live KAMU Concepts assets.
 */

const k = (id: string) => `https://static.wixstatic.com/media/${id}`;

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
  intro: string;
  body: string;
  /** mid-gallery editorial block */
  storyTitle: string;
  story: [string, string];
  materials: string[];
  quote: string;
  gallery: string[]; // 6 demo URLs, mapped to detail slots 01–06
}

// Shared real asset pool from kamuconcepts.com.
const pool = [
  k('e92c2b_6ffafe8eceac48188ee806ed589a2c1c~mv2.jpg'),
  k('e92c2b_aaf4c027b96049db95689eb6276d73ea~mv2.jpg'),
  k('e92c2b_c322971dd9314b0f8e697dcfde961ad0~mv2.jpg'),
  k('e92c2b_0dd3fe348a3940e6bfd160afb5a33a4e~mv2.jpg'),
  k('e92c2b_4058e21f91bb4e44b11a0f5ecf6b89c2~mv2.jpg'),
  k('e92c2b_77ae12fe528a474cb908c605e78cc930~mv2.jpg'),
  k('e92c2b_5a0b09562d72477f8cbd379956132426~mv2.jpg'),
  k('e92c2b_9abe6224de5b4d78aabc7648c968cf6c~mv2.jpg'),
  k('e92c2b_910bb3824a6f4daab7787dfff2e62dc8~mv2.jpg'),
  k('e92c2b_01b12db1eb9d42b392b173ff3a65e84d~mv2.jpg'),
  k('e92c2b_b3019e5960be40e9b1ffbe9589ec9e96~mv2.jpg'),
  k('e92c2b_1d986e1f70c547ecaee9953bf6b2786a~mv2.jpg'),
  k('e92c2b_b0019a4cd10545caa138a62efa96be21~mv2.jpg'),
];

/** Keep detail pages visually consistent: no cross-project image mixing. */
const galleryFor = (image: string) => Array.from({ length: 6 }, () => image);

export const projects: Project[] = [
  {
    n: '01',
    slug: 'mira-hotel',
    name: 'Mira Hotel',
    meta: 'Bingin, Bali · Hospitality',
    location: 'Bingin, Bali',
    year: '2025',
    type: 'Hospitality',
    scope: 'Full Interior',
    file: 'project-01.jpg',
    demo: pool[2],
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
    gallery: galleryFor(pool[2]),
  },
  {
    n: '02',
    slug: 'villa-tanah',
    name: 'Villa Tanah',
    meta: 'Uluwatu, Bali · Residential',
    location: 'Uluwatu, Bali',
    year: '2025',
    type: 'Residential',
    scope: 'Full Interior',
    file: 'project-02.jpg',
    demo: pool[1],
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
    gallery: galleryFor(pool[1]),
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
    demo: pool[10],
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
    gallery: galleryFor(pool[10]),
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
    demo: pool[11],
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
    gallery: galleryFor(pool[11]),
  },
  {
    n: '05',
    slug: 'casa-loka',
    name: 'Casa Loka',
    meta: 'Canggu, Bali · Residential',
    location: 'Canggu, Bali',
    year: '2023',
    type: 'Residential',
    scope: 'Full Interior',
    file: 'project-03.jpg',
    demo: pool[7],
    intro:
      'A dark, grounded townhouse for a couple who work from home. Deep mist green, smoked oak and black steel — calm with weight.',
    body: 'Daylight is managed, not maximised: deep reveals, sheer linen, pools of warm lamplight. A house for thinking.',
    storyTitle: 'Daylight, managed',
    story: [
      'Most tropical houses chase brightness. This one curates it. Deep window reveals, sheer linen layers and dark surfaces let the couple work at screens all day without glare, then read by lamplight pools at night.',
      "Smoked oak and black steel carry the weight; deep mist green softens it. It is the studio's darkest interior to date and the one most often asked about — proof that calm and dim are not the same thing as gloomy.",
    ],
    materials: ['Smoked oak', 'Black steel', 'Deep mist green', 'Wool bouclé'],
    quote: 'A house for thinking needs shadows to think in.',
    gallery: galleryFor(pool[7]),
  },
  {
    n: '06',
    slug: 'studio-residence',
    name: 'Studio Residence',
    meta: 'Seminyak, Bali · Workspace',
    location: 'Seminyak, Bali',
    year: '2023',
    type: 'Workspace',
    scope: 'Concept & FF&E',
    file: 'project-04.jpg',
    demo: pool[8],
    intro:
      'Our own studio — part workshop, part showroom, part argument for working slower. Every prototype lives here first.',
    body: 'Material samples on every wall, one long communal table, and the first run of every "by KAMU" piece in daily use.',
    storyTitle: 'A working argument',
    story: [
      "The studio is our laboratory: every wall finish, every hinge and every chair here is a prototype being lived with before a client ever sees it. If a sample can't survive our daily use, it doesn't get specified.",
      'One long communal table runs the length of the main room — meetings, lunch, drawing and sanding all happen on the same teak surface. The mess is part of the method; the calm is the result.',
    ],
    materials: ['Teak', 'Raw steel', 'Canvas', 'Paper cord'],
    quote: 'We test everything on ourselves first.',
    gallery: galleryFor(pool[8]),
  },
  {
    n: '07',
    slug: 'pererenan-loft',
    name: 'Pererenan Loft',
    meta: 'Pererenan, Bali · Residential',
    location: 'Pererenan, Bali',
    year: '2026',
    type: 'Residential',
    scope: 'Full Interior',
    file: 'project-07.jpg',
    demo: pool[9],
    intro:
      'A single open volume above a rice field — one room to live a whole life in. Currently on site.',
    body: 'The palette is the view: green, bone, wet earth. Completion expected late 2026.',
    storyTitle: 'One room, whole life',
    story: [
      'A single volume above a rice field asks one question: how little separation does a life actually need? Sleeping, cooking, working and resting share the same air, zoned by level changes and light instead of walls.',
      'The palette is borrowed directly from the view — green, bone, wet earth. Construction is underway; the polished concrete floor was poured in the dry season and the teak frame is rising now.',
    ],
    materials: ['Polished concrete', 'Teak frame', 'Rattan', 'Linen'],
    quote: 'The rice field is the largest room in the house.',
    gallery: galleryFor(pool[9]),
  },
];
