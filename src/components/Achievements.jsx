import React from "react";

export default function Achievements() {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Top Tag */}
        <div className="inline-block mb-6 px-5 py-2 text-sm font-medium tracking-wide rounded-full bg-pink-100 text-pink-600">
          TOP ACHIEVEMENTS
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 leading-tight max-w-3xl mx-auto">
          Milestones That Define Our{" "}
          <span className="text-pink-500 italic">Journey</span>
        </h2>

        {/* Subheading */}
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Celebrating the achievements that reflect dedication,
          impact, and excellence in transforming lives.
        </p>

        {/* Achievement Images */}
        <div className="mt-16 grid md:grid-cols-3 gap-10">

          {/* Achievement 1 */}
          <div className="bg-[#fff6f5] p-6 rounded-3xl shadow-md hover:shadow-xl transition duration-300">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=800&q=80"
                alt="Fitness Award"
                className="w-full h-80 object-cover"
              />
            </div>
            <p className="mt-5 text-gray-800 font-semibold">
              National Fitness Excellence Award
            </p>
          </div>

          {/* Achievement 2 */}
          <div className="bg-[#fff6f5] p-6 rounded-3xl shadow-md hover:shadow-xl transition duration-300">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
                alt="Speaking Event"
                className="w-full h-80 object-cover"
              />
            </div>
            <p className="mt-5 text-gray-800 font-semibold">
              Featured Speaker at Women’s Wellness Summit
            </p>
          </div>

          {/* Achievement 3 */}
          <div className="bg-[#fff6f5] p-6 rounded-3xl shadow-md hover:shadow-xl transition duration-300">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOy1eN4CxgjHzUQAtQRfQKX7fLaZd5MFeiQbPjHpZEDQ&s=10"
                alt="Certification"
                className="w-full h-80 object-cover"
              />
            </div>
            <p className="mt-5 text-gray-800 font-semibold">
              Certified Advanced Fat Loss Specialist
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}