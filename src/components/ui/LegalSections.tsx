import type { LegalSection } from '../../data/legal';

export function LegalSections({ sections }: { sections: LegalSection[] }) {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 40px', display: 'flex', flexDirection: 'column', gap: 32 }}>
      {sections.map((s) => (
        <div key={s.heading}>
          <h2 style={{ fontSize: 20, marginBottom: 8 }}>{s.heading}</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, opacity: 0.9 }}>{s.body}</p>
        </div>
      ))}
    </div>
  );
}
