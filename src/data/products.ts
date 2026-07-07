/**
 * Shop products - single source for the catalog and product pages.
 *
 * Product photos and details come from the KAMU Collection asset set.
 * Prices are temporary display estimates until the client confirms final pricing.
 */

const img = (name: string) => `/assets/products/kamu-collection/${name}`;

export const categories = [
  { slug: 'dining-table', label: 'Tables' },
  { slug: 'dining-chair', label: 'Chairs' },
  { slug: 'lounge-chair', label: 'Seating' },
  { slug: 'cabinets', label: 'Storage' },
  { slug: 'pendants', label: 'Lighting & Decor' },
] as const;

export interface Product {
  slug: string;
  name: string;
  category: (typeof categories)[number]['slug'];
  price: string;
  amount: number;
  file: string;
  demo: string;
  desc: string;
  materials: string;
  dims: string;
  alts: [string, string];
}

export const products: Product[] = [
  {
    slug: 'dining-table-01',
    name: 'Dining Table 01',
    category: 'dining-table',
    price: 'Rp 18.500.000',
    amount: 18500000,
    file: 'dining-table-01.png',
    demo: img('dining-table-01.png'),
    desc: 'A modern focal dining table combining the earthy allure of travertine with the permanence of stainless steel.',
    materials: 'Travertine top, stainless steel leg',
    dims: '220 x 100 x 75 cm',
    alts: [img('dining-table-02.png'), img('dining-table-03.png')],
  },
  {
    slug: 'dining-chair',
    name: 'Dining Chair',
    category: 'dining-chair',
    price: 'Rp 4.200.000',
    amount: 4200000,
    file: 'dining-chair-01.png',
    demo: img('dining-chair-01.png'),
    desc: 'A warm dining chair mixing mid-century restraint with tropical craftsmanship and raw natural texture.',
    materials: 'See final specification from client',
    dims: 'See final specification from client',
    alts: [img('dining-chair-02.png'), img('dining-chair-01.png')],
  },
  {
    slug: 'bar-chair-01',
    name: 'Bar Chair 01',
    category: 'dining-chair',
    price: 'Rp 3.800.000',
    amount: 3800000,
    file: 'bar-chair-01.png',
    demo: img('bar-chair-01.png'),
    desc: 'A statement bar chair with a split asymmetric backrest and block-like legs, bridging primitive artistry and refined modern minimalism.',
    materials: 'Teak wood',
    dims: '38 x 38 x 95 cm - seat height 65 cm',
    alts: [img('bar-chair-02.jpg'), img('bar-chair-01.png')],
  },
  {
    slug: 'coffee-table-05',
    name: 'Coffee Table 05',
    category: 'dining-table',
    price: 'Rp 7.500.000',
    amount: 7500000,
    file: 'coffee-table-01.png',
    demo: img('coffee-table-01.png'),
    desc: 'A sculptural coffee table with a seamless polished metallic finish that anchors contemporary minimalist interiors.',
    materials: 'Steel',
    dims: '85 x 60 x 32 cm',
    alts: [img('coffee-table-02.png'), img('coffee-table-01.png')],
  },
  {
    slug: 'side-table-04',
    name: 'Side Table 04',
    category: 'dining-table',
    price: 'Rp 4.500.000',
    amount: 4500000,
    file: 'side-table-01.png',
    demo: img('side-table-01.png'),
    desc: 'A refined sculptural side table designed as a functional accent for high-end contemporary resort interiors.',
    materials: 'Teak wood, marble top',
    dims: '30 x 40 x 50 cm',
    alts: [img('side-table-02.png'), img('side-table-03.png')],
  },
  {
    slug: 'bench-04',
    name: 'Bench 04',
    category: 'lounge-chair',
    price: 'Rp 6.500.000',
    amount: 6500000,
    file: 'bench-01.png',
    demo: img('bench-01.png'),
    desc: 'A linear bench with a plush cream boucle seat, suited for an entry, hallway, or the foot of a bed.',
    materials: 'Cream boucle upholstery',
    dims: '140 x 70 x 40 cm',
    alts: [img('bench-02.png'), img('bench-01.png')],
  },
  {
    slug: 'lounge-chair-05',
    name: 'Lounge Chair 05',
    category: 'lounge-chair',
    price: 'Rp 7.800.000',
    amount: 7800000,
    file: 'lounge-chair-05.png',
    demo: '/assets/products/product-collection-02/06.png',
    desc: 'A sculptural lounge chair with a bold wood frame and soft upholstered seat, balancing wabi-sabi authenticity with contemporary minimalism.',
    materials: 'Teak wood, upholstered cushion',
    dims: '73 x 50 x 80 cm - seat height 40 cm',
    alts: ['/assets/products/product-collection-02/05.png', '/assets/products/product-collection-02/06.png'],
  },
  {
    slug: 'pendant-lamp-01',
    name: 'Pendant Lamp 01',
    category: 'pendants',
    price: 'Rp 2.800.000',
    amount: 2800000,
    file: 'pendant-lamp-01.png',
    demo: '/assets/products/product-collection-02/11.png',
    desc: 'A layered pendant lamp designed to bring warm, diffused light above dining tables, kitchen islands, or living spaces.',
    materials: 'Aluminum',
    dims: 'dia. 37 cm',
    alts: ['/assets/products/product-collection-02/12-2.png', '/assets/products/product-collection-02/11.png'],
  },
  {
    slug: 'console-02',
    name: 'Console 02',
    category: 'cabinets',
    price: 'Rp 12.500.000',
    amount: 12500000,
    file: 'console-01.png',
    demo: img('console-01.png'),
    desc: 'A Japandi-style console with hidden storage, a light profile, and a raised wood-trim front that creates quiet shadow detail.',
    materials: 'See final specification from client',
    dims: '164 x 40 x 80 cm',
    alts: [img('console-02.png'), img('console-01.png')],
  },
  {
    slug: 'kitchen-cabinet-02',
    name: 'Kitchen Cabinet 02',
    category: 'cabinets',
    price: 'Rp 16.500.000',
    amount: 16500000,
    file: 'kitchen-cabinet-01.png',
    demo: img('kitchen-cabinet-01.png'),
    desc: 'A cabinet balancing tropical warmth and clean modern style, with woven texture that softens the piece and lets light through.',
    materials: 'See final specification from client',
    dims: '100 x 60 x 200 cm',
    alts: [img('kitchen-cabinet-02.png'), img('kitchen-cabinet-01.png')],
  },
];
