import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../state/CartContext';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const linkStyle = { color: 'var(--cream)', textDecoration: 'none', fontSize: 16, padding: '14px 8px', borderBottom: '1px solid rgba(243,239,227,.15)' };

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { hasItems, cartCount, openCart } = useCart();
  if (!open) return null;
  return (
    <>
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.25)', zIndex: 60 }} />
      <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, width: 280, maxWidth: '80vw', background: 'var(--forest)', zIndex: 61, boxShadow: '-8px 0 24px rgba(0,0,0,.25)', display: 'flex', flexDirection: 'column', padding: 24, gap: 4 }}>
        <button onClick={onClose} aria-label="Close menu" style={{ alignSelf: 'flex-end', background: 'none', border: 'none', color: 'var(--cream)', fontSize: 22, cursor: 'pointer', marginBottom: 12 }}>
          &times;
        </button>
        <Link to="/" onClick={onClose} style={linkStyle}>Home</Link>
        <Link to="/new-to-fishing" onClick={onClose} style={linkStyle}>New to Fishing</Link>
        <Link to="/shop" onClick={onClose} style={linkStyle}>Shop Gear</Link>
        <button
          onClick={() => {
            onClose();
            openCart();
          }}
          style={{ color: 'var(--cream)', background: 'none', border: 'none', textAlign: 'left', fontSize: 16, padding: '14px 8px', cursor: 'pointer' }}
        >
          Cart{hasItems ? ` (${cartCount})` : ''}
        </button>
      </div>
    </>
  );
}

export function MenuFab({ onOpen }: { onOpen: () => void }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 280);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button
      onClick={onOpen}
      aria-label="Menu"
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: 'var(--forest)',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 8px 24px rgba(0,0,0,.25)',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity .25s ease',
        zIndex: 55,
      }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--cream)" strokeWidth={2.6} strokeLinecap="round" style={{ filter: 'url(#rough)' }}>
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    </button>
  );
}
