"use client"

import React from 'react';
import Script from 'next/script';
import Razorpay from 'razorpay';
import { initiate } from '../action/interaction';

import { useState } from 'react';


const PaymentPage = async (username) => {

    const [paymentform, setPaymentform] = useState({})

    const handlechange=(e)=>{
        setPaymentform({...paymentform,[e.target.name]:e.target.value})
    }

   async function payuser(amount) {
  
        let a =await initiate(amount,username,paymentform)
        let order=a.id;

        var options = {
            "key": process.env.RAZORPAY_ID,
            "amount": amount,
            "currency": "INR",
            "name": "GET ME A CHAI",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": order,
            "callback_url": "http://localhost:3000/api/razorpay",
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9000000000"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };

        var rzp1 = new Razorpay(options);
        rzp1.open();
    }

    return (
        <>


            <div className=" min-h-screen text-white ">
                {/* Banner and Profile Picture Section */}
                <div className="relative ">
                    {/* Banner Image */}
                    <div className="h-auto">
                        <img
                            className="w-full h-full object-cover"
                            src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/18.gif?token-hash=Mh-B5X0fAjX72C_3Ggf-nQMUUe4b4Os4Y0qll01wqq4%3D&token-time=1756944000"
                            alt="Campaign banner"
                        />
                    </div>

                    {/* Profile Picture - Overlapping */}
                    <div className="w-36 h-36 absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIHapIeCiwS7x6LmNiUMsGcyA3R8dgs-nSdQ&s"
                            className="w-full h-full object-cover rounded-b-xl"
                            alt="Profile"
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col items-center pt-24 px-4 text-center">
                    {/* Title */}
                    <h1 className="text-3xl font-bold"></h1>

                    {/* Subtitle & Stats */}
                    <p className="mt-2 text-gray-300">Creating Animated art for VTT's</p>
                    <p className="mt-2 text-sm text-gray-400">
                        19,337 members • 101 posts • $20,780/release
                    </p>
                </div>

                <div className="max-w-5xl mx-auto px-4 pt-10 pb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                        {/* Column 1: Supporters List */}
                        <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl p-6 h-full">
                            <h2 className="text-2xl font-bold text-center mb-6 text-white">
                                Supporters
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-4 bg-gray-700/50 p-4 rounded-lg transform transition-transform duration-300 hover:scale-105">
                                    <p className="font-medium text-gray-200">
                                        <p>ANSH DONATED 1K WITH A MESSAGE </p>
                                    </p>
                                </li>
                                {/* Supporter Item 2 */}
                                <li className="flex items-center gap-4 bg-gray-700/50 p-4 rounded-lg transform transition-transform duration-300 hover:scale-105">
                                    <p className="font-medium text-gray-200">

                                    </p>
                                </li>
                                {/* Supporter Item 3 */}
                                <li className="flex items-center gap-4 bg-gray-700/50 p-4 rounded-lg transform transition-transform duration-300 hover:scale-105">
                                    <p className="font-medium text-gray-200">
                                        <p>  <p>ANSH DONATED 1K WITH A MESSAGE</p></p>
                                    </p>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2: Payment Form */}
                        <div className="bg-gray-900 border border-blue-500/50 rounded-xl p-8 shadow-2xl shadow-blue-500/10 flex flex-col ">
                            <h2 className="text-2xl font-bold text-center mb-2 text-white">
                                Make a Payment
                            </h2>
                            <p className="text-center text-gray-400 mb-8">
                                Your support keeps the art flowing!
                            </p>

                            <div className="flex flex-col gap-4">
                                {/* Amount Input */}
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400">
                                        $
                                    </span>
                                    <input
                                        type="number"
                                        placeholder="5.00"
                                        value={paymentform.name}
                                        name='name'
                                        className="w-full bg-gray-800 border border-gray-600 rounded-lg py-3 pl-10 pr-4 text-white text-lg placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow"
                                    />
                                </div>

                                {/* Message Input */}
                                <textarea
                                    placeholder="Optional: leave a nice message..."
                                    rows="3"
                                    value={paymentform.message}
                                    name='message'
                                    className="w-full bg-gray-800 border border-gray-600 rounded-lg py-2 px-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow"
                                ></textarea>

                                {/* Submit Button */}
                                <button onClick={()=>{payuser(10)}} id="rzp-button1" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                                    Pay Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* --- End of Updated Section --- */}
            </div>


        </>
    );
};

export default PaymentPage;
