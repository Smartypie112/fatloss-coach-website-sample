import React from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      image: "https://cdn.prod.website-files.com/666be273b47723af962155e4/666be273b47723af962158ad_image-mic.webp",
      quote:
        "I finally fit into my pre-pregnancy jeans! The best part is I didn’t have to give up my nightly chocolate. Elena changed my life.",
      name: "Sarah J.",
      result: "-14kg",
      time: "Lost 14kg in 12 weeks",
    },
    {
      image: "https://www.cosmetic360.in/img/Why%20Women%20opt%20for%20Slimming%20Treatment.jpg",
      quote:
        "I used to think I had to do hours of cardio. With this program, I workout 30 mins a day and eat more than before!",
      name: "Michelle K.",
      result: "-9kg",
      time: "Lost 9kg in 8 weeks",
    },
    {
      image: "https://cdn.prod.website-files.com/666be273b47723af962155e4/666be273b47723af962158ac_image-sg.webp",
      quote:
        "My energy is back, my hormones are balanced, and I feel confident in my skin again. This isn’t a diet, it’s a lifestyle.",
      name: "Emma T.",
      result: "-11kg",
      time: "Lost 11kg in 10 weeks",
    },
  ];

  return (
    <section className="w-full bg-[#fdf8f7] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-pink-500 font-medium">
            SUCCESS STORIES
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 mt-4">
            Real Women. Real Transformations.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  "{item.quote}"
                </p>

                {/* Bottom Section */}
                <div className="mt-6 flex justify-between items-end">
                  <div>
                    <p className="font-semibold text-gray-900">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {item.time}
                    </p>
                  </div>

                  <p className="text-pink-500 font-semibold text-lg">
                    {item.result}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}