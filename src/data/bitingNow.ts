export interface BitingPick {
  type: 'product' | 'bundle';
  /** Product id or bundle slug. */
  id: string;
  whyNow: string;
}

// General seasonal guidance, not a live/real-time bite report — update this
// list as the season actually changes. Update BITING_NOW_SEASON and
// BITING_NOW_INTRO alongside it.
export const BITING_NOW_SEASON = 'Early Fall';

export const BITING_NOW_INTRO =
  "Water's cooling and fish are feeding heavily before winter — that means moving baits and reaction strikes tend to outperform slow presentations right now. These are general seasonal picks, not a live bite report for your specific water, but a solid place to start without reading twenty forum threads first.";

// Max 10 — a mix of kits and individual gear so there's always a one-click,
// no-decision option.
export const BITING_NOW_PICKS: BitingPick[] = [
  { type: 'bundle', id: 'first-bass-kit', whyNow: "The complete starter setup — good timing to get outfitted right as the fall feeding window opens up." },
  { type: 'product', id: 'medium-crankbait', whyNow: 'Reaction baits like this shine in early fall as bass feed aggressively ahead of winter.' },
  { type: 'product', id: 'ratlin', whyNow: 'A search bait built for exactly this — fish are on the move, and a rattling lipless crank covers water fast to find them.' },
  { type: 'product', id: 'chatterbait', whyNow: 'Stained, cooling fall water plus a vibrating blade is a proven combination.' },
  { type: 'product', id: 'longshot', whyNow: 'Built for the murky, cooling-water conditions common on lakes and ponds this time of year.' },
  { type: 'bundle', id: 'first-catfish-kit', whyNow: 'Catfish stay very active well into fall — a good time to start if you haven’t yet.' },
  { type: 'product', id: 'flipping-jig', whyNow: 'As baitfish and vegetation thin out, fish tuck tighter to remaining cover — a jig flipped into it is a fall staple.' },
  { type: 'product', id: 'buzzrunner', whyNow: 'Still worth throwing during the low-light morning window before the water cools further.' },
  { type: 'bundle', id: 'never-fished-before-starter-kit', whyNow: 'Bait-and-bobber panfish action stays reliable into fall on most lakes and ponds.' },
  { type: 'product', id: 'swimshad', whyNow: 'Imitates baitfish schooling up in fall — exactly what predators are keyed in on right now.' },
];
