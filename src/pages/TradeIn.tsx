import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { TinFrame } from '../components/ui/TinFrame';
import { BannerButton } from '../components/ui/BannerButton';
import { CONDITION_GRADES, TRADE_IN_CATEGORIES, TRADE_IN_META, TRADE_IN_EXCLUDED, TRADE_IN_VALUE_DISCLAIMER, MIN_TRADE_IN_VALUE } from '../data/usedGear';
import { submitLead } from '../lib/leads';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

const STEPS = [
  { title: 'Tell us what you have', body: "Fill out the form below with what you're sending in and its condition, as best you can tell." },
  { title: "We'll email you shipping instructions", body: "If it sounds like something we can use, we'll send you a prepaid shipping label — sending it in costs you nothing." },
  { title: 'We inspect it', body: "Every piece gets a real function check against the grades below — not just a glance. If it doesn't hold up, we'll let you know and ship it back if you want it returned." },
  { title: 'You get store credit', body: "Once it passes, we'll email you a store credit code for the trade-in value — good toward anything on the site." },
];

export default function TradeIn() {
  useDocumentMeta(TRADE_IN_META.title, TRADE_IN_META.description, '/trade-in');
  const [form, setForm] = useState({ name: '', email: '', category: TRADE_IN_CATEGORIES[0], description: '' });
  const [error, setError] = useState(false);
  const [sent, setSent] = useState(false);

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.description.trim()) {
      setError(true);
      return;
    }
    setError(false);
    submitLead({ type: 'trade-in', email: form.email, name: form.name, category: form.category, description: form.description });
    setSent(true);
  }

  return (
    <div>
      <div style={{ background: 'var(--hero-band)', borderTop: '6px solid var(--ink)', borderBottom: '6px solid var(--ink)', padding: '56px 40px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--rust)', fontWeight: 700 }}>Free shipping, real inspection, store credit</div>
        <h1 style={{ fontSize: 44, letterSpacing: '-0.03em', marginTop: 10 }}>Trade In Your Gear</h1>
        <p style={{ margin: '14px auto 0', maxWidth: '58ch', fontSize: 15, opacity: 0.8 }}>
          Lures, terminal tackle, and other gear you're not using anymore don't have to end up in a drawer or the trash. Send it in — we'll pay for shipping, check it out, and pay you in store credit if it passes.
        </p>
      </div>

      <div style={{ padding: '40px 40px 0', maxWidth: 640, margin: '0 auto' }}>
        <TinFrame shadow="sm">
          <div style={{ padding: 22, width: '100%' }}>
            <div style={{ fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--rust)', fontWeight: 700, marginBottom: 10, textAlign: 'center' }}>
              What we can't take
            </div>
            <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {TRADE_IN_EXCLUDED.map((rule) => (
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
          {STEPS.map((s, i) => (
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
          Rough store-credit ranges as a share of the item's original price — the exact number depends on the actual inspection.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {CONDITION_GRADES.map((g) => (
            <div key={g.label} style={{ display: 'flex', gap: 14, alignItems: 'center', background: 'var(--parchment)', border: '2px solid var(--ink)', padding: '14px 18px' }}>
              <div style={{ flexShrink: 0, minWidth: 90 }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 15 }}>{g.label}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--rust)' }}>{g.payoutPercent} credit</div>
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
                Gear that's broken, unsafe, or doesn't pass a function check doesn't get relisted — we'll ship it back to you instead of trashing it, if you'd like it returned.
              </li>
              <li style={{ fontSize: 13, lineHeight: 1.6, opacity: 0.85 }}>
                We can only take trade-ins on gear that sells new for ${MIN_TRADE_IN_VALUE} or more — smaller items cost more to ship than they're worth crediting.
              </li>
              <li style={{ fontSize: 13, lineHeight: 1.6, opacity: 0.85 }}>{TRADE_IN_VALUE_DISCLAIMER}</li>
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
                <h2 style={{ fontSize: 20, textAlign: 'center', marginBottom: 4 }}>Request a trade-in</h2>
                <div>
                  <label htmlFor="ti-name" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', marginBottom: 6, display: 'block' }}>
                    Name
                  </label>
                  <input
                    id="ti-name"
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
                  <label htmlFor="ti-email" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', marginBottom: 6, display: 'block' }}>
                    Email
                  </label>
                  <input
                    id="ti-email"
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
                  <label htmlFor="ti-category" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', marginBottom: 6, display: 'block' }}>
                    What are you sending in?
                  </label>
                  <select
                    id="ti-category"
                    value={form.category}
                    onChange={(e) => update('category', e.target.value)}
                    style={{ padding: '11px 12px', border: '2px solid rgba(27,67,50,.25)', fontSize: 14, width: '100%', background: 'var(--cream)' }}
                  >
                    {TRADE_IN_CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="ti-description" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', marginBottom: 6, display: 'block' }}>
                    Describe it &amp; its condition
                  </label>
                  <textarea
                    id="ti-description"
                    value={form.description}
                    onChange={(e) => update('description', e.target.value)}
                    placeholder="e.g. Tackle box with about 15 assorted hard baits — crankbaits and spinnerbaits, most look barely used."
                    rows={4}
                    style={{ padding: '11px 12px', border: '2px solid rgba(27,67,50,.25)', fontSize: 14, width: '100%', fontFamily: 'inherit', resize: 'vertical' }}
                  />
                </div>
                {error && <div style={{ color: 'var(--rust)', fontSize: 13 }}>Fill in your name, email, and a description first.</div>}
                <BannerButton type="submit" fill background="var(--forest)" color="var(--cream)">
                  Send trade-in request
                </BannerButton>
              </form>
            )}
          </div>
        </TinFrame>
        <p style={{ textAlign: 'center', marginTop: 16, fontSize: 13 }}>
          <Link to="/used-gear" style={{ color: 'var(--rust)', fontWeight: 700 }}>
            ← See what's currently in the used shop
          </Link>
        </p>
      </div>
    </div>
  );
}
