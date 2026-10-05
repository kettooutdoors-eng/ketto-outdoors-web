import { Suspense, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { CartDrawer } from './CartDrawer';
import { MobileMenu, MenuFab } from './MobileMenu';
import { ErrorBoundary } from '../ErrorBoundary';
import { CookieConsentBanner } from '../CookieConsentBanner';
import { WelcomePopup } from '../WelcomePopup';

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div style={{ minHeight: '100%' }}>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Nav onMenuOpen={() => setMenuOpen(true)} />
      <div style={{ height: 4, background: 'var(--rust)' }} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main id="main-content" tabIndex={-1} style={{ outline: 'none' }}>
        <ErrorBoundary key={location.pathname}>
          <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
      <CartDrawer />
      <MenuFab onOpen={() => setMenuOpen(true)} />
      <WelcomePopup />
      <CookieConsentBanner />
    </div>
  );
}
