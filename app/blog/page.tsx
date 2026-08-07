"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/header";
import Footer from "@/components/footer";
import { Calendar, User, ArrowRight } from "lucide-react";

// Dummy Data for the Blog
const BLOG_POSTS = [
  {
    id: 1,
    title: "The Secret Behind Our Signature Spices",
    excerpt: "Discover the rich history and careful selection process that goes into creating the perfect spice blend for our royal dishes.",
    category: "Culinary Secrets",
    date: "Oct 12, 2023",
    author: "Chef Ahmed",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "A Royal Feast: Hosting the Perfect Dinner",
    excerpt: "Learn how to recreate the ambiance and elegance of a royal dining experience right in the comfort of your own home.",
    category: "Lifestyle",
    date: "Sep 28, 2023",
    author: "Sara Khan",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Decadence Redefined: Our New Dessert Menu",
    excerpt: "We are thrilled to introduce our latest collection of desserts, merging traditional sweetness with modern culinary techniques.",
    category: "Menu Updates",
    date: "Sep 15, 2023",
    author: "Royal Sofra",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF9] flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pb-24">
        {/* Page Header */}
        <section className="pt-20 pb-12 text-center px-4">
          <span className="text-[#D4A24C] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Journal & News
          </span>
          <h1 className="text-5xl md:text-6xl font-serif text-[#2B1B12] mb-6">
            Tastes & <span className="italic">Tales</span>
          </h1>
          <p className="text-[#5C4638] text-lg max-w-2xl mx-auto font-light">
            Immerse yourself in stories of flavor, heritage, and the passion that drives our kitchen.
          </p>
        </section>

        {/* Blog Grid */}
        <section className="max-w-[1400px] mx-auto px-6 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {BLOG_POSTS.map((post) => (
              <article 
                key={post.id} 
                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-[#E8DFD3] hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image Wrapper */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image 
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-[#FFFDF9] text-[#2B1B12] text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-[#5C4638] font-medium mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-[#D4A24C]" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User size={14} className="text-[#D4A24C]" />
                      {post.author}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-serif text-[#2B1B12] mb-4 leading-tight group-hover:text-[#D4A24C] transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-[#5C4638] font-light leading-relaxed mb-8 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.id}`}
                    className="flex items-center gap-2 text-[#2B1B12] font-bold text-sm tracking-wide group/btn hover:text-[#D4A24C] transition-colors mt-auto w-fit"
                  >
                    READ ARTICLE 
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}