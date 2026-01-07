import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 - Brand */}
          <div>
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-cyan-400">Lux</span>
              <span className="text-white">Trip</span>
            </h2>
            <div className="h-1 w-24 bg-cyan-400 mb-4"></div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Your premier luxury travel agency, creating unforgettable
              experiences and extraordinary journeys around the world.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="text-cyan-400">→</span> Home
                </a>
              </li>
              <li>
                <a
                  href="/service"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="text-cyan-400">→</span> Our Services
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="text-cyan-400">→</span> About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="text-cyan-400">→</span> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">
              Contact Us
            </h3>

            <p className="text-gray-400 mb-4">Follow us on social media</p>

            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com"
                target="/"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Instagram size={28} />
              </a>

              <a
                href="https://facebook.com"
                target="/"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Facebook size={28} />
              </a>

              <a
                href="/"
                target="_blank"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Twitter size={28} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 LuxTrip. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="/privacy"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
