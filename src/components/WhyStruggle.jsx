import React from "react";
import { Droplet, Heart, Clock, RefreshCw, RotateCcw } from "lucide-react";

export default function WhyStruggle() {
  const struggles = [
    {
      icon: <Droplet className="w-6 h-6 text-pink-500" />,
      title: "Hormonal Imbalance",
      desc: "Fighting against your body's natural cycle.",
    },
    {
      icon: <Heart className="w-6 h-6 text-pink-500" />,
      title: "Emotional Eating",
      desc: "Using food to cope with stress and fatigue.",
    },
    {
      icon: <Clock className="w-6 h-6 text-pink-500" />,
      title: "No Time",
      desc: "Too busy caring for everyone else but yourself.",
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-pink-500" />,
      title: "Inconsistency",
      desc: "Starting strong but falling off after a few weeks.",
    },
    {
      icon: <RotateCcw className="w-6 h-6 text-pink-500" />,
      title: "Rebounding",
      desc: "Gaining all the weight back (plus more).",
    },
  ];

  return (
    <section className="w-full bg-[#fdf8f7] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900">
          Why Most Women Struggle to Lose Weight
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          It's not your fault. The traditional approach ignores the female
          physiology and lifestyle.
        </p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {struggles.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition duration-300"
            >
              {/* Icon Circle */}
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-pink-100 mb-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}