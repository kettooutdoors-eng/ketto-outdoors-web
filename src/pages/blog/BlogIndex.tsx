import { Link } from 'react-router-dom';
import { BLOG_ARTICLE, BLOG_CATEGORY_NAV, BLOG_INDEX_META } from '../../data/blog';
import { BannerButton } from '../../components/ui/BannerButton';
import { ImagePlaceholder } from '../../components/ui/ImagePlaceholder';
import { Reveal } from '../../components/ui/Misc';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';

export default function BlogIndex() {
  useDocumentMeta(BLOG_INDEX_META.title, BLOG_INDEX_META.description, '/blog');
  return (
    <div>
      <div style={{ background: 'var(--hero-band)', borderTop: '6px solid var(--ink)', borderBottom: '6px solid var(--ink)', padding: '48px 40px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--rust)', fontWeight: 700 }}>The Ketto Journal</div>
        <h1 style={{ fontSize: 40, letterSpacing: '-0.03em', marginTop: 10 }}>Notes From the Water</h1>
        <p style={{ margin: '14px auto 0', maxWidth: '52ch', fontSize: 15, opacity: 0.8 }}>
          Straight talk on lures, technique, and getting started — no jargon, no gatekeeping.
        </p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginTop: 22 }}>
          {BLOG_CATEGORY_NAV.map((c) => (
            <Link
              key={c.slug}
              to={`/blog/${c.slug}`}
              style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--ink)', background: 'var(--parchment)', border: '2px solid var(--ink)', padding: '8px 14px' }}
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>

      <Reveal>
        <article style={{ maxWidth: 760, margin: '0 auto', padding: '48px 40px' }}>
          <div style={{ fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--rust)', fontWeight: 700 }}>{BLOG_ARTICLE.eyebrow}</div>
          <h2 style={{ fontSize: 32, marginTop: 10, marginBottom: 8 }}>{BLOG_ARTICLE.title}</h2>
          <div style={{ fontSize: 13, opacity: 0.6, marginBottom: 24 }}>{BLOG_ARTICLE.byline}</div>
          <ImagePlaceholder label={BLOG_ARTICLE.heroImagePlaceholder} height={280} rotate={0} />
          <p style={{ fontSize: 16, lineHeight: 1.75, marginTop: 28 }}>{BLOG_ARTICLE.bodyIntro}</p>
          {BLOG_ARTICLE.sections.map((s) => (
            <div key={s.heading} style={{ marginTop: 28 }}>
              <h3 style={{ fontSize: 20, marginBottom: 8 }}>{s.heading}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.75 }}>{s.body}</p>
            </div>
          ))}
        </article>
      </Reveal>

      <div style={{ background: 'var(--forest)', color: 'var(--cream)', padding: '56px 40px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 28, letterSpacing: '-0.03em' }}>{BLOG_ARTICLE.endCta.heading}</div>
        <p style={{ margin: '10px auto 0', maxWidth: '46ch', opacity: 0.85, fontSize: 14 }}>{BLOG_ARTICLE.endCta.body}</p>
        <BannerButton to={BLOG_ARTICLE.endCta.href} background="var(--rust)" color="var(--cream)" style={{ marginTop: 20, display: 'inline-flex' }}>
          {BLOG_ARTICLE.endCta.buttonLabel}
        </BannerButton>
      </div>
    </div>
  );
}
