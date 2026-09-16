import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getStoredConsent, setStoredConsent } from '../lib/analytics';

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(() => getStoredConsent() === null);

  function choose(choice: 'accepted' | 'declined') {
    setStoredConsent(choice);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      style={{
        position: 'fixed',
        left: 16,
        right: 16,
        bottom: 16,
        zIndex: 70,
        maxWidth: 560,
        margin: '0 auto',
        background: 'var(--ink)',
        color: 'var(--cream)',
        border: '2px solid var(--ink)',
        boxShadow: '4px 4px 0 rgba(36,26,16,.4)',
        padding: '18px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6 }}>
        We use your browser's local storage to run your cart — that's not tracking, and it's not optional. Site analytics are off by default; if you say yes below, we'll turn on basic traffic analytics.{' '}
        <Link to="/cookies" style={{ color: 'var(--mustard)', fontWeight: 700 }}>
          Read the Cookie Policy
        </Link>
        .
      </p>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
        <button
          type="button"
          onClick={() => choose('declined')}
          style={{ padding: '9px 16px', background: 'transparent', border: '2px solid var(--cream)', color: 'var(--cream)', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}
        >
          Decline
        </button>
        <button
          type="button"
          onClick={() => choose('accepted')}
          style={{ padding: '9px 16px', background: 'var(--rust)', border: '2px solid var(--rust)', color: 'var(--cream)', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}
        >
          Accept analytics
        </button>
      </div>
    </div>
  );
}
