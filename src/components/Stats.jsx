import React from "react";
import { Award, Users, TrendingDown, Star } from "lucide-react";

export default function Stats() {
  return (
    <section className="w-full bg-[#fff6f5] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Top Tag */}
        <div className="inline-block mb-6 px-5 py-2 text-sm font-medium tracking-wide rounded-full bg-pink-100 text-pink-600">
          OUR ACHIEVEMENTS
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 leading-tight max-w-3xl mx-auto">
          Real Results. <span className="text-pink-500 italic">Proven Impact.</span>
        </h2>

        {/* Subheading */}
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Helping women transform their bodies, mindset, and lifestyle
          with sustainable fat loss programs.
        </p>

        {/* Achievement Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">

          {/* Clients */}
          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition duration-300">
            <Users className="w-8 h-8 text-pink-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900">500+</h3>
            <p className="mt-2 text-gray-600 font-medium">
              Women Transformed
            </p>
          </div>

          {/* Weight Lost */}
          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition duration-300">
            <TrendingDown className="w-8 h-8 text-pink-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900">3,500+ KG</h3>
            <p className="mt-2 text-gray-600 font-medium">
              Total Weight Lost
            </p>
          </div>

          {/* Success Rate */}
          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition duration-300">
            <Star className="w-8 h-8 text-pink-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900">92%</h3>
            <p className="mt-2 text-gray-600 font-medium">
              Client Success Rate
            </p>
          </div>

          {/* Experience */}
          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition duration-300">
            <Award className="w-8 h-8 text-pink-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900">5+ Years</h3>
            <p className="mt-2 text-gray-600 font-medium">
              Coaching Experience
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}