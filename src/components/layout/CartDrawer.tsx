import { Link } from 'react-router-dom';
import { useCart } from '../../state/CartContext';
import { useEscapeKey } from '../../hooks/useEscapeKey';

export function CartDrawer() {
  const { cartOpen, closeCart, items, hasItems, cartTotal, increment, decrement, removeFromCart } = useCart();
  useEscapeKey(cartOpen, closeCart);

  if (!cartOpen) return null;

  return (
    <>
      <div onClick={closeCart} style={{ position: 'fixed', inset: 0, background: 'rgba(27,67,50,.35)', zIndex: 20 }} />
      <div role="dialog" aria-modal="true" aria-labelledby="cart-heading" style={{ position: 'fixed', top: 0, right: 0, bottom: 0, width: 380, maxWidth: '92vw', background: 'var(--cream)', zIndex: 21, boxShadow: '-8px 0 30px rgba(0,0,0,.2)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid rgba(27,67,50,.15)' }}>
          <h2 id="cart-heading" style={{ fontSize: 22 }}>Your Cart</h2>
          <button onClick={closeCart} aria-label="Close cart" style={{ background: 'none', border: 'none', fontSize: 20, cursor: 'pointer', color: 'var(--ink)' }}>
            &times;
          </button>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: 24, display: 'flex', flexDirection: 'column', gap: 18 }}>
          {hasItems ? (
            items.map((item) => (
              <div key={item.id} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>{item.name}</div>
                  <div style={{ fontSize: 13, opacity: 0.7 }}>${item.price.toFixed(2)}</div>
                </div>
                <button onClick={() => decrement(item.id)} style={{ width: 26, height: 26, borderRadius: '50%', border: '1px solid var(--forest)', background: 'transparent', color: 'var(--forest)', cursor: 'pointer' }}>
                  −
                </button>
                <span style={{ minWidth: 16, textAlign: 'center', fontSize: 14 }}>{item.qty}</span>
                <button onClick={() => increment(item.id)} style={{ width: 26, height: 26, borderRadius: '50%', border: '1px solid var(--forest)', background: 'transparent', color: 'var(--forest)', cursor: 'pointer' }}>
                  +
                </button>
                <button onClick={() => removeFromCart(item.id)} aria-label="Remove" style={{ background: 'none', border: 'none', color: 'var(--rust)', cursor: 'pointer', fontSize: 13, textDecoration: 'underline' }}>
                  Remove
                </button>
              </div>
            ))
          ) : (
            <>
              <p style={{ opacity: 0.7, fontSize: 14, margin: '0 0 14px' }}>Your cart is empty.</p>
              <Link to="/product/deep-six" onClick={closeCart} style={{ display: 'block', background: 'var(--cream)', padding: '14px 16px', borderRadius: 8, textDecoration: 'none' }}>
                <div style={{ fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--rust)', fontWeight: 700 }}>Beginner pick</div>
                <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--ink)', marginTop: 2 }}>Deep Six — $14.50</div>
                <div style={{ fontSize: 12, color: 'var(--ink)', opacity: 0.65 }}>Cast it out and reel steady. Great first lure.</div>
              </Link>
            </>
          )}
        </div>
        <div style={{ padding: 24, borderTop: '2px solid rgba(27,67,50,.15)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontSize: 18, marginBottom: 14 }}>
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <Link to="/checkout" onClick={closeCart} className="btn" style={{ flex: 1, textAlign: 'center', textDecoration: 'none', background: 'var(--rust)', color: '#fff', border: 'none', padding: '12px 0' }}>
              Checkout
            </Link>
            <Link to="/shop" onClick={closeCart} className="btn" style={{ flex: 1, textAlign: 'center', textDecoration: 'none', background: 'var(--forest)', color: 'var(--cream)', border: 'none', padding: '12px 0' }}>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
