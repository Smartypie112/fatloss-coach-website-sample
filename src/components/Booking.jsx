import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Facebook, Chrome } from "lucide-react";

export default function Booking() {
  const { serviceType } = useParams();
  const navigate = useNavigate();

  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [phone, setPhone] = useState("");

  const services = {
    "one-on-one": {
      title: "Private 1:1 Coaching Session",
    },
    "weight-loss-program": {
      title: "12 Week Transformation Program",
    },
    "group-classes": {
      title: "Premium Group Coaching",
    },
  };

  const selectedService = services[serviceType];

  if (!selectedService) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-semibold">Service Not Found</h1>
      </div>
    );
  }

  // 👉 Simulate login success
  const handleLogin = () => {
    setShowPhoneInput(true);
   alert("As its a sample so it won't work.");
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();

    if (phone.length < 10) {
      alert("Enter valid phone number");
      return;
    }

    console.log("Phone:", phone);
   alert("As its a sample so it won't work.")
    navigate(`/payment/${serviceType}`);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-white flex items-center px-6">
      <div className="max-w-md mx-auto w-full bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-pink-100">

        <h1 className="text-3xl font-serif font-semibold mb-3 text-center">
          {showPhoneInput ? "Enter Phone Number" : "Login Required"}
        </h1>

        <p className="text-center text-gray-600 mb-8">
          To purchase <span className="font-medium">{selectedService.title}</span>
        </p>

        {/* LOGIN STEP */}
        {!showPhoneInput && (
          <div className="space-y-5">

            <button
              onClick={handleLogin}
              className="w-full flex items-center justify-center gap-3 border border-gray-200 py-4 rounded-full hover:bg-gray-50 transition"
            >
              <Chrome className="text-gray-700" size={20} />
              Login with Google
            </button>

            <button
              onClick={handleLogin}
              className="w-full flex items-center justify-center gap-3 border border-gray-200 py-4 rounded-full hover:bg-gray-50 transition"
            >
              <Facebook className="text-blue-600" size={20} />
              Login with Facebook
            </button>

          </div>
        )}

        {/* PHONE STEP */}
        {showPhoneInput && (
          <form onSubmit={handlePhoneSubmit} className="space-y-6">

            <input
              type="tel"
              placeholder="Enter Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-200 px-5 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />

            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-4 rounded-full text-lg hover:bg-pink-600 transition shadow-xl shadow-pink-200 font-semibold"
            >
              Continue to Payment
            </button>

          </form>
        )}

      </div>
    </section>
  );
}