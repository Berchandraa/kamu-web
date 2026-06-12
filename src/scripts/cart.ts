/**
 * Cart — frontend state only, structured as a thin façade so the
 * Shopify Storefront API can replace the internals later without
 * touching any UI code:
 *
 *   today: localStorage lines, synchronous
 *   later: cartLinesAdd / cartLinesUpdate / cartLinesRemove mutations,
 *          same line shape (id ↔ merchandiseId, amount ↔ price.amount)
 *
 * UI listens for `cart:updated` on window; anything can request the
 * drawer with `cart:open`.
 */

export interface CartLine {
  /** product slug today; Shopify variant/merchandise id later */
  id: string;
  name: string;
  /** numeric IDR */
  amount: number;
  /** preferred image (local asset path) */
  image: string;
  /** demo fallback while real assets are pending */
  fallback: string;
  qty: number;
}

const KEY = 'kamu-cart';

function read(): CartLine[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? '[]');
  } catch {
    return [];
  }
}

function write(lines: CartLine[]) {
  localStorage.setItem(KEY, JSON.stringify(lines));
  window.dispatchEvent(new CustomEvent('cart:updated'));
}

export const cart = {
  lines: (): CartLine[] => read(),

  count: (): number => read().reduce((n, l) => n + l.qty, 0),

  subtotal: (): number => read().reduce((n, l) => n + l.amount * l.qty, 0),

  add(item: Omit<CartLine, 'qty'>, qty = 1) {
    const lines = read();
    const line = lines.find((l) => l.id === item.id);
    if (line) {
      line.qty += qty;
    } else {
      lines.push({ ...item, qty });
    }
    write(lines);
  },

  setQty(id: string, qty: number) {
    let lines = read();
    const line = lines.find((l) => l.id === id);
    if (!line) return;
    line.qty = qty;
    if (line.qty <= 0) lines = lines.filter((l) => l.id !== id);
    write(lines);
  },

  remove(id: string) {
    write(read().filter((l) => l.id !== id));
  },
};

export const formatIDR = (n: number): string =>
  `Rp ${n.toLocaleString('id-ID')}`;

export const openCart = () =>
  window.dispatchEvent(new CustomEvent('cart:open'));
