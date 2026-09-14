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
  howToFish: string[] | null;
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
