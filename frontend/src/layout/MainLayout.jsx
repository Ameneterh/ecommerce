import React from "react";
import HeaderComponent from "../Components/HeaderComponent";
import FooterComponent from "../Components/FooterComponent";
// import SearchBar from "../components/SearchBar";

export default function MainLayout({ children }) {
  return (
    <div className="sm:px-[5vw] md:px-[6vw] lg:px-[7vw] min-h-[80svh] sm:mx-auto">
      <HeaderComponent />
      {/* <SearchBar /> */}
      <main className="px-4 sm:py-14">{children}</main>
      {window.location.pathname === "/authentication" ? (
        <></>
      ) : (
        <FooterComponent />
      )}
    </div>
  );
}
