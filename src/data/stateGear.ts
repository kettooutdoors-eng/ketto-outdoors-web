type BundleSlug = 'first-bass-kit' | 'never-fished-before-starter-kit' | 'first-catfish-kit';

export interface StateGearProfile {
  /** Subset of FILTER_FISH (from shop.ts), most-relevant first. */
  species: string[];
  /** Short description of the typical local freshwater water types. */
  waterNote: string;
  recommendedBundleSlug: BundleSlug;
}

// Freshwater-only, matching the site's current scope — no ocean/saltwater species.
// Species per state reflect what beginners most commonly target there, not an
// exhaustive list of every fish present.
export const STATE_GEAR: Record<string, StateGearProfile> = {
  Alabama: { species: ['Largemouth Bass', 'Catfish', 'Panfish'], waterNote: 'reservoirs like Lake Guntersville and river systems across the state', recommendedBundleSlug: 'first-bass-kit' },
  Alaska: { species: ['Trout', 'Pike'], waterNote: 'clear interior rivers and lakes', recommendedBundleSlug: 'never-fished-before-starter-kit' },
  Arizona: { species: ['Largemouth Bass', 'Catfish', 'Panfish'], waterNote: 'desert lakes and reservoirs', recommendedBundleSlug: 'first-bass-kit' },
  Arkansas: { species: ['Catfish', 'Largemouth Bass', 'Crappie'], waterNote: 'rivers and reservoirs', recommendedBundleSlug: 'first-catfish-kit' },
  California: { species: ['Largemouth Bass', 'Trout', 'Striped Bass', 'Panfish'], waterNote: 'reservoirs, the Delta, and mountain lakes', recommendedBundleSlug: 'first-bass-kit' },
  Colorado: { species: ['Trout', 'Largemouth Bass', 'Panfish'], waterNote: 'mountain streams and front-range reservoirs', recommendedBundleSlug: 'never-fished-before-starter-kit' },
  Connecticut: { species: ['Largemouth Bass', 'Panfish', 'Trout'], waterNote: 'lakes, ponds, and stocked rivers', recommendedBundleSlug: 'first-bass-kit' },
  Delaware: { species: ['Largemouth Bass', 'Panfish', 'Catfish'], waterNote: 'ponds and tidal freshwater rivers', recommendedBundleSlug: 'first-bass-kit' },
  Florida: { species: ['Largemouth Bass', 'Panfish', 'Catfish'], waterNote: 'canals, ponds, and lakes across the state', recommendedBundleSlug: 'first-bass-kit' },
  Georgia: { species: ['Largemouth Bass', 'Catfish', 'Crappie'], waterNote: 'reservoirs and river systems', recommendedBundleSlug: 'first-bass-kit' },
  Hawaii: { species: ['Largemouth Bass', 'Panfish'], waterNote: 'a handful of freshwater reservoirs', recommendedBundleSlug: 'first-bass-kit' },
  Idaho: { species: ['Trout', 'Smallmouth Bass', 'Panfish'], waterNote: 'rivers and mountain lakes', recommendedBundleSlug: 'never-fished-before-starter-kit' },
  Illinois: { species: ['Largemouth Bass', 'Catfish', 'Crappie'], waterNote: 'rivers and reservoirs', recommendedBundleSlug: 'first-bass-kit' },
  Indiana: { species: ['Largemouth Bass', 'Catfish', 'Panfish'], waterNote: 'lakes and rivers', recommendedBundleSlug: 'first-bass-kit' },
  Iowa: { species: ['Catfish', 'Largemouth Bass', 'Panfish'], waterNote: 'rivers and farm ponds', recommendedBundleSlug: 'first-catfish-kit' },
  Kansas: { species: ['Catfish', 'Largemouth Bass', 'Crappie'], waterNote: 'reservoirs and rivers', recommendedBundleSlug: 'first-catfish-kit' },
  Kentucky: { species: ['Largemouth Bass', 'Catfish', 'Crappie'], waterNote: 'reservoirs and rivers', recommendedBundleSlug: 'first-bass-kit' },
  Louisiana: { species: ['Catfish', 'Largemouth Bass', 'Crappie'], waterNote: 'bayous, swamps, and river systems', recommendedBundleSlug: 'first-catfish-kit' },
  Maine: { species: ['Trout', 'Pike', 'Panfish'], waterNote: 'cold lakes, ponds, and rivers', recommendedBundleSlug: 'never-fished-before-starter-kit' },
  Maryland: { species: ['Largemouth Bass', 'Catfish', 'Panfish'], waterNote: 'Chesapeake tributaries and ponds', recommendedBundleSlug: 'first-bass-kit' },
  Massachusetts: { species: ['Largemouth Bass', 'Panfish', 'Trout'], waterNote: 'ponds, lakes, and stocked rivers', recommendedBundleSlug: 'first-bass-kit' },
  Michigan: { species: ['Smallmouth Bass', 'Walleye', 'Pike', 'Panfish'], waterNote: 'the Great Lakes and thousands of inland lakes', recommendedBundleSlug: 'first-bass-kit' },
  Minnesota: { species: ['Walleye', 'Pike', 'Panfish', 'Smallmouth Bass'], waterNote: 'the Land of 10,000 Lakes', recommendedBundleSlug: 'never-fished-before-starter-kit' },
  Mississippi: { species: ['Catfish', 'Largemouth Bass', 'Crappie'], waterNote: 'rivers and oxbow lakes', recommendedBundleSlug: 'first-catfish-kit' },
  Missouri: { species: ['Catfish', 'Largemouth Bass', 'Crappie'], waterNote: 'rivers and reservoirs', recommendedBundleSlug: 'first-catfish-kit' },
  Montana: { species: ['Trout', 'Pike', 'Walleye'], waterNote: 'rivers like the Missouri and Yellowstone', recommendedBundleSlug: 'never-fished-before-starter-kit' },
  Nebraska: { species: ['Catfish', 'Largemouth Bass', 'Panfish'], waterNote: 'rivers and reservoirs', recommendedBundleSlug: 'first-catfish-kit' },
  Nevada: { species: ['Largemouth Bass', 'Trout', 'Panfish'], waterNote: 'desert reservoirs', recommendedBundleSlug: 'first-bass-kit' },
  'New Hampshire': { species: ['Trout', 'Panfish', 'Largemouth Bass'], waterNote: 'mountain lakes and streams', recommendedBundleSlug: 'never-fished-before-starter-kit' },
  'New Jersey': { species: ['Largemouth Bass', 'Panfish', 'Catfish'], waterNote: 'lakes, ponds, and coastal rivers', recommendedBundleSlug: 'first-bass-kit' },
  'New Mexico': { species: ['Largemouth Bass', 'Trout', 'Catfish'], waterNote: 'reservoirs and mountain streams', recommendedBundleSlug: 'first-bass-kit' },
  'New York': { species: ['Largemouth Bass', 'Smallmouth Bass', 'Walleye', 'Panfish'], waterNote: 'the Finger Lakes, Great Lakes, and countless rivers', recommendedBundleSlug: 'first-bass-kit' },
  'North Carolina': { species: ['Largemouth Bass', 'Catfish', 'Panfish', 'Striped Bass'], waterNote: 'reservoirs and coastal rivers', recommendedBundleSlug: 'first-bass-kit' },
  'North Dakota': { species: ['Walleye', 'Pike', 'Panfish'], waterNote: 'prairie lakes and reservoirs', recommendedBundleSlug: 'never-fished-before-starter-kit' },
  Ohio: { species: ['Largemouth Bass', 'Smallmouth Bass', 'Walleye', 'Panfish'], waterNote: 'inland lakes and Lake Erie tributaries', recommendedBundleSlug: 'first-bass-kit' },
  Oklahoma: { species: ['Catfish', 'Largemouth Bass', 'Crappie'], waterNote: 'reservoirs and rivers', recommendedBundleSlug: 'first-catfish-kit' },
  Oregon: { species: ['Trout', 'Smallmouth Bass', 'Largemouth Bass'], waterNote: 'rivers and reservoirs', recommendedBundleSlug: 'never-fished-before-starter-kit' },
  Pennsylvania: { species: ['Smallmouth Bass', 'Trout', 'Panfish', 'Walleye'], waterNote: 'rivers like the Susquehanna and stocked trout streams', recommendedBundleSlug: 'first-bass-kit' },
  'Rhode Island': { species: ['Largemouth Bass', 'Panfish', 'Trout'], waterNote: 'ponds and small lakes', recommendedBundleSlug: 'first-bass-kit' },
  'South Carolina': { species: ['Largemouth Bass', 'Catfish', 'Striped Bass'], waterNote: 'large reservoirs', recommendedBundleSlug: 'first-bass-kit' },
  'South Dakota': { species: ['Walleye', 'Pike', 'Panfish'], waterNote: 'reservoirs like Lake Oahe', recommendedBundleSlug: 'never-fished-before-starter-kit' },
  Tennessee: { species: ['Largemouth Bass', 'Catfish', 'Crappie', 'Striped Bass'], waterNote: 'TVA reservoirs and rivers', recommendedBundleSlug: 'first-bass-kit' },
  Texas: { species: ['Largemouth Bass', 'Catfish', 'Crappie'], waterNote: 'reservoirs across the state', recommendedBundleSlug: 'first-bass-kit' },
  Utah: { species: ['Trout', 'Largemouth Bass', 'Panfish'], waterNote: 'reservoirs and mountain lakes', recommendedBundleSlug: 'never-fished-before-starter-kit' },
  Vermont: { species: ['Trout', 'Panfish', 'Largemouth Bass'], waterNote: 'lakes and rivers across the Green Mountains', recommendedBundleSlug: 'never-fished-before-starter-kit' },
  Virginia: { species: ['Largemouth Bass', 'Smallmouth Bass', 'Catfish'], waterNote: 'rivers and reservoirs', recommendedBundleSlug: 'first-bass-kit' },
  Washington: { species: ['Trout', 'Smallmouth Bass', 'Largemouth Bass'], waterNote: 'rivers and lakes', recommendedBundleSlug: 'never-fished-before-starter-kit' },
  'West Virginia': { species: ['Smallmouth Bass', 'Trout', 'Catfish'], waterNote: 'mountain rivers and streams', recommendedBundleSlug: 'first-bass-kit' },
  Wisconsin: { species: ['Smallmouth Bass', 'Walleye', 'Pike', 'Panfish'], waterNote: 'thousands of inland lakes', recommendedBundleSlug: 'first-bass-kit' },
  Wyoming: { species: ['Trout', 'Walleye', 'Panfish'], waterNote: 'mountain lakes and rivers', recommendedBundleSlug: 'never-fished-before-starter-kit' },
};

export const STATE_LIST = Object.keys(STATE_GEAR).sort();

export const GEAR_BY_STATE_META = {
  title: 'Gear by State — Ketto Outdoors',
  description: 'Pick your state and see the freshwater species, water types, and gear beginners there start with.',
};
