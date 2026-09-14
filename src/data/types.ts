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
