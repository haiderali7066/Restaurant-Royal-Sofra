"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/header";
import Footer  from "@/components/footer";
import Link from "next/link";
// Premium Food Image Links
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1800&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1800&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1800&auto=format&fit=crop", 
];

const MENU_ITEMS = [
  { title: "Thin Crust Pizza", img: "/burger.png" },
  { title: "Malai Tikka", img: "/burger.png" },
  { title: "Beef Overload", img: "/burger.png" },
  { title: "Starters Platter", img: "/burger.png" },
  { title: "Royal Kabab", img: "/burger.png" },
  { title: "Signature Burger", img: "/burger.png" },
];

const PROMO_CARDS = [
  {
    title: "Delivering Royal Khushiyan",
    img: "sb1.PNG",
  },
  {
    title: "Fastest Growing Premium Brand",
    img: "sb2.PNG",
  },
  {
    title: "Made with Fresh Local Ingredients",
    img: "sb3.PNG",
  },
];

export default function HomePage() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  // Auto-play effect for Hero Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Desktop Carousel Handlers
  const scrollCarousel = (direction: 'left' | 'right') => {
    const container = document.getElementById('menu-carousel');
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <main className="w-full min-h-screen bg-neutral-50 overflow-x-hidden">
      <Navbar />
      
      {/* 1. HERO SECTION (Mobile-optimized height) */}
      <section className="relative w-full h-[50vh] md:h-[65vh] lg:h-[75vh] max-h-[700px] bg-neutral-900 overflow-hidden">
        {/* Subtle dark gradient for better contrast if a navbar overlaps */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent z-10 pointer-events-none" />
        
        {HERO_IMAGES.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentHeroIndex ? "opacity-100 z-0" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={src}
              alt={`Royal Sofra Special ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover object-center transform scale-105 transition-transform duration-[6000ms] ease-out"
            />
          </div>
        ))}

        {/* Dynamic Pagination - Larger touch targets for mobile */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentHeroIndex ? "w-10 bg-[#FFCC00] shadow-[0_0_10px_rgba(255,204,0,0.5)]" : "w-2.5 bg-white/60 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. EXPLORE MENU SECTION (Native Swipe UX for Mobile) */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative">
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight text-neutral-900">
            Explore Menu
          </h2> <Link href="/menu">
          <button className="text-[#F04E23] font-bold text-sm md:text-base uppercase tracking-wider hover:text-[#C5A059] transition-colors flex items-center gap-1">
            View All <span className="text-lg leading-none">&rsaquo;</span>
          </button></Link>
        </div>

        <div className="relative group">
          {/* Scrollable Container - Native CSS Scroll Snap for superior mobile UX */}
          <div 
            id="menu-carousel"
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 px-2 -mx-2 hide-scrollbar scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {MENU_ITEMS.map((item, i) => (
              <div
                key={i}
                className="snap-start snap-always shrink-0 w-[60%] sm:w-[40%] md:w-[28%] lg:w-[22%] flex flex-col items-center bg-white border border-neutral-100 rounded-3xl p-4 shadow-sm hover:shadow-xl hover:border-[#FFCC00]/50 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
              >
                <div className="w-full aspect-square relative rounded-2xl overflow-hidden mb-4 bg-neutral-100">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 60vw, 25vw"
                    className="object-cover hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>
                <h3 className="font-bold text-sm md:text-base tracking-wide text-neutral-800 text-center uppercase">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Desktop Navigation Arrows (Hidden on mobile where users swipe) */}
          <button onClick={() => scrollCarousel('left')} className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 bg-white border border-neutral-200 text-neutral-700 w-12 h-12 items-center justify-center rounded-full shadow-lg hover:bg-[#FFCC00] hover:text-black hover:border-[#FFCC00] hover:scale-110 transition-all z-20">
            &larr;
          </button>
          <button onClick={() => scrollCarousel('right')} className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 bg-white border border-neutral-200 text-neutral-700 w-12 h-12 items-center justify-center rounded-full shadow-lg hover:bg-[#FFCC00] hover:text-black hover:border-[#FFCC00] hover:scale-110 transition-all z-20">
            &rarr;
          </button>
        </div>
        
        {/* CSS to completely hide the scrollbar for webkit browsers */}
        <style dangerouslySetInnerHTML={{__html: `
          .hide-scrollbar::-webkit-scrollbar { display: none; }
        `}} />
      </section>

      {/* 3. PROMO GRID SECTION (Mobile responsive grid) */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROMO_CARDS.map((card, index) => (
            <div key={index} className="flex flex-col gap-4 group cursor-pointer">
              <div className="w-full aspect-[4/3] sm:aspect-square relative bg-neutral-200 rounded-3xl overflow-hidden shadow-sm group-hover:shadow-2xl transition-all duration-300">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Yellow overlay hint on hover */}
                <div className="absolute inset-0 bg-[#FFCC00]/0 group-hover:bg-[#FFCC00]/10 transition-colors duration-300 z-10" />
              </div>
              <h3 className="font-bold text-xl md:text-2xl text-neutral-900 leading-snug group-hover:text-[#F04E23] transition-colors px-2">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MOBILE APP SECTION (Vibrant Yellow/Gold Gradient for UI POP) */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="bg-gradient-to-br from-[#FFCC00] via-[#F4B41A] to-[#C5A059] rounded-[2rem] md:rounded-[3rem] p-6 sm:p-10 md:p-16 flex flex-col-reverse md:flex-row items-center justify-between relative shadow-xl overflow-visible">
          
          {/* Left: Mobile First Image Positioning (Pops out of the container) */}
          <div className="w-full md:w-5/12 flex justify-center mt-12 md:mt-0 md:absolute md:-bottom-8 md:left-12 z-20">
            <div className="w-[240px] md:w-[280px] h-[480px] md:h-[560px] bg-neutral-900 rounded-[2.5rem] md:rounded-[3rem] border-[6px] md:border-[8px] border-neutral-900 flex items-center justify-center relative overflow-hidden shadow-2xl transform md:-rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Dynamic Island Notch */}
              <div className="absolute top-2 w-1/3 h-5 bg-black rounded-full z-30"></div>
              <div className="relative w-full h-full bg-white">
                <Image
                  src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=500"
                  alt="Royal Sofra App Interface"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Content tailored for readability */}
          <div className="w-full md:w-6/12 flex flex-col gap-5 md:ml-auto z-10 text-neutral-900">
            <div className="inline-block bg-white/30 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold w-fit uppercase tracking-wider mb-2">
              📱 The Royal App
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1]">
              Download Our Mobile App
            </h2>
            <p className="text-neutral-900/80 text-lg md:text-xl font-medium leading-relaxed max-w-lg mb-4">
              Elevate your dining luxury. Download our companion mobile app for a truly seamless and rewarding ordering experience.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-2">
              {/* Genuine Platform Store Button Links */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a href="#" className="flex-1 sm:flex-none h-12 px-4 bg-black rounded-xl flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors shadow-lg text-white">
                   <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.523 15.3414C17.5193 11.4507 20.6757 9.53767 20.8179 9.44474C18.9959 6.8152 16.1472 6.42531 15.1979 6.30232C13.208 6.09673 11.3129 7.45862 10.2974 7.45862C9.28182 7.45862 7.72895 6.33125 6.07998 6.36395C3.93175 6.39665 1.95427 7.59392 0.852431 9.48911C-1.39763 13.315 0.280145 18.9748 2.47454 22.0911C3.54142 23.6067 4.79373 25.3262 6.42398 25.2608C7.99462 25.1954 8.60447 24.2612 10.5147 24.2612C12.4249 24.2612 12.9752 25.2608 14.6055 25.2281C16.2953 25.1954 17.3622 23.672 18.429 22.1238C19.6644 20.3473 20.1706 18.636 20.2033 18.5381C20.1415 18.5054 17.5267 17.5303 17.523 15.3414ZM14.1795 4.26027C15.0348 3.24227 15.6171 1.8398 15.4606 0.437317C14.2813 0.486355 12.7849 1.22687 11.8969 2.21206C11.1144 3.06734 10.4137 4.51086 10.603 5.88902C11.921 5.98709 13.3242 5.27836 14.1795 4.26027Z"/></svg>
                   <div className="flex flex-col items-start leading-none">
                      <span className="text-[10px] font-semibold text-neutral-300">Download on the</span>
                      <span className="text-sm font-bold">App Store</span>
                   </div>
                </a>
                <a href="#" className="flex-1 sm:flex-none h-12 px-4 bg-black rounded-xl flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors shadow-lg text-white">
                   <svg className="w-5 h-5 fill-current" viewBox="0 0 512 512"><path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.545 81.548 81.548 67.273-37.64c16.117-9.014 25.738-25.442 25.738-43.908s-9.621-34.894-25.749-43.908zM291.733 279.711L60.815 510.629c3.158.836 6.345 1.305 9.512 1.305 26.559 0 52.819-15.342 68.329-33.003l153.077-199.22z"/></svg>
                   <div className="flex flex-col items-start leading-none">
                      <span className="text-[10px] font-semibold text-neutral-300">GET IT ON</span>
                      <span className="text-sm font-bold">Google Play</span>
                   </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BLOGS LINK LINE */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        <div className="flex items-center justify-between border-b-2 border-neutral-200 pb-4">
          <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">Stories & Blogs</h2>
          <button className="text-[#F04E23] font-bold text-sm uppercase tracking-wider hover:text-[#C5A059] transition-colors">View All</button>
        </div>
      </section>

      {/* 6. NEWSLETTER & FOOTER GRAPHIC (Mobile-Optimized Flow) */}
      <section className="w-full relative mt-10 md:mt-20 pt-20 md:pt-32 pb-16 overflow-hidden bg-white">
        
        {/* Layered Yellow/Gold Wave Background Effect */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <svg className="absolute top-0 w-full text-[#FFCC00]/10" viewBox="0 0 1440 320" fill="currentColor" preserveAspectRatio="none" style={{ height: "100%" }}>
            <path d="M0,96L60,112C120,128,240,160,360,149.3C480,139,600,85,720,96C840,107,960,181,1080,197.3C1200,213,1320,171,1380,149.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
          </svg>
          <svg className="absolute top-0 w-full text-[#FFCC00]/20" viewBox="0 0 1440 320" fill="currentColor" preserveAspectRatio="none" style={{ height: "80%" }}>
            <path d="M0,192L60,181.3C120,171,240,149,360,165.3C480,181,600,235,720,245.3C840,256,960,224,1080,186.7C1200,149,1320,107,1380,112L1440,117.3L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
          </svg>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center md:items-end justify-between gap-12 md:gap-8 text-center md:text-left">
          
          {/* Left Block: Newsletter Form */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 items-center md:items-start pb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#F04E23] leading-[1.1] uppercase tracking-tight">
              Special Offers <br className="hidden md:block"/> & News
            </h2>
            <p className="text-neutral-700 font-medium text-base md:text-lg max-w-md">
              Subscribe now for news, premium promotions, and exclusive menus delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full max-w-lg">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="flex-1 px-5 py-4 rounded-full border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#FFCC00] bg-white text-base shadow-sm min-h-[50px] w-full"
              />
              <button className="bg-[#FFCC00] hover:bg-[#e6b800] text-black font-extrabold uppercase tracking-widest px-8 py-4 rounded-full shadow-lg transition-transform active:scale-95 whitespace-nowrap min-h-[50px] w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>

          {/* Right Block: Dynamic Let's Talk Text */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end items-end select-none mt-8 md:mt-0">
            <div className="flex items-center relative">
              <h2 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-black text-[#FFCC00] uppercase leading-[0.85] tracking-tighter text-right drop-shadow-sm">
                let's talk <br /> <span className="text-[#C5A059]">ROYAL</span>
              </h2>
              {/* Dynamic Megaphone Image - Resized for mobile flow */}
              <div className="absolute -left-12 -top-12 md:-left-20 md:-top-16 w-24 h-24 sm:w-32 sm:h-32 lg:w-44 lg:h-44 rounded-full overflow-hidden shadow-2xl border-4 md:border-8 border-white bg-amber-50 z-20">
                <Image
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=400"
                  alt="Royal Sofra Callout Announcement"
                  fill
                  className="object-cover scale-110"
                />
              </div>
            </div>
          </div>
          
        </div>
      </section>
      <Footer/>
          
    </main>
  );
}