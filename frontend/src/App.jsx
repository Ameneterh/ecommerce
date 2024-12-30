import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import CollectionsPage from "./pages/CollectionsPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import ProtectedPage from "./components/ProtectedPage.jsx";
import Spinner from "./components/Spinner.jsx";
import SellerProfilePage from "./pages/SellerProfilePage.jsx";
import AdminDashboard from "./pages/adminDashboard/AdminDashboard.jsx";
import { useSelector } from "react-redux";

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
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
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
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedPage>
                <AdminDashboard />
              </ProtectedPage>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
