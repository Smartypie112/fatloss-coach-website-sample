import React from "react";
import { Link } from "react-router-dom";

export default function NoSlotsAvailable() {
  return (
    <section className="w-full bg-[#fff6f5] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Top Tag */}
        <div className="inline-block mb-6 px-5 py-2 text-sm font-medium tracking-wide rounded-full bg-pink-100 text-pink-600">
          ENROLLMENT CURRENTLY CLOSED
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-serif font-semibold text-gray-900 leading-tight">
          All Coaching Slots Are{" "}
          <span className="text-pink-500 italic">Fully Booked</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          I only take a limited number of women each month to ensure
          personalized attention and real results.  
          The next batch opens soon.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/form" 
            className="px-8 py-4 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold shadow-lg transition duration-300">
            Get Notified When Slots Open
          </Link>

        </div>

        {/* Scarcity / Social Proof */}
        <div className="mt-10">
          <p className="text-gray-600 text-sm">
            💗 Over <span className="font-semibold text-gray-900">200+ women</span> have already transformed their lives.
          </p>

          <p className="mt-2 text-sm text-gray-500">
            New spots typically fill within 48 hours of opening.
          </p>
        </div>

      </div>
    </section>
  );
}