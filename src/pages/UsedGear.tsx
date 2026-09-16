import { Link } from 'react-router-dom';
import { USED_GEAR, USED_GEAR_META, CONDITION_GRADES } from '../data/usedGear';
import { UsedGearCard } from '../components/UsedGearCard';
import { BannerButton } from '../components/ui/BannerButton';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function UsedGear() {
  useDocumentMeta(USED_GEAR_META.title, USED_GEAR_META.description, '/used-gear');

  return (
    <div>
      <div style={{ background: 'var(--hero-band)', borderTop: '6px solid var(--ink)', borderBottom: '6px solid var(--ink)', padding: '56px 40px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--rust)', fontWeight: 700 }}>Quality-checked &amp; priced below new</div>
        <h1 style={{ fontSize: 44, letterSpacing: '-0.03em', marginTop: 10 }}>Used Gear</h1>
        <p style={{ margin: '14px auto 0', maxWidth: '58ch', fontSize: 15, opacity: 0.8 }}>
          Real anglers' gear, inspected and graded by us before it's ever relisted. Fewer lures in a landfill, more gear in the water, cheaper than new.
        </p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginTop: 22 }}>
          {CONDITION_GRADES.map((g) => (
            <div key={g.label} style={{ fontSize: 12, fontWeight: 700, background: 'var(--parchment)', border: '2px solid var(--ink)', padding: '8px 14px' }} title={g.description}>
              {g.label}
            </div>
          ))}
        </div>
      </div>

      {USED_GEAR.length > 0 ? (
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 28, padding: '48px 40px 56px' }}>
          {USED_GEAR.map((item) => (
            <UsedGearCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '64px 40px', maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontSize: 24 }}>Nothing in yet — check back soon.</h2>
          <p style={{ marginTop: 12, opacity: 0.8, fontSize: 14.5, lineHeight: 1.7 }}>
            We're just getting this program started, so there's no used inventory to show yet. Every piece that ends up here first gets inspected and graded by hand — nothing goes on this page until it passes.
          </p>
          <BannerButton to="/trade-in" background="var(--forest)" color="var(--cream)" style={{ marginTop: 20, display: 'inline-flex' }}>
            Be the first to send something in
          </BannerButton>
        </div>
      )}

      <div style={{ background: 'var(--forest)', color: 'var(--cream)', padding: '56px 40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 28, letterSpacing: '-0.03em' }}>Got gear you're not using?</h2>
        <p style={{ margin: '10px auto 0', maxWidth: '46ch', opacity: 0.85, fontSize: 14 }}>
          We'll pay for shipping, inspect it, and give you store credit if it passes — instead of it sitting in a drawer.
        </p>
        <BannerButton to="/trade-in" background="var(--rust)" color="var(--cream)" style={{ marginTop: 20, display: 'inline-flex' }}>
          See how trade-ins work →
        </BannerButton>
        <p style={{ marginTop: 18 }}>
          <Link to="/shop" style={{ fontSize: 13, fontWeight: 700, color: 'var(--cream)', textDecoration: 'underline' }}>
            Or shop new gear →
          </Link>
        </p>
      </div>
    </div>
  );
}
