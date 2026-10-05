import type { Bundle } from './types';

export const BUNDLES: Bundle[] = [
  {
    id: 'first-bass-kit',
    slug: 'first-bass-kit',
    name: 'First Bass Kit',
    tagline: 'Lures, hooks, and weights for your first bass.',
    // Priced about 12% under the sum of the individual pieces — confirm against
    // real costs before launch.
    price: 44.99,
    metaTitle: 'First Bass Kit | Ketto Outdoors',
    metaDescription: 'Beginner bass tackle: lures, hooks, and weights that work together. Bring your own rod and reel.',
    scenario: 'You want to catch bass from a pond, lake, or dock, and you don’t want to spend an hour reading advice first.',
    reassurance: 'This is all the tackle you need to start. Bring your own rod and reel.',
    sourcingNote: 'The hooks, jigs, and baits are ours. We pick them factory-direct, so you don’t pay brand markup, and the hooks won’t bend on your first real fish.',
    riggingNote: 'You only need one knot and two simple rigs. Everything else ties on the same way.',
    riggingSteps: [
      { title: 'Learn one knot: the improved clinch', detail: 'Thread the line through the eyelet, wrap the tag end around the main line 5-6 times, pass it back through the loop by the eyelet and then through the big loop, wet it, and pull tight. Use it for every hard lure and jig in this kit.' },
      { title: 'Wacky-rig the worm', detail: 'Roll the O-ring onto the middle of the worm and hook through the ring, not the worm. This is the one bait that doesn’t tie straight to your line.' },
      { title: 'Add a trailer to the jig or chatterbait', detail: 'Thread a soft plastic onto the hook for extra bulk. Both work without one, but better with.' },
      { title: 'Test every knot', detail: 'Give the line a firm tug after every knot. If it slips, retie it.' },
      { title: 'Match your retrieve to the lure', detail: 'Each lure’s page has its own "How to Fish It". Reel steady for the crankbait and swimbait, hop and pause for the jig, twitch and pause for the wacky worm and finesse bait.' },
    ],
    imagePlaceholderAlt: 'First Bass Kit, full contents laid out',
    components: [
      {
        label: 'Baitholder hooks',
        detail: 'Octopus-style, double-barbed circle-style, 10-pack',
        whyThis: 'Cheap hooks cost you fish. These are made to hold.',
        sourced: 'private-label',
        productId: 'baithooks',
      },
      {
        label: 'Sinkers',
        detail: 'Bulk fishing weights, assorted, 10-pack',
        whyThis: 'Gets your bait down to where the fish are.',
        sourced: 'private-label',
        productId: 'bulk-sinkers',
      },
      {
        label: 'Flipping jig',
        detail: '3/8 oz, painted head with eyes, 3/0 hook',
        whyThis: 'The jig to tie on when you don’t know what else to throw. It works almost anywhere.',
        sourced: 'private-label',
        productId: 'flipping-jig',
      },
      {
        label: 'Crankbait',
        detail: 'Medium diving, 66mm / 14g, internal rattle, ~100mm with hook',
        whyThis: 'Cast it and reel it back steady. The rattle and wobble get a bass’s attention.',
        sourced: 'private-label',
        productId: 'medium-crankbait',
      },
      {
        label: 'Paddle tail swimbait',
        detail: '8-8.9cm, paired with a 4.8g jig head',
        whyThis: 'Swims like a real baitfish at any speed. Hard to fish wrong.',
        sourced: 'private-label',
        productId: 'swimshad',
      },
      {
        label: 'Wacky worm',
        detail: '13.5cm / 5in, 7.5g, green pumpkin & watermelon, with a 1/0 wacky hook and O-ring',
        whyThis: 'Rig it, cast it, and let it sink. One of the easiest soft plastics to fish.',
        sourced: 'private-label',
        productId: 'wacky-worm',
      },
      {
        label: 'Chatterbait',
        detail: '3/8 oz, green pumpkin & chartreuse/white',
        whyThis: 'It vibrates as you reel, so fish can find it in cloudy water.',
        sourced: 'private-label',
        productId: 'chatterbait',
      },
      {
        label: 'Urchin-style finesse bait',
        detail: '17mm, green pumpkin, watermelon seed, chartreuse, with 1/16 oz and 3/32 oz nail/push weights',
        whyThis: 'For the days the other lures don’t get bit. Small, subtle, and easy to drop next to cover.',
        sourced: 'private-label',
        productId: 'urchin-finesse-bait',
      },
    ],
  },
  {
    id: 'never-fished-before-starter-kit',
    slug: 'never-fished-before-starter-kit',
    name: 'Never Fished Before Starter Kit',
    tagline: 'A bobber, hooks, and bait. The easiest way to catch your first fish.',
    // Priced about 12% under the sum of the individual pieces — confirm against
    // real costs before launch.
    price: 18.99,
    metaTitle: 'Never Fished Before Starter Kit | Ketto Outdoors',
    metaDescription: 'The simplest way to catch your first fish: a bobber, hooks, and bait with no worms to dig. Bring your own rod and reel.',
    scenario: 'You’ve never fished before and you don’t know the terms. You just want to stand by the water with a friend or your kid and catch something.',
    reassurance: 'This is the whole setup. Tie on a hook, clip on a bobber, drop it near a dock or weeds, and wait for the bobber to go under. Bring your own rod and reel.',
    sourcingNote: 'Everything here is ours. The hooks are sized small, and the soft bait is scented, so you don’t have to dig for worms.',
    riggingNote: 'One rig, one knot, five steps. That’s the whole setup.',
    riggingSteps: [
      { title: 'Tie on the hook', detail: 'Thread the line through the hook’s eye and tie an improved clinch knot. Wrap the tag end around the line 5-6 times, pass it back through the loop, wet it, and pull tight.' },
      { title: 'Pinch on a split shot', detail: 'Pinch one split shot onto the line 6-12 inches above the hook. Use just enough to sink the bait, not enough to pull the bobber under.' },
      { title: 'Clip on the bobber', detail: 'Snap the bobber on above the weight. The distance from bobber to hook is how deep your bait hangs. Start at 2-3 feet.' },
      { title: 'Bait the hook', detail: 'Thread the scented soft bait onto the hook, or use a live worm.' },
      { title: 'Cast near cover and wait', detail: 'Cast near a dock, weeds, or a drop-off and watch the bobber. When it goes under and stays down, reel and set the hook.' },
    ],
    imagePlaceholderAlt: 'Never Fished Before Starter Kit, full contents laid out',
    components: [
      {
        label: 'Bobbers',
        detail: 'Round snap-on floats, assorted sizes, 5-pack',
        whyThis: 'A bobber going under is the easiest bite to read. You can tell it’s a fish.',
        sourced: 'private-label',
        productId: 'bobbers',
      },
      {
        label: 'Baitholder hooks',
        detail: 'Small, sizes 6-10, 10-pack',
        whyThis: 'Small hooks sized for panfish and the fish biting near the bank.',
        sourced: 'private-label',
        productId: 'baithooks',
      },
      {
        label: 'Split shot weights',
        detail: 'Assorted sizes, reusable, pack of 20',
        whyThis: 'Pinch one on above the hook so the bait sinks and hangs under the bobber.',
        sourced: 'private-label',
        productId: 'split-shot-weights',
      },
      {
        label: 'Scented soft bait',
        detail: 'Trout-worm style, pre-scented. No live bait needed',
        whyThis: 'Works like a real worm without digging for one. Thread it on and go.',
        sourced: 'private-label',
        productId: 'scented-soft-bait',
      },
      {
        label: 'Bobber stops & beads',
        detail: 'Adjustable stops with beads, pack of 20',
        whyThis: 'Set how deep your bait hangs, and move it up or down as you find the fish.',
        sourced: 'private-label',
        productId: 'bobber-stops',
      },
    ],
  },
  {
    id: 'first-catfish-kit',
    slug: 'first-catfish-kit',
    name: 'First Catfish Kit',
    tagline: 'Heavier tackle and bigger bait for catfish from the bank or a dock.',
    // Priced about 12% under the sum of the individual pieces — confirm against
    // real costs before launch.
    price: 34.99,
    metaTitle: 'First Catfish Kit | Ketto Outdoors',
    metaDescription: 'Beginner catfish tackle for the bank: circle hooks, rigging hardware, and stink bait. Bring your own rod and reel.',
    scenario: 'You want to catch catfish from a river bank, a lake at dusk, or a dock after dark. Catfish tackle is different from bass tackle.',
    reassurance: 'This is all the tackle you need to start. Bring your own rod and reel.',
    sourcingNote: 'Catfish tackle takes more abuse, so the circle hooks, sinkers, and swivels are built for catfish rigs, not a random mix.',
    riggingNote: 'This kit rigs two ways: a slip-sinker rig for cut bait, and a simpler rig for stink bait.',
    riggingSteps: [
      { title: 'Rig one (cut bait): thread on a sinker', detail: 'Slide a sliding egg sinker (still water) or a no-roll bank sinker (current) onto your main line first.' },
      { title: 'Rig one: tie on a swivel', detail: 'Tie a barrel swivel below the sinker so the sinker can’t slide down to your hook.' },
      { title: 'Rig one: add leader and hook', detail: 'Tie 12-18 inches of fluorocarbon leader to the swivel, then tie on a circle hook and add cut bait.' },
      { title: 'Rig two (dip bait): skip the sinker', detail: 'Near the bank, stink bait often needs no weight. Tie your leader straight to the dip bait treble hook.' },
      { title: 'Rig two: load the spring', detail: 'Pack stink bait around the spring on the treble hook and twist it until it holds together.' },
      { title: 'Cast, place the rod, and wait', detail: 'Cast near structure, set the rod in a holder or against something stable, and leave it. Catfish are a wait-and-watch fish.' },
      { title: 'Let the circle hook do the work', detail: 'When the rod loads up or line peels out steadily, don’t yank. Just start reeling. The circle hook sets itself as the fish turns.' },
    ],
    imagePlaceholderAlt: 'First Catfish Kit, full contents laid out',
    components: [
      {
        label: 'Circle hooks',
        detail: '5/0-7/0, assorted, 10-pack',
        whyThis: 'Circle hooks catch catfish in the corner of the mouth, so you aren’t gut-hooking fish while you learn the bite.',
        sourced: 'private-label',
        productId: 'circle-hooks',
      },
      {
        label: 'Dip bait treble hooks',
        detail: 'Bait-holder spring treble hooks, 10-pack',
        whyThis: 'Stink bait needs a hook that holds paste. A regular hook lets it slide off when you cast.',
        sourced: 'private-label',
        productId: 'dip-bait-treble-hooks',
      },
      {
        label: 'Sliding egg sinkers',
        detail: '1 oz, 10-pack',
        whyThis: 'Lets a catfish take the bait and swim off without feeling the weight. Best in calm water.',
        sourced: 'private-label',
        productId: 'sliding-egg-sinkers',
      },
      {
        label: 'No-roll bank sinkers',
        detail: '2 oz, 10-pack',
        whyThis: 'Flat sinkers that stay put in current. Use these on a river bank.',
        sourced: 'private-label',
        productId: 'no-roll-bank-sinkers',
      },
      {
        label: 'Barrel swivels',
        detail: 'Heavy-duty, 10-pack',
        whyThis: 'Stops your leader from twisting and joins the rig without a bulky knot.',
        sourced: 'private-label',
        productId: 'barrel-swivels',
      },
      {
        label: 'Fluorocarbon leader line',
        detail: '30 lb test',
        whyThis: 'Tough enough to survive being dragged over rocks on the bottom.',
        sourced: 'private-label',
        productId: 'fluorocarbon-leader',
      },
      {
        label: 'Catfish stink bait',
        detail: 'Prepared dip/paste bait',
        whyThis: 'No cut bait or chicken liver needed. Dip the treble hook and cast.',
        sourced: 'private-label',
        productId: 'catfish-stink-bait',
      },
    ],
  },
];

/** Kits listed cheapest first, for the Home and Kits page grids. */
export const BUNDLES_BY_PRICE = [...BUNDLES].sort((a, b) => a.price - b.price);

export function getBundle(slug: string): Bundle | undefined {
  return BUNDLES.find((b) => b.slug === slug);
}
