// PHASE 2 - Upgrade Credit Program, disabled until launch is stable.
//
// Idea: once a customer outgrows their original Ketto starter combo, they can send it
// back for store credit toward an upgraded combo (or anything else on the site) instead
// of it sitting in a closet. Inspired by shops like Sweeney's Sports already doing this,
// and by how often "upgrading from my starter combo" comes up as a milestone moment for
// beginner anglers — a real retention/loyalty loop, not just a nice gesture.
//
// This is deliberately separate from the general lures/tackle trade-in program
// (src/data/usedGear.ts), which explicitly excludes rods & reels because they're too
// expensive to ship for the trade-in value to make sense on small/cheap gear. This
// program only works because it's scoped to combos Ketto Outdoors originally sold —
// known SKUs, known baseline spec, simple inspection.
//
// Not routed or linked anywhere live yet: the route in App.tsx is commented out and no
// nav/footer/bundle page points here. Flip it on by uncommenting the route (and adding
// nav/footer links) once there's enough order volume to staff the inspection and
// shipping-label workflow.

export type UpgradeCreditCondition = 'Like New' | 'Good' | 'Fair';

export interface UpgradeCreditGrade {
  label: UpgradeCreditCondition;
  description: string;
  /** Rough store-credit payout as a percentage of the combo's original price. */
  creditPercent: string;
}

export const UPGRADE_CREDIT_GRADES: UpgradeCreditGrade[] = [
  {
    label: 'Like New',
    description: 'Reel retrieves smoothly with no grinding, drag holds under pressure, and the rod has no cracks, nicks, or missing guides.',
    creditPercent: '~40-45%',
  },
  {
    label: 'Good',
    description: 'Normal wear from real fishing — the reel still casts and retrieves cleanly, and the rod is straight with all its guides intact.',
    creditPercent: '~25-30%',
  },
  {
    label: 'Fair',
    description: 'Clearly used but still fully functional — rod and reel both work, even with visible cosmetic wear.',
    creditPercent: '~15-20%',
  },
];

export interface UpgradeCreditEligibleCombo {
  productId: string;
  name: string;
}

// Only combos originally sold by Ketto Outdoors are eligible — we can trust the baseline
// spec of what we're grading against, which keeps inspection simple and low-risk.
export const UPGRADE_CREDIT_ELIGIBLE_COMBOS: UpgradeCreditEligibleCombo[] = [
  { productId: 'junior-spinning-combo', name: 'Junior Spinning Combo' },
  { productId: 'spinning-combo', name: 'Spinning Rod & Reel Combo' },
  { productId: 'catfish-spinning-combo', name: 'Catfish Spinning Combo' },
  { productId: 'baitcaster', name: 'Baitcaster Combo' },
];

export const UPGRADE_CREDIT_EXCLUDED: string[] = [
  "Rods or reels bought separately, or not originally purchased from Ketto Outdoors — we can't verify what we're grading against.",
  'A rod without its matching reel, or a reel without its rod — the combo has to come back as a complete, matched set.',
  "A cracked or snapped rod blank, or a reel that no longer retrieves line — that's beyond what a credit can cover.",
];

export const UPGRADE_CREDIT_STEPS = [
  { title: 'Tell us which combo you have', body: "Let us know which Ketto combo you're trading in and how it's held up." },
  { title: "We'll email you a prepaid label", body: 'If it sounds like a fit, shipping it back to us costs you nothing.' },
  { title: 'We check it out', body: 'Reel retrieve, drag, rod guides and blank — a real function check, graded against the scale below.' },
  { title: 'Store credit lands in your account', body: "Once it passes, your credit is ready to put toward your next combo — or anything else on the site." },
];

export const UPGRADE_CREDIT_VALUE_DISCLAIMER =
  "Upgrade credit is store credit only, with no cash value — and like any trade-in, the exact amount depends on how the combo actually checks out, not just its age.";

export const UPGRADE_CREDIT_META = {
  title: 'Upgrade Credit — Ketto Outdoors',
  description: "Outgrown your starter combo? Trade it in for store credit toward an upgrade once you're ready for the next one.",
};
