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
    "https://images.unsplash.com/photo-1549294413-26f195200c16?w=800&q=80"
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

      

      
    </main>
  );
}