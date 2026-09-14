import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';

export function RopeDivider() {
  return <div className="rope-divider" />;
}

export function SectionKicker({ children }: { children: ReactNode }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <svg
        aria-hidden="true"
        width="22"
        height="40"
        viewBox="0 0 26 44"
        style={{ display: 'block', margin: '0 auto 6px' }}
        fill="none"
        stroke="var(--ink)"
        strokeWidth={2}
        strokeLinecap="round"
      >
        <circle cx="13" cy="4" r="2.4" />
        <path d="M9.5 8.5h7" />
        <path d="M9.5 11h7" />
        <path d="M9.5 13.5h7" />
        <path d="M13 15v10" />
        <path d="M13 25c0 8 10 8 10 1c0-4-4-5-6-3" />
        <path d="M23 22.5l3-2" />
      </svg>
      <div style={{ fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--rust)' }}>{children}</div>
    </div>
  );
}

export function StockLabel({ qty }: { qty: number }) {
  const label = qty <= 0 ? 'Out of stock' : qty <= 5 ? `Only ${qty} left` : 'In stock';
  const color = qty <= 0 ? 'var(--stock-out)' : qty <= 5 ? 'var(--stock-low)' : 'var(--stock-in)';
  return (
    <span style={{ fontSize: 12, fontWeight: 700, color, letterSpacing: '.02em' }}>{label}</span>
  );
}

/** Pop-in scroll-reveal wrapper matching the Home Page reference timing. */
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}>
      {children}
    </div>
  );
}
