"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/header";
import Footer from "@/components/footer";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  Car, 
  Wifi, 
  GlassWater 
} from "lucide-react";

// Dummy Data for Branches
const BRANCHES = [
  {
    id: "lahore-main",
    city: "Lahore",
    name: "Royal Sofra - Flagship",
    address: "289 Abpara Housing Society, Canal Road, Lahore",
    phone: "0348 1118811",
    hours: "12:00 PM - 11:30 PM",
    features: ["Valet Parking", "Free Wi-Fi", "Private Dining"],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000",
    isFlagship: true,
  },
  {
    id: "islamabad",
    city: "Islamabad",
    name: "Royal Sofra - Capital",
    address: "F-7 Markaz, Next to Safa Gold Mall, Islamabad",
    phone: "0348 2228822",
    hours: "12:30 PM - 11:00 PM",
    features: ["Rooftop Seating", "Free Wi-Fi", "Wheelchair Accessible"],
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1000",
    isFlagship: false,
  },
  {
    id: "karachi",
    city: "Karachi",
    name: "Royal Sofra - Ocean",
    address: "Block 4, Clifton, Near Ocean Mall, Karachi",
    phone: "0348 3338833",
    hours: "01:00 PM - 12:30 AM",
    features: ["Valet Parking", "Sea View", "Live Music (Weekends)"],
    image: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=1000",
    isFlagship: false,
  }
];

export default function BranchesPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF9] flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pb-24">
        {/* Hero Section */}
        <section className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1920"
            alt="Royal Sofra Ambiance"
            fill
            className="object-cover brightness-40"
            priority
          />
          <div className="absolute inset-0 bg-[#2B1B12]/60 mix-blend-multiply"></div>
          <div className="relative z-10 text-center px-4 mt-10">
            <span className="text-[#D4A24C] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Find Your Nearest Table
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#FFFDF9] mb-4 tracking-tight">
              Our <span className="italic text-[#D4A24C]">Locations</span>
            </h1>
            <p className="text-[#E8DFD3] text-sm md:text-lg max-w-2xl mx-auto font-light tracking-wide">
              Experience the taste of royalty across Pakistan.
            </p>
          </div>
        </section>

        {/* Branches List */}
        <section className="max-w-[1200px] mx-auto px-6 -mt-12 relative z-20">
          <div className="flex flex-col gap-12">
            {BRANCHES.map((branch) => (
              <div 
                key={branch.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(43,27,18,0.08)] border border-[#E8DFD3] flex flex-col lg:flex-row group"
              >
                {/* Branch Image */}
                <div className="relative h-64 lg:h-auto lg:w-2/5 overflow-hidden shrink-0">
                  <Image 
                    src={branch.image}
                    alt={branch.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {branch.isFlagship && (
                    <div className="absolute top-4 left-4 bg-[#D4A24C] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                      Flagship Branch
                    </div>
                  )}
                </div>

                {/* Branch Details */}
                <div className="p-8 md:p-10 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-3xl font-serif text-[#2B1B12]">{branch.city}</h2>
                    </div>
                    <h3 className="text-sm font-bold text-[#D4A24C] uppercase tracking-widest mb-6">
                      {branch.name}
                    </h3>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <MapPin size={18} className="text-[#D4A24C] shrink-0 mt-0.5" />
                        <p className="text-[#5C4638] font-light text-sm md:text-base leading-relaxed">
                          {branch.address}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Phone size={18} className="text-[#D4A24C] shrink-0" />
                        <p className="text-[#5C4638] font-medium text-sm md:text-base">
                          {branch.phone}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <Clock size={18} className="text-[#D4A24C] shrink-0" />
                        <p className="text-[#5C4638] font-light text-sm md:text-base">
                          Open Today: <span className="font-medium">{branch.hours}</span>
                        </p>
                      </div>
                    </div>

                    {/* Features/Amenities */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {branch.features.map((feature, index) => (
                        <span 
                          key={index}
                          className="bg-[#FAF7F2] text-[#5C4638] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#E8DFD3] flex items-center gap-1.5"
                        >
                          {feature.includes("Parking") && <Car size={12} />}
                          {feature.includes("Wi-Fi") && <Wifi size={12} />}
                          {feature.includes("Dining") && <GlassWater size={12} />}
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-[#E8DFD3]">
                    <button className="flex-1 bg-[#D4A24C] hover:bg-[#B8862B] text-white flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm tracking-widest uppercase transition-colors shadow-sm">
                      <Navigation size={16} />
                      Get Directions
                    </button>
                    <Link 
                      href="/reserve"
                      className="flex-1 bg-transparent border border-[#2B1B12] text-[#2B1B12] hover:bg-[#2B1B12] hover:text-[#FFFDF9] flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm tracking-widest uppercase transition-colors"
                    >
                      Reserve a Table
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}