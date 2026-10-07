// Used gear / trade-in program (src/pages/UsedGear.tsx, src/pages/TradeIn.tsx) is built
// and kept ready, but paused for now. Flip this to true and redeploy to switch it on.
export const USED_GEAR_ENABLED = false;

// Launch sells only the 3 starter kits. While this is false, individual products keep
// their how-to pages but can't be added to the cart, the All Gear shop page redirects
// to /kits, and `npm run shopify:csv` exports only the kits. Flip to true (and re-import
// the CSV into Shopify) to start selling single products.
export const SELL_SINGLE_PRODUCTS = false;
