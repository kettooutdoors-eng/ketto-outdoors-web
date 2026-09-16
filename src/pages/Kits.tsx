import { Link } from 'react-router-dom';
import { BUNDLES } from '../data/bundles';
import { BundleCard } from '../components/BundleCard';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function Kits() {
  useDocumentMeta('Kits — Ketto Outdoors', 'One kit, one price, no guessing. Pre-built kits matched to the fish and water you’re after.', '/kits');

  return (
    <div>
      <div style={{ background: 'var(--hero-band)', borderTop: '6px solid var(--ink)', borderBottom: '6px solid var(--ink)', padding: '56px 40px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--rust)', fontWeight: 700 }}>One decision, not fifty</div>
        <h1 style={{ fontSize: 44, letterSpacing: '-0.03em', marginTop: 10 }}>Kits</h1>
        <p style={{ margin: '14px auto 0', maxWidth: '56ch', fontSize: 15, opacity: 0.8 }}>
          We tell you exactly what you need, so you're not gambling on fifty conflicting opinions from the internet. Pick the kit that matches what you're after — everything inside is already matched to work together.
        </p>
      </div>

      {BUNDLES.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 28, padding: '48px 40px 56px' }}>
          {BUNDLES.map((b) => (
            <div key={b.id} style={{ width: '100%', maxWidth: 340 }}>
              <BundleCard bundle={b} />
            </div>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '64px 40px' }}>
          <p>More kits coming soon.</p>
        </div>
      )}

      <div style={{ background: 'var(--forest)', color: 'var(--cream)', padding: '56px 40px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 28, letterSpacing: '-0.03em' }}>Already know exactly what you want?</div>
        <p style={{ margin: '10px auto 0', maxWidth: '46ch', opacity: 0.85, fontSize: 14 }}>
          You can also shop every piece of gear individually.
        </p>
        <Link
          to="/shop"
          style={{ display: 'inline-block', marginTop: 20, fontSize: 13, fontWeight: 700, color: 'var(--cream)', textDecoration: 'underline' }}
        >
          Browse gear à la carte →
        </Link>
      </div>
    </div>
  );
}
