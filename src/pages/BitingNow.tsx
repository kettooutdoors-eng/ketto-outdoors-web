import { BITING_NOW_SEASON, BITING_NOW_INTRO, BITING_NOW_PICKS } from '../data/bitingNow';
import { getBundle } from '../data/bundles';
import { ALL_SHOP_ITEMS } from '../data/shop';
import { ProductCard } from '../components/ProductCard';
import { BundleCard } from '../components/BundleCard';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function BitingNow() {
  useDocumentMeta(
    "What's Biting Now | Ketto Outdoors",
    `${BITING_NOW_SEASON} picks. No decisions, just what's working this time of year.`,
    '/biting-now'
  );

  return (
    <div>
      <div style={{ background: 'var(--hero-band)', padding: '56px 40px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: '#e8a487', fontWeight: 700 }}>{BITING_NOW_SEASON} picks</div>
        <h1 style={{ fontSize: 44, letterSpacing: '-0.03em', marginTop: 10 , color: 'var(--cream)'}}>What's Biting Now</h1>
        <p style={{ margin: '14px auto 0', maxWidth: '60ch', fontSize: 15, color: 'var(--cream)', opacity: 0.85 }}>{BITING_NOW_INTRO}</p>
      </div>

      <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 28, padding: '48px 40px 56px' }}>
        {BITING_NOW_PICKS.map((pick) => {
          const bundle = pick.type === 'bundle' ? getBundle(pick.id) : undefined;
          const shopItem = pick.type === 'product' ? ALL_SHOP_ITEMS.find((i) => i.id === pick.id) : undefined;
          if (!bundle && !shopItem) return null;
          return (
            <div key={pick.id} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {bundle ? <BundleCard bundle={bundle} /> : shopItem ? <ProductCard item={shopItem} /> : null}
              <div style={{ background: '#fff', boxShadow: 'var(--shadow-sm)', borderRadius: 10, padding: '10px 14px' }}>
                <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--rust)' }}>Why now: </span>
                <span style={{ fontSize: 12.5, lineHeight: 1.5 }}>{pick.whyNow}</span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
