export interface BlogSection {
  heading: string;
  body: string;
}

export const BLOG_ARTICLE = {
  eyebrow: "Beginner's guide",
  title: 'How to Start Fishing: A No-Nonsense Guide for Your First Trip',
  byline: 'By Ketto Outdoors · 6 min read',
  heroImagePlaceholder: 'Drop a photo of a beginner casting from shore',
  bodyIntro:
    "Every angler who's ever landed a fish started exactly where you are now: standing at the water's edge, rod in hand, not totally sure what happens next. Good news — fishing is one of the few outdoor skills you can pick up in an afternoon and spend the rest of your life getting better at. Here's what actually matters for trip one.",
  sections: [
    {
      heading: 'Start with one rod, one reel, one lure',
      body: "You don't need a tackle box full of gear to catch your first fish. A spinning combo (the easiest setup to learn on) and a single beginner-friendly lure — a crankbait or a soft plastic on a jighead — will out-fish an overloaded box every time. Simplicity means fewer decisions and more casts in the water.",
    },
    {
      heading: 'The cast is a rhythm, not a launch',
      body: "Open the bail, swing the rod back over your shoulder, then forward, and let go of the line right as the rod passes vertical. Your first few casts will land short or off to the side — that's universal, not a sign you're doing it wrong. Distance comes with reps, not effort.",
    },
    {
      heading: 'Reel steady, and match the pace to your lure',
      body: 'Most beginner mistakes happen on the retrieve — reeling too fast, too slow, or inconsistently. Every Ketto lure lists a recommended retrieve speed right on its page, so check that before you buy and again before you cast. A steady, even pace beats anything fancy while you’re still learning what a bite feels like.',
    },
    {
      heading: 'Know what a strike feels like',
      body: "It's usually a sharp tap, a sudden weight, or your line going tight and moving on its own. When it happens, don't yank — just keep reeling at that same steady pace. The hook does the work; your job is to stay calm and keep tension on the line.",
    },
    {
      heading: "Pick water that's forgiving",
      body: "A local pond, a calm section of lake shoreline, or a slow-moving stream are all better first stops than a big open reservoir or fast current. Smaller, calmer water means more fish within casting range and fewer variables to manage while you're still building feel for the gear.",
    },
  ] as BlogSection[],
  endCta: {
    heading: 'Ready for the full walkthrough?',
    body: 'Our New to Fishing guide covers gear, casting, reeling, and handling fish — start to finish.',
    buttonLabel: 'Read the guide →',
    href: '/new-to-fishing',
  },
};

export interface BlogCategory {
  slug: string;
  eyebrow: string;
  heading: string;
  intro: string;
  hasArticlePreview: boolean;
  comingSoon: { heading: string; body: string };
}

export const BLOG_CATEGORY_NAV = [
  { label: 'Beginner Guides', slug: 'beginner-guides' },
  { label: 'Gear & Lures', slug: 'gear-and-lures' },
  { label: 'Technique', slug: 'technique' },
  { label: 'Where to Fish', slug: 'where-to-fish' },
];

export const BLOG_CATEGORIES: Record<string, BlogCategory> = {
  'beginner-guides': {
    slug: 'beginner-guides',
    eyebrow: 'The Ketto Journal',
    heading: 'Beginner Guides',
    intro: 'First-timer advice on gear, casting, and getting your first bite.',
    hasArticlePreview: true,
    comingSoon: { heading: 'New beginner guide posts are on the way', body: "We're writing more first-timer walkthroughs — check back soon." },
  },
  'gear-and-lures': {
    slug: 'gear-and-lures',
    eyebrow: 'The Ketto Journal',
    heading: 'Gear & Lures',
    intro: 'Breakdowns of what to tie on, and why it works.',
    hasArticlePreview: false,
    comingSoon: { heading: 'New gear & lures posts are on the way', body: "We're writing lure breakdowns and gear picks — check back soon." },
  },
  technique: {
    slug: 'technique',
    eyebrow: 'The Ketto Journal',
    heading: 'Technique',
    intro: 'Casting, retrieves, and reading the water like it matters.',
    hasArticlePreview: false,
    comingSoon: { heading: 'New technique posts are on the way', body: "We're writing technique breakdowns — check back soon." },
  },
  'where-to-fish': {
    slug: 'where-to-fish',
    eyebrow: 'The Ketto Journal',
    heading: 'Where to Fish',
    intro: 'Picking water that gives beginners the best shot at a bite.',
    hasArticlePreview: false,
    comingSoon: { heading: 'New where-to-fish posts are on the way', body: "We're writing spot guides — check back soon." },
  },
};
