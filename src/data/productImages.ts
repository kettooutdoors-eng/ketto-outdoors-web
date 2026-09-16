// Real product photos, sourced and matched by hand — most products still fall back to the
// sketch placeholder until more photos come in.
const PRODUCT_IMAGES: Record<string, string> = {
  'deep-six': 'deep-six.jpg',
  'medium-crankbait': 'medium-crankbait.jpg',
  'wacky-worm': 'wacky-worm.jpg',
  baithooks: 'baithooks.jpg',
  chatterbait: 'chatterbait.jpg',
  swimshad: 'swimshad.jpg',
  bottomjig: 'bottomjig.jpg',
  'flipping-jig': 'flipping-jig.jpg',
};

export function getProductImageSrc(id: string): string | undefined {
  const file = PRODUCT_IMAGES[id];
  return file ? `${import.meta.env.BASE_URL}assets/products/${file}` : undefined;
}
