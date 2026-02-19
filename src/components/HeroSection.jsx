import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#fff6f5] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Top Tag */}
        <div className="inline-block mb-6 px-5 py-2 text-sm font-medium tracking-wide rounded-full bg-pink-100 text-pink-600">
          SUSTAINABLE WEIGHT LOSS FOR WOMEN
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-serif font-semibold text-gray-900 leading-tight max-w-4xl mx-auto">
          Lose 8–12kg Without{" "}
          <span className="text-pink-500 italic">Starving</span> or Spending
          Hours in the Gym.
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Sustainable fat loss coaching designed for busy women who want real,
          lasting results without sacrificing their lifestyle.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
<Link
    to="/analyser"
    className="px-8 py-4 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold shadow-lg transition duration-300 text-center"
  >
    Take the 5-Min Weight Analysis
  </Link>

  <Link
    to="/results"
    className="px-8 py-4 rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-800 font-medium flex items-center justify-center gap-2 transition duration-300"
  >
    <span>▶</span> See Transformations
  </Link>
        </div>

        {/* Social Proof */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex -space-x-3">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="client"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt="client"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src="https://randomuser.me/api/portraits/women/32.jpg"
              alt="client"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </div>

          <p className="text-gray-600 text-sm">
            Trusted by <span className="font-semibold text-gray-900">200+ women</span> just like you
          </p>
        </div>

      </div>
    </section>
  );
}