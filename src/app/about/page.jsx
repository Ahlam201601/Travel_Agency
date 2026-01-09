"use client";
import React, { useState } from "react";

export default function About() {
  const [activeImage, setActiveImage] = useState(0);

  const galleryImages = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
    "https://images.unsplash.com/photo-1549294413-26f195200c16?w=800&q=80",
  ];

  return (
    <main className="min-h-screen bg-linear-to-b from-gray-50 to-white mt-20">
      
      {/* Header Section */}
      <section className="relative py-20 px-4 bg-linear-to-b from-cyan-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="text-cyan-200">LuxTrip</span>
          </h1>
          <div className="h-1 w-32 bg-cyan-300 mx-auto mt-6"></div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Welcome to LuxTrip
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                For over 15 years,{" "}
                <span className="font-semibold text-cyan-600">LuxTrip</span> has
                been creating unforgettable luxury travel experiences around
                the world.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                We specialize in high-end, personalized trips designed to match
                your unique needs and expectations.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Our expert team supports you from planning to return, ensuring
                a smooth and exceptional journey every time.
              </p>

              <div className="pt-6">
                <a
                  href="/contact"
                  className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl h-96">
                <img
                  src={galleryImages[activeImage]}
                  alt="Luxury destination"
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/30 to-transparent"></div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-6 gap-2">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative overflow-hidden rounded-lg h-16 transition-all duration-300 ${
                      activeImage === idx
                        ? "ring-4 ring-cyan-500 scale-105"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Gallery ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
