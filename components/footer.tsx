import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Youtube 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#2B1B12] to-[#150d08] text-[#FFFDF9] pt-24 pb-8 px-6 sm:px-12 overflow-hidden relative selection:bg-[#D4A24C] selection:text-white border-t border-[#D4A24C]/10">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        
        {/* ======================= */}
        {/* TOP: NEWSLETTER SECTION */}
        {/* ======================= */}
        <div className="text-center w-full max-w-2xl mb-24 relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-light mb-6 tracking-wide leading-tight">
            Tastes, tales, and <span className="font-serif italic text-[#D4A24C]">Treats</span> <br className="hidden sm:block" /> 
            straight to your <span className="font-serif italic text-[#D4A24C]">Inbox</span>!
          </h2>
          <p className="text-[#E8DFD3] text-sm md:text-base mb-10 font-light opacity-90">
            Join our newsletter for exclusive tasting menus and event updates.
          </p>
          
          <form 
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center w-full max-w-[28rem] mx-auto bg-white/5 backdrop-blur-sm border border-[#5C4638]/70 rounded-full p-1.5 focus-within:border-[#D4A24C] focus-within:ring-4 focus-within:ring-[#D4A24C]/20 transition-all duration-500"
          >
            <input 
              type="email" 
              placeholder="Enter your email address" 
              required
              className="flex-1 bg-transparent border-none outline-none text-[#FFFDF9] placeholder-[#E8DFD3]/50 px-6 text-sm font-light w-full"
            />
            <button 
              type="submit"
              className="w-11 h-11 bg-[#FFFDF9] hover:bg-[#D4A24C] text-[#2B1B12] hover:text-[#FFFDF9] rounded-full flex items-center justify-center transition-all duration-300 shrink-0 group shadow-[0_0_15px_rgba(255,253,249,0.1)] hover:shadow-[0_0_20px_rgba(212,162,76,0.3)]"
              aria-label="Subscribe to newsletter"
            >
              <ArrowRight size={20} strokeWidth={2} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </form>
        </div>

        {/* ======================= */}
        {/* MIDDLE: LINKS & CONTACT */}
        {/* ======================= */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-16 lg:gap-12 items-start text-sm z-10 mb-16 md:mb-24 px-4">
          
          {/* Left Side: Navigation Links */}
          <nav className="flex flex-col sm:flex-row justify-center lg:justify-end gap-10 sm:gap-20 lg:pr-12 text-left">
            <ul className="flex flex-col space-y-6 font-semibold tracking-[0.15em] text-[#FFFDF9]">
              {['About', 'Menu', 'Events'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="group flex items-center gap-3 hover:text-[#D4A24C] transition-all duration-300 uppercase">
                    <span className="w-0 h-[1px] bg-[#D4A24C] transition-all duration-300 group-hover:w-4"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col space-y-6 font-semibold tracking-[0.15em] text-[#FFFDF9]">
              {['Reserve a table', 'Contact', 'Blog'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.split(' ')[0].toLowerCase()}`} className="group flex items-center gap-3 hover:text-[#D4A24C] transition-all duration-300 uppercase">
                    <span className="w-0 h-[1px] bg-[#D4A24C] transition-all duration-300 group-hover:w-4"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Center Vertical Divider */}
          <div className="hidden lg:block w-[1px] h-full min-h-[160px] bg-gradient-to-b from-transparent via-[#5C4638] to-transparent self-center"></div>

          {/* Right Side: Contact & Socials */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-12 sm:gap-20 lg:pl-12 text-left">
            
            {/* Contact Info */}
            <address className="flex flex-col space-y-6 font-light text-[#E8DFD3] not-italic">
              <a href="mailto:info@royalsofra.com" className="flex items-center gap-4 hover:text-[#D4A24C] transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#D4A24C]/10 transition-colors">
                  <Mail size={14} className="text-[#D4A24C]" />
                </div>
                info@royalsofra.com
              </a>
              <a href="tel:03481118811" className="flex items-center gap-4 hover:text-[#D4A24C] transition-colors group font-medium text-lg">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#D4A24C]/10 transition-colors">
                  <Phone size={14} className="text-[#D4A24C]" />
                </div>
                0348 1118811
              </a>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-1">
                  <MapPin size={14} className="text-[#D4A24C]" />
                </div>
                <p className="max-w-[200px] leading-relaxed uppercase text-xs tracking-widest font-medium text-[#E8DFD3]/70 pt-2">
                  289 Abpara Housing Society, <br /> Canal Road, Lahore
                </p>
              </div>
            </address>

            {/* Social Links */}
            <div className="flex flex-col sm:items-start items-center justify-center space-y-6">
              <p className="font-semibold tracking-[0.15em] text-[#FFFDF9] uppercase text-xs border-b border-[#5C4638] pb-2">Follow Us</p>
              <ul className="flex gap-4">
                <li>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4A24C] hover:text-[#2B1B12] transition-all duration-300 hover:-translate-y-1" aria-label="Facebook">
                    <Facebook size={18} />
                  </a>
                </li>
                <li>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4A24C] hover:text-[#2B1B12] transition-all duration-300 hover:-translate-y-1" aria-label="Instagram">
                    <Instagram size={18} />
                  </a>
                </li>
                <li>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4A24C] hover:text-[#2B1B12] transition-all duration-300 hover:-translate-y-1" aria-label="Youtube">
                    <Youtube size={18} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ======================= */}
        {/* BOTTOM: GIANT BRAND TEXT*/}
        {/* ======================= */}
        <div className="w-full flex flex-col pointer-events-none select-none overflow-hidden pb-4">
          <span className="text-[clamp(5rem,15vw,17rem)] font-serif text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF9] to-[#E8DFD3]/30 leading-[0.8] tracking-tighter text-left">
            ROYAL
          </span>
          <span className="text-[clamp(5rem,15vw,17rem)] font-serif text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF9] to-[#E8DFD3]/30 leading-[0.8] tracking-tighter text-right -mt-[2%] sm:-mt-[4%]">
            SOFRA
          </span>
        </div>

        {/* ======================= */}
        {/* COPYRIGHT BOTTOM BAR    */}
        {/* ======================= */}
        <div className="w-full mt-8 pt-6 border-t border-[#5C4638]/40 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider text-[#E8DFD3]/50 font-light px-4 z-10 relative">
          <p>© {new Date().getFullYear()} Royal Sofra. All rights reserved.</p> <a href="https://devntomsolutions.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4A24C] transition-colors">Developed by Devntom Solutions</a>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-[#D4A24C] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#D4A24C] transition-colors">Terms of Service</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}