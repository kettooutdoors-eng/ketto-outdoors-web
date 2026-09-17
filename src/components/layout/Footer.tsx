import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAdmin } from '../../state/AdminContext';
import { useFeatureFlags } from '../../state/FeatureFlagsContext';
import { submitLead } from '../../lib/leads';

const linkStyle = { fontSize: 13, fontWeight: 600, color: 'var(--cream)', opacity: 0.75 };
const headingStyle = { fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 18, color: 'var(--cream)', letterSpacing: '-0.02em' };

export function Footer() {
  const { isAdmin, logout, openLogin } = useAdmin();
  const { usedGear, setUsedGear } = useFeatureFlags();
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [done, setDone] = useState(false);

  function handleSubscribe(e: FormEvent) {
    e.preventDefault();
    if (!email || !consent) return;
    submitLead({ type: 'newsletter', email });
    setDone(true);
    setEmail('');
    setConsent(false);
  }

  return (
    <div
      className="ink-noise-bg"
      style={{ display: 'flex', flexWrap: 'wrap', gap: 40, justifyContent: 'center', padding: '56px 40px', position: 'relative' }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--rust)' }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 150, textAlign: 'center', alignItems: 'center' }}>
        <div style={headingStyle}>Shop</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginTop: 4, alignItems: 'center' }}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/kits" style={linkStyle}>Shop kits</Link>
          <Link to="/biting-now" style={linkStyle}>What's biting now</Link>
          <Link to="/gear-by-state" style={linkStyle}>Gear for your state</Link>
          <Link to="/shop" style={linkStyle}>Shop all gear</Link>
          {(usedGear || isAdmin) && (
            <>
              <Link to="/used-gear" style={linkStyle}>Used gear{!usedGear && ' (admin preview)'}</Link>
              <Link to="/trade-in" style={linkStyle}>Trade in your gear{!usedGear && ' (admin preview)'}</Link>
            </>
          )}
          <Link to="/new-to-fishing" style={linkStyle}>New to fishing guide</Link>
          <Link to="/blog" style={linkStyle}>Blog</Link>
          <Link to="/orders" style={linkStyle}>My orders</Link>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 150, textAlign: 'center', alignItems: 'center' }}>
        <div style={headingStyle}>Support</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginTop: 4, alignItems: 'center' }}>
          <Link to="/about" style={linkStyle}>About us</Link>
          <Link to="/faq" style={linkStyle}>FAQ</Link>
          <Link to="/contact" style={linkStyle}>Contact us</Link>
          <Link to="/shipping-returns" style={linkStyle}>Shipping &amp; returns</Link>
          <Link to="/privacy" style={linkStyle}>Privacy policy</Link>
          <Link to="/cookies" style={linkStyle}>Cookie policy</Link>
          <Link to="/terms" style={linkStyle}>Terms of service</Link>
          <a
            onClick={isAdmin ? logout : openLogin}
            style={{ fontSize: 11, fontWeight: 600, color: 'var(--cream)', opacity: 0.4, cursor: 'pointer', marginTop: 6 }}
          >
            {isAdmin ? 'Log out of admin' : 'Admin'}
          </a>
          {isAdmin && (
            <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 600, color: 'var(--cream)', opacity: 0.6, cursor: 'pointer' }}>
              <input type="checkbox" checked={usedGear} onChange={(e) => setUsedGear(e.target.checked)} />
              Used gear program: {usedGear ? 'on' : 'off'}
            </label>
          )}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 220, textAlign: 'center', alignItems: 'center' }}>
        <div style={headingStyle}>Contact &amp; Follow</div>
        <a href="mailto:KettoOutdoors@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 700, color: 'var(--rust)', marginTop: 4 }}>
          KettoOutdoors@gmail.com →
        </a>
        <p style={{ margin: 0, fontSize: 12, color: 'var(--cream)', opacity: 0.6, maxWidth: '28ch', lineHeight: 1.5 }}>
          Questions, wholesale orders, or a lure request — we read every email.
        </p>
        <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12, width: '100%', maxWidth: 280 }}>
          <div style={{ display: 'flex', gap: 8 }}>
            <input
              type="email"
              name="newsletter-email"
              autoComplete="email"
              aria-label="Email for tips and drops"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email for tips & drops"
              style={{ flex: 1, padding: '9px 10px', border: '1px solid rgba(243,239,227,.35)', background: 'transparent', color: 'var(--cream)', fontSize: 12 }}
            />
            <button type="submit" disabled={!consent} style={{ padding: '9px 14px', background: 'var(--rust)', color: '#fff', border: 'none', fontSize: 12, fontWeight: 700, cursor: consent ? 'pointer' : 'not-allowed', opacity: consent ? 1 : 0.5, whiteSpace: 'nowrap' }}>
              Sign up
            </button>
          </div>
          <label style={{ display: 'flex', alignItems: 'flex-start', gap: 7, fontSize: 11, color: 'var(--cream)', opacity: 0.75, textAlign: 'left', cursor: 'pointer' }}>
            <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} style={{ marginTop: 2 }} />
            I'd like occasional emails about new gear and fishing tips. Unsubscribe anytime.
          </label>
        </form>
        {done && <div style={{ fontSize: 12, color: 'var(--rust)', marginTop: 6 }}>Subscribed! Thanks.</div>}
        <div style={{ display: 'flex', gap: 14, marginTop: 10 }}>
          {[
            { label: 'YouTube', href: 'https://www.youtube.com/@KettoOutdoors', icon: (
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
            ) },
          ].map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: '50%', border: '1px solid rgba(243,239,227,.35)', color: 'var(--cream)' }}>
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'url(#rough)' }}>
                {s.icon}
                {s.label === 'YouTube' && <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />}
              </svg>
            </a>
          ))}
          <a href="https://www.instagram.com/kettooutdoors/" target="_blank" rel="noreferrer" aria-label="Instagram" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: '50%', border: '1px solid rgba(243,239,227,.35)', color: 'var(--cream)' }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'url(#rough)' }}>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61592438567565" target="_blank" rel="noreferrer" aria-label="Facebook" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: '50%', border: '1px solid rgba(243,239,227,.35)', color: 'var(--cream)' }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'url(#rough)' }}>
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
