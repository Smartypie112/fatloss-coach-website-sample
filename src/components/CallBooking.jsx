import React from "react";
import { Link } from "react-router-dom"

export default function CallBooking() {
  return (
    <section className="w-full bg-[#fdf8f7] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900">
          Book Your Strategy Call
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Start your journey with a free 15-minute consultation.
        </p>

        {/* Form Card */}
        <div className="mt-16 bg-[#f8ebe9] rounded-3xl p-10 md:p-14 shadow-sm">
          <form className="space-y-6">

            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-6 py-4 rounded-2xl bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-300 transition"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-6 py-4 rounded-2xl bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-300 transition"
            />

            {/* Message */}
            <textarea
              rows="5"
              placeholder="Tell me about your goals..."
              className="w-full px-6 py-4 rounded-2xl bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-300 transition resize-none"
            />

            {/* Button */}
            <button
              type="submit"
              className="w-full mt-4 bg-pink-500 hover:bg-rose-600 text-white font-semibold py-4 rounded-2xl transition duration-300 shadow-md hover:shadow-lg"
            ><Link to="/thank-you">
               Submit Application
             </Link>
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}