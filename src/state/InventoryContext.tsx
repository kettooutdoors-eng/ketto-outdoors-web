import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';
import { INVENTORY_DEFAULTS, stockColor, stockLabel } from '../data/inventory';

const INVENTORY_KEY = 'ketto-inventory';

function loadInventory(): Record<string, number> {
  try {
    const raw = JSON.parse(localStorage.getItem(INVENTORY_KEY) || 'null');
    return raw && typeof raw === 'object' ? { ...INVENTORY_DEFAULTS, ...raw } : { ...INVENTORY_DEFAULTS };
  } catch {
    return { ...INVENTORY_DEFAULTS };
  }
}

function saveInventory(inv: Record<string, number>) {
  try {
    localStorage.setItem(INVENTORY_KEY, JSON.stringify(inv));
  } catch {
    /* ignore */
  }
}

interface InventoryContextValue {
  inventory: Record<string, number>;
  get: (id: string) => number;
  label: (id: string) => string;
  color: (id: string) => string;
  isInStock: (id: string) => boolean;
  decrement: (id: string, n?: number) => void;
}

const InventoryContext = createContext<InventoryContextValue | null>(null);

export function InventoryProvider({ children }: { children: ReactNode }) {
  const [inventory, setInventory] = useState<Record<string, number>>(() => loadInventory());

  const get = useCallback((id: string) => inventory[id] ?? 0, [inventory]);

  const decrement = useCallback((id: string, n = 1) => {
    setInventory((prev) => {
      const next = { ...prev, [id]: Math.max(0, (prev[id] || 0) - n) };
      saveInventory(next);
      return next;
    });
  }, []);

  const value: InventoryContextValue = {
    inventory,
    get,
    label: (id: string) => stockLabel(get(id)),
    color: (id: string) => stockColor(get(id)),
    isInStock: (id: string) => get(id) > 0,
    decrement,
  };

  return <InventoryContext.Provider value={value}>{children}</InventoryContext.Provider>;
}

export function useInventory() {
  const ctx = useContext(InventoryContext);
  if (!ctx) throw new Error('useInventory must be used within InventoryProvider');
  return ctx;
}
