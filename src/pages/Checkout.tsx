import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../state/CartContext';
import { BannerButton } from '../components/ui/BannerButton';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { createCheckout, shopifyEnabled } from '../lib/shopify';
import { getClaimedCode } from '../lib/welcome';

// Payment, shipping rates, sales tax, and the order itself are all handled by
// Shopify's hosted checkout. This page just hands the cart over and redirects.

const wrap = { maxWidth: 520, margin: '0 auto', padding: '64px 40px', textAlign: 'center' as const };

export default function Checkout() {
  useDocumentMeta('Checkout | Ketto Outdoors', 'Complete your order.', '/checkout', true);
  const { items, hasItems, openCart } = useCart();
  const [error, setError] = useState<string | null>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!shopifyEnabled || !hasItems || started.current) return;
    started.current = true;
    setError(null);
    createCheckout(
      items.map((i) => ({ handle: i.productId, size: i.size, quantity: i.qty, name: i.name })),
      getClaimedCode() ?? undefined,
    )
      .then((url) => window.location.assign(url))
      .catch((e: unknown) => {
        started.current = false;
        setError(e instanceof Error ? e.message : 'Something went wrong starting checkout.');
      });
  }, [items, hasItems]);

  if (!hasItems) {
    return (
      <div style={wrap}>
        <h1 style={{ fontSize: 28 }}>Your cart is empty</h1>
        <p style={{ marginTop: 10, opacity: 0.75 }}>Add a kit before checking out.</p>
        <BannerButton to="/kits" background="var(--forest)" color="var(--cream)" style={{ marginTop: 20, display: 'inline-flex' }}>
          Shop kits
        </BannerButton>
      </div>
    );
  }

  if (!shopifyEnabled) {
    return (
      <div style={wrap}>
        <h1 style={{ fontSize: 28 }}>Checkout opens soon</h1>
        <p style={{ marginTop: 10, opacity: 0.75, lineHeight: 1.6 }}>
          We're not taking online orders just yet. Your cart is saved on this device. Want gear now? Email us at{' '}
          <a href="mailto:KettoOutdoors@gmail.com" style={{ color: 'var(--rust)' }}>
            KettoOutdoors@gmail.com
          </a>
          .
        </p>
        <BannerButton to="/kits" background="var(--forest)" color="var(--cream)" style={{ marginTop: 20, display: 'inline-flex' }}>
          Keep browsing
        </BannerButton>
      </div>
    );
  }

  if (error) {
    return (
      <div style={wrap}>
        <h1 style={{ fontSize: 28 }}>Checkout couldn't start</h1>
        <p style={{ marginTop: 10, opacity: 0.75, lineHeight: 1.6 }}>{error}</p>
        <BannerButton onClick={openCart} background="var(--forest)" color="var(--cream)" style={{ marginTop: 20, display: 'inline-flex' }}>
          Edit cart
        </BannerButton>
        <div style={{ marginTop: 16 }}>
          <Link to="/kits" style={{ fontSize: 13, color: 'var(--rust)' }}>
            ← Back to the kits
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={wrap}>
      <h1 style={{ fontSize: 28 }}>Taking you to secure checkout…</h1>
      <p style={{ marginTop: 10, opacity: 0.75 }}>Payment, shipping, and tax are handled by Shopify.</p>
    </div>
  );
}
