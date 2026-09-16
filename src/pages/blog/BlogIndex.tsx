import { Link } from 'react-router-dom';
import { BLOG_ARTICLES, BLOG_CATEGORY_NAV, BLOG_INDEX_META } from '../../data/blog';
import { TinFrame } from '../../components/ui/TinFrame';
import { BlogHero } from '../../components/BlogHero';
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

      <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 28, padding: '48px 40px 56px', maxWidth: 1100, margin: '0 auto' }}>
        {BLOG_ARTICLES.map((article) => (
          <Reveal key={article.slug}>
            <TinFrame shadow="lg">
              <Link
                to={`/blog/${article.category}/${article.slug}`}
                style={{ display: 'block', padding: 28, color: 'var(--ink)', textDecoration: 'none', position: 'relative', width: '100%' }}
              >
                <div className="notch" style={{ position: 'absolute', inset: 8, border: '1.5px dashed rgba(36,26,16,.35)', pointerEvents: 'none' }} />
                <BlogHero category={article.category} />
                <div style={{ fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--rust)', fontWeight: 700, marginTop: 14 }}>{article.eyebrow}</div>
                <h2 style={{ fontSize: 20, marginTop: 8, lineHeight: 1.3 }}>{article.title}</h2>
                <div style={{ fontSize: 12, opacity: 0.6, marginTop: 8 }}>{article.byline}</div>
                <p style={{ fontSize: 13.5, marginTop: 12, lineHeight: 1.6 }}>{article.bodyIntro.slice(0, 140)}…</p>
                <div style={{ marginTop: 14, color: 'var(--rust)', fontWeight: 700, fontSize: 13 }}>Read the full post →</div>
              </Link>
            </TinFrame>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
