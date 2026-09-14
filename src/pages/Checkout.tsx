import { useMemo, useState, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../state/CartContext';
import { useInventory } from '../state/InventoryContext';
import { US_STATES, TAX_RATES, estimateShipping, generateOrderId } from '../data/checkout';
import { BannerButton } from '../components/ui/BannerButton';
import { TinFrame } from '../components/ui/TinFrame';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

interface OrderRecord {
  id: string;
  date: string;
  name: string;
  email: string;
  items: { id: string; name: string; qty: number; lineTotal: number }[];
  shippingLabel: string;
  taxAmount: string;
  total: string;
}

function saveOrder(order: OrderRecord) {
  try {
    const orders = JSON.parse(localStorage.getItem('ketto-orders') || '[]');
    orders.unshift(order);
    localStorage.setItem('ketto-orders', JSON.stringify(orders));
  } catch {
    /* ignore */
  }
}

const inputStyle: CSSProperties = { padding: '11px 12px', border: '2px solid rgba(27,67,50,.25)', fontSize: 14, width: '100%' };
const fieldWrap = (span2: boolean): CSSProperties => ({ gridColumn: span2 ? 'span 2' : undefined });

export default function Checkout() {
  useDocumentMeta('Checkout — Ketto Outdoors', 'Complete your order.', '/checkout', true);
  const { items, cartTotal, hasItems, clearCart } = useCart();
  const { decrement } = useInventory();

  const [form, setForm] = useState({ name: '', email: '', address: '', city: '', zip: '', state: '', card: '', expiry: '', cvc: '' });
  const [formError, setFormError] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState<OrderRecord | null>(null);
  const [confirmedShipping, setConfirmedShipping] = useState<string>('');

  const itemCount = items.reduce((sum, i) => sum + i.qty, 0);
  const shipping = useMemo(() => estimateShipping(cartTotal, itemCount, form.zip), [cartTotal, itemCount, form.zip]);
  const taxRate = form.state ? TAX_RATES[form.state] || 0 : 0;
  const taxAmount = Math.round((cartTotal + shipping.cost) * taxRate * 100) / 100;
  const grandTotal = Math.round((cartTotal + shipping.cost + taxAmount) * 100) / 100;

  function update(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function placeOrder() {
    const required: (keyof typeof form)[] = ['name', 'email', 'address', 'city', 'zip', 'card', 'expiry', 'cvc'];
    if (required.some((f) => !form[f].trim())) {
      setFormError(true);
      return;
    }
    setFormError(false);
    const order: OrderRecord = {
      id: generateOrderId(),
      date: new Date().toISOString(),
      name: form.name,
      email: form.email,
      items: items.map((i) => ({ id: i.id, name: i.name, qty: i.qty, lineTotal: i.lineTotal })),
      shippingLabel: shipping.label,
      taxAmount: taxAmount.toFixed(2),
      total: grandTotal.toFixed(2),
    };
    saveOrder(order);
    items.forEach((i) => decrement(i.id, i.qty));
    setConfirmedShipping(shipping.label);
    setConfirmedOrder(order);
    clearCart();
  }

  if (confirmedOrder) {
    return (
      <div style={{ maxWidth: 560, margin: '0 auto', padding: '64px 40px', textAlign: 'center' }}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: 'var(--forest)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            fontSize: 26,
          }}
        >
          ✓
        </div>
        <h1 style={{ fontSize: 32 }}>Order confirmed</h1>
        <p style={{ marginTop: 12, fontSize: 15 }}>
          Thanks, {confirmedOrder.name} — order {confirmedOrder.id} is on its way. A receipt was "sent" to {confirmedOrder.email}.
        </p>

        <TinFrame shadow="sm" style={{ margin: '28px auto 0', maxWidth: 420 }}>
          <div style={{ padding: 24, width: '100%', textAlign: 'left' }}>
            <h2 style={{ fontSize: 16, marginBottom: 14 }}>Order summary</h2>
            {confirmedOrder.items.map((i) => (
              <div key={i.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 6 }}>
                <span>
                  {i.name} × {i.qty}
                </span>
                <span>${i.lineTotal.toFixed(2)}</span>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginTop: 10, opacity: 0.8 }}>
              <span>Shipping</span>
              <span>{confirmedShipping}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, opacity: 0.8 }}>
              <span>Sales tax</span>
              <span>${confirmedOrder.taxAmount}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontSize: 16, marginTop: 10, paddingTop: 10, borderTop: '1px solid rgba(36,26,16,.15)' }}>
              <span>Total</span>
              <span>${confirmedOrder.total}</span>
            </div>
          </div>
        </TinFrame>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 28 }}>
          <BannerButton to="/shop" background="var(--forest)" color="var(--cream)">
            Continue shopping
          </BannerButton>
          <BannerButton to="/orders" background="var(--cream)" color="var(--forest)" style={{ background: 'var(--forest)' }}>
            View my orders
          </BannerButton>
        </div>
      </div>
    );
  }

  if (!hasItems) {
    return (
      <div style={{ maxWidth: 480, margin: '0 auto', padding: '64px 40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 28 }}>Your cart is empty</h1>
        <p style={{ marginTop: 10, opacity: 0.75 }}>Add something from the shop before checking out.</p>
        <BannerButton to="/shop" background="var(--forest)" color="var(--cream)" style={{ marginTop: 20, display: 'inline-flex' }}>
          Shop all gear
        </BannerButton>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px', maxWidth: 1100, margin: '0 auto' }}>
      <h1 style={{ fontSize: 34, marginBottom: 6 }}>Checkout</h1>
      <p style={{ fontSize: 13, opacity: 0.7, marginBottom: 32, maxWidth: '70ch' }}>
        Demo checkout — no real payment is processed. Shipping is an estimated carrier rate by ZIP, weight, and package size.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 48 }} className="grid-2">
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--rust)', marginBottom: 12 }}>Shipping</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 28 }}>
            <div style={fieldWrap(true)}>
              <input style={inputStyle} name="name" autoComplete="name" aria-label="Full name" placeholder="Full name" value={form.name} onChange={(e) => update('name', e.target.value)} />
            </div>
            <div style={fieldWrap(true)}>
              <input style={inputStyle} type="email" name="email" autoComplete="email" aria-label="Email" placeholder="Email" value={form.email} onChange={(e) => update('email', e.target.value)} />
            </div>
            <div style={fieldWrap(true)}>
              <input style={inputStyle} name="address" autoComplete="street-address" aria-label="Street address" placeholder="Street address" value={form.address} onChange={(e) => update('address', e.target.value)} />
            </div>
            <input style={inputStyle} name="city" autoComplete="address-level2" aria-label="City" placeholder="City" value={form.city} onChange={(e) => update('city', e.target.value)} />
            <input style={inputStyle} name="zip" autoComplete="postal-code" aria-label="ZIP code" placeholder="ZIP code" value={form.zip} onChange={(e) => update('zip', e.target.value)} />
            <div style={fieldWrap(true)}>
              <select style={inputStyle} name="state" autoComplete="address-level1" aria-label="State, for sales tax" value={form.state} onChange={(e) => update('state', e.target.value)}>
                <option value="">State (for sales tax)</option>
                {US_STATES.map((s) => (
                  <option key={s.code} value={s.code}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--rust)', marginBottom: 12 }}>Payment</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div style={fieldWrap(true)}>
              <input style={inputStyle} name="cc-number" autoComplete="cc-number" inputMode="numeric" aria-label="Card number" placeholder="Card number" value={form.card} onChange={(e) => update('card', e.target.value)} />
            </div>
            <input style={inputStyle} name="cc-exp" autoComplete="cc-exp" aria-label="Expiry date, MM slash YY" placeholder="MM/YY" value={form.expiry} onChange={(e) => update('expiry', e.target.value)} />
            <input style={inputStyle} name="cc-csc" autoComplete="cc-csc" inputMode="numeric" aria-label="CVC" placeholder="CVC" value={form.cvc} onChange={(e) => update('cvc', e.target.value)} />
          </div>

          {formError && <div style={{ color: 'var(--rust)', fontSize: 13, marginTop: 12 }}>Fill in all fields to place your order.</div>}

          <BannerButton fill background="var(--rust)" color="#fff" onClick={placeOrder} style={{ marginTop: 24 }}>
            Place order — ${grandTotal.toFixed(2)}
          </BannerButton>
        </div>

        <TinFrame shadow="sm">
          <div style={{ padding: 24, width: '100%' }}>
            <h2 style={{ fontSize: 18, marginBottom: 16 }}>Your order</h2>
            {items.map((i) => (
              <div key={i.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 8 }}>
                <span>
                  {i.name} × {i.qty}
                </span>
                <span>${i.lineTotal.toFixed(2)}</span>
              </div>
            ))}
            <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid rgba(36,26,16,.15)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
                <span>Shipping</span>
                <span>{shipping.label}</span>
              </div>
              <div style={{ textAlign: 'right', fontSize: 11, opacity: 0.6, marginTop: 2 }}>{shipping.subLabel}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginTop: 8 }}>
                <span>Sales tax</span>
                <span>${taxAmount.toFixed(2)}</span>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontSize: 17, marginTop: 14, paddingTop: 14, borderTop: '1px solid rgba(36,26,16,.15)' }}>
              <span>Total</span>
              <span>${grandTotal.toFixed(2)}</span>
            </div>
          </div>
        </TinFrame>
      </div>

      <div style={{ marginTop: 32 }}>
        <Link to="/shop" style={{ fontSize: 13, color: 'var(--rust)' }}>
          ← Continue shopping
        </Link>
      </div>
    </div>
  );
}
