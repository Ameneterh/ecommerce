import React, { useState, useEffect } from "react";
import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { HiViewGrid } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { HiCog } from "react-icons/hi2";
import { FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import { GrSearch } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatusTab } from "../store/cart";

export default function HeaderComponent() {
  const path = useLocation().pathname;
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  });

  const handleOpenCartTab = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <Navbar fluid className="md:px-14 py-4 sticky top-0 shadow-md z-50">
      <Navbar.Brand href="/" className="flex gap-1">
        <img
          src="/site_logo.png"
          className="h-10 sm:h-12 rounded-full"
          alt="site logo"
        />
        <span className="hidden lg:inline self-center whitespace-nowrap text-4xl font-bold dark:text-white">
          dress<span className="text-red-400">CODE</span>
        </span>
      </Navbar.Brand>

      {/* search bar */}
      <Button
        as="div"
        className="md:hidden h-8 w-8 rounded-full flex items-center justify-center bg-transparent cursor-pointer hover:bg-slate-100"
      >
        <GrSearch className="text-xl text-black font-bold" />
      </Button>
      <div className="text-sm text-slate-500 hidden lg:flex items-center rounded-full focus-within:shadow-md">
        <input
          placeholder="enter search term ..."
          className="border h-9 rounded-l-full focus:outline-none p-2"
        />
        <div className="bg-red-600 hover:bg-red-700 w-10 h-9 rounded-r-full flex items-center justify-center cursor-pointer">
          <GrSearch className="text-xl text-white font-bold" />
        </div>
      </div>

      {/* drop down */}
      <div className="flex gap-2 items-center md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://cdn.pixabay.com/photo/2014/03/25/16/54/user-297566_640.png"
              rounded
              className="bg-gray-200 rounded-full"
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">User One</span>
            <span className="block truncate text-sm font-medium">
              user1@company.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item icon={CgProfile}>Profile</Dropdown.Item>
          <Dropdown.Item icon={HiViewGrid}>Dashboard</Dropdown.Item>
          <Dropdown.Item icon={HiCog}>Add Listing</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item icon={FaSignOutAlt}>Sign Out</Dropdown.Item>
        </Dropdown>
        <div
          className="h-8 w-8 rounded-full flex items-center justify-center relative cursor-pointer"
          onClick={handleOpenCartTab}
        >
          <FaShoppingCart className="text-2xl" />
          <div className="bg-red-600 text-white h-4 w-4 text-xs rounded-full flex items-center justify-center absolute -top-1 -right-1 p-1">
            {totalQuantity}
          </div>
        </div>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as="div">
          <Link to="/">HOME</Link>
          {path === "/" ? (
            <hr className="border-[1px] border-cyan-700" />
          ) : (
            <></>
          )}
        </Navbar.Link>
        <Navbar.Link active={path === "/shop"} as="div">
          <Link to="/shop">SHOP</Link>
          {path === "/shop" ? (
            <hr className="border-[1px] border-cyan-700" />
          ) : (
            <></>
          )}
        </Navbar.Link>
        <Navbar.Link active={path === "/promotion"} as="div">
          <Link to="/promotion">PROMOTION</Link>
          {path === "/promotion" ? (
            <hr className="border-[1px] border-cyan-700" />
          ) : (
            <></>
          )}
        </Navbar.Link>
        <Navbar.Link active={path === "/blog"} as="div">
          <Link to="/blog">BLOG</Link>
          {path === "/blog" ? (
            <hr className="border-[1px] border-cyan-700" />
          ) : (
            <></>
          )}
        </Navbar.Link>
        <Navbar.Link active={path === "/contact"} as="div">
          <Link to="/contact">CONTACT</Link>
          {path === "/contact" ? (
            <hr className="border-[1px] border-cyan-700" />
          ) : (
            <></>
          )}
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
