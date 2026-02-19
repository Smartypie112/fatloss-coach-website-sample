import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What are the common symptoms of low hormone levels?",
      answer:
        "Common symptoms of low hormone levels in women include lower energy, lower quality sleep, lower sex drive, lesser recovery from workouts, and more.",
    },
    {
      question: "How do I know if I need hormone replacement therapy (HRT)?",
      answer:
        "If you have any of the common symptoms, you should get an evaluation. During the evaluation, clinicians review your health history, symptoms, and bloodwork to determine if you are a candidate for HRT.",
    },
    {
      question: "How long does an evaluation take, and what can I expect?",
      answer:
        "Evaluations typically take 45 minutes or less. Clinicians review your medical history, symptoms, and process bloodwork to determine candidacy for Hormone Replacement Therapy (HRT).",
    },
    {
      question: "Do you accept my health insurance?",
      answer:
        "Health insurance coverage is reviewed during your first appointment. Affordable self-pay alternatives are also available.",
    },
    {
      question: "Is Ageless Women’s Health an alternative to my OBGYN?",
      answer:
        "No. This service is designed to augment the care you are already receiving. It provides expert titration of Hormone Replacement Therapy and medical weight loss support.",
    },
    {
      question: "What other services are offered?",
      answer:
        "In addition to Hormone Replacement Therapy and Medical Weight Loss including Semaglutide, services include B-12 shots, MIC injections, IV Hydration Therapy, birth control management, concierge medicine, and more.",
    },
    {
      question: "What other benefits do I get as a patient?",
      answer:
        "Patients gain access to concierge medicine services including care for episodic colds, coughs, musculoskeletal injuries, blood pressure, cholesterol management, and more.",
    },
    {
      question: "Is Hormone Replacement Therapy only for women in menopause?",
      answer:
        "No. While menopausal women benefit greatly, many younger women (18+) who qualify can also benefit from medically supervised HRT.",
    },
    {
      question: "Do you offer Semaglutide (GLP-1 Agonists)?",
      answer:
        "Yes. Medically supervised Semaglutide is offered with careful dose titration to minimize unwanted side effects.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#f5f3fb] py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-5 py-2 text-sm font-medium tracking-wide rounded-full bg-pink-100 text-pink-600">
            FAQs
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-sm transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-lg md:text-xl font-semibold text-pink-600">
                  {faq.question}
                </h3>

                {openIndex === index ? (
                  <Minus className="text-pink-600" />
                ) : (
                  <Plus className="text-pink-600" />
                )}
              </button>

              {openIndex === index && (
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}