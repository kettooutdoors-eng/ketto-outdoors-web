export interface ShopCatalogItem {
  id: string;
  name: string;
  kicker: string;
  type: string;
  difficultyLabel: string;
  difficultyScore: number;
  targetFish: string;
  description: string;
  price: number;
}

// Live catalog — products actually stocked/featured on the shop grid.
export const SHOP_CATALOG: ShopCatalogItem[] = [
  { id: 'deep-six', name: 'Deep Six', kicker: 'Squarebill — Best all-around starter lure', type: 'Crankbait', difficultyLabel: 'Beginner', difficultyScore: 2, targetFish: 'Largemouth & smallmouth bass', description: 'Just cast it out and reel steadily — it swims itself and bumps off rocks and logs instead of getting stuck.', price: 14.5 },
  { id: 'driftworm', name: 'Driftworm', kicker: 'Soft plastic worm — Simple, slow, and forgiving', type: 'Soft Plastic', difficultyLabel: 'Beginner', difficultyScore: 1, targetFish: 'Bass & panfish', description: 'Rig it and drag it slowly along the bottom. About as simple as fishing gets.', price: 6.5 },
  { id: 'baithooks', name: 'Baithooks', kicker: 'Hooks — Sharp, reliable, sized for beginners', type: 'Hooks', difficultyLabel: 'Beginner', difficultyScore: 1, targetFish: 'Any species — pick a hook to match your bait', description: 'A basic assortment of sized hooks for rigging soft plastics and live bait. Start here if you need hooks for the Driftworm.', price: 4.25 },
  { id: 'spinning-combo', name: 'Spinning Rod & Reel Combo', kicker: "Combo — 5'6\" rod + spinning reel", type: 'Combo', difficultyLabel: 'Beginner', difficultyScore: 1, targetFish: 'First-time casters, lighter lures', description: 'A matched rod and reel, spooled and ready to cast out of the box — the easiest way to start.', price: 54.99 },
  { id: 'baitcaster', name: 'Baitcaster Combo', kicker: "Combo — 6'6\" medium-heavy rod + baitcaster reel", type: 'Combo', difficultyLabel: 'Intermediate', difficultyScore: 6, targetFish: 'Heavier lures, pinpoint casts', description: 'A matched rod and baitcaster reel — more accurate and more power once you have the thumb control down.', price: 72.99 },
  { id: 'urchin-bait', name: 'Urchin Bait', kicker: 'Natural bait — Cut bait for structure feeders', type: 'Natural Bait', difficultyLabel: 'Beginner', difficultyScore: 1, targetFish: 'Sheepshead, tautog & black drum', description: "Dried, cut chunks of urchin that bottom feeders around rocks, pilings, and jetties can't resist.", price: 5.5 },
];

// Archived catalog — full product pages exist for these, they're just not on the live grid yet.
export const SHOP_ARCHIVE: ShopCatalogItem[] = [
  { id: 'longshot', name: 'Longshot', kicker: 'Spinnerbait — Good for murky or cloudy water', type: 'Spinnerbait', difficultyLabel: 'Beginner', difficultyScore: 3, targetFish: 'Bass & pike', description: "Spinning blades flash and vibrate so fish can find it even when they can't see far. No technique needed.", price: 11.0 },
  { id: 'chugger', name: 'Chugger', kicker: "Topwater — Fun once you're ready to level up", type: 'Topwater', difficultyLabel: 'Intermediate', difficultyScore: 6, targetFish: 'Bass & panfish', description: 'Floats on the surface — twitch your rod tip and it pops water, which fish can strike right in front of you.', price: 12.75 },
  { id: 'ripple', name: 'Ripple', kicker: 'Jerkbait — Great for suspended fish', type: 'Jerkbait', difficultyLabel: 'Intermediate', difficultyScore: 5, targetFish: 'Smallmouth bass & trout', description: 'Twitch-pause-twitch — a slight learning curve, but deadly on cold, sluggish fish.', price: 13.25 },
  { id: 'bottomjig', name: 'Bottomjig', kicker: 'Jig — Versatile, bottom-hugging', type: 'Jig', difficultyLabel: 'Intermediate', difficultyScore: 5, targetFish: 'Bass & walleye', description: 'Feel for the bottom and hop it back — takes a little practice to read the bites.', price: 5.75 },
  { id: 'buzzrunner', name: 'Buzzrunner', kicker: 'Buzzbait — Loud surface commotion', type: 'Buzzbait', difficultyLabel: 'Intermediate', difficultyScore: 6, targetFish: 'Bass & pike', description: 'Reel fast enough to keep it churning on top — takes a bit of practice to find the pace.', price: 12.0 },
  { id: 'swimshad', name: 'Swimshad', kicker: 'Swimbait — Realistic, steady action', type: 'Swimbait', difficultyLabel: 'Beginner', difficultyScore: 3, targetFish: 'Bass & striped bass', description: 'Cast and reel at a steady pace — its paddle tail does the swimming for you.', price: 9.5 },
  { id: 'ratlin', name: 'Ratlin', kicker: 'Lipless crankbait — Fast-covering search bait', type: 'Crankbait', difficultyLabel: 'Intermediate', difficultyScore: 4, targetFish: 'Bass & crappie', description: 'Cast far, reel steady — a loud rattle helps you cover water fast to find active fish.', price: 10.25 },
  { id: 'padhopper', name: 'Padhopper', kicker: 'Topwater frog — Weedless, for heavy cover', type: 'Frog', difficultyLabel: 'Advanced', difficultyScore: 7, targetFish: 'Largemouth bass', description: 'Walks over lily pads and slop — takes practice timing the hookset through cover.', price: 11.5 },
  { id: 'flutterspoon', name: 'Flutterspoon', kicker: 'Spoon — Simple flash and flutter', type: 'Spoon', difficultyLabel: 'Beginner', difficultyScore: 2, targetFish: 'Trout, walleye & crappie', description: 'Cast, let it sink, reel it back. One simple wobbling flash of metal.', price: 7.25 },
  { id: 'finessedrop', name: 'Finesse Drop', kicker: 'Drop-shot rig — Precise, finesse presentation', type: 'Drop-shot', difficultyLabel: 'Advanced', difficultyScore: 7, targetFish: 'Smallmouth bass & walleye', description: 'Precise depth control and a subtle shake — more technique, more control over tough bites.', price: 8.0 },
  { id: 'ribtail', name: 'Ribtail', kicker: 'Soft plastic — Curl-tail worm, all-purpose', type: 'Soft Plastic', difficultyLabel: 'Beginner', difficultyScore: 2, targetFish: 'Bass & panfish', description: 'A curling tail kicks on the fall and the retrieve — forgiving and versatile for almost any rig.', price: 5.25 },
  { id: 'crawdaddy', name: 'Crawdaddy', kicker: 'Soft plastic — Creature bait, bottom crawler', type: 'Soft Plastic', difficultyLabel: 'Intermediate', difficultyScore: 4, targetFish: 'Bass & smallmouth bass', description: 'Flapping claws imitate a crawfish scooting along the bottom — great paired with a jig.', price: 6.75 },
  { id: 'flukeshad', name: 'Flukeshad', kicker: 'Soft plastic — Weightless jerkbait', type: 'Soft Plastic', difficultyLabel: 'Beginner', difficultyScore: 3, targetFish: 'Bass & pike', description: 'Rigged weedless and weightless, it darts side to side just under the surface. Simple twitch-and-pause retrieve.', price: 5.95 },
  { id: 'tubehead', name: 'Tubehead', kicker: 'Soft plastic — Tube bait, hollow body', type: 'Tube', difficultyLabel: 'Intermediate', difficultyScore: 4, targetFish: 'Smallmouth bass & walleye', description: 'Its tentacle skirt flares on the fall and pause — a classic bottom bait for rocky structure.', price: 4.95 },
];

export const ALL_SHOP_ITEMS: ShopCatalogItem[] = [...SHOP_CATALOG, ...SHOP_ARCHIVE];

export const FILTER_DIFFICULTIES = ['All difficulties', 'Beginner', 'Intermediate', 'Advanced'];
export const FILTER_TYPES = ['All types', 'Crankbait', 'Soft Plastic', 'Hooks', 'Combo', 'Spinnerbait', 'Topwater', 'Jerkbait', 'Jig', 'Buzzbait', 'Swimbait', 'Frog', 'Spoon', 'Drop-shot', 'Tube', 'Natural Bait'];
export const FILTER_SORTS = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Difficulty: Easiest First', 'Difficulty: Hardest First', 'Name: A–Z'];
