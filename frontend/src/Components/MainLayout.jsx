import React from "react";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import { Outlet } from "react-router-dom";
import CartTab from "./CartTab";
import { useSelector } from "react-redux";

export default function MainLayout({ children }) {
  const statusTabCart = useSelector((store) => store.cart.statusTab);

  return (
    <div className="">
      {/* <main className="min-h-[calc(100vh-120px)] w-full bg-slate-100"> */}
      <main
        className={`w-full min-h-screen transform transition-transform duration-700 ${
          statusTabCart === false ? "" : "-translate-x-96"
        }`}
      >
        <HeaderComponent />
        <Outlet />
        <FooterComponent />
      </main>
      <CartTab />
    </div>
  );
}
