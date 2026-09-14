import { useState } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { BannerButton } from '../components/ui/BannerButton';
import { CONTACT_CONTENT } from '../data/legal';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function Contact() {
  useDocumentMeta(CONTACT_CONTENT.meta.title, CONTACT_CONTENT.meta.description, '/contact');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState(false);
  const [sent, setSent] = useState(false);

  function submit() {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError(true);
      return;
    }
    setError(false);
    setSent(true);
  }

  return (
    <div>
      <PageHero eyebrow={CONTACT_CONTENT.eyebrow} heading={CONTACT_CONTENT.heading} subheading={CONTACT_CONTENT.subheading} />

      <div style={{ maxWidth: 560, margin: '0 auto', padding: '48px 40px' }}>
        {sent ? (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 24 }}>Message sent.</div>
            <p style={{ marginTop: 10, opacity: 0.8 }}>{CONTACT_CONTENT.success.body(form.email)}</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <label htmlFor="contact-name" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', marginBottom: 6, display: 'block' }}>Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="Your name"
                style={{ padding: '11px 12px', border: '2px solid rgba(27,67,50,.25)', fontSize: 14, width: '100%' }}
              />
            </div>
            <div>
              <label htmlFor="contact-email" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', marginBottom: 6, display: 'block' }}>Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                placeholder="you@example.com"
                style={{ padding: '11px 12px', border: '2px solid rgba(27,67,50,.25)', fontSize: 14, width: '100%' }}
              />
            </div>
            <div>
              <label htmlFor="contact-message" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', marginBottom: 6, display: 'block' }}>Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                placeholder="How can we help?"
                rows={6}
                style={{ padding: '11px 12px', border: '2px solid rgba(27,67,50,.25)', fontSize: 14, width: '100%', fontFamily: 'inherit', resize: 'vertical' }}
              />
            </div>
            {error && <div style={{ color: 'var(--rust)', fontSize: 13 }}>{CONTACT_CONTENT.validationErrorMessage}</div>}
            <BannerButton fill background="var(--forest)" color="var(--cream)" onClick={submit}>
              Send message
            </BannerButton>
          </div>
        )}

        <div style={{ marginTop: 40, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 6 }}>
          <a href={`mailto:${CONTACT_CONTENT.email}`} style={{ fontWeight: 700, color: 'var(--rust)' }}>
            {CONTACT_CONTENT.email}
          </a>
          <div style={{ fontSize: 13, opacity: 0.65 }}>Response time: {CONTACT_CONTENT.responseTime}</div>
        </div>
      </div>
    </div>
  );
}
