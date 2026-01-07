"use client";

import {
  MapPin,
  Plane,
  Hotel,
  Car,
  Camera,
  ShieldCheck,
  FileCheck,
  Headphones,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Trip Planning",
      description:
        "Personalized itineraries designed to match your style, budget, and dream destinations.",
      icon: <MapPin size={42} />,
      cta: "Start Planning",
    },
    {
      title: "Flight Booking",
      description:
        "Access the best airline deals with flexible options and premium seating choices.",
      icon: <Plane size={42} />,
      cta: "Book Flights",
    },
    {
      title: "Hotel Reservation",
      description:
        "Hand-picked luxury hotels, boutique stays, and resorts for every traveler.",
      icon: <Hotel size={42} />,
      cta: "Find Hotels",
    },
    {
      title: "Car Rental",
      description:
        "From economy cars to luxury rides — enjoy smooth and flexible mobility wherever you go.",
      icon: <Car size={42} />,
      cta: "Rent a Car",
    },
    {
      title: "Tours & Activities",
      description:
        "Exclusive local experiences, guided tours, and thrilling adventures worldwide.",
      icon: <Camera size={42} />,
      cta: "Discover Tours",
    },
    {
      title: "Travel Insurance",
      description:
        "Stay protected with comprehensive travel insurance for peace of mind.",
      icon: <ShieldCheck size={42} />,
      cta: "Get Insured",
    },
    {
      title: "Visa Assistance",
      description:
        "Fast and reliable visa support to help you travel without stress.",
      icon: <FileCheck size={42} />,
      cta: "Apply Now",
    },
    {
      title: "24/7 Customer Support",
      description:
        "Our travel experts are available day and night to assist you anytime.",
      icon: <Headphones size={42} />,
      cta: "Contact Support",
    },
  ];

  return (
    <section className="min-h-screen bg-linear-to-b from-white to-gray-50 py-20 px-4 mt-18">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Premium Travel Services
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Discover a world of seamless travel experiences crafted just for you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-cyan-500 mb-4">{service.icon}</div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <button className="px-5 py-2 rounded-full border border-cyan-400 text-cyan-600 hover:bg-cyan-500 hover:text-white transition">
                {service.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
