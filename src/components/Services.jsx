import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Top Tag */}
        <div className="inline-block mb-6 px-5 py-2 text-sm font-medium tracking-wide rounded-full bg-pink-100 text-pink-600">
          BOOK A FREE STRATEGY CALL
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 leading-tight max-w-3xl mx-auto">
          Choose Your <span className="text-pink-500 italic">Program</span>
        </h2>

        {/* Subheading */}
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Select the program that fits your goals and lifestyle.
          We'll guide you to the right transformation path.
        </p>

        {/* Program Options */}
        <div className="mt-16 grid md:grid-cols-3 gap-10">

          {/* 1:1 Coaching */}
          <Link to="/services/one-on-one">
            <div className="bg-[#fff6f5] p-6 rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCH4hb6oVzdRaxTDNfs1WWGV9R8S0Q0q9wql57sxkDSQ&s=10"
                  alt="1:1 Coaching"
                  className="w-full h-72 object-cover"
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                1:1 Coaching
              </h3>
              <p className="mt-2 text-gray-600">
                Personalized coaching tailored to your body,
                lifestyle, and goals.
              </p>
              <button className="mt-6 px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold transition duration-300">
                Apply Now
              </button>
            </div>
          </Link>

          {/* Group Classes */}
          <Link to="/services/group-classes">
            <div className="bg-[#fff6f5] p-6 rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80"
                  alt="Group Classes"
                  className="w-full h-72 object-cover"
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                Group Classes
              </h3>
              <p className="mt-2 text-gray-600">
                Transform alongside a supportive community
                of motivated women.
              </p>
              <button className="mt-6 px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold transition duration-300">
                Join Group
              </button>
            </div>
          </Link>

          {/* 12 Week Transformation */}
          <Link to="/services/weight-loss-program">
            <div className="bg-[#fff6f5] p-6 rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRip-l-T5wp7ixRw19OvvWJUmW3Cmd7T9oVs76wugnFVw&s=10"
                  alt="12 Week Transformation"
                  className="w-full h-72 object-cover"
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                12-Week Transformation
              </h3>
              <p className="mt-2 text-gray-600">
                A structured 12-week roadmap for lasting
                fat loss and confidence.
              </p>
              <button className="mt-6 px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold transition duration-300">
                Start Program
              </button>
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
}