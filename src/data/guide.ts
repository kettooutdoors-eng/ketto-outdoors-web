export interface GuideSection {
  id: string;
  eyebrow: string;
  heading: string;
  intro?: string;
  body?: string;
  listItems?: string[];
  imagePlaceholder?: string;
  cards?: { kicker: string; heading: string; body: string }[];
}

export const GUIDE_HERO = {
  eyebrow: "A short beginner's guide",
  heading: 'New to Fishing? Start Here.',
  intro: "You don't need years of experience or a boat full of gear. Here's everything you need to catch your first fish.",
  jumpLinks: [
    { label: 'Gear', anchor: 'gear' },
    { label: 'Casting', anchor: 'cast' },
    { label: 'Reeling', anchor: 'reel' },
    { label: 'The Bite', anchor: 'strike' },
    { label: 'Where to Fish', anchor: 'where' },
    { label: 'Before You Go', anchor: 'before' },
    { label: 'Handling Fish', anchor: 'handling' },
  ],
};

export const GUIDE_SECTIONS: GuideSection[] = [
  {
    id: 'gear',
    eyebrow: 'Gear check',
    heading: 'What you actually need',
    listItems: [
      'A rod and reel (spinning combos are easiest to learn on)',
      'Fishing line already spooled on the reel',
      'One or two lures — see our Deep Six for a forgiving starter',
      'A pair of pliers to remove hooks safely',
      'A local fishing license, if required in your area',
    ],
    imagePlaceholder: 'Drop a photo of beginner tackle/gear laid out',
  },
  {
    id: 'tie',
    eyebrow: 'Before you cast',
    heading: 'Tie on your lure',
    body: "Thread your line through the lure's eyelet, then tie a simple improved clinch knot: wrap the tag end around the main line 5–6 times, pass it back through the loop near the eyelet, then through the big loop you just made, and pull tight. Trim the extra line and give it a firm tug to make sure it holds.",
  },
  {
    id: 'cast',
    eyebrow: 'Step 1',
    heading: 'Learn the cast',
    body: "Hold the rod, press the reel's bail button (or open the bail on a spinning reel), swing the rod back over your shoulder, then forward — release the line as the rod passes vertical. It takes a few tries to get distance, and that's normal.",
  },
  {
    id: 'reel',
    eyebrow: 'Step 2',
    heading: 'Reel it back steady',
    body: "Once your lure lands, close the bail and reel at an even, unhurried pace. Check the recommended retrieve speed before you buy — we list it on every lure's page, so you'll know exactly how fast to reel. Most beginner lures — like a crankbait or spinnerbait — do the work themselves once you reel steadily. No need to jerk the rod or vary the speed at first.",
  },
  {
    id: 'strike',
    eyebrow: 'Step 3',
    heading: 'Feel the bite, keep reeling',
    body: "A strike usually feels like a sharp tug or your line suddenly going tight. You don't need a dramatic hookset — just keep reeling at a steady pace and let the rod bend. Panic is the only thing that loses fish here.",
  },
  {
    id: 'where',
    eyebrow: 'Where to fish',
    heading: 'Any local pond, lake, or slow river works fine to start',
    intro: "You don't need a boat, a guide, or a secret honey hole. Public water within a few miles of most towns holds fish — you just need to read it a little.",
    cards: [
      { kicker: 'Look for cover', heading: 'Docks, logs, and weed edges', body: 'Fish hide near structure to ambush prey and avoid predators. Cast along the edges of docks, fallen trees, weed lines, and rocks rather than open water in the middle of the lake.' },
      { kicker: 'Time of day matters', heading: 'Early morning or evening', body: 'Fish feed most actively at dawn and dusk when the light is low and water is cooler. A midday trip in direct sun is the toughest time to get bites as a beginner.' },
      { kicker: 'Check the access rules', heading: 'Public parks and boat ramps', body: 'City and state parks with a pond or lake almost always allow shore fishing. Look for a public boat ramp, pier, or park website that lists fishing access before you go.' },
    ],
  },
  {
    id: 'before',
    eyebrow: 'Before you go',
    heading: 'A few things that save a trip',
    listItems: [
      "Check your state's fishing license rules — many are free or cheap for residents, and some let kids fish free",
      "Look up the water's regulations — some ponds are catch-and-release only",
      'Bring a small bucket or cooler with water if you plan to keep anything',
      "Tell someone where you're going, especially if fishing alone near a bank or dock",
    ],
    imagePlaceholder: 'Drop a photo of a lake or pond shoreline',
  },
  {
    id: 'handling',
    eyebrow: 'Catch and release',
    heading: 'Handling a fish safely',
    body: "Wet your hands before touching a fish — dry hands strip its protective slime coat. Support its body horizontally rather than holding it vertically by the jaw, keep it out of water only briefly for a photo, and back the hook out gently with pliers. If it's hooked deep, cut the line instead of tearing at it.",
  },
];

export const GUIDE_END_CTA = {
  heading: 'READY TO PICK YOUR FIRST LURE?',
  kicker: 'Ketto Outdoors — Beginner picks',
  buttonLabel: 'Shop beginner lures',
  href: '/shop?difficulty=Beginner',
};
