"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";

const posts = [
  {
    id: 1,
    title: "5 Exercises to Improve Back Pain",
    description:
      "Simple physiotherapy exercises you can do at home to reduce back pain.",
    image: "/1.jpeg",
    category: "Physiotherapy",
    date: "Jan 28, 2026",
    slug: "back-pain-exercises",
  },
  {
    id: 2,
    title: "Preventing Knee Injuries",
    description: "Tips and techniques to avoid knee injuries during workouts.",
    image: "/8.jpeg",
    category: "Health",
    date: "Jan 25, 2026",
    slug: "prevent-knee-injuries",
  },
  {
    id: 3,
    title: "Proper Posture for Office Workers",
    description:
      "How to maintain posture and avoid physiotherapy issues from long desk hours.",
    image: "/3.jpeg",
    category: "Wellness",
    date: "Jan 20, 2026",
    slug: "proper-posture-office",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] sm:h-[70vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/6.jpeg"
          alt="Hero Background"
          fill
          className="object-cover object-center"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-3xl px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Your Health, Our Priority
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg sm:text-xl text-gray-200 mb-6"
          >
            Discover physiotherapy tips, exercises, and wellness advice to feel
            your best every day.
          </motion.p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white font-semibold px-6 py-3 shadow-md hover:shadow-lg transition"
          >
            Book a Session
          </Link>
        </div>
      </section>

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-20 space-y-16">
        {/* Featured Posts Carousel */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
            Featured Posts
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="overflow-x-auto flex gap-4 pb-4"
          >
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="min-w-[280px] bg-white shadow-md overflow-hidden flex-shrink-0 hover:scale-105 transition transform"
              >
                <div className="relative h-44 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-white">
                  <span className="text-sm text-primary font-semibold">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold mt-1 text-gray-800">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mt-1 text-sm line-clamp-2">
                    {post.description}
                  </p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-gray-400 text-xs">{post.date}</span>
                    <span className="text-primary text-sm font-medium">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </section>

        {/* Latest Posts */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
            Latest Posts
          </h2>
          <div className="space-y-6">
            {posts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white shadow-md overflow-hidden flex flex-col sm:flex-row gap-4 hover:shadow-lg transition"
              >
                <div className="relative w-full sm:w-1/3 h-40 sm:h-auto">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between bg-white">
                  <div>
                    <span className="text-sm text-primary font-semibold">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold mt-1 text-gray-800">
                      {post.title}
                    </h3>
                    <p className="text-gray-700 mt-1 text-sm">
                      {post.description}
                    </p>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-gray-400 text-xs">{post.date}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About / Text Section */}
        <section className="bg-white shadow-md py-12 px-6 sm:px-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
            About PhysioCare
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-4">
            At PhysioCare, we provide expert physiotherapy guidance to help you
            recover faster, improve mobility, and maintain a healthy lifestyle.
            Our team of certified therapists shares exercises, tips, and
            wellness advice through our blog to keep you informed and active.
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
            Whether you are suffering from back pain, joint issues, or posture
            problems, our blog guides you with actionable exercises and health
            tips.
          </p>
        </section>

        {/* Benefits / Why Follow Section */}
        <section className="py-12 px-6 sm:px-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 text-center">
            Why Follow Our Blog
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white shadow-md p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Expert Advice
              </h3>
              <p className="text-gray-600 text-sm">
                All tips and exercises are provided by certified
                physiotherapists.
              </p>
            </div>
            <div className="bg-white shadow-md p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Health Tips
              </h3>
              <p className="text-gray-600 text-sm">
                Learn daily exercises, posture fixes, and lifestyle tips for
                better health.
              </p>
            </div>
            <div className="bg-white shadow-md p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-600 text-sm">
                Get the latest trends in physiotherapy and wellness guidance.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 px-6 sm:px-10 bg-primary text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="mb-6">
            Book a physiotherapy session with our experts today and take the
            first step towards better health.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary font-semibold px-6 py-3 shadow-md hover:shadow-lg transition"
          >
            Book a Session
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
