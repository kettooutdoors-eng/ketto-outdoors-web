import { Link } from 'react-router-dom';
import { getBundle } from '../data/bundles';
import { KIT_CARDS } from '../data/kitCards';
import { BannerButton } from '../components/ui/BannerButton';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import NotFound from './NotFound';

/** The page a kit's QR sticker opens: what's in the box, what each piece is for, and setup. */
export default function KitCard({ path }: { path: string }) {
  const card = KIT_CARDS.find((c) => c.path === path);
  const bundle = card ? getBundle(card.slug) : undefined;

  useDocumentMeta(bundle ? `Your ${bundle.name} | Ketto Outdoors` : 'Page Not Found | Ketto Outdoors', 'What is in your Ketto kit and how to set it up.', `/${path}`, true);

  if (!card || !bundle) return <NotFound />;

  return (
    <div>
      <div style={{ background: 'var(--hero-band)', padding: '44px 24px 40px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: '#e8a487', fontWeight: 700 }}>Your kit</div>
        <h1 style={{ fontSize: 36, letterSpacing: '-0.03em', marginTop: 10, color: 'var(--cream)' }}>{bundle.name}</h1>
        <p style={{ margin: '12px auto 0', maxWidth: '38ch', fontSize: 16, color: 'var(--cream)', opacity: 0.85 }}>
          Here is everything in your box and how to set it up.
        </p>
        <div style={{ marginTop: 24 }}>
          {card.videoUrl ? (
            <BannerButton href={card.videoUrl} background="var(--rust)" color="#fff" innerStyle={{ padding: '16px 28px', fontSize: 15 }}>
              Watch the setup video
            </BannerButton>
          ) : (
            <div style={{ display: 'inline-block', padding: '12px 22px', background: 'rgba(243,239,227,.15)', color: 'var(--cream)', fontSize: 14, fontWeight: 700 }}>
              Setup video coming soon
            </div>
          )}
        </div>
      </div>

      <div style={{ maxWidth: 640, margin: '0 auto', padding: '40px 20px 8px' }}>
        <h2 style={{ fontSize: 26, marginBottom: 6 }}>What's in your box</h2>
        <p style={{ fontSize: 14, opacity: 0.7, marginBottom: 22 }}>{bundle.components.length} pieces</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {bundle.components.map((c, i) => (
            <div key={c.label} style={{ display: 'flex', gap: 14, background: '#fff', borderRadius: 12, boxShadow: 'var(--shadow-sm)', padding: 18 }}>
              <div
                style={{
                  flexShrink: 0,
                  width: 30,
                  height: 30,
                  borderRadius: '50%',
                  background: 'var(--forest)',
                  color: 'var(--cream)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: 13,
                }}
              >
                {i + 1}
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 18 }}>{c.label}</div>
                <div style={{ fontSize: 13, opacity: 0.65, marginTop: 2 }}>{c.detail}</div>
                <p style={{ fontSize: 15, lineHeight: 1.55, marginTop: 8 }}>{c.whyThis}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 640, margin: '0 auto', padding: '40px 20px 8px' }}>
        <h2 style={{ fontSize: 26, marginBottom: 6 }}>Set it up</h2>
        <p style={{ fontSize: 15, lineHeight: 1.55, opacity: 0.8, marginBottom: 22 }}>{bundle.riggingNote}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {bundle.riggingSteps.map((step, i) => (
            <div key={step.title} style={{ display: 'flex', gap: 14 }}>
              <div
                style={{
                  flexShrink: 0,
                  width: 30,
                  height: 30,
                  borderRadius: '50%',
                  border: '2px solid rgba(27,67,50,.25)',
                  background: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: 13,
                }}
              >
                {i + 1}
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 17, marginBottom: 4 }}>{step.title}</div>
                <p style={{ fontSize: 15, lineHeight: 1.6 }}>{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 640, margin: '0 auto', padding: '40px 20px 56px' }}>
        <div style={{ background: 'var(--sage)', borderRadius: 12, padding: '20px 22px' }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 17 }}>Questions?</div>
          <p style={{ fontSize: 15, lineHeight: 1.55, marginTop: 6 }}>
            Email us at <a href="mailto:KettoOutdoors@gmail.com" style={{ color: 'var(--rust)', fontWeight: 700 }}>KettoOutdoors@gmail.com</a> and we'll help.
          </p>
          <p style={{ fontSize: 14, marginTop: 12 }}>
            Need more gear? <Link to="/shop" style={{ color: 'var(--rust)', fontWeight: 700 }}>Shop all gear</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
