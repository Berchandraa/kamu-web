/**
 * Projects — single source for the index and detail pages.
 *
 * Swap slots per project (drop into /public/assets/):
 *   hero/thumbnail → project-NN.jpg        (shared with the index page)
 *   gallery        → project-NN-detail-01.jpg … -06.jpg
 * Until real files exist, the listed Unsplash demos render.
 */

const u = (id: string, w = 1800) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

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
  quote?: string;
  gallery: string[]; // 6 demo URLs, mapped to detail slots 01–06
}

// Shared demo pool — warm, muted, architectural (all IDs verified)
const pool = [
  u('1600585154340-be6161a56a0c', 2400),
  u('1616486338812-3dadae4b4ace'),
  u('1581539250439-c96689b516dd', 1200),
  u('1505693416388-ac5ce068fe85'),
  u('1532372320572-cda25653a26d', 1200),
  u('1556911220-bff31c812dba'),
  u('1493809842364-78817add7ffb'),
  u('1598300042247-d088f8ab3a91', 1200),
  u('1540574163026-643ea20ade25'),
];

/** rotate the pool so each project gets a distinct gallery */
const galleryFor = (offset: number) =>
  Array.from({ length: 6 }, (_, i) => pool[(offset + i) % pool.length]);

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
    demo: u('1600210492486-724fe5c67fb0', 2400),
    intro:
      'A boutique hotel above Bingin beach, designed around one idea: arrival should feel like an exhale. Eighteen rooms, a restaurant and a sunset bar — all built from a quiet palette of teak, limestone plaster and hand-woven fibre.',
    body: 'We kept the architecture honest and let the materials do the talking. Local makers produced every piece of loose furniture; the lighting is warm and low, the layouts open to the sea breeze. Nothing decorative, nothing loud — just calm, tactile rooms that age well.',
    quote: 'The brief was simple — make arrival feel like an exhale.',
    gallery: galleryFor(0),
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
    demo: u('1586023492125-27b2c045efd7'),
    intro:
      'A clifftop family villa where earth tones meet the horizon. Rammed-earth textures, rattan and warm timber ground the house against the ocean light.',
    body: 'The interior follows the sun — morning rooms face east over the garden, living spaces open west to the sea. Every built-in was drawn by the studio and made within twenty kilometres of the site.',
    gallery: galleryFor(2),
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
    demo: u('1600607687939-ce8a6c25118c', 1200),
    intro:
      'A renovation of a 90s villa into a slow, light-filled home. We stripped it back to structure and rebuilt the atmosphere with plaster, linen and pale teak.',
    body: 'The clients asked for fewer things, better made. The result is a house with almost nothing in it — and everything it needs.',
    gallery: galleryFor(4),
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
    demo: u('1567016432779-094069958ea5'),
    intro:
      'A guesthouse in the back streets of Seminyak, designed for long stays. Muted green, bone and terracotta — the brand palette, lived in.',
    body: 'Rooms are small but never tight: high ceilings, soft light, one good chair. The shared kitchen is the heart of the house.',
    gallery: galleryFor(6),
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
    demo: u('1583847268964-b28dc8f51f92', 1200),
    intro:
      'A dark, grounded townhouse for a couple who work from home. Deep mist green, smoked oak and black steel — calm with weight.',
    body: 'Daylight is managed, not maximised: deep reveals, sheer linen, pools of warm lamplight. A house for thinking.',
    gallery: galleryFor(1),
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
    demo: u('1554995207-c18c203602cb'),
    intro:
      'Our own studio — part workshop, part showroom, part argument for working slower. Every prototype lives here first.',
    body: 'Material samples on every wall, one long communal table, and the first run of every "by KAMU" piece in daily use.',
    gallery: galleryFor(3),
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
    demo: u('1522708323590-d24dbb6b0267'),
    intro:
      'A single open volume above a rice field — one room to live a whole life in. Currently on site.',
    body: 'The palette is the view: green, bone, wet earth. Completion expected late 2026.',
    gallery: galleryFor(5),
  },
];
