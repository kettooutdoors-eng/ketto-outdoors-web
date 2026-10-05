import { BUNDLES_BY_PRICE } from '../data/bundles';
import { BundleCard } from '../components/BundleCard';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function Kits() {
  useDocumentMeta('Kits | Ketto Outdoors', 'Beginner tackle kits. Pick the kit that matches the fish you want to catch.', '/kits');

  return (
    <div>
      <div style={{ background: 'var(--hero-band)', padding: '56px 40px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: '#e8a487', fontWeight: 700 }}>Beginner kits</div>
        <h1 style={{ fontSize: 44, letterSpacing: '-0.03em', marginTop: 10 , color: 'var(--cream)'}}>Kits</h1>
        <p style={{ margin: '14px auto 0', maxWidth: '56ch', fontSize: 15, color: 'var(--cream)', opacity: 0.85 }}>
          Pick the kit that matches the fish you want to catch. Everything inside works together.
        </p>
      </div>

      {BUNDLES_BY_PRICE.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 28, padding: '48px 40px 56px' }}>
          {BUNDLES_BY_PRICE.map((b) => (
            <div key={b.id} style={{ display: 'flex', width: '100%', maxWidth: 340 }}>
              <BundleCard bundle={b} />
            </div>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '64px 40px' }}>
          <p>More kits coming soon.</p>
        </div>
      )}

    </div>
  );
}
