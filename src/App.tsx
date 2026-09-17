import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './state/CartContext';
import { AdminProvider } from './state/AdminContext';
import { InventoryProvider } from './state/InventoryContext';
import { FeatureFlagsProvider } from './state/FeatureFlagsContext';
import { SiteLayout } from './components/layout/SiteLayout';
import { UsedGearGate } from './components/UsedGearGate';

import Home from './pages/Home';
const Kits = lazy(() => import('./pages/Kits'));
const Kit = lazy(() => import('./pages/Kit'));
const BitingNow = lazy(() => import('./pages/BitingNow'));
const GearByState = lazy(() => import('./pages/GearByState'));
const UsedGear = lazy(() => import('./pages/UsedGear'));
const TradeIn = lazy(() => import('./pages/TradeIn'));
// PHASE 2 - Upgrade Credit program (rod & reel combo trade-in), disabled until launch is
// stable. The page is fully built at src/pages/UpgradeCredit.tsx — uncomment this import
// and the matching <Route> below, then add nav/footer links, when ready to switch it on.
// const UpgradeCredit = lazy(() => import('./pages/UpgradeCredit'));
const Shop = lazy(() => import('./pages/Shop'));
const ProductPage = lazy(() => import('./pages/Product'));
const NewToFishing = lazy(() => import('./pages/NewToFishing'));
const BlogIndex = lazy(() => import('./pages/blog/BlogIndex'));
const BlogCategory = lazy(() => import('./pages/blog/BlogCategory'));
const BlogArticlePage = lazy(() => import('./pages/blog/BlogArticlePage'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Orders = lazy(() => import('./pages/Orders'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Faq = lazy(() => import('./pages/Faq'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Cookies = lazy(() => import('./pages/Cookies'));
const Terms = lazy(() => import('./pages/Terms'));
const ShippingReturns = lazy(() => import('./pages/ShippingReturns'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AdminProvider>
        <InventoryProvider>
          <FeatureFlagsProvider>
            <CartProvider>
              <Routes>
                <Route element={<SiteLayout />}>
                  <Route index element={<Home />} />
                  <Route path="kits" element={<Kits />} />
                  <Route path="kits/:slug" element={<Kit />} />
                  <Route path="biting-now" element={<BitingNow />} />
                  <Route path="gear-by-state" element={<GearByState />} />
                  <Route path="used-gear" element={<UsedGearGate><UsedGear /></UsedGearGate>} />
                  <Route path="trade-in" element={<UsedGearGate><TradeIn /></UsedGearGate>} />
                  {/* PHASE 2 - Upgrade Credit program, disabled until launch is stable. See src/pages/UpgradeCredit.tsx */}
                  {/* <Route path="upgrade-credit" element={<UpgradeCredit />} /> */}
                  <Route path="shop" element={<Shop />} />
                  <Route path="product/:id" element={<ProductPage />} />
                  <Route path="new-to-fishing" element={<NewToFishing />} />
                  <Route path="blog" element={<BlogIndex />} />
                  <Route path="blog/:category" element={<BlogCategory />} />
                  <Route path="blog/:category/:slug" element={<BlogArticlePage />} />
                  <Route path="checkout" element={<Checkout />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="about" element={<About />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="faq" element={<Faq />} />
                  <Route path="privacy" element={<Privacy />} />
                  <Route path="cookies" element={<Cookies />} />
                  <Route path="terms" element={<Terms />} />
                  <Route path="shipping-returns" element={<ShippingReturns />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </CartProvider>
          </FeatureFlagsProvider>
        </InventoryProvider>
      </AdminProvider>
    </BrowserRouter>
  );
}

export default App;
