import { Link, useParams } from 'react-router-dom';
import { getArticle } from '../../data/blog';
import { BannerButton } from '../../components/ui/BannerButton';
import { BlogHero } from '../../components/BlogHero';
import { Reveal } from '../../components/ui/Misc';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import NotFound from '../NotFound';

export default function BlogArticlePage() {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const article = category && slug ? getArticle(category, slug) : undefined;
  useDocumentMeta(
    article ? `${article.title} — The Ketto Journal` : 'Post Not Found — Ketto Outdoors',
    article?.bodyIntro.slice(0, 160) ?? "This post doesn't exist, moved, or never got hooked in the first place.",
    `/blog/${category ?? ''}/${slug ?? ''}`
  );

  if (!article) return <NotFound />;

  return (
    <div>
      <div style={{ padding: '18px 40px 0', fontSize: 12, opacity: 0.65 }}>
        <Link to="/blog" style={{ color: 'var(--ink)' }}>
          Blog
        </Link>{' '}
        /{' '}
        <Link to={`/blog/${article.category}`} style={{ color: 'var(--ink)' }}>
          {article.eyebrow}
        </Link>{' '}
        / {article.title}
      </div>

      <Reveal>
        <article style={{ maxWidth: 760, margin: '0 auto', padding: '24px 40px 48px' }}>
          <div style={{ fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--rust)', fontWeight: 700 }}>{article.eyebrow}</div>
          <h1 style={{ fontSize: 34, marginTop: 10, marginBottom: 8 }}>{article.title}</h1>
          <div style={{ fontSize: 13, opacity: 0.6, marginBottom: 24 }}>{article.byline}</div>
          <BlogHero category={article.category} height={280} rotate={0} />
          <p style={{ fontSize: 16, lineHeight: 1.75, marginTop: 28 }}>{article.bodyIntro}</p>
          {article.sections.map((s) => (
            <div key={s.heading} style={{ marginTop: 28 }}>
              <h2 style={{ fontSize: 20, marginBottom: 8 }}>{s.heading}</h2>
              <p style={{ fontSize: 15, lineHeight: 1.75 }}>{s.body}</p>
            </div>
          ))}
        </article>
      </Reveal>

      <div style={{ background: 'var(--forest)', color: 'var(--cream)', padding: '56px 40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 28, letterSpacing: '-0.03em' }}>{article.endCta.heading}</h2>
        <p style={{ margin: '10px auto 0', maxWidth: '46ch', opacity: 0.85, fontSize: 14 }}>{article.endCta.body}</p>
        <BannerButton to={article.endCta.href} background="var(--rust)" color="var(--cream)" style={{ marginTop: 20, display: 'inline-flex' }}>
          {article.endCta.buttonLabel}
        </BannerButton>
        <p style={{ marginTop: 18 }}>
          <Link to="/blog" style={{ fontSize: 13, fontWeight: 700, color: 'var(--cream)', textDecoration: 'underline' }}>
            ← More from the Journal
          </Link>
        </p>
      </div>
    </div>
  );
}
