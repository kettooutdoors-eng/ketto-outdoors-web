interface PriceTagProps {
  price: number | string;
  rotate?: number;
}

/** String-tag price badge with a looping-string SVG + rust grommet, like a tackle-shop price tag. */
export function PriceTag({ price, rotate = -3 }: PriceTagProps) {
  return (
    <div
      className="tag-clip"
      style={{
        marginTop: 'auto',
        background: 'var(--ink)',
        padding: 2,
        display: 'inline-flex',
        alignSelf: 'flex-start',
        transform: `rotate(${rotate}deg)`,
        position: 'relative',
        overflow: 'visible',
      }}
    >
      <svg aria-hidden="true" width="34" height="30" viewBox="0 0 34 30" style={{ position: 'absolute', left: -26, top: -4, overflow: 'visible' }}>
        <path
          d="M17 15 C30 8 32 26 20 24 C10 22 14 6 17 15"
          fill="none"
          stroke="var(--ink)"
          strokeWidth={2.6}
          strokeLinecap="round"
        />
        <path d="M17 15 C28 22 24 34 14 30" fill="none" stroke="var(--ink)" strokeWidth={2.6} strokeLinecap="round" />
        <path
          d="M17 15 C30 8 32 26 20 24 C10 22 14 6 17 15"
          fill="none"
          stroke="#f4ecd8"
          strokeWidth={1.4}
          strokeLinecap="round"
        />
        <path d="M17 15 C28 22 24 34 14 30" fill="none" stroke="#f4ecd8" strokeWidth={1.4} strokeLinecap="round" />
      </svg>
      <div
        className="tag-clip"
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 800,
          fontSize: 16,
          background: 'var(--mustard)',
          color: 'var(--ink)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
          padding: '8px 16px 8px 22px',
        }}
      >
        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 17 17" style={{ flexShrink: 0, marginRight: 2 }}>
          <circle cx="8.5" cy="8.5" r="8.5" fill="#a9432a" />
          <circle cx="8.5" cy="8.5" r="3.4" fill="var(--ink)" />
        </svg>
        ${price}
      </div>
    </div>
  );
}
