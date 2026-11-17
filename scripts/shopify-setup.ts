// Fills a new Shopify store with the Ketto Outdoors catalog and content:
// the 3 kits (and the Kits collection), how-to guides, blog posts, pages, policies,
// menus, the WELCOME15 discount, and redirects from the old site's addresses.
//
// Safe to run more than once: anything that already exists is left alone, so edits you
// make in Shopify admin are never overwritten. Pass --update to overwrite kits, pages,
// and posts with the content in src/data/ instead.
//
// Usually run from GitHub: Actions > "Set up Shopify store" > Run workflow. Locally:
//   SHOPIFY_SHOP=your-store SHOPIFY_CLIENT_ID=... SHOPIFY_CLIENT_SECRET=... npm run shopify:setup
//   npm run shopify:setup -- --dry-run   (prints what it would do, no store needed)
import { readFileSync } from 'node:fs';
import {
  GEAR_COLLECTION, GEAR_METAFIELD_DEFINITIONS, GEAR_PRODUCTS, GEAR_TAG, GUIDE_ARTICLES, GUIDES_BLOG, JOURNAL_ARTICLES, JOURNAL_BLOG, KIT_PRODUCTS, KIT_TAG, KITS_COLLECTION, MENUS, PAGES,
  POLICIES, PRODUCT_METAFIELD_DEFINITIONS, REDIRECTS, WELCOME_CODE, WELCOME_PERCENT,
  type ArticleContent, type GearProduct, type MenuItem,
} from './shopify/content.ts';

const API_VERSION = '2026-07';
const DRY_RUN = process.argv.includes('--dry-run');
// --only=content refreshes just the words: pages, blog posts, how-to guides, each kit's
// name, description, and text fields (tagline, contents, setup steps), the shipping/refund/terms policies, and the
// menus. Prices, stock, photos, the discount, and redirects are left alone. Implies --update
// for those.
const CONTENT_ONLY = process.argv.includes('--only=content');
// --only=catalog adds the full catalog from the original site: every individual lure and piece
// of tackle (with photos where we have them), the All Gear collection, the Biting Now and full
// New to Fishing pages, the menus, and redirects from the old /product/ and /shop addresses.
// Gear already in the store is left alone unless --update is also passed.
const CATALOG_ONLY = process.argv.includes('--only=catalog');
const UPDATE = process.argv.includes('--update') || CONTENT_ONLY;

const shopInput = (process.env.SHOPIFY_SHOP ?? '').trim().replace(/^https?:\/\//, '').replace(/\/.*$/, '');
const SHOP = shopInput.endsWith('.myshopify.com') ? shopInput : shopInput ? `${shopInput}.myshopify.com` : '';

let failures = 0;
const log = (msg: string) => console.log(msg);
const fail = (what: string, err: unknown) => {
  failures++;
  console.log(`  ✗ ${what}: ${err instanceof Error ? err.message : JSON.stringify(err)}`);
};

// ---------- API ----------

let token = process.env.SHOPIFY_ADMIN_TOKEN?.trim() || '';

async function getToken(): Promise<string> {
  if (token) return token;
  const clientId = process.env.SHOPIFY_CLIENT_ID?.trim();
  const clientSecret = process.env.SHOPIFY_CLIENT_SECRET?.trim();
  if (!clientId || !clientSecret) throw new Error('Set SHOPIFY_CLIENT_ID and SHOPIFY_CLIENT_SECRET (or SHOPIFY_ADMIN_TOKEN).');
  const res = await fetch(`https://${SHOP}/admin/oauth/access_token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'client_credentials', client_id: clientId, client_secret: clientSecret }),
  });
  if (!res.ok) {
    throw new Error(
      `Shopify refused the app's credentials (HTTP ${res.status}). Check that SHOPIFY_SHOP is right, the Client ID and secret were copied from the app's Settings page, and the app is installed on the store.`,
    );
  }
  const json = (await res.json()) as { access_token: string; scope?: string };
  token = json.access_token;
  if (json.scope) log(`Connected. App permissions: ${json.scope}`);
  return token;
}

async function gql<T = any>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  for (let attempt = 0; ; attempt++) {
    const res = await fetch(`https://${SHOP}/admin/api/${API_VERSION}/graphql.json`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Shopify-Access-Token': await getToken() },
      body: JSON.stringify({ query, variables }),
    });
    if (res.status === 429 && attempt < 5) {
      await new Promise((r) => setTimeout(r, 2000 * (attempt + 1)));
      continue;
    }
    const json = (await res.json().catch(() => ({}))) as { data?: T; errors?: { message: string; extensions?: { code?: string } }[] };
    if (json.errors?.some((e) => e.extensions?.code === 'THROTTLED') && attempt < 5) {
      await new Promise((r) => setTimeout(r, 2000 * (attempt + 1)));
      continue;
    }
    if (!res.ok || json.errors?.length) {
      const msg = json.errors?.map((e) => e.message).join('; ') || `HTTP ${res.status}`;
      throw new Error(/access denied|scope/i.test(msg) ? `${msg} (the app is missing a permission; see the README's Shopify setup)` : msg);
    }
    return json.data as T;
  }
}

/** Runs a mutation and throws on userErrors. */
async function mutate<T = any>(name: string, query: string, variables: Record<string, unknown>): Promise<T> {
  const data = await gql<Record<string, any>>(query, variables);
  const payload = data[name];
  const errors = payload?.userErrors ?? [];
  if (errors.length) throw new Error(errors.map((e: { message: string }) => e.message).join('; '));
  return payload as T;
}

// ---------- Steps ----------

async function onlineStorePublicationId(): Promise<string | null> {
  const data = await gql<{ publications: { nodes: { id: string; name: string }[] } }>(`{ publications(first: 50) { nodes { id name } } }`);
  return data.publications.nodes.find((n) => n.name === 'Online Store')?.id ?? null;
}

async function publish(id: string, publicationId: string | null, what: string) {
  if (!publicationId) return;
  try {
    await mutate('publishablePublish', `mutation($id: ID!, $pub: ID!) { publishablePublish(id: $id, input: { publicationId: $pub }) { userErrors { message } } }`, { id, pub: publicationId });
  } catch (e) {
    fail(`publish ${what} to the online store`, e);
  }
}

async function metafieldDefinitions() {
  log('\nProduct fields (metafield definitions)');
  for (const d of [...PRODUCT_METAFIELD_DEFINITIONS, ...GEAR_METAFIELD_DEFINITIONS]) {
    try {
      await mutate('metafieldDefinitionCreate', `mutation($d: MetafieldDefinitionInput!) { metafieldDefinitionCreate(definition: $d) { createdDefinition { id } userErrors { message } } }`, {
        d: { ...d, namespace: 'custom', ownerType: 'PRODUCT', pin: true },
      });
      log(`  ✓ ${d.name}`);
    } catch (e) {
      if (/taken|already/i.test(String(e))) log(`  · ${d.name} (already there)`);
      else fail(d.name, e);
    }
  }
}

async function kits(publicationId: string | null) {
  log('\nKits');
  for (const kit of KIT_PRODUCTS) {
    try {
      const existing = await gql<{ productByIdentifier: { id: string } | null }>(`query($h: String!) { productByIdentifier(identifier: { handle: $h }) { id } }`, { h: kit.handle });
      if (existing.productByIdentifier && !UPDATE) {
        log(`  · ${kit.title} (already there)`);
        continue;
      }
      const input = {
        title: kit.title,
        handle: kit.handle,
        descriptionHtml: kit.descriptionHtml,
        vendor: 'Ketto Outdoors',
        productType: 'Kit',
        tags: [KIT_TAG],
        status: 'ACTIVE',
        seo: { title: kit.seoTitle, description: kit.seoDescription },
        metafields: kit.metafields.map((m) => ({ namespace: 'custom', ...m })),
        productOptions: [{ name: 'Title', values: [{ name: 'Default Title' }] }],
        variants: [
          {
            optionValues: [{ optionName: 'Title', name: 'Default Title' }],
            price: kit.price,
            inventoryPolicy: 'DENY',
            taxable: true,
            inventoryItem: { sku: kit.handle, tracked: true, requiresShipping: true },
          },
        ],
      };
      const res = await mutate<{ product: { id: string } }>(
        'productSet',
        `mutation($input: ProductSetInput!, $identifier: ProductSetIdentifiers) { productSet(synchronous: true, input: $input, identifier: $identifier) { product { id } userErrors { message } } }`,
        { input, identifier: existing.productByIdentifier ? { handle: kit.handle } : null },
      );
      await publish(res.product.id, publicationId, kit.title);
      log(`  ✓ ${kit.title} ($${kit.price}, starts at 0 in stock)`);
    } catch (e) {
      fail(kit.title, e);
    }
  }
}

// Uploads a photo from public/assets/products to Shopify and returns a URL productSet can use.
async function uploadImage(file: string): Promise<string> {
  const bytes = readFileSync(new URL(`../public/assets/products/${file}`, import.meta.url));
  const res = await mutate<{ stagedTargets: { url: string; resourceUrl: string; parameters: { name: string; value: string }[] }[] }>(
    'stagedUploadsCreate',
    `mutation($input: [StagedUploadInput!]!) { stagedUploadsCreate(input: $input) { stagedTargets { url resourceUrl parameters { name value } } userErrors { message } } }`,
    { input: [{ resource: 'IMAGE', filename: file, mimeType: 'image/jpeg', httpMethod: 'POST' }] },
  );
  const target = res.stagedTargets[0];
  const form = new FormData();
  for (const p of target.parameters) form.append(p.name, p.value);
  form.append('file', new Blob([bytes], { type: 'image/jpeg' }), file);
  const up = await fetch(target.url, { method: 'POST', body: form });
  if (!up.ok) throw new Error(`photo upload failed (${up.status})`);
  return target.resourceUrl;
}

async function gearProduct(g: GearProduct, publicationId: string | null) {
  const existing = await gql<{ productByIdentifier: { id: string } | null }>(`query($h: String!) { productByIdentifier(identifier: { handle: $h }) { id } }`, { h: g.handle });
  if (existing.productByIdentifier && !UPDATE) {
    log(`  · ${g.title} (already there)`);
    return;
  }
  let files: { originalSource: string; alt: string; contentType: string }[] | undefined;
  if (g.image) {
    try {
      files = [{ originalSource: await uploadImage(g.image.file), alt: g.image.alt, contentType: 'IMAGE' }];
    } catch (e) {
      fail(`${g.title} photo (the product is still added; add the photo in Shopify admin)`, e);
    }
  }
  const optionName = g.sizes.length ? 'Size' : 'Title';
  const values = g.sizes.length ? g.sizes : ['Default Title'];
  const input = {
    title: g.title,
    handle: g.handle,
    descriptionHtml: g.descriptionHtml,
    vendor: 'Ketto Outdoors',
    productType: g.productType,
    tags: g.tags,
    status: 'ACTIVE',
    templateSuffix: 'gear',
    seo: { title: g.seoTitle, description: g.seoDescription },
    metafields: g.metafields.map((m) => ({ namespace: 'custom', ...m })),
    productOptions: [{ name: optionName, values: values.map((name) => ({ name })) }],
    // Starts at 0 in stock and doesn't sell past 0, so nothing is sold before it exists.
    // Set real counts in Shopify once stock arrives.
    variants: values.map((name) => ({
      optionValues: [{ optionName, name }],
      price: g.price,
      inventoryPolicy: 'DENY',
      taxable: true,
      inventoryItem: { sku: g.sizes.length ? `${g.handle}-${name.replace(/[^a-z0-9]+/gi, '')}` : g.handle, tracked: true, requiresShipping: true },
    })),
    ...(files ? { files } : {}),
  };
  const res = await mutate<{ product: { id: string } }>(
    'productSet',
    `mutation($input: ProductSetInput!, $identifier: ProductSetIdentifiers) { productSet(synchronous: true, input: $input, identifier: $identifier) { product { id } userErrors { message } } }`,
    { input, identifier: existing.productByIdentifier ? { handle: g.handle } : null },
  );
  await publish(res.product.id, publicationId, g.title);
  log(`  ✓ ${g.title} ($${Number(g.price)}${g.sizes.length ? `, ${g.sizes.length} sizes` : ''}${files ? ', with photo' : ''})`);
}

async function gear(publicationId: string | null) {
  log('\nIndividual gear');
  for (const g of GEAR_PRODUCTS) {
    try {
      await gearProduct(g, publicationId);
    } catch (e) {
      fail(g.title, e);
    }
  }
}

async function gearCollection(publicationId: string | null) {
  log('\nAll Gear collection');
  try {
    const found = await gql<{ collections: { nodes: { id: string; handle: string }[] } }>(`{ collections(first: 5, query: "handle:${GEAR_COLLECTION}") { nodes { id handle } } }`);
    if (found.collections.nodes.some((c) => c.handle === GEAR_COLLECTION)) {
      log('  · All Gear (already there)');
      return;
    }
    const res = await mutate<{ collection: { id: string } }>(
      'collectionCreate',
      `mutation($input: CollectionInput!) { collectionCreate(input: $input) { collection { id } userErrors { message } } }`,
      {
        input: {
          title: 'All Gear',
          handle: GEAR_COLLECTION,
          templateSuffix: 'all-gear',
          descriptionHtml: '<p>Every item here is picked by us. Difficulty scores show how much skill each one takes.</p>',
          // Oldest first, which is the order the setup script adds them: the live catalog, then the rest.
          sortOrder: 'CREATED',
          seo: { title: 'Shop All Gear | Ketto Outdoors', description: 'Browse every lure and piece of tackle, filtered by difficulty, species, and type.' },
          ruleSet: { appliedDisjunctively: false, rules: [{ column: 'TAG', relation: 'EQUALS', condition: GEAR_TAG }] },
        },
      },
    );
    await publish(res.collection.id, publicationId, 'All Gear collection');
    log(`  ✓ All Gear (every product tagged "${GEAR_TAG}" joins it automatically)`);
  } catch (e) {
    fail('All Gear collection', e);
  }
}

async function kitsCollection(publicationId: string | null) {
  log('\nKits collection');
  try {
    const found = await gql<{ collections: { nodes: { id: string; handle: string }[] } }>(`{ collections(first: 5, query: "handle:${KITS_COLLECTION}") { nodes { id handle } } }`);
    if (found.collections.nodes.some((c) => c.handle === KITS_COLLECTION)) {
      log('  · Kits (already there)');
      return;
    }
    const res = await mutate<{ collection: { id: string } }>(
      'collectionCreate',
      `mutation($input: CollectionInput!) { collectionCreate(input: $input) { collection { id } userErrors { message } } }`,
      {
        input: {
          title: 'Kits',
          handle: KITS_COLLECTION,
          descriptionHtml: '<p>Pick the kit that matches the fish you want to catch. Everything inside works together.</p>',
          sortOrder: 'PRICE_ASC',
          ruleSet: { appliedDisjunctively: false, rules: [{ column: 'TAG', relation: 'EQUALS', condition: KIT_TAG }] },
        },
      },
    );
    await publish(res.collection.id, publicationId, 'Kits collection');
    log(`  ✓ Kits (every product tagged "${KIT_TAG}" joins it automatically)`);
  } catch (e) {
    fail('Kits collection', e);
  }
}

// Pages listed in `force` are rewritten even without --update.
async function pages(force: string[] = []) {
  log('\nPages');
  for (const page of PAGES) {
    try {
      const found = await gql<{ pages: { nodes: { id: string; handle: string }[] } }>(`query($q: String!) { pages(first: 5, query: $q) { nodes { id handle } } }`, { q: `handle:${page.handle}` });
      const existing = found.pages.nodes.find((n) => n.handle === page.handle);
      const metafields = [
        page.eyebrow && { namespace: 'custom', key: 'eyebrow', type: 'single_line_text_field', value: page.eyebrow },
        page.subtitle && { namespace: 'custom', key: 'subtitle', type: 'multi_line_text_field', value: page.subtitle },
      ].filter(Boolean);
      const fields = { title: page.title, body: page.body, templateSuffix: page.templateSuffix || null, isPublished: true, metafields };
      if (existing && !UPDATE && !force.includes(page.handle)) {
        // Shopify creates a Contact page in new stores; point it at the contact template.
        if (page.handle === 'contact') {
          await mutate('pageUpdate', `mutation($id: ID!, $page: PageUpdateInput!) { pageUpdate(id: $id, page: $page) { page { id } userErrors { message } } }`, {
            id: existing.id,
            page: { templateSuffix: page.templateSuffix, metafields },
          });
          log(`  ✓ ${page.title} (existing page switched to the contact form layout)`);
        } else {
          log(`  · ${page.title} (already there)`);
        }
        continue;
      }
      if (existing) {
        await mutate('pageUpdate', `mutation($id: ID!, $page: PageUpdateInput!) { pageUpdate(id: $id, page: $page) { page { id } userErrors { message } } }`, { id: existing.id, page: fields });
        log(`  ✓ ${page.title} (updated)`);
      } else {
        await mutate('pageCreate', `mutation($page: PageCreateInput!) { pageCreate(page: $page) { page { id } userErrors { message } } }`, { page: { ...fields, handle: page.handle } });
        log(`  ✓ ${page.title}`);
      }
    } catch (e) {
      fail(page.title, e);
    }
  }
}

async function ensureBlog(handle: string, title: string): Promise<string> {
  const found = await gql<{ blogs: { nodes: { id: string; handle: string }[] } }>(`query($q: String!) { blogs(first: 5, query: $q) { nodes { id handle } } }`, { q: `handle:${handle}` });
  const existing = found.blogs.nodes.find((b) => b.handle === handle);
  if (existing) return existing.id;
  const res = await mutate<{ blog: { id: string } }>('blogCreate', `mutation($blog: BlogCreateInput!) { blogCreate(blog: $blog) { blog { id } userErrors { message } } }`, {
    blog: { title, handle, commentPolicy: 'CLOSED' },
  });
  return res.blog.id;
}

async function blog(handle: string, title: string, articles: ArticleContent[]) {
  log(`\n${title} (blog)`);
  let blogId: string;
  try {
    blogId = await ensureBlog(handle, title);
  } catch (e) {
    fail(title, e);
    return;
  }
  const existing = await gql<{ blog: { articles: { nodes: { id: string; handle: string }[] } } }>(
    `query($id: ID!) { blog(id: $id) { articles(first: 250) { nodes { id handle } } } }`,
    { id: blogId },
  ).then((d) => d.blog.articles.nodes);

  for (const a of articles) {
    try {
      const metafields = a.cta
        ? [
            { namespace: 'custom', key: 'cta_heading', type: 'single_line_text_field', value: a.cta.heading },
            { namespace: 'custom', key: 'cta_text', type: 'multi_line_text_field', value: a.cta.text },
            { namespace: 'custom', key: 'cta_label', type: 'single_line_text_field', value: a.cta.label },
            { namespace: 'custom', key: 'cta_link', type: 'single_line_text_field', value: a.cta.link },
          ]
        : [];
      const article = { title: a.title, body: a.body, summary: a.summary, tags: a.tags, isPublished: true, metafields };
      const found = existing.find((n) => n.handle === a.handle);
      if (found && !UPDATE) {
        log(`  · ${a.title} (already there)`);
        continue;
      }
      if (found) {
        await mutate('articleUpdate', `mutation($id: ID!, $article: ArticleUpdateInput!) { articleUpdate(id: $id, article: $article) { article { id } userErrors { message } } }`, { id: found.id, article });
        log(`  ✓ ${a.title} (updated)`);
      } else {
        await mutate('articleCreate', `mutation($article: ArticleCreateInput!) { articleCreate(article: $article) { article { id } userErrors { message } } }`, {
          article: { ...article, blogId, handle: a.handle, author: { name: 'Ketto Outdoors' } },
        });
        log(`  ✓ ${a.title}`);
      }
    } catch (e) {
      fail(a.title, e);
    }
  }
}

async function policies() {
  log('\nPolicies');
  for (const pol of POLICIES) {
    try {
      const current = await gql<{ shop: { shopPolicies: { type: string; body: string }[] } }>(`{ shop { shopPolicies { type body } } }`);
      const existing = current.shop.shopPolicies.find((s) => s.type === pol.type);
      // The privacy policy is the store's own (Shopify's generator): only filled in if empty.
      if (existing?.body?.trim() && (!UPDATE || pol.type === 'PRIVACY_POLICY')) {
        log(`  · ${pol.type} (already written)`);
        continue;
      }
      await mutate('shopPolicyUpdate', `mutation($p: ShopPolicyInput!) { shopPolicyUpdate(shopPolicy: $p) { shopPolicy { id } userErrors { message } } }`, { p: pol });
      log(`  ✓ ${pol.type}`);
    } catch (e) {
      fail(pol.type, e);
    }
  }
}

async function resolveMenuItem(item: MenuItem) {
  if (item.kind === 'url') return { title: item.title, type: 'HTTP', url: item.url };
  if (item.kind === 'collection') {
    const d = await gql<{ collections: { nodes: { id: string; handle: string }[] } }>(`{ collections(first: 5, query: "handle:${item.handle}") { nodes { id handle } } }`);
    const c = d.collections.nodes.find((n) => n.handle === item.handle);
    return c ? { title: item.title, type: 'COLLECTION', resourceId: c.id } : { title: item.title, type: 'HTTP', url: `/collections/${item.handle}` };
  }
  if (item.kind === 'page') {
    const d = await gql<{ pages: { nodes: { id: string; handle: string }[] } }>(`query($q: String!) { pages(first: 5, query: $q) { nodes { id handle } } }`, { q: `handle:${item.handle}` });
    const pg = d.pages.nodes.find((n) => n.handle === item.handle);
    return pg ? { title: item.title, type: 'PAGE', resourceId: pg.id } : { title: item.title, type: 'HTTP', url: `/pages/${item.handle}` };
  }
  const d = await gql<{ blogs: { nodes: { id: string; handle: string }[] } }>(`query($q: String!) { blogs(first: 5, query: $q) { nodes { id handle } } }`, { q: `handle:${item.handle}` });
  const b = d.blogs.nodes.find((n) => n.handle === item.handle);
  return b ? { title: item.title, type: 'BLOG', resourceId: b.id } : { title: item.title, type: 'HTTP', url: `/blogs/${item.handle}` };
}

async function menus(force = false) {
  log('\nMenus');
  const existing = await gql<{ menus: { nodes: { id: string; handle: string; items: { title: string }[] }[] } }>(`{ menus(first: 50) { nodes { id handle items { title } } } }`).then((d) => d.menus.nodes);
  for (const menu of MENUS) {
    try {
      const items = [];
      for (const item of menu.items) items.push({ ...(await resolveMenuItem(item)), items: [] });
      const found = existing.find((m) => m.handle === menu.handle);
      if (found) {
        // Shopify's starter menus are replaced; a menu that's already been customized is kept.
        const starter = found.items.every((i) => ['Home', 'Catalog', 'Contact', 'Search'].includes(i.title));
        if (!starter && !UPDATE && !force) {
          log(`  · ${menu.title} (already customized)`);
          continue;
        }
        await mutate('menuUpdate', `mutation($id: ID!, $title: String!, $handle: String, $items: [MenuItemUpdateInput!]!) { menuUpdate(id: $id, title: $title, handle: $handle, items: $items) { menu { id } userErrors { message } } }`, {
          id: found.id,
          title: menu.title,
          handle: menu.handle,
          items,
        });
      } else {
        await mutate('menuCreate', `mutation($title: String!, $handle: String!, $items: [MenuItemCreateInput!]!) { menuCreate(title: $title, handle: $handle, items: $items) { menu { id } userErrors { message } } }`, {
          title: menu.title,
          handle: menu.handle,
          items,
        });
      }
      log(`  ✓ ${menu.title}`);
    } catch (e) {
      fail(menu.title, e);
    }
  }
}

async function discount() {
  log('\nWelcome discount');
  try {
    const found = await gql<{ codeDiscountNodeByCode: { id: string } | null }>(`query($c: String!) { codeDiscountNodeByCode(code: $c) { id } }`, { c: WELCOME_CODE });
    if (found.codeDiscountNodeByCode) {
      log(`  · ${WELCOME_CODE} (already there)`);
      return;
    }
    await mutate('discountCodeBasicCreate', `mutation($d: DiscountCodeBasicInput!) { discountCodeBasicCreate(basicCodeDiscount: $d) { codeDiscountNode { id } userErrors { message } } }`, {
      d: {
        title: `Welcome ${WELCOME_PERCENT}% off (pop-up sign-up)`,
        code: WELCOME_CODE,
        startsAt: new Date().toISOString(),
        context: { all: 'ALL' },
        customerGets: { value: { percentage: WELCOME_PERCENT / 100 }, items: { all: true } },
        appliesOncePerCustomer: true,
      },
    });
    log(`  ✓ ${WELCOME_CODE}: ${WELCOME_PERCENT}% off, once per customer`);
  } catch (e) {
    fail(WELCOME_CODE, e);
  }
}

// With retarget, a redirect that already exists but points somewhere else is pointed at the
// new target (used when old /product/ and /shop addresses move to real product pages).
async function redirects(retarget = false) {
  log('\nRedirects from the old site');
  let created = 0;
  let skipped = 0;
  let moved = 0;
  for (const r of REDIRECTS) {
    try {
      await mutate('urlRedirectCreate', `mutation($r: UrlRedirectInput!) { urlRedirectCreate(urlRedirect: $r) { urlRedirect { id } userErrors { message } } }`, { r });
      created++;
    } catch (e) {
      if (!/taken|already/i.test(String(e))) {
        fail(`redirect ${r.path}`, e);
        continue;
      }
      if (!retarget) {
        skipped++;
        continue;
      }
      try {
        const found = await gql<{ urlRedirects: { nodes: { id: string; path: string; target: string }[] } }>(`query($q: String!) { urlRedirects(first: 5, query: $q) { nodes { id path target } } }`, { q: `path:${r.path}` });
        const current = found.urlRedirects.nodes.find((n) => n.path === r.path);
        if (current && current.target !== r.target) {
          await mutate('urlRedirectUpdate', `mutation($id: ID!, $r: UrlRedirectInput!) { urlRedirectUpdate(id: $id, urlRedirect: $r) { urlRedirect { id } userErrors { message } } }`, { id: current.id, r });
          moved++;
        } else {
          skipped++;
        }
      } catch (e2) {
        fail(`redirect ${r.path}`, e2);
      }
    }
  }
  log(`  ✓ ${created} added${moved ? `, ${moved} pointed at their new page` : ''}${skipped ? `, ${skipped} already there` : ''} (including /bass, /catfish, /starter for the QR stickers)`);
}

async function kitText() {
  log('\nKit text (name, description, tagline, contents, setup steps)');
  for (const kit of KIT_PRODUCTS) {
    try {
      const found = await gql<{ productByIdentifier: { id: string } | null }>(`query($h: String!) { productByIdentifier(identifier: { handle: $h }) { id } }`, { h: kit.handle });
      if (!found.productByIdentifier) {
        log(`  · ${kit.title} (not in the store, skipped)`);
        continue;
      }
      // The handle stays the same, so links and the QR stickers keep working after a rename.
      await mutate('productUpdate', `mutation($p: ProductUpdateInput!) { productUpdate(product: $p) { product { id } userErrors { message } } }`, {
        p: { id: found.productByIdentifier.id, title: kit.title, descriptionHtml: kit.descriptionHtml, seo: { title: kit.seoTitle, description: kit.seoDescription } },
      });
      await mutate('metafieldsSet', `mutation($m: [MetafieldsSetInput!]!) { metafieldsSet(metafields: $m) { metafields { id } userErrors { message } } }`, {
        m: kit.metafields.map((m) => ({ ownerId: found.productByIdentifier!.id, namespace: 'custom', ...m })),
      });
      log(`  ✓ ${kit.title}`);
    } catch (e) {
      fail(kit.title, e);
    }
  }
}

// ---------- Main ----------

function dryRun() {
  log('Dry run: nothing is sent to Shopify.\n');
  log(`Kits: ${KIT_PRODUCTS.map((k) => `${k.title} ($${k.price})`).join(', ')}`);
  log(`Kits collection: /collections/${KITS_COLLECTION} (products tagged "${KIT_TAG}")`);
  log(`Gear: ${GEAR_PRODUCTS.length} products (${GEAR_PRODUCTS.filter((g) => g.image).length} with photos), e.g. ${GEAR_PRODUCTS.slice(0, 3).map((g) => `${g.title} ($${Number(g.price)})`).join(', ')}`);
  log(`All Gear collection: /collections/${GEAR_COLLECTION} (products tagged "${GEAR_TAG}")`);
  log(`Pages: ${PAGES.map((p) => `/pages/${p.handle}`).join(', ')}`);
  log(`How-to guides: ${GUIDE_ARTICLES.length} posts in /blogs/${GUIDES_BLOG}`);
  log(`Journal: ${JOURNAL_ARTICLES.length} posts in /blogs/${JOURNAL_BLOG}`);
  log(`Policies: ${POLICIES.map((p) => p.type).join(', ')}`);
  log(`Menus: ${MENUS.map((m) => `${m.handle} (${m.items.length} links)`).join(', ')}`);
  log(`Discount: ${WELCOME_CODE} (${WELCOME_PERCENT}% off, once per customer)`);
  log(`Redirects: ${REDIRECTS.length}, e.g. ${REDIRECTS.slice(0, 3).map((r) => `${r.path} → ${r.target}`).join('; ')}`);
}

async function main() {
  if (DRY_RUN) return dryRun();
  if (!SHOP) throw new Error('Set SHOPIFY_SHOP to your store address, like ketto-outdoors.myshopify.com.');
  log(`Setting up ${SHOP}${CONTENT_ONLY ? ' (refreshing text only)' : CATALOG_ONLY ? ' (adding the full gear catalog)' : UPDATE ? ' (overwriting existing content)' : ''}`);

  const shop = await gql<{ shop: { name: string } }>(`{ shop { name } }`);
  log(`Store: ${shop.shop.name}`);
  if (CONTENT_ONLY) {
    await kitText();
    await pages();
    await blog(GUIDES_BLOG, 'How-To Guides', GUIDE_ARTICLES);
    await blog(JOURNAL_BLOG, 'The Ketto Journal', JOURNAL_ARTICLES);
    await policies();
    await menus();
    log(failures ? `\nFinished with ${failures} problem(s) above.` : '\nAll done.');
    if (failures) process.exitCode = 1;
    return;
  }

  const publicationId = await onlineStorePublicationId().catch(() => null);
  if (!publicationId) log('Note: could not find the Online Store channel; kits may need publishing by hand.');

  if (CATALOG_ONLY) {
    await metafieldDefinitions();
    await gear(publicationId);
    await gearCollection(publicationId);
    await kitText();
    await pages(['new-to-fishing', 'biting-now']);
    await menus(true);
    await redirects(true);
    log(failures ? `\nFinished with ${failures} problem(s) above.` : '\nAll done.');
    if (failures) process.exitCode = 1;
    return;
  }

  await metafieldDefinitions();
  await kits(publicationId);
  await kitsCollection(publicationId);
  await gear(publicationId);
  await gearCollection(publicationId);
  await pages();
  await blog(GUIDES_BLOG, 'How-To Guides', GUIDE_ARTICLES);
  await blog(JOURNAL_BLOG, 'The Ketto Journal', JOURNAL_ARTICLES);
  await policies();
  await menus();
  await discount();
  await redirects();

  log(failures ? `\nFinished with ${failures} problem(s) above.` : '\nAll done.');
  if (failures) process.exitCode = 1;
}

main().catch((e) => {
  console.error(`\nSetup stopped: ${e instanceof Error ? e.message : e}`);
  process.exitCode = 1;
});
