"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const heroImages = [
  "https://res.cloudinary.com/dvu9vmcqd/image/upload/v1769616099/h1_kru0u2.jpg",
  "/h2.jpg",
  "/h3.jpg",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide images every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden py-24">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: idx === currentIndex ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={img}
              alt={`Hero ${idx}`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center md:text-left">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.span
            variants={itemVariants}
            className="text-sm font-medium text-primary"
          >
            Welcome to MedAlign
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 leading-tight text-white"
          >
            Rehab. Realign. Restore.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl mt-6 leading-relaxed text-white/90"
          >
            Experience world-class physiotherapy care designed to accelerate
            your recovery and restore your quality of life.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col mt-20 sm:flex-row gap-4 mt-8 justify-start items-start"
          >
            {/* Book Appointment → WhatsApp */}
            <a
              href="https://wa.me/923260341216"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(45, 138, 143, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-white font-bold flex items-center gap-2 hover:shadow-lg transition-shadow"
              >
                Book Appointment <ArrowRight size={20} />
              </motion.button>
            </a>

            {/* Learn More → WhatsApp */}
            {/* <a
              href="https://wa.me/923260341216"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors"
              >
                Learn More
              </motion.button>
            </a> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
