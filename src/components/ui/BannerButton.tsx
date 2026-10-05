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
  className?: string;
  style?: CSSProperties;
  innerStyle?: CSSProperties;
  type?: 'button' | 'submit';
}

/** The plain square CTA button used sitewide. */
export function BannerButton({
  children,
  to,
  href,
  onClick,
  background = 'var(--forest)',
  color = 'var(--cream)',
  fill = false,
  className = '',
  style,
  innerStyle,
  type = 'button',
}: BannerButtonProps) {
  const combinedStyle: CSSProperties = {
    textDecoration: 'none',
    display: fill ? 'flex' : 'inline-flex',
    alignItems: 'center',
    justifyContent: fill ? 'center' : undefined,
    width: fill ? '100%' : undefined,
    textAlign: fill ? 'center' : undefined,
    background,
    color,
    padding: '12px 22px',
    fontWeight: 800,
    letterSpacing: '.02em',
    border: 'none',
    cursor: 'pointer',
    ...style,
    ...innerStyle,
  };

  if (to) {
    return (
      <Link to={to} className={`btn ${className}`} style={combinedStyle}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={`btn ${className}`} style={combinedStyle} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={`btn ${className}`} style={combinedStyle} onClick={onClick}>
      {children}
    </button>
  );
}
