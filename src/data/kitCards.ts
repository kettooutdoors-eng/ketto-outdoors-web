// The short pages the QR stickers in each kit open (e.g. /bass). The printed sticker points at
// the short path, never at YouTube, so a video can be swapped here without reprinting anything.
//
// To add or change a setup video: paste the YouTube link into videoUrl. While it's empty, the
// page shows "Setup video coming soon" instead of a button. Set the video to Unlisted on YouTube.
export interface KitCardLink {
  /** The short path on the site, e.g. 'bass' for ketto.../bass. Printed on stickers: never change it. */
  path: string;
  /** The kit this page describes (matches a slug in bundles.ts). */
  slug: string;
  videoUrl: string;
}

export const KIT_CARDS: KitCardLink[] = [
  { path: 'bass', slug: 'first-bass-kit', videoUrl: '' },
  { path: 'catfish', slug: 'first-catfish-kit', videoUrl: '' },
  { path: 'starter', slug: 'never-fished-before-starter-kit', videoUrl: '' },
];
