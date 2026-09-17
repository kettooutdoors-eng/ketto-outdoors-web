// PHASE 2 - Upgrade Credit Program, disabled until launch is stable.
// Not linked from nav, footer, or any live page, and the route in App.tsx is commented
// out — this page isn't reachable on the live site yet. Built and kept ready so it can be
// switched on later without rebuilding it from scratch. See src/data/upgradeCredit.ts for
// the background and business reasoning.
import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { TinFrame } from '../components/ui/TinFrame';
import { BannerButton } from '../components/ui/BannerButton';
import {
  UPGRADE_CREDIT_GRADES,
  UPGRADE_CREDIT_ELIGIBLE_COMBOS,
  UPGRADE_CREDIT_EXCLUDED,
  UPGRADE_CREDIT_STEPS,
  UPGRADE_CREDIT_VALUE_DISCLAIMER,
  UPGRADE_CREDIT_META,
} from '../data/upgradeCredit';
import { submitLead } from '../lib/leads';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function UpgradeCredit() {
  // noIndex: true — belt-and-suspenders in case this ever gets routed before nav/sitemap
  // catch up; the route being commented out in App.tsx is the real gate for now.
  useDocumentMeta(UPGRADE_CREDIT_META.title, UPGRADE_CREDIT_META.description, '/upgrade-credit', true);
  const [form, setForm] = useState({ name: '', email: '', combo: UPGRADE_CREDIT_ELIGIBLE_COMBOS[0].name, notes: '' });
  const [error, setError] = useState(false);
  const [sent, setSent] = useState(false);

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.notes.trim()) {
      setError(true);
      return;
    }
    setError(false);
    submitLead({ type: 'upgrade-credit', email: form.email, name: form.name, combo: form.combo, notes: form.notes });
    setSent(true);
  }

  return (
    <div>
      <div style={{ background: 'var(--hero-band)', borderTop: '6px solid var(--ink)', borderBottom: '6px solid var(--ink)', padding: '56px 40px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--rust)', fontWeight: 700 }}>Free shipping, real inspection, store credit</div>
        <h1 style={{ fontSize: 44, letterSpacing: '-0.03em', marginTop: 10 }}>Upgrade Credit</h1>
        <p style={{ margin: '14px auto 0', maxWidth: '58ch', fontSize: 15, opacity: 0.8 }}>
          Outgrown your starter combo? Send it back and put it toward the next one. We'll pay for shipping, check it out, and credit your account if it passes.
        </p>
      </div>

      <div style={{ padding: '40px 40px 0', maxWidth: 640, margin: '0 auto' }}>
        <TinFrame shadow="sm">
          <div style={{ padding: 22, width: '100%' }}>
            <div style={{ fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--rust)', fontWeight: 700, marginBottom: 10, textAlign: 'center' }}>
              What's eligible
            </div>
            <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {UPGRADE_CREDIT_ELIGIBLE_COMBOS.map((c) => (
                <li key={c.productId} style={{ fontSize: 13.5, lineHeight: 1.6 }}>
                  {c.name}
                </li>
              ))}
            </ul>
            <div style={{ fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--rust)', fontWeight: 700, margin: '18px 0 10px', textAlign: 'center' }}>
              What's not
            </div>
            <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {UPGRADE_CREDIT_EXCLUDED.map((rule) => (
                <li key={rule} style={{ fontSize: 13.5, lineHeight: 1.6 }}>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </TinFrame>
      </div>

      <div style={{ padding: '48px 40px 0', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: 24, textAlign: 'center', marginBottom: 28 }}>How it works</h2>
        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: 24 }}>
          {UPGRADE_CREDIT_STEPS.map((s, i) => (
            <div key={s.title} style={{ display: 'flex', gap: 14 }}>
              <div
                style={{
                  flexShrink: 0,
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  border: '2px solid var(--ink)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: 14,
                  background: 'var(--parchment)',
                }}
              >
                {i + 1}
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 16, marginBottom: 4 }}>{s.title}</div>
                <p style={{ fontSize: 13.5, lineHeight: 1.6, opacity: 0.85 }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '48px 40px 0', maxWidth: 700, margin: '0 auto' }}>
        <h2 style={{ fontSize: 22, textAlign: 'center', marginBottom: 6 }}>How we grade it — and what it's worth</h2>
        <p style={{ fontSize: 13, textAlign: 'center', opacity: 0.7, marginBottom: 18 }}>
          Rough store-credit ranges as a share of the combo's original price — the exact number depends on the actual inspection.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {UPGRADE_CREDIT_GRADES.map((g) => (
            <div key={g.label} style={{ display: 'flex', gap: 14, alignItems: 'center', background: 'var(--parchment)', border: '2px solid var(--ink)', padding: '14px 18px' }}>
              <div style={{ flexShrink: 0, minWidth: 90 }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 15 }}>{g.label}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--rust)' }}>{g.creditPercent} credit</div>
              </div>
              <p style={{ fontSize: 13.5, margin: 0, opacity: 0.85 }}>{g.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '40px 40px 0', maxWidth: 560, margin: '0 auto' }}>
        <TinFrame shadow="sm">
          <div style={{ padding: 22, width: '100%' }}>
            <div style={{ fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--rust)', fontWeight: 700, marginBottom: 10, textAlign: 'center' }}>
              Good to know
            </div>
            <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <li style={{ fontSize: 13, lineHeight: 1.6, opacity: 0.85 }}>
                A combo that doesn't pass inspection isn't relisted — we'll ship it back to you instead, if you'd like it returned.
              </li>
              <li style={{ fontSize: 13, lineHeight: 1.6, opacity: 0.85 }}>{UPGRADE_CREDIT_VALUE_DISCLAIMER}</li>
            </ul>
          </div>
        </TinFrame>
      </div>

      <div style={{ padding: '48px 40px 56px', maxWidth: 560, margin: '0 auto' }}>
        <TinFrame shadow="lg">
          <div style={{ padding: 32, width: '100%' }}>
            {sent ? (
              <div style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: 22 }}>Got it.</h2>
                <p style={{ marginTop: 10, opacity: 0.8, fontSize: 14 }}>
                  We'll email you at {form.email} with next steps and a prepaid shipping label if it sounds like a fit.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <h2 style={{ fontSize: 20, textAlign: 'center', marginBottom: 4 }}>Request upgrade credit</h2>
                <div>
                  <label htmlFor="uc-name" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', marginBottom: 6, display: 'block' }}>
                    Name
                  </label>
                  <input
                    id="uc-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder="Your name"
                    style={{ padding: '11px 12px', border: '2px solid rgba(27,67,50,.25)', fontSize: 14, width: '100%' }}
                  />
                </div>
                <div>
                  <label htmlFor="uc-email" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', marginBottom: 6, display: 'block' }}>
                    Email
                  </label>
                  <input
                    id="uc-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="you@example.com"
                    style={{ padding: '11px 12px', border: '2px solid rgba(27,67,50,.25)', fontSize: 14, width: '100%' }}
                  />
                </div>
                <div>
                  <label htmlFor="uc-combo" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', marginBottom: 6, display: 'block' }}>
                    Which combo?
                  </label>
                  <select
                    id="uc-combo"
                    value={form.combo}
                    onChange={(e) => update('combo', e.target.value)}
                    style={{ padding: '11px 12px', border: '2px solid rgba(27,67,50,.25)', fontSize: 14, width: '100%', background: 'var(--cream)' }}
                  >
                    {UPGRADE_CREDIT_ELIGIBLE_COMBOS.map((c) => (
                      <option key={c.productId} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="uc-notes" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', marginBottom: 6, display: 'block' }}>
                    Tell us how it's held up
                  </label>
                  <textarea
                    id="uc-notes"
                    value={form.notes}
                    onChange={(e) => update('notes', e.target.value)}
                    placeholder="e.g. Reel still casts smooth, a few scuffs on the rod blank, all guides intact."
                    rows={4}
                    style={{ padding: '11px 12px', border: '2px solid rgba(27,67,50,.25)', fontSize: 14, width: '100%', fontFamily: 'inherit', resize: 'vertical' }}
                  />
                </div>
                {error && <div style={{ color: 'var(--rust)', fontSize: 13 }}>Fill in your name, email, and how it's held up first.</div>}
                <BannerButton type="submit" fill background="var(--forest)" color="var(--cream)">
                  Send upgrade credit request
                </BannerButton>
              </form>
            )}
          </div>
        </TinFrame>
        <p style={{ textAlign: 'center', marginTop: 16, fontSize: 13 }}>
          <Link to="/trade-in" style={{ color: 'var(--rust)', fontWeight: 700 }}>
            ← See the general gear trade-in program
          </Link>
        </p>
      </div>
    </div>
  );
}
