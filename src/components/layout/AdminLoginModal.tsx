import { useState } from 'react';
import { useAdmin } from '../../state/AdminContext';
import { useEscapeKey } from '../../hooks/useEscapeKey';

export function AdminLoginModal() {
  const { showLogin, closeLogin, submitLogin, loginError } = useAdmin();
  const [pw, setPw] = useState('');
  useEscapeKey(showLogin, closeLogin);

  if (!showLogin) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(27,67,50,.5)', zIndex: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div role="dialog" aria-modal="true" aria-labelledby="admin-login-heading" style={{ background: 'var(--cream)', padding: 32, width: 320, maxWidth: '90vw', borderRadius: 10, boxShadow: '0 10px 40px rgba(0,0,0,.3)', display: 'flex', flexDirection: 'column', gap: 14 }}>
        <h2 id="admin-login-heading" style={{ fontSize: 18 }}>Admin login</h2>
        <input
          type="password"
          name="admin-password"
          autoComplete="current-password"
          aria-label="Admin password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          placeholder="Password"
          style={{ padding: '10px 12px', border: '2px solid rgba(27,67,50,.25)', fontSize: 14 }}
        />
        {loginError && <div style={{ color: 'var(--rust)', fontSize: 13 }}>Incorrect password.</div>}
        <div style={{ display: 'flex', gap: 10 }}>
          <button onClick={() => submitLogin(pw)} className="btn" style={{ flex: 1, background: 'var(--forest)', color: 'var(--cream)', border: 'none', cursor: 'pointer', padding: '10px 0' }}>
            Unlock
          </button>
          <button onClick={closeLogin} style={{ flex: 1, background: 'transparent', border: '2px solid var(--forest)', color: 'var(--forest)', cursor: 'pointer', borderRadius: 6, padding: '10px 0' }}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
