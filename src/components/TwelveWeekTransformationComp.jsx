import React from "react";
import { useNavigate } from "react-router-dom";

export default function TwelveWeekTransformationComp() {
const navigate = useNavigate();
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Top Tag */}
        <div className="inline-block mb-6 px-5 py-2 text-sm font-medium tracking-wide rounded-full bg-pink-100 text-pink-600">
          12 WEEK TRANSFORMATION PROGRAM
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 leading-tight max-w-3xl mx-auto">
          Your Step-By-Step{" "}
          <span className="text-pink-500 italic">Transformation Roadmap</span>
        </h2>

        {/* Subheading */}
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          A structured 12-week system designed to help you lose 8–12kg,
          build confidence, and create sustainable habits for life.
        </p>

        {/* ============================= */}
        {/* TRANSFORMATION RESULTS */}
        {/* ============================= */}

        <div className="mt-20">
          <h3 className="text-3xl font-serif font-semibold text-gray-900 mb-14">
            12 Week Success Stories
          </h3>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Image 1 */}
            <div className="bg-[#fff6f5] p-6 rounded-3xl shadow-md hover:shadow-xl transition duration-300">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80"
                  alt="12 Week Result 1"
                  className="w-full h-80 object-cover"
                />
              </div>
              <p className="mt-5 text-gray-700 font-semibold">
                -10 KG in 12 Weeks
              </p>
            </div>

            {/* Image 2 */}
            <div className="bg-pink-400 p-6 rounded-3xl shadow-md hover:shadow-xl transition duration-300">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwtbYufzN3QAFnL84t8FoknaIhKnh8yHqzqvMfDvzpbA&s=10"
                  alt="12 Week Result 2"
                  className="w-full h-80 object-cover"
                />
              </div>
              <p className="mt-5 text-[#fff6f5] font-semibold">
                -8 KG in 12 Weeks
              </p>
            </div>

            {/* Image 3 */}
            <div className="bg-[#fff6f5] p-6 rounded-3xl shadow-md hover:shadow-xl transition duration-300">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1609899537878-88d5ba429bdb?auto=format&fit=crop&w=600&q=80"
                  alt="12 Week Result 3"
                  className="w-full h-80 object-cover"
                />
              </div>
              <p className="mt-5 text-gray-700 font-semibold">
                -12 KG in 12 Weeks
              </p>
            </div>

          </div>
        </div>

        {/* ============================= */}
        {/* 3 PHASE SYSTEM */}
        {/* ============================= */}

        <div className="mt-24 grid md:grid-cols-3 gap-10 text-left">

          {/* Phase 1 */}
          <div className="p-8 rounded-2xl bg-[#fff6f5]">
            <div className="text-pink-500 font-semibold mb-3">
              Weeks 1–4
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Foundation Phase
            </h3>
            <p className="text-gray-600">
              Reset your metabolism, improve eating habits,
              and build consistency with simple, sustainable routines.
            </p>
          </div>

          {/* Phase 2 */}
          <div className="p-8 rounded-2xl bg-[#fff6f5]">
            <div className="text-pink-500 font-semibold mb-3">
              Weeks 5–8
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Fat Loss Acceleration
            </h3>
            <p className="text-gray-600">
              Increase intensity, optimize nutrition, and
              maximize visible fat loss while maintaining energy.
            </p>
          </div>

          {/* Phase 3 */}
          <div className="p-8 rounded-2xl bg-[#fff6f5]">
            <div className="text-pink-500 font-semibold mb-3">
              Weeks 9–12
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Lifestyle Integration
            </h3>
            <p className="text-gray-600">
              Lock in your results, prevent rebound weight gain,
              and build habits that last beyond the program.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-16">
<button
  onClick={() => navigate("/booking/weight-loss-program")}
  className="px-10 py-4 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold shadow-lg transition duration-300"
>
  Start Your 12 Week Transformation
</button>
        </div>

      </div>
    </section>
  );
}