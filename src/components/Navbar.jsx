"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X, Mail, Phone, MapPin } from "lucide-react";
import { FaTwitter, FaPinterest, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Bar */}
      <div className="bg-black text-white text-xs sm:text-sm py-2 px-4 flex flex-wrap sm:flex-nowrap justify-between items-center gap-2">
        {/* Left */}
        <div className="flex flex-wrap gap-4 sm:gap-6">
          <div className="flex items-center gap-1">
            <Mail className="text-cyan-600" size={14} />
            <span>LuxTrip@travel.com</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="text-cyan-600" size={14} />
            <span>1 234 5678</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="text-cyan-600" size={14} />
            <span>Broadway & Morris St, New York</span>
          </div>
        </div>
        {/* Right */}
        <div className="flex gap-3 text-cyan-600">
          <FaTwitter size={14} />
          <FaPinterest size={14} />
          <FaFacebook size={14} />
          <FaInstagram size={14} />
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white/90 shadow-md backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <Link href="/" className="text-2xl sm:text-3xl font-bold">
            <span className="text-cyan-600">Lux</span>
            <span className="text-gray-900">Trip</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-gray-900 font-medium">
            <li>
              <Link href="/" className="hover:text-cyan-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/service" className="hover:text-cyan-600 transition">
                Service
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-cyan-600 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-cyan-600 transition">
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-900"
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden border-t border-gray-200 flex flex-col gap-4 items-center py-4 bg-white text-gray-900 text-lg shadow-lg absolute w-full left-0">
            <Link href="/" className="text-cyan-600" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/service" onClick={() => setOpen(false)}>
              Service
            </Link>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}