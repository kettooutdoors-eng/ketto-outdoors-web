import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { STATE_GEAR, STATE_LIST, GEAR_BY_STATE_META } from '../data/stateGear';
import { getBundle } from '../data/bundles';
import { ALL_SHOP_ITEMS } from '../data/shop';
import { BundleCard } from '../components/BundleCard';
import { ProductCard } from '../components/ProductCard';
import { TinFrame } from '../components/ui/TinFrame';
import { UsStateMap } from '../components/UsStateMap';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function GearByState() {
  useDocumentMeta(GEAR_BY_STATE_META.title, GEAR_BY_STATE_META.description, '/gear-by-state');
  const [searchParams, setSearchParams] = useSearchParams();
  const paramState = searchParams.get('state');
  const [state, setState] = useState(paramState && STATE_GEAR[paramState] ? paramState : '');

  const profile = state ? STATE_GEAR[state] : undefined;
  const bundle = profile ? getBundle(profile.recommendedBundleSlug) : undefined;

  const matchingProducts = useMemo(() => {
    if (!profile) return [];
    return ALL_SHOP_ITEMS
      .map((item) => {
        const rank = Math.min(...item.species.map((s) => profile.species.indexOf(s)).filter((i) => i >= 0));
        return { item, rank };
      })
      .filter(({ rank }) => Number.isFinite(rank))
      .sort((a, b) => a.rank - b.rank || a.item.difficultyScore - b.item.difficultyScore)
      .slice(0, 6)
      .map(({ item }) => item);
  }, [profile]);

  function handleSelect(value: string) {
    setState(value);
    if (value) {
      setSearchParams({ state: value });
    } else {
      setSearchParams({});
    }
  }

  return (
    <div>
      <div style={{ background: 'var(--hero-band)', borderTop: '6px solid var(--ink)', borderBottom: '6px solid var(--ink)', padding: '56px 40px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--rust)', fontWeight: 700 }}>Freshwater only — lakes &amp; streams</div>
        <h1 style={{ fontSize: 44, letterSpacing: '-0.03em', marginTop: 10 }}>Gear for Your State</h1>
        <p style={{ margin: '14px auto 0', maxWidth: '58ch', fontSize: 15, opacity: 0.8 }}>
          Pick your state and we'll show you the freshwater fish beginners there usually go after, and the gear that matches.
        </p>
      </div>

      <div style={{ padding: '40px 40px 8px', maxWidth: 900, margin: '0 auto' }}>
        <TinFrame shadow="lg">
          <div style={{ padding: '32px 28px', width: '100%', textAlign: 'center' }}>
            <div className="card-kicker" style={{ marginBottom: 4 }}>Tap your state</div>
            <h2 style={{ fontSize: 24, marginBottom: 18 }}>{state ? `You picked ${state}` : 'Where do you fish?'}</h2>
            <UsStateMap selected={state} onSelect={handleSelect} />
            <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, flexWrap: 'wrap' }}>
              <label htmlFor="state-select" style={{ fontSize: 12, opacity: 0.65, fontWeight: 700 }}>
                Or choose from the list:
              </label>
              <select
                id="state-select"
                aria-label="Select your state"
                value={state}
                onChange={(e) => handleSelect(e.target.value)}
                style={{ padding: '10px 14px', border: '2px solid var(--forest)', fontSize: 14, fontWeight: 700, background: 'var(--cream)', minWidth: 220 }}
              >
                <option value="">Choose your state...</option>
                {STATE_LIST.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </TinFrame>
      </div>

      {profile && bundle ? (
        <div>
          <div style={{ padding: '40px 40px 0', textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
            <h2 style={{ fontSize: 26 }}>Fishing in {state}</h2>
            <p style={{ fontSize: 14.5, lineHeight: 1.7, marginTop: 10, opacity: 0.85 }}>
              Beginners in {state} are most often after {formatList(profile.species)}, mostly fishing {profile.waterNote}.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginTop: 16 }}>
              {profile.species.map((s) => (
                <span key={s} style={{ fontSize: 12, fontWeight: 700, background: 'var(--parchment)', border: '2px solid var(--ink)', padding: '6px 12px' }}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div style={{ padding: '32px 40px 0', maxWidth: 420, margin: '0 auto' }}>
            <div style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--rust)', fontWeight: 700, textAlign: 'center', marginBottom: 12 }}>
              Recommended for {state}
            </div>
            <BundleCard bundle={bundle} />
          </div>

          {matchingProducts.length > 0 && (
            <div style={{ padding: '48px 40px 56px' }}>
              <h2 style={{ fontSize: 22, marginBottom: 20, textAlign: 'center' }}>Or buy the pieces separately</h2>
              <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 28 }}>
                {matchingProducts.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '64px 40px', opacity: 0.7 }}>
          <p>Pick a state above to see what to buy.</p>
        </div>
      )}
    </div>
  );
}

function formatList(items: string[]) {
  if (items.length <= 1) return items.join('');
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(', ')}, and ${items[items.length - 1]}`;
}
