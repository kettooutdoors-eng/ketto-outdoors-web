import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TinFrame } from '../ui/TinFrame';
import { BannerButton } from '../ui/BannerButton';
import { useCart } from '../../state/CartContext';

export function Nav() {
  const { hasItems, cartCount, toggleCart } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSearchSubmit(e: FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/shop?q=${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <nav
      className="nav-bar"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        padding: '14px 40px',
        background: 'var(--mustard)',
        borderTop: '4px solid var(--ink)',
        borderBottom: '4px solid var(--ink)',
      }}
    >
      <Link to="/" style={{ marginRight: 'auto', display: 'flex' }}>
        <TinFrame background="var(--parchment)" padding={3} innerStyle={{ padding: '6px 14px' }}>
          <img src={`${import.meta.env.BASE_URL}assets/ketto-lockup.png`} alt="Ketto Outdoors" className="nav-logo-img" style={{ height: 56, display: 'block' }} />
        </TinFrame>
      </Link>

      <Link
        to="/new-to-fishing"
        className="nav-link-desktop"
        style={{
          fontSize: 12,
          letterSpacing: '.1em',
          textTransform: 'uppercase',
          color: 'var(--ink)',
          fontWeight: 800,
          background: 'var(--parchment)',
          border: '2px solid var(--ink)',
          padding: '8px 14px',
        }}
      >
        New to Fishing
      </Link>

      <BannerButton to="/shop" background="var(--forest)" color="var(--cream)">
        Shop Gear
      </BannerButton>

      {searchOpen && (
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            name="q"
            aria-label="Search gear"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            style={{ fontSize: 13, padding: '8px 10px', border: '2px solid var(--forest)', borderRadius: 6, width: 160 }}
          />
        </form>
      )}
      <button
        onClick={() => setSearchOpen((v) => !v)}
        aria-label="Search"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: '2px solid var(--ink)',
          background: 'var(--parchment)',
          color: 'var(--ink)',
          cursor: 'pointer',
          flexShrink: 0,
        }}
      >
        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'url(#rough)' }}>
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>
      <button
        onClick={toggleCart}
        aria-label="Cart"
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: '2px solid var(--ink)',
          color: 'var(--ink)',
          background: 'var(--parchment)',
          cursor: 'pointer',
        }}
      >
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'url(#rough)' }}>
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        {hasItems && (
          <span
            style={{
              position: 'absolute',
              top: -4,
              right: -4,
              background: 'var(--rust)',
              color: 'var(--parchment)',
              fontSize: 10,
              fontWeight: 700,
              minWidth: 16,
              height: 16,
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 4px',
            }}
          >
            {cartCount}
          </span>
        )}
      </button>
    </nav>
  );
}
