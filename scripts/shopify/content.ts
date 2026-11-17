// Builds everything the Shopify store needs from the site's existing content in src/data/:
// the kits (with their contents and setup steps), how-to guides, blog posts, pages,
// policies, menus, and redirects from the old site's addresses. Used by
// scripts/shopify-setup.ts; run that with --dry-run to preview what this produces.
import { BUNDLES } from '../../src/data/bundles.ts';
import { PRODUCTS } from '../../src/data/products.ts';
import { BLOG_ARTICLES, BLOG_CATEGORY_NAV } from '../../src/data/blog.ts';
import { KIT_CARDS } from '../../src/data/kitCards.ts';
import { ALL_SHOP_ITEMS } from '../../src/data/shop.ts';
import { PRODUCT_IMAGES } from '../../src/data/productImages.ts';
import { BITING_NOW_INTRO, BITING_NOW_PICKS, BITING_NOW_SEASON } from '../../src/data/bitingNow.ts';
import { GUIDE_HERO, GUIDE_SECTIONS } from '../../src/data/guide.ts';
import { ABOUT_CONTENT, CONTACT_CONTENT, FAQ_ENTRIES, SHIPPING_RETURNS_CONTENT, TERMS_CONTENT } from '../../src/data/legal.ts';
import type { Product } from '../../src/data/types.ts';

export const KITS_COLLECTION = 'kits';
export const KIT_TAG = 'kit';
export const GEAR_COLLECTION = 'all-gear';
export const GEAR_TAG = 'gear';
export const JOURNAL_BLOG = 'journal';
export const GUIDES_BLOG = 'guides';
export const WELCOME_CODE = 'WELCOME15';
export const WELCOME_PERCENT = 15;

/** Shopify's handle for a tag, e.g. "Gear Guides" -> "gear-guides". */
const handleize = (s: string) => s.toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const p = (s?: string) => (s ? `<p>${esc(s)}</p>` : '');
const ul = (items: string[], cls = '') => `<ul${cls ? ` class="${cls}"` : ''}>${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`;
const steps = (list: { title: string; detail: string }[]) =>
  `<ol>${list.map((s) => `<li><strong>${esc(s.title)}.</strong> ${esc(s.detail)}</li>`).join('')}</ol>`;

/** Old site address → the matching Shopify address. */
export function mapUrl(url: string): string {
  if (/^(https?:|mailto:)/.test(url)) return url;
  const [path] = url.split('?');
  if (path === '/kits') return `/collections/${KITS_COLLECTION}`;
  if (path.startsWith('/shop')) return `/collections/${GEAR_COLLECTION}`;
  if (path.startsWith('/kits/')) return `/products/${path.slice(6)}`;
  if (path.startsWith('/product/')) return `/products/${path.slice(9)}`;
  if (path === '/blog') return `/blogs/${JOURNAL_BLOG}`;
  if (path.startsWith('/blog/')) {
    const parts = path.split('/').filter(Boolean);
    return parts.length >= 3 ? `/blogs/${JOURNAL_BLOG}/${parts[2]}` : `/blogs/${JOURNAL_BLOG}`;
  }
  const pages: Record<string, string> = {
    '/new-to-fishing': '/pages/new-to-fishing',
    '/biting-now': '/pages/biting-now',
    '/about': '/pages/about',
    '/faq': '/pages/faq',
    '/contact': '/pages/contact',
    '/shipping-returns': '/policies/shipping-policy',
    '/privacy': '/policies/privacy-policy',
    '/terms': '/policies/terms-of-service',
    '/cookies': '/policies/privacy-policy',
  };
  return pages[path] ?? path;
}

// ---------- Kits ----------

export interface KitProduct {
  handle: string;
  title: string;
  price: string;
  descriptionHtml: string;
  seoTitle: string;
  seoDescription: string;
  metafields: { key: string; type: string; value: string }[];
}

const productById = new Map(PRODUCTS.map((pr) => [pr.id, pr]));

export const KIT_PRODUCTS: KitProduct[] = BUNDLES.map((b) => {
  const components = b.components.map((c) => ({
    label: c.label,
    detail: c.detail,
    why: c.whyThis,
    sourced: c.sourced,
    guide: c.productId && productById.has(c.productId) ? `/products/${c.productId}` : '',
  }));
  const video = KIT_CARDS.find((k) => k.slug === b.slug)?.videoUrl;
  const metafields = [
    { key: 'tagline', type: 'single_line_text_field', value: b.tagline },
    { key: 'reassurance', type: 'multi_line_text_field', value: b.reassurance },
    { key: 'sourcing_note', type: 'multi_line_text_field', value: b.sourcingNote },
    { key: 'setup_note', type: 'multi_line_text_field', value: b.riggingNote },
    { key: 'kit_components', type: 'json', value: JSON.stringify(components) },
    { key: 'setup_steps', type: 'json', value: JSON.stringify(b.riggingSteps) },
    { key: 'good_for', type: 'json', value: JSON.stringify(b.goodFor) },
    { key: 'faq', type: 'json', value: JSON.stringify(b.faq) },
  ];
  if (video) metafields.push({ key: 'setup_video', type: 'url', value: video });
  return {
    handle: b.id,
    title: b.name,
    price: b.price.toFixed(2),
    descriptionHtml: p(b.scenario),
    seoTitle: b.metaTitle,
    seoDescription: b.metaDescription,
    metafields,
  };
});

/** Metafield definitions, so these fields show up (and are editable) on each kit in Shopify admin. */
export const PRODUCT_METAFIELD_DEFINITIONS = [
  { key: 'tagline', name: 'Tagline', type: 'single_line_text_field', description: 'One line shown on kit cards and under the kit name.' },
  { key: 'reassurance', name: 'Reassurance note', type: 'multi_line_text_field', description: 'The "you don\'t need more than this" note under Add to cart.' },
  { key: 'kit_components', name: "What's inside", type: 'json', description: 'Each piece: label, detail, why, sourced (anchor-brand or private-label), guide (link).' },
  { key: 'setup_note', name: 'Setup intro', type: 'multi_line_text_field', description: 'Short note above the setup steps.' },
  { key: 'setup_steps', name: 'Setup steps', type: 'json', description: 'Each step: title, detail.' },
  { key: 'sourcing_note', name: 'Sourcing note', type: 'multi_line_text_field', description: '"Where this gear comes from" paragraph.' },
  { key: 'good_for', name: 'Good for', type: 'json', description: 'Which fish and water the kit suits: { "fish": ["Largemouth bass"], "water": "Ponds and slow rivers." }.' },
  { key: 'faq', name: 'Kit FAQ', type: 'json', description: 'Questions and answers shown on the kit page: [{ "question": "...", "answer": "..." }].' },
  { key: 'reviews', name: 'Reviews', type: 'json', description: 'Customer reviews, shown on the kit page only when this has entries: [{ "name": "Sam", "text": "..." }].' },
  { key: 'setup_video', name: 'Setup video', type: 'url', description: 'YouTube link shown on the QR sticker page. Leave empty for "coming soon".' },
];

// ---------- Individual gear (every lure and piece of tackle) ----------

export interface GearProduct {
  handle: string;
  title: string;
  price: string;
  productType: string;
  tags: string[];
  descriptionHtml: string;
  seoTitle: string;
  seoDescription: string;
  /** "Size" values when the product comes in sizes; empty for a single variant. */
  sizes: string[];
  /** Photo in public/assets/products, uploaded to Shopify by the setup script. */
  image?: { file: string; alt: string };
  metafields: { key: string; type: string; value: string }[];
}

// "diveDepth" -> "Dive depth"
const specLabel = (k: string) => k.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase()).replace(/ (\w)/g, (_, c: string) => ` ${c.toLowerCase()}`);

export const GEAR_PRODUCTS: GearProduct[] = ALL_SHOP_ITEMS.flatMap((item) => {
  const pr = productById.get(item.id);
  if (!pr) return [];
  const kits = BUNDLES.filter((b) => b.components.some((c) => c.productId === pr.id)).map((b) => ({ handle: b.id, title: b.name }));
  const metafields = [
    { key: 'tagline', type: 'single_line_text_field', value: item.kicker },
    { key: 'kicker', type: 'single_line_text_field', value: pr.kicker },
    { key: 'gear_type', type: 'single_line_text_field', value: item.type },
    { key: 'difficulty', type: 'json', value: JSON.stringify({ label: item.difficultyLabel, score: item.difficultyScore, out_of: pr.difficulty?.outOf ?? 10 }) },
    { key: 'species', type: 'json', value: JSON.stringify(item.species) },
    { key: 'target_species', type: 'single_line_text_field', value: pr.targetSpecies ?? item.targetFish },
    { key: 'short_description', type: 'multi_line_text_field', value: pr.shortDescription },
    { key: 'long_description', type: 'multi_line_text_field', value: pr.longDescription },
    { key: 'fishing_guide', type: 'json', value: JSON.stringify(pr.guide) },
    { key: 'specs', type: 'json', value: JSON.stringify(Object.entries(pr.specs).map(([k, v]) => ({ label: specLabel(k), value: v }))) },
    // The old site promised a ship time; the store doesn't (kits and gear ship when stock arrives).
    { key: 'trust_badges', type: 'json', value: JSON.stringify(pr.trustBadges.map((b) => (/^Ships in/.test(b) ? 'Free shipping on orders $35+' : b))) },
    { key: 'related', type: 'json', value: JSON.stringify(pr.relatedProducts.map((r) => r.id).filter((id) => productById.has(id))) },
    { key: 'in_kits', type: 'json', value: JSON.stringify(kits) },
  ];
  if (pr.bestFor) metafields.push({ key: 'best_for', type: 'single_line_text_field', value: pr.bestFor });
  if (pr.buildDetails?.length) metafields.push({ key: 'build_details', type: 'json', value: JSON.stringify(pr.buildDetails) });
  if (pr.depthChart?.length) metafields.push({ key: 'depth_chart', type: 'json', value: JSON.stringify(pr.depthChart) });
  const file = PRODUCT_IMAGES[pr.id];
  return [{
    handle: pr.id,
    title: pr.displayNameFull,
    price: pr.price.toFixed(2),
    productType: item.type,
    tags: [GEAR_TAG, item.difficultyLabel, ...item.species],
    descriptionHtml: p(pr.shortDescription) + p(pr.longDescription),
    seoTitle: pr.metaTitle,
    seoDescription: pr.metaDescription,
    sizes: pr.sizeOptions ?? [],
    image: file ? { file, alt: pr.imagePlaceholderAlt } : undefined,
    metafields,
  }];
});

/** Metafield definitions for the individual gear, so each field is editable in Shopify admin. */
export const GEAR_METAFIELD_DEFINITIONS = [
  { key: 'kicker', name: 'Kicker', type: 'single_line_text_field', description: 'Small line above the product name, e.g. "Squarebill / 2.5 in / 1/2 oz".' },
  { key: 'gear_type', name: 'Gear type', type: 'single_line_text_field', description: 'Type used by the All Gear filter, e.g. Crankbait, Soft Plastic, Hooks.' },
  { key: 'difficulty', name: 'Difficulty', type: 'json', description: '{ "label": "Beginner", "score": 2, "out_of": 10 }. Beginner, Intermediate, or Advanced.' },
  { key: 'species', name: 'Fish (for filters)', type: 'json', description: 'Fish names for the All Gear filter, e.g. ["Largemouth Bass", "Panfish"]. Empty means any fish.' },
  { key: 'target_species', name: 'Target species', type: 'single_line_text_field', description: 'Shown on the product page, e.g. "Largemouth & smallmouth bass".' },
  { key: 'best_for', name: 'Best for', type: 'single_line_text_field', description: 'Optional "Best for" line on the product page.' },
  { key: 'short_description', name: 'Short description', type: 'multi_line_text_field', description: 'Lead paragraph next to the photo.' },
  { key: 'long_description', name: 'The details', type: 'multi_line_text_field', description: '"The details" paragraph lower on the page.' },
  { key: 'fishing_guide', name: 'How to fish it', type: 'json', description: '{ gearNeeded: [...], steps: [{ title, detail }], biteFeel, commonMistakes: [...], confidenceTip }.' },
  { key: 'specs', name: 'Specs', type: 'json', description: '[{ "label": "Dive depth", "value": "6 ft" }].' },
  { key: 'build_details', name: 'Build details', type: 'json', description: '[{ part, title, description }]. Optional.' },
  { key: 'depth_chart', name: 'Depth chart', type: 'json', description: '[{ depth, note, highlight }]. Optional.' },
  { key: 'trust_badges', name: 'Trust badges', type: 'json', description: 'Short lines under the button, e.g. ["Free shipping over $35"].' },
  { key: 'related', name: 'You might also like', type: 'json', description: 'Product handles, e.g. ["driftworm", "baithooks"].' },
  { key: 'in_kits', name: 'Comes in these kits', type: 'json', description: '[{ "handle": "first-bass-kit", "title": "First Bass Kit" }].' },
];

// ---------- How-to guides (one per piece that comes in a kit) ----------

export interface ArticleContent {
  handle: string;
  title: string;
  body: string;
  summary: string;
  tags: string[];
  cta?: { heading: string; text: string; label: string; link: string };
}

function guideBody(pr: Product): string {
  const g = pr.guide;
  return [
    p(pr.shortDescription),
    p(pr.longDescription),
    g.gearNeeded.length ? `<h2>What you need</h2>${ul(g.gearNeeded)}` : '',
    g.steps.length ? `<h2>How to fish it</h2>${steps(g.steps)}` : '',
    g.biteFeel ? `<h2>What a bite feels like</h2>${p(g.biteFeel)}` : '',
    g.commonMistakes.length ? `<h2>Common mistakes</h2>${ul(g.commonMistakes)}` : '',
    g.confidenceTip ? `<div class="callout"><strong>Good to know:</strong> ${esc(g.confidenceTip)}</div>` : '',
  ].join('');
}

const kitPieceIds = [...new Set(BUNDLES.flatMap((b) => b.components.map((c) => c.productId).filter((id): id is string => !!id && productById.has(id))))];

export const GUIDE_ARTICLES: ArticleContent[] = kitPieceIds.map((id) => {
  const pr = productById.get(id)!;
  const kit = BUNDLES.find((b) => b.components.some((c) => c.productId === id))!;
  return {
    handle: pr.id,
    title: `How to use the ${pr.displayNameFull}`,
    body: guideBody(pr),
    summary: p(pr.shortDescription),
    tags: [pr.category.split(' (')[0]],
    cta: { heading: `Comes in the ${kit.name}`, text: kit.tagline, label: 'See the kit', link: `/products/${kit.id}` },
  };
});

// ---------- Blog posts ----------

const categoryLabel = (slug: string) => BLOG_CATEGORY_NAV.find((c) => c.slug === slug)?.label ?? slug;

export const JOURNAL_ARTICLES: ArticleContent[] = BLOG_ARTICLES.map((a) => ({
  handle: a.slug,
  title: a.title,
  body: p(a.bodyIntro) + a.sections.map((s) => `<h2>${esc(s.heading)}</h2>${p(s.body)}`).join(''),
  summary: p(a.bodyIntro),
  tags: [categoryLabel(a.category)],
  cta: { heading: a.endCta.heading, text: a.endCta.body, label: a.endCta.buttonLabel, link: mapUrl(a.endCta.href) },
}));

// ---------- Pages ----------

export interface PageContent {
  handle: string;
  title: string;
  body: string;
  templateSuffix: string;
  eyebrow?: string;
  subtitle?: string;
}

// Launch sells kits only, so two FAQ answers that talk about buying single pieces are
// reworded here rather than changed in src/data/legal.ts.
const FAQ_OVERRIDES: Record<string, string> = {
  'Can I customize what’s inside a kit?': 'Not right now. Each kit is priced and matched as a set, so every piece works with the others.',
};

function faqBody(): string {
  return FAQ_ENTRIES.filter((e) => !e.usedGear)
    .map((e) => {
      const answer = FAQ_OVERRIDES[e.question] ?? e.answer;
      const links = e.links.length
        ? `<p>${e.links.map((l) => `<a href="${esc(mapUrl(l.target))}">${esc(l.text)}</a>`).join(' &middot; ')}</p>`
        : '';
      return `<details><summary>${esc(e.question)}</summary>${p(answer)}${links}</details>`;
    })
    .join('');
}

// The full New to Fishing guide from the original site: jump links, then each section with
// its steps, Q&A, checklists, and notes. Shown by templates/page.guide.json.
function newToFishingBody(): string {
  const jump = `<ul class="jump-links">${GUIDE_HERO.jumpLinks.map((j) => `<li><a href="#${j.anchor}">${esc(j.label)}</a></li>`).join('')}</ul>`;
  const sections = GUIDE_SECTIONS.map((s) => {
    const parts = [
      `<h2 id="${s.id}"><small class="eyebrow" style="display:block;">${esc(s.eyebrow)}</small>${esc(s.heading)}</h2>`,
      p(s.intro),
      p(s.body),
      s.steps ? steps(s.steps) : '',
      s.qa ? s.qa.map((q) => `<blockquote><strong>${esc(q.q)}</strong><br>${esc(q.a)}</blockquote>`).join('') : '',
      s.checklist ? ul(s.checklist, 'checklist') : '',
      s.listItems ? ul(s.listItems) : '',
      s.cards ? s.cards.map((c) => `<h3>${esc(c.heading)}</h3>${p(c.body)}`).join('') : '',
      s.note ? `<div class="callout"><strong>Good to know:</strong> ${esc(s.note)}</div>` : '',
    ];
    return parts.join('');
  }).join('');
  return jump + sections;
}

// The Biting Now page's picks live in templates/page.biting-now.json (editable in the theme
// editor); this body is the page's intro text and its search/admin copy.
function bitingNowBody(): string {
  return p(BITING_NOW_INTRO);
}

export const PAGES: PageContent[] = [
  {
    handle: 'about',
    title: ABOUT_CONTENT.heading,
    templateSuffix: 'about',
    eyebrow: ABOUT_CONTENT.eyebrow,
    body: ABOUT_CONTENT.intro.map(p).join('') + ABOUT_CONTENT.sections.map((s) => `<h2>${esc(s.heading)}</h2>${p(s.body)}`).join(''),
  },
  { handle: 'faq', title: 'FAQ', templateSuffix: '', eyebrow: 'Common questions', body: faqBody() },
  {
    handle: 'contact',
    title: CONTACT_CONTENT.heading,
    templateSuffix: 'contact',
    eyebrow: CONTACT_CONTENT.eyebrow,
    subtitle: CONTACT_CONTENT.subheading,
    body: '',
  },
  {
    handle: 'new-to-fishing',
    title: GUIDE_HERO.heading,
    templateSuffix: 'guide',
    eyebrow: GUIDE_HERO.eyebrow,
    subtitle: GUIDE_HERO.intro,
    body: newToFishingBody(),
  },
  {
    handle: 'biting-now',
    title: "What's Biting Now",
    templateSuffix: 'biting-now',
    eyebrow: `${BITING_NOW_SEASON} picks`,
    subtitle: BITING_NOW_INTRO,
    body: bitingNowBody(),
  },
];

// ---------- Policies ----------

const sectionsHtml = (sections: { heading: string; body: string }[]) => sections.map((s) => `<h2>${esc(s.heading)}</h2>${p(s.body)}`).join('');
const pick = (headings: string[]) => SHIPPING_RETURNS_CONTENT.sections.filter((s) => headings.includes(s.heading));

// Rewritten for a Shopify-run store (the old site's version described browser storage and
// Formspree). Review it, or replace it with Shopify's privacy policy generator.
const PRIVACY_SECTIONS = [
  { heading: 'What we collect', body: "We collect what you give us directly: your name, email, shipping address, and phone number when you place an order; your email if you sign up for our newsletter, claim our welcome discount, or ask to hear when something's back in stock; and your name, email, and message if you contact us. Payment details are entered on Shopify's secure checkout and processed by Shopify and its payment partners. We never see or store your full card number." },
  { heading: 'How we use it', body: "We use your information to process and ship orders, answer your questions, prevent fraud, and, only if you've opted in, send occasional emails about new gear and fishing tips. We don't sell or rent your personal information. We share it only with the services that run the business, like Shopify (our store and checkout platform), payment processors, and shipping carriers, and only as needed to do that job." },
  { heading: 'Cookies', body: "Our store runs on Shopify, which uses cookies to keep your cart, run checkout, and keep the site secure. Where the law requires it, you'll be asked before any analytics or marketing cookies are used, and you can change your choice anytime. We don't run ad retargeting pixels." },
  { heading: "Children's privacy", body: "Ketto Outdoors is not directed at children, and we don't knowingly collect personal information from anyone under 13. If you believe a child has given us information, email us and we'll delete it." },
  { heading: 'Your rights', body: 'You can ask for a copy of the information we hold about you, or ask us to correct or delete it, by emailing KettoOutdoors@gmail.com. We respond within 30 days. If you are a California resident, this covers your CCPA rights to know, delete, and opt out of the sale of personal information (we do not sell personal information).' },
  { heading: 'Email choices', body: 'You can unsubscribe from marketing emails anytime with the link at the bottom of any email, or by contacting us. Order and shipping emails still go out for orders you place.' },
  { heading: 'Contact us', body: 'Questions about this policy? Reach us at KettoOutdoors@gmail.com.' },
];

export const POLICIES: { type: string; body: string }[] = [
  { type: 'PRIVACY_POLICY', body: sectionsHtml(PRIVACY_SECTIONS) },
  { type: 'TERMS_OF_SERVICE', body: sectionsHtml(TERMS_CONTENT.sections.filter((s) => !s.heading.startsWith('Trade-ins'))) },
  { type: 'SHIPPING_POLICY', body: sectionsHtml(pick(['Shipping', 'Shipping costs', 'Damaged or incorrect items'])) },
  { type: 'REFUND_POLICY', body: sectionsHtml(pick(['Returns', 'How to start a return', 'Refund timing', 'Damaged or incorrect items'])) },
];

// ---------- Redirects from the old site's addresses ----------

export const REDIRECTS: { path: string; target: string }[] = [
  // Printed on the QR stickers inside each kit: never remove these.
  ...KIT_CARDS.map((k) => ({ path: `/${k.path}`, target: `/products/${k.slug}?view=guide` })),
  { path: '/kits', target: mapUrl('/kits') },
  ...BUNDLES.map((b) => ({ path: `/kits/${b.slug}`, target: `/products/${b.id}` })),
  { path: '/shop', target: mapUrl('/shop') },
  // Every product now has its own page in the store (see GEAR_PRODUCTS).
  ...PRODUCTS.map((pr) => ({ path: `/product/${pr.id}`, target: GEAR_PRODUCTS.some((g) => g.handle === pr.id) ? mapUrl(`/product/${pr.id}`) : `/collections/${GEAR_COLLECTION}` })),
  { path: '/blog', target: mapUrl('/blog') },
  ...BLOG_CATEGORY_NAV.map((c) => ({ path: `/blog/${c.slug}`, target: `/blogs/${JOURNAL_BLOG}/tagged/${handleize(c.label)}` })),
  ...BLOG_ARTICLES.map((a) => ({ path: `/blog/${a.category}/${a.slug}`, target: `/blogs/${JOURNAL_BLOG}/${a.slug}` })),
  ...['/new-to-fishing', '/biting-now', '/about', '/faq', '/contact', '/shipping-returns', '/privacy', '/terms', '/cookies'].map((path) => ({ path, target: mapUrl(path) })),
  { path: '/orders', target: '/account' },
];

// ---------- Menus ----------

export interface MenuItem {
  title: string;
  /** Resolved to a Shopify resource by the setup script. */
  kind: 'collection' | 'page' | 'blog' | 'url';
  handle?: string;
  url?: string;
}

export const MENUS: { handle: string; title: string; items: MenuItem[] }[] = [
  {
    handle: 'main-menu',
    title: 'Main menu',
    items: [
      { title: 'All Gear', kind: 'collection', handle: GEAR_COLLECTION },
      { title: "What's Biting", kind: 'page', handle: 'biting-now' },
      { title: 'New to Fishing', kind: 'page', handle: 'new-to-fishing' },
    ],
  },
  {
    handle: 'footer',
    title: 'Footer menu',
    items: [
      { title: 'Shop kits', kind: 'collection', handle: KITS_COLLECTION },
      { title: 'All gear', kind: 'collection', handle: GEAR_COLLECTION },
      { title: "What's biting now", kind: 'page', handle: 'biting-now' },
      { title: 'New to fishing guide', kind: 'page', handle: 'new-to-fishing' },
      { title: 'How-To Guides', kind: 'blog', handle: GUIDES_BLOG },
      { title: 'Blog', kind: 'blog', handle: JOURNAL_BLOG },
    ],
  },
  {
    handle: 'footer-support',
    title: 'Footer support',
    items: [
      { title: 'About us', kind: 'page', handle: 'about' },
      { title: 'FAQ', kind: 'page', handle: 'faq' },
      { title: 'Contact us', kind: 'page', handle: 'contact' },
      { title: 'Shipping policy', kind: 'url', url: '/policies/shipping-policy' },
      { title: 'Returns & refunds', kind: 'url', url: '/policies/refund-policy' },
      { title: 'Privacy policy', kind: 'url', url: '/policies/privacy-policy' },
      { title: 'Terms of service', kind: 'url', url: '/policies/terms-of-service' },
    ],
  },
];
