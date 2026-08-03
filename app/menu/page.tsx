"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

// Importing Layout Components as requested
import Navbar from "@/components/header";
import Footer from "@/components/footer";

// CATEGORY DATA
const CATEGORIES = [
  "Thin Crust Pizza",
  "Malai Tikka",
  "Beef Pepperoni Pizza",
  "Starters",
  "Somewhat Local",
  "Somewhat Soop",
];

// EXPANDED MOCK PRODUCT DATA (Added more products for a complete look)
const PRODUCTS = [
  {
    id: 1,
    name: "Thin Crust Beef ...",
    description: "A Crispy Thin Crust Topped With Beef Pepperoni, Mozzarella Cheese, And Rich Mari...",
    price: "1,480",
    category: "Thin Crust Pizza",
    image: "/burger.png", // Local image for better performance
  },
  {
    id: 2,
    name: "Thin Crust Veggie...",
    description: "Cheese Blend, Mushrooms, Sweet Corn, Black Olives, Onions, Capsicum And Tomatoes...",
    price: "1,290",
    category: "Thin Crust Pizza",
    image: "/burger.png", // Local image for better performance
  },
  {
    id: 3,
    name: "Thin Crust Cheese...",
    description: "Extra Special Mozzarella Blend And Signature Sauce On A Crispy Thin Crust.",
    price: "1,290",
    category: "Thin Crust Pizza",
    image: "/burger.png", // Local image for better performance
  },
  {
    id: 4,
    name: "Spicy Chicken Fajita...",
    description: "An authentic taste of Mexican fajita chicken, onions, green peppers and mozzarella...",
    price: "1,350",
    category: "Thin Crust Pizza",
    image: "/burger.png", // Local image for better performance
  },
  {
    id: 5,
    name: "BBQ Chicken Supreme...",
    description: "Smoky BBQ chicken chunks with onions, black olives, topped with a rich cheese blend.",
    price: "1,450",
    category: "Thin Crust Pizza",
    image: "/burger.png", // Local image for better performance
  },
  {
    id: 6,
    name: "Meat Lover's Blast...",
    description: "Loaded with beef pepperoni, smoked sausages, chicken chunks, and extra mozzarella.",
    price: "1,550",
    category: "Thin Crust Pizza",
    image: "/burger.png", // Local image for better performance
  },
  {
    id: 7,
    name: "Malai Boti Tikka...",
    description: "Creamy malai boti chicken chunks over a soft crust with white garlic sauce.",
    price: "1,420",
    category: "Malai Tikka",
    image: "/burger.png", // Local image for better performance
  },
  {
    id: 8,
    name: "Ultimate Beef Pepperoni...",
    description: "Double the pepperoni, double the cheese, layered over a rich tomato basil sauce.",
    price: "1,500",
    category: "Beef Pepperoni Pizza",
    image: "/burger.png", // Local image for better performance
  }
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const categoryScrollRef = useRef<HTMLDivElement>(null);

  // Filter products by active category
  const filteredProducts = PRODUCTS.filter(
    (product) => product.category === activeCategory
  );

  // Horizontal scroll handlers for category tabs
  const scrollCategories = (direction: "left" | "right") => {
    if (categoryScrollRef.current) {
      const scrollAmount = direction === "left" ? -250 : 250;
      categoryScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-1 w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        
        {/* ======================================= */}
        {/* 1. CATEGORY NAVIGATION (Horizontal Tab) */}
        {/* ======================================= */}
        <div className="flex items-center gap-2 mb-12 bg-neutral-50 p-2 rounded-2xl relative shadow-sm border border-neutral-100">
          <button 
            onClick={() => scrollCategories("left")}
            className="w-10 h-10 shrink-0 bg-white border border-neutral-200 rounded-full flex items-center justify-center text-[#e26a45] hover:bg-neutral-100 shadow-sm z-10 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft size={22} />
          </button>

          <div 
            ref={categoryScrollRef}
            className="flex-1 flex items-center gap-3 overflow-x-auto hide-scrollbar scroll-smooth px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-3 rounded-xl font-bold text-sm md:text-base whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#FFCC00] text-black shadow-md scale-[1.02]"
                    : "bg-white text-neutral-700 hover:bg-neutral-100 shadow-sm border border-neutral-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <button 
            onClick={() => scrollCategories("right")}
            className="w-10 h-10 shrink-0 bg-white border border-neutral-200 rounded-full flex items-center justify-center text-[#e26a45] hover:bg-neutral-100 shadow-sm z-10 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* ======================================= */}
        {/* 2. MAIN LAYOUT (Product Grid + Sidebar) */}
        {/* ======================================= */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* Left Side: Product Grid Area */}
          <div className="flex-1 w-full">
            <h2 className="text-3xl font-black text-black mb-8 tracking-tight">
              {activeCategory}
            </h2>

            {/* Grid Layout adjusts perfectly from Mobile to Desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div key={product.id} className="relative w-full flex flex-col group mt-4">
                    
                    {/* Floating Heart Icon - Positioned absolute to the top right of the whole card */}
                    <button className="absolute top-0 right-2 z-20 p-2 hover:scale-110 transition-transform">
                      <Heart size={24} className="text-[#e26a45] hover:fill-[#e26a45]" strokeWidth={1.5} />
                    </button>
                    
                    {/* Square Image Container - Ensures all images are perfectly uniform and square */}
                    <div className="relative w-full aspect-square z-10 flex justify-center items-center -mb-8">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain p-4 drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Bottom Content Card - Replicating pcard.PNG perfectly */}
                    <div className="bg-[#f9f9fb] rounded-[1.5rem] p-6 pt-12 flex flex-col flex-1 relative z-0 border border-neutral-100 group-hover:shadow-lg transition-all duration-300">
                      
                      {/* Title & Desc */}
                      <h3 className="font-extrabold text-xl text-black mb-2 leading-tight">
                        {product.name}
                      </h3>
                      <p className="text-[15px] text-[#4b5563] mb-6 leading-relaxed line-clamp-3">
                        {product.description}
                      </p>

                      {/* Price Row */}
                      <div className="mt-auto flex items-center gap-3 mb-6">
                        <span className="text-[#e26a45] font-black text-[22px] tracking-tight">
                          Rs. {product.price}
                        </span>
                        <span className="bg-[#de8c66] text-white text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                          Starting Price
                        </span>
                      </div>

                      {/* Add to Cart Button */}
                      <button className="w-full bg-white text-black border border-transparent rounded-2xl py-3.5 font-bold text-sm shadow-sm hover:border-[#e26a45] hover:text-[#e26a45] transition-colors flex items-center justify-center gap-1.5 active:scale-[0.98]">
                        <span className="text-lg leading-none font-normal">+</span> ADD TO CART
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center text-neutral-500 font-medium">
                  No products found in this category.
                </div>
              )}
            </div>
          </div>

          {/* Right Side: Sticky Empty Cart Sidebar (Hidden on Mobile, visible on Desktop) */}
          <aside className="hidden lg:flex flex-col w-[340px] shrink-0 bg-[#f9f9fb] rounded-3xl p-8 border border-neutral-100 sticky top-[120px] min-h-[500px] shadow-sm">
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              {/* Custom SVG Empty State matching the reference image */}
              <div className="relative mb-6 text-neutral-200">
                 <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 8H5V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V8ZM9 14H9.01M15 14H15.01M10 18A3 3 0 0114 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 8V6C16 3.8 14.2 2 12 2C9.8 2 8 3.8 8 6V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                 </svg>
              </div>

              <h3 className="font-extrabold text-lg text-black tracking-widest uppercase mb-3">
                Your Cart is Empty
              </h3>
              <p className="text-[13px] font-medium text-neutral-500">
                Go ahead and explore top categories.
              </p>
            </div>
          </aside>

        </div>
      </main>

      <Footer />

      {/* Global Style overrides to hide scrollbars on the category row */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}} />
    </div>
  );
}