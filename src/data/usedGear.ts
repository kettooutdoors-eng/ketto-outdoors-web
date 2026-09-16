export type Condition = 'Like New' | 'Good' | 'Fair';

export interface ConditionGrade {
  label: Condition;
  description: string;
}

export const CONDITION_GRADES: ConditionGrade[] = [
  { label: 'Like New', description: 'Little to no visible use — full function, no cosmetic issues worth mentioning.' },
  { label: 'Good', description: 'Shows normal wear from real fishing — light scuffs or line marks — but works exactly like it should.' },
  { label: 'Fair', description: 'Clearly used — visible wear, maybe a repaired guide or a re-tied hook point — still fully functional, priced accordingly.' },
];

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

export const TRADE_IN_CATEGORIES = ['Rod & reel combo', 'Rod only', 'Reel only', 'Lures / terminal tackle', 'Tackle box or bag', 'Other gear'];

export const TRADE_IN_META = {
  title: 'Trade In Your Gear — Ketto Outdoors',
  description: "Send in gear you're not using — we'll inspect it, and if it passes, you get store credit and it gets a second life instead of the landfill.",
};
