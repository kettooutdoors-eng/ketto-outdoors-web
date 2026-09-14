import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/ui/PageHero';
import { FAQ_ENTRIES } from '../data/legal';

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      <PageHero eyebrow="Common questions" heading="FAQ" />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 40px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {FAQ_ENTRIES.map((entry, i) => (
          <div key={entry.question} style={{ border: '2px solid var(--ink)', background: 'var(--parchment)' }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '16px 20px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: 16,
                color: 'var(--ink)',
              }}
            >
              {entry.question}
              <span style={{ fontSize: 20, marginLeft: 12 }}>{open === i ? '−' : '+'}</span>
            </button>
            {open === i && (
              <div style={{ padding: '0 20px 18px', fontSize: 14, lineHeight: 1.7 }}>
                <p>{entry.answer}</p>
                {entry.links.length > 0 && (
                  <div style={{ marginTop: 10, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    {entry.links.map((l) =>
                      l.target.startsWith('mailto:') ? (
                        <a key={l.text} href={l.target} style={{ color: 'var(--rust)', fontWeight: 700, fontSize: 13 }}>
                          {l.text}
                        </a>
                      ) : (
                        <Link key={l.text} to={l.target} style={{ color: 'var(--rust)', fontWeight: 700, fontSize: 13 }}>
                          {l.text}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
