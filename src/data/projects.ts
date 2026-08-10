/**
 * Projects - single source for the index and detail pages.
 */

const local = (path: string) => `/assets/projects/${path}`;

export interface GalleryShot {
  /** ratio class suffix used by the layout - fixed per slot */
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
  scopeLabel?: string;
  file: string;
  demo: string;
  thumbnail?: string;
  hero?: string;
  logo?: string;
  intro: string;
  body: string;
  storyTitle: string;
  story: [string, string];
  materials: string[];
  quote: string;
  gallery: string[];
}

const yuccaVillasStudio = [
  local('yucca-villas-studio/01-living-pool-view.jpg'),
  local('yucca-villas-studio/02-yucca-selection-10.jpg'),
  local('yucca-villas-studio/03-outdoor-dining.jpg'),
  local('yucca-villas-studio/04-bedroom.jpg'),
  local('yucca-villas-studio/05-bathroom.jpg'),
];

const miraBingin = [
  local('mira-bingin/01-bedroom.jpg'),
  local('mira-bingin/02-living-mezzanine.jpg'),
  local('mira-bingin/05-workspace-desk.jpg'),
  local('mira-bingin/08-bedroom-tv.jpg'),
  local('mira-bingin/06-living-hallway.jpg'),
  local('mira-bingin/03-lounge-terrace.jpg'),
  local('mira-bingin/04-bathroom.jpg'),
];

const laviSavi = [
  local('lavi-savi/thumbnail.jpg'),
  local('lavi-savi/01.jpg'),
  local('lavi-savi/02.jpg'),
  local('lavi-savi/03.jpg'),
  local('lavi-savi/04.jpg'),
  local('lavi-savi/05.jpg'),
];

const idlewildVilla = [
  local('idlewild-villa/00-card-dining.jpg'),
  local('idlewild-villa/01-living-room.jpg'),
  local('idlewild-villa/02-bedroom-balcony.jpg'),
  local('idlewild-villa/03-bathroom-tub.jpg'),
  local('idlewild-villa/04-lounge-wide.jpg'),
  local('idlewild-villa/05-lounge-corner.jpg'),
];

export const projects: Project[] = [
  {
    n: '01',
    slug: 'yucca-villas-studio',
    name: 'Yucca Villa',
    meta: 'Pererenan, Bali - Residential',
    location: 'Pererenan, Bali, Indonesia',
    year: '2021',
    type: '1 & 2 Bedroom Pool Studios',
    scope: 'Homeboys Projects & KAMU Concepts',
    scopeLabel: 'Interior & Styling',
    file: 'project-01.jpg',
    demo: local('yucca-villas-studio/thumbnail-yucca-34.png'),
    hero: local('yucca-villas-studio/thumbnail-yucca-34.png'),
    logo: local('yucca-villas-studio/logo-yucca-villa.png'),
    intro: 'Designed in collaboration with Homeboys Projects, Yucca Villas explores a quieter approach to tropical living. The interiors embrace natural textures, warm timbers and handcrafted details to create spaces that feel calm, tactile and effortlessly lived in.',
    body: 'Rather than competing with the surrounding landscape, every material and furnishing was selected to complement it. Soft, honest finishes and carefully considered styling create an atmosphere that feels timeless, grounded and deeply connected to Bali.',
    quote: 'True luxury lives in the spaces that let you breathe.',
    storyTitle: 'Where Material Shapes Experience',
    story: [
      'Nestled in Pererenan, Yucca Villas explores a refined, understated way of inhabiting the tropics. Rather than competing with the surrounding landscape, every material and furnishing selected by Homeboys Projects and KAMU Concepts was chosen to complement it.',
      'The architecture of these one- and two-bedroom pool studios frames the outdoors as living. Inside, soft, honest finishes and carefully considered styling create an atmosphere that feels timeless, tactile and effortlessly lived in from the very first step.',
    ],
    materials: ['Warm timber', 'Natural stone', 'Handcrafted textures', 'Local plaster'],
    gallery: yuccaVillasStudio,
  },
  {
    n: '02',
    slug: 'mira-bingin',
    name: 'Mira Bingin',
    meta: 'Bingin, Bali - Hotel & Recovery',
    location: 'Bingin, Bali',
    year: '2024',
    type: 'Hotel & Recovery',
    scope: 'KAMU Concepts',
    scopeLabel: 'Interior & Styling',
    file: 'mira-bingin.jpg',
    demo: miraBingin[0],
    logo: local('mira-bingin/logo.svg'),
    intro: 'Designed as a place to pause, restore and reconnect, Mira Bingin brings together hospitality and wellness through calm, intentional interiors. Every space is carefully considered to support rest, where natural materials, soft textures and balanced proportions create an atmosphere of quiet comfort.',
    body: 'Rather than relying on excess, the design embraces restraint. Honest materials, handcrafted details and timeless forms work together to create spaces that feel grounded, restorative and deeply connected to the slower rhythm of Bingin.',
    quote: "Luxury isn't louder. It's quieter.",
    storyTitle: 'Crafted for Quiet Living',
    story: [
      'At Mira Bingin, comfort comes from restraint rather than excess. Natural materials, handcrafted furniture and thoughtful detailing work together to create interiors that feel warm, tactile and timeless.',
      'Each room is composed to support a slower rhythm, with soft transitions between rest, recovery and everyday living.',
    ],
    materials: ['Timber', 'Limestone', 'Handmade ceramics', 'Linen', 'Natural stone'],
    gallery: miraBingin,
  },
  {
    n: '03',
    slug: 'lavi-savi',
    name: 'Lavi & Savi',
    meta: 'Nunggalan, Bali - Residential',
    location: 'Nunggalan, Bali, Indonesia',
    year: '2025',
    type: 'Villa',
    scopeLabel: 'Interior & Styling',
    scope: 'KAMU Concepts',
    file: 'project-02.jpg',
    demo: local('lavi-savi/12-shot-41.jpg'),
    thumbnail: local('lavi-savi/12-shot-41.jpg'),
    logo: local('lavi-savi/logo.png'),
    intro: 'Lavi & Savi represents our belief that meaningful design begins with how a space should make people feel. Every interior was carefully composed to balance warmth, simplicity and craftsmanship, creating an environment that invites guests to slow down and reconnect.',
    body: 'Natural textures, handcrafted details and timeless proportions shape a hospitality experience that feels both contemporary and enduring - quietly luxurious without unnecessary excess.',
    storyTitle: 'Where Material Shapes Experience',
    story: [
      'Materiality became the foundation of the design. Timber, stone, natural textiles, and handcrafted finishes were chosen not only for their beauty but for the warmth, texture, and authenticity they bring to everyday living.',
      'Warmth, texture, and authenticity guide the experience from room to room.',
    ],
    materials: ['Dark Timber', 'Tegel tiles', 'Lime Plaster', 'Linen', 'Rattan', 'Travertine'],
    quote: 'The beauty of natural materials lies in how they age with us.',
    gallery: laviSavi.slice(1),
  },
  {
    n: '04',
    slug: 'idlewild-villa',
    name: 'Idlewild Villa',
    meta: 'Nunggalan, Bali - Villa',
    location: 'Nunggalan, Bali, Indonesia',
    year: '2025',
    type: 'Villa',
    scopeLabel: 'Interior & Styling',
    scope: 'KAMU Concepts',
    file: 'idlewild-villa.jpg',
    demo: idlewildVilla[0],
    hero: local('idlewild-villa/01-living-room.jpg'),
    intro: 'Idlewild Uluwatu was envisioned as a contemporary tropical retreat where architecture and interiors exist in quiet harmony. Designed in collaboration with WEKA, the project embraces natural materials, soft textures and thoughtful spatial planning to create an atmosphere that feels calm, grounded and effortlessly connected to its surroundings.',
    body: 'Every interior element was carefully curated to complement the architecture rather than compete with it. Through honest materiality, bespoke detailing and a restrained palette, the spaces encourage a slower rhythm of living while remaining timeless in character.',
    quote: 'Material tells the story long before furniture does.',
    storyTitle: 'An Exploration of Material Contrast',
    story: [
      'Our approach focused on balancing depth with warmth. Dark architectural elements are softened by handcrafted terracotta, natural timber and tactile textiles, creating interiors that feel bold yet inviting.',
      'Rather than competing for attention, every material works together to create atmosphere through texture, shadow and natural light.',
    ],
    materials: ['Terracotta', 'Charcoal timber', 'Concrete', 'Natural linen', 'Solid teak'],
    gallery: idlewildVilla.slice(1),
  },
];
