import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
// import AboutPage from "./pages/AboutPage";
import CollectionsPage from "./pages/CollectionsPage";
import ContactPage from "./Pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ProtectedPage from "./components/ProtectedPage";
import Spinner from "./components/Spinner";
import { useSelector } from "react-redux";
import SellerProfilePage from "./pages/SellerProfilePage";
import AdminDashboard from "./pages/adminDashboard/AdminDashboard";

function App() {
  const { loading } = useSelector((state) => state.loaders);

  return (
    <div className="">
      {loading && <Spinner />}
      <BrowserRouter>
        <Routes>
          {/* unprotected routes */}
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
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
