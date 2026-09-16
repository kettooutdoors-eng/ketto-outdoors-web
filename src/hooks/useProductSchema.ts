import { useEffect } from 'react';
import { SITE_URL } from './useDocumentMeta';
import type { Product } from '../data/types';

const SCHEMA_ID = 'product-schema';

/** Injects schema.org/Product JSON-LD for the current product so search engines can show price/availability. */
export function useProductSchema(product: Product | undefined, imageSrc: string | undefined, inStock: boolean) {
  useEffect(() => {
    if (!product) return;
    const data = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.displayNameFull,
      description: product.metaDescription,
      ...(imageSrc ? { image: new URL(imageSrc, SITE_URL).toString() } : {}),
      brand: { '@type': 'Brand', name: 'Ketto Outdoors' },
      offers: {
        '@type': 'Offer',
        url: `${SITE_URL}/product/${product.id}`,
        priceCurrency: 'USD',
        price: product.price.toFixed(2),
        availability: inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      },
    };

    let script = document.getElementById(SCHEMA_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = SCHEMA_ID;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);

    return () => {
      document.getElementById(SCHEMA_ID)?.remove();
    };
  }, [product, imageSrc, inStock]);
}
