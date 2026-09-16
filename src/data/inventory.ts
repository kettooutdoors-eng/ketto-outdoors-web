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
  { id: 'flipping-jig', name: 'Flipping Jig' },
  { id: 'medium-crankbait', name: 'Medium Crankbait' },
  { id: 'wacky-worm', name: 'Wacky Worm' },
  { id: 'chatterbait', name: 'Chatterbait' },
  { id: 'urchin-finesse-bait', name: 'Urchin Finesse Bait' },
  { id: 'bulk-sinkers', name: 'Bulk Sinkers' },
  { id: 'bobbers', name: 'Bobbers' },
  { id: 'split-shot-weights', name: 'Split Shot Weights' },
  { id: 'scented-soft-bait', name: 'Scented Soft Bait' },
  { id: 'bobber-stops', name: 'Bobber Stops & Beads' },
  { id: 'junior-spinning-combo', name: 'Junior Spinning Combo' },
  { id: 'circle-hooks', name: 'Circle Hooks' },
  { id: 'dip-bait-treble-hooks', name: 'Dip Bait Treble Hooks' },
  { id: 'sliding-egg-sinkers', name: 'Sliding Egg Sinkers' },
  { id: 'no-roll-bank-sinkers', name: 'No-Roll Bank Sinkers' },
  { id: 'barrel-swivels', name: 'Barrel Swivels' },
  { id: 'fluorocarbon-leader', name: 'Fluorocarbon Leader Line' },
  { id: 'catfish-stink-bait', name: 'Catfish Stink Bait' },
  { id: 'catfish-spinning-combo', name: 'Catfish Spinning Combo' },
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
  'flipping-jig': 34,
  'medium-crankbait': 31,
  'wacky-worm': 52,
  chatterbait: 28,
  'urchin-finesse-bait': 19,
  'bulk-sinkers': 88,
  bobbers: 60,
  'split-shot-weights': 95,
  'scented-soft-bait': 44,
  'bobber-stops': 70,
  'junior-spinning-combo': 11,
  'circle-hooks': 75,
  'dip-bait-treble-hooks': 58,
  'sliding-egg-sinkers': 66,
  'no-roll-bank-sinkers': 54,
  'barrel-swivels': 80,
  'fluorocarbon-leader': 40,
  'catfish-stink-bait': 37,
  'catfish-spinning-combo': 8,
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
