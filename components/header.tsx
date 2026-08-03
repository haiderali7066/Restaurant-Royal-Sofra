"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Search, 
  MapPin, 
  ShoppingCart, 
  User, 
  Store, 
  LayoutGrid, 
  Phone, 
  Navigation, 
  X
} from "lucide-react";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [deliveryMode, setDeliveryMode] = useState<"delivery" | "pickup">("delivery");

  // Prevent background scrolling when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isSidebarOpen]);

  return (
    <>
      {/* ======================= */}
      {/* TOP NAVBAR COMPONENT    */}
      {/* ======================= */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-40 border-b border-gray-100">
        <div className="max-w-[1600px] mx-auto px-4 py-3 flex flex-col md:flex-row items-center gap-4">
          
          {/* Top Row for Mobile / Left Section for Desktop */}
          <div className="flex items-center justify-between w-full md:w-auto gap-4">
            {/* Custom Hamburger Menu Icon */}
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="flex flex-col gap-1.5 p-2 focus:outline-none group"
              aria-label="Open Menu"
            >
              <span className="w-6 h-[2px] bg-[#F04E23] transition-all group-hover:w-7"></span>
              <span className="w-5 h-[2px] bg-[#F04E23] transition-all group-hover:w-7"></span>
              <span className="w-4 h-[2px] bg-[#F04E23] transition-all group-hover:w-7"></span>
            </button>

            {/* Brand Logo & Name */}
            <Link href="/" className="flex items-center gap-2 md:mr-2">
              {/* IMAGE PLACEHOLDER FOR LOGO */}
              <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full border border-yellow-200 shadow-sm shrink-0">
                <Image 
                  src="/logo-rs.jpeg" // Replace with your actual Royal Sofra Logo
                  alt="Royal Sofra Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl md:text-2xl font-black text-[#3d2514] tracking-tight">
                  Royal Sofra
                </span>
              </div>
            </Link>

            {/* Cart Button (Visible on mobile header) */}
            <div className="md:hidden flex items-center gap-2">
              <button className="bg-[#FFCC00] hover:bg-[#e6b800] text-black flex items-center px-3 py-2 rounded-xl font-bold transition-colors relative shadow-sm">
                <ShoppingCart size={20} strokeWidth={2.5} />
                <span className="absolute -top-1.5 -right-1.5 bg-[#F04E23] text-white rounded-full w-5 h-5 text-[10px] font-bold flex items-center justify-center border-2 border-white">
                  0
                </span>
              </button>
            </div>
          </div>

          {/* Center Section: Toggles & Search */}
          <div className="flex flex-col md:flex-row flex-1 w-full gap-3 md:gap-4 items-center">
            {/* Delivery / Pick-up Toggle */}
            <div className="flex bg-neutral-100 p-1 rounded-xl w-full md:w-auto shrink-0 shadow-inner">
              <button 
                onClick={() => setDeliveryMode("delivery")}
                className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2 rounded-lg text-sm font-bold transition-all ${
                  deliveryMode === "delivery" ? "bg-[#FFCC00] text-black shadow-sm" : "text-neutral-500 hover:text-neutral-700"
                }`}
              >
                <MapPin size={18} strokeWidth={deliveryMode === "delivery" ? 2.5 : 2} />
                DELIVERY
              </button>
              <button 
                onClick={() => setDeliveryMode("pickup")}
                className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2 rounded-lg text-sm font-bold transition-all ${
                  deliveryMode === "pickup" ? "bg-[#FFCC00] text-black shadow-sm" : "text-neutral-500 hover:text-neutral-700"
                }`}
              >
                <Store size={18} strokeWidth={deliveryMode === "pickup" ? 2.5 : 2} />
                PICK-UP
              </button>
            </div>

            {/* Global Search Bar */}
            <div className="flex-1 w-full flex items-center bg-neutral-100 rounded-xl px-4 py-2.5 focus-within:ring-2 focus-within:ring-[#FFCC00] transition-shadow">
              <Search size={20} className="text-neutral-400 shrink-0" />
              <input 
                type="text" 
                placeholder="Find in Royal Sofra..." 
                className="bg-transparent border-none outline-none w-full ml-3 text-neutral-800 placeholder-neutral-400 text-sm font-medium"
              />
            </div>

            {/* Location Input (Desktop Only) */}
            <div className="hidden lg:flex flex-1 max-w-[280px] items-center bg-white border-2 border-neutral-100 rounded-xl px-4 py-2.5 focus-within:border-neutral-300 transition-colors">
              <Navigation size={18} className="text-neutral-300 shrink-0" />
              <input 
                type="text" 
                placeholder="Enter Delivery Location >" 
                className="bg-transparent border-none outline-none w-full ml-3 text-neutral-800 placeholder-neutral-400 text-sm font-medium truncate"
              />
            </div>
          </div>

          {/* Right Section: Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button className="bg-[#FFCC00] hover:bg-[#e6b800] text-black flex items-center gap-2 px-5 py-2.5 rounded-full font-extrabold transition-colors relative shadow-sm">
              <ShoppingCart size={20} strokeWidth={2.5} />
              CART
              <span className="absolute -top-2 -right-2 bg-[#F04E23] text-white rounded-full w-6 h-6 text-xs font-bold flex items-center justify-center border-2 border-white shadow-sm">
                0
              </span>
            </button>
            <button className="bg-[#FFCC00] hover:bg-[#e6b800] text-black flex items-center gap-2 px-5 py-2.5 rounded-full font-extrabold transition-colors shadow-sm">
              <User size={20} strokeWidth={2.5} />
              LOGIN
            </button>
          </div>
        </div>
      </header>

      {/* ======================= */}
      {/* SIDEBAR DRAWER MENU     */}
      {/* ======================= */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      <aside 
        className={`fixed top-0 left-0 h-[100dvh] w-[85%] max-w-[340px] bg-white z-50 transform transition-transform duration-300 ease-out flex flex-col shadow-2xl ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button 
          onClick={() => setIsSidebarOpen(false)}
          className="absolute top-4 right-4 p-2 bg-neutral-100 rounded-full text-neutral-600 hover:bg-neutral-200 lg:hidden z-10"
        >
          <X size={20} />
        </button>

        <div className="flex-1 overflow-y-auto p-6 md:p-8 flex flex-col">
          {/* User Profile Area */}
          <div className="flex items-center gap-4 mb-6 pt-4">
            <div className="w-14 h-14 bg-[#FFCC00] rounded-full flex items-center justify-center border-2 border-black shrink-0">
              <User size={28} strokeWidth={2} className="text-black" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-neutral-600 font-medium">Login to explore</span>
              <span className="text-lg font-black text-neutral-900 tracking-tight">World of flavors</span>
            </div>
          </div>

          <button className="w-fit border border-neutral-900 text-neutral-900 rounded-xl px-8 py-2.5 text-sm font-bold tracking-wide hover:bg-[#FFCC00] hover:border-[#FFCC00] transition-colors mb-8">
            LOGIN
          </button>

          <hr className="border-neutral-100 mb-6" />

          {/* Main Navigation Links */}
          <ul className="flex flex-col space-y-6 mb-8">
            <li>
              <Link href="/menu" className="flex items-center gap-4 text-neutral-800 font-bold hover:text-[#F04E23] transition-colors group">
                <LayoutGrid size={22} className="text-neutral-700 group-hover:text-[#F04E23] transition-colors" />
                Explore Menu
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-4 text-neutral-800 font-bold hover:text-[#F04E23] transition-colors group">
                <Store size={22} className="text-neutral-700 group-hover:text-[#F04E23] transition-colors" />
                Branch Locator
              </Link>
            </li>
          </ul>

          <hr className="border-neutral-100 mb-6" />

          {/* Secondary Links */}
          <ul className="flex flex-col space-y-5">
            <li>
              <Link href="#" className="text-neutral-800 font-bold hover:text-[#F04E23] transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="text-neutral-800 font-bold hover:text-[#F04E23] transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Bottom Banner (Hotline) */}
        <div className="mt-auto bg-[#FFCC00] p-5 flex items-center justify-between shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col">
            <span className="font-black text-black text-lg tracking-tight uppercase">
              Royal Hotline
            </span>
            <span className="text-[10px] font-bold text-black/70 tracking-wider">
              Where Every Meal is Served Like Royalty
            </span>
          </div>
          
          <a href="tel:111-222-333" className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-[#FFCC00] hover:scale-105 transition-transform shadow-lg shrink-0">
            <Phone size={22} strokeWidth={2.5} className="fill-current" />
          </a>
        </div>
      </aside>
    </>
  );
}