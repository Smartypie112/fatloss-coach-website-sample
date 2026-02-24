import React from "react";
import { useNavigate } from "react-router-dom";

export default function UpiPayment() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-white flex flex-col justify-center items-center px-6 text-center">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4 tracking-tight">
        Pay To
      </h1>

      <p className="text-lg text-pink-500 font-semibold mb-2">
        FatFit Coaching
      </p>

      <p className="text-gray-500 mb-8">
        UPI ID: wishwajeet@fam
      </p>

      {/* QR Card */}
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-sm border border-pink-100">

        <img
          src="/IMG_20260224_102456.jpg"   // 👈 put your QR image inside public folder
          alt="UPI QR Code"
          className="w-64 h-64 mx-auto mb-6"
        />

        <p className="text-gray-700 font-semibold text-lg">
          Amount: ₹4,200
        </p>

      </div>

      <span className=" mt-7 inline-block mb-6 px-6 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-semibold tracking-wide">
  Pay To Go Ahead
</span>

    </section>
  );
}