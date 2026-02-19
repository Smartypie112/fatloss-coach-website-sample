import React from "react";
import { Utensils, Dumbbell, Video, MessageCircle, Brain } from "lucide-react";
import { Link } from "react-router-dom";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Utensils className="w-5 h-5 text-orange-500" />,
      title: "Custom Meal Planning",
      description:
        "Delicious, family-friendly meal plans tailored to your taste buds and metabolic needs. No starvation allowed.",
    },
    {
      icon: <Dumbbell className="w-5 h-5 text-pink-500" />,
      title: "Hormone-Friendly Workouts",
      description:
        "Efficient 30-minute sessions designed to boost metabolism without spiking cortisol. Home or gym options.",
    },
    {
      icon: <Video className="w-5 h-5 text-blue-500" />,
      title: "Weekly Accountability Calls",
      description:
        "Direct access to me every week to review progress, adjust plans, and overcome obstacles together.",
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-green-500" />,
      title: "Daily WhatsApp Support",
      description:
        "Have a question at the grocery store? Need motivation? I'm just a text away for daily guidance.",
    },
    {
      icon: <Brain className="w-5 h-5 text-purple-500" />,
      title: "Mindset Coaching",
      description:
        "We rewrite your relationship with food and body image so you stop self-sabotaging your success.",
    },
  ];

  return (
    <section className="w-full bg-[#fdf8f7] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-rose-500 font-medium">
            WHAT YOU GET
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 mt-4">
            The 12-Week Sustainable Fat Loss Blueprint
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            A comprehensive system designed to get you results that stick.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-sm hover:shadow-lg transition duration-300 p-8 flex flex-col"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-rose-50 mb-6">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                {feature.description}
              </p>
            </div>
          ))}

          {/* CTA Card */}
          <div className="bg-white rounded-3xl shadow-sm hover:shadow-lg transition duration-300 p-8 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              And Much More...
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Supplement guides, grocery lists, dining out cheatsheets.
            </p>
            <Link to="/services" className="text-rose-500 font-medium hover:underline">
              Apply now →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}