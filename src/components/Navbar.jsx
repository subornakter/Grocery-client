"use client";

import { useState, useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AuthContext } from "../app/context/AuthContext/page.jsx";
import { HiMenu, HiX } from "react-icons/hi";
import { FaPlus, FaBox } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";

export default function Navbar() {
  const { user, signOutUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const pathname = usePathname();
  const isActive = (route) =>
    pathname === route
      ? "text-green-600 font-semibold"
      : "text-gray-700 hover:text-green-600";

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow">

      {/* ⭐ 3 Column Layout → Logo Left, Menu Center, Profile Right */}
      <div className="grid items-center grid-cols-3 px-4 py-3 mx-auto max-w-7xl">

        {/* LEFT → Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img
              src="https://i.ibb.co.com/BH06FnbT/logo.webp"
              alt="logo"
              className="w-auto h-10"
            />
          </Link>
        </div>

        {/* CENTER → Menu Items */}
        <div className="items-center justify-center hidden gap-6 md:flex">
          <Link href="/" className={isActive("/")}>Home</Link>
          <Link href="/shop" className={isActive("/shop")}>Shop</Link>
          <Link href="/about" className={isActive("/about")}>About</Link>
          <Link href="/offers" className={isActive("/offers")}>Offers</Link>
          <Link href="/contact" className={isActive("/contact")}>Contact</Link>
        </div>

        {/* RIGHT → Profile + Logout */}
        <div className="items-center justify-end hidden gap-4 md:flex">
          {!user ? (
            <>
              <Link
                href="/Login"
                className={`px-4 py-2 bg-[#78C841] text-white rounded-md hover:bg-green-700 ${isActive("/Login")}`}
              >
                Login
              </Link>

              <Link
                href="/Register"
                className={`px-4 py-2 border border-[#78C841] text-[#78C841] rounded-md hover:bg-green-50 ${isActive("/Register")}`}
              >
                Register
              </Link>
            </>
          ) : (
            <div className="relative flex items-center gap-4">

              {/* Profile Image + Arrow (ADDED) */}
              <button
                onClick={() => setDropdown(!dropdown)}
                className="flex items-center gap-2"
              >
                <img
                  src={user?.photoURL || "https://via.placeholder.com/40"}
                  className="w-10 h-10 border rounded-full cursor-pointer"
                  alt="user"
                />

                {/* ▼ Arrow Icon */}
                <span
                  className={`transition-transform duration-300 text-xl ${
                    dropdown ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* Logout Button */}
              <button
                onClick={signOutUser}
                className="px-4 py-2 bg-[#78C841] text-white rounded-md flex items-center gap-2 hover:bg-green-600"
              >
                <IoLogOut /> Logout
              </button>

              {/* Dropdown */}
              {dropdown && (
                <div className="absolute right-0 z-50 w-48 p-3 bg-white rounded-md shadow top-14">
                  <p className="font-bold">{user.displayName}</p>
                  <p className="mb-2 text-xs">{user.email}</p>

                  <Link
                    href="/AddProduct"
                    className="flex items-center block gap-2 py-2 rounded hover:bg-gray-100"
                  >
                    <FaPlus /> Add Product
                  </Link>

                  <Link
                    href="/ManageProducts"
                    className="flex items-center block gap-2 py-2 rounded hover:bg-gray-100"
                  >
                    <FaBox /> Manage Products
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="text-3xl md:hidden justify-self-end"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="px-4 pb-4 bg-white md:hidden">
          <Link href="/" className={`block py-2 ${isActive("/")}`}>Home</Link>
          <Link href="/shop" className={`block py-2 ${isActive("/shop")}`}>Shop</Link>
          <Link href="/about" className={`block py-2 ${isActive("/about")}`}>About</Link>
          <Link href="/offers" className={`block py-2 ${isActive("/offers")}`}>Offers</Link>
          <Link href="/contact" className={`block py-2 ${isActive("/contact")}`}>Contact</Link>

          {!user ? (
            <>
              <Link
                href="/Login"
                className={`block mt-3 py-2 px-3 bg-[#78C841] text-white rounded-md ${isActive("/Login")}`}
              >
                Login
              </Link>

              <Link
                href="/Register"
                className={`block mt-2 py-2 px-3 border border-[#78C841] text-[#78C841] rounded-md ${isActive("/Register")}`}
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <div className="pt-3 mt-3 border-t">
                <p className="font-bold">{user.displayName}</p>
                <p className="text-xs">{user.email}</p>
              </div>

              <Link href="/AddProduct" className="block py-2">Add Product</Link>
              <Link href="/ManageProducts" className="block py-2">Manage Products</Link>

              <button
                onClick={signOutUser}
                className="w-full bg-[#78C841] text-white py-2 rounded mt-2"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

