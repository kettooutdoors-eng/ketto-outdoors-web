import { Suspense, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { CartDrawer } from './CartDrawer';
import { MobileMenu, MenuFab } from './MobileMenu';
import { AdminLoginModal } from './AdminLoginModal';
import { RoughFilterDefs } from '../ui/RoughFilterDefs';
import { RopeDivider } from '../ui/Misc';
import { ErrorBoundary } from '../ErrorBoundary';
import { CookieConsentBanner } from '../CookieConsentBanner';

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
      <RoughFilterDefs />
      <Nav onMenuOpen={() => setMenuOpen(true)} />
      <RopeDivider />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main id="main-content" tabIndex={-1} style={{ outline: 'none' }}>
        <ErrorBoundary key={location.pathname}>
          <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </main>
      <RopeDivider />
      <Footer />
      <CartDrawer />
      <AdminLoginModal />
      <MenuFab onOpen={() => setMenuOpen(true)} />
      <CookieConsentBanner />
    </div>
  );
}
