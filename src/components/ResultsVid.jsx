import React from "react";
import { Link } from "react-router-dom";

export default function ResultsVid() {
  return (
    <section className="w-full bg-[#fff6f5] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Top Tag */}
        <div className="inline-block mb-6 px-5 py-2 text-sm font-medium tracking-wide rounded-full bg-pink-100 text-pink-600">
          CLIENT VIDEO RESULTS
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 leading-tight max-w-3xl mx-auto">
          Watch Real <span className="text-pink-500 italic">Transformations</span>
        </h2>

        {/* Subheading */}
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          These are real women sharing their journey, progress,
          and confidence after joining our program.
        </p>

        {/* Video Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-10">

          {/* Video 1 */}
          <div className="bg-white p-4 rounded-3xl shadow-md hover:shadow-xl transition duration-300">
            <div className="rounded-2xl overflow-hidden">
              <video
                className="w-full h-80 object-cover"
                controls
              >
                <source src="/videos/result1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="mt-4 text-gray-700 font-semibold">
              -10 KG in 12 Weeks
            </p>
          </div>

          {/* Video 2 */}
          <div className="bg-white p-4 rounded-3xl shadow-md hover:shadow-xl transition duration-300">
            <div className="rounded-2xl overflow-hidden">
              <video
                className="w-full h-80 object-cover"
                controls
              >
                <source src="/videos/result2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="mt-4 text-gray-700 font-semibold">
              -8 KG in 10 Weeks
            </p>
          </div>

          {/* Video 3 */}
          <div className="bg-white p-4 rounded-3xl shadow-md hover:shadow-xl transition duration-300">
            <div className="rounded-2xl overflow-hidden">
              <video
                className="w-full h-80 object-cover"
                controls
              >
                <source src="/videos/result3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="mt-4 text-gray-700 font-semibold">
              -12 KG in 14 Weeks
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-16">
          <Link to="/services" className="px-10 py-4 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold shadow-lg transition duration-300">
            Start Your Transformation
          </Link>
        </div>

      </div>
    </section>
  );
}