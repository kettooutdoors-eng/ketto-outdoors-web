import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './state/CartContext';
import { AdminProvider } from './state/AdminContext';
import { InventoryProvider } from './state/InventoryContext';
import { SiteLayout } from './components/layout/SiteLayout';

import Home from './pages/Home';
import Kits from './pages/Kits';
import Kit from './pages/Kit';
import BitingNow from './pages/BitingNow';
import Shop from './pages/Shop';
import ProductPage from './pages/Product';
import NewToFishing from './pages/NewToFishing';
import BlogIndex from './pages/blog/BlogIndex';
import BlogCategory from './pages/blog/BlogCategory';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import ShippingReturns from './pages/ShippingReturns';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AdminProvider>
        <InventoryProvider>
          <CartProvider>
            <Routes>
              <Route element={<SiteLayout />}>
                <Route index element={<Home />} />
                <Route path="kits" element={<Kits />} />
                <Route path="kits/:slug" element={<Kit />} />
                <Route path="biting-now" element={<BitingNow />} />
                <Route path="shop" element={<Shop />} />
                <Route path="product/:id" element={<ProductPage />} />
                <Route path="new-to-fishing" element={<NewToFishing />} />
                <Route path="blog" element={<BlogIndex />} />
                <Route path="blog/:category" element={<BlogCategory />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="orders" element={<Orders />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="faq" element={<Faq />} />
                <Route path="privacy" element={<Privacy />} />
                <Route path="terms" element={<Terms />} />
                <Route path="shipping-returns" element={<ShippingReturns />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </CartProvider>
        </InventoryProvider>
      </AdminProvider>
    </BrowserRouter>
  );
}

export default App;
