import { useState } from "react";
import { Button } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AuthenticationPage from "./pages/AuthenticationPage";
import Cart from "./pages/Cart";
import CollectionsPage from "./pages/CollectionsPage";
import ContactPage from "./Pages/ContactPage";
import OrdersPage from "./pages/OrdersPage";
import PlaceOrder from "./pages/PlaceOrder";
import ProductPage from "./pages/ProductPage";
import HeaderComponent from "./Components/HeaderComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      {/* <HeaderComponent /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/authentication" element={<AuthenticationPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
