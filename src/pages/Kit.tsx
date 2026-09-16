import { Link, useParams } from 'react-router-dom';
import { getBundle } from '../data/bundles';
import { getProduct } from '../data/products';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';
import { BannerButton } from '../components/ui/BannerButton';
import { TinFrame } from '../components/ui/TinFrame';
import { useCart } from '../state/CartContext';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import NotFound from './NotFound';

const SOURCE_LABEL: Record<string, string> = {
  'anchor-brand': 'Name-brand',
  'private-label': 'Ketto-tested',
};

export default function Kit() {
  const { slug } = useParams<{ slug: string }>();
  const bundle = slug ? getBundle(slug) : undefined;
  const { addToCart } = useCart();

  useDocumentMeta(bundle?.metaTitle ?? 'Kit Not Found — Ketto Outdoors', bundle?.metaDescription ?? 'This kit could not be found.', `/kits/${slug ?? ''}`);

  if (!bundle) return <NotFound />;

  return (
    <div>
      <div style={{ padding: '18px 40px 0', fontSize: 12, opacity: 0.65 }}>
        <Link to="/kits" style={{ color: 'var(--ink)' }}>
          Kits
        </Link>{' '}
        / {bundle.name}
      </div>

      <div style={{ padding: '24px 40px 56px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }} className="grid-2">
        <div>
          <ImagePlaceholder label={bundle.imagePlaceholderAlt} height={420} rotate={-1} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="card-kicker">{bundle.components.length}-piece kit</div>
          <h1 style={{ fontSize: 38 }}>{bundle.name}</h1>
          <p style={{ fontSize: 15, lineHeight: 1.6 }}>{bundle.tagline}</p>
          <p style={{ fontSize: 14, lineHeight: 1.6, opacity: 0.85 }}>{bundle.scenario}</p>

          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 28 }}>${bundle.price.toFixed(2)}</div>

          <BannerButton fill background="var(--forest)" color="var(--cream)" onClick={() => addToCart(bundle.id)} style={{ marginTop: 6 }}>
            Add whole kit to cart
          </BannerButton>

          <div style={{ background: 'var(--parchment)', border: '2px solid var(--ink)', padding: '14px 18px', marginTop: 8 }}>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, margin: 0 }}>{bundle.reassurance}</p>
          </div>
        </div>
      </div>

      {/* What's inside */}
      <div style={{ background: 'var(--hero-band)', borderTop: '4px solid var(--ink)', borderBottom: '4px solid var(--ink)', padding: '48px 40px' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div style={{ fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--rust)', fontWeight: 700 }}>No guessing what to add next</div>
          <h2 style={{ fontSize: 32, letterSpacing: '-0.02em', marginTop: 8 }}>What's Inside</h2>
        </div>

        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
          {bundle.components.map((c) => {
            const linkedProduct = c.productId ? getProduct(c.productId) : undefined;
            return (
              <TinFrame key={c.label} shadow="sm" background="var(--parchment)">
                <div style={{ padding: 20, width: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 6 }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 17 }}>{c.label}</div>
                    <span
                      style={{
                        flexShrink: 0,
                        fontSize: 9,
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '.06em',
                        background: c.sourced === 'anchor-brand' ? 'var(--mustard)' : 'var(--forest)',
                        color: c.sourced === 'anchor-brand' ? 'var(--ink)' : 'var(--parchment)',
                        padding: '5px 10px',
                        borderRadius: 12,
                      }}
                    >
                      {SOURCE_LABEL[c.sourced]}
                    </span>
                  </div>
                  <div style={{ fontSize: 12.5, opacity: 0.65, marginBottom: 10 }}>{c.detail}</div>
                  <p style={{ fontSize: 14, lineHeight: 1.6, margin: 0 }}>{c.whyThis}</p>
                  {linkedProduct && (
                    <Link
                      to={`/product/${linkedProduct.id}`}
                      style={{ display: 'inline-block', marginTop: 12, fontSize: 12.5, fontWeight: 700, color: 'var(--rust)' }}
                    >
                      Buy this piece separately — ${linkedProduct.price.toFixed(2)} →
                    </Link>
                  )}
                </div>
              </TinFrame>
            );
          })}
        </div>
      </div>

      {/* Sourcing */}
      <div style={{ padding: '48px 40px', maxWidth: 700, margin: '0 auto' }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>Where this gear comes from</h2>
        <p style={{ fontSize: 14, lineHeight: 1.7 }}>{bundle.sourcingNote}</p>
      </div>

      {/* Rigging guide */}
      <div style={{ background: 'var(--hero-band)', borderTop: '4px solid var(--ink)', borderBottom: '4px solid var(--ink)', padding: '48px 40px' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div style={{ fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--rust)', fontWeight: 700 }}>No fumbling with it the night before</div>
          <h2 style={{ fontSize: 32, letterSpacing: '-0.02em', marginTop: 8 }}>Setting It Up</h2>
          <p style={{ margin: '12px auto 0', maxWidth: '60ch', fontSize: 14, opacity: 0.75 }}>{bundle.riggingNote}</p>
        </div>

        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 40 }} className="grid-2">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {bundle.riggingSteps.map((step, i) => (
              <div key={step.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div
                  style={{
                    flexShrink: 0,
                    width: 30,
                    height: 30,
                    borderRadius: '50%',
                    border: '2px solid var(--ink)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: 13,
                    background: 'var(--parchment)',
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 16, marginBottom: 4 }}>{step.title}</div>
                  <p style={{ fontSize: 14, lineHeight: 1.65 }}>{step.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 12 }}>
            <div
              style={{
                width: 140,
                height: 140,
                background: 'var(--parchment)',
                border: '3px solid var(--ink)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 12,
              }}
            >
              <span style={{ fontSize: 11, color: 'var(--kicker)', fontWeight: 700, lineHeight: 1.4 }}>QR CODE — video rigging guide (link before launch)</span>
            </div>
            <p style={{ fontSize: 12.5, opacity: 0.7, maxWidth: '24ch' }}>Every kit ships with this on a printed card, plus the full written steps here on the site.</p>
          </div>
        </div>
      </div>

      <div style={{ background: 'var(--forest)', color: 'var(--cream)', padding: '56px 40px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 28, letterSpacing: '-0.03em' }}>Ready to stop guessing?</div>
        <BannerButton onClick={() => addToCart(bundle.id)} background="var(--rust)" color="var(--cream)" style={{ marginTop: 20, display: 'inline-flex' }}>
          Add whole kit to cart — ${bundle.price.toFixed(2)}
        </BannerButton>
      </div>
    </div>
  );
}
