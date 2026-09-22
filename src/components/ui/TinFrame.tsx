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
  sm: 'var(--shadow-sm)',
  md: 'var(--shadow-md)',
  lg: 'var(--shadow-lg)',
  none: 'none',
};

/** Plain rounded card used around cards, hero panels, and the nav logo. */
export function TinFrame({ children, background = '#fff', padding = 0, shadow = 'md', style, innerStyle, innerClassName }: TinFrameProps) {
  return (
    <div
      className={innerClassName}
      style={{
        display: 'flex',
        flex: 1,
        background,
        padding,
        borderRadius: 12,
        boxShadow: SHADOWS[shadow],
        ...style,
        ...innerStyle,
      }}
    >
      {children}
    </div>
  );
}
