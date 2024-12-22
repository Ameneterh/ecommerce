import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import ShopContextdProvider from "./context/shopContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShopContextdProvider>
      <App />
    </ShopContextdProvider>
  </BrowserRouter>
);
