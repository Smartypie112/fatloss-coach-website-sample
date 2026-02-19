import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function BodyAnalysisSection() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    gender: "",
    age: "",
    height: "",
    weight: "",
    activity: "",
    waist: "",
    neck: "",
    hip: "",
  });
  const [wantsFat, setWantsFat] = useState(null);
  const [results, setResults] = useState(null);

  const steps = [
    "gender",
    "age",
    "height",
    "weight",
    "activity",
    "fatChoice",
    "measurements",
  ];

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSelect = (key, value) => {
    setData((prev) => ({ ...prev, [key]: value }));
    nextStep(); // auto next
  };

  const calculate = () => {
    const { gender, age, height, weight, activity } = data;

    const bmi = weight / ((height / 100) ** 2);
    const bmiCategory =
      bmi < 18.5
        ? "Underweight"
        : bmi < 25
        ? "Normal 💪"
        : bmi < 30
        ? "Overweight ⚠️"
        : "Obese 🚨";

    const bmr =
      gender === "male"
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;

    const dailyCalories = bmr * activity;

    let bodyFat = null;
    let whr = null;

    if (wantsFat === "yes") {
      const { waist, neck, hip } = data;

      if (gender === "male") {
        bodyFat =
          86.01 * Math.log10(waist - neck) -
          70.041 * Math.log10(height) +
          36.76;
      } else {
        bodyFat =
          163.205 * Math.log10(waist + hip - neck) -
          97.684 * Math.log10(height) -
          78.387;
      }

      whr = waist / height;
    }

    setResults({
      bmi,
      bmiCategory,
      bmr,
      dailyCalories,
      bodyFat,
      whr,
    });
  };

  const renderStep = () => {
    switch (steps[step]) {
      case "gender":
        return (
          <>
            <h2 className="text-3xl font-serif mb-8">
              👩‍🦰 Select Your Gender
            </h2>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => handleSelect("gender", "female")}
                className="px-8 py-4 rounded-full border hover:bg-pink-100"
              >
                👩 Female
              </button>
              <button
                onClick={() => handleSelect("gender", "male")}
                className="px-8 py-4 rounded-full border hover:bg-pink-100"
              >
                👨 Male
              </button>
            </div>
          </>
        );

      case "age":
      case "height":
      case "weight":
        return (
          <>
            <h2 className="text-3xl font-serif mb-8 capitalize">
              📏 Enter Your {steps[step]}
            </h2>

            <input
              type="number"
              value={data[steps[step]]}
              onChange={(e) =>
                setData({ ...data, [steps[step]]: Number(e.target.value) })
              }
              className="w-full max-w-md mx-auto block p-4 border rounded-full text-center text-lg"
            />
          </>
        );

      case "activity":
        const activities = [
          ["🛋 Sedentary", 1.2],
          ["🚶 Lightly Active", 1.375],
          ["🏃 Moderately Active", 1.55],
          ["🔥 Very Active", 1.725],
          ["🏋️ Athlete", 1.9],
        ];

        return (
          <>
            <h2 className="text-3xl font-serif mb-8">
              ⚡ Select Activity Level
            </h2>

            <div className="grid gap-3 max-w-md mx-auto">
              {activities.map(([label, value]) => (
                <button
                  key={label}
                  onClick={() => handleSelect("activity", value)}
                  className="py-3 rounded-full border hover:bg-pink-100"
                >
                  {label}
                </button>
              ))}
            </div>
          </>
        );

      case "fatChoice":
        return (
          <>
            <h2 className="text-3xl font-serif mb-8">
              🧮 Want Body Fat % Analysis?
            </h2>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => {
                  setWantsFat("yes");
                  nextStep();
                }}
                className="px-8 py-4 rounded-full border hover:bg-pink-100"
              >
                ✅ Yes
              </button>
              <button
                onClick={() => {
                  setWantsFat("no");
                  calculate();
                }}
                className="px-8 py-4 rounded-full border hover:bg-pink-100"
              >
                ❌ No
              </button>
            </div>
          </>
        );

      case "measurements":
        if (wantsFat !== "yes") return null;

        return (
          <>
            <h2 className="text-3xl font-serif mb-8">
              📐 Enter Measurements (cm)
            </h2>

            <div className="grid gap-4 max-w-md mx-auto">
              <input
                type="number"
                placeholder="📏 Waist"
                onChange={(e) =>
                  setData({ ...data, waist: Number(e.target.value) })
                }
                className="p-4 border rounded-full text-center"
              />
              <input
                type="number"
                placeholder="📏 Neck"
                onChange={(e) =>
                  setData({ ...data, neck: Number(e.target.value) })
                }
                className="p-4 border rounded-full text-center"
              />
              {data.gender === "female" && (
                <input
                  type="number"
                  placeholder="📏 Hip"
                  onChange={(e) =>
                    setData({ ...data, hip: Number(e.target.value) })
                  }
                  className="p-4 border rounded-full text-center"
                />
              )}
            </div>
          </>
        );

      default:
        return null;
    }
  };

if (results) {
  return (
    <section className="w-full bg-[#fff6f5] py-24 px-6 text-center">
      
      <h2 className="text-4xl md:text-5xl font-serif mb-4">
        🎉 Your Health Snapshot
      </h2>

      <p className="text-gray-600 mb-12 max-w-xl mx-auto">
        Here’s a breakdown of your current metabolism and body metrics.
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

        {/* BMI */}
        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition">
          <div className="text-4xl mb-3">⚖️</div>
          <h3 className="text-lg font-semibold mb-2">BMI</h3>
          <p className="text-3xl font-bold text-pink-500">
            {results.bmi.toFixed(2)}
          </p>
          <p className="text-gray-500 mt-2">
            {results.bmiCategory}
          </p>
        </div>

        {/* BMR */}
        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition">
          <div className="text-4xl mb-3">🔥</div>
          <h3 className="text-lg font-semibold mb-2">BMR</h3>
          <p className="text-3xl font-bold text-pink-500">
            {results.bmr.toFixed(0)}
          </p>
          <p className="text-gray-500 mt-2">
            Calories your body burns at rest
          </p>
        </div>

        {/* Daily Calories */}
        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition">
          <div className="text-4xl mb-3">🍽</div>
          <h3 className="text-lg font-semibold mb-2">
            Maintenance Calories
          </h3>
          <p className="text-3xl font-bold text-pink-500">
            {results.dailyCalories.toFixed(0)}
          </p>
          <p className="text-gray-500 mt-2">
            Calories to maintain your weight
          </p>
        </div>

        {/* Show ONLY if fat% exists */}
        {results.bodyFat && (
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition md:col-span-3">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="text-lg font-semibold mb-2">
              Body Composition
            </h3>

            <div className="flex flex-col md:flex-row justify-center gap-8 mt-4">

              <div>
                <p className="text-3xl font-bold text-pink-500">
                  {results.bodyFat.toFixed(2)}%
                </p>
                <p className="text-gray-500">Body Fat %</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-pink-500">
                  {results.whr.toFixed(2)}
                </p>
                <p className="text-gray-500">
                  Waist-to-Height Ratio
                </p>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* Optional CTA Section */}
      <div className="mt-16">
        <button className="px-10 py-4 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold shadow-lg transition"><Link to="/services">          🚀 Get a Custom Fat Loss Plan</Link>
        </button>
      </div>

    </section>
  );
}

  return (
    <section className="w-full bg-[#fff6f5] py-20 px-6 text-center">

      <div className="mb-6 text-sm text-gray-500">
        Step {step + 1} of {steps.length}
      </div>

      {renderStep()}

      {/* Back + Next only for input steps */}
      {(steps[step] === "age" ||
        steps[step] === "height" ||
        steps[step] === "weight" ||
        steps[step] === "measurements") && (
        <div className="mt-12 flex justify-center gap-4">
          {step > 0 && (
            <button
              onClick={prevStep}
              className="px-6 py-3 rounded-full border"
            >
              ⬅ Back
            </button>
          )}

          {steps[step] !== "measurements" && (
            <button
              onClick={nextStep}
              className="px-8 py-3 rounded-full bg-pink-500 text-white hover:bg-pink-600"
            >
              Next ➡
            </button>
          )}

          {steps[step] === "measurements" && (
            <button
              onClick={calculate}
              className="px-8 py-3 rounded-full bg-pink-500 text-white hover:bg-pink-600"
            >
              🔍 Calculate
            </button>
          )}
        </div>
      )}
    </section>
  );
}