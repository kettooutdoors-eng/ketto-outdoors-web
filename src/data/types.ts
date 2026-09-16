export interface RelatedProduct {
  id: string;
  name: string;
  blurb: string;
  price: number;
}

export interface BuildDetail {
  part: string;
  title: string;
  description: string;
}

export interface DepthChartPoint {
  depth: string;
  note: string;
  highlight?: boolean;
}

export interface FishingStep {
  title: string;
  detail: string;
}

export interface FishingGuide {
  /** What to bring/pair this with, beyond the product itself. */
  gearNeeded: string[];
  /** Full first-time walkthrough, cast to catch. */
  steps: FishingStep[];
  /** What a strike feels like with this specific bait. */
  biteFeel: string;
  /** The beginner mistakes that most commonly cost a fish with this bait. */
  commonMistakes: string[];
  /** One encouraging, concrete reassurance for a first-timer. */
  confidenceTip: string;
}

export interface BundleComponent {
  /** Short name shown in the kit contents list, e.g. "Flipping jig". */
  label: string;
  /** Spec line, e.g. "3/8 oz, painted head with eyes, 3/0 hook". */
  detail: string;
  /** Plain-English "why this is in here" trust line — not a spec restated. */
  whyThis: string;
  sourced: 'anchor-brand' | 'private-label';
}

export interface Bundle {
  id: string;
  slug: string;
  /** Scenario/outcome name, e.g. "First Bass Kit" — never just "Kit 1". */
  name: string;
  tagline: string;
  price: number;
  metaTitle: string;
  metaDescription: string;
  /** Who this kit is for and when you'd reach for it. */
  scenario: string;
  /** The "you don't need more than this to start" reassurance line. */
  reassurance: string;
  /** Short trust-building explanation of the sourcing decision. */
  sourcingNote: string;
  components: BundleComponent[];
  /** Short "how to rig this" pointer — expand into a real guide/QR code later. */
  riggingNote: string;
  imagePlaceholderAlt: string;
}

export interface Product {
  id: string;
  name: string;
  displayNameFull: string;
  price: number;
  category: string;
  kicker: string;
  metaTitle: string;
  metaDescription: string;
  difficulty: { label: string; number: number; outOf: number } | null;
  targetSpecies: string | null;
  bestFor?: string;
  shortDescription: string;
  longDescription: string;
  guide: FishingGuide;
  whyItsEasy?: string;
  learningCurve?: string;
  specs: Record<string, string>;
  buildDetails?: BuildDetail[];
  depthChart?: DepthChartPoint[];
  colorOptions: string[] | null;
  sizeOptions?: string[];
  trustBadges: string[];
  imagePlaceholderAlt: string;
  relatedProducts: RelatedProduct[];
  reviewsSectionPresent: boolean;
  reviewsSectionLabel?: string;
}
