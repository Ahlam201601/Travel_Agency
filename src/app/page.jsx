"use client";
import React from "react";
import { Plane, Globe2, Star } from "lucide-react";

export default function Home() {
  return (
    <main>
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video
          src="https://v1.pinimg.com/videos/iht/expMp4/73/f6/7b/73f67b181fcb42004eef7b45a765125e_720w.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-6 text-center">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-2">
              <span className="text-cyan-400">Lux</span>
              <span className="text-white">Trip</span>
            </h1>
            <div className="h-1 w-32 bg-cyan-400 mx-auto mt-4"></div>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 max-w-4xl leading-tight">
            Discover Your Next
            <span className="block text-cyan-400 mt-2">Luxury Adventure</span>
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl leading-relaxed text-gray-200">
            Welcome to LuxTrip, your premier travel agency specializing in
            extraordinary luxury experiences. Let us turn your dream vacation
            into reality with personalized service and exclusive destinations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/service"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Discover Services
            </a>
            <a
              href="/about"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-linear-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Why Choose LuxTrip
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Experience luxury travel like never before
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex justify-center mb-4 text-cyan-500">
                <Plane size={60} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Premium Travel
              </h3>
              <p className="text-gray-600 leading-relaxed">
                First-class flights and luxury accommodations at the world's
                finest destinations
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex justify-center mb-4 text-cyan-500">
                <Globe2 size={60} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Global Destinations
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Access to exclusive resorts and hidden gems in over 100
                countries worldwide
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex justify-center mb-4 text-cyan-500">
                <Star size={60} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                VIP Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Personalized concierge service and 24/7 support throughout your
                journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-linear-to-b from-cyan-600 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl mb-8 text-cyan-100">
            Let our expert team craft the perfect luxury travel experience for
            you
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-cyan-600 font-bold px-10 py-4 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </main>
  );
}
