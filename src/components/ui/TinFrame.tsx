import type { CSSProperties, ReactNode } from 'react';

interface TinFrameProps {
  children: ReactNode;
  background?: string;
  padding?: number | string;
  shadow?: 'sm' | 'md' | 'lg' | 'none';
  style?: CSSProperties;
  innerStyle?: CSSProperties;
  innerClassName?: string;
}

const SHADOWS: Record<string, string> = {
  sm: 'var(--shadow-ink-sm)',
  md: 'var(--shadow-ink-md)',
  lg: 'var(--shadow-ink-lg)',
  none: 'none',
};

/** The ink-outlined "cut-tin" notch frame used around cards, hero panels, and the nav logo. */
export function TinFrame({ children, background = 'var(--parchment)', padding = 3, shadow = 'md', style, innerStyle, innerClassName }: TinFrameProps) {
  return (
    <div
      className="notch"
      style={{
        background: 'var(--ink)',
        padding,
        display: 'flex',
        filter: shadow !== 'none' ? `drop-shadow(${SHADOWS[shadow]})` : undefined,
        ...style,
      }}
    >
      <div className={`notch${innerClassName ? ` ${innerClassName}` : ''}`} style={{ display: 'flex', flex: 1, background, ...innerStyle }}>
        {children}
      </div>
    </div>
  );
}
