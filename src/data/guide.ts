export interface GuideStep {
  title: string;
  detail: string;
}

export interface GuideQA {
  q: string;
  a: string;
}

export interface GuideSection {
  id: string;
  eyebrow: string;
  heading: string;
  intro?: string;
  body?: string;
  note?: string;
  listItems?: string[];
  steps?: GuideStep[];
  qa?: GuideQA[];
  checklist?: string[];
  imagePlaceholder?: string;
  cards?: { kicker: string; heading: string; body: string }[];
}

export const GUIDE_META = { title: "New to Fishing: Beginner's Guide | Ketto Outdoors", description: 'Gear, casting, reeling, and handling fish.' };

export const GUIDE_HERO = {
  eyebrow: "A short beginner's guide",
  heading: 'New to Fishing? Start Here.',
  intro: "You don't need years of experience or a boat full of gear. This is what you need to catch your first fish, and what to do if something goes wrong.",
  jumpLinks: [
    { label: 'Gear', anchor: 'gear' },
    { label: 'Tying On', anchor: 'tie' },
    { label: 'Casting', anchor: 'cast' },
    { label: 'Reeling', anchor: 'reel' },
    { label: 'The Bite', anchor: 'strike' },
    { label: 'Where to Fish', anchor: 'where' },
    { label: 'Troubleshooting', anchor: 'troubleshooting' },
    { label: 'Before You Go', anchor: 'before' },
    { label: 'Handling Fish', anchor: 'handling' },
    { label: 'Checklist', anchor: 'checklist' },
  ],
};

export const GUIDE_SECTIONS: GuideSection[] = [
  {
    id: 'gear',
    eyebrow: 'Gear check',
    heading: 'What you need',
    listItems: [
      'A rod and reel (a spinning combo is easiest to learn on)',
      'Fishing line already on the reel',
      'One or two lures. The Deep Six is a good first lure',
      'Pliers to remove hooks safely',
      'Polarized sunglasses, so you can see into the water',
      'A fishing license, if your area requires one',
    ],
    note: 'Starting from zero? A basic spinning rod and reel plus a Deep Six is all you need for your first cast.',
    imagePlaceholder: 'Drop a photo of beginner tackle/gear laid out',
  },
  {
    id: 'tie',
    eyebrow: 'Before you cast',
    heading: 'Tie on your lure',
    intro: "The improved clinch knot is the only knot you need for your first few trips. It takes about 30 seconds once you've done it twice.",
    steps: [
      { title: 'Thread the line', detail: "Push the end of your line through the lure's eyelet. Leave about 6 inches of extra line." },
      { title: 'Wrap the tag end', detail: 'Wrap the tag end around the main line 5-6 times.' },
      { title: 'Feed it through the loop', detail: 'Pass the tag end back through the small loop next to the eyelet, then through the big loop you just made.' },
      { title: 'Wet it before you pull', detail: 'Wet the knot with water or saliva. This keeps friction from weakening the line.' },
      { title: 'Pull tight and trim', detail: 'Pull the main line and the tag end at the same time until the wraps sit snug against the eyelet. Trim the extra to about a quarter inch.' },
      { title: 'Test it', detail: "Give the line a firm tug. If it holds, you're ready to cast. If it slips, cut it off and retie." },
    ],
  },
  {
    id: 'cast',
    eyebrow: 'Step 1',
    heading: 'Learn the cast',
    steps: [
      { title: 'Grip and aim', detail: 'Hold the rod with the reel hanging below your hand, feet shoulder-width apart, rod tip pointed at your target.' },
      { title: 'Open the bail', detail: "Hook your index finger over the line, then flip the reel's bail open with your other hand." },
      { title: 'Load it on the backswing', detail: "Swing the rod back over your shoulder in one smooth motion, so the tip bends a little under the lure's weight." },
      { title: 'Release on the way forward', detail: 'Swing forward and let go of the line as the rod passes straight up. Too early sends the lure skyward. Too late drops it at your feet.' },
      { title: 'Close the bail', detail: "Let the lure land, then turn the reel handle once to close the bail. You're ready to reel." },
    ],
    note: "Your first few casts will land short or off to the side. That's normal. Distance and accuracy come from practice.",
  },
  {
    id: 'reel',
    eyebrow: 'Step 2',
    heading: 'Reel it back steady',
    body: 'Once your lure lands, reel at a steady, unhurried pace. Every lure\'s page lists how fast to reel under "How to Fish It." Most beginner lures, like a crankbait or spinnerbait, do the work themselves when you reel steadily.',
    note: "How do you know it's working? You should feel a light, steady wobble through the rod while you reel a crankbait or spinnerbait. If you feel nothing, reel a little faster.",
  },
  {
    id: 'strike',
    eyebrow: 'Step 3',
    heading: 'Feel the bite, keep reeling',
    body: "A bite feels like a sharp tug, a sudden heaviness, or your line going tight and moving on its own. You don't need a big hookset. Keep reeling at a steady pace and let the rod bend.",
    note: "Everyone misses bites, including experienced anglers. If you're not sure whether it was a bite or the bottom, set the hook anyway. It costs you nothing.",
  },
  {
    id: 'where',
    eyebrow: 'Where to fish',
    heading: 'Any local pond, lake, or slow river works to start',
    intro: "You don't need a boat or a secret spot. Public water near most towns has fish. You just need to read it a little.",
    cards: [
      { kicker: 'Look for cover', heading: 'Docks, logs, and weed edges', body: 'Fish hide near structure. Cast along the edges of docks, fallen trees, weed lines, and rocks instead of open water.' },
      { kicker: 'Time of day matters', heading: 'Early morning or evening', body: "Fish feed most at dawn and dusk, when it's cooler and the light is low. Midday sun is the hardest time to get bites." },
      { kicker: 'Check the access rules', heading: 'Public parks and boat ramps', body: 'City and state parks with a pond or lake usually allow fishing from shore. Check the park website, or look for a boat ramp or pier.' },
    ],
  },
  {
    id: 'troubleshooting',
    eyebrow: 'Common first-trip questions',
    heading: 'If something feels off',
    intro: "These trip up almost every beginner in the first hour. None of them mean you're doing it wrong.",
    qa: [
      { q: "My lure doesn't seem to be doing anything.", a: "Check your reeling speed against the pace on the product page. Too slow and a crankbait won't wobble. Too fast and a soft plastic skips across the top instead of sinking." },
      { q: "I think I'm snagged on the bottom or a weed.", a: "Stop reeling and let the line go slack for a couple of seconds. The lure often works itself free. If not, point the rod tip at the snag and pull steadily. Don't yank sideways, because that breaks the line." },
      { q: "I can't tell if that was a bite or just the bottom.", a: "The bottom feels like dead, steady resistance. A bite adds some life to it: a pull, a thump, a head shake. If you're not sure, reel down and set the hook." },
      { q: "My knot keeps slipping or breaking.", a: "Wet the knot before you tighten it. A dry knot heats up and weakens the line. Also check that you used 5-6 wraps and pulled both ends slowly and evenly." },
      { q: "I set the hook and missed. Did I mess up?", a: "No. Everyone misses hooksets. Reel in and cast again. Fish often strike the same spot more than once." },
    ],
  },
  {
    id: 'before',
    eyebrow: 'Before you go',
    heading: 'A few things that save a trip',
    listItems: [
      "Check your state's fishing license rules. Many are free or cheap for residents, and some let kids fish free",
      "Look up the rules for the water you're fishing. Some ponds are catch-and-release only",
      'Bring a small bucket or cooler with water if you plan to keep a fish',
      'Check the weather. Overcast days often fish better than bright, sunny ones',
      "Tell someone where you're going, especially if you're fishing alone",
    ],
    imagePlaceholder: 'Drop a photo of a lake or pond shoreline',
  },
  {
    id: 'handling',
    eyebrow: 'Catch and release',
    heading: 'Handling a fish safely',
    steps: [
      { title: 'Wet your hands first', detail: "Dry hands wipe off a fish's protective slime, which can lead to infection after release." },
      { title: 'Support it horizontally', detail: "Cradle the fish's body with both hands. Don't hold it vertically by the jaw or gills." },
      { title: 'Back the hook out gently', detail: "Use pliers to back the hook out the way it went in. If it's deep in the throat or gills, cut the line close to the hook." },
      { title: 'Keep it out of the water briefly', detail: 'For a photo, keep the fish out of the water a few seconds at most. Hold your breath while you take it.' },
      { title: 'Release it facing open water', detail: 'Lower it in gently, pointed toward deeper water, and let it swim off on its own.' },
    ],
  },
  {
    id: 'checklist',
    eyebrow: 'Pack this the night before',
    heading: 'First trip checklist',
    checklist: [
      'Rod and reel, with line on it',
      'One or two beginner lures',
      'Pliers for removing hooks',
      'Fishing license, if your state requires one',
      'Polarized sunglasses',
      'A small bag or cooler with water, if you plan to keep a fish',
      'Sun protection and water for yourself',
      'A plan to fish at dawn or dusk, when the bite is usually best',
    ],
  },
];

export const GUIDE_END_CTA = {
  heading: 'READY TO PICK YOUR FIRST LURE?',
  kicker: 'Ketto Outdoors: Beginner picks',
  buttonLabel: 'Shop beginner lures',
  href: '/shop?difficulty=Beginner',
};
