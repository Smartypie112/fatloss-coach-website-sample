import React from "react";
import { Award, Dumbbell, Heart, BadgeCheck } from "lucide-react";

export default function CoachSection() {
  const credentials = [
    {
      icon: <BadgeCheck className="w-5 h-5 text-pink-500" />,
      title: "Certified Nutritionist",
    },
    {
      icon: <Dumbbell className="w-5 h-5 text-pink-500" />,
      title: "Strength Coach",
    },
    {
      icon: <Award className="w-5 h-5 text-pink-500" />,
      title: "7+ Years Experience",
    },
    {
      icon: <Heart className="w-5 h-5 text-pink-500" />,
      title: "Hormone Specialist",
    },
  ];

  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top Image */}
        <div className="rounded-3xl overflow-hidden shadow-xl mb-16">
          <img
            src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80"
            alt="Coach Elena"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
        </div>

        {/* Content */}
        <div className="max-w-4xl">

          {/* Small Label */}
          <p className="text-sm tracking-widest text-pink-500 font-medium mb-4">
            YOUR DEDICATED COACH
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900">
            Meet Your Coach, Elena
          </h2>

          {/* Bio Paragraph 1 */}
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Hi, I'm Elena! I'm a{" "}
            <span className="text-pink-500 font-semibold">
              Certified Women's Fat Loss Specialist
            </span>{" "}
            helping 200+ women transform their body and confidence without
            restricted diets or exhausting cardio.
          </p>

          {/* Bio Paragraph 2 */}
          <p className="mt-4 text-gray-600 leading-relaxed">
            After struggling with yo-yo dieting for years, I discovered that
            women need a different approach. My method focuses on hormonal
            health, metabolic restoration, and sustainable habits that fit into
            a busy life.
          </p>

          {/* Credentials */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {credentials.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500/10">
                  {item.icon}
                </div>
                <p className="text-gray-800 font-medium">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}