import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import ShopContextdProvider from "./context/shopContext.jsx";
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ShopContextdProvider>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: "#002D62",
              colorPrimaryHover: "#0066b2",
              borderRadius: "3px",
            },
          },

          token: {
            borderRadius: "3px",
            colorPrimary: "#002D62",
          },
        }}
      >
        <App />
      </ConfigProvider>
    </ShopContextdProvider>
  </Provider>
);
