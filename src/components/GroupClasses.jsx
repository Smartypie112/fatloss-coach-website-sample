import React from "react";
import { useNavigate } from "react-router-dom";

export default function GroupClasses() {
const navigate = useNavigate();
  return (
    <section className="w-full bg-[#fff6f5] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Top Tag */}
        <div className="inline-block mb-6 px-5 py-2 text-sm font-medium tracking-wide rounded-full bg-pink-100 text-pink-600">
          GROUP FAT LOSS PROGRAM
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 leading-tight max-w-3xl mx-auto">
          Transform Together in a{" "}
          <span className="text-pink-500 italic">Supportive Community</span>
        </h2>

        {/* Subheading */}
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Stay motivated, accountable, and consistent inside a results-driven
          group of women working toward the same goal — sustainable fat loss.
        </p>

        {/* ============================= */}
        {/* TRANSFORMATION IMAGES */}
        {/* ============================= */}

        <div className="mt-20">
          <h3 className="text-3xl font-serif font-semibold text-gray-900 mb-14">
            Group Success Stories
          </h3>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Image 1 */}
            <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition duration-300">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80"
                  alt="Group Transformation 1"
                  className="w-full h-80 object-cover"
                />
              </div>
              <p className="mt-5 text-gray-700 font-semibold">
                -8 KG in 10 Weeks
              </p>
            </div>

            {/* Image 2 */}
            <div className="bg-pink-400 p-6 rounded-3xl shadow-md hover:shadow-xl transition duration-300">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwtbYufzN3QAFnL84t8FoknaIhKnh8yHqzqvMfDvzpbA&s=10"
                  alt="Group Transformation 2"
                  className="w-full h-80 object-cover"
                />
              </div>
              <p className="mt-5 text-white font-semibold">
                -11 KG in 14 Weeks
              </p>
            </div>

            {/* Image 3 */}
            <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition duration-300">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1609899537878-88d5ba429bdb?auto=format&fit=crop&w=600&q=80"
                  alt="Group Transformation 3"
                  className="w-full h-80 object-cover"
                />
              </div>
              <p className="mt-5 text-gray-700 font-semibold">
                -10 KG in 12 Weeks
              </p>
            </div>

          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-24 grid md:grid-cols-3 gap-8 text-left">

          <div className="p-8 rounded-2xl bg-white shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Live Weekly Sessions
            </h3>
            <p className="text-gray-600">
              Join interactive coaching calls where we train, learn, and grow
              together — ask questions and get real-time guidance.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Structured Fat Loss Plan
            </h3>
            <p className="text-gray-600">
              Follow a proven step-by-step system designed specifically
              for busy women who want long-term results.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Community Accountability
            </h3>
            <p className="text-gray-600">
              Stay consistent with daily support, progress tracking,
              and motivation from like-minded women.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-14">
<button
  onClick={() => navigate("/booking/group-classes")}
  className="px-10 py-4 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold shadow-lg transition duration-300"
>
  Join The Next Group Batch
</button>
        </div>

      </div>
    </section>
  );
}