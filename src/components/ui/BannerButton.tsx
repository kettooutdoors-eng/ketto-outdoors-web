import type { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface BannerButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: MouseEventHandler;
  background?: string;
  color?: string;
  fill?: boolean;
  style?: CSSProperties;
  innerStyle?: CSSProperties;
  type?: 'button' | 'submit';
}

/** The angled banner-shaped CTA button (ink outline + colored fill) used sitewide. */
export function BannerButton({
  children,
  to,
  href,
  onClick,
  background = 'var(--forest)',
  color = 'var(--cream)',
  fill = false,
  style,
  innerStyle,
  type = 'button',
}: BannerButtonProps) {
  const inner = (
    <span
      className="banner-cta"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: fill ? 'center' : undefined,
        width: fill ? '100%' : undefined,
        textAlign: fill ? 'center' : undefined,
        background,
        color,
        padding: '10px 18px 10px 12px',
        ...innerStyle,
      }}
    >
      {children}
    </span>
  );

  const outerStyle: CSSProperties = {
    textDecoration: 'none',
    background: 'var(--ink)',
    padding: 2,
    display: 'inline-flex',
    fontWeight: 800,
    letterSpacing: '.03em',
    border: 'none',
    cursor: 'pointer',
    width: fill ? '100%' : undefined,
    ...style,
  };

  if (to) {
    return (
      <Link to={to} className="btn banner-cta" style={outerStyle}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className="btn banner-cta" style={outerStyle} onClick={onClick}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} className="btn banner-cta" style={outerStyle} onClick={onClick}>
      {inner}
    </button>
  );
}
