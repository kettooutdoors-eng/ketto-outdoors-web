import type { ReactNode } from 'react';

interface PageHeroProps {
  eyebrow: string;
  heading: string;
  subheading?: ReactNode;
  lastUpdated?: string;
}

/** Standard sub-page masthead band used on About/FAQ/Legal/Contact/etc. */
export function PageHero({ eyebrow, heading, subheading, lastUpdated }: PageHeroProps) {
  return (
    <div
      style={{
        background: 'var(--hero-band)',
        borderTop: '6px solid var(--ink)',
        borderBottom: '6px solid var(--ink)',
        padding: '56px 40px',
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--rust)', fontWeight: 700 }}>{eyebrow}</div>
      <h1 style={{ fontSize: 44, letterSpacing: '-0.03em', marginTop: 10 }}>{heading}</h1>
      {subheading && <p style={{ margin: '14px auto 0', maxWidth: '52ch', fontSize: 15, opacity: 0.8 }}>{subheading}</p>}
      {lastUpdated && <div style={{ marginTop: 14, fontSize: 12, opacity: 0.6 }}>{lastUpdated}</div>}
    </div>
  );
}
