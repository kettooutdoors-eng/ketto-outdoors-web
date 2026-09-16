import type { Bundle } from './types';

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
  {
    id: 'never-fished-before-starter-kit',
    slug: 'never-fished-before-starter-kit',
    name: 'Never Fished Before Starter Kit',
    tagline: 'Bait, bobber, and a rod. The way almost everyone actually caught their first fish.',
    // Placeholder introductory price — confirm against real anchor-combo
    // wholesale cost before launch.
    price: 49.99,
    metaTitle: 'Never Fished Before Starter Kit — Ketto Outdoors',
    metaDescription: 'The simplest possible way to catch your first fish — a rod, a bobber, and bait that needs no digging for worms. One kit, no decisions.',
    scenario: 'You’ve genuinely never done this before — no rod, no idea what half the words mean, and you’d rather just go stand by the water with your kid or a friend and catch something than research technique first.',
    reassurance: 'This is the whole thing. Tie on a hook, clip on a bobber, drop it in near a dock or some weeds, and wait for the bobber to go under. You don’t need to know how to cast far or work a lure for this to work.',
    sourcingNote: 'A shorter, lighter rod is genuinely easier to handle for a first trip — that’s the name-brand piece, so you’re not learning on something flimsy. Everything else here is ours: sized-down hooks and a scented soft bait so nobody has to go dig worms out of the backyard first.',
    riggingNote: 'This rig has exactly one knot and no lure to tie on right — the included card shows the whole bobber-and-hook setup in about four steps, plus the QR code to the video version.',
    imagePlaceholderAlt: 'Never Fished Before Starter Kit — full contents laid out',
    components: [
      {
        label: 'Compact spinning combo',
        detail: 'Name-brand, 5–6 ft light-action rod & reel (Ugly Stik Junior or equivalent), spooled and ready',
        whyThis: 'Shorter and lighter than our bass combo on purpose — easier for a first-timer, or a kid, to actually hold and reel without fighting the rod itself.',
        sourced: 'anchor-brand',
      },
      {
        label: 'Bobbers',
        detail: 'Round snap-on floats, assorted sizes, 5-pack',
        whyThis: 'The bobber going under is the easiest bite you’ll ever learn to read — no guessing whether that was a fish or the current.',
        sourced: 'private-label',
      },
      {
        label: 'Baitholder hooks',
        detail: 'Small, sizes 6–10, 10-pack',
        whyThis: 'Sized for panfish and whatever’s actually biting near the bank — not the oversized hooks that come in most starter kits.',
        sourced: 'private-label',
      },
      {
        label: 'Split shot weights',
        detail: 'Assorted sizes, reusable, pack of 20',
        whyThis: 'Pinch one on above the hook so your bait sinks just enough to hang below the bobber instead of floating uselessly on top.',
        sourced: 'private-label',
      },
      {
        label: 'Scented soft bait',
        detail: 'Trout-worm style, pre-scented — no live bait needed',
        whyThis: 'Works like a real worm without a trip to dig for one or a bait shop stop. Thread it on and go.',
        sourced: 'private-label',
      },
      {
        label: 'Bobber stops & beads',
        detail: 'Adjustable stops with beads, pack of 20',
        whyThis: 'Lets you set exactly how deep your bait hangs and slide it up or down as you figure out where the fish are holding.',
        sourced: 'private-label',
      },
    ],
  },
  {
    id: 'first-catfish-kit',
    slug: 'first-catfish-kit',
    name: 'First Catfish Kit',
    tagline: 'Heavier gear, bigger bait, one setup that works off any bank or dock after dark.',
    // Placeholder introductory price — confirm against real anchor-combo
    // wholesale cost before launch.
    price: 69.99,
    metaTitle: 'First Catfish Kit — Ketto Outdoors',
    metaDescription: 'Everything a beginner needs to catch their first catfish from the bank — circle hooks, real catfish rigging, and gear built to handle a bigger fish.',
    scenario: 'You want to fish for catfish — a river bank, a lake at dusk, a dock after dark — and catfish gear is genuinely different from bass gear, so the bass kit and a search engine aren’t going to cut it.',
    reassurance: 'You don’t need more than this to start. This rig will put bait in front of catfish from any bank or dock — add heavier gear later only once you’re chasing bigger water.',
    sourcingNote: 'Catfish gear takes more abuse than bass gear, so the rod and reel is a name-brand step up in backbone — not the place to save a few dollars. The circle hooks, sinkers, and swivels are ours: real catfish-rig hardware, not a random assortment that happens to be labeled for catfish.',
    riggingNote: 'Catfish rigging (circle hooks, sliding sinkers, swivels, leader) confuses most first-timers more than anything else in fishing. The included card walks through both rigs in this kit — a slip-sinker rig for cut bait, and a dip-bait rig for the stink bait — plus a QR code to the video version.',
    imagePlaceholderAlt: 'First Catfish Kit — full contents laid out',
    components: [
      {
        label: 'Medium-heavy spinning combo',
        detail: 'Name-brand catfish-rated rod & reel (Ugly Stik Catfish Combo or equivalent), spooled with heavier line',
        whyThis: 'Catfish pull harder than the bass gear next door is built for — this is rated for the fight and the weight of the rigs below, not just labeled bigger.',
        sourced: 'anchor-brand',
      },
      {
        label: 'Circle hooks',
        detail: '5/0–7/0, assorted, 10-pack',
        whyThis: 'Circle hooks hook catfish in the corner of the mouth almost on their own, so you’re not gut-hooking fish while you’re still learning to feel a bite.',
        sourced: 'private-label',
      },
      {
        label: 'Dip bait treble hooks',
        detail: 'Bait-holder spring treble hooks, 10-pack',
        whyThis: 'Prepared stink/dip bait needs a hook built to hold paste bait — a regular hook just lets it slide off on the cast.',
        sourced: 'private-label',
      },
      {
        label: 'Sliding egg sinkers',
        detail: '1 oz, 10-pack',
        whyThis: 'Lets a catfish pick up the bait and swim off without feeling the weight — the standard slip-sinker rig for calmer water.',
        sourced: 'private-label',
      },
      {
        label: 'No-roll bank sinkers',
        detail: '2 oz, 10-pack',
        whyThis: 'Flat sinkers that hold bottom in current instead of rolling away — what you want fishing a river bank instead of a still pond.',
        sourced: 'private-label',
      },
      {
        label: 'Barrel swivels',
        detail: 'Heavy-duty, 10-pack',
        whyThis: 'Keeps your leader from twisting up on itself and connects your rig without a bulky knot.',
        sourced: 'private-label',
      },
      {
        label: 'Fluorocarbon leader line',
        detail: '30 lb test',
        whyThis: 'Abrasion-resistant enough to survive catfish dragging your rig across rocks and structure on the bottom.',
        sourced: 'private-label',
      },
      {
        label: 'Catfish stink bait',
        detail: 'Prepared dip/paste bait',
        whyThis: 'No cut bait or chicken liver required to start — just dip the treble hook in and cast.',
        sourced: 'private-label',
      },
    ],
  },
];

export function getBundle(slug: string): Bundle | undefined {
  return BUNDLES.find((b) => b.slug === slug);
}
