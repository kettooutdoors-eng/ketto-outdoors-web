import type { CSSProperties, ReactNode } from 'react';

interface SealProps {
  children: ReactNode;
  size?: number;
  background?: string;
  color?: string;
  fontSize?: number;
  rotate?: number;
  style?: CSSProperties;
}

export function Seal({ children, size = 30, background = 'var(--mustard)', color = 'var(--ink)', fontSize = 13, rotate = 0, style }: SealProps) {
  return (
    <div
      className="seal"
      style={{
        width: size,
        height: size,
        background,
        color,
        fontSize,
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

interface PillSealProps {
  children: ReactNode;
  rotate?: number;
  style?: CSSProperties;
}

export function PillSeal({ children, rotate = -2, style }: PillSealProps) {
  return (
    <div
      className="seal"
      style={{
        alignSelf: 'flex-start',
        gap: 6,
        fontSize: 9,
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        background: 'var(--rust)',
        color: 'var(--parchment)',
        padding: '8px 12px',
        borderRadius: 20,
        transform: `rotate(${rotate}deg)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
