import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { BannerButton } from '../components/ui/BannerButton';
import { NOT_FOUND_CONTENT } from '../data/legal';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function NotFound() {
  useDocumentMeta(NOT_FOUND_CONTENT.meta.title, NOT_FOUND_CONTENT.meta.description, '', true);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    if (query.trim()) navigate(`/shop?q=${encodeURIComponent(query.trim())}`);
  }

  return (
    <div style={{ minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '64px 40px' }}>
      <div style={{ textAlign: 'center', maxWidth: 480 }}>
        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: 96, color: 'var(--mustard)', lineHeight: 1, textShadow: '3px 3px 0 var(--ink)' }}>404</div>
        <h1 style={{ fontSize: 30, marginTop: 16 }}>{NOT_FOUND_CONTENT.heading}</h1>
        <p style={{ marginTop: 10, opacity: 0.8 }}>{NOT_FOUND_CONTENT.body}</p>

        <form onSubmit={handleSearch} style={{ display: 'flex', gap: 8, marginTop: 24 }}>
          <input
            type="text"
            name="q"
            aria-label="Search for gear"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={NOT_FOUND_CONTENT.searchPlaceholder}
            style={{ flex: 1, padding: '11px 14px', border: '2px solid var(--forest)', fontSize: 14 }}
          />
          <button type="submit" className="btn" style={{ padding: '0 20px', background: 'var(--forest)', color: 'var(--cream)', border: 'none', fontWeight: 700, cursor: 'pointer' }}>
            {NOT_FOUND_CONTENT.searchButtonLabel}
          </button>
        </form>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 28 }}>
          <BannerButton to="/" background="var(--forest)" color="var(--cream)">
            Back home
          </BannerButton>
          <BannerButton to="/shop" background="var(--rust)" color="var(--cream)">
            Shop all gear
          </BannerButton>
        </div>
      </div>
    </div>
  );
}
