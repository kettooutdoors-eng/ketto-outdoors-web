export type Condition = 'Like New' | 'Good' | 'Fair';

export interface ConditionGrade {
  label: Condition;
  description: string;
  /** Rough store-credit payout as a percentage of the item's original new price. */
  payoutPercent: string;
}

export const CONDITION_GRADES: ConditionGrade[] = [
  { label: 'Like New', description: 'Little to no visible use — full function, no cosmetic issues worth mentioning.', payoutPercent: '~30-35%' },
  { label: 'Good', description: 'Shows normal wear from real fishing — light scuffs or line marks — but works exactly like it should.', payoutPercent: '~20-25%' },
  { label: 'Fair', description: 'Clearly used — visible wear, maybe a repaired guide or a re-tied hook point — still fully functional, priced accordingly.', payoutPercent: '~10-15%' },
];

// Below this original price, a prepaid shipping label costs more than the trade-in
// credit would be worth — not worth it for either side.
export const MIN_TRADE_IN_VALUE = 25;

export interface UsedGearItem {
  id: string;
  name: string;
  category: string;
  condition: Condition;
  conditionNote: string;
  originalPrice: number;
  price: number;
  description: string;
  imagePlaceholderAlt: string;
}

// Empty until real trade-ins come in and get inspected — see /trade-in. Once something's
// graded and priced, add it here in the same shape and it'll show up on /used-gear
// automatically.
export const USED_GEAR: UsedGearItem[] = [];

export const USED_GEAR_META = {
  title: 'Used Gear — Ketto Outdoors',
  description: 'Quality-checked used fishing gear, priced below new.',
};

export const TRADE_IN_CATEGORIES = ['Lures / terminal tackle', 'Tackle box or bag', 'Line, leaders & accessories', 'Nets, pliers & tools', 'Other gear (no clothing)'];

// What we won't take, and why — shown as a plain list on /trade-in so people don't
// waste time describing gear that's out of scope before finding out.
export const TRADE_IN_EXCLUDED: string[] = [
  "Rods, reels, or rod & reel combos — they're too expensive to ship for the trade-in value to make sense.",
  'Clothing or apparel of any kind.',
  "Used hooks — loose or already rigged. Once a hook's been fished, we can't resell it safely, no matter the condition.",
  "Used soft plastics (worms, creature baits, and the like) — they tear, take on odor, and lose their action fast. We can only take these unused, still in their original packaging.",
];

export const TRADE_IN_VALUE_DISCLAIMER =
  "One honest heads-up: trade-in credit is often modest, especially for smaller or well-used items — a few dollars for a well-loved lure isn't unusual. We'll always tell you the actual offer before it's final, so nothing's a surprise, but don't expect trade-in value to come close to what you paid new.";

export const TRADE_IN_META = {
  title: 'Trade In Your Gear — Ketto Outdoors',
  description: "Send in gear you're not using — we'll inspect it, and if it passes, you get store credit and it gets a second life instead of the landfill.",
};
