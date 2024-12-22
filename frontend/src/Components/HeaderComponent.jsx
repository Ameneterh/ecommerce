import React, { useContext, useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/shopContext";

export default function HeaderComponent() {
  const [visible, setVisible] = useState(false);
  const { setShowSearch } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-5 px-2 font-medium sticky top-0 z-40 text-[12px] bg-white border-b">
      <Link to="/">
        <img src={assets.nav_img} className="w-36 sm:w-56" />
      </Link>

      {/* links */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-800">
        <NavLink to="/" className={`flex flex-col items-center`}>
          <p>Home</p>
          <hr className="w-full border-none h-[1.5px] bg-gray-800 hidden" />
        </NavLink>
        <NavLink to="/collections" className={`flex flex-col items-center`}>
          <p>Collection</p>
          <hr className="w-full border-none h-[1.5px] bg-gray-800 hidden" />
        </NavLink>
        <NavLink to="/about" className={`flex flex-col items-center`}>
          <p>About</p>
          <hr className="w-full border-none h-[1.5px] bg-gray-800 hidden" />
        </NavLink>
        <NavLink to="/contact" className={`flex flex-col items-center`}>
          <p>Contact</p>
          <hr className="w-full border-none h-[1.5px] bg-gray-800 hidden" />
        </NavLink>
      </ul>

      {/* user login, search, and cart */}
      <div className="flex items-center gap-3 sm:gap-6">
        <FaSearch
          onClick={() => setShowSearch(true)}
          className="text-xl cursor-pointer"
        />

        <div className="group relative">
          <img src="./site_logo.png" className="w-8 cursor-pointer" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-3 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black p-1 hover:bg-slate-200 rounded">
                Profile
              </p>
              <p className="cursor-pointer hover:text-black p-1 hover:bg-slate-200 rounded">
                Orders
              </p>
              <p className="cursor-pointer hover:text-black p-1 hover:bg-slate-200 rounded">
                Logout
              </p>
            </div>
          </div>
        </div>

        <Link to={"/cart"} className="relative">
          <FaShoppingCart className="text-xl text-black" />
          <p className="absolute -right-2 -top-2 w-4 text-center leading-4 bg-red-700 text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>

        <FiMenu
          className="text-xl cursor-pointer sm:hidden"
          onClick={() => setVisible(true)}
        />
      </div>

      {/* sidebar menu for small screens */}
      <div
        className={`absolute top-0 right-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer bg-gray-200"
          >
            <MdArrowForwardIos className="rotate-180" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collections"
          >
            Collections
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}
