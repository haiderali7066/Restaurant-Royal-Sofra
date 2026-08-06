"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/header"; // Adjust path as needed
import Footer from "@/components/footer"; // Adjust path as needed
import { ArrowRight, ArrowLeft, Calendar, Clock, ChevronRight, ChevronLeft } from "lucide-react";

// --- DATA CONSTANTS ---
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=2000&auto=format&fit=crop",
];

const PROMOS = [
  {
    title: "The Royal Tasting",
    desc: "A 5-course journey through our chef's finest creations.",
    tag: "Weekend Exclusive",
    img: "https://images.unsplash.com/photo-1626804475297-41607ea0af49?q=80&w=1000",
    colSpan: "lg:col-span-2",
    rowSpan: "lg:row-span-2",
  },
  {
    title: "Express Business Lunch",
    desc: "Premium dining, tailored for your schedule.",
    tag: "Mon-Fri • 12PM-3PM",
    img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=800",
    colSpan: "lg:col-span-1",
    rowSpan: "lg:row-span-1",
  },
  {
    title: "Midnight Handi",
    desc: "Late night cravings meet royal flavors.",
    tag: "After 10 PM",
    img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=800",
    colSpan: "lg:col-span-1",
    rowSpan: "lg:row-span-1",
  }
];



const MENU_CATEGORIES = [
  { title: "Signature Handi", img: "https://images.unsplash.com/photo-1606499878233-0182ceac6f50?q=80&w=800", slug: "signature-handi" },
  { title: "Live BBQ", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800", slug: "bbq" },
  { title: "Karahi Specials", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800", slug: "karahi" },
  { title: "Royal Platters", img: "https://images.unsplash.com/photo-1626804475297-41607ea0af49?q=80&w=800", slug: "platters" },
  { title: "Fresh Breads", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800", slug: "breads" },
];

const SIGNATURE_DISHES = [
  {
    title: "Royal Mutton Handi",
    desc: "Slow-cooked to absolute perfection in a traditional clay pot with our centuries-old secret blend of spices and rich cream. A dish reserved for royalty.",
    img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1600",
    slug: "signature-handi"
  },
  {
    title: "Sikandari BBQ Platter",
    desc: "A regal assortment of our finest charcoal-grilled meats, marinated overnight in saffron and exotic herbs to ensure a melt-in-your-mouth experience.",
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1600",
    slug: "bbq"
  }
];

const PROMO_CARDS = [
  {
    title: "The Royal Tasting",
    desc: "A 5-course journey through our chef's finest creations.",
    img: "https://images.unsplash.com/photo-1626804475297-41607ea0af49?q=80&w=1000"
  },
  {
    title: "Express Business Lunch",
    desc: "Premium dining, tailored for your schedule.",
    img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=800"
  },
  {
    title: "Midnight Handi",
    desc: "Late night cravings meet royal flavors.",
    img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=800"
  }
];

const BLOG_POSTS = [
  { date: "April 13, 2026", title: "The Art of Authentic Cuisine: Inside Royal Sofra's Kitchen", img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=800" },
  { date: "April 20, 2026", title: "Mastering the Charcoal: The Secrets Behind Our BBQ", img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800" },
  { date: "May 02, 2026", title: "Spice Trails: Sourcing the Finest Ingredients in Punjab", img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=800" },
  { date: "May 15, 2026", title: "A Royal Feast: Pairing Traditional Drinks with Spicy Handi", img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=800" }
];

export default function HomePage() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [currentSigIndex, setCurrentSigIndex] = useState(0);
  const menuScrollRef = useRef<HTMLDivElement>(null);

  // Smooth Auto-play for Hero
  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(heroInterval);
  }, []);

  // Menu Scroll Handler
  const scrollMenu = (direction: "left" | "right") => {
    if (menuScrollRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 400 : 250;
      menuScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <main className="w-full min-h-screen bg-[#FFFFFF] overflow-hidden font-sans text-[#2B1B12] selection:bg-[#D4A24C] selection:text-white">
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[90vh] min-h-[600px] bg-[#2B1B12] flex flex-col justify-between">
        {/* Dynamic Image Background */}
        {HERO_IMAGES.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-[1500ms] ease-in-out ${
              index === currentHeroIndex ? "opacity-100 z-0" : "opacity-0 z-0"
            }`}
          >
            <Image src={src} alt="Royal Sofra Atmosphere" fill priority={index === 0} className="object-cover object-center transform scale-105 transition-transform duration-[10000ms] ease-out" />
          </div>
        ))}

        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12] via-[#2B1B12]/40 to-black/40 z-10 pointer-events-none" />

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 mt-10 md:mt-16 pointer-events-none">
          <span className="text-[#D4A24C] text-xs sm:text-sm font-bold tracking-[0.4em] uppercase mb-4 md:mb-6 drop-shadow-md">
            The Crown of Fine Dining
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-light text-[#FFFDF9] tracking-tight leading-[0.95] drop-shadow-xl">
            A CULINARY <br />
            <span className="font-serif italic font-medium text-[#D4A24C]">Symphony</span>
          </h1>
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-32 md:bottom-40 left-1/2 -translate-x-1/2 z-30 flex gap-2 sm:gap-3">
          {HERO_IMAGES.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setCurrentHeroIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentHeroIndex ? "w-8 bg-[#D4A24C]" : "w-2 bg-[#FFFDF9]/50 hover:bg-[#FFFDF9]"}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Floating Reservation Bar */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-30 w-[92%] max-w-[1000px] bg-[#FFFDF9]/95 backdrop-blur-md p-4 sm:p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 shadow-[0_20px_40px_rgba(43,27,18,0.15)] border border-[#E8DFD3]">
          <div className="flex flex-row justify-between w-full md:w-auto gap-4 sm:gap-8">
            <div className="flex items-center gap-3 text-[#5C4638]">
              <Calendar size={20} className="text-[#D4A24C] shrink-0" />
              <div className="flex flex-col text-sm">
                <span className="font-bold text-[#2B1B12] uppercase tracking-wider text-[10px] sm:text-xs">Reserve</span>
                <span className="font-light text-xs sm:text-sm whitespace-nowrap">Book a Table</span>
              </div>
            </div>
            <div className="w-px h-10 bg-[#E8DFD3]" />
            <div className="flex items-center gap-3 text-[#5C4638]">
              <Clock size={20} className="text-[#D4A24C] shrink-0" />
              <div className="flex flex-col text-sm">
                <span className="font-bold text-[#2B1B12] uppercase tracking-wider text-[10px] sm:text-xs">Hours</span>
                <span className="font-light text-xs sm:text-sm whitespace-nowrap">6 PM - 12 AM</span>
              </div>
            </div>
          </div>
          <Link href="/reserve" className="w-full md:w-auto bg-[#2B1B12] hover:bg-[#D4A24C] text-[#FFFDF9] px-8 py-3.5 sm:py-4 uppercase tracking-[0.2em] text-xs font-bold transition-all duration-500 text-center whitespace-nowrap">
            Find Table
          </Link>
        </div>
      </section>

      

      {/* 3. EXPLORE MENU (Scrollable Editorial Grid) */}
      <section className="w-full bg-[#FFFFFF] py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Header with Nav Buttons */}
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 md:mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2B1B12] leading-[1.1] tracking-tight">
                Curated <span className="font-serif italic text-[#D4A24C]">Selections</span>
              </h2>
            </div>
            
            <div className="flex items-center gap-4">
              <Link href="/menu" className="hidden md:flex items-center gap-2 text-[#2B1B12] hover:text-[#D4A24C] transition-colors mr-4">
                <span className="text-xs uppercase tracking-[0.2em] font-bold">Full Menu</span>
              </Link>
              <button onClick={() => scrollMenu('left')} className="w-12 h-12 rounded-full border border-[#E8DFD3] flex items-center justify-center text-[#2B1B12] hover:bg-[#D4A24C] hover:border-[#D4A24C] hover:text-[#FFFDF9] transition-all">
                <ChevronLeft size={24} strokeWidth={1} />
              </button>
              <button onClick={() => scrollMenu('right')} className="w-12 h-12 rounded-full border border-[#E8DFD3] flex items-center justify-center text-[#2B1B12] hover:bg-[#D4A24C] hover:border-[#D4A24C] hover:text-[#FFFDF9] transition-all">
                <ChevronRight size={24} strokeWidth={1} />
              </button>
            </div>
          </div>

          {/* Horizontal Scroll Container */}
          <div 
            ref={menuScrollRef}
            className="flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {MENU_CATEGORIES.map((item, i) => (
              <Link 
                href={`/menu?category=${item.slug}`} 
                key={i}
                className={`relative group flex-shrink-0 snap-center sm:snap-start w-[75vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw] overflow-hidden ${i % 2 !== 0 ? 'lg:mt-12' : 'lg:mb-12'}`}
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#FAF7F2]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 75vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-[1000ms] ease-out"
                  />
                  {/* Subtle Gradient & Border overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12]/90 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                  <div className="absolute inset-4 border border-[#FFFDF9]/20 group-hover:border-[#D4A24C]/60 transition-colors duration-500 pointer-events-none" />
                  
                  {/* Text Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <h3 className="font-serif text-2xl text-[#FFFDF9] mb-1">{item.title}</h3>
                    <span className="text-[#D4A24C] text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      Discover <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="md:hidden mt-4 flex justify-center">
             <Link href="/menu" className="text-[#D4A24C] text-xs uppercase tracking-[0.2em] font-bold border-b border-[#D4A24C] pb-1">
               View Full Menu
             </Link>
          </div>
        </div>
      </section>

      {/* 4. SIGNATURES */}
      <section className="w-full bg-[#1A100A] text-[#FFFDF9] py-16 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none border-y border-[#D4A24C]/20" />
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
          
          {/* Left: Typography */}
          <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8 z-10 lg:pr-12 order-2 lg:order-1">
            <h2 className="text-[3rem] sm:text-6xl lg:text-[5.5rem] font-light leading-[0.9] tracking-tighter uppercase">
              MOST <br />
              <span className="font-serif italic font-normal text-[#D4A24C] normal-case drop-shadow-lg lg:ml-2">Popular</span>
            </h2>
            
            <div className="min-h-[140px] md:min-h-[160px] border-l border-[#D4A24C]/30 pl-5 md:pl-6 mt-2 md:mt-4">
               <span className="text-[#E8C87A] text-[10px] sm:text-xs tracking-[0.2em] font-bold uppercase mb-3 sm:mb-4 block">
                 Chef's Recommendation
               </span>
               <h3 className="text-2xl sm:text-3xl font-serif text-[#FFFDF9] mb-3 md:mb-4 transition-all">
                 {SIGNATURE_DISHES[currentSigIndex].title}
               </h3>
               <p className="text-[#E8DFD3]/70 text-sm md:text-base font-light leading-relaxed max-w-sm transition-all">
                 {SIGNATURE_DISHES[currentSigIndex].desc}
               </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-2 md:mt-4">
              {/* Dynamically link to the active dish's category */}
              <Link 
                href={`/menu?category=${SIGNATURE_DISHES[currentSigIndex].slug}`} 
                className="w-full sm:w-auto text-center border border-[#D4A24C] text-[#D4A24C] hover:bg-[#D4A24C] hover:text-[#1A100A] uppercase tracking-[0.2em] text-xs font-bold px-8 py-3.5 transition-colors"
              >
                Order Now
              </Link>
              
              <div className="flex gap-4 w-full justify-center sm:justify-start">
                <button onClick={() => setCurrentSigIndex((prev) => (prev === 0 ? SIGNATURE_DISHES.length - 1 : prev - 1))} className="text-[#E8DFD3] hover:text-[#D4A24C] transition-colors p-2">
                  <ArrowLeft strokeWidth={1} size={28} />
                </button>
                <button onClick={() => setCurrentSigIndex((prev) => (prev + 1) % SIGNATURE_DISHES.length)} className="text-[#E8DFD3] hover:text-[#D4A24C] transition-colors p-2">
                  <ArrowRight strokeWidth={1} size={28} />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Edge-to-Edge Image */}
          <div className="lg:col-span-7 relative w-full aspect-square md:aspect-[4/3] order-1 lg:order-2 lg:-mr-[10vw]">
             {SIGNATURE_DISHES.map((dish, idx) => (
               <div 
                 key={idx}
                 className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out ${
                   idx === currentSigIndex ? "opacity-100 z-10 translate-x-0" : "opacity-0 z-0 translate-x-8"
                 }`}
               >
                 <Image src={dish.img} alt={dish.title} fill className="object-cover" />
                 <div className="absolute inset-0 border border-[#D4A24C]/20 pointer-events-none m-3 md:m-4" />
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 2. PROMO GRID SECTION */}
      <section className="w-full bg-[#FAF7F2] pt-40 md:pt-48 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 md:mb-16">
             <span className="text-[#D4A24C] text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Exclusive Offers</span>
             <h2 className="text-3xl md:text-5xl font-light text-[#2B1B12]">Royal <span className="font-serif italic text-[#D4A24C]">Experiences</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:grid-rows-2 lg:h-[600px]">
            {PROMOS.map((promo, idx) => (
              <div key={idx} className={`relative group overflow-hidden ${promo.colSpan} ${promo.rowSpan} min-h-[300px] bg-[#1A100A]`}>
                <Image src={promo.img} alt={promo.title} fill className="object-cover opacity-70 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A100A] via-transparent to-transparent opacity-90" />
                <div className="absolute inset-0 border border-[#D4A24C]/0 group-hover:border-[#D4A24C]/40 transition-colors duration-500 m-4 pointer-events-none" />
                
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full z-10 flex flex-col">
                  <span className="bg-[#D4A24C] text-[#FFFDF9] text-[10px] font-bold uppercase tracking-widest px-3 py-1 w-fit mb-3">
                    {promo.tag}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif text-[#FFFDF9] mb-2">{promo.title}</h3>
                  <p className="text-[#E8DFD3] text-sm font-light hidden md:block max-w-sm">{promo.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* 5. FRESH INSIGHTS */}
      <section className="bg-[#FAF7F2] py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 md:mb-20 gap-6">
             <div className="flex-1 hidden md:block" />
             <div className="text-center">
                <h2 className="text-4xl md:text-[4rem] font-light tracking-tight text-[#2B1B12] leading-none uppercase">
                   FRESH <br />
                   <span className="font-serif italic font-normal text-5xl md:text-[5rem] text-[#2B1B12] normal-case md:ml-8">Insights</span>
                </h2>
             </div>
             <div className="flex-1 hidden md:flex justify-end gap-4">
               {/* Decorative spacing element for desktop */}
             </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
             {BLOG_POSTS.map((post, idx) => (
                <Link href={`/blog/${idx}`} key={idx} className="flex flex-col group cursor-pointer">
                   <div className="w-full aspect-[4/5] relative overflow-hidden mb-4 md:mb-6 bg-[#FFFFFF]">
                      <Image src={post.img} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
                   </div>
                   <span className="text-[#5C4638] text-[10px] uppercase tracking-[0.2em] mb-2 block font-bold">
                      {post.date}
                   </span>
                   <h3 className="text-lg md:text-xl font-light text-[#2B1B12] leading-snug mb-4 group-hover:text-[#D4A24C] transition-colors pr-2">
                      {post.title}
                   </h3>
                   <div className="mt-auto">
                      <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] border-b border-[#2B1B12] pb-1 text-[#2B1B12] group-hover:text-[#D4A24C] group-hover:border-[#D4A24C] transition-colors">
                         Read Article
                      </span>
                   </div>
                </Link>
             ))}
          </div>
        </div>
      </section>

      {/* 6. APP SECTION (Premium UI/UX provided by User) */}
      <section className="bg-[#FFFFFF] w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Brand specific gold gradient mapping with enhanced shadow and borders */}
        <div className="bg-gradient-to-br from-[#D4A24C] via-[#E8C87A] to-[#B8862B] rounded-[2rem] md:rounded-[3rem] p-8 sm:p-10 md:p-16 flex flex-col-reverse md:flex-row items-center justify-between relative shadow-[0_20px_50px_rgba(212,162,76,0.2)] overflow-visible border border-[#E8C87A]/50">
          
          {/* Left: Mobile Image */}
          <div className="w-full md:w-5/12 flex justify-center mt-16 md:mt-0 md:absolute md:-bottom-12 md:left-12 z-20">
            <div className="w-[240px] md:w-[280px] h-[480px] md:h-[560px] bg-[#1A100A] rounded-[2.5rem] md:rounded-[3rem] border-[8px] md:border-[10px] border-[#1A100A] flex items-center justify-center relative overflow-hidden shadow-[20px_20px_60px_rgba(0,0,0,0.3)] transform md:-rotate-3 hover:rotate-0 transition-transform duration-700 ease-out">
              {/* iPhone Notch */}
              <div className="absolute top-0 w-1/2 h-6 bg-[#1A100A] rounded-b-2xl z-30"></div>
              <div className="relative w-full h-full bg-[#FAF7F2] flex items-center justify-center text-center px-4">
                {/* Fallback layout if mb.png is missing */}
                <span className="font-serif text-[#D4A24C] text-2xl italic">Royal App UI</span>
                <Image
                  src="/mb.png" // Update with your actual mobile frame asset
                  alt="Royal Sofra App Interface"
                  fill
                  className="object-cover z-20"
                />
              </div>
            </div>
          </div>

          {/* Right: Content tailored for Deep Brown / Gold Contrast */}
          <div className="w-full md:w-6/12 flex flex-col gap-5 md:ml-auto z-10 text-[#2B1B12]">
            <div className="inline-block bg-[#FFFDF9]/80 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold w-fit uppercase tracking-[0.15em] mb-2 border border-[#FFFFFF]/60 shadow-sm text-[#2B1B12]">
              📱 The Royal App
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] drop-shadow-sm">
              Dining Luxury, <br />
              <span className="font-serif italic font-normal">In Your Pocket.</span>
            </h2>

            <p className="text-[#2B1B12]/80 text-base md:text-lg font-medium leading-relaxed max-w-lg mb-4">
              Elevate your dining experience. Download our companion mobile app
              to explore the menu, book tables, and order your royal feast
              seamlessly.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
              {/* App Store Button */}
              <a
                href="#"
                className="w-full sm:w-auto h-14 px-6 bg-[#1A100A] rounded-xl flex items-center justify-center gap-3 hover:bg-[#5C4638] transition-colors shadow-lg text-[#FFFFFF]"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M17.523 15.3414C17.5193 11.4507 20.6757 9.53767 20.8179 9.44474C18.9959 6.8152 16.1472 6.42531 15.1979 6.30232C13.208 6.09673 11.3129 7.45862 10.2974 7.45862C9.28182 7.45862 7.72895 6.33125 6.07998 6.36395C3.93175 6.39665 1.95427 7.59392 0.852431 9.48911C-1.39763 13.315 0.280145 18.9748 2.47454 22.0911C3.54142 23.6067 4.79373 25.3262 6.42398 25.2608C7.99462 25.1954 8.60447 24.2612 10.5147 24.2612C12.4249 24.2612 12.9752 25.2608 14.6055 25.2281C16.2953 25.1954 17.3622 23.672 18.429 22.1238C19.6644 20.3473 20.1706 18.636 20.2033 18.5381C20.1415 18.5054 17.5267 17.5303 17.523 15.3414ZM14.1795 4.26027C15.0348 3.24227 15.6171 1.8398 15.4606 0.437317C14.2813 0.486355 12.7849 1.22687 11.8969 2.21206C11.1144 3.06734 10.4137 4.51086 10.603 5.88902C11.921 5.98709 13.3242 5.27836 14.1795 4.26027Z" />
                </svg>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] font-medium text-[#E8DFD3]/80">Download on the</span>
                  <span className="text-sm font-bold tracking-wide">App Store</span>
                </div>
              </a>

              {/* Google Play Button */}
              <a
                href="#"
                className="w-full sm:w-auto h-14 px-6 bg-[#1A100A] rounded-xl flex items-center justify-center gap-3 hover:bg-[#5C4638] transition-colors shadow-lg text-[#FFFFFF]"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 512 512">
                  <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.545 81.548 81.548 67.273-37.64c16.117-9.014 25.738-25.442 25.738-43.908s-9.621-34.894-25.749-43.908zM291.733 279.711L60.815 510.629c3.158.836 6.345 1.305 9.512 1.305 26.559 0 52.819-15.342 68.329-33.003l153.077-199.22z" />
                </svg>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] font-medium text-[#E8DFD3]/80">GET IT ON</span>
                  <span className="text-sm font-bold tracking-wide">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. NEWSLETTER (Layered Gold Wave Design) */}
      <section className="w-full relative pt-20 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-[#FFFFFF]">
        {/* Layered Gold Wave Background Effect */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <svg
            className="absolute top-0 w-full text-[#D4A24C]/10"
            viewBox="0 0 1440 320"
            fill="currentColor"
            preserveAspectRatio="none"
            style={{ height: "100%" }}
          >
            <path d="M0,96L60,112C120,128,240,160,360,149.3C480,139,600,85,720,96C840,107,960,181,1080,197.3C1200,213,1320,171,1380,149.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
          </svg>
          <svg
            className="absolute top-0 w-full text-[#E8C87A]/20"
            viewBox="0 0 1440 320"
            fill="currentColor"
            preserveAspectRatio="none"
            style={{ height: "80%" }}
          >
            <path d="M0,192L60,181.3C120,171,240,149,360,165.3C480,181,600,235,720,245.3C840,256,960,224,1080,186.7C1200,149,1320,107,1380,112L1440,117.3L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
          </svg>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center md:items-end justify-between gap-12 md:gap-8 text-center md:text-left">
          
          {/* Left Block: Newsletter Form */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 items-center md:items-start pb-4 md:pb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#D4A24C] leading-[1.05] uppercase tracking-tight drop-shadow-sm">
              Special Offers <br className="hidden md:block" /> & News
            </h2>
            <p className="text-[#5C4638] font-medium text-sm md:text-base max-w-md mt-2">
              Subscribe now for news, premium promotions, and exclusive menus
              delivered directly to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full max-w-lg">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="flex-1 px-5 py-4 rounded-md border-2 border-[#E8DFD3] focus:outline-none focus:ring-0 focus:border-[#D4A24C] bg-[#FFFDF9] text-[#2B1B12] text-sm md:text-base shadow-sm min-h-[50px] w-full placeholder:text-[#5C4638]/60 transition-colors"
              />
              <button className="bg-[#D4A24C] hover:bg-[#B8862B] text-[#FFFFFF] text-xs font-bold uppercase tracking-[0.2em] px-8 py-4 rounded-md shadow-[0_4px_14px_rgba(212,162,76,0.3)] transition-all duration-300 active:scale-95 whitespace-nowrap min-h-[50px] w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>

          {/* Right Block: Dynamic Text */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end items-end select-none mt-4 md:mt-0">
            <div className="flex items-center relative">
              <h2 className="text-[3.5rem] sm:text-6xl lg:text-[6.5rem] font-black text-[#2B1B12] uppercase leading-[0.85] tracking-tighter md:text-right drop-shadow-sm">
                let's talk <br /> <span className="text-[#D4A24C] font-serif italic font-normal tracking-normal pr-4">Royal</span>
              </h2>
            </div>
          </div>
        </div>
      </section>
      
      <Footer/>
    </main>
  );
}