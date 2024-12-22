import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { TbCurrencyNaira } from "react-icons/tb";

export const ShopContext = createContext();

const ShopContextdProvider = (props) => {
  const currency = <TbCurrencyNaira className="text-xl" />;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);

  const value = {
    products,
    currency,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextdProvider;
