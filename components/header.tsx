"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  MapPin, 
  ShoppingCart, 
  User, 
  Store, 
  LayoutGrid, 
  Phone, 
  Navigation, 
  X,
  Info,
  PhoneCall,
  BookOpen,
  ShieldCheck,
  Map
} from "lucide-react";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [deliveryMode, setDeliveryMode] = useState<"delivery" | "pickup">("delivery");
  const [locationText, setLocationText] = useState("Get Current Location");

  // Prevent background scrolling when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isSidebarOpen]);

  // Simulate asking for location
  const handleGetLocation = () => {
    setLocationText("Locating...");
    setTimeout(() => {
      setLocationText("Gulberg III, Lahore"); // Simulated found location
    }, 1500);
  };

  return (
    <>
      {/* ======================= */}
      {/* TOP NAVBAR COMPONENT    */}
      {/* ======================= */}
      <header className="w-full bg-[#FFFFFF] shadow-sm sticky top-0 z-40 border-b border-[#E8DFD3]">
        <div className="max-w-[1600px] mx-auto px-4 py-3 flex flex-col gap-3">
          
          {/* Main Bar */}
          <div className="flex items-center justify-between gap-4">
            
            {/* Left Section: Hamburger & Logo */}
            <div className="flex items-center gap-3 md:gap-4 shrink-0">
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="flex flex-col gap-1.5 p-2 focus:outline-none group rounded-full hover:bg-[#FAF7F2] transition-colors"
                aria-label="Open Menu"
              >
                <span className="w-6 h-[2px] bg-[#2B1B12] transition-all group-hover:w-7 group-hover:bg-[#D4A24C]"></span>
                <span className="w-5 h-[2px] bg-[#2B1B12] transition-all group-hover:w-7 group-hover:bg-[#D4A24C]"></span>
                <span className="w-4 h-[2px] bg-[#2B1B12] transition-all group-hover:w-7 group-hover:bg-[#D4A24C]"></span>
              </button>

              <Link href="/" className="flex items-center gap-2.5">
                <div className="relative w-10 h-10 md:w-11 md:h-11 overflow-hidden rounded-full border border-[#E8DFD3] shadow-sm shrink-0 bg-[#FAF7F2]">
                  <Image 
                    src="/logo-rs.jpeg" // Update path to your actual logo
                    alt="Royal Sofra Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-xl md:text-2xl font-black text-[#2B1B12] tracking-tight">
                    Royal Sofra
                  </span>
                  <span className="text-[10px] font-bold text-[#D4A24C] tracking-widest uppercase mt-0.5">
                    Premium Cuisine
                  </span>
                </div>
              </Link>
            </div>

            {/* Middle Section (Desktop Only) */}
            <div className="hidden lg:flex items-center flex-1 justify-center gap-4 mx-4">
              
              {/* Delivery / Pick-up Toggle */}
              <div className="flex bg-[#FAF7F2] p-1 rounded-full shrink-0 border border-[#E8DFD3]">
                <button 
                  onClick={() => setDeliveryMode("delivery")}
                  className={`flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    deliveryMode === "delivery" 
                      ? "bg-[#D4A24C] text-white shadow-sm" 
                      : "text-[#5C4638] hover:text-[#2B1B12]"
                  }`}
                >
                  <MapPin size={15} />
                  DELIVERY
                </button>
                <button 
                  onClick={() => setDeliveryMode("pickup")}
                  className={`flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    deliveryMode === "pickup" 
                      ? "bg-[#D4A24C] text-white shadow-sm" 
                      : "text-[#5C4638] hover:text-[#2B1B12]"
                  }`}
                >
                  <Store size={15} />
                  PICK-UP
                </button>
              </div>

              {/* Get Current Location Action */}
              <button 
                onClick={handleGetLocation}
                className="flex items-center gap-2 bg-white border border-[#E8DFD3] hover:border-[#D4A24C] hover:bg-[#FAF7F2] rounded-full px-5 py-2 focus-within:border-[#D4A24C] transition-colors shadow-sm max-w-[250px]"
              >
                <Navigation size={16} className="text-[#D4A24C] shrink-0" />
                <span className="text-[#2B1B12] text-sm font-bold truncate">
                  {locationText}
                </span>
              </button>
            </div>

            {/* Right Section: Actions (Desktop) */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <Link 
                href="/menu"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm text-[#2B1B12] hover:bg-[#FAF7F2] border border-transparent hover:border-[#E8DFD3] transition-all shrink-0"
              >
                <LayoutGrid size={18} className="text-[#D4A24C]" />
                Menu
              </Link>
              
              <button className="border border-[#D4A24C] text-[#2B1B12] hover:bg-[#FAF7F2] flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-colors shadow-sm">
                <User size={18} className="text-[#D4A24C]" />
                LOGIN
              </button>
              
              <button className="bg-[#D4A24C] hover:bg-[#B8862B] text-white flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-colors relative shadow-sm">
                <ShoppingCart size={18} />
                CART
                <span className="absolute -top-1.5 -right-1.5 bg-[#2B1B12] text-white rounded-full w-[22px] h-[22px] text-[10px] font-bold flex items-center justify-center border-2 border-white">
                  0
                </span>
              </button>
            </div>

            {/* Mobile Header Right Section (Menu is Main Priority) */}
            <div className="lg:hidden flex items-center gap-2">
              <Link 
                href="/menu" 
                className="bg-[#D4A24C] hover:bg-[#B8862B] text-white flex items-center gap-1.5 px-4 py-2.5 rounded-full font-bold text-xs transition-colors shadow-sm"
              >
                <LayoutGrid size={16} />
                MENU
              </Link>
            </div>
          </div>

          {/* Mobile Secondary Row: Toggles & Location Action */}
          <div className="flex flex-col sm:flex-row gap-2 lg:hidden pt-2">
            
            {/* Delivery / Pick-up Toggle Mobile */}
            <div className="flex bg-[#FAF7F2] p-1 rounded-full w-full sm:w-auto border border-[#E8DFD3]">
              <button 
                onClick={() => setDeliveryMode("delivery")}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-[11px] font-bold transition-all ${
                  deliveryMode === "delivery" 
                    ? "bg-[#D4A24C] text-white shadow-sm" 
                    : "text-[#5C4638]"
                }`}
              >
                <MapPin size={14} />
                DELIVERY
              </button>
              <button 
                onClick={() => setDeliveryMode("pickup")}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-[11px] font-bold transition-all ${
                  deliveryMode === "pickup" 
                    ? "bg-[#D4A24C] text-white shadow-sm" 
                    : "text-[#5C4638]"
                }`}
              >
                <Store size={14} />
                PICK-UP
              </button>
            </div>

            {/* Get Location Button Mobile */}
            <button 
              onClick={handleGetLocation}
              className="flex-1 flex items-center justify-center gap-2 bg-white border border-[#E8DFD3] hover:bg-[#FAF7F2] rounded-full px-4 py-2 transition-colors shadow-sm"
            >
              <Navigation size={14} className="text-[#D4A24C] shrink-0" />
              <span className="text-[#2B1B12] text-xs font-bold truncate">
                {locationText}
              </span>
            </button>
          </div>

        </div>
      </header>

      {/* ======================= */}
      {/* SIDEBAR DRAWER MENU     */}
      {/* ======================= */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      <aside 
        className={`fixed top-0 left-0 h-[100dvh] w-[85%] max-w-[340px] bg-[#FFFDF9] z-50 transform transition-transform duration-300 ease-out flex flex-col shadow-2xl border-r border-[#E8DFD3] ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button 
          onClick={() => setIsSidebarOpen(false)}
          className="absolute top-4 right-4 p-2 bg-[#FAF7F2] text-[#2B1B12] hover:bg-[#E8DFD3] rounded-full transition-colors z-10"
          aria-label="Close menu"
        >
          <X size={18} />
        </button>

        <div className="flex-1 overflow-y-auto p-6 flex flex-col">
          
          {/* User Profile Area */}
          <div className="flex items-center gap-4 mb-6 pt-4">
            <div className="w-12 h-12 bg-[#FAF7F2] rounded-full flex items-center justify-center border border-[#E8DFD3] shrink-0 text-[#D4A24C]">
              <User size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-[#5C4638] font-semibold">Welcome to Royal Sofra</span>
              <span className="text-base font-black text-[#2B1B12]">Taste Royalty</span>
            </div>
          </div>

          <div className="flex gap-3 mb-6">
            <button className="flex-1 bg-[#D4A24C] hover:bg-[#B8862B] text-white rounded-full py-3 text-xs font-bold tracking-wide transition-colors shadow-sm">
              LOGIN
            </button>
            <button className="relative flex items-center justify-center w-12 h-12 bg-[#FAF7F2] border border-[#E8DFD3] hover:bg-[#E8DFD3] text-[#2B1B12] rounded-full transition-colors">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-[#2B1B12] text-white rounded-full w-5 h-5 text-[10px] font-bold flex items-center justify-center border-2 border-[#FFFDF9]">
                0
              </span>
            </button>
          </div>

          <hr className="border-[#E8DFD3] mb-6" />

          {/* Main Navigation Links */}
          <nav className="flex flex-col space-y-2 mb-6">
            <Link 
              href="/menu" 
              onClick={() => setIsSidebarOpen(false)}
              className="flex items-center gap-3 px-3 py-3 rounded-2xl text-[#2B1B12] font-bold hover:bg-[#FAF7F2] hover:text-[#D4A24C] transition-colors group"
            >
              <LayoutGrid size={20} className="text-[#D4A24C]" />
              Explore Menu
            </Link>
            
            <Link 
              href="/about" 
              onClick={() => setIsSidebarOpen(false)}
              className="flex items-center gap-3 px-3 py-3 rounded-2xl text-[#2B1B12] font-bold hover:bg-[#FAF7F2] hover:text-[#D4A24C] transition-colors group"
            >
              <Info size={20} className="text-[#D4A24C]" />
              About Us
            </Link>

            <Link 
              href="/contact" 
              onClick={() => setIsSidebarOpen(false)}
              className="flex items-center gap-3 px-3 py-3 rounded-2xl text-[#2B1B12] font-bold hover:bg-[#FAF7F2] hover:text-[#D4A24C] transition-colors group"
            >
              <PhoneCall size={20} className="text-[#D4A24C]" />
              Contact Us
            </Link>

            <Link 
              href="/branches" 
              onClick={() => setIsSidebarOpen(false)}
              className="flex items-center gap-3 px-3 py-3 rounded-2xl text-[#2B1B12] font-bold hover:bg-[#FAF7F2] hover:text-[#D4A24C] transition-colors group"
            >
              <Map size={20} className="text-[#D4A24C]" />
              Branch Locator
            </Link>
          </nav>

          <hr className="border-[#E8DFD3] mb-6" />

          {/* Secondary Links */}
          <nav className="flex flex-col space-y-2">
            <Link 
              href="/blog" 
              onClick={() => setIsSidebarOpen(false)}
              className="flex items-center gap-3 px-3 py-2 rounded-full text-[#5C4638] font-semibold text-sm hover:bg-[#FAF7F2] hover:text-[#2B1B12] transition-colors"
            >
              <BookOpen size={16} className="text-[#5C4638]" />
              Blog & Stories
            </Link>
            
            <Link 
              href="/privacy" 
              onClick={() => setIsSidebarOpen(false)}
              className="flex items-center gap-3 px-3 py-2 rounded-full text-[#5C4638] font-semibold text-sm hover:bg-[#FAF7F2] hover:text-[#2B1B12] transition-colors"
            >
              <ShieldCheck size={16} className="text-[#5C4638]" />
              Privacy Policy
            </Link>
          </nav>
        </div>

        {/* Bottom Banner (Hotline) */}
        <div className="mt-auto bg-[#2B1B12] p-5 flex items-center justify-between border-t border-[#E8DFD3]">
          <div className="flex flex-col">
            <span className="font-extrabold text-[#D4A24C] text-sm tracking-wide uppercase">
              Royal Hotline
            </span>
            <span className="text-[10px] text-[#FFFDF9]/80 font-medium">
              Every meal served like royalty
            </span>
          </div>
          
          <a 
            href="tel:111-222-333" 
            className="w-12 h-12 bg-[#D4A24C] hover:bg-[#B8862B] text-white rounded-full flex items-center justify-center transition-transform hover:scale-105 shadow-md shrink-0"
            aria-label="Call Hotline"
          >
            <Phone size={20} />
          </a>
        </div>
      </aside>
    </>
  );
}