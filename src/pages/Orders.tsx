import { useEffect, useState } from 'react';
import { TinFrame } from '../components/ui/TinFrame';
import { BannerButton } from '../components/ui/BannerButton';

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

function loadOrders(): OrderRecord[] {
  try {
    const raw = JSON.parse(localStorage.getItem('ketto-orders') || '[]');
    return Array.isArray(raw) ? raw : [];
  } catch {
    return [];
  }
}

export default function Orders() {
  const [orders, setOrders] = useState<OrderRecord[]>([]);

  useEffect(() => {
    setOrders(loadOrders());
  }, []);

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '48px 40px' }}>
      <h1 style={{ fontSize: 34 }}>My Orders</h1>
      <p style={{ fontSize: 13, opacity: 0.7, marginTop: 6, marginBottom: 28 }}>Saved on this device only — demo store, no account system.</p>

      {orders.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '48px 0' }}>
          <p style={{ opacity: 0.75 }}>No orders yet.</p>
          <BannerButton to="/shop" background="var(--forest)" color="var(--cream)" style={{ marginTop: 18, display: 'inline-flex' }}>
            Shop all gear
          </BannerButton>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {orders.map((order) => (
            <TinFrame key={order.id} shadow="sm">
              <div style={{ padding: 22, width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 17 }}>{order.id}</div>
                  <div style={{ fontSize: 12, opacity: 0.6 }}>
                    {new Date(order.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
                {order.items.map((i) => (
                  <div key={i.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 6 }}>
                    <span>
                      {i.name} × {i.qty}
                    </span>
                    <span>${i.lineTotal.toFixed(2)}</span>
                  </div>
                ))}
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontSize: 15, marginTop: 10, paddingTop: 10, borderTop: '1px solid rgba(36,26,16,.15)' }}>
                  <span>Total</span>
                  <span>${order.total}</span>
                </div>
              </div>
            </TinFrame>
          ))}
        </div>
      )}
    </div>
  );
}
