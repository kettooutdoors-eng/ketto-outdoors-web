import type { Bundle } from './types';

// Only the First Bass Kit is fully specified for now — add more BUNDLES
// entries here once contents/pricing are locked for the others (Dock & Pier
// Panfish Kit, Never Fished Before Starter Kit, etc.).
export const BUNDLES: Bundle[] = [
  {
    id: 'first-bass-kit',
    slug: 'first-bass-kit',
    name: 'First Bass Kit',
    tagline: 'One box. Everything you need for your first bass. Nothing you don’t.',
    // Placeholder introductory price — confirm against real anchor-combo
    // wholesale cost before launch.
    price: 79.99,
    metaTitle: 'First Bass Kit — Ketto Outdoors',
    metaDescription: 'Everything a beginner needs to catch their first bass, picked for you. One kit, one price, no guessing.',
    scenario: 'You want to fish for bass — a pond, a local lake, a dock near you — and you don’t want to spend an hour reading conflicting advice before you can even cast.',
    reassurance: 'You don’t need more than this to start. This kit alone will catch bass in almost any pond or lake — add to it later once you know what you actually want more of.',
    sourcingNote: 'The rod and reel is a name you’ve probably heard of, at a fair price — that’s not the place to gamble on an unknown brand. The hooks, jigs, and baits are ours: we test and pick these factory-direct, so you’re not paying inflated brand markup for gear that’s functionally the same, and you’re not getting dollar-store hooks that bend on the first real fish.',
    riggingNote: 'Every kit ships with a one-page rigging card (and a QR code to the video version) so you’re not guessing how any of this goes together the night before your trip.',
    imagePlaceholderAlt: 'First Bass Kit — full contents laid out',
    components: [
      {
        label: 'Spinning rod & reel combo',
        detail: 'Name-brand combo (Ugly Stik GX2 or equivalent), spooled and ready to cast',
        whyThis: 'This is the one piece of gear beginners have strong opinions about — an unknown brand here is where trust breaks. We use a name you can look up and trust, not a house brand.',
        sourced: 'anchor-brand',
      },
      {
        label: 'Baitholder hooks',
        detail: 'Octopus-style, double-barbed circle-style, 10-pack',
        whyThis: 'The hook people online blame most often for lost fish is the cheap one that came free with a combo. These aren’t that.',
        sourced: 'private-label',
      },
      {
        label: 'Sinkers',
        detail: 'Bulk fishing weights, assorted, 10-pack',
        whyThis: 'Basic, boring, and exactly what you need to get a bait down to where the fish actually are.',
        sourced: 'private-label',
      },
      {
        label: 'Flipping jig',
        detail: '3/8 oz, painted head with eyes, 3/0 hook',
        whyThis: 'This is the jig you tie on when you don’t know what else to throw. Works almost everywhere.',
        sourced: 'private-label',
      },
      {
        label: 'Crankbait',
        detail: 'Medium diving, 66mm / 14g, internal rattle, ~100mm with hook',
        whyThis: 'Cast it, reel it back steady — the rattle and wobble do the work of getting a bass’s attention for you.',
        sourced: 'private-label',
      },
      {
        label: 'Paddle tail swimbait',
        detail: '8–8.9cm, paired with a 4.8g jig head',
        whyThis: 'Looks and swims like a real baitfish at any speed you reel it — hard to fish wrong.',
        sourced: 'private-label',
      },
      {
        label: 'Wacky worm',
        detail: '13.5cm / 5in, 7.5g — green pumpkin & watermelon, with a 1/0 wacky hook and O-ring',
        whyThis: 'Rig it, cast it, let it sink and shimmy. About as close to a sure thing as soft plastics get.',
        sourced: 'private-label',
      },
      {
        label: 'Chatterbait',
        detail: '3/8 oz — green pumpkin & chartreuse/white',
        whyThis: 'Vibrates as you reel, which means fish can find it even when the water’s stained or cloudy.',
        sourced: 'private-label',
      },
      {
        label: 'Urchin-style bait',
        detail: '17mm — green pumpkin, watermelon seed, chartreuse — with 1/16 oz and 3/32 oz nail/push weights',
        whyThis: 'A finesse option for the days the other seven don’t get bit — small, subtle, and easy to drop right next to cover.',
        sourced: 'private-label',
      },
    ],
  },
];

export function getBundle(slug: string): Bundle | undefined {
  return BUNDLES.find((b) => b.slug === slug);
}
