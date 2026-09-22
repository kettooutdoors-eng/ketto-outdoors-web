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

export function Seal({ children, size = 30, background = 'var(--forest)', color = 'var(--cream)', fontSize = 13, rotate = 0, style }: SealProps) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        border: '2px solid var(--forest)',
        width: size,
        height: size,
        background,
        color,
        fontSize,
        fontFamily: 'var(--font-heading)',
        fontWeight: 800,
        textAlign: 'center',
        lineHeight: 1.05,
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

export function PillSeal({ children, style }: PillSealProps) {
  return (
    <div
      style={{
        alignSelf: 'flex-start',
        display: 'inline-flex',
        gap: 6,
        fontSize: 9,
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        fontWeight: 700,
        background: 'var(--rust)',
        color: 'var(--cream)',
        padding: '8px 12px',
        borderRadius: 20,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
