// Generates shopify/products.csv: every product and kit on the site, ready for
// Shopify admin > Products > Import. Handles match the site's ids, which is how the
// site finds each product in Shopify (see src/lib/shopify.ts).
//
// Run with: npm run shopify:csv
import { writeFileSync } from 'node:fs';
import { PRODUCTS } from '../src/data/products.ts';
import { BUNDLES } from '../src/data/bundles.ts';
import { ALL_SHOP_ITEMS } from '../src/data/shop.ts';
import { PRODUCT_IMAGES } from '../src/data/productImages.ts';

// Shopify downloads product photos from a public URL, so point at the live site.
const IMAGE_BASE = 'https://kettooutdoors-eng.github.io/ketto-outdoors-web/assets/products/';

const HEADERS = [
  'Handle', 'Title', 'Body (HTML)', 'Vendor', 'Type', 'Tags', 'Published',
  'Option1 Name', 'Option1 Value', 'Variant SKU', 'Variant Grams',
  'Variant Inventory Tracker', 'Variant Inventory Qty', 'Variant Inventory Policy',
  'Variant Fulfillment Service', 'Variant Price', 'Variant Requires Shipping', 'Variant Taxable',
  'Image Src', 'Image Position', 'Image Alt Text', 'Gift Card', 'SEO Title', 'SEO Description', 'Status',
] as const;

type Row = Partial<Record<(typeof HEADERS)[number], string>>;

const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const paragraphs = (...parts: (string | undefined)[]) =>
  parts.filter(Boolean).map((p) => `<p>${escapeHtml(p!)}</p>`).join('');
const csvCell = (v = '') => (/[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v);

// Everything starts at 0 stock and stops selling at 0, matching the site today.
// Set real counts in Shopify once inventory arrives.
const variant = (sku: string, price: number): Row => ({
  'Variant SKU': sku,
  'Variant Grams': '',
  'Variant Inventory Tracker': 'shopify',
  'Variant Inventory Qty': '0',
  'Variant Inventory Policy': 'deny',
  'Variant Fulfillment Service': 'manual',
  'Variant Price': price.toFixed(2),
  'Variant Requires Shipping': 'TRUE',
  'Variant Taxable': 'TRUE',
});

const rows: Row[] = [];

for (const p of PRODUCTS) {
  const shop = ALL_SHOP_ITEMS.find((s) => s.id === p.id);
  const image = PRODUCT_IMAGES[p.id];
  const base: Row = {
    Handle: p.id,
    Title: p.displayNameFull,
    'Body (HTML)': paragraphs(p.shortDescription, p.longDescription),
    Vendor: 'Ketto Outdoors',
    Type: shop?.type ?? p.category,
    Tags: (shop?.species ?? []).join(', '),
    Published: 'TRUE',
    'Gift Card': 'FALSE',
    'SEO Title': p.metaTitle,
    'SEO Description': p.metaDescription,
    Status: 'active',
    ...(image ? { 'Image Src': IMAGE_BASE + image, 'Image Position': '1', 'Image Alt Text': p.imagePlaceholderAlt } : {}),
  };

  if (p.sizeOptions?.length) {
    p.sizeOptions.forEach((size, i) => {
      const sku = `${p.id}-${size.replace(/[^a-z0-9]+/gi, '')}`;
      const opts = { 'Option1 Name': 'Size', 'Option1 Value': size };
      rows.push(i === 0 ? { ...base, ...opts, ...variant(sku, p.price) } : { Handle: p.id, ...opts, ...variant(sku, p.price) });
    });
  } else {
    rows.push({ ...base, 'Option1 Name': 'Title', 'Option1 Value': 'Default Title', ...variant(p.id, p.price) });
  }
}

for (const b of BUNDLES) {
  rows.push({
    Handle: b.id,
    Title: b.name,
    'Body (HTML)': paragraphs(b.tagline, b.scenario, b.reassurance) +
      `<ul>${b.components.map((c) => `<li>${escapeHtml(`${c.label}: ${c.detail}`)}</li>`).join('')}</ul>`,
    Vendor: 'Ketto Outdoors',
    Type: 'Kit',
    Tags: 'Kit',
    Published: 'TRUE',
    'Option1 Name': 'Title',
    'Option1 Value': 'Default Title',
    ...variant(b.id, b.price),
    'Gift Card': 'FALSE',
    'SEO Title': b.metaTitle,
    'SEO Description': b.metaDescription,
    Status: 'active',
  });
}

const csv = [HEADERS.join(','), ...rows.map((r) => HEADERS.map((h) => csvCell(r[h])).join(','))].join('\n') + '\n';
writeFileSync(new URL('../shopify/products.csv', import.meta.url), csv);
console.log(`Wrote shopify/products.csv: ${PRODUCTS.length} products, ${BUNDLES.length} kits, ${rows.length} rows.`);
