# Ketto Outdoors

Beginner fishing kits. **The store runs on Shopify**: a custom theme in
[`shopify-theme/`](shopify-theme) with the same design as the original site,
filled with content by a setup script. The original React site in `src/` is
kept as the source of that content and for reference.

## The Shopify store

| What | Where |
| --- | --- |
| Theme (layout, design, page templates) | [`shopify-theme/`](shopify-theme) |
| Store content: kits, pages, guides, blog posts, policies, menus, `WELCOME15`, redirects | [`scripts/shopify/content.ts`](scripts/shopify/content.ts), built from `src/data/` |
| Setup script that loads that content into the store | [`scripts/shopify-setup.ts`](scripts/shopify-setup.ts) |

Once the store is set up, day-to-day edits happen in Shopify admin: kit prices,
stock, and photos under **Products**; each kit's contents, setup steps, and setup
video under **Products > (kit) > Metafields**; pages and blog posts under
**Online Store**; text and layout under **Online Store > Themes > Customize**.

### How theme changes reach Shopify

The store's theme is connected to the `shopify-theme` branch of this repo
(Shopify admin > **Online Store > Themes > Add theme > Connect from GitHub**).
That branch is kept up to date by
[`.github/workflows/shopify-theme-sync.yml`](.github/workflows/shopify-theme-sync.yml):
every change to `shopify-theme/` merged into `main` is copied there, and
Shopify picks it up within a couple of minutes. Don't edit the branch by hand.

Edits made in the theme editor (**Customize**) are saved by Shopify to that
branch too. The sync only replaces those settings files
(`config/settings_data.json`, `templates/*.json`) when they've changed on
`main`, so editor changes survive code updates. Before changing a template's
JSON on `main`, copy over any editor changes from the branch first.

### Setting up the store (one time)

1. **Connect the theme.** In Shopify admin go to **Online Store > Themes > Add
   theme > Connect from GitHub**, pick this repo and the `shopify-theme` branch,
   then **Publish** it. (Without GitHub: `npm run shopify:theme-zip` and use
   **Upload zip file** instead.)
2. **Create a setup app** so the script can write to the store:
   1. Open the Dev Dashboard ([dev.shopify.com/dashboard](https://dev.shopify.com/dashboard),
      or click your store name in Shopify admin > **Dev Dashboard**).
   2. **Apps > Create app > Start from Dev Dashboard**, name it `Ketto setup`.
   3. Create a version with these Admin API scopes, then release it:
      `write_products`, `write_publications`, `write_content`,
      `write_online_store_navigation`, `write_discounts`, `write_legal_policies`.
   4. Install the app on your store.
   5. On the app's **Settings** page, copy the **Client ID** and **Client secret**.
3. **Give them to GitHub.** In this repo: **Settings > Secrets and variables >
   Actions**.
   - **Variables** tab: `SHOPIFY_SHOP` = your store address, like
     `ketto-outdoors.myshopify.com`.
   - **Secrets** tab: `SHOPIFY_CLIENT_ID` and `SHOPIFY_CLIENT_SECRET`.
4. **Run the setup.** **Actions > Set up Shopify store > Run workflow.** It
   creates the 3 kits (at 0 stock), the Kits collection, About/FAQ/Contact/New to
   Fishing pages, 19 how-to guides, the blog, policies, menus, the `WELCOME15`
   code (15% off, once per customer), and redirects from the old site's
   addresses, including `/bass`, `/catfish`, and `/starter` for the QR stickers.
   It never overwrites things that already exist unless you tick **Overwrite**.
   Preview without a store: `npm run shopify:setup -- --dry-run`.
5. **Finish in Shopify admin:**
   - **Products:** add photos and real stock quantities for each kit.
   - **Settings > Payments:** set up Shopify Payments.
   - **Settings > Shipping and delivery:** rates, including free shipping on
     orders $35+ (the shipping policy promises it).
   - **Settings > Taxes and duties:** turn on US sales tax.
   - **Settings > Customer privacy:** turn on the cookie banner if you'll run
     analytics or ads.
   - **Settings > Domains:** buy or connect kettooutdoors.com.
   - **Online Store > Preferences:** turn off the password page to open the store.

## Original React site

The pre-Shopify site, still deployed to GitHub Pages by
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). Once the
Shopify store is live, its pages should redirect there so old links and the
printed QR stickers keep working.

### Stack

- React 19 + React Router 7 (client-side routing)
- TypeScript, Vite
- No CSS framework — hand-built design system in [`src/styles/tokens.css`](src/styles/tokens.css)
  (palette, fonts, cut-tin/notch clip-paths, textures) matching the approved
  retro reference design
- Commerce: [Shopify](https://www.shopify.com) Storefront API. Shopify holds
  products, stock, and orders, and runs checkout (payment, shipping rates,
  sales tax). The cart lives in `localStorage` and is handed to Shopify's hosted
  checkout. See [`src/lib/shopify.ts`](src/lib/shopify.ts).

### Getting started

```bash
npm install
npm run dev
```

```bash
npm run build    # type-checks then builds to dist/
npm run preview  # serve the production build locally
```

### Structure

- `src/data/` — typed content extracted from the design handoff (products,
  shop catalog, blog, guide, legal/support copy)
- `src/state/` — `CartContext`, `InventoryContext` (live stock from Shopify)
- `src/components/` — shared UI (`TinFrame`, `BannerButton`, `Seal`,
  `PriceTag`, `ProductCard`, …) and layout (`Nav`, `Footer`, `CartDrawer`, …)
- `src/pages/` — one component per route, wired in `src/App.tsx`

### Hosting and deploys

The site is hosted on GitHub Pages at
https://kettooutdoors-eng.github.io/ketto-outdoors-web/ (served from the
`gh-pages` branch). Every push to `main` runs
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the
site and publishes it to `gh-pages`. You can also run it by hand from the
Actions tab.

#### Moving to kettooutdoors.com

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

### Known gaps before launch

- **Product photography**: some product images are still placeholders
  (`ImagePlaceholder`).
- **SEO meta tags** are wired per route via `useDocumentMeta` (title,
  description, canonical, OG/Twitter tags, robots index/noindex) — but since
  this is a client-rendered SPA, a crawler that doesn't execute JS only sees
  the static tags in `index.html` (the Home page's). For real search-engine
  indexing of every route, add pre-rendering or SSR before launch.
