# Ketto Outdoors

Fishing-tackle e-commerce site — React + TypeScript + Vite, rebuilt from the
`design_handoff_ketto_outdoors` design reference with the retro "tin-sign"
visual system applied across all 37 pages.

## Stack

- React 19 + React Router 7 (client-side routing)
- TypeScript, Vite
- No CSS framework — hand-built design system in [`src/styles/tokens.css`](src/styles/tokens.css)
  (palette, fonts, cut-tin/notch clip-paths, textures) matching the approved
  retro reference design
- Commerce: [Shopify](https://www.shopify.com) Storefront API. Shopify holds
  products, stock, and orders, and runs checkout (payment, shipping rates,
  sales tax). The cart lives in `localStorage` and is handed to Shopify's hosted
  checkout. See [`src/lib/shopify.ts`](src/lib/shopify.ts).

## Getting started

```bash
npm install
npm run dev
```

```bash
npm run build    # type-checks then builds to dist/
npm run preview  # serve the production build locally
```

## Structure

- `src/data/` — typed content extracted from the design handoff (products,
  shop catalog, blog, guide, legal/support copy)
- `src/state/` — `CartContext`, `InventoryContext` (live stock from Shopify)
- `src/components/` — shared UI (`TinFrame`, `BannerButton`, `Seal`,
  `PriceTag`, `ProductCard`, …) and layout (`Nav`, `Footer`, `CartDrawer`, …)
- `src/pages/` — one component per route, wired in `src/App.tsx`

## Hosting and deploys

The site is hosted on GitHub Pages at
https://kettooutdoors-eng.github.io/ketto-outdoors-web/ (served from the
`gh-pages` branch). Every push to `main` runs
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the
site and publishes it to `gh-pages`. You can also run it by hand from the
Actions tab.

### Moving to kettooutdoors.com

`kettooutdoors.com` isn't registered yet. Once it's bought:

1. **DNS** at the registrar:
   - Four `A` records on `@`: `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - A `CNAME` record on `www` pointing to `kettooutdoors-eng.github.io`
2. **Code** (one PR): add `public/CNAME` containing `kettooutdoors.com`; set
   `base: '/'` in `vite.config.ts`; replace
   `https://kettooutdoors-eng.github.io/ketto-outdoors-web` with
   `https://kettooutdoors.com` in `src/hooks/useDocumentMeta.ts`, `index.html`,
   `public/sitemap.xml`, and `public/robots.txt`. Merge it only after DNS is
   live, or the site will redirect to a domain that doesn't resolve.
3. **GitHub → Settings → Pages**: confirm the custom domain, then tick
   **Enforce HTTPS** once the certificate is issued.

## Shopify setup

Until both Shopify variables are set, the site runs with checkout closed: the
cart works, and `/checkout` says online orders open soon.

1. **Import the products.** In Shopify admin go to Products → Import and
   upload [`shopify/products.csv`](shopify/products.csv). It has all 3 kits and
   every product, with titles, descriptions, prices, sizes, photos, and SEO
   text. Each product's **handle** matches its `id` on this site, which is how
   the site finds it in Shopify, so don't change handles. After editing
   products or prices in `src/data/`, run `npm run shopify:csv` to rebuild the
   file (re-importing with "Overwrite products with matching handles" updates
   them).
   - Everything imports with **0 stock**, so nothing can be bought yet. Set
     real quantities under Products → Inventory once gear is in hand.
   - Shipping weights are blank. Add them if you charge shipping by weight.
   - Select all products → **Include in sales channels** → **Headless**, or
     the site can't see them.
2. **Get a Storefront API token.** Install the **Headless** app from the
   Shopify App Store, create a storefront, and copy its **public access
   token**. (It's a read-only token made to live in browser code.)
3. **Add the variables to GitHub**: Settings → Secrets and variables →
   Actions → **Variables** tab:
   - `VITE_SHOPIFY_STORE_DOMAIN` = `your-store.myshopify.com`
   - `VITE_SHOPIFY_STOREFRONT_TOKEN` = the public access token
   Then re-run the "Deploy site" workflow.
4. **In Shopify admin:**
   - Settings → Payments: set up Shopify Payments.
   - Settings → Shipping and delivery: rates, including free shipping on
     orders $35+ (the site's Shipping & Returns page promises that).
   - Settings → Taxes and duties: turn on US sales tax collection.
   - Discounts: create a 15% code **`WELCOME15`** (the welcome pop-up hands it
     out, and checkout applies it automatically).

For local testing, put the same two variables in a `.env.local` file.

## Known gaps before launch

- **Product photography**: some product images are still placeholders
  (`ImagePlaceholder`).
- **SEO meta tags** are wired per route via `useDocumentMeta` (title,
  description, canonical, OG/Twitter tags, robots index/noindex) — but since
  this is a client-rendered SPA, a crawler that doesn't execute JS only sees
  the static tags in `index.html` (the Home page's). For real search-engine
  indexing of every route, add pre-rendering or SSR before launch.
