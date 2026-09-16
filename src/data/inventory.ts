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

// Everything is out of stock until real inventory is sourced and received —
// update these once actual stock counts exist.
export const INVENTORY_DEFAULTS: Record<string, number> = Object.fromEntries(
  INVENTORY_PRODUCTS.map((p) => [p.id, 0])
);

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
