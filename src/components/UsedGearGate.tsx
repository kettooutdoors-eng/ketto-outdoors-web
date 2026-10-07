import type { ReactNode } from 'react';
import { USED_GEAR_ENABLED } from '../lib/featureFlags';
import NotFound from '../pages/NotFound';

/** Wraps /used-gear and /trade-in: renders the real 404 unless the used-gear program is turned on. */
export function UsedGearGate({ children }: { children: ReactNode }) {
  if (!USED_GEAR_ENABLED) return <NotFound />;
  return <>{children}</>;
}
