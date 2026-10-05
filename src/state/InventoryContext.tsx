import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { PRODUCTS } from '../data/products';
import { fetchProducts, type ShopifyProduct } from '../lib/shopify';

// Stock comes live from Shopify. Until it loads (or if Shopify isn't set up yet),
// every product shows as out of stock.

interface InventoryContextValue {
  /** True once Shopify says this product can be bought. */
  isInStock: (id: string) => boolean;
  /** True if this size of the product can be bought. Sizes missing from Shopify count as out of stock. */
  isSizeInStock: (id: string, size: string) => boolean;
}

const InventoryContext = createContext<InventoryContextValue | null>(null);

export function InventoryProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Record<string, ShopifyProduct>>({});

  useEffect(() => {
    fetchProducts(PRODUCTS.map((p) => p.id))
      .then(setProducts)
      .catch(() => {});
  }, []);

  const value: InventoryContextValue = {
    isInStock: (id) => products[id]?.availableForSale ?? false,
    isSizeInStock: (id, size) =>
      products[id]?.variants.some((v) => v.availableForSale && v.selectedOptions.some((o) => o.name.toLowerCase() === 'size' && o.value === size)) ?? false,
  };

  return <InventoryContext.Provider value={value}>{children}</InventoryContext.Provider>;
}

export function useInventory() {
  const ctx = useContext(InventoryContext);
  if (!ctx) throw new Error('useInventory must be used within InventoryProvider');
  return ctx;
}
