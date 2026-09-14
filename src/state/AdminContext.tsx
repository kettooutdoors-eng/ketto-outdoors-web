import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';

const ADMIN_KEY = 'ketto-admin';
// Demo-only gate (matches the design prototype). A real deployment should
// replace this with a proper authenticated admin/editor role.
const ADMIN_PASSWORD = 'ketto2026';

function loadAdmin(): boolean {
  try {
    return localStorage.getItem(ADMIN_KEY) === '1';
  } catch {
    return false;
  }
}

function saveAdmin(v: boolean) {
  try {
    localStorage.setItem(ADMIN_KEY, v ? '1' : '0');
  } catch {
    /* ignore */
  }
}

interface AdminContextValue {
  isAdmin: boolean;
  showLogin: boolean;
  loginError: boolean;
  openLogin: () => void;
  closeLogin: () => void;
  submitLogin: (password: string) => void;
  logout: () => void;
}

const AdminContext = createContext<AdminContextValue | null>(null);

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(() => loadAdmin());
  const [showLogin, setShowLogin] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const submitLogin = useCallback((password: string) => {
    if (password === ADMIN_PASSWORD) {
      saveAdmin(true);
      setIsAdmin(true);
      setShowLogin(false);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  }, []);

  const logout = useCallback(() => {
    saveAdmin(false);
    setIsAdmin(false);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        if (!isAdmin) {
          setShowLogin(true);
          setLoginError(false);
        }
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isAdmin]);

  const value: AdminContextValue = {
    isAdmin,
    showLogin,
    loginError,
    openLogin: () => {
      setShowLogin(true);
      setLoginError(false);
    },
    closeLogin: () => setShowLogin(false),
    submitLogin,
    logout,
  };

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
}

export function useAdmin() {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error('useAdmin must be used within AdminProvider');
  return ctx;
}
