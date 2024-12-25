import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Cart from "./pages/Cart";
import CollectionsPage from "./pages/CollectionsPage";
import ContactPage from "./Pages/ContactPage";
import OrdersPage from "./pages/OrdersPage";
import PlaceOrder from "./pages/PlaceOrder";
import ProductPage from "./pages/ProductPage";
import { ToastContainer, toast } from "react-toastify";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ProtectedPage from "./components/ProtectedPage";
import Spinner from "./components/Spinner";
import { useSelector } from "react-redux";
import SellerProfilePage from "./pages/SellerProfilePage";

function App() {
  const { loading } = useSelector((state) => state.loaders);

  return (
    <div className="">
      {loading && <Spinner />}
      <BrowserRouter>
        <Routes>
          {/* unprotected routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/product/:productId" element={<ProductPage />} />

          {/* protected routes */}
          <Route
            path="/seller-profile"
            element={
              <ProtectedPage>
                <SellerProfilePage />
              </ProtectedPage>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
