import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { PRODUCTS } from '../data/products';
import { BUNDLES } from '../data/bundles';
import { USED_GEAR } from '../data/usedGear';
import { pendingCheckoutCompleted } from '../lib/shopify';

const CART_KEY = 'ketto-cart';

// Keyed by item id, or "id|size" for a product bought in a specific size.
type CartMap = Record<string, number>;

function cartKey(id: string, size?: string | null): string {
  return size ? `${id}|${size}` : id;
}

function parseKey(key: string): { id: string; size?: string } {
  const [id, size] = key.split('|');
  return { id, size };
}

function loadCart(): CartMap {
  try {
    const raw = JSON.parse(localStorage.getItem(CART_KEY) || '{}');
    return raw && typeof raw === 'object' ? raw : {};
  } catch {
    return {};
  }
}

function saveCart(cart: CartMap) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch {
    /* ignore */
  }
}

export interface CartLineItem {
  /** Cart key: pass this to increment/decrement/removeFromCart. */
  id: string;
  /** The product/kit id, which is also its Shopify handle. */
  productId: string;
  size?: string | undefined;
  name: string;
  price: number;
  qty: number;
  lineTotal: number;
}

interface CartContextValue {
  cart: CartMap;
  items: CartLineItem[];
  cartCount: number;
  cartTotal: number;
  hasItems: boolean;
  cartOpen: boolean;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (id: string, qty?: number, size?: string | null) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartMap>(() => loadCart());
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  // Coming back from a finished Shopify checkout: the order went through, so empty the cart.
  useEffect(() => {
    pendingCheckoutCompleted()
      .then((done) => done && setCart({}))
      .catch(() => {});
  }, []);

  const addToCart = useCallback((id: string, qty = 1, size?: string | null) => {
    const key = cartKey(id, size);
    setCart((prev) => ({ ...prev, [key]: (prev[key] || 0) + qty }));
    setCartOpen(true);
  }, []);

  const increment = useCallback((id: string) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  }, []);

  const decrement = useCallback((id: string) => {
    setCart((prev) => {
      const next = { ...prev };
      const qty = (next[id] || 0) - 1;
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCart((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }, []);

  const clearCart = useCallback(() => setCart({}), []);

  const items = useMemo<CartLineItem[]>(() => {
    return Object.entries(cart)
      .map(([key, qty]): CartLineItem | null => {
        const { id, size } = parseKey(key);
        const product = PRODUCTS.find((p) => p.id === id) ?? BUNDLES.find((b) => b.id === id) ?? USED_GEAR.find((u) => u.id === id);
        if (!product) return null;
        return {
          id: key,
          productId: id,
          size,
          name: size ? `${product.name} (${size})` : product.name,
          price: product.price,
          qty,
          lineTotal: Math.round(product.price * qty * 100) / 100,
        };
      })
      .filter((x): x is CartLineItem => x !== null);
  }, [cart]);

  const cartCount = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items]);
  const cartTotal = useMemo(() => Math.round(items.reduce((sum, i) => sum + i.lineTotal, 0) * 100) / 100, [items]);

  const value: CartContextValue = {
    cart,
    items,
    cartCount,
    cartTotal,
    hasItems: cartCount > 0,
    cartOpen,
    toggleCart: () => setCartOpen((v) => !v),
    openCart: () => setCartOpen(true),
    closeCart: () => setCartOpen(false),
    addToCart,
    increment,
    decrement,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
