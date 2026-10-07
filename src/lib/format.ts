/** Shows whole-dollar prices without cents ($19), and keeps cents only where they exist (tax, discounts). */
export function formatPrice(n: number): string {
  return Number.isInteger(n) ? `$${n}` : `$${n.toFixed(2)}`;
}
