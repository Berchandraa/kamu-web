/**
 * Shop products — single source for the catalog and product pages.
 *
 * Swap slots: product-01.jpg … product-10.jpg in /public/assets/.
 * Categories per the brand PDF web spec: dining table, dining chair,
 * lounge chair, cabinets, lamp pendants.
 *
 * First launch: no cart — product pages link out to Tokopedia/Shopee
 * (per the PDF). Payment gateway arrives in launch two.
 */

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

export const marketplaces = {
  tokopedia: 'https://www.tokopedia.com/kamuconcepts',
  shopee: 'https://shopee.co.id/kamuconcepts',
};

export const categories = [
  { slug: 'dining-table', label: 'Dining Tables' },
  { slug: 'dining-chair', label: 'Dining Chairs' },
  { slug: 'lounge-chair', label: 'Lounge Chairs' },
  { slug: 'cabinets', label: 'Cabinets' },
  { slug: 'pendants', label: 'Lamp Pendants' },
] as const;

export interface Product {
  slug: string;
  name: string;
  category: (typeof categories)[number]['slug'];
  price: string;
  file: string;
  demo: string;
  desc: string;
  materials: string;
  dims: string;
  /** two alternate gallery shots — slots product-NN-alt-01/02.jpg */
  alts: [string, string];
}

// Detail/texture shot pool for alternate gallery images (verified IDs)
const altPool = [
  u('1581539250439-c96689b516dd'),
  u('1532372320572-cda25653a26d'),
  u('1567538096630-e0c55bd6374c'),
  u('1550581190-9c1c48d21d6c'),
  u('1611464908623-07f19927264e'),
  u('1505843490538-5133c6c7d0e1'),
];

const altsFor = (i: number): [string, string] => [
  altPool[i % altPool.length],
  altPool[(i + 3) % altPool.length],
];

export const products: Product[] = [
  {
    slug: 'victoria-dining-table',
    name: 'Victoria Dining Table',
    category: 'dining-table',
    price: 'Rp 14.500.000',
    file: 'product-01.jpg',
    demo: u('1519710164239-da123dc03ef4'),
    desc: 'Our signature table. A solid teak top with softened edges on a sculptural pedestal base — seats six without crowding, ages without complaint.',
    materials: 'Solid reclaimed teak, natural hard-wax oil finish',
    dims: 'L 220 × W 100 × H 75 cm',
    alts: altsFor(0),
  },
  {
    slug: 'tana-dining-table',
    name: 'Tana Dining Table',
    category: 'dining-table',
    price: 'Rp 11.200.000',
    file: 'product-02.jpg',
    demo: u('1604061986761-d9d0cc41b0d1'),
    desc: 'A rounder, smaller sibling to the Victoria. Made for slow breakfasts and long dinners in compact rooms.',
    materials: 'Solid teak, travertine inlay, matte finish',
    dims: 'Ø 140 × H 75 cm',
    alts: altsFor(1),
  },
  {
    slug: 'bold-dining-chair',
    name: 'Bold Dining Chair',
    category: 'dining-chair',
    price: 'Rp 3.400.000',
    file: 'product-03.jpg',
    demo: u('1503602642458-232111445657'),
    desc: 'Geometric where it can be, soft where it must be. A confident chair that disappears into daily use.',
    materials: 'Teak frame, hand-woven paper cord seat',
    dims: 'W 46 × D 52 × H 78 cm · SH 45 cm',
    alts: altsFor(2),
  },
  {
    slug: 'mira-dining-chair',
    name: 'Mira Dining Chair',
    category: 'dining-chair',
    price: 'Rp 2.900.000',
    file: 'product-04.jpg',
    demo: u('1577140917170-285929fb55b7'),
    desc: 'Designed for the Mira Hotel, kept in the collection by request. Curved back, generous seat.',
    materials: 'Teak frame, natural linen upholstery',
    dims: 'W 50 × D 54 × H 80 cm · SH 46 cm',
    alts: altsFor(3),
  },
  {
    slug: 'arc-lounge-chair',
    name: 'Arc Lounge Chair',
    category: 'lounge-chair',
    price: 'Rp 6.800.000',
    file: 'product-05.jpg',
    demo: u('1592078615290-033ee584e267'),
    desc: 'A low, deep lounge chair built around one continuous curve. The afternoon happens here.',
    materials: 'Bent teak laminate, bouclé upholstery',
    dims: 'W 72 × D 80 × H 68 cm · SH 38 cm',
    alts: altsFor(4),
  },
  {
    slug: 'kelana-lounge-chair',
    name: 'Kelana Lounge Chair',
    category: 'lounge-chair',
    price: 'Rp 5.400.000',
    file: 'product-06.jpg',
    demo: u('1532372320572-cda25653a26d'),
    desc: 'An open-frame lounger with a woven seat — light enough to follow the shade around the terrace.',
    materials: 'Teak frame, hand-woven rattan',
    dims: 'W 68 × D 76 × H 70 cm · SH 36 cm',
    alts: altsFor(5),
  },
  {
    slug: 'tana-cabinet',
    name: 'Tana Cabinet',
    category: 'cabinets',
    price: 'Rp 9.600.000',
    file: 'product-07.jpg',
    demo: u('1549497538-303791108f95'),
    desc: 'Quiet storage. Full-height doors on brass pivots, interior shelving in pale wood.',
    materials: 'Teak veneer, solid brass hardware',
    dims: 'W 120 × D 45 × H 160 cm',
    alts: altsFor(6),
  },
  {
    slug: 'bingin-sideboard',
    name: 'Bingin Sideboard',
    category: 'cabinets',
    price: 'Rp 12.800.000',
    file: 'product-08.jpg',
    demo: u('1586158291800-2665f07bba79'),
    desc: 'A long, low sideboard with fluted doors — built to anchor a dining room without shouting.',
    materials: 'Solid teak, fluted front, brass feet',
    dims: 'W 200 × D 45 × H 70 cm',
    alts: altsFor(7),
  },
  {
    slug: 'neo-steel-pendant',
    name: 'Neo Steel Pendant',
    category: 'pendants',
    price: 'Rp 2.400.000',
    file: 'product-09.jpg',
    demo: u('1507473885765-e6ed057f782c'),
    desc: 'A spun-steel pendant with a warm powder-coat interior. Direct light, soft edges.',
    materials: 'Spun steel, powder-coated, E27 fitting',
    dims: 'Ø 40 × H 28 cm · cable 200 cm',
    alts: altsFor(8),
  },
  {
    slug: 'uma-rattan-pendant',
    name: 'Uma Rattan Pendant',
    category: 'pendants',
    price: 'Rp 1.900.000',
    file: 'product-10.jpg',
    demo: u('1513506003901-1e6a229e2d15'),
    desc: 'Hand-woven rattan shade that throws patterned light across the ceiling at dusk.',
    materials: 'Hand-woven natural rattan, E27 fitting',
    dims: 'Ø 55 × H 40 cm · cable 200 cm',
    alts: altsFor(9),
  },
];
