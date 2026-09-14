export interface InventoryProduct {
  id: string;
  name: string;
}

export const INVENTORY_PRODUCTS: InventoryProduct[] = [
  { id: 'deep-six', name: 'Deep Six' },
  { id: 'driftworm', name: 'Driftworm' },
  { id: 'baithooks', name: 'Baithooks' },
  { id: 'spinning-combo', name: 'Spinning Rod & Reel Combo' },
  { id: 'baitcaster', name: 'Baitcaster Combo' },
  { id: 'longshot', name: 'Longshot' },
  { id: 'chugger', name: 'Chugger' },
  { id: 'ripple', name: 'Ripple' },
  { id: 'bottomjig', name: 'Bottomjig' },
  { id: 'buzzrunner', name: 'Buzzrunner' },
  { id: 'swimshad', name: 'Swimshad' },
  { id: 'ratlin', name: 'Ratlin' },
  { id: 'padhopper', name: 'Padhopper' },
  { id: 'flutterspoon', name: 'Flutterspoon' },
  { id: 'finessedrop', name: 'Finesse Drop' },
  { id: 'ribtail', name: 'Ribtail' },
  { id: 'crawdaddy', name: 'Crawdaddy' },
  { id: 'flukeshad', name: 'Flukeshad' },
  { id: 'tubehead', name: 'Tubehead' },
  { id: 'urchin-bait', name: 'Urchin Bait' },
];

export const INVENTORY_DEFAULTS: Record<string, number> = {
  'deep-six': 42,
  driftworm: 65,
  baithooks: 90,
  'spinning-combo': 4,
  baitcaster: 18,
  longshot: 24,
  chugger: 16,
  ripple: 20,
  bottomjig: 38,
  buzzrunner: 22,
  swimshad: 30,
  ratlin: 27,
  padhopper: 12,
  flutterspoon: 33,
  finessedrop: 9,
  ribtail: 48,
  crawdaddy: 26,
  flukeshad: 35,
  tubehead: 29,
  'urchin-bait': 21,
};

export function stockLabel(qty: number): string {
  if (qty <= 0) return 'Out of stock';
  if (qty <= 5) return `Only ${qty} left`;
  return 'In stock';
}

export function stockColor(qty: number): string {
  if (qty <= 0) return 'var(--stock-out)';
  if (qty <= 5) return 'var(--stock-low)';
  return 'var(--stock-in)';
}
