"use client";

import React, { useState } from "react";
import Script from "next/script";
import { initiate } from "../action/interaction";
import { useSession } from "next-auth/react";

const PaymentPage = ({username}) => {
  const { data: session } = useSession();

  const [paymentform, setPaymentform] = useState({
    amount: "",
    name: "",
    message: "",
  });

  const handlechange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  const payuser = async () => {
    const amount = parseInt(paymentform.amount) * 100; // Razorpay accepts amount in paise

    try {
      const a = await initiate(amount, username, paymentform);
      const orderid = a.id;

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_ID,
        amount: amount,
        currency: "INR",
        name: "GET ME A CHAI",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: orderid,
        callback_url: "http://localhost:3000/api/razorpay",
        prefill: {
          name: paymentform.name || session?.user.name,
          email: session?.user.email,
          contact: "9000000000", // replace or collect from user
        },
        notes: {
          message: paymentform.message,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (err) {
      console.error("❌ Payment initiation failed:", err);
    }
  };

  return (
    <>
      {/* Razorpay Script */}
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="beforeInteractive"
      />

      {/* Page Layout */}
      <div className="min-h-screen text-white bg-black">
        {/* Banner and Profile */}
        <div className="relative">
          <img
            className="w-full h-auto object-cover"
            src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/18.gif?token-hash=Mh-B5X0fAjX72C_3Ggf-nQMUUe4b4Os4Y0qll01wqq4%3D&token-time=1756944000"
            alt="Banner"
          />

          <div className="w-36 h-36 mx-auto mt-[-2.5rem]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIHapIeCiwS7x6LmNiUMsGcyA3R8dgs-nSdQ&s"
              className="w-full h-full object-cover rounded-b-xl"
              alt="Profile"
            />
          </div>
        </div>

        {/* Creator Info */}
        <div className="text-center pt-10">
          <h1 className="text-3xl font-bold"> {username}</h1>
          <p className="mt-2 text-gray-300">Creating Animated art for VTT's</p>
          <p className="text-sm text-gray-400">
            19,337 members • 101 posts • $20,780/release
          </p>
        </div>

        {/* Payment Section */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 px-4 pb-16">
          {/* Supporters List */}
          <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-center mb-6">Supporters</h2>
            <ul className="space-y-4">
              <li className="bg-gray-700/50 p-4 rounded-lg">
                ANSH DONATED ₹1000 WITH A MESSAGE
              </li>
              <li className="bg-gray-700/50 p-4 rounded-lg">
                ANSH DONATED ₹1000 WITH A MESSAGE
              </li>
            </ul>
          </div>

          {/* Payment Form */}
          <div className="bg-gray-900 border border-blue-500/50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-center mb-2">
              Make a Payment
            </h2>
            <p className="text-center text-gray-400 mb-8">
              Your support keeps the art flowing!
            </p>

            <div className="flex flex-col gap-4">
              {/* Amount Input */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400">
                  ₹
                </span>
                <input
                  type="number"
                  placeholder="500"
                  name="amount"
                  value={paymentform.amount}
                  onChange={handlechange}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg py-3 pl-10 pr-4 text-white text-lg placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Name Input */}
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={paymentform.name}
                onChange={handlechange}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />

              {/* Message Input */}
              <textarea
                placeholder="Optional: leave a nice message..."
                name="message"
                value={paymentform.message}
                onChange={handlechange}
                rows="3"
                className="w-full bg-gray-800 border border-gray-600 rounded-lg py-2 px-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>

              {/* Pay Button */}
              <button
                onClick={payuser}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
