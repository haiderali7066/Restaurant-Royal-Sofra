"use client";

import { useState } from "react";

export default function WhoWeAre() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="px-4 py-10 sm:py-16 sm:px-6 lg:px-8 max-w-md mx-auto flex flex-col gap-8">
      {/* Video / Image Preview */}
      <div className="relative w-full max-w-xs mx-auto rounded-lg overflow-hidden shadow-lg">
        {!isPlaying ? (
          <>
            <img
              src="/0.jpeg" // Replace with actual preview image path
              alt="Medalign Clinic Preview"
              className="w-full h-auto object-cover"
            />
            {/* Red Play Button */}
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition rounded-lg"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-8 h-8 sm:w-10 sm:h-10 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 3v18l15-9L5 3z"
                  />
                </svg>
              </div>
            </button>
          </>
        ) : (
          <video
            src="/v1.mp4" // Replace with actual video path
            controls
            autoPlay
            className="w-full h-auto object-cover rounded-lg"
          />
        )}
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
        Who We Are
      </h2>

      {/* Text */}
      <p className="text-gray-700 text-center text-base sm:text-lg md:text-xl">
        At <strong>Medalign Clinic</strong>, we are dedicated to improving the
        health and well-being of every patient who walks through our doors. Our
        team of highly qualified physiotherapists combines expertise,
        compassion, and state-of-the-art techniques to provide personalized
        treatment plans tailored to your unique needs.
        <br />
        <br />
        We believe in a holistic approach, focusing not just on recovery but on
        prevention and overall wellness. From advanced physiotherapy treatments
        to ergonomic and workplace assessments, we are committed to helping you
        achieve optimal health and a better quality of life.
      </p>
    </section>
  );
}
