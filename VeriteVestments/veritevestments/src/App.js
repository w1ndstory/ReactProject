import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import CardProduct from "./pages/cardProduct";
import Category from "./pages/category";
import DeliveryPayment from "./pages/delivery_payment";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import ProductDetails from "./pages/catalog_details/[id]";
import Layout from "./components/layout/layout";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardProduct" element={<CardProduct />} />
          <Route path="/category" element={<Category />} />
          <Route path="/delivery_payment" element={<DeliveryPayment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
