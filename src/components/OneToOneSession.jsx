import React from "react";
import { useNavigate } from "react-router-dom";

export default function OneToOneSession() {
const navigate = useNavigate();
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Top Tag */}
        <div className="inline-block mb-6 px-5 py-2 text-sm font-medium tracking-wide rounded-full bg-pink-100 text-pink-600">
          1:1 PERSONAL COACHING
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 leading-tight max-w-3xl mx-auto">
          Your Personalized <span className="text-pink-500 italic">Fat Loss Plan</span>
          <br /> Designed Just For You
        </h2>

        {/* Subheading */}
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          No generic meal plans. No copy-paste workouts.  
          Get a customized roadmap built around your schedule, lifestyle,
          hormones, and goals.
        </p>

        {/* ============================= */}
        {/* TRANSFORMATION IMAGES */}
        {/* ============================= */}

        <div className="mt-20">
          <h3 className="text-3xl font-serif font-semibold text-gray-900 mb-14">
            Real Client Transformations
          </h3>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Image 1 */}
            <div className="bg-[#fff6f5] p-6 rounded-3xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80"
                  alt="Transformation 1"
                  className="w-full h-80 object-cover"
                />
              </div>
              <p className="mt-5 text-gray-700 font-semibold">
                -12 KG in 16 Weeks
              </p>
            </div>

            {/* Image 2 */}
            <div className="bg-pink-400 p-6 rounded-3xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwtbYufzN3QAFnL84t8FoknaIhKnh8yHqzqvMfDvzpbA&s=10"
                  alt="Transformation 2"
                  className="w-full h-80 object-cover"
                />
              </div>
              <p className="mt-5 text-[#fff6f5] font-semibold">
                -9 KG in 12 Weeks
              </p>
            </div>

            {/* Image 3 */}
            <div className="bg-[#fff6f5] p-6 rounded-3xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1609899537878-88d5ba429bdb?auto=format&fit=crop&w=600&q=80"
                  alt="Transformation 3"
                  className="w-full h-80 object-cover"
                />
              </div>
              <p className="mt-5 text-gray-700 font-semibold">
                -15 KG in 20 Weeks
              </p>
            </div>

          </div>
        </div>

        {/* FEATURES GRID */}
        <div className="mt-24 grid md:grid-cols-3 gap-8 text-left">
          
          <div className="p-8 rounded-2xl bg-[#fff6f5]">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Custom Nutrition Plan
            </h3>
            <p className="text-gray-600">
              Built around your food preferences so you can lose weight
              without starving or giving up your favorite meals.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#fff6f5]">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Smart Workout Strategy
            </h3>
            <p className="text-gray-600">
              Short, effective workouts designed for busy women —
              no 2-hour gym sessions required.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#fff6f5]">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Weekly Accountability
            </h3>
            <p className="text-gray-600">
              Regular check-ins to track progress, adjust strategy,
              and keep you consistent until you reach your goal.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-14">
<button
  onClick={() => navigate("/booking/one-on-one")}
  className="px-10 py-4 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold shadow-lg transition duration-300"
>
  Apply For 1:1 Coaching
</button>
        </div>

      </div>
    </section>
  );
}