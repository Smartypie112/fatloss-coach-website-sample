import React from "react";
import { Link } from "react-router-dom";

export default function ThankYouSection() {
  return (
    <section className="w-full bg-[#fff6f5] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Top Tag */}
        <div className="inline-block mb-6 px-5 py-2 text-sm font-medium tracking-wide rounded-full bg-green-100 text-green-600">
          BOOKING CONFIRMED
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-serif font-semibold text-gray-900 leading-tight">
          You're Officially{" "}
          <span className="text-pink-500 italic">In 🎉</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Your has been successfully booked.  
          Please check your email for confirmation and call details.
        </p>

        {/* Extra Guidance */}
        <div className="mt-8 text-gray-600 max-w-xl mx-auto">
          <p>
            While you wait for your session, feel free to explore how we help
            women achieve sustainable fat loss without extreme dieting.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <Link
            to="/services"
            className="px-8 py-4 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold shadow-lg transition duration-300 text-center"
          >
            Explore Our Services
          </Link>

          <Link
            to="/results"
            className="px-8 py-4 rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-800 font-medium transition duration-300 text-center"
          >
            See Client Transformations
          </Link>

        </div>

        {/* Footer Note */}
        <p className="mt-10 text-sm text-gray-500">
          💗 We can’t wait to help you start your transformation journey.
        </p>

      </div>
    </section>
  );
}