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

export const GUIDE_HERO = {
  eyebrow: "A short beginner's guide",
  heading: 'New to Fishing? Start Here.',
  intro: "You don't need years of experience or a boat full of gear. Here's everything you need to catch your first fish — and what to do when something doesn't go to plan.",
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
    heading: 'What you actually need',
    listItems: [
      'A rod and reel (spinning combos are easiest to learn on)',
      'Fishing line already spooled on the reel',
      'One or two lures — see our Deep Six for a forgiving starter',
      'A pair of pliers to remove hooks safely',
      'Polarized sunglasses — they cut glare so you can actually see into the water',
      'A local fishing license, if required in your area',
    ],
    note: "If you're starting from zero, our Spinning Combo plus a Deep Six is genuinely the whole kit — nothing else to figure out before your first cast.",
    imagePlaceholder: 'Drop a photo of beginner tackle/gear laid out',
  },
  {
    id: 'tie',
    eyebrow: 'Before you cast',
    heading: 'Tie on your lure',
    intro: 'One knot — the improved clinch knot — is the only one you need to know for your first several trips. It takes about 30 seconds once you\'ve done it twice.',
    steps: [
      { title: 'Thread the line', detail: "Push the tag end of your line through the lure's eyelet, leaving about 6 inches of extra line to work with." },
      { title: 'Wrap the tag end', detail: 'Wrap the tag end around the main line 5–6 times, spiraling up and away from the lure.' },
      { title: 'Feed it through the loop', detail: 'Pass the tag end back through the small loop right next to the eyelet, then thread it through the big loop you just created.' },
      { title: 'Wet it before you pull', detail: 'Wet the knot with a little water or saliva — this stops friction from weakening the line as it cinches down.' },
      { title: 'Pull tight and trim', detail: "Pull steadily on the main line and tag end at the same time until the wraps cinch down snug against the eyelet. Trim the extra tag to about a quarter inch." },
      { title: 'Test it', detail: "Give the main line a firm, direct tug. If it holds without slipping, you're ready to cast. If it slips, cut it off and retie — it costs you a minute, not a fish." },
    ],
  },
  {
    id: 'cast',
    eyebrow: 'Step 1',
    heading: 'Learn the cast',
    steps: [
      { title: 'Grip and aim', detail: 'Hold the rod with the reel hanging below your hand, stand with your feet about shoulder-width apart, and point the rod tip at your target.' },
      { title: 'Open the bail', detail: "Hook your index finger over the line, then flip the reel's bail lever open with your other hand — the line is now free to release." },
      { title: 'Load it on the backswing', detail: 'Swing the rod back over your shoulder in one smooth motion, letting the tip flex slightly under the lure\'s weight.' },
      { title: 'Release on the way forward', detail: 'Swing the rod forward and let go of the line with your finger right as the rod passes vertical, straight up. Too early sends it skyward; too late sends it into the water at your feet.' },
      { title: 'Close the bail', detail: "Let the lure land, then turn the reel handle once to snap the bail shut — you're ready to reel." },
    ],
    note: "Your first few casts will land short or off to the side. That's universal, not a sign you're doing it wrong — distance and accuracy come from reps, not effort.",
  },
  {
    id: 'reel',
    eyebrow: 'Step 2',
    heading: 'Reel it back steady',
    body: "Once your lure lands, close the bail and reel at an even, unhurried pace. Check the recommended retrieve speed before you buy — we list exactly how fast to reel, and what it should feel like, on every lure's page under \"How to Fish It.\" Most beginner lures — like a crankbait or spinnerbait — do the work themselves once you reel steadily. No need to jerk the rod or vary the speed at first.",
    note: "How do you know you're doing it right? You should feel a light, rhythmic vibration or wobble through the rod the whole time you're reeling a crankbait or spinnerbait. If you feel nothing at all, you're probably reeling too slowly for that lure — speed up until you feel it kick in.",
  },
  {
    id: 'strike',
    eyebrow: 'Step 3',
    heading: 'Feel the bite, keep reeling',
    body: "A strike usually feels like a sharp tug, a sudden heaviness, or your line going tight and moving on its own. You don't need a dramatic hookset — just keep reeling at a steady pace and let the rod load up and bend. Panic is the only thing that loses fish here.",
    note: "Missed hooksets happen to everyone, including experienced anglers — it costs you nothing but a recast. If you're ever unsure whether that was a bite or just the bottom, set the hook anyway. Hesitating on a real bite is the only mistake that actually loses fish.",
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
    id: 'troubleshooting',
    eyebrow: 'Common first-trip questions',
    heading: 'If something feels off',
    intro: "These are the moments that trip up almost every beginner in the first hour. None of them mean you're doing it wrong.",
    qa: [
      { q: "My lure doesn't seem to be doing anything.", a: "Check your retrieve speed against the recommended pace on the product page. Too slow and a crankbait's bill won't load up and wobble; too fast and a soft plastic just skips across the surface instead of sinking naturally." },
      { q: "I think I'm snagged on the bottom or a weed.", a: "Stop reeling and let slack form in the line for a couple seconds — often the lure works itself free on its own. If not, point the rod tip straight at the snag and pull steadily. Never yank hard sideways; that just breaks your line and loses the lure." },
      { q: "I can't tell if that was a bite or just the bottom.", a: "A rock or the bottom feels like dead, steady resistance that doesn't move. A bite usually adds some life to that resistance — a pull, a thump, a head-shake. When in doubt, reel down and set the hook anyway; it costs nothing to check." },
      { q: "My knot keeps slipping or breaking.", a: "Make sure you're wetting the knot before you cinch it tight — a dry knot builds friction heat that weakens the line. Also double-check you used 5–6 wraps and pulled both ends slowly and evenly rather than yanking it closed." },
      { q: "I set the hook and missed — did I mess up?", a: "No. Missed hooksets happen to every angler at every skill level. Just reel back in and cast again — fish will often strike the same spot more than once in a session." },
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
      "Check the weather — overcast days often fish better than bright, bluebird skies",
      "Tell someone where you're going, especially if fishing alone near a bank or dock",
    ],
    imagePlaceholder: 'Drop a photo of a lake or pond shoreline',
  },
  {
    id: 'handling',
    eyebrow: 'Catch and release',
    heading: 'Handling a fish safely',
    steps: [
      { title: 'Wet your hands first', detail: "Dry hands strip a fish's protective slime coat, which leaves it vulnerable to infection after release." },
      { title: 'Support it horizontally', detail: "Cradle the fish's body with both hands rather than holding it vertically by the jaw or gills, which can injure it." },
      { title: 'Back the hook out gently', detail: 'Use pliers to back the hook out the way it went in. If it’s hooked deep in the throat or gills, cut the line close to the hook instead of digging for it.' },
      { title: 'Keep it out of water briefly', detail: 'If you want a photo, keep the fish above water for a few seconds at most — hold your breath as a rough timer for how long is too long.' },
      { title: 'Release it facing open water', detail: 'Lower it back in gently, pointed toward deeper or open water, and let it swim off under its own power rather than tossing it.' },
    ],
  },
  {
    id: 'checklist',
    eyebrow: 'Pack this the night before',
    heading: 'First trip checklist',
    checklist: [
      'Rod & reel, spooled with line',
      'One or two beginner lures, tied on or ready to tie',
      'Pliers for hook removal',
      'Fishing license, if required in your state',
      'Polarized sunglasses',
      'Small bag or cooler with water, if you plan to keep anything',
      'Sun protection and a bottle of water for yourself',
      'A rough plan for dawn or dusk, when the bite is usually best',
    ],
  },
];

export const GUIDE_END_CTA = {
  heading: 'READY TO PICK YOUR FIRST LURE?',
  kicker: 'Ketto Outdoors — Beginner picks',
  buttonLabel: 'Shop beginner lures',
  href: '/shop?difficulty=Beginner',
};
