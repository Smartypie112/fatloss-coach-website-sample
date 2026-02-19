import React from "react";
import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="relative w-full bg-[#1f1f1f] py-28 px-6 overflow-hidden">
      
      {/* Decorative Background Curve */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-white/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto text-center text-white">

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-serif font-semibold leading-tight">
          Your Transformation Starts Today.
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Stop waiting for <span className="italic">"Monday"</span>. 
          Take the first step towards the body and confidence you deserve right now.
        </p>

        {/* Button */}
        <div className="mt-12">
          <Link to="/services" className="bg-pink-500 hover:bg-rose-600 text-white text-lg font-semibold px-10 py-4 rounded-full transition duration-300 shadow-lg hover:shadow-xl">
            Apply For Coaching
          </Link>
        </div>

        {/* Limited Spots */}
        <div className="mt-6 flex items-center justify-center gap-2 text-gray-400 text-sm">
          <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
          <span>Limited spots available for this month.</span>
        </div>

      </div>
    </section>
  );
}