import { BITING_NOW_SEASON, BITING_NOW_INTRO, BITING_NOW_PICKS } from '../data/bitingNow';
import { getBundle } from '../data/bundles';
import { ALL_SHOP_ITEMS } from '../data/shop';
import { ProductCard } from '../components/ProductCard';
import { BundleCard } from '../components/BundleCard';
import { BannerButton } from '../components/ui/BannerButton';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function BitingNow() {
  useDocumentMeta(
    "What's Biting Now — Ketto Outdoors",
    `${BITING_NOW_SEASON} picks — no decisions, just what's working this time of year.`,
    '/biting-now'
  );

  return (
    <div>
      <div style={{ background: 'var(--hero-band)', borderTop: '6px solid var(--ink)', borderBottom: '6px solid var(--ink)', padding: '56px 40px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--rust)', fontWeight: 700 }}>{BITING_NOW_SEASON} picks</div>
        <h1 style={{ fontSize: 44, letterSpacing: '-0.03em', marginTop: 10 }}>What's Biting Now</h1>
        <p style={{ margin: '14px auto 0', maxWidth: '60ch', fontSize: 15, opacity: 0.8 }}>{BITING_NOW_INTRO}</p>
      </div>

      <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 28, padding: '48px 40px 56px' }}>
        {BITING_NOW_PICKS.map((pick) => {
          const bundle = pick.type === 'bundle' ? getBundle(pick.id) : undefined;
          const shopItem = pick.type === 'product' ? ALL_SHOP_ITEMS.find((i) => i.id === pick.id) : undefined;
          if (!bundle && !shopItem) return null;
          return (
            <div key={pick.id} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {bundle ? <BundleCard bundle={bundle} /> : shopItem ? <ProductCard item={shopItem} /> : null}
              <div style={{ background: 'var(--parchment)', border: '2px solid var(--ink)', padding: '10px 14px' }}>
                <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--rust)' }}>Why now: </span>
                <span style={{ fontSize: 12.5, lineHeight: 1.5 }}>{pick.whyNow}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ background: 'var(--forest)', color: 'var(--cream)', padding: '56px 40px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 28, letterSpacing: '-0.03em' }}>Want the full picture instead?</div>
        <p style={{ margin: '10px auto 0', maxWidth: '46ch', opacity: 0.85, fontSize: 14 }}>
          Browse everything and filter by the exact fish, type, or difficulty you're after.
        </p>
        <BannerButton to="/shop" background="var(--rust)" color="var(--cream)" style={{ marginTop: 20, display: 'inline-flex' }}>
          Shop all gear
        </BannerButton>
      </div>
    </div>
  );
}
