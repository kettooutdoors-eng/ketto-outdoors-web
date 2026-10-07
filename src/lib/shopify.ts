// Shopify Storefront API client. Shopify is the store's backend: it holds products,
// inventory, and orders, and runs checkout (payment, shipping rates, sales tax).
// This site stays the storefront; at checkout the cart is handed to Shopify's
// hosted checkout page.
//
// Every product, kit, and used-gear item on this site is matched to a Shopify product
// by handle: the Shopify product's handle must equal the item's `id` here (for example
// "deep-six" or "first-bass-kit"). Products with size options need a Shopify option
// named "Size" whose values match `sizeOptions` exactly.
//
// Both values come from build-time env vars (see README "Shopify setup"). The Storefront
// access token is a public, read-only token designed to ship in browser code.

const STORE_DOMAIN = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN as string | undefined;
const STOREFRONT_TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN as string | undefined;
const API_VERSION = '2026-04';

/** True once both Shopify env vars are set; checkout is closed until then. */
export const shopifyEnabled = Boolean(STORE_DOMAIN && STOREFRONT_TOKEN);

const PENDING_CART_KEY = 'ketto-shopify-cart';

interface Variant {
  id: string;
  availableForSale: boolean;
  selectedOptions: { name: string; value: string }[];
}

export interface ShopifyProduct {
  handle: string;
  availableForSale: boolean;
  variants: Variant[];
}

async function storefront<T>(query: string, variables: Record<string, unknown>): Promise<T> {
  const res = await fetch(`https://${STORE_DOMAIN}/api/${API_VERSION}/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': STOREFRONT_TOKEN ?? '',
    },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`Shopify request failed (${res.status})`);
  const json = await res.json();
  if (json.errors?.length) throw new Error(json.errors[0].message);
  return json.data as T;
}

/** Looks up Shopify products by handle. Handles with no matching Shopify product are left out. */
export async function fetchProducts(handles: string[]): Promise<Record<string, ShopifyProduct>> {
  const result: Record<string, ShopifyProduct> = {};
  if (!shopifyEnabled || handles.length === 0) return result;

  // One request, one aliased product(handle:) lookup per handle.
  const fields = 'handle availableForSale variants(first: 50) { nodes { id availableForSale selectedOptions { name value } } }';
  const params = handles.map((_, i) => `$h${i}: String!`).join(', ');
  const body = handles.map((_, i) => `p${i}: product(handle: $h${i}) { ${fields} }`).join('\n');
  const variables = Object.fromEntries(handles.map((h, i) => [`h${i}`, h]));
  const data = await storefront<Record<string, { handle: string; availableForSale: boolean; variants: { nodes: Variant[] } } | null>>(
    `query Products(${params}) { ${body} }`,
    variables,
  );
  for (const p of Object.values(data)) {
    if (p) result[p.handle] = { handle: p.handle, availableForSale: p.availableForSale, variants: p.variants.nodes };
  }
  return result;
}

export interface CheckoutLine {
  handle: string;
  /** Selected size, for products with size options. */
  size?: string;
  quantity: number;
  name: string;
}

function pickVariant(product: ShopifyProduct, size?: string): Variant | undefined {
  if (!size) return product.variants[0];
  return product.variants.find((v) => v.selectedOptions.some((o) => o.name.toLowerCase() === 'size' && o.value === size));
}

/**
 * Creates a Shopify cart for these lines and returns the hosted checkout URL.
 * Throws with a customer-readable message if an item can't be found or bought.
 */
export async function createCheckout(lines: CheckoutLine[], discountCode?: string): Promise<string> {
  if (!shopifyEnabled) throw new Error('Checkout is not open yet.');

  const products = await fetchProducts([...new Set(lines.map((l) => l.handle))]);
  const cartLines = lines.map((line) => {
    const product = products[line.handle];
    const variant = product && pickVariant(product, line.size);
    if (!variant) throw new Error(`${line.name} isn't available to order right now. Remove it from your cart to continue.`);
    if (!variant.availableForSale) throw new Error(`${line.name} is out of stock. Remove it from your cart to continue.`);
    return { merchandiseId: variant.id, quantity: line.quantity };
  });

  const data = await storefront<{
    cartCreate: { cart: { id: string; checkoutUrl: string } | null; userErrors: { message: string }[] };
  }>(
    `mutation CartCreate($input: CartInput!) {
      cartCreate(input: $input) {
        cart { id checkoutUrl }
        userErrors { message }
      }
    }`,
    { input: { lines: cartLines, discountCodes: discountCode ? [discountCode] : [] } },
  );

  const { cart, userErrors } = data.cartCreate;
  if (!cart) throw new Error(userErrors[0]?.message ?? 'Could not start checkout.');

  try {
    localStorage.setItem(PENDING_CART_KEY, cart.id);
  } catch {
    /* ignore */
  }
  return cart.checkoutUrl;
}

/**
 * After a customer comes back from Shopify checkout, tells us whether that checkout
 * was completed. Shopify stops returning a cart once it has been turned into an order,
 * so a missing cart means the order went through and the local cart can be cleared.
 */
export async function pendingCheckoutCompleted(): Promise<boolean> {
  if (!shopifyEnabled) return false;
  let cartId: string | null = null;
  try {
    cartId = localStorage.getItem(PENDING_CART_KEY);
  } catch {
    return false;
  }
  if (!cartId) return false;

  const data = await storefront<{ cart: { id: string } | null }>(`query Cart($id: ID!) { cart(id: $id) { id } }`, { id: cartId });
  if (data.cart) return false;
  try {
    localStorage.removeItem(PENDING_CART_KEY);
  } catch {
    /* ignore */
  }
  return true;
}
