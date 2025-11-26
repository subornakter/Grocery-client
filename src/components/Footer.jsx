"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="relative mt-10">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover opacity-50 bg-center"
        style={{
          backgroundImage: "url('https://i.ibb.co/mrDHwTmR/top-view-bunch-fresh-food-donation.jpg')",
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto text-white px-6 py-14 grid md:grid-cols-4 gap-10">
        {/* ===== Left Section ===== */}
        <div>
          {/* Logo */}
          <div className="mb-5">
            <img
              src="https://i.ibb.co/BH06FnbT/logo.webp"
              width={150}
              height={50}
              alt="groca-logo"
            />
          </div>

          {/* Bangladesh Address */}
          <p className="flex items-center gap-2 opacity-90 mb-3">
            <MdLocationOn /> House 12, Road 5, Dhanmondi, Dhaka 1209, Bangladesh
          </p>

          <p className="flex items-center gap-2 opacity-90 mb-2">
            <MdPhone /> +880 1711-223344
          </p>

          <p className="flex items-center gap-2 opacity-90 mb-5">
            <MdEmail /> support@grocerybd.com
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl">
            <Link href="#"><FaFacebook /></Link>
            <Link href="#"><FaInstagram /></Link>
            <Link href="#"><FaPinterest /></Link>
            <Link href="#"><FaTwitter /></Link>
          </div>
        </div>

        {/* ===== Help Section ===== */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Help</h3>
          <ul className="space-y-2 opacity-90">
            <li>› Search</li>
            <li>› Help</li>
            <li>› Information</li>
            <li>› Privacy Policy</li>
            <li>› Shipping Information</li>
          </ul>
        </div>

        {/* ===== Support Section ===== */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-2 opacity-90">
            <li>› Contact</li>
            <li>› About Us</li>
            <li>› Careers</li>
            <li>› Refund & Returns</li>
            <li>› Deliveries</li>
          </ul>
        </div>

        {/* ===== Information Section ===== */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Information</h3>
          <ul className="space-y-2 opacity-90">
            <li>› Search Terms</li>
            <li>› Advanced Search</li>
            <li>› Helps & FAQs</li>
            <li>› Store Location</li>
            <li>› Orders & Returns</li>
          </ul>
        </div>
      </div>
       <div className="border-t border-white/20 mt-2 p-6 text-center text-gray-300 text-sm relative z-10">
        Copyright © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-white">Groca Grocery Mart</span> |
        All Rights Reserved
      </div>
    </footer>
  );
}
