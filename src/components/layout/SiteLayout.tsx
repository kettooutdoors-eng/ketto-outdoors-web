import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { CartDrawer } from './CartDrawer';
import { MobileMenu, MenuFab } from './MobileMenu';
import { AdminLoginModal } from './AdminLoginModal';
import { RoughFilterDefs } from '../ui/RoughFilterDefs';
import { RopeDivider } from '../ui/Misc';

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div style={{ minHeight: '100%' }}>
      <RoughFilterDefs />
      <Nav />
      <RopeDivider />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>
        <Outlet />
      </main>
      <RopeDivider />
      <Footer />
      <CartDrawer />
      <AdminLoginModal />
      <MenuFab onOpen={() => setMenuOpen(true)} />
    </div>
  );
}
