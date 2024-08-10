import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopNavBar from './components/TopNavBar';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetails';
import CheckoutPage from './pages/CheckoutPage';
import CartPage from './pages/CartPage';
import PaymentConfirmationPage from './pages/PaymentConfirmationPage';
import { CartProvider } from './context';

import './index.css';

function App() {
  return (
    <BrowserRouter>
        <CartProvider>
            <TopNavBar/>
            <Header/> 
              <Routes>
                  <Route path="/" element={<HomePage />}/>
                  <Route path="/product-details/:id" element={<ProductDetails />}/>
                  <Route path="/checkout" element={<CheckoutPage />}/>
                  <Route path="/cart" element={<CartPage />}/>
                  <Route path="/payment-confirmation" element={<PaymentConfirmationPage />}/>
              </Routes>
            <Footer/>
        </CartProvider>
    </BrowserRouter>
  );
}

export default App;
