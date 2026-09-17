import type { ReactNode } from 'react';
import { useAdmin } from '../state/AdminContext';
import { useFeatureFlags } from '../state/FeatureFlagsContext';
import NotFound from '../pages/NotFound';

/** Wraps /used-gear and /trade-in: renders the real 404 for everyone unless the used-gear
 * program is turned on, except an admin can still preview the page while it's off. */
export function UsedGearGate({ children }: { children: ReactNode }) {
  const { isAdmin } = useAdmin();
  const { usedGear } = useFeatureFlags();

  if (!usedGear && !isAdmin) return <NotFound />;

  return (
    <>
      {!usedGear && (
        <div style={{ background: 'var(--rust)', color: 'var(--cream)', textAlign: 'center', padding: '10px 20px', fontSize: 13, fontWeight: 700 }}>
          Admin preview — the used gear program is hidden from customers. Toggle it in the Admin panel in the footer.
        </div>
      )}
      {children}
    </>
  );
}
