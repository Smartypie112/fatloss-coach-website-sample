import React from "react";
import { Instagram, Facebook, Music2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#fdf8f7] pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center">
                <span className="text-pink-500 font-semibold">✦</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-gray-900">
                ELENA ROSSI
              </h3>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Empowering women to lose weight sustainably and love their bodies again.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 text-gray-500">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 hover:text-rose-500 transition cursor-pointer" />
              </a>

              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5 hover:text-rose-500 transition cursor-pointer" />
              </a>

              <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                <Music2 className="w-5 h-5 hover:text-rose-500 transition cursor-pointer" />
              </a>
            </div>
          </div>

          {/* Program Column */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Program</h4>
            <ul className="space-y-3 text-sm text-gray-600">

              <li>
                <Link to="/services/weight-loss-program" className="hover:text-rose-500 transition">
                  12 Week Transformation
                </Link>
              </li>

              <li>
                <Link to="/services/one-on-one" className="hover:text-rose-500 transition">
                  1:1 Coaching
                </Link>
              </li>

              <li>
                <Link to="/services/group-classes" className="hover:text-rose-500 transition">
                  Group Classes
                </Link>
              </li>

              <li>
                <Link to="/results" className="hover:text-rose-500 transition">
                  Transformations
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:text-rose-500 transition">
                  Book a Call
                </Link>
              </li>

            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-600">

              <li>
                <Link to="/about" className="hover:text-rose-500 transition">
                  About Elena
                </Link>
              </li>

              <li>
                <Link to="/faqs" className="hover:text-rose-500 transition">
                  FAQs
                </Link>
              </li>

            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Newsletter</h4>
            <p className="text-gray-600 text-sm mb-4">
              Get free fat loss tips delivered to your inbox.
            </p>

            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-300 transition mb-3"
            />

            <Link
              to="/thank-you"
              className="block w-full text-center bg-black hover:bg-gray-900 text-white py-3 rounded-xl font-medium transition"
            >
              Subscribe
            </Link>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-16 pt-6 text-center text-sm text-gray-500">
          © 2024 Elena Rossi Coaching. All rights reserved.
        </div>

      </div>
    </footer>
  );
}