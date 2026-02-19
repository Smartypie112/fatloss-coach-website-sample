import React from "react";
import { useNavigate } from "react-router-dom";

export default function BillPayment() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-white flex flex-col justify-center items-center px-6 text-center">

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-6 tracking-tight mt-10">
        Review Your Bill
      </h1>

      {/* Intro Text */}
      <p className="text-gray-600 text-lg md:text-xl max-w-xl leading-relaxed mb-14">
        Please review your booking charges carefully. Once you confirm, click the 
        <span className="font-semibold text-pink-500"> Pay Now </span>
        button below to complete your payment and secure your booking.
      </p>

      {/* Bill Card */}
      <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-md mb-14 border border-pink-100">

        <h2 className="text-2xl font-semibold mb-6">Billing Summary</h2>

        <div className="space-y-4 text-gray-600 text-lg">

          <div className="flex justify-between">
            <span>Session Package</span>
            <span>₹4,000</span>
          </div>

          <div className="flex justify-between">
            <span>Service Charges</span>
            <span>₹200</span>
          </div>

          <div className="w-full h-px bg-pink-100 my-3"></div>

          <div className="flex justify-between font-semibold text-xl text-gray-800">
            <span>Total Amount</span>
            <span>₹4,200</span>
          </div>

        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-5">

        {/* Pay Button */}
<button
  onClick={() => {
    console.log("Trigger Payment Gateway");
   alert("As its a sample so it won't work.")
    // After payment success
    navigate("/payment-success");
  }}
  className="px-12 py-4 rounded-full bg-pink-500 text-white text-lg hover:bg-pink-600 transition shadow-xl shadow-pink-200 font-semibold"
>
  Pay Now
</button>

      </div>

    </section>
  );
}