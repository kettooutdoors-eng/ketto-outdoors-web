import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';

const FLAGS_KEY = 'ketto-feature-flags';

interface FeatureFlags {
  // Used gear / trade-in program (src/pages/UsedGear.tsx, src/pages/TradeIn.tsx) is built
  // and kept ready, but paused for now — the site isn't running it, so it defaults off.
  // An admin can flip it back on from the Admin panel in the footer, which previews it for
  // them immediately even while it stays hidden from everyone else.
  usedGear: boolean;
}

const DEFAULT_FLAGS: FeatureFlags = {
  usedGear: false,
};

function loadFlags(): FeatureFlags {
  try {
    const raw = JSON.parse(localStorage.getItem(FLAGS_KEY) || 'null');
    return raw && typeof raw === 'object' ? { ...DEFAULT_FLAGS, ...raw } : { ...DEFAULT_FLAGS };
  } catch {
    return { ...DEFAULT_FLAGS };
  }
}

function saveFlags(flags: FeatureFlags) {
  try {
    localStorage.setItem(FLAGS_KEY, JSON.stringify(flags));
  } catch {
    /* ignore */
  }
}

interface FeatureFlagsContextValue extends FeatureFlags {
  setUsedGear: (on: boolean) => void;
}

const FeatureFlagsContext = createContext<FeatureFlagsContextValue | null>(null);

export function FeatureFlagsProvider({ children }: { children: ReactNode }) {
  const [flags, setFlags] = useState<FeatureFlags>(() => loadFlags());

  const setUsedGear = useCallback((on: boolean) => {
    setFlags((prev) => {
      const next = { ...prev, usedGear: on };
      saveFlags(next);
      return next;
    });
  }, []);

  return <FeatureFlagsContext.Provider value={{ ...flags, setUsedGear }}>{children}</FeatureFlagsContext.Provider>;
}

export function useFeatureFlags() {
  const ctx = useContext(FeatureFlagsContext);
  if (!ctx) throw new Error('useFeatureFlags must be used within FeatureFlagsProvider');
  return ctx;
}
