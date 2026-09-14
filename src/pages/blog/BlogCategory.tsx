import { Link, useParams } from 'react-router-dom';
import { BLOG_CATEGORIES, BLOG_CATEGORY_NAV, BLOG_ARTICLE } from '../../data/blog';
import NotFound from '../NotFound';

export default function BlogCategory() {
  const { category } = useParams<{ category: string }>();
  const cat = category ? BLOG_CATEGORIES[category] : undefined;
  if (!cat) return <NotFound />;

  return (
    <div>
      <div style={{ background: 'var(--hero-band)', borderTop: '6px solid var(--ink)', borderBottom: '6px solid var(--ink)', padding: '48px 40px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--rust)', fontWeight: 700 }}>{cat.eyebrow}</div>
        <h1 style={{ fontSize: 40, letterSpacing: '-0.03em', marginTop: 10 }}>{cat.heading}</h1>
        <p style={{ margin: '14px auto 0', maxWidth: '52ch', fontSize: 15, opacity: 0.8 }}>{cat.intro}</p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginTop: 22 }}>
          {BLOG_CATEGORY_NAV.map((c) => (
            <Link
              key={c.slug}
              to={`/blog/${c.slug}`}
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '.04em',
                textTransform: 'uppercase',
                color: c.slug === cat.slug ? 'var(--cream)' : 'var(--ink)',
                background: c.slug === cat.slug ? 'var(--forest)' : 'var(--parchment)',
                border: '2px solid var(--ink)',
                padding: '8px 14px',
              }}
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: '0 auto', padding: '48px 40px' }}>
        {cat.hasArticlePreview ? (
          <Link
            to="/blog"
            style={{ display: 'block', background: 'var(--parchment)', border: '3px solid var(--ink)', padding: 28, textDecoration: 'none', color: 'var(--ink)' }}
          >
            <div style={{ fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--rust)', fontWeight: 700 }}>{BLOG_ARTICLE.eyebrow}</div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 22, marginTop: 8 }}>{BLOG_ARTICLE.title}</div>
            <div style={{ fontSize: 13, opacity: 0.6, marginTop: 6 }}>{BLOG_ARTICLE.byline}</div>
            <p style={{ fontSize: 14, marginTop: 12 }}>{BLOG_ARTICLE.bodyIntro.slice(0, 180)}…</p>
            <div style={{ marginTop: 14, color: 'var(--rust)', fontWeight: 700, fontSize: 13 }}>Read the full post →</div>
          </Link>
        ) : (
          <div style={{ textAlign: 'center', padding: '48px 24px', border: '2px dashed rgba(36,26,16,.3)' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 20 }}>{cat.comingSoon.heading}</div>
            <p style={{ marginTop: 10, opacity: 0.75, fontSize: 14 }}>{cat.comingSoon.body}</p>
            <Link to="/blog" style={{ display: 'inline-block', marginTop: 18, color: 'var(--rust)', fontWeight: 700, fontSize: 13 }}>
              ← Back to all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
