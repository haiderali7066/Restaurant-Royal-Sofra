"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number; // 1-5
}

const testimonials: Testimonial[] = [
  {
  name: "Tahir Sibtain",
  role: "Patient",
  text: "With severe back pain I went to the clinic which took great care of me and I came out with a smiling face. Great relief for which I was desperate. My body movements are free, life is back to normal. I strongly recommend trying this facility with true expertise.",
  rating: 5,
},
{
  name: "Javeria Sehar",
  role: "Patient",
  text: "Very helpful and professional attitude. My mom was in serious pain and they responded promptly. Dr. Anum stayed in constant touch, guided emergency techniques, and provided gentle, professional treatment. Alhamdulillah, her sciatica and shoulder pain are relieved. A genuinely excellent experience.",
  rating: 5,
},
{
  name: "Shahzeb Khattak",
  role: "Patient",
  text: "Dr. Anum Zafar is widely recognized for her exceptional skills and dedication. Patients commend her thorough assessments, personalized treatment plans, and compassionate care. Her commitment to restoring mobility and quality of life has earned deep trust in the community.",
  rating: 5,
},

];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full max-w-3xl mx-auto px-4 py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
        What Our Patients Say
      </h2>

      <div className="relative overflow-hidden rounded-xl shadow-lg border border-b-blue-400 bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 flex flex-col items-center text-center"
          >
            {/* Rating Stars */}
            <div className="flex mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 sm:w-6 sm:h-6 ${
                    i < testimonials[current].rating
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            <p className="text-gray-700 mb-4 text-sm sm:text-base md:text-lg">
              "{testimonials[current].text}"
            </p>
            <h3 className="font-semibold text-gray-900 text-base sm:text-lg md:text-xl">
              {testimonials[current].name}
            </h3>
            <span className="text-sm sm:text-base text-gray-500">
              {testimonials[current].role}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute top-1/2 left-2 -translate-y-1/2 p-2 sm:p-3 bg-white rounded-full shadow hover:bg-gray-100 transition"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute top-1/2 right-2 -translate-y-1/2 p-2 sm:p-3 bg-white rounded-full shadow hover:bg-gray-100 transition"
        >
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full cursor-pointer transition-colors ${
              index === current ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}
