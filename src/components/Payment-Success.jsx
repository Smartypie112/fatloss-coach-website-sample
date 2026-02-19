import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-[#fff1f6] via-white to-[#fdf2f8] py-4">

      {/* Background Glow Effects */}
      <div className="absolute w-[500px] h-[500px] bg-pink-200/30 blur-3xl rounded-full top-[-150px] left-[-150px]" />
      <div className="absolute w-[400px] h-[400px] bg-rose-300/20 blur-3xl rounded-full bottom-[-120px] right-[-120px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-lg text-center"
      >

        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-gradient-to-tr from-pink-500 to-rose-400 p-4 rounded-full shadow-lg shadow-pink-200">
            <CheckCircle size={50} className="text-white" />
          </div>
        </motion.div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-serif font-semibold tracking-tight mb-4 bg-gradient-to-r from-pink-600 to-rose-400 bg-clip-text text-transparent">
          Payment Successful
        </h1>

        {/* Subtext */}
        <p className="text-gray-500 text-lg leading-relaxed mb-12">
          Your booking has been confirmed. We’re excited to help you begin your
          journey ✨
        </p>

        {/* Receipt Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="backdrop-blur-xl bg-white/70 border border-white/40 shadow-2xl rounded-3xl p-8 mb-10"
        >

          <h2 className="text-2xl font-semibold mb-6 tracking-wide">
            Payment Receipt
          </h2>

          <div className="space-y-4 text-gray-600 text-lg">

            <div className="flex justify-between">
              <span>Session Package</span>
              <span className="font-medium text-gray-800">₹4,000</span>
            </div>

            <div className="flex justify-between">
              <span>Service Charges</span>
              <span className="font-medium text-gray-800">₹200</span>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent my-4"></div>

            <div className="flex justify-between font-semibold text-xl text-gray-900">
              <span>Total Paid</span>
              <span className="text-pink-600">₹4,200</span>
            </div>

          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-3 text-gray-500 text-lg mb-10"
        >
          <p>✔ Receipt sent to your registered email</p>
          <p>✔ Coach will contact you within 24 hours</p>
        </motion.div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/")}
          className="relative px-14 py-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 text-white text-lg font-semibold shadow-xl hover:shadow-pink-300 transition-all"
        >
          Back to Home
        </motion.button>

      </motion.div>
    </section>
  );
}