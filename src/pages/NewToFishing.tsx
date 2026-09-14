import { GUIDE_HERO, GUIDE_SECTIONS, GUIDE_END_CTA } from '../data/guide';
import { BannerButton } from '../components/ui/BannerButton';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';
import { Reveal } from '../components/ui/Misc';

export default function NewToFishing() {
  return (
    <div>
      <div style={{ background: 'var(--hero-band)', borderTop: '6px solid var(--ink)', borderBottom: '6px solid var(--ink)', padding: '56px 40px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--rust)', fontWeight: 700 }}>{GUIDE_HERO.eyebrow}</div>
        <h1 style={{ fontSize: 44, letterSpacing: '-0.03em', marginTop: 10 }}>{GUIDE_HERO.heading}</h1>
        <p style={{ margin: '14px auto 0', maxWidth: '52ch', fontSize: 15, opacity: 0.8 }}>{GUIDE_HERO.intro}</p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginTop: 24 }}>
          {GUIDE_HERO.jumpLinks.map((j) => (
            <a
              key={j.anchor}
              href={`#${j.anchor}`}
              style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--ink)', background: 'var(--parchment)', border: '2px solid var(--ink)', padding: '8px 14px' }}
            >
              {j.label}
            </a>
          ))}
        </div>
      </div>

      {GUIDE_SECTIONS.map((s, i) => (
        <div key={s.id} id={s.id} style={{ padding: '48px 40px', borderBottom: i < GUIDE_SECTIONS.length - 1 ? '1px solid rgba(36,26,16,.1)' : undefined }}>
          <Reveal>
            <div style={{ maxWidth: 920, margin: '0 auto' }}>
              <div style={{ fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--rust)', fontWeight: 700 }}>{s.eyebrow}</div>
              <h2 style={{ fontSize: 30, marginTop: 8, marginBottom: 16 }}>{s.heading}</h2>
              {s.intro && <p style={{ fontSize: 14, opacity: 0.8, marginBottom: 20 }}>{s.intro}</p>}

              {s.body && <p style={{ fontSize: 15, lineHeight: 1.7, maxWidth: '70ch' }}>{s.body}</p>}

              {s.listItems && (
                <div style={{ display: 'grid', gridTemplateColumns: s.imagePlaceholder ? '1fr 1fr' : '1fr', gap: 32 }} className="grid-2">
                  <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {s.listItems.map((li) => (
                      <li key={li} style={{ fontSize: 14, lineHeight: 1.6 }}>
                        {li}
                      </li>
                    ))}
                  </ul>
                  {s.imagePlaceholder && <ImagePlaceholder label={s.imagePlaceholder} height={220} rotate={1} />}
                </div>
              )}

              {s.cards && (
                <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 24, marginTop: 12 }}>
                  {s.cards.map((c) => (
                    <div key={c.heading} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <div style={{ fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--kicker)', fontWeight: 700 }}>{c.kicker}</div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 17 }}>{c.heading}</div>
                      <p style={{ fontSize: 13.5 }}>{c.body}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        </div>
      ))}

      <div style={{ background: 'var(--forest)', color: 'var(--cream)', padding: '64px 40px', textAlign: 'center' }}>
        <div style={{ fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase', opacity: 0.85 }}>{GUIDE_END_CTA.kicker}</div>
        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 36, letterSpacing: '-0.03em', marginTop: 10 }}>{GUIDE_END_CTA.heading}</div>
        <BannerButton to={GUIDE_END_CTA.href} background="var(--rust)" color="var(--cream)" style={{ marginTop: 20, display: 'inline-flex' }}>
          {GUIDE_END_CTA.buttonLabel}
        </BannerButton>
      </div>
    </div>
  );
}
