import { PageHero } from '../components/ui/PageHero';
import { BannerButton } from '../components/ui/BannerButton';
import { Reveal } from '../components/ui/Misc';
import { ABOUT_CONTENT } from '../data/legal';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function About() {
  useDocumentMeta(ABOUT_CONTENT.meta.title, ABOUT_CONTENT.meta.description, '/about');
  return (
    <div>
      <PageHero eyebrow={ABOUT_CONTENT.eyebrow} heading={ABOUT_CONTENT.heading} />

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 40px' }}>
        <Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {ABOUT_CONTENT.intro.map((p, i) => (
              <p key={i} style={{ fontSize: 16, lineHeight: 1.75 }}>
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32, marginTop: 40 }}>
          {ABOUT_CONTENT.sections.map((s) => (
            <Reveal key={s.heading}>
              <div>
                <h2 style={{ fontSize: 22, marginBottom: 8 }}>{s.heading}</h2>
                <p style={{ fontSize: 15, lineHeight: 1.7 }}>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div style={{ background: 'var(--forest)', color: 'var(--cream)', padding: '56px 40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 28, letterSpacing: '-0.03em' }}>{ABOUT_CONTENT.ctaBanner.heading}</h2>
        <p style={{ margin: '10px auto 0', maxWidth: '46ch', opacity: 0.85, fontSize: 14 }}>{ABOUT_CONTENT.ctaBanner.body}</p>
        <BannerButton to={ABOUT_CONTENT.ctaBanner.href} background="var(--rust)" color="var(--cream)" style={{ marginTop: 20, display: 'inline-flex' }}>
          {ABOUT_CONTENT.ctaBanner.buttonLabel}
        </BannerButton>
      </div>
    </div>
  );
}
