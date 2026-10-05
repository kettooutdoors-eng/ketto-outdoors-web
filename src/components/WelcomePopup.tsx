import { useCallback, useEffect, useRef, useState, type FormEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { submitLead } from '../lib/leads';
import { WELCOME_CODE, WELCOME_PERCENT, setClaimedCode, shouldSkipWelcome, snoozeWelcome } from '../lib/welcome';
import { useEscapeKey } from '../hooks/useEscapeKey';
import { BannerButton } from './ui/BannerButton';

const SHOW_AFTER_MS = 8000;
// Pages where an interruption would be unwelcome: mid-checkout and the legal pages.
const QUIET_PATHS = ['/checkout', '/privacy', '/terms', '/cookies'];

export function WelcomePopup() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [claimed, setClaimed] = useState(false);
  const [error, setError] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const quiet = QUIET_PATHS.includes(pathname);

  useEffect(() => {
    if (quiet || shouldSkipWelcome()) return;
    const timer = window.setTimeout(() => setOpen(true), SHOW_AFTER_MS);
    return () => window.clearTimeout(timer);
  }, [quiet]);

  useEffect(() => {
    if (open) emailRef.current?.focus();
  }, [open]);

  const close = useCallback(() => {
    if (!claimed) snoozeWelcome();
    setOpen(false);
  }, [claimed]);
  useEscapeKey(open, close);

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim() || !consent) {
      setError(true);
      return;
    }
    submitLead({ type: 'welcome-discount', email: email.trim() });
    setClaimedCode();
    setClaimed(true);
    setError(false);
  }

  if (!open || quiet) return null;

  return (
    <div
      onClick={close}
      style={{ position: 'fixed', inset: 0, background: 'rgba(27,67,50,.55)', zIndex: 65, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-heading"
        onClick={(e) => e.stopPropagation()}
        className="welcome-pop"
        style={{ position: 'relative', background: '#fff', borderRadius: 12, boxShadow: 'var(--shadow-lg)', width: 420, maxWidth: '100%', padding: '40px 32px 28px', textAlign: 'center' }}
      >
        <button
          onClick={close}
          aria-label="Close"
          style={{ position: 'absolute', top: 10, right: 12, background: 'none', border: 'none', fontSize: 26, lineHeight: 1, cursor: 'pointer', color: 'var(--ink)', padding: 6 }}
        >
          &times;
        </button>

        {claimed ? (
          <>
            <h2 id="welcome-heading" style={{ fontSize: 26, letterSpacing: '-0.03em' }}>Your code is ready.</h2>
            <p style={{ marginTop: 10, fontSize: 14, opacity: 0.8 }}>Use it at checkout for {WELCOME_PERCENT}% off your first order.</p>
            <div style={{ margin: '20px auto', padding: '14px 20px', background: 'var(--sage)', borderRadius: 8, fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 28, letterSpacing: '.08em', userSelect: 'all' }}>
              {WELCOME_CODE}
            </div>
            <BannerButton fill background="var(--forest)" color="var(--cream)" onClick={() => setOpen(false)}>
              Start shopping
            </BannerButton>
          </>
        ) : (
          <>
            <div style={{ fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--rust)', fontWeight: 700 }}>Welcome to Ketto</div>
            <h2 id="welcome-heading" style={{ fontSize: 30, letterSpacing: '-0.03em', marginTop: 8 }}>
              Get {WELCOME_PERCENT}% off your first purchase.
            </h2>
            <p style={{ marginTop: 10, fontSize: 14, opacity: 0.8 }}>Enter your email and we'll show you your code.</p>
            <form onSubmit={submit} style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 12, textAlign: 'left' }}>
              <input
                ref={emailRef}
                type="email"
                name="welcome-email"
                autoComplete="email"
                aria-label="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                style={{ padding: '12px 14px', border: '2px solid rgba(27,67,50,.25)', fontSize: 15, width: '100%' }}
              />
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 12, lineHeight: 1.5, cursor: 'pointer' }}>
                <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} style={{ marginTop: 2 }} />
                <span>
                  I'd like occasional emails about new gear and fishing tips. Unsubscribe anytime.{' '}
                  <Link to="/privacy" onClick={() => setOpen(false)} style={{ color: 'var(--rust)', fontWeight: 600 }}>
                    Privacy policy
                  </Link>
                </span>
              </label>
              {error && <div style={{ color: 'var(--rust)', fontSize: 13 }}>Enter your email and tick the box to get your code.</div>}
              <BannerButton type="submit" fill background="var(--rust)" color="#fff">
                Get my {WELCOME_PERCENT}% off
              </BannerButton>
            </form>
            <button
              onClick={close}
              style={{ marginTop: 14, background: 'none', border: 'none', fontSize: 13, color: 'var(--ink)', opacity: 0.65, cursor: 'pointer', textDecoration: 'underline' }}
            >
              No thanks
            </button>
            <p style={{ marginTop: 10, fontSize: 11, opacity: 0.55 }}>{WELCOME_PERCENT}% off your first order. One use per customer.</p>
          </>
        )}
      </div>
    </div>
  );
}
