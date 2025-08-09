"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";
import { fetchpayment, fetchuser, initiate } from "../action/interaction";
import { useSession } from "next-auth/react";

const PaymentPage = ({ username }) => {
  const { data: session } = useSession();
  const [user, setUser] = useState({});
  const [payment, setPayment] = useState([]); // ✅ must be array

  useEffect(() => {
    const getData = async () => {
      try {
        const u = await fetchuser(username); // ✅ await
        setUser(u);

        const dbpayments = await fetchpayment(username); // ✅ await
        setPayment(dbpayments || []);

        if (dbpayments?.length) {
          console.log("milgya", dbpayments);
        } else {
          console.log("khali hai");
        }
      } catch (err) {
        console.error("❌ Error in getData:", err);
      }
    };

    getData();
  }, [username]);

  const [paymentform, setPaymentform] = useState({
    amount: "",
    name: "",
    message: "",
  });

  const handlechange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  const payuser = async () => {
    const amount = parseInt(paymentform.amount, 10) * 100;

    try {
      const a = await initiate(amount, username, paymentform);
      const orderid = a.id;

      const options = {
        key: user.razorpayId,
        amount: amount,
        currency: "INR",
        name: "GET ME A CHAI",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: orderid,
        callback_url: `http://localhost:3000/api/razorpay`,
        prefill: {
          name: "ANSH",
          email: "anshahuja770@gmail.com",
          contact: "9425118482",
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
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" />

      <div className="min-h-screen text-white bg-black">
        {/* Banner */}
        <div className="relative">
          <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
            <img
              src={user.coverpic}
              alt="Cover"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mx-auto mt-[-1.5rem] sm:mt-[-1.75rem] md:mt-[-2rem] lg:mt-[-2.5rem]">
            <img
              src={user.profilepic}
              className="w-full h-full object-cover rounded-b-xl"
              alt="UNABLE TO LOAD PROFILEPIC"
            />
          </div>
        </div>

        {/* Creator Info */}
        <div className="text-center pt-6 sm:pt-8 md:pt-10 px-4">
          <h1 className="text-2xl sm:text-3xl font-bold">{username}</h1>
          <p className="mt-2 text-gray-300 text-sm sm:text-base">Creating Animated art for VTT's</p>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            19,337 members • 101 posts • $20,780/release
          </p>
        </div>

        {/* Payment Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8 md:mt-10 px-4 sm:px-6 pb-8 sm:pb-12 md:pb-16">
          {/* Supporters List */}
          <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-4 sm:p-6 order-2 lg:order-1">
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">Supporters</h2>
            <ul className="space-y-3 sm:space-y-4">
              {payment.map((p, i) => (
                <li key={i} className="bg-gray-700/50 p-3 sm:p-4 rounded-lg text-sm sm:text-base">
                  {p.name} donated ₹{p.amount} with a message: {p.message}
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Form */}
          <div className="bg-gray-900 border border-blue-500/50 rounded-xl p-4 sm:p-6 md:p-8 order-1 lg:order-2">
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Make a Payment</h2>
            <p className="text-center text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
              Your support keeps the art flowing!
            </p>

            <div className="flex flex-col gap-3 sm:gap-4">
              {/* Amount */}
              <div className="relative">
                <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-base sm:text-lg text-gray-400">₹</span>
                <input
                  type="number"
                  placeholder="500"
                  name="amount"
                  value={paymentform.amount}
                  onChange={handlechange}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg py-2.5 sm:py-3 pl-8 sm:pl-10 pr-3 sm:pr-4 text-white text-base sm:text-lg placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Name */}
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={paymentform.name}
                onChange={handlechange}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg py-2.5 sm:py-3 px-3 sm:px-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm sm:text-base"
              />

              {/* Message */}
              <textarea
                placeholder="Optional: leave a nice message..."
                name="message"
                value={paymentform.message}
                onChange={handlechange}
                rows="3"
                className="w-full bg-gray-800 border border-gray-600 rounded-lg py-2 px-3 sm:px-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm sm:text-base resize-none"
              ></textarea>

              {/* Pay Button */}
              <button
                onClick={payuser}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-colors duration-200 mt-2 sm:mt-0"
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
