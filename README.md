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
- State: cart, inventory, and admin/featured-products are in React context,
  persisted to `localStorage` (same as the design prototype) — see
  [`src/state/`](src/state)

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
  shop catalog, blog, guide, checkout logic, legal/support copy)
- `src/state/` — `CartContext`, `InventoryContext`, `AdminContext`
- `src/components/` — shared UI (`TinFrame`, `BannerButton`, `Seal`,
  `PriceTag`, `ProductCard`, …) and layout (`Nav`, `Footer`, `CartDrawer`, …)
- `src/pages/` — one component per route, wired in `src/App.tsx`

## Known gaps before launch

These are called out directly in the code/data or are carried over from the
design handoff's own notes:

- **Product photography** — every product image is a placeholder
  (`ImagePlaceholder`); real photos still need to be sourced/shot.
- **Payment processing** — checkout is a demo flow; no real payment
  processor is wired up (see `src/pages/Checkout.tsx`).
- **Shipping rates** — `src/data/checkout.ts` estimates shipping locally by
  ZIP/weight. Swap in a real carrier API (Shippo, EasyPost, USPS) before
  launch.
- **Sales tax rates** — `TAX_RATES` in `src/data/checkout.ts` are
  approximate; verify against current rates before launch.
- **Admin gate** — the "admin mode" password gate (for swapping featured
  products on Home) is a client-side demo gate, not real auth. See
  `src/state/AdminContext.tsx`.
- **Cart/inventory/orders storage** — currently `localStorage` per the
  original design prototype; move to a real backend/data layer for
  production multi-device use.
- **SEO meta tags** — `metaTitle`/`metaDescription` are captured per product
  in `src/data/products.ts` but not yet wired into `<head>` tags per route
  (no `react-helmet` or equivalent yet).
- The site domain in `public/sitemap.xml` / `public/robots.txt` is the
  placeholder `kettooutdoors.com` — swap for the real domain before launch.
