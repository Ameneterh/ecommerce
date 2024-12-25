import React, { useContext, useEffect, useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { assets } from "../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import { GetCurrentUser } from "../apiCalls/users";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/userSlice.js";
import { setLoader } from "../redux/loaderSlice";
import { Button } from "antd";

export default function HeaderComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const { user } = useSelector((state) => state.users);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  const validateToken = async () => {
    try {
      dispatch(setLoader(true));
      const response = await GetCurrentUser();
      dispatch(setLoader(false));

      if (response.success) {
        dispatch(setUser(response.data));
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      validateToken();
    }
  }, []);

  const handleLogout = async () => {
    localStorage.removeItem("token");
    // navigate("/login");
  };

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

        {user ? (
          <div className="group relative">
            <img src={user.avatar} className="w-10 cursor-pointer" />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 bg-gray-50 overflow-hidden">
              <div className="p-2 font-normal">
                <p>{user.fullname}</p>
                <p className="text-blue-600">@{user.email}</p>
              </div>
              <div className="flex flex-col gap-2 w-full p-1 bg-gray-700 text-white rounded">
                <p
                  onClick={() => navigate("/seller-profile")}
                  className="cursor-pointer hover:text-black p-1 hover:bg-slate-200"
                >
                  Profile
                </p>
                <p
                  onClick={() => handleLogout()}
                  className="cursor-pointer hover:text-black p-1 hover:bg-slate-200"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div
            onClick={() => navigate("/login")}
            className="bg-blue-500 rounded px-4 py-1 text-lg text-white cursor-pointer"
          >
            Login
          </div>
        )}

        {/* <Link to={"/cart"} className="relative">
          <FaShoppingCart className="text-xl text-black" />
          <p className="absolute -right-2 -top-2 w-4 text-center leading-4 bg-red-700 text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link> */}

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
