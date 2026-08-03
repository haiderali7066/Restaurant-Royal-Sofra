import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8 border-t-4 border-[#C5A059]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Brand & Tagline */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-12 border-b border-white/10 pb-10">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-sm">
            <div className="flex items-center gap-3 mb-4">
              {/* IMAGE PLACEHOLDER FOR LOGO */}
              <div className="relative w-12 h-12 overflow-hidden rounded-full bg-white">
                <Image 
                  src="https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=150" 
                  alt="Royal Sofra Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-3xl font-black tracking-tight text-[#FFCC00]">
                Royal Sofra
              </h2>
            </div>
            <p className="text-lg font-semibold text-neutral-300 italic mb-2">
              "Where Every Meal is Served Like Royalty."
            </p>
            <p className="text-sm text-neutral-400">
              Experience the finest blend of premium ingredients and royal heritage in every single bite.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <span className="text-sm font-bold uppercase tracking-wider text-neutral-400">Follow Our Kingdom</span>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#FFCC00] hover:text-black transition-colors">
                <Facebook size={20} strokeWidth={2} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#FFCC00] hover:text-black transition-colors">
                <Instagram size={20} strokeWidth={2} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#FFCC00] hover:text-black transition-colors">
                <Twitter size={20} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section: Links & Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Quick Links */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-neutral-400 hover:text-[#FFCC00] transition-colors">Explore Menu</Link></li>
              <li><Link href="#" className="text-neutral-400 hover:text-[#FFCC00] transition-colors">Our Story</Link></li>
              <li><Link href="#" className="text-neutral-400 hover:text-[#FFCC00] transition-colors">Branch Locator</Link></li>
              <li><Link href="#" className="text-neutral-400 hover:text-[#FFCC00] transition-colors">Stories & Blog</Link></li>
            </ul>
          </div>

          {/* Column 2: Support */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">Legal & Support</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-neutral-400 hover:text-[#FFCC00] transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="text-neutral-400 hover:text-[#FFCC00] transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-neutral-400 hover:text-[#FFCC00] transition-colors">Terms & Conditions</Link></li>
              <li><Link href="#" className="text-neutral-400 hover:text-[#FFCC00] transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">Reach Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#C5A059] shrink-0 mt-1" size={18} />
                <span className="text-neutral-400 text-sm">123 Royal Boulevard, Food City,<br />FC 45678</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#C5A059] shrink-0" size={18} />
                <span className="text-neutral-400 text-sm">+1 (800) 123-ROYAL</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#C5A059] shrink-0" size={18} />
                <span className="text-neutral-400 text-sm">feast@royalsofra.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-[#C5A059] shrink-0" size={18} />
                <span className="text-neutral-400 text-sm">Mon - Sun: 11:00 AM - 1:00 AM</span>
              </li>
            </ul>
          </div>

          {/* Column 4: App Download */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">Get The App</h3>
            <p className="text-neutral-400 text-sm mb-4">
              Order your favorite royal meals faster and get exclusive discounts on our app.
            </p>
            <div className="flex flex-col gap-3 w-full sm:w-auto">
              <a href="#" className="bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-xl flex items-center gap-3 px-4 py-2.5 transition-colors">
                <svg className="w-6 h-6 fill-white" viewBox="0 0 512 512"><path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.545 81.548 81.548 67.273-37.64c16.117-9.014 25.738-25.442 25.738-43.908s-9.621-34.894-25.749-43.908zM291.733 279.711L60.815 510.629c3.158.836 6.345 1.305 9.512 1.305 26.559 0 52.819-15.342 68.329-33.003l153.077-199.22z"/></svg>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] text-neutral-400">GET IT ON</span>
                  <span className="text-sm font-bold text-white">Google Play</span>
                </div>
              </a>
              <a href="#" className="bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-xl flex items-center gap-3 px-4 py-2.5 transition-colors">
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M17.523 15.3414C17.5193 11.4507 20.6757 9.53767 20.8179 9.44474C18.9959 6.8152 16.1472 6.42531 15.1979 6.30232C13.208 6.09673 11.3129 7.45862 10.2974 7.45862C9.28182 7.45862 7.72895 6.33125 6.07998 6.36395C3.93175 6.39665 1.95427 7.59392 0.852431 9.48911C-1.39763 13.315 0.280145 18.9748 2.47454 22.0911C3.54142 23.6067 4.79373 25.3262 6.42398 25.2608C7.99462 25.1954 8.60447 24.2612 10.5147 24.2612C12.4249 24.2612 12.9752 25.2608 14.6055 25.2281C16.2953 25.1954 17.3622 23.672 18.429 22.1238C19.6644 20.3473 20.1706 18.636 20.2033 18.5381C20.1415 18.5054 17.5267 17.5303 17.523 15.3414ZM14.1795 4.26027C15.0348 3.24227 15.6171 1.8398 15.4606 0.437317C14.2813 0.486355 12.7849 1.22687 11.8969 2.21206C11.1144 3.06734 10.4137 4.51086 10.603 5.88902C11.921 5.98709 13.3242 5.27836 14.1795 4.26027Z"/></svg>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] text-neutral-400">Download on the</span>
                  <span className="text-sm font-bold text-white">App Store</span>
                </div>
              </a>
            </div>
          </div>
          
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Royal Sofra. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-neutral-500">
            Designed with <span className="text-[#F04E23]">♥</span> for royalty.
          </div>
        </div>
        
      </div>
    </footer>
  );
}