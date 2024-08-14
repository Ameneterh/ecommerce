import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from "./Components/HeaderComponent";
import HomePage from "./Pages/HomePage";
import ShopPage from "./Pages/ShopPage";
import PromotionPage from "./Pages/PromotionPage";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";
import MainLayout from "./Components/MainLayout";
import ProductDetail from "./Pages/ProductDetail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/:slug" element={<ProductDetail />} />
          <Route path="/promotion" element={<PromotionPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
